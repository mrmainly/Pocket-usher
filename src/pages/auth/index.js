import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Container, Grid, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

import ButtonCustom from '../../components/ButtonCustom'

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        marginTop: 75,
        minHeight: 700,
        flexDirection: 'column'
    },
    TabAction: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: 250
    },
    TabItem: {
        width: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        cursor: 'pointer'
    }
}))

const Auth = () => {
    const classes = useStyles()
    const history = useHistory()
    const [tab, setTab] = useState(1)
    return (
        <Layout>
            <Container className={classes.container}>
                <Grid container className={classes.TabAction}>
                    <Grid item className={classes.TabItem} onClick={() => { setTab(1) }}>
                        <img src={'image/Element/images.jpg'} style={{ width: '100%' }} />
                        <Typography variant="body1" style={{ borderBottom: `${tab == 1 ? '2px solid #22A2FF' : 'none'}` }}>Для врачей</Typography>
                    </Grid>
                    <Grid item className={classes.TabItem} onClick={() => { setTab(2) }}>
                        <img src={'image/Element/pngtre.jpg'} style={{ width: '100%' }} />
                        <Typography variant="body1" style={{ borderBottom: `${tab == 2 ? '2px solid #22A2FF' : 'none'}` }}>Для клиник</Typography>
                    </Grid>
                </Grid>
                <Box style={{ marginTop: 30 }}>
                    <ButtonCustom text="Войти" href={`${tab == 1 ? 'https://pocket.mondino.tech' : 'https://clinic.mondino.tech/'}`} />
                </Box>
            </Container>
        </Layout>
    )
}

export default Auth