import { Outlet } from "react-router-dom"

//components
import Sidemenu from "../components/Sidemenu"

export default function DashboardLayout() {
    return (
        <div className="dashboard-layout">
            <Sidemenu />
            <Outlet />
        </div>
    )
}