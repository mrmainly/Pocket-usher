import React from 'react'
import { Box, Typography, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: "rgba(234, 251, 255, 0.91)",
        width: '100%',
        height: 600,
        color: 'black'
    },
    btn: {
        color: 'white',
        background: "#22A2FF",
        borderRadius: 3,
        border: 0,
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
}));

const Greeting = () => {

    const classes = useStyles()
    return (
        <Box className={classes.container}>
            <Typography variant="h3" style={{ fontFamily: 'serif', fontWeight: 'bold' }}>POCKET MEDIC</Typography>
            <Grid item style={{ textAlign: 'center' }} lg={3} sm={4} md={3} xl={3} xs={8}>
                <Typography style={{ fontSize: 16, marginTop: 50 }} variant="h6">Персональный медицинский Трекер. Следите за своим здоровьем и лечением ваших близких онлайн</Typography>
            </Grid>
            <Button variant="contained" className={classes.btn}>
                Скачать приложение
</Button>
        </Box >
    )
}

export default Greeting