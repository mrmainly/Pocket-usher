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
    },
    container: {
        marginTop: 100,
        marginBottom: 100
    }
}))

const TeamCardBlog = () => {
    const classes = useStyles()
    const object = [
        {
            img: '/image/Blog/g1.png',
            description: 'Всем нам в жизни приходилось принимать лекарства. Но не все мы четко следуем указаниям.',
            title: 'Как правильно принимать таблетки?',
            link: '#'
        },
        {
            img: '/image/Blog/g2.png',
            description: 'Еще Гиппократ когда-то сказал, что “еда должна быть лекарством, а лекарство — едой”. И не зря.',
            title: 'Правильное питание.',
            link: '#'
        },
        {
            img: '/image/Blog/g3.png',
            description: 'Хронотипы людей людей: “жаворонки”, “совы” и “голуби”. К какому из них Вы относитесь?',
            title: 'Продуктивность мозга.',
            link: '#'
        },
    ]
    return (
        <Container className={classes.container}>
            <Box className={classes.textContainer}>
                <Box>
                    <Typography variant="h4">
                        Полезные статьи про медицину
            </Typography>
                    <Typography className={classes.TypographyColor}>
                        Мы подбираем для вас только полезную информацию и контент.
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