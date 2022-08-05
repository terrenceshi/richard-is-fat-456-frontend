import { Typography } from '@mui/material';
import MuiCard from './components/MuiCard';
import './App.css';
import Searchbar from './components/Searchbar'
import Box from '@mui/material/Box';

import Mui5search from "mui5-search";



function App() {
  // const getHeader = () => {
  //   const handleChange = (value) => {
  //     console.log(value);
  //   };
  //   return (
  //     <Searchbar
  //       placeholder = "Richardo is a chink"
  //       onChange = {(event) => handleChange(event.target.value)}
  //     />
  //   )
    
  // }

  const handleChange = (value) => {
    console.log(value);
  };

  const headerStyles = {
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: '20px',
      paddingRight: '20px',
      height: '65px',
      backgroundColor: '#f5f5f5',
      borderBottom: '1px solid rgba (0, 0, 0, 0.12)',

    },
  }

  return (
    

    <div className="App">
      <Typography variant = "h1">fuck richard</Typography>

      <Box sx = {headerStyles.wrapper}>
        
      </Box>

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
