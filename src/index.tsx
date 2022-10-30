import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Website creation',
          type: 'deposit',
          category: 'Work',
          amount: 5000,
          createdAt: new Date('2022-10-30 09:00:00'),
        },
        {
          id: 2,
          title: 'Notebook',
          type: 'withdraw',
          category: 'Costs work',
          amount: 300,
          createdAt: new Date('2022-10-25 09:00:00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);