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
            justifyContent: 'centet',
            textAlign: 'center',
        },
    },
    container: {
        marginTop: 100
    }
}))

const TeamCardBlog = () => {
    const classes = useStyles()
    const object = [
        {
            img: '/image/Blog/r1.png',
            description: 'Наша команда напрямую взаимодействиет и сотрудничает с краудсорсинговым сообществом.',
            title: 'Работаем с врачами и фармакологами.',
            link: '#'
        },
        {
            img: '/image/Blog/r2.png',
            description: 'Первый медицинский продукт компании - онлайн-сервис телемедицины “Mondino”.',
            title: 'Телемедицинский сервис “Mondino”.',
            link: '#'
        },
        {
            img: '/image/Blog/r3.png',
            description: 'Тот же “Pocket medic”, но в виде веб-сайта, где Вы сможете проверить совместимость лекарств.',
            title: 'Web-сайт проекта “Pocket medic”.',
            link: '#'
        },
    ]
    return (
        <Container className={classes.container}>
            <Box className={classes.textContainer}>
                <Box>
                    <Typography variant="h4">
                        Решения ООО “Мондино Технолоджес”
            </Typography>
                    <Typography className={classes.TypographyColor}>
                        Наша компания создает ИТ-решения для медицины.
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