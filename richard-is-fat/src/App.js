import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import MuiCard from './components/MuiCard';
import Nav from './components/Nav';
import Searchbar from './components/Searchbar'
import './App.css';

import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import About from "./About"
import Results from "./Results"

function App() {

  const handleChange = (value) => {
    console.log(value);
  };

  return (

    <div>
      <div className="banner">

      </div>
      <Nav />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/Results" element={<Results />} />
      </Routes>


    </div>
  );
}

export default App;
