import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import MuiCard from './components/MuiCard';
import Nav from './components/Nav';
import Searchbar from './components/Searchbar'
import './App.css';

import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function About() {

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    

    <div>
        <Typography variant = "h1">fuck richard</Typography>

    </div>
  );
}

export default About;
