import React, { Suspense } from 'react';

const Header = React.lazy(() => import('./header/Header'));
const Body = React.lazy(() => import('./body/Body'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Body />
      </Suspense>
    </div>
  );
}

export default App;
