import { NextResponse } from "next/server";

/**
 * Normaliza um número de telefone para o formato E.164 exigido pela Brevo.
 * Exemplos aceitos: "(85) 99999-9999", "85999999999", "+5585999999999"
 * Retorna null se o número for inválido.
 */
function formatPhone(raw: string): string | null {
  if (!raw) return null;

  // Remove tudo que não for dígito
  const digits = raw.replace(/\D/g, "");

  // Já tem DDI 55 + DDD + número: 12 (fixo) ou 13 (celular) dígitos
  if (digits.startsWith("55") && (digits.length === 12 || digits.length === 13)) {
    return `+${digits}`;
  }

  // Número brasileiro sem DDI: 10 (fixo) ou 11 dígitos (celular)
  if (digits.length === 10 || digits.length === 11) {
    return `+55${digits}`;
  }

  // Número internacional genérico (7-15 dígitos)
  if (digits.length >= 7 && digits.length <= 15) {
    return `+${digits}`;
  }

  return null;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("[brevo] incoming body:", JSON.stringify(body));

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_LIST_ID = process.env.BREVO_LIST_ID || "13";

    console.log("[brevo] BREVO_API_KEY present:", !!BREVO_API_KEY);

    if (!BREVO_API_KEY) {
      console.error("[brevo] missing BREVO_API_KEY");
      return NextResponse.json(
        { error: "BREVO_API_KEY não configurada" },
        { status: 500 }
      );
    }

    // O email pode vir de body.email ou body.email_proponente etc.
    const email = body.email || body.email_proponente;
    if (!email) {
      console.warn("[brevo] missing email in request body");
      return NextResponse.json(
        { error: "Email é obrigatório" },
        { status: 400 }
      );
    }

    const phoneRaw = body.telefone || body.whatsapp || body.mobile_phone || "";
    const formattedPhone = formatPhone(phoneRaw);
    console.log("[brevo] formatted phone:", formattedPhone);

    // Separa o nome completo do proponente/comprador
    const rawName = body.proponente || body.nome || body.name || body.compradorNome || "";
    const fullName = rawName.trim();
    const spaceIdx = fullName.indexOf(" ");
    const firstName = spaceIdx > -1 ? fullName.slice(0, spaceIdx) : fullName;
    const lastName = spaceIdx > -1 ? fullName.slice(spaceIdx + 1) : "";

    // Compilar uma mensagem estruturada e coesa com os dados da Ficha de Proposta
    let compiledMessage = "";
    
    if (body.lote || body.valor) {
      compiledMessage += `📌 PROPOSTA:\n`;
      if (body.lote) compiledMessage += `• Lote: ${body.lote}\n`;
      if (body.valor) compiledMessage += `• Valor da Proposta: ${body.valor}\n`;
      compiledMessage += `\n`;
    }

    compiledMessage += `👤 PROPONENTE:\n`;
    compiledMessage += `• Nome Completo: ${fullName}\n`;
    if (body.nacionalidade) compiledMessage += `• Nacionalidade: ${body.nacionalidade}\n`;
    if (body.estadoCivil) compiledMessage += `• Estado Civil: ${body.estadoCivil}\n`;
    if (body.cpf) compiledMessage += `• CPF: ${body.cpf}\n`;
    if (body.rg) compiledMessage += `• RG: ${body.rg}\n`;
    if (body.profissao) compiledMessage += `• Profissão: ${body.profissao}\n`;
    if (phoneRaw) compiledMessage += `• Telefone: ${phoneRaw}\n`;
    if (email) compiledMessage += `• E-mail: ${email}\n`;
    compiledMessage += `\n`;

    if (body.endereco || body.bairro || body.cidadeUf || body.cep) {
      compiledMessage += `📍 ENDEREÇO:\n`;
      if (body.endereco) compiledMessage += `• Logradouro: ${body.endereco}\n`;
      if (body.bairro) compiledMessage += `• Bairro: ${body.bairro}\n`;
      if (body.cidadeUf) compiledMessage += `• Cidade/UF: ${body.cidadeUf}\n`;
      if (body.cep) compiledMessage += `• CEP: ${body.cep}\n`;
      compiledMessage += `\n`;
    }

    if (body.compradorNome || body.compradorCpf) {
      compiledMessage += `🤝 COMPRADOR ADICIONAL / CÔNJUGE:\n`;
      if (body.compradorNome) compiledMessage += `• Nome: ${body.compradorNome}\n`;
      if (body.compradorCpf) compiledMessage += `• CPF/MF: ${body.compradorCpf}\n`;
      compiledMessage += `\n`;
    }

    if (body.mensagem) {
      compiledMessage += `💬 MENSAGEM ADICIONAL:\n${body.mensagem}\n`;
    }

    compiledMessage = compiledMessage.trim();

    // Mapear apenas os atributos padrão/existentes no Brevo do usuário
    const attributes: Record<string, any> = {
      NOME: firstName,
      SOBRENOME: lastName,
      MENSAGEM: compiledMessage,
    };

    if (formattedPhone) {
      attributes.SMS = formattedPhone;
    }

    // Mapeamento de outros campos comuns se existirem na requisição
    if (body.paisEstado || body.cidadeUf) {
      attributes.PAIS_ESTADO = body.paisEstado || body.cidadeUf;
    }
    if (body.investment_range) {
      attributes.INVESTMENT_RANGE = body.investment_range;
    }
    if (body.main_interest) {
      attributes.MAIN_INTEREST = body.main_interest;
    }
    if (body.region_interest) {
      attributes.REGION_INTEREST = body.region_interest;
    }
    if (body.calendar_date) {
      attributes.CALENDAR_DATE = body.calendar_date;
    }

    const payload = {
      email: email,
      listIds: [Number(BREVO_LIST_ID)],
      updateEnabled: true,
      attributes,
    };

    console.log("[brevo] payload:", JSON.stringify(payload));

    let brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify(payload),
    });

    let responseText = await brevoRes.text();
    console.log("[brevo] response status:", brevoRes.status);
    console.log("[brevo] raw response text:", responseText);

    // Se falhar (erro 400), tentar novamente sem o atributo SMS/telefone para salvar o contato
    if (!brevoRes.ok && brevoRes.status === 400) {
      console.warn("[brevo] first attempt failed. Retrying with safe fallback (no SMS)...");
      
      const safeAttributes: Record<string, any> = {
        NOME: firstName,
        SOBRENOME: lastName,
        MENSAGEM: compiledMessage,
      };

      if (body.paisEstado || body.cidadeUf) {
        safeAttributes.PAIS_ESTADO = body.paisEstado || body.cidadeUf;
      }

      const safePayload = {
        email: email,
        listIds: [Number(BREVO_LIST_ID)],
        updateEnabled: true,
        attributes: safeAttributes,
      };

      console.log("[brevo-retry] safe payload:", JSON.stringify(safePayload));

      brevoRes = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify(safePayload),
      });

      responseText = await brevoRes.text();
      console.log("[brevo-retry] response status:", brevoRes.status);
      console.log("[brevo-retry] raw response text:", responseText);
    }

    let responseJson = null;
    try {
      responseJson = JSON.parse(responseText);
    } catch {
      responseJson = responseText;
    }

    if (!brevoRes.ok) {
      console.error("[brevo] non-ok response from Brevo:", brevoRes.status);
      return NextResponse.json(
        {
          error: true,
          status: brevoRes.status,
          body: responseJson,
        },
        { status: 500 }
      );
    }

    console.log("[brevo] contact created/updated successfully in Brevo", responseJson);
    return NextResponse.json({ success: true, brevo_response: responseJson });
  } catch (err: any) {
    console.error("[brevo] internal error:", err);
    return NextResponse.json(
      { error: "Erro interno", message: err?.message },
      { status: 500 }
    );
  }
}
