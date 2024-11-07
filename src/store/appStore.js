import { create } from 'zustand';

const useStore = create((set) => ({
  currentPage: 'home',
  
  // Chat state
  messages: [
    { text: 'Welcome to Innov8! How can I help you today?', isBot: true }
  ],
  inputMessage: '',

  // Marketplace state
  marketItems: [
    {
      id: 1,
      name: 'Data Analysis Assistant',
      description: 'Specialized AI agent for data analysis and visualization',
      capabilities: ['Data Processing', 'Statistical Analysis', 'Visualization'],
      price: 50,
      rating: 4.5,
      totalUsers: 1200
    },
    {
      id: 2,
      name: 'Content Writer Pro',
      description: 'AI agent for generating high-quality content and articles',
      capabilities: ['Content Creation', 'SEO Optimization', 'Translation'],
      price: 35,
      rating: 4.2,
      totalUsers: 850
    },
    {
      id: 3,
      name: 'Code Assistant Plus',
      description: 'Advanced AI agent for code generation and debugging',
      capabilities: ['Code Generation', 'Debug Support', 'Code Review'],
      price: 75,
      rating: 4.8,
      totalUsers: 2000
    },
  ],

  // Sentiment Analysis state
  sentimentData: {
    marketTrend: 'Bullish trend detected in the last 24 hours',
    positive: '75%',
    neutral: '15%',
    negative: '10%',
  },

  // Transaction History state
  transactions: [
    { date: '2024-01-20', type: 'Buy', amount: '0.5 ARENA', status: 'Completed' },
    { date: '2024-01-19', type: 'Sell', amount: '1.2 ARENA', status: 'Completed' },
    { date: '2024-01-18', type: 'Buy', amount: '0.8 ARENA', status: 'Pending' },
  ],

  marketSentiment: {
    fearGreedIndex: 65,
    indexCategory: 'Greed',
    lastUpdated: new Date().toISOString(),
    historicalData: [
      { date: '2024-03-20', value: 65 },
      { date: '2024-03-19', value: 60 },
      { date: '2024-03-18', value: 55 },
      { date: '2024-03-17', value: 52 },
      { date: '2024-03-16', value: 48 },
    ],
  },

  // Actions
  setCurrentPage: (page) => set((state) => {
    document.title = `Innov8 - ${page.charAt(0).toUpperCase() + page.slice(1)}`;
    return { currentPage: page };
  }),
  
  // Chat actions
  setInputMessage: (message) => set({ inputMessage: message }),
  addMessage: (message) => set((state) => ({
    messages: [...state.messages, message]
  })),
  
  // Computed actions
  handleSendMessage: () => set((state) => {
    if (state.inputMessage.trim() === '') return state;

    // Add user message
    const newMessages = [
      ...state.messages,
      { text: state.inputMessage, isBot: false }
    ];

    // Simulate bot response
    setTimeout(() => {
      set((state) => ({
        messages: [...state.messages, {
          text: "Thanks for your message! I'm here to help.",
          isBot: true
        }]
      }));
    }, 1000);

    return {
      messages: newMessages,
      inputMessage: ''
    };
  }),

  // Additional actions
  handleTrade: (itemId) => set((state) => {
    const agent = state.marketItems.find(item => item.id === itemId);
    if (!agent) return state;

    // Add new transaction
    const newTransaction = {
      date: new Date().toISOString().split('T')[0],
      type: 'Purchase',
      amount: `${agent.price} CREDITS`,
      agentName: agent.name,
      status: 'Pending'
    };

    return {
      transactions: [newTransaction, ...state.transactions]
    };
  })
}));

export default useStore;
