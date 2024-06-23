import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Doctor from './components/Doctor';
import Doctorreports from './components/Doctorreports';
import Forget from './components/Forget';
import Info from './components/Info';
import Login from './components/Login';
import Patient from './components/Patient';
import RecentOP from './components/RecentOp';
import Settings from './components/Settings';
import SignUp from './components/SignUp';
import Doctorhome from './components/doctorHome';
import DoctorManageAppointments from './components/doctorManageAppointments';
import Patienthome from './components/patienthome';

function App() {
  return (

        <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-credentials" element={<Forget />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path='/patient-home' element={<Patient />} >
          <Route path='' element={<Patienthome />} />
          <Route path='recent-ops' element={<RecentOP />} />
          <Route path='Settings' element={<Settings/>} />
        </Route>
        <Route path='/doctor-home' element={<Doctor />} >
          <Route path='' element={<Doctorhome />} />
          <Route path='lab-reports' element={<Doctorreports/>} />
          <Route path='manage-appointments' element={<DoctorManageAppointments />} />
          <Route path='doctor-info' element={<Info />} />
        </Route>
      </Routes>
    </Router>


  );
}

export default App;
