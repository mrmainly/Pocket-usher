import * as React from 'react';
import { Box, TextField, Typography, Container, Grid, Button, TextareaAutosize } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../../components/layout/Layout'
import ButtonCustom from '../../components/ButtonCustom'

const useClasses = makeStyles(theme => ({
    content: {
        display: 'flex',
        margin: '0 auto',
        boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.04)',
        minHeight: 700,
        backgroundColor: 'white',
        padding: 20,
        flexDirection: 'column'
    },
    container: {
        background: 'rgba(234, 251, 255, 0.91)',
        paddingTop: 50,
        paddingBottom: 50
    },
    titleBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    activePart: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    activePart__inputBox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    activePart__inputBox_item: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        width: '80%'
    },
    activePart__cancelButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 56,
        backgroundColor: 'red',
        color: 'white',
        marginLeft: 5,
        '&:focus': {
            outline: "none",
        },
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    activePart__input: {
        width: '100%'
    },
    activePart__ButtonBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 10,
        width: '100%',
        paddingRight: 20,

    },
    activePart__Button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        backgroundColor: '#28d5a3',
        color: 'white',
        marginLeft: 5,
        '&:focus': {
            outline: "none",
        },
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        marginTop: 10,
        width: '100%'
    },
    textArea: {
        width: '100%',
        backgroundColor: '#fafafa',
        '&:focus': {
            outline: "none",
        },
    },
    interactionBox: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start'
    },
    TextAreaBox: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: 20,
        },
    }
}))

const Interactions = () => {
    const classes = useClasses()
    return (
        <Layout>
            <div className={classes.container}>
                <Container>
                    <Box className={classes.content}>
                        <Box className={classes.titleBox}>
                            <Typography variant="h5">Проверка взаимодействия лекарственных средств</Typography>
                            <ButtonCustom text="Вопрос ответ" />
                        </Box>
                        <Grid container className={classes.interactionBox}>
                            <Grid item lg={6} sm={12} md={6} xl={6} xs={12} className={classes.activePart}>
                                <Typography variant="body2">Международное непатентованное наименование (МНН)</Typography>
                                <Box className={classes.activePart__inputBox}>
                                    <Box className={classes.activePart__inputBox_item}>
                                        <TextField id="outlined-basic" label="Введите лекарство" variant="outlined" className={classes.activePart__input} />
                                        <Button variant="contained" className={classes.activePart__cancelButton}>x</Button>
                                    </Box>
                                </Box>
                                <Box className={classes.activePart__ButtonBox}>
                                    <Button variant="contained" className={classes.activePart__Button}>Добавить лекастрва</Button>
                                    <Button variant="contained" className={classes.activePart__Button}>Посмотреть совместимости</Button>
                                </Box>
                            </Grid>
                            <Grid item lg={6} sm={12} md={6} xl={6} xs={12} className={classes.TextAreaBox}>
                                <Typography variant="body2">Взаимодействие</Typography>
                                <TextareaAutosize
                                    rowsMin={25}
                                    aria-label="maximum height"
                                    className={classes.textArea}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>
        </Layout >
    );
};

export default Interactions