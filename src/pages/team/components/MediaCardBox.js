import React from 'react'
import { Container, Typography, Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CardCustom from '../../../components/CardCustom'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        paddingBottom: 100,
        paddingTop: 150
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "left",
        [theme.breakpoints.down('sm')]: {
            marginTop: 20
        },
    }
}))

const MediaCardBox = () => {
    const classes = useStyles()
    const object = [
        {
            img: '/image/Element/Rectangle176.png',
            description: 'Сервис позволит контролировать здоровье благодаря технологиям ИИ и большим данным.',
            title: 'Персонализированная медицина.',
            link: '#'
        },
        {
            img: '/image/Element/Rectangle175.png',
            description: 'В Якутии разрабатывают новый сервис, которого еще нет в других регионах России.',
            title: '“Карманный доктор”',
            link: '#'
        },
        {
            img: '/image/Element/Rectangle174.png',
            description: '«Карманный доктор» поможет выявлять последствия взаимодействия лекарств.',
            title: 'Pocket medic Виктора Белостоцкого.',
            link: '#'
        },
    ]
    return (
        <Container className={classes.container}>
            <Grid lg={4} sm={10} md={4} xl={4} xs={10}>
                <Typography variant="h3">
                    СМИ о нас
            </Typography>
                <Typography >
                    Читаейте о развитии компании и наших проектах в новостях. Будь в курсе происходящего.
            </Typography>
            </Grid>
            <Grid container style={{ marginTop: 50 }}>
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

export default MediaCardBox