import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import TemperatureAndDetail from './components/TemperatureAndDetail/TemperatureAndDetail';

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/:cityname" element={<TemperatureAndDetail />} />
            <Route path="/" element={<TemperatureAndDetail />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
