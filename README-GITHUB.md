# 🚀 NTC Wallet no GitHub

## Deploy em 2 Minutos

### Frontend (GitHub Pages)
✅ Automático após push → Acesse em: `https://seu-user.github.io/ntc-wallet/`

### Backend (Codespaces)
```bash
npm install
npm start  # Servidor em http://localhost:3000
```

## 📋 Passo a Passo

1. **Criar repo vazio** no GitHub
2. **Clone em sua máquina** e copie esses arquivos:
   ```
   Correção-de-HTML-e-React.html
   server.js
   database.js
   config.js
   package.json
   README.md
   BACKEND.md
   ```

3. **Push para GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push
   ```

4. **Ativar Pages**
   - Settings → Pages → Source: main → Save

5. **Abrir Codespaces**
   - Code → Codespaces → Create
   - No terminal: `npm install && npm start`

6. **Descomente em config.js**
   ```javascript
   BACKEND_URL: 'http://localhost:3000'
   ```

7. **Abra GitHub Pages URL**
   - Teste transações em tempo real!

---

## 📁 Arquivos Essenciais

```
ntc-wallet/
├── Correção-de-HTML-e-React.html  (frontend - GitHub Pages)
├── server.js                        (backend - Codespaces)
├── database.js
├── config.js
├── package.json
├── README.md
├── BACKEND.md
└── .gitignore
```

## ✅ Resultado

| Item | Status |
|------|--------|
| Frontend | 🟢 GitHub Pages (automático) |
| Backend | 🟢 Codespaces (gratuito) |
| Database | 🟢 JSON (sem dependências nativas) |
| Deploy | 🟢 Contínuo (push → live) |

---

**Tudo pronto! Boa sorte no GitHub! 🎉**
