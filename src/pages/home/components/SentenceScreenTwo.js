import React from 'react'
import { Container, Box, Grid, GridListTileBar, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${"/Group2.png"})`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: 800,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundPosition: 'center',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: 'none',
            height: 800
        },
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            marginTop: 110,
        },
    },
    contentSeconds: {
        marginLeft: 150,
        textAlign: 'center',
        display: ' flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0
        },
    },
    textBolck: {
        width: '60%',
        marginTop: 20,
    },
    contentFirst: {
        marginLeft: '-120px',
        marginTop: '-300px',
        textAlign: 'center',
        display: ' flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: 0
        },
        [theme.breakpoints.down('xl')]: {
            marginLeft: 0
        },
    }
}));

const SentenceScreenTwo = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Container >

                <Box container className={classes.content}>
                    <Grid item className={classes.contentFirst} lg={4} sm={6} md={6} xl={4} xs={10}>
                        <Typography variant="h4" style={{ marginBottom: 30 }}>Сэкономьте деньги, не выходя из дома и без долгих поисков</Typography>
                        <Typography >Все выгодные предложения на медицинские услуги в телефоне. Все виды медицинских услуг Вашего города собраны в одном приложении. Минимум времени для поиска. Выгодно, удобно и быстро.</Typography>
                    </Grid>
                    <Grid item className={classes.contentSeconds} lg={4} sm={6} md={6} xl={6} xs={10}>
                        <img src={'/Rectangle.png'} style={{ width: '100%', }} />
                    </Grid>
                </Box>

            </Container>
        </div>
    )
}

export default SentenceScreenTwo