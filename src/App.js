import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Galery from './pages/Galery'
import ForgotPassword from './pages/ForgotPassword'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import Devices, { devicesLoader } from './pages/Devices'
import Device from './pages/Device'
import ChartDetails from './pages/ChartDetails'
import Register from './pages/Register'
import Login from './pages/Login'
import ErrorPage from './pages/ErrorPage'

// layouts
import RootLayout from './layouts/RootLayout'
import DashboardLayout from './layouts/DashboardLayout'
import AboutLayout from './layouts/AboutLayout'
import DeviceLayout from './layouts/DeviceLayout'
import LoginLayout from './layouts/LoginLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutLayout />}>
        <Route index element={<About />} />
        <Route path='galery' element={<Galery />} />
        <Route path='contact' element={<Contact />} />
      </Route>

      <Route path="login" element={<LoginLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path='forgotpassword' element={<ForgotPassword />} />
      </Route>

      <Route path='profile' element={<Profile />} />
      <Route path="dashboard" element={<DashboardLayout/>}>
        <Route index element={<Dashboard />} />
        <Route 
        path='devices' 
        element={<Devices />}
        loader={devicesLoader}
        />
        <Route path='device/:id' element={<DeviceLayout />}>
          <Route index element={<Device />} />
          <Route path='chartdetails/:id' element={<ChartDetails />} />
        </Route>
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
