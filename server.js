import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Servir tudo que estiver dentro da pasta public/
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

