import { createRoot } from 'react-dom/client';
import * as React from 'react';
import { App } from './App';
import './App.css';

const root = createRoot(document.getElementById("root"));
root.render(<App />);