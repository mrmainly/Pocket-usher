import React from 'react'
import { Container, Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${"/image/Element/Rectangle180.png"})`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: 800,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundPosition: 'center',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: `none`,
            backgroundPosition: 'center',
            marginBottom: 200
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 120
        },

    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            marginTop: 110,
        },
    },
    card: {
        marginTop: 35,
        marginLeft: 15,
        marginRight: 15,
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            color: 'white'
        },
    },
    title: {
        marginTop: '-50px',
        marginBottom: 80,
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            marginBottom: 30,
            color: 'white'
        },
    },
    box_title: {
        [theme.breakpoints.down('sm')]: {
            color: 'white'
        },
    }
}));

const SentenceAbout = () => {
    const classes = useStyles()
    const object = [
        {
            title: 'Безопасно',
            description: 'С помощью сервиса Вы сможете соблюдать правильный прием лекарств, минимизируя побочные эффекты на организм.',
        },
        {
            title: 'Выгодно',
            description: 'Находите все актуальные акции и скидки Вашего города на медицинские услуги в одном приложении.',
        },
        {
            title: 'Точность',
            description: 'Функция “Напоминания” позволит всегда отслеживать приняли Вы вовремя лекарства или нет.',
        },
        {
            title: 'Технологичность',
            description: 'Мы развиваемся для Вас. Используются технологии НТИ, ИИ, большие данные.',
        },
        {
            title: 'Безплатно',
            description: 'Все базовые функции предоставлены для Вас бесплатно.',
        },
        {
            title: 'Развитие',
            description: 'Постоянное обновление и доработка сервиса. Мы не стоим на месте. Наши пользователи - это двигатель роста и развития.',
        },
    ]

    return (
        <div className={classes.container}>
            <Container >

                <Box container className={classes.content}>
                    <Box>
                        <Typography variant="h3" className={classes.title}>Возможности приложения</Typography>
                    </Box>
                    <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', }}>
                        {object.map((item, index) => (
                            <Grid item key={index} className={classes.card} lg={3} sm={12} md={5} xl={3} xs={12}>
                                <img src={'/image/Element/Urgent-mail3.png'} style={{ width: 50, height: 50 }} alt={''} />
                                <Box>
                                    <Typography variant="h5" className={classes.box_title}>{item.title}</Typography>
                                    {item.description}
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

            </Container>
        </div>
    )
}

export default SentenceAbout