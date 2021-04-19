import React, { Fragment, Suspense } from 'react';

const Header = React.lazy(() => import('./header/Header'));
const Body = React.lazy(() => import('./body/Body'));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Body />
      </Suspense>
    </Fragment>
  );
}

export default App;
