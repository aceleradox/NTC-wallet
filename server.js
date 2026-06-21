const express = require('express');
const cors = require('cors');
const { 
  getUser, 
  createUser, 
  updateUserBalance, 
  createTransaction, 
  getUnclaimedTransactions,
  claimTransaction,
  getTransactionHistory 
} = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Logging simples
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// =============== ROTAS DE USUÁRIO ===============

// GET /api/user/:identifier - Busca usuário por username, address ou ID
app.get('/api/user/:identifier', (req, res) => {
  try {
    const user = getUser(req.params.identifier);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.json({ success: true, user });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// POST /api/user - Criar novo usuário
app.post('/api/user', (req, res) => {
  try {
    const { id, username, walletAddress, seed } = req.body;
    if (!id || !username || !walletAddress || !seed) {
      return res.status(400).json({ error: 'Campos obrigatórios: id, username, walletAddress, seed' });
    }

    const user = createUser(id, username, walletAddress, seed);
    if (!user) {
      return res.status(409).json({ error: 'Usuário ou endereço já registrado' });
    }
    res.status(201).json({ success: true, user });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// PATCH /api/user/:id/balance - Atualizar saldo
app.patch('/api/user/:id/balance', (req, res) => {
  try {
    const { newBalance } = req.body;
    if (typeof newBalance !== 'number') {
      return res.status(400).json({ error: 'newBalance deve ser um número' });
    }

    const user = getUser(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    updateUserBalance(req.params.id, newBalance);
    const updated = getUser(req.params.id);
    res.json({ success: true, user: updated });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// =============== ROTAS DE TRANSAÇÕES ===============

// POST /api/transaction - Criar transação
app.post('/api/transaction', (req, res) => {
  try {
    const { txId, fromUser, fromAddress, toAddress, toUser, amount, type } = req.body;
    
    if (!txId || !amount || !type) {
      return res.status(400).json({ error: 'Campos obrigatórios: txId, amount, type' });
    }

    const success = createTransaction(txId, fromUser, fromAddress, toAddress, toUser, amount, type);
    if (!success) {
      return res.status(400).json({ error: 'Falha ao criar transação' });
    }

    res.status(201).json({ success: true, txId });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// GET /api/transactions/:address - Buscar transações pendentes
app.get('/api/transactions/:address', (req, res) => {
  try {
    const transactions = getUnclaimedTransactions(req.params.address);
    res.json({ success: true, transactions });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// POST /api/transaction/:txId/claim - Reivindicar transação
app.post('/api/transaction/:txId/claim', (req, res) => {
  try {
    claimTransaction(req.params.txId);
    res.json({ success: true, message: 'Transação reivindicada' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// GET /api/history/:address - Histórico de transações
app.get('/api/history/:address', (req, res) => {
  try {
    const history = getTransactionHistory(req.params.address);
    res.json({ success: true, history });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// =============== HEALTH CHECK ===============

app.get('/api/health', (req, res) => {
  res.json({ status: 'NTC Wallet Backend ativo', timestamp: new Date().toISOString() });
});

// =============== INICIAR SERVIDOR ===============

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════╗
║  NTC Wallet Backend Server                  ║
║  ✓ Express + SQLite                         ║
║  ✓ Porta: ${PORT}                            ║
║  ✓ API: http://localhost:${PORT}/api/health ║
╚════════════════════════════════════════════╝
  `);
});
