import React from 'react'
import { Container, Typography, Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CardCustom from '../../../components/CardCustom'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        flexDirection: 'column'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

const DreamTeam = () => {
    const classes = useStyles()

    const object = [
        {
            img: '/image/Element/Frame17.png',
        },
        {
            img: '/image/Element/Group22.png',
        },
        {
            img: '/image/Element/Frame19.png',
        },
        {
            img: '/image/Element/Frame21.png',
        },
        {
            img: '/image/Element/Frame22.png',
        },
        {
            img: '/image/Element/Frame23.png',
        },
        {
            img: '/image/Element/Frame24.png',
        },
        {
            img: '/image/Element/Frame25.png',
        },
    ]

    return (
        <Container className={classes.container}>
            <Grid>
                <Typography variant="h3">Dream Team</Typography>
                <Typography style={{ color: '#8D9AAE' }}>Команда ООО “Мондино Технолоджес”</Typography>
            </Grid>
            <Grid container className={classes.content}>
                {object.map((item, index) => (
                    <Grid item key={index} lg={3} sm={6} md={4} xl={3} xs={12}>
                        <img src={item.img} style={{ width: '100%' }} />
                    </Grid>
                ))
                }
            </Grid>
        </Container>
    )
}

export default DreamTeam