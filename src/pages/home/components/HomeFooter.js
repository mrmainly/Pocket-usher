import React from 'react'
import { Typography, Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ButtonCustom from '../../../components/ButtonCustom'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            marginTop: 20
        },
        textAlign: 'center',
        marginBottom: 50
    },
}));

const HomeFooter = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Grid lg={7} sm={11} md={7} xl={7} xs={11} className={classes.container}>
                <Typography style={{ color: '#71C3FF', fontWeight: 'bold' }}>НАЧНИ СЕГОДНЯ</Typography>
                <Typography variant="h4" style={{ marginTop: 35 }}>Первое медицинское приложение, благодаря которому можно экономить.</Typography>
                <Typography style={{ marginTop: 35, width: '90%' }}>Теперь вы можете пройти обследование на МРТ и КТ у наших партнеров в вечернее и ночное время. Без очереди. Не нужно торопиться утром, чтобы до работы успеть сходить на обследование.</Typography>
                <ButtonCustom text={'Узнать подробнее'} />
            </Grid>
        </Container>
    )
}

export default HomeFooter