import React, { lazy } from 'react';
import { createRoot } from 'react-dom/client';

const InterfaceUI = lazy(() => import('component/InterfaceUI'));
const App = lazy(() => import('component/App'));

export function createVolumeUI(): void {
    createRoot(
        document.getElementById('ui-interactive') as HTMLDivElement
    ).render(<InterfaceUI />);
}

export function createUI(): void {
    createRoot(document.getElementById('ui') as HTMLDivElement).render(<App />);
}
