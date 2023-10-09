import { Outlet,NavLink } from "react-router-dom"

export default function LoginLayout() {
    return (
        <div className="login-layout">
            <h2>Login</h2>
            <div className="navbar">
                <NavLink to="/login/register">Register</NavLink>
                <NavLink to="/login/forgotpassword">Forgot your password? Click to reset it.</NavLink>
            </div>
            <Outlet />
        </div>
    )
}
