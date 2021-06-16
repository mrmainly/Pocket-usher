import React, { useReducer, useState, useEffect } from 'react';
import { Box, TextField, Typography, Container, Grid, Button, TextareaAutosize, colors } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Autocomplete from '@material-ui/lab/Autocomplete';
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
    },
    interactionsContent: {
        display: 'flex',
        width: '100%',
        height: 300,
        border: '1px solid black',
        paddingTop: 10,
        flexDirection: 'column',
        overflow: 'auto',

    },
    InfoBlock: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        width: '100%',
        minHeight: 300,
        marginTop: 10
    },
    InfoBlock_Content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexDirection: 'column'
    },
    InfoBlock_Item: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
        borderTop: '1px solid #b9b9b9',
        width: '100%',
    },
    InfoBLock_label: {
        width: 100,
        marginRight: 5,
    }
}))

const Interactions = () => {
    let history = useHistory();
    const classes = useClasses()

    let [idCounter, setIdCounter] = useState(1)
    const [effect, setEffect] = useState([])
    const [mnn1, setMnn1] = useState('')
    const [mnn2, setMnn2] = useState('')
    const [color, setColor] = useState()
    const [showModal, setShowModal] = useState(false)
    const [AutoCompliteList, setAutoComplite] = useState([])
    const spanCustom = document.createElement('span')
    spanCustom.innerHTML = ""

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
    const defaultProps = {
        options: AutoCompliteList,
        getOptionLabel: (option) => option.title,
    };
    const flatProps = {
        options: AutoCompliteList.map((option) => option.title),
    };
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
                compares.map((compare) => {
                    if (compare.effect !== 'not effect') {
                        // setColor(Object.values(compare.color))
                        // return `${compare.drug_1} и ${compare.drug_2} взаимодействуют: ${Object.values(compare.effect)} \n`
                        // setMnn2(compare.drug_2)
                        // setMnn1(compare.drug_1)
                        // setEffect(Object.values(compare.effect))
                        setEffect(response.data)
                    } else {
                        setShowModal(true)
                    }
                })
            }).catch((error) => {
                console.log('error', error)
            })
    }
    useEffect(() => {
        searchAutoComplite()
    }, [])
    const arrayInfoDrug = [
        {
            label: 'Высокое',
            value: 'Высоко клинически значимый эффект. Избегайте комбинаций; риск взаимодействия перевешивает выгоду.',
            color: 'red'
        },
        {
            label: 'Умеренное',
            value: 'Умеренно клинически значимый эффект. Обычно избегайте комбинаций; использовать его только при особых обстоятельствах.',
            color: 'yellow'
        },
        {
            label: 'Минимальное',
            value: 'Минимально клинически значимый эффект. Минимизировать риск; оценить риск и рассмотреть альтернативный препарат, предпринять шаги, чтобы избежать риска взаимодействия и / или разработать план мониторинга.',
            color: 'green'
        },
        {
            label: 'Неизвестно',
            value: 'Информация о взаимодействии недоступна.',
            color: 'grey'
        },
    ]
    const searchAutoComplite = (value) => {
        let searchGetParameter = value
        axios
            .get(`https://pocketmedic.online/compare/drugs_search?drug=` + searchGetParameter)
            .then(response => {
                const compares = response.data.drug_main_name
                console.log('auto', compares)
                // setAutoComplite(Object.values(compares))
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
                                <Box style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                                    <Typography variant="body2">Взаимодействие:</Typography>
                                </Box>
                                <Box className={classes.interactionsContent}>
                                    {/* <Box>{effect !== 'нету эффектов' ? mnn1 + ' и ' + mnn2 + ' взаимодействуют: ' : ''} {effect !== 'нету эффектов' ? colorBox() : ''}{effect}</Box> */}

                                    {effect ? effect.map((item, index) => (
                                        <div key={index}>
                                            <span style={{ fontWeight: 'bold' }}>{item.drug_1}</span> и <span style={{ fontWeight: 'bold' }}>{item.drug_2}</span> взаимодействуют: <span style={{ backgroundColor: `${Object.values(item.color)}`, width: 15, height: 20, margin: 5, border: '1px solid black', color: `${Object.values(item.color)}` }}>az</span> {Object.values(item.effect)}
                                        </div>
                                    )) : 'нету эффектов'}
                                </Box>
                                <Box className={classes.InfoBlock}>
                                    <Typography variant="body1">Классификация взаимодействия с лекарствами</Typography>
                                    <Typography variant="body2">Эти классификации являются лишь ориентировочными. Уместность взаимодействия конкретных лекарств сложно определить для конкретного человека. Всегда консультируйтесь со своим врачом перед началом или завершением приема каких-либо лекарств. </Typography>
                                    <Box className={classes.InfoBlock_Content}>
                                        {arrayInfoDrug.map((item, index) => (
                                            <Box className={classes.InfoBlock_Item} key={index}>
                                                <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'center' }}><Typography variant="body2" className={classes.InfoBLock_label}>{item.label}</Typography><Box style={{ height: 8, backgroundColor: `${item.color}`, width: 8, marginTop: 7, marginRight: 10 }}></Box></Box>
                                                <Typography variant="boddy2" className={classes.InfoBLock_value}>{item.value}</Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>
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