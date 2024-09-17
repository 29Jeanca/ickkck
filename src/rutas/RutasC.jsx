import {Route, BrowserRouter as  Router, Routes } from "react-router-dom"
import Login_Registro from "../paginas/Login_Registro"
import Inicio from "../paginas/Inicio"
import Header from "../componentes/Header"
import AgregarProducto from "../paginas/AgregarProducto"
import Menu from "../paginas/Menu"
const RutasC  = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Login_Registro/>}/>
                
                <Route path="/inicio" element={<Inicio/>}/>

                <Route path="/header" element={<Header/>}/>

                <Route path="/agregar" element={<AgregarProducto/>}/>

                <Route path="/menu" element={<Menu/>}/>
            </Routes>
        </Router>
    )
}
export default RutasC