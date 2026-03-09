import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BootstrapLayouts from "./sections/BootstrapGrid.tsx";
import BootstrapUtils from "./sections/BootstrapUtils.tsx";
import NonBootstrapLayouts from "./sections/Flex.tsx";

function App() {

    return (<div className="tw:flex tw:flex-col tw:gap-4">
            <h1 className={'container mt-4'}>
                CSS Demo
            </h1>
            <BootstrapLayouts/>
            <NonBootstrapLayouts/>
            <BootstrapUtils/>
        </div>
    )
}

export default App
