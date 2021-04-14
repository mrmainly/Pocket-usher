import React from 'react'
import { Container, Typography, Grid, Card, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ButtonCustom from '../../../components/ButtonCustom';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        flexDirection: 'column',
        textAlign: 'center',
        paddingBottom: 200
    },
    title__yellow: {
        color: '#FFD439'
    },
    title: {
        marginBottom: 30
    },
    btn: {
        color: 'white',
        background: "#22A2FF",
        border: 0,
        height: 48,
        padding: '0 20px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        marginTop: 25,
        borderTopRightRadius: 15,
        borderEndStartRadius: 15,
        '&:focus': {
            outline: "none",
        },
        fontSize: 14,
        marginLeft: 12,
        position: 'absolute',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
}));

const PriceBlock = () => {

    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Typography className={classes.title__yellow}>Доступно в Google play</Typography>
            <Typography variant="h2" className={classes.title}>Установить сейчас</Typography>
            <Grid lg={5} sm={8} md={9} xl={5} xs={9}>
                <Typography >Мы создали мобильное приложение, которое поможет вам найти выгодные предложения на медицинские услуги, а также контролировать прием лекарств.</Typography>
            </Grid>
            <Grid container>
                <Grid item sm={6} md={6} xl={6} xs={12} className={classes.content}>

                    <img src={"./image/Group/Group88.png"} style={{ width: '100%' }} />

                    <Button className={classes.btn} variant="contained">
                        Скачать сейчас
                    </Button>

                </Grid>
                <Grid item sm={6} md={6} xl={6} xs={12} className={classes.content}>
                    <img src={"./image/Group/Group826.png"} style={{ width: '100%' }} />

                    <Button className={classes.btn} variant="contained">
                        Узнать подробнее
                    </Button>

                </Grid>
            </Grid>
        </Container >
    )
}

export default PriceBlock