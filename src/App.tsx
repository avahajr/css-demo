import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import BootstrapGrid from './sections/BootstrapGrid.tsx';
import BootstrapUtils from './sections/BootstrapUtils.tsx';
import Flex from './sections/Flex.tsx';
import Grid from './sections/Grid.tsx';

function BootstrapPage() {
    return (
        <>
            <BootstrapGrid />
            <BootstrapUtils />
        </>
    );
}

function App() {
    return (
        <div className="tw:flex tw:flex-col tw:gap-4">
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="/bootstrap" replace />} />
                <Route path="/bootstrap" element={<BootstrapPage />} />
                <Route path="/flex" element={<Flex />} />
                <Route path="/grid" element={<Grid />} />
            </Routes>
        </div>
    );
}

export default App
