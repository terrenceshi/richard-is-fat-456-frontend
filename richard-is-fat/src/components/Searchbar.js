import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';

import Paper from "@mui/material/Paper";

import { Stack } from "@mui/material"

function Searchbar({ placeholder, onChange}) {


    
  return (
    <div>

        <SearchIcon />

        <Input 
            placeholder = {placeholder}
            onChange = {onChange}
        />
        
    </div>
  );
}

export default Searchbar;
