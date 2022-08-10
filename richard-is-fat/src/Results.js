import BasicPagination from './components/BasicPagination'
import MuiCard from './components/MuiCard';

import { Stack, Box } from '@mui/material';

function Results() {

  return (

    <div>

      <Box sx={{mt: 4}}>
        <Stack spacing={5} justifyContent="center" >

          <Stack direction="row" justifyContent="center" spacing={3}>
            <MuiCard />
            <MuiCard />
            <MuiCard />
          </Stack>

          <Stack direction="row" justifyContent="center" spacing={3}>
            <MuiCard />
            <MuiCard />
            <MuiCard />
          </Stack>

        <BasicPagination />

        </Stack>
      </Box>

      

    </div>

        

  );
}

export default Results;
