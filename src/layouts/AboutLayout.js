import { Outlet,NavLink } from "react-router-dom"

export default function AboutLayout() {
    return (
        <div className="about-layout">
            <h2>About Us</h2>
            <h3>Use links to navigate between info pages like "who we are"</h3>
            <h3>Galery</h3>
            <h3>and Contact</h3>
            <div className="navbar">
                <NavLink to="/about/galery">Galery</NavLink>
                <NavLink to="/about/contact">Contact</NavLink>
            </div>
            <Outlet />
        </div>
    )
}