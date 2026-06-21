# 🚀 NTC Wallet - Notoriety Coin Ecosystem

Sistema de carteira descentralizada cyberpunk com suporte a **Firebase**, **Backend Node.js + SQLite** ou **Modo Local Simulado**.

## ⚡ Quick Start (3 passos)

### 1️⃣ Abrir o Frontend
```bash
# Abra em qualquer navegador:
file:///c:/Users/Power/Desktop/projetos/!ntc\ wallet/Correção-de-HTML-e-React.html

# OU com live server (melhor):
# Instale extensão "Live Server" no VS Code
# Clique direito > "Open with Live Server"
```

### 2️⃣ Iniciar Backend (Opcional - Para persistência real)
```bash
cd "c:\Users\Power\Desktop\projetos\!ntc wallet"
npm install
npm start
```

O backend rodará em `http://localhost:3000`

### 3️⃣ Ativar Backend no Frontend
Edite `config.js`:
```javascript
BACKEND_URL: 'http://localhost:3000' // Descomente esta linha
```

---

## 📋 Arquivos Principais

| Arquivo | Descrição |
|---------|-----------|
| `Correção-de-HTML-e-React.html` | Frontend React completo (modo offline ou Firebase) |
| `server.js` | Backend Express.js |
| `database.js` | Camada SQLite |
| `config.js` | Configuração de conexão |
| `package.json` | Dependências Node.js |

---

## 🎮 3 Modos de Operação

### Modo 1: LOCAL (Padrão - Sem Servidor)
- ✅ Funciona direto no navegador
- ✅ Usa localStorage do browser
- ⚠️ Dados perdidos ao limpar cache

**Como usar:** Abra o HTML e pronto! Simula transações localmente.

### Modo 2: FIREBASE (Nuvem Descentralizada)
- ✅ Sincroniza com Firebase em tempo real
- ✅ Dados persistem na nuvem
- ❌ Requer configuração do Firebase

**Como usar:**
1. Crie projeto em [firebase.google.com](https://firebase.google.com)
2. Copie a config JSON
3. Cole no modal "Setup Firebase" do app

### Modo 3: BACKEND LOCAL (Node.js + SQLite)
- ✅ Servidor local com banco de dados
- ✅ Melhor performance que Firebase
- ✅ Controle total dos dados
- ⚠️ Requer Node.js instalado

**Como usar:**
1. `npm install`
2. `npm start`
3. Descomente `BACKEND_URL` em `config.js`

---

## 🛠️ Funcionalidades Implementadas

### ✅ Carteira (Dashboard)
- [x] Saldo em tempo real
- [x] Histórico de transações
- [x] Envio P2P validado
- [x] Sync com nuvem

### ✅ Farm & Mineração
- [x] Roleta molecular (farm instant)
- [x] Motores de mineração (5min, 30min, 60min)
- [x] Cooldown e recompensas reais
- [x] Desbloqueáveis premium

### ✅ Perfil & Customização
- [x] 5 temas Neon diferentes
- [x] Widgets de redes sociais
- [x] YouTube Music Player integrado
- [x] Agenda semanal
- [x] Notas sticky com cores

### ✅ Comunidade
- [x] Mural de resenhas domésticas (consensual)
- [x] Feed em tempo real
- [x] Reputação por compartilhamento

### ✅ Widget Embed
- [x] Gerador de código embarcável
- [x] Widget de envio/recebimento
- [x] Integração em sites externos
- [x] Prévia em tempo real

### ✅ API & Integração
- [x] postMessage para parceiros externos
- [x] Transações cruzadas (EARN/SPEND)
- [x] Playground de teste integrado
- [x] Documentação de endpoints

---

## 🔐 Segurança

- Frase semente de 12 palavras (mnemônico)
- Endereço único por usuário (NTC0x...)
- Transações validadas em tempo real
- Modo offline seguro (localStorage)
- CORS habilitado para integração externa

---

## 📊 Estrutura de Dados

### Usuário
```javascript
{
  id: "uid-123",
  username: "@acelera_cyber",
  wallet_address: "NTC0x123abc...",
  balance: 25.50,
  seed: "matrix net cyber token neon...",
  unlockedFeatures: { ... },
  history: [ { id, type, amount, date }, ... ]
}
```

### Transação
```javascript
{
  id: "TX-12345",
  from_user: "user1",
  to_user: "user2",
  from_address: "NTC0xAAA",
  to_address: "NTC0xBBB",
  amount: 5.0,
  type: "P2P",
  claimed: false,
  created_at: "2026-06-21T10:30:00Z"
}
```

---

## 🚀 Deployment

### GitHub Pages (Frontend)
```bash
# 1. Copie Correção-de-HTML-e-React.html para seu repo
# 2. Configure GitHub Pages para servir o branch main
# 3. Acesse via https://seu-usuario.github.io/seu-repo/
```

### Vercel/Railway (Backend)
```bash
# Deploy automático do Node.js backend
# Heroku também funciona (adicione Procfile com: node server.js)
```

### Localmente (Dev)
```bash
npm install
npm start
# Servidor em http://localhost:3000
```

---

## 🐛 Troubleshooting

### "Widget Embed não aparece"
- Certifique-se de que o HTML foi salvo com a nova aba
- Recarregue a página (Ctrl+F5)

### "Transações não sincronizam"
- Verifique se Firebase está configurado OU backend rodando
- Abra DevTools (F12) > Console para erros

### "Erro de CORS no backend"
- Backend não está rodando
- Execute `npm start` na pasta do projeto
- Confirme que porta 3000 está disponível

### "SQLite não instala"
- `npm install` requer Python e ferramentas de build
- No Windows: Instale "Visual Studio Build Tools"
- Mac/Linux: Instale python3-dev

---

## 📈 Roadmap Futuro

- [ ] Integração com crypto real (Bitcoin/Ethereum)
- [ ] Marketplace descentralizado
- [ ] Sistema de reputação avançado
- [ ] API GraphQL
- [ ] App Mobile (React Native)
- [ ] Suporte a Web3 Wallets

---

## 📞 Suporte

**Modo Local:** Funciona sem configuração
**Firebase Issues:** Veja console do Firebase
**Backend Issues:** Veja logs do `npm start`

---

**NTC Ecosystem © 2026 | Desenvolvido para AceleraNet**
