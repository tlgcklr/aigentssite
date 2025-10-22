import React from 'react';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '60px 40px',
        maxWidth: '800px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: '800',
          color: '#1a202c',
          marginBottom: '20px'
        }}>
          AIgents
        </h1>
        <p style={{
          fontSize: '24px',
          color: '#4a5568',
          marginBottom: '40px'
        }}>
          Yapay Zeka ile Kurumsal Telefon Görüşmeleri
        </p>
        <p style={{
          fontSize: '18px',
          color: '#718096',
          lineHeight: '1.8'
        }}>
          Yapay zeka destekli telefon görüşme sistemi yakında hizmetinizde olacak.
        </p>
      </div>
    </div>
  );
}

export default App;
