import MuiCard from './components/MuiCard';

import { Stack, Box } from '@mui/material';

function Home() {

  return (

    <div>

      <Box sx={{mt: 4}}>
        <Stack spacing={5} justifyContent="center" >

          <Stack direction="row" justifyContent="center" spacing={3}>
            <MuiCard />
            <MuiCard />
            <MuiCard />
          </Stack>

        </Stack>
      </Box>

    </div>
  );
}

export default Home;
