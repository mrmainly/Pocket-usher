import React from 'react'
import { Container, Box, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${"/image/Element/BackgroundBlue.png"})`,
        backgroundRepeat: 'no-repeat',
        height: 600,
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 120,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 0,
        },
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    card: {
        marginTop: 25,
        marginLeft: 15,
        marginRight: 15,
        display: 'flex',
        flexDirection: 'row',
    },
    title: {
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        },
    }
}));



const Answer = () => {
    const classes = useStyles()
    const object = [
        {
            description: 'отслеживайте свой прием лекарств, благодаря умной Таблетнице. Мы учли все тонкости курсов приема лекарств',
        },
        {
            description: 'связь с врачом через функцию МедТрекер. Врачи знают о динамике вашего лечения. Личный чат с врачом',
        },
        {
            description: 'Вы больше не забудете принять лекарства. Pocket medic всегда напомнит вовремя принять таблетки',
        },
        {
            description: 'станьте МедТрекером для ваших близких и начните следить за их лечением',
        },
        {
            description: 'экономить время и деньги на поиск актуальных акций/скидок на медицинские услуги',
        },
        {
            description: 'персонализированный подход от бота-ассистента Pocket medic, который понятно объяснит как все устроено',
        },
    ]
    return (
        <div className={classes.root}>
            <Container className={classes.content}>
                <Box>
                    <Typography variant="h4" className={classes.title}>С помощью <span style={{ fontFamily: 'serif', fontWeight: 'bold' }}>Pocket medic</span> Вы можете:</Typography>
                </Box>
                <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%' }}>
                    {object.map((item, index) => (
                        <Grid item key={index} className={classes.card} lg={5} sm={12} md={5} xl={5} xs={12}>
                            <img src={'/image/Element/icon-check.png'} style={{ width: 50, height: 50 }} alt={''} />
                            <Box>
                                {item.description}
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default Answer