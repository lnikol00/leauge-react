import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Tablepage from "./components/Tablepage";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-container">
          <Routes>
            <Route index element={<Home />} />
            <Route path="leauges/:id" element={<Tablepage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
