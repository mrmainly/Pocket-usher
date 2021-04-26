import React from 'react'
import { Container, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: 100,
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 60,
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: 0
        },
        paddingLeft: 30
    },
    Box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContent: {
    }

}))

const MapTeam = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Grid container className={classes.content}>
                <Grid item lg={4} sm={10} md={6} xl={4} xs={10} className={classes.textContent}>
                    <Typography variant="h4">
                        Медицинская<br /> ИТ-компания
                        </Typography>
                    <Typography style={{ marginTop: 10 }}>
                        Наша команда тесно сотрудничает с врачами и фармакологами для того, чтобы делать наш сервис лучше и эффективнее для пользователей. Мы работаем в “Национальном центре медицины” РБ-№1 Республики Саха (Якутия) в г. Якутске, который находится по адресу Сергеляхское шоссе, 4.
                        </Typography>
                </Grid>
                <Grid item lg={6} sm={12} md={6} xl={6} xs={12}>
                    <img src={'/image/Element/Rectangle10.png'} style={{ width: '100%' }} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default MapTeam