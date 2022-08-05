import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import SearchIcon from '@mui/icons-material/Search';

function MuiCard( { header, content}) {
  return (
    <Card>
      {header}
      <CardContent>
        {content}
      </CardContent>
    </Card>
  );
}

export default MuiCard;
