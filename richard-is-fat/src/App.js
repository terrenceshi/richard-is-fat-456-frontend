import Nav from './components/Nav';
import Searchbar from './components/Searchbar'

import './App.css';

import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from "./Home"
import About from "./About"
import Results from "./Results"

import { Stack, IconButton } from '@mui/material';
import AccessibleIcon from '@mui/icons-material/Accessible';

function App() {

  return (

    <div>
      <div className="banner">
        {/* <IconButton>
          <AccessibleIcon />
        </IconButton> */}

        <Stack direction="row" justifyContent="flex-end" className = "navbar">
          <Searchbar/>
        </Stack>
        
      </div>

      <div classname="navbar">
        <Nav />
      </div>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Results" element={<Results />} />
      </Routes>


    </div>
  );
}

export default App;
