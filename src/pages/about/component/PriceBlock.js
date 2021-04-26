import React from 'react'
import { Container, Typography, Grid, Card, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ButtonCustom from '../../../components/ButtonCustom';
import CardAbout from '../../../components/card/CardAbout'


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        flexDirection: 'column',
        textAlign: 'center',
        paddingBottom: 200
    },
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
}));

const PriceBlock = () => {
    const object = [
        {
            description: ['Акции на мед.услуги %', 'Таблетница', 'Поиск лекарств', 'Нароминание'],
            buttonText: "Скачать сейчас",
            price: '0 руб',
            status: 'Free',
            elem: false
        },
        {
            description: ['Таблетница', 'Поиск лекарств', 'Нароминание', 'Добавить мед друга', 'Больше выгоды на Акции%'],
            buttonText: "Узнать подробнее",
            price: '199 руб.в мес',
            status: 'Подписка',
            elem: true
        },
    ]

    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Typography className={classes.title__yellow}>Доступно в Google play</Typography>
            <Typography variant="h2" className={classes.title}>Установить сейчас</Typography>
            <Grid lg={5} sm={8} md={9} xl={5} xs={9}>
                <Typography >Мы создали мобильное приложение, которое поможет вам найти выгодные предложения на медицинские услуги, а также контролировать прием лекарств.</Typography>
            </Grid>
            <Grid container>
                {object.map((item, index) => (
                    <Grid key={index} item sm={12} md={6} xl={6} xs={12} className={classes.content}>
                        <CardAbout price={item.price} status={item.status} description={item.description} buttonText={item.buttonText} elem={item.elem} />
                    </Grid>
                ))}

            </Grid>
        </Container >
    )
}

export default PriceBlock