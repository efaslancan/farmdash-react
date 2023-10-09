import { NavLink } from "react-router-dom"

export default function Sidemenu() {
    const deviceID = 3
    return (
      <div className="sidemenu">
        <div className="navbar">
            <h1>Sidemenu</h1>
            <NavLink to="/dashboard/devices">Your ioT Devices</NavLink>
            <NavLink to={`device/${deviceID}`}>Device no:{deviceID}</NavLink>
        </div>
      </div>
    )
}