import React from 'react'
import { Box, Container, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    TypographyColor: {
        color: 'gray'
    },
    Container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 150,
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            marginBottom: '-120px'
        },
    },
    con: {
        backgroundImage: `url(${"/image/Group/Group421.png"})`,
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundPosition: 'center',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: 'none',
            height: 800,
            flexDirection: 'column',
            marginTop: '-50px',
        },
        marginBottom: 120,
        flexDirection: 'row',
    },
    contentSeconds: {
        display: ' flex',
        flexDirection: 'column',
        textAlign: 'left',
        marginTop: '-60px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            marginTop: 0,
        },
    },
    contentFirst: {
        marginLeft: '-60px',
        display: ' flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0
        },
    },
    TypographyBlue: {
        color: '#6658EA',
        fontSize: 12,
    },
}))

const Events = () => {
    const classes = useStyles()
    Date.prototype.yyyymmdd = function () {
        let mm = this.getMonth() + 1;
        let dd = this.getDate();

        return [this.getFullYear() + "-",
        (mm > 9 ? '' : '0') + mm + "-",
        (dd > 9 ? '' : '0') + dd
        ].join('');
    };
    let FullDate = new Date().yyyymmdd()
    return (
        <Container className={classes.Container}>
            <Box>
                <Typography variant="h4">
                    Актуальное. Последние события
            </Typography>
                <Typography className={classes.TypographyColor}>
                    Главное событие прошедшего 2020 года
            </Typography>
            </Box>
            <Box className={classes.con}>

                <Grid item className={classes.contentFirst} lg={7} sm={7} md={7} xl={7} xs={12}>
                    <img src={'/image/Element/27.png'} style={{ width: '100%', }} alt={''} />
                </Grid>
                <Grid item className={classes.contentSeconds} lg={4} sm={6} md={6} xl={4} xs={10}>
                    <Typography className={classes.TypographyBlue}>Первые инвестиции</Typography>
                    <Typography variant="h4">“Доверяем решительным”-B8.</Typography>
                    <Typography >Мы выпускники 4 батча самого северного акселератора инновационных проектов. В рамках интенсивного обучения разработали мобильное приложение - Pocket medic.</Typography>
                    <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <img src={'/image/Element/Ellipse138.png'} style={{ width: 40, height: 40, marginRight: 10 }} alt={''} />
                        <Typography>
                            Pocket medic<br />{FullDate}
                        </Typography>
                    </Box>
                </Grid>

            </Box>
        </Container>
    )
}

export default Events