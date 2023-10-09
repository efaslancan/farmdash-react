
import { Outlet } from "react-router-dom"

//components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <Navbar />
            </header>
            <main>  
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}