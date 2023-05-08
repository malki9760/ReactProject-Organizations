import React from 'react';
import '../scssFiles/organization.scss'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MoreIcon from '@mui/icons-material/MoreVert';


export const Organization = ({ item }) => {

  const org = item;
  
  return (
    <div className='organizationDiv'>

      <Box sx={{ minWidth: 275 }} >
        {/* { header of the card } */}
        <AppBar position="static" sx={{ backgroundColor: 'white' }} >
          <Container maxWidth="xl" >
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 0.5 }}>
                <Avatar alt="Logo" src={item.logo} />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  flexGrow: 0.5,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                {org.name}
              </Typography>
              <IconButton
                size="large"
                aria-label="display more actions"
                edge="end"
                color="black"
              >
                <MoreIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>

        {/* { body of the card } */}
        <Card variant="outlined">
          <React.Fragment>
            <CardContent>
              <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                <b>Licenses</b>
              </Typography>
              <div className='tracking'>
                <Typography sx={{ fontSize: 16, mb: 1.5 }} color="text.secondary">
                  <b>Tracking</b>
                </Typography>
                <Typography variant="body2">
                  In use :
                  <t className='redText'>
                    {org.tracking.inUse}
                  </t>
                </Typography>
                <Typography variant="body2">
                  protction : {org.tracking.assigned}
                </Typography>
              </div>
              <div className='protction'>
                <Typography sx={{ fontSize: 16, mb: 1.5 }} color="text.secondary">
                  <b>Protction</b>
                </Typography>
                <Typography variant="body2">
                  In use :
                  <t className='greenText'>
                    {org.protction.inUse}
                  </t>
                </Typography>
                <Typography variant="body2">
                  protction : {org.protction.assigned}

                </Typography>
              </div>
            </CardContent>
            <CardActions>

            </CardActions>
          </React.Fragment>
        </Card>
      </Box>
    </div>
  );
}