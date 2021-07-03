import React from 'react'
import { Box, Grid, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Layout from '../../components/layout/Layout'
import PrivacyPolicy from '../../privacyPolicyList'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    mainContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexDirection: 'column',
        marginTop: 50,
        width: '80%',
        [theme.breakpoints.down('sm')]: {
            width: '90%'
        },
    },
    arrayStyle: {
        marginTop: 10,
        marginLeft: 20
    },
    title: {
        marginLeft: '-25px'
    }
}))

const PrivacyPolicyPage = () => {
    const classes = useStyles()
    return (
        <Layout>
            <Container className={classes.container}>
                <Typography variant="h4" style={{ marginTop: 80, marginBottom: 50 }}> Политика конфиденциальности</Typography>
                <Typography variant="body1">Настоящая Политика конфиденциальности персональной информации (далее — «Политика») действует в отношении всей информации, которую ООО «Мондино технолоджес» и/или его аффилированные лица, включая все лица, входящие в одну группу с ООО «Мондино Технолоджес» (далее — «Карманный доктор»), могут получить о Пользователе во время использования им любого из сайтов, сервисов, служб, программ и продуктов «Карманный доктор» (далее — «Сервисы», «Сервисы «Карманный доктор»).
                    Согласие Пользователя на предоставление персональной информации, данное им в соответствии с настоящей Политикой в рамках отношений с одним из лиц, входящих в «Карманный доктор», распространяется на всех лиц, входящих в «Карманный доктор». Использование Сервисов «Карманный доктор» означает безоговорочное согласие Пользователя с настоящей Политикой и указанными в ней условиями обработки его персональной информации; в случае несогласия с этими условиями Пользователь должен воздержаться от использования Сервисов.
                </Typography>
                {PrivacyPolicy.map((item, index) => (
                    <Box className={classes.mainContent} key={index}>
                        <Typography variant="h5" className={classes.title}>{item.title}</Typography>
                        {item.row.map((itemRow, index) => (
                            <Box key={index}>
                                {itemRow.label ?
                                    <Box>
                                        <Typography variant="h6">{itemRow.label}</Typography>
                                        {
                                            itemRow.arrayData.map((arrayItem, index) => (
                                                <Box key={index} className={classes.arrayStyle}>
                                                    <Typography variant="body1">{arrayItem}</Typography>
                                                </Box>
                                            ))
                                        }
                                    </Box> :
                                    <Typography variant="body1" style={{ marginTop: 10 }}>{itemRow}</Typography>
                                }
                            </Box>
                        ))}
                    </Box>
                ))}
            </Container>
        </Layout>
    )
}

export default PrivacyPolicyPage