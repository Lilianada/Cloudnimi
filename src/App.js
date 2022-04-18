import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/About/About';
import CloudnimiDescription from './components/Cloudnimi/Cloudnimi';
import ContactUs from './components/Contact/Contact';
import Service from './components/Services/Services';
import TechStacks from './components/Technologies/Technologies';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/#what-we-do" element={<Service/>} />
            <Route path="/#what-we-use" element={<TechStacks/>} />
            <Route path="/#who-we-are" element={<AboutUs/>} />
            <Route path="/#cloudnimi" element={<CloudnimiDescription/>} />
            <Route path="/#contact" element={<ContactUs/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
