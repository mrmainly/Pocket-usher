import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    img3: {
        marginLeft: 150,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    img2: {
        marginRight: 650,
        marginBottom: '-500px',
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
            marginBottom: 0
        },
    },
    img4: {
        marginTop: '-320px',
        marginRight: 650,
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
            marginTop: 0
        },
    },
    Box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        marginTop: 100,
        [theme.breakpoints.down('sm')]: {
            marginTop: 20
        },
    }
}));

const MorePhoto = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Grid container className={classes.Box}>
                <Grid item className={classes.img2} lg={6} sm={11} md={6} xl={6} xs={11}>
                    <img src={'/image/Group/Group825.png'} style={{ width: '100%' }} alt={''} />
                </Grid>
                <Grid item className={classes.img3} lg={8} sm={11} md={8} xl={8} xs={11}>
                    <img src={'/image/Group/Group823.png'} style={{ width: '100%' }} alt={''} />
                </Grid>
                <Grid item className={classes.img4} lg={6} sm={11} md={6} xl={6} xs={11}>
                    <img src={'/image/Group/Group201.png'} style={{ width: '100%' }} alt={''} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default MorePhoto