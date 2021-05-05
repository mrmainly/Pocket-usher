import React from 'react'
import { Box, Typography, Grid, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ButtonCustom from '../../../components/ButtonCustom';
import FormInput from '../../../components/FormInput'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 600,
        color: 'black',
        [theme.breakpoints.down('sm')]: {
            height: 400,
            paddingBottom: 30,
            paddingTop: 30
        },
    },
}));

const FirstBlog = () => {

    const classes = useStyles()
    return (
        <Box className={classes.container}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Typography variant="h6" style={{ color: '#6772E5', textAlign: 'center', paddingBottom: 20 }}>Будь в курсе медицинских трендов вместе с нами</Typography>
                <Typography variant="h2" >Наш блог</Typography>
                <Grid item style={{ textAlign: 'center' }} lg={8} sm={12} md={8} xl={8} xs={12}>
                    <Typography style={{ fontSize: 16, marginTop: 20 }} variant="h6">Здесь мы рассказываем обо всех трендах в медицине, о команде, опыте и в целом про нашу компанию ООО “Мондино Технолоджес”</Typography>
                </Grid>
                <FormInput textDes='Поиск по темам или заголовкам' />
            </div>
        </Box >
    )
}

export default FirstBlog