import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/Home';
import IndoorPlants from './components/Indoor Plants/indoor_plants.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/indoor-plants" element={<IndoorPlants />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
