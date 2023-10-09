import { Outlet } from "react-router-dom"

export default function DeviceLayout() {
    return (
        <div className="device-layout">
            <h2>Your Device Details Here</h2>
            <Outlet />
        </div>
    )
}