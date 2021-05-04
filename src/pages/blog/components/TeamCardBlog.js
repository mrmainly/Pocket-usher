import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CardCustom from '../../../components/CardCustom'

const useStyles = makeStyles(() => ({
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

    }
}))

const TeamCardBlog = () => {
    const classes = useStyles()
    const object = [
        {
            img: '/image/Element/201.png',
            description: '“Пока человек чувствует боль - он жив. Пока человек чувствует чужую боль - он человек”.',
            title: 'Founder & Президент - Титов Михаил',
            link: '#'
        },
        {
            img: '/image/Element/127.png',
            description: 'Наша команда работает с врачами и фармаколагами в Национальном центре медицины Республики Саха (Якутия).',
            title: 'Dream team теперь в НЦМ РБ-1.',
            link: '#'
        },
        {
            img: '/image/Element/262.png',
            description: 'Мы прошли самую северную интенсивную акселерацию за 3 месяца.',
            title: 'Demo Day Акселератора B8.',
            link: '#'
        },
    ]
    return (
        <Container>
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

export default TeamCardBlog