import React from 'react'
import { Container, Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${"/image/Element/Rectangle177.png"})`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundPosition: 'center',
        [theme.breakpoints.down('sm')]: {
            height: 600,
            backgroundImage: `none`,
            backgroundPosition: 'center',
            marginTop: 160
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 30,
            marginBottom: 300
        },
        marginBottom: 230
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
        textAlign: 'start',
        display: ' flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            textAlign: 'center',
        },
    },
    textBolck: {
        width: '60%',
        marginTop: 20,
    },
    contentFirst: {
        marginLeft: '-120px',
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

const SentenceAbout = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Container >

                <Box container className={classes.content}>
                    <Grid item className={classes.contentFirst} lg={6} sm={6} md={6} xl={6} xs={10}>
                        <img src={'/image/Group/Group420.png'} style={{ width: '100%', marginLeft: '-20px' }} alt={''} />
                    </Grid>
                    <Grid item className={classes.contentSeconds} lg={4} sm={7} md={6} xl={4} xs={10}>
                        <Typography variant="h4">Все выгодные акции в одном приложении</Typography>
                        <Typography style={{ marginTop: 30 }}>Pocket medic позволит соблюдать регулярный прием лекарств и избегать рисков, которые могут наступить, если выпить неправильную дозу или пропустить прием.</Typography>
                        <Typography style={{ marginTop: 30 }}>Мы тесно сотрудничаем с клиниками и медицинскими учреждениями, чтобы предлагать для Вас выгодные условия.</Typography>
                    </Grid>
                </Box>

            </Container>
        </div>
    )
}

export default SentenceAbout