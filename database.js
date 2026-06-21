const fs = require('fs');
const path = require('path');

// Banco de dados em arquivo JSON (Zero dependências nativas!)
const dbPath = path.join(__dirname, 'ntc-wallet.json');

// Estrutura padrão do banco
const DEFAULT_DB = {
  users: [],
  transactions: [],
  embedCodes: [],
  lastUpdated: new Date().toISOString()
};

// Carrega ou cria o banco de dados
function loadDB() {
  try {
    if (fs.existsSync(dbPath)) {
      const data = fs.readFileSync(dbPath, 'utf-8');
      return JSON.parse(data);
    }
  } catch (e) {
    console.warn('Erro ao carregar DB, usando padrão:', e.message);
  }
  return { ...DEFAULT_DB };
}

// Salva o banco de dados
function saveDB(db) {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    return true;
  } catch (e) {
    console.error('Erro ao salvar DB:', e.message);
    return false;
  }
}

// Inicializa o banco
function initDatabase() {
  if (!fs.existsSync(dbPath)) {
    console.log('[DB] Criando banco de dados em:', dbPath);
    saveDB(DEFAULT_DB);
  } else {
    console.log('[DB] Banco de dados carregado');
  }
}

// =============== FUNÇÕES DE USUÁRIO ===============

function getUser(identifier) {
  const db = loadDB();
  return db.users.find(u => 
    u.id === identifier || 
    u.username === identifier || 
    u.wallet_address === identifier
  );
}

function createUser(id, username, walletAddress, seed) {
  const db = loadDB();
  
  // Verifica duplicatas
  if (db.users.some(u => u.username === username || u.wallet_address === walletAddress)) {
    return null;
  }

  const newUser = {
    id,
    username,
    wallet_address: walletAddress,
    balance: 10.0,
    seed,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  db.users.push(newUser);
  db.lastUpdated = new Date().toISOString();
  saveDB(db);
  return newUser;
}

function updateUserBalance(userId, newBalance) {
  const db = loadDB();
  const user = db.users.find(u => u.id === userId);
  
  if (user) {
    user.balance = newBalance;
    user.updated_at = new Date().toISOString();
    db.lastUpdated = new Date().toISOString();
    saveDB(db);
    return user;
  }
  return null;
}

// =============== FUNÇÕES DE TRANSAÇÃO ===============

function createTransaction(txId, fromUser, fromAddress, toAddress, toUser, amount, type) {
  const db = loadDB();
  
  const newTx = {
    id: txId,
    from_user: fromUser,
    from_address: fromAddress,
    to_address: toAddress,
    to_user: toUser,
    amount,
    type,
    claimed: 0,
    created_at: new Date().toISOString()
  };

  db.transactions.push(newTx);
  db.lastUpdated = new Date().toISOString();
  saveDB(db);
  return true;
}

function getUnclaimedTransactions(toAddress) {
  const db = loadDB();
  return db.transactions.filter(tx => 
    tx.to_address === toAddress && tx.claimed === 0
  );
}

function claimTransaction(txId) {
  const db = loadDB();
  const tx = db.transactions.find(t => t.id === txId);
  
  if (tx) {
    tx.claimed = 1;
    db.lastUpdated = new Date().toISOString();
    saveDB(db);
    return true;
  }
  return false;
}

// =============== FUNÇÕES DE HISTÓRICO ===============

function getTransactionHistory(address) {
  const db = loadDB();
  return db.transactions
    .filter(tx => tx.from_address === address || tx.to_address === address)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 50);
}

initDatabase();

module.exports = {
  getUser,
  createUser,
  updateUserBalance,
  createTransaction,
  getUnclaimedTransactions,
  claimTransaction,
  getTransactionHistory,
  loadDB,
  saveDB
};

