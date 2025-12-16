const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "node_modules", "dlv", "index.js");

try {
  if (!fs.existsSync(filePath)) {
    console.log("patch-dlv: dlv not installed, skipping.");
    process.exit(0);
  }

  const content = fs.readFileSync(filePath, "utf8");

  if (!/export\s+default/.test(content) || /module\.exports/.test(content)) {
    console.log("patch-dlv: no patch required.");
    process.exit(0);
  }

  const patched =
    content.replace(/export\s+default\s+function/, "function") +
    "\n\nmodule.exports = dlv;\n";

  fs.writeFileSync(filePath, patched, "utf8");
  console.log("patch-dlv: patched dlv to CommonJS");
} catch (err) {
  console.error("patch-dlv: error patching dlv", err);
  process.exit(1);
}
