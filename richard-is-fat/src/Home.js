import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import MuiCard from './components/MuiCard';
import Nav from './components/Nav';
import Searchbar from './components/Searchbar'



function Home() {

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    

    <div>
      <Nav />

      <Typography variant = "h1">fuck richard</Typography>

      <Searchbar
        placeholder = "Richardo is a chink"
        onChange = {(event) => handleChange(event.target.value)}
        searchBarWidth = '720px'
      />

      <MuiCard />

    </div>
  );
}

export default App;
