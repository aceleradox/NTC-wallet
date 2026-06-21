/**
 * NTC Wallet - Backend Configuration
 * 
 * 3 Modos de operação:
 * 1. LOCAL: Usa localStorage (padrão)
 * 2. BACKEND: Servidor local Node.js
 * 3. CODESPACES: GitHub Codespaces
 */

const NTC_CONFIG = {
  // ===== MODES =====
  // LOCAL: null (default)
  // BACKEND: 'http://localhost:3000'
  // CODESPACES: auto-detecta
  
  BACKEND_URL: (() => {
    // Auto-detecta Codespaces
    if (typeof process !== 'undefined' && process.env.CODESPACE_NAME) {
      return `https://${process.env.CODESPACE_NAME}-3000.preview.app`;
    }
    // Local backend (descomente para usar)
    // return 'http://localhost:3000';
    return null;
  })(),

  DEBUG: false
};

if (NTC_CONFIG.DEBUG) {
  console.log('NTC Config:', NTC_CONFIG);
}

// Helper functions
const NTCBackend = {
  isEnabled: () => !!NTC_CONFIG.BACKEND_URL,
  
  async request(endpoint, method = 'GET', body = null) {
    if (!this.isEnabled()) {
      throw new Error('Backend não configurado');
    }

    const url = `${NTC_CONFIG.BACKEND_URL}/api${endpoint}`;
    const options = {
      method,
      headers: { 'Content-Type': 'application/json' }
    };

    if (body) options.body = JSON.stringify(body);
    if (NTC_CONFIG.DEBUG) console.log(`[NTC] ${method} ${endpoint}`);

    const res = await fetch(url, options);
    return await res.json();
  },

  getUser: (id) => NTCBackend.request(`/user/${id}`),
  createUser: (p) => NTCBackend.request('/user', 'POST', p),
  updateBalance: (id, bal) => NTCBackend.request(`/user/${id}/balance`, 'PATCH', { newBalance: bal }),
  createTransaction: (p) => NTCBackend.request('/transaction', 'POST', p),
  getTransactions: (addr) => NTCBackend.request(`/transactions/${addr}`),
  claimTransaction: (id) => NTCBackend.request(`/transaction/${id}/claim`, 'POST'),
  getHistory: (addr) => NTCBackend.request(`/history/${addr}`)
};

