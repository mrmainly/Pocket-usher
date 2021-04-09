import React from 'react'
import { Container, Box, Grid, Typography, GridListTileBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${"/image/Element/Rectangle178.png"})`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: 850,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundPosition: 'center',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: 'none',
            height: 800
        },
        marginBottom: 120
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
            marginLeft: 0,
            marginTop: 50
        },
    },
    contentFirst: {
        marginLeft: '-120px',
        textAlign: 'start',
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
    },
    text_color: {
        color: '#575A7B'
    },
    text_block: {
        marginTop: 20
    },
    main_title: {
        marginBottom: 30,
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        },
    }

}));



const GroupTwo = () => {
    const classes = useStyles()
    const object = [
        {
            img: '/image/Element/local_hospital.png',
            description: 'Добавляйте ваши лекарства в личный профиль и выстраивайте курс приема лекарств.',
            title: 'Таблетница'
        },
        {
            img: '/image/Element/search.png',
            description: 'Через сервис можно найти интересующие Вас препараты. Посмотреть цены и аптеки, в которых их приобрести.',
            title: 'Поиск лекарств'
        },
        {
            img: '/image/Element/mdi_notifications.png',
            description: 'Вы сможете принимать лекарства вовремя. Несоблюдение рационального приема лекарств может привести к осложнениям.',
            title: 'Напоминание'
        },
    ]
    return (
        <div className={classes.container}>
            <Container >

                <Box container className={classes.content}>
                    <Grid item className={classes.contentFirst} lg={4} sm={6} md={6} xl={4} xs={10}>
                        <Typography variant="h4" className={classes.main_title}>Принимайте лекарства вовремя в установленной дозе</Typography>
                        {object.map((item, index) => (
                            <Grid key={index} item className={classes.text_block}>
                                <Box style={{ display: 'flex', flexDirection: 'row' }}>
                                    <img src={item.img} style={{ width: 20, height: 20 }} alt={''} />
                                    <Box style={{ marginLeft: 10 }}>
                                        <Typography>{item.title}</Typography>
                                        <Typography className={classes.text_color}>{item.description}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))
                        }
                    </Grid>
                    <Grid item className={classes.contentSeconds} lg={4} sm={6} md={6} xl={4} xs={10}>
                        <img src={'/image/Group/Group801.png'} style={{ width: '100%', }} alt={''} />
                    </Grid>
                </Box>

            </Container>
        </div>
    )
}

export default GroupTwo