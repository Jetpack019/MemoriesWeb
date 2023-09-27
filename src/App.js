import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import memories from './images/memories.png'

const App = () => {
  return (
    <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
            <Typography variant="h2" align="center"></Typography>
            <img src={memories} alt="" height="60"/>
        </AppBar>
        <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
           
            </Grid>
            <Grid item xs={12} sm={4}>
             
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
