// Esto sirve para cargar las diferentes páginas
import { Outlet, useNavigation } from "react-router-dom"
// Estilos
import '../styles/base.sass'
// Componentes
// Componente Menú
import Menu from "../components/Menu"
// Componente Footer
import Footer from "../components/Footer"
// LIBRERIAS DE REACT
import React from 'react'
// Esta dunción devuelve un layout(pantalla) con los datos acorde al click del ususario
const Layout = () => {
    const navigation = useNavigation()
    return (
        <div>
            {/* Carga el menú */}
            <Menu />
            <main className="Main"
            >
                {navigation.state === "loading" && (<div className="Loading">Loading...</div>)}
                {/* Carga lo que tiene la página */}
            <Outlet />
            </main>
            {/* Carga el footer */}
            <Footer />
        </div>
    )
}

export default Layout