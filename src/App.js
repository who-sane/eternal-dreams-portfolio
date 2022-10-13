import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/';
import contact from './pages/contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
    <Routes>
    <Route path="/" element={<Home />} exact /> 
    <Route path="/signin" element={<contact />} exact />
    </Routes>
  </Router>
  );
}

export default App;
