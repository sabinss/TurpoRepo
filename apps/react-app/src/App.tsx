import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button } from '@repo/ui/button';
import { Admin } from '@repo/ui/admin';
import { Test } from '@repo/ui';
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Button appName="web">Open alert</Button>
            <Admin>Adminpage</Admin>
            <Test />
        </>
    );
}

export default App;
