import { CookiesDialog } from './cookies-dialog';
import * as React from 'react';
import { Router } from './router';

export const App: React.FunctionComponent = () => {
  return (
    <>
      <h1>05-Testing / 01 React</h1>
      <Router />
      <CookiesDialog
        onAgreeClick={() => {
          console.log('Click agree');
        }}
      />
    </>
  );
};
