import ReactDOM from 'react-dom/client';
import HomePage from "./Pages/Home";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route } from "react-router";
import About from './About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
   <BrowserRouter>
    <Routes>
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
    <HomePage />
  </>
  //</React.StrictMode>
);

reportWebVitals();
