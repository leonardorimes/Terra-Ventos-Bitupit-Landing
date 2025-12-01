"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";

interface Project {
  id: number;
  name: string;
  location: string;
  price: string;
  description: string;
  image: string;
  features: string[];
  status: "disponível" | "reservado" | "vendido";
  area: string;
  rooms: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Residencial Mar Azul",
    location: "Jericoacoara, CE",
    price: "R$ 450.000",
    description:
      "Apartamentos de 2 e 3 quartos com vista para o mar, piscina, academia e área de lazer completa.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    features: ["Vista para o mar", "Piscina", "Academia", "Área de lazer"],
    status: "disponível",
    area: "85m²",
    rooms: "2-3 quartos",
  },
  {
    id: 2,
    name: "Condomínio Vento Norte",
    location: "Cumbuco, CE",
    price: "R$ 380.000",
    description:
      "Casas térreas e sobrados em condomínio fechado com segurança 24h e infraestrutura completa.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    features: [
      "Condomínio fechado",
      "Segurança 24h",
      "Área verde",
      "Playground",
    ],
    status: "disponível",
    area: "120m²",
    rooms: "3 quartos",
  },
  {
    id: 3,
    name: "Torre Oceânica",
    location: "Fortaleza, CE",
    price: "R$ 650.000",
    description:
      "Apartamentos de alto padrão na orla de Fortaleza com vista panorâmica do mar e infraestrutura de luxo.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    features: [
      "Alto padrão",
      "Vista panorâmica",
      "Infraestrutura de luxo",
      "Orla",
    ],
    status: "reservado",
    area: "95m²",
    rooms: "2 quartos",
  },
  {
    id: 4,
    name: "Residencial Dunas",
    location: "Canoa Quebrada, CE",
    price: "R$ 320.000",
    description:
      "Apartamentos próximos às dunas com arquitetura sustentável e design moderno.",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
    features: [
      "Próximo às dunas",
      "Arquitetura sustentável",
      "Design moderno",
      "Área de lazer",
    ],
    status: "disponível",
    area: "75m²",
    rooms: "2 quartos",
  },
  {
    id: 5,
    name: "Villa Marítima",
    location: "Pipa, RN",
    price: "R$ 520.000",
    description:
      "Casas de alto padrão em condomínio exclusivo com acesso privado à praia e marina.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
    features: [
      "Alto padrão",
      "Acesso privado à praia",
      "Marina",
      "Condomínio exclusivo",
    ],
    status: "disponível",
    area: "150m²",
    rooms: "4 quartos",
  },
  {
    id: 6,
    name: "Casa do Vento",
    location: "Preá, CE",
    price: "R$ 280.000",
    description:
      "Casas térreas com arquitetura contemporânea, ideais para quem busca tranquilidade e contato com a natureza.",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
    features: [
      "Arquitetura contemporânea",
      "Contato com natureza",
      "Tranquilidade",
      "Jardim privativo",
    ],
    status: "disponível",
    area: "90m²",
    rooms: "2 quartos",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "disponível":
        return "bg-green-100 text-green-800 border-green-200";
      case "reservado":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "vendido":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "disponível":
        return "Disponível";
      case "reservado":
        return "Reservado";
      case "vendido":
        return "Vendido";
      default:
        return status;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 relative overflow-hidden">
      {/* Logo como sombra de fundo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="opacity-6 scale-[2.2]">
          <Logo size="lg" color="default" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-primary-500 mb-6 font-diodrum"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Projetos em destaque
          </motion.h2>
          <motion.p
            className="text-xl text-secondary-500 max-w-3xl mx-auto font-avenir"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Seleção Terra Ventos em áreas de alta valorização.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.5 + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {getStatusText(project.status)}
                  </span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">Ver detalhes</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-primary-500 mb-2 font-diodrum">
                    {project.name}
                  </h3>
                  <p className="text-secondary-500 text-sm mb-3">
                    {project.location}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent-100 text-accent-700 text-xs rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price and Details */}
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    <p>
                      {project.area} • {project.rooms}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary-500">
                      {project.price}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <p className="text-lg text-secondary-500 mb-6 font-avenir">
            Interessado em algum projeto? Entre em contato conosco.
          </p>
          <motion.button
            className="bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 font-avenir"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver todos os projetos
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
