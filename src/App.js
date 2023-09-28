import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import memories from './images/memories.png'
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';

import { styles } from './styles';


const App = () => {
 

  return (
    <Container maxWidth="lg">
    <AppBar className={styles.appBar} position="static" color="inherit" > 
        <Container className={styles.displayContainerFlex}>
          <Typography className={styles.heading} variant="h2" align="center">Memories</Typography>
        <img className={styles.image} src={memories} alt="icon" height="60" width="60"/>
        </Container>
    </AppBar>
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts  />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  </Container>
  )
}

export default App
