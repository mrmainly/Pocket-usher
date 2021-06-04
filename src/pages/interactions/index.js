import React, { useReducer, useState, useEffect } from 'react';
import { Box, TextField, Typography, Container, Grid, Button, TextareaAutosize } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import axios from 'axios'

import Layout from '../../components/layout/Layout'
import ButtonCustom from '../../components/ButtonCustom'
import SimpleModal from '../../components/SimpleModal'

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
    let [idCounter, setIdCounter] = useState(1)
    const [effect, setEffect] = useState('нету эффектов')
    const [showModal, setShowModal] = useState(false)
    let history = useHistory();
    const [inputs, setInputs] = useState([
        {
            text: 'Введите лекарство',
            value: '',
            id: 0,
            modal: false,
            filteredStates: [],
            close: false,
        },
        {
            text: 'Введите лекарство',
            value: '',
            id: 1,
            modal: false,
            filteredStates: [],
            close: false,
        },
    ])
    const handleText = id => e => {
        let input = [...inputs]
        input[id].value = e.target.value
        setInputs(
            input
        )
    }
    const addInput = async (e) => {
        setIdCounter(idCounter += 1)
        let newInput = inputs.concat({
            text: 'Введите лекарство',
            value: '',
            id: idCounter,
            modal: false,
            filteredStates: [],
            close: true,
        })
        setInputs(newInput)
    }
    const handleDelete = i => {
        setIdCounter(idCounter - 1)
        let removableInput = [
            ...inputs.slice(0, i),
            ...inputs.slice(i + 1)
        ]
        setInputs(removableInput)
    }
    const compareInteractions = () => {
        let getParams = ''
        inputs.map(({ value }) => {
            getParams = getParams + `test_case_1=${value}&`
        })
        console.log(getParams)
        axios
            .get(`https://pocketmedic.online/compare/drugs_mnn?` + getParams)
            .then(response => {
                const compares = response.data
                let result = compares.map((compare) => {
                    if (compare.effect !== 'not effect') {
                        return `${compare.mnn_1} и ${compare.mnn_2} взаимодействуют: ${Object.values(compare.effect)} \n`
                    } else {
                        setShowModal(true)
                    }
                })
                setEffect(result)
                console.log(compares)
            }).catch((error) => {
                console.log('error', error)
            })
    }
    return (
        <Layout>
            <div className={classes.container}>
                <Container>
                    <Box className={classes.content}>
                        <Box className={classes.titleBox}>
                            <Typography variant="h5">Проверка взаимодействия лекарственных средств</Typography>
                            <ButtonCustom text="Вопрос ответ" onClick={() => { history.push("/faq") }} />
                        </Box>
                        <Grid container className={classes.interactionBox}>
                            <Grid item lg={6} sm={12} md={6} xl={6} xs={12} className={classes.activePart}>
                                <Typography variant="body2">Международное непатентованное наименование (МНН)</Typography>
                                <Box className={classes.activePart__inputBox}>
                                    {inputs.map((item, index) => (
                                        <Box className={classes.activePart__inputBox_item} key={index}>
                                            <TextField id="outlined-basic" label="Введите лекарство" variant="outlined" className={classes.activePart__input} value={item.value} onChange={handleText(item.id)} />
                                            <Button variant="contained" className={classes.activePart__cancelButton} onClick={() => { handleDelete(item.id) }}>x</Button>
                                        </Box>
                                    ))}
                                </Box>
                                <Box className={classes.activePart__ButtonBox}>
                                    <Button variant="contained" className={classes.activePart__Button} onClick={() => { addInput() }}>Добавить лекастрва</Button>
                                    <Button variant="contained" className={classes.activePart__Button} onClick={() => { compareInteractions() }}>Посмотреть совместимости</Button>
                                </Box>
                            </Grid>
                            <Grid item lg={6} sm={12} md={6} xl={6} xs={12} className={classes.TextAreaBox}>
                                <Typography variant="body2">Взаимодействие</Typography>
                                <TextareaAutosize
                                    rowsMin={25}
                                    aria-label="maximum height"
                                    className={classes.textArea}
                                    value={effect}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                <Box style={{ margin: '0 auto' }}>
                    <SimpleModal showModal={showModal} setShowModal={setShowModal} />
                </Box>
            </div>
        </Layout >
    );
};

export default Interactions