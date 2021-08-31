import React from 'react';
const RemoteButton = React.lazy(() => import('app1/Button'));

const App = () => {
  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'cyan'
      }}
    >
      <h1>App 2</h1>
      <h2>Test</h2>
      <RemoteButton />
    </div>
  );
};

export default App;
