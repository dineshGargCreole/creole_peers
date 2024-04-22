import React from 'react';
import Layout from './components/layout';
import Global from './assets/styles/globalStyles';

import './App.css';

function App() {
  console.log('helllloo');
  return (
    <div className='App'>
      <Global />
      <Layout>
        <p>This is a App</p>
      </Layout>
    </div>
  );
}

export default App;
