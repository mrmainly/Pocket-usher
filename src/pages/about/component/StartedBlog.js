import React from 'react'
import { Container, Typography, Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ButtonCustom from '../../../components/ButtonCustom'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${"/Elenent_fon.png"})`,
        backgroundRepeat: 'no0repeat',
        backgroundSize: 'cover',
        height: 600,
        marginBottom: 200,
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    img_box: {
        marginTop: 95,
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
            marginBottom: 0
        },
    },
    text_box: {
        marginBottom: '-100px',
        marginTop: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
            marginBottom: 0
        },
    },
    button_box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

}));

const StartedBlog = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Container>
                <Grid container className={classes.content}>
                    <Grid item lg={4} sm={11} md={4} xl={4} xs={11}>
                        <Typography variant="h3"><span style={{ fontFamily: 'serif' }}>Pocket medic</span> - все,что нужно<br /> для здоровья.</Typography>
                        <Box className={classes.text_box}>
                            <Typography>Не знаете где посмотреть акции на платные медицинские услуги и как экономить?</Typography>
                            <Box className={classes.button_box}>
                                <ButtonCustom text={'Установить'} />
                                <ButtonCustom text={'Узнать подробнее'} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={6} sm={11} md={4} xl={6} xs={11} className={classes.img_box}>
                        <img src={'/Group409.png'} alt={''} style={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default StartedBlog