import React from 'react';
import Box from '@mui/material/Box'
import { Button, makeStyles, Grid, AppBar, Toolbar, Typography, CssBaseline, Container, Card, CardContent, CardMedia, CardActions } from '@mui/material';
import { PhotoAlbum } from '@mui/icons-material';
import useStyles from './styles';

const cards = [];
for (let i = 1; i <= 50; i++) {
  cards.push(i)
}

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoAlbum className={classes.photoIcon} />
          <Typography variant="h6">
            Replica PhotoAlbum
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h4" color="primary" align="center" gutterBottom>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </Typography>
            <Typography variant="h6" color="secondary" align="center" gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolorum eum! Repudiandae,
              perferendis adipisci vitae porro aspernatur maxime alias! Facere laborum aut
              necessitatibus doloribus vero adipisci perspiciatis recusandae autem in?
            </Typography>
            <div>
              <Grid container spacing={2} size="small" justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Button 1
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Button 2
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md" className={classes.cardGrid}>
          <Grid container spacing={4}>
            {
              cards.map((item) => (
                <Grid item key={item} item xs={12} md={4} sm={6}>
                  <Card className={classes.card}>
                    <CardMedia
                      image="https://source.unsplash.com/random"
                      title="Random Images"
                      className={classes.cardMedia}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h4">
                        Image heading
                      </Typography>
                      <Typography variant="h6">
                        image content
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">Button 1</Button>
                      <Button size="small" color="primary">Button 2</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default App;
