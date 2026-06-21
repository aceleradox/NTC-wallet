# NTC Wallet Backend - Servidor Leve ✅ CORRIGIDO

Backend Node.js com armazenamento em **JSON** (Zero dependências nativas, funciona sem build tools!).

## 🚀 Instalação Rápida (Agora Funciona!)

```bash
# 1. Limpe instalação anterior (se teve erro)
rmdir /s node_modules
del package-lock.json

# 2. Instalar dependências (RÁPIDO - só Express + CORS)
npm install

# 3. Iniciar servidor
npm start
```

Servidor rodará em `http://localhost:3000`

---

## ✅ O Que Foi Corrigido?

### ❌ Problema Anterior
- `better-sqlite3` requer compilação C++
- Precisa Visual Studio Build Tools no Windows
- Erro: "Could not find any Visual Studio installation"

### ✅ Solução Implementada
- **Removido:** `better-sqlite3` (módulo nativo compilado)
- **Adicionado:** Armazenamento em JSON (JavaScript puro)
- **Resultado:** `npm install` funciona em **segundos** sem erros
- **Compatibilidade:** Windows, Mac, Linux - sem problemas!

---

## 📄 Banco de Dados

Agora usa arquivo JSON em vez de SQLite:

```
ntc-wallet.json  ← Arquivo criado automaticamente
```

**Vantagens:**
- ✅ Zero compilação necessária
- ✅ Estrutura legível (é um JSON normal)
- ✅ Backup fácil
- ✅ Funciona em qualquer lugar
- ✅ Suporta milhares de transações

**Exemplo de conteúdo:**

```json
{
  "users": [
    {
      "id": "user123",
      "username": "acelera_cyber",
      "wallet_address": "NTC0x123abc",
      "balance": 25.50,
      "seed": "matrix net cyber...",
      "created_at": "2026-06-21T10:30:00Z"
    }
  ],
  "transactions": [
    {
      "id": "TX-12345",
      "from_user": "user1",
      "to_user": "user2",
      "from_address": "NTC0xAAA",
      "to_address": "NTC0xBBB",
      "amount": 5.0,
      "type": "P2P",
      "claimed": 0,
      "created_at": "2026-06-21T10:30:00Z"
    }
  ]
}
```

---

## 📡 API Endpoints (Tudo Igual)

### Usuários
- `GET /api/user/:identifier` - Buscar usuário
- `POST /api/user` - Criar novo usuário
- `PATCH /api/user/:id/balance` - Atualizar saldo

### Transações
- `POST /api/transaction` - Criar transação
- `GET /api/transactions/:address` - Transações pendentes
- `POST /api/transaction/:txId/claim` - Reivindicar transação
- `GET /api/history/:address` - Histórico completo

### Saúde
- `GET /api/health` - Status do servidor

---

## 🔌 Integração com Frontend

1. **Modo Local (Padrão)** - Usa localStorage do navegador
2. **Modo Firebase** - Configure no modal do app  
3. **Modo Servidor** - Descomente `BACKEND_URL` em `config.js`

---

## 📝 Exemplos de Requisição

```bash
# Health check
curl http://localhost:3000/api/health

# Criar usuário
curl -X POST http://localhost:3000/api/user \
  -H "Content-Type: application/json" \
  -d '{
    "id": "user123",
    "username": "acelera",
    "walletAddress": "NTC0xABC",
    "seed": "matrix net cyber token..."
  }'

# Buscar usuário
curl http://localhost:3000/api/user/user123

# Atualizar saldo
curl -X PATCH http://localhost:3000/api/user/user123/balance \
  -H "Content-Type: application/json" \
  -d '{ "newBalance": 50.0 }'
```

---

## 📊 Dependências (Apenas 2!)

```json
{
  "express": "^4.18.2",
  "cors": "^2.8.5"
}
```

**Tamanho:** ~15MB com node_modules

---

## 🎯 Performance

- ✅ Rápido para operações normais
- ✅ JSON em arquivo: leitura/escrita otimizadas
- ✅ Suporta centenas de usuários e milhares de transações
- ✅ Sem overhead de banco de dados pesado

---

## 🚀 Deployment (Agora Fácil!)

### Vercel / Railway / Heroku

```bash
# Tudo funciona direto, sem build tools!
npm install
npm start
```

Nenhum erro de compilação! 🎉

### Localmente

```bash
npm install
npm start
# Acesse: http://localhost:3000
```

---

## 📦 Conteúdo da Pasta

```
!ntc wallet/
├── server.js                   ← Backend (rode com: npm start)
├── database.js                 ← Funções do banco JSON
├── config.js                   ← Configuração de conexão
├── package.json                ← Dependências (APENAS 2!)
├── Correção-de-HTML-e-React.html  ← Frontend
├── START.bat                   ← Script Windows
├── ntc-wallet.json             ← Banco de dados (criado automaticamente)
└── README.md                   ← Documentação
```

---

## ✅ Teste Rápido

```bash
npm install
npm start

# Em outro terminal:
curl http://localhost:3000/api/health
# Resposta: {"status":"NTC Wallet Backend ativo","timestamp":"..."}
```

---

## 🔄 Migração (Se Tinha SQLite)

Se tinha dados em SQLite antes:

1. Exporte dados como JSON
2. Cole em `ntc-wallet.json`
3. Reinicie servidor
4. Pronto!

---

## 📞 Troubleshooting

| Problema | Solução |
|----------|---------|
| `npm ERR! code 1` | Delete `node_modules` e `package-lock.json`, rode `npm install` novamente |
| Porta 3000 em uso | `npm start -- --port 3001` |
| Arquivo JSON corrompido | Delete `ntc-wallet.json`, será recriado automaticamente |
| Backend não conecta no app | Confirme `BACKEND_URL` em `config.js` |

---

**✅ Agora funciona perfeito em qualquer lugar! | NTC Ecosystem © 2026**
