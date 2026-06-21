# NTC Wallet - GitHub Setup

## 🚀 Deploy Rápido (3 passos)

### 1️⃣ GitHub Pages (Frontend - Automático)

```bash
# Push pro GitHub e o HTML abre em:
https://seu-usuario.github.io/ntc-wallet/Correção-de-HTML-e-React.html
```

**Configurar:**
1. Vá em `Settings` → `Pages`
2. Source: `main branch`
3. Pronto! (3-5 min para ativar)

---

### 2️⃣ GitHub Codespaces (Backend - Rodar Servidor)

```bash
# No Codespaces:
npm install
npm start

# Acessa em: http://localhost:3000
```

**Abrir Codespaces:**
1. Clique em `Code` no repo
2. Clique em `Codespaces`
3. Clique em `Create codespace on main`
4. No terminal: `npm start`

---

### 3️⃣ Integrar Frontend + Backend

No arquivo `config.js`:

```javascript
// Quando rodar no Codespaces, backend está em:
// https://seu-usuario-codespace-xyz.preview.app:3000

// Descomente:
BACKEND_URL: 'http://localhost:3000' // Local
// ou
BACKEND_URL: process.env.CODESPACE_NAME 
  ? `https://${process.env.CODESPACE_NAME}-3000.preview.app`
  : null
```

---

## 📁 Estrutura do Repo

```
ntc-wallet/
├── Correção-de-HTML-e-React.html  ← GitHub Pages serve isso
├── server.js                        ← Backend (Codespaces roda)
├── database.js                      ← Banco de dados
├── config.js                        ← Configuração
├── package.json                     ← npm install
├── README.md                        ← Documentação
├── BACKEND.md                       ← Detalhes backend
└── .gitignore                       ← Ignora node_modules, etc
```

---

## ⚡ Comandos Git

```bash
# Primeira vez:
git init
git add .
git commit -m "Initial commit: NTC Wallet"
git branch -M main
git remote add origin https://github.com/seu-usuario/ntc-wallet.git
git push -u origin main

# Depois:
git add .
git commit -m "sua mensagem"
git push
```

---

## 🔗 Resultado Final

| Componente | URL |
|-----------|-----|
| Frontend | `https://seu-usuario.github.io/ntc-wallet/Correção-de-HTML-e-React.html` |
| Backend | No Codespaces: `http://localhost:3000` |
| API Docs | `http://localhost:3000/api/health` |

---

## ✅ Checklist

- [ ] Criar repo no GitHub
- [ ] `git push` o projeto
- [ ] Ativar Pages (Settings → Pages)
- [ ] Abrir Codespaces
- [ ] `npm install` no Codespaces
- [ ] `npm start`
- [ ] Descomente `BACKEND_URL` em config.js
- [ ] Abra GitHub Pages URL
- [ ] Teste transações!

---

**Tudo pronto para GitHub + Pages + Codespaces! 🎉**
