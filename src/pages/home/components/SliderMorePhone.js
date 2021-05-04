import React, { useState, useEffect } from 'react'
import { Container, Grid, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CaruselCustom from '../../../components/Carusel';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${"/image/Element/fonSlider.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden'
    },
    title_block: {
        paddingTop: 250,
        textAlign: 'center',
        width: '50%',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    sliderBlock: {
        margin: '0 auto',
        height: 1600
    }
}));


const SliderMorePhone = ({ title }) => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Box className={classes.sliderBlock}>
                <Grid className={classes.title_block}>
                    <Typography variant="h3"> {title}</Typography>
                </Grid>
                <div>
                    <CaruselCustom />
                </div>
            </Box>
        </div >
    )
}

export default SliderMorePhone