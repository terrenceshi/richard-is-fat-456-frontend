import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';

import Paper from "@mui/material/Paper";

import Mui5search from "mui5-search";




function Searchbar({ placeholder, onChange}) {


    
  return (
    <div>

        <SearchIcon />

        <Paper>
            <Input 
                placeholder = {placeholder}
                onChange = {onChange}
            />

        </Paper>
        
    </div>
  );
}

export default Searchbar;
