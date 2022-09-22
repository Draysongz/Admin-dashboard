import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import Blank from './pages/Blank'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import Dashboard from './pages/Dashboard'

function App() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<MainLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='orders' element= {<Blank/>} />
        <Route path='products' elemetn= {<Blank/>} />
        <Route path='customers' element= {<Blank/>} />
        <Route path='settingss' element= {<Blank/>} />
        <Route path='stats' element= {<Blank/>} />
        </Route>
        </Routes>
           
        </BrowserRouter>
    )
}

export default App
