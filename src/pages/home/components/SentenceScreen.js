import React from 'react'
import { Container, Box, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${"/image/Group/Group.png"})`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundPosition: 'center',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: 'none',
            height: 800
        },
        marginBottom: 120
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            marginTop: 110,
        },
    },
    contentSeconds: {
        marginLeft: 60,
        textAlign: 'center',
        display: ' flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0
        },
    },
    textBolck: {
        width: '60%',
        marginTop: 20,

    }
}));

const SentenceScreen = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Container >

                <Box container className={classes.content}>
                    <Grid item className={classes.contentSeconds} lg={6} sm={6} md={6} xl={6} xs={10}>
                        <img src={'/image/Element/24.png'} style={{ width: '100%', marginLeft: '-20px' }} alt={''} />
                    </Grid>
                    <Grid item className={classes.contentSeconds} lg={4} sm={6} md={6} xl={4} xs={10}>
                        <Typography variant="h4">Важно контролировать прием лекарств</Typography>
                        <Typography style={{}}>Pocket medic позволит соблюдать регулярный прием лекарств и избегать рисков, которые могут наступить, если выпить неправильную дозу или пропустить прием.</Typography>
                    </Grid>
                </Box>

            </Container>
        </div>
    )
}

export default SentenceScreen