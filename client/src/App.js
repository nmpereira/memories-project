import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import Posts from './componenets/Posts/Posts';
import Form from './componenets/Form/Form';
import memories from './images/memories.png'
import useStyles from './styles'

const App =() => {
    const classes = useStyles();
    return (
        <Container maxWidth ="lg">
            <AppBar className={classes.appBar} posistion = "static" color= "inherit">
                <Typography className={classes.heading} variant = "h2" align= "center">Memories</Typography>
                <img className={classes.img} src = {memories} alt="memories"  height= "60"/>




            </AppBar>
            <grow in>
                <Container>
                    <Grid contrainer justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm= {7}>
                            <Posts />



                        </Grid>
                        <Grid item xs={12} sm= {4}>
                        <Form />

                        </Grid>

                    </Grid>



                </Container>


            </grow>


        </Container>



    );


}

export default App;