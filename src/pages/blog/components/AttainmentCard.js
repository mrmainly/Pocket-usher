import React from 'react'
import { Grid, Container, Box, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CardCustom from '../../../components/CardCustom'

const useStyles = makeStyles((theme) => ({
    title__yellow: {
        color: '#FFD439'
    },
    title: {
        marginBottom: 30
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TypographyColor: {
        color: 'gray'
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
        backgroundColor: ' #6658EA'
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            textAlign: 'center',
        },
    }
}))

const TeamCardBlog = () => {
    const classes = useStyles()
    const object = [
        {
            img: '/image/Blog/Rectangl.svg',
            description: 'Онлайн анкетирование, которое позволяет выявлять рак на ранних стадиях.',
            title: 'Ранняя диагностика рака - “Онкопоиск”.',
            link: '#'
        },
        {
            img: '/image/Blog/Rectangle4.png',
            description: 'Беспрецедентный по масштабам интенсив по акселерации команд в области ИИ.',
            title: 'Победители Архипелаг 20.35.',
            link: '#'
        },
        {
            img: '/image/Blog/Rectangle17.png',
            description: '“Pocket medic” прошел акселерационную программу АСИ для технологических проектов.',
            title: 'Топ-100 лидеров развития технологий.',
            link: '#'
        },
    ]
    return (
        <Container>
            <Box className={classes.textContainer}>
                <Box>
                    <Typography variant="h4">
                        Наш опыт и достижения
            </Typography>
                    <Typography className={classes.TypographyColor}>
                        Реальный опыт и почему мы развиваемся в ИТ-медицине.
            </Typography>
                </Box>
                <Button className={classes.btn} variant="contained">Смотреть все</Button>
            </Box>
            <Grid container >
                {object.map((item, index) => (
                    <Grid item key={index} lg={4} sm={12} md={4} xl={4} xs={12} className={classes.content}>
                        <CardCustom img={item.img} title={item.title} description={item.description} link={item.link} />
                    </Grid>
                ))
                }
            </Grid>
        </Container>
    )
}

export default TeamCardBlog