import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ApplyLeave from './components/ApplyLeave';
import BookOP from './components/BookOP';
import Doctor from './components/Doctor';
import Forget from './components/Forget';
import Info from './components/Info';
import Login from './components/Login';
import MedicineBillView from './components/MedicineBillView';
import Ops from './components/Ops';
import Patient from './components/Patient';
import Profile from './components/Profile';
import RecentAppointment from './components/RecentAppointment';
import RecentOP from './components/RecentOp';
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
          <Route path='recent-ops' element={<RecentOP />} >
            
          </Route>
          <Route path='recent-ops/appointment/' element={<RecentAppointment/>} />
          <Route path='recent-ops/appointment/prescription' element={<MedicineBillView />} />
          <Route path='Profile' element={<Profile/>} />
          <Route path='book-op' element={<BookOP />} />
        </Route>
        <Route path='/doctor-home' element={<Doctor />} >
          <Route path='' element={<Doctorhome />} />
          <Route path='apply-for-leave' element={<ApplyLeave/>} />
          <Route path='manage-appointments' element={<DoctorManageAppointments />} />
          <Route path='ops' element={<Ops />} />
          <Route path='doctor-info' element={<Info />} />
        </Route>
      </Routes>
    </Router>


  );
}

export default App;
