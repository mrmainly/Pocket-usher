import React from 'react'
import { Container, Typography, Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CardTeam from '../../../components/card/CardTeam'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        flexDirection: 'column',
        marginTop: 70
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}))

const DreamTeam = () => {
    const classes = useStyles()

    const object = [
        {
            img: '/image/Element/TeamPhoto1.png',
            title: 'Титов Михаил',
            description: 'Founder, CVO'
        },
        {
            img: '/image/Element/TeamPhoto2.png',
            title: 'Белостоцкий-Капгер Авигдор',
            description: 'CEO, team lead'
        },
        {
            img: '/image/Element/TeamPhoto3.png',
            title: 'Айталина Лукавина',
            description: 'Project manager, marketer'
        },
        {
            img: '/image/Element/TeamPhoto4.png',
            title: 'Виктор Павлов',
            description: 'CTO, Full stack developer'
        },
        {
            img: '/image/Element/TeamPhoto5.png',
            title: 'Виктория Стасюлевич',
            description: 'Chief Design Officer'
        },
        {
            img: '/image/Element/TeamPhoto6.png',
            title: 'Ульяна Семенова',
            description: 'SEO, SMM'
        },
        {
            img: '/image/Element/TeamPhoto7.png',
            title: 'Андрей Аммосов',
            description: 'Frontend developer'
        },
        {
            img: '/image/Element/TeamPhoto8.png',
            title: 'Слава Скосырский',
            description: 'Frontend developer'
        },
    ]

    return (
        <Container className={classes.container}>
            <Grid >
                <Typography variant="h3" style={{ color: 'black', fontFamily: 'serif', fontWeight: 'bold' }}>Dream Team</Typography>
                <Typography style={{ color: '#8D9AAE' }}>Команда ООО “Мондино Технолоджес”</Typography>
            </Grid>
            <Grid container className={classes.content}>
                {object.map((item, index) => (
                    <Grid item key={index} lg={3} sm={6} md={4} xl={3} xs={12}>
                        <CardTeam img={item.img} title={item.title} description={item.description} />
                    </Grid>
                ))
                }
            </Grid>
        </Container>
    )
}

export default DreamTeam