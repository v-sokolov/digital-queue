import React from 'react';
import { createRoot } from 'react-dom/client';
import { Root } from './presentation/Root';

const root = document.getElementById('root');

if (root === null) {
  throw new Error('No root component found.');
}

createRoot(root).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
