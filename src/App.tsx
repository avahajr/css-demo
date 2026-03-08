import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BootstrapGrid from "./sections/BootstrapGrid.tsx";
import BootstrapUtils from "./sections/BootstrapUtils.tsx";
import Flex from "./sections/Flex.tsx";

function App() {

    return (<div className="tw:flex tw:flex-col tw:gap-4">
            <h1 className={'container mt-4'}>
                CSS Demo
            </h1>
            <BootstrapGrid/>
            <BootstrapUtils/>
            <Flex/>
        </div>
    )
}

export default App
