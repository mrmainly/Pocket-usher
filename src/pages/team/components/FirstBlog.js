import React from 'react'
import { Container, Grid, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        flexDirection: 'column',
        textAlign: 'center',
        paddingBottom: 200,
        color: 'black',
        paddingTop: 100
    },
    title__blue: {
        color: '#6658EA',
        textTransform: 'uppercase'
    },
    title: {
        marginBottom: 30
    },
    line_box: {
        width: 2,
        height: 65,
        border: "1px solid #DCE0F3",
        [theme.breakpoints.down('sm')]: {
            border: 'none',
            marginTop: 50
        },
    },
    Grid_Card: {
        display: 'flex',
        flexDirection: 'row'
    },
    Grid_Box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        backgroundColor: 'white',
        paddingTop: 40,
        paddingBottom: 40,
        borderRadius: 25,
        width: '90%'
    }
}));


const FirstBlog = () => {
    const classes = useStyles()
    const object = [
        {
            description: 'мед.проекта',
            number: '4',
            show: function () {
                if (window.innerWidth < 889) {
                    return false
                }
            }
        },
        {
            description: 'начало',
            number: '2020',
            show: function () {
                if (window.innerWidth < 889) {
                    return false
                }
            }
        },
        {
            description: 'инвестиций',
            number: '60000$',
            show: function () {
                if (window.innerWidth < 889) {
                    return false
                }
            }
        },
        {
            description: 'человек в команде',
            number: '12',
            show: false, 
        },
    ]
    return (
        <div>
            <Container className={classes.container}>
                <Typography className={classes.title__blue}>Наша миссия</Typography>
                <Typography variant="h3" className={classes.title}>Сделаем ваш менеджмент<br /> лекарств эффективнее.</Typography>
                <Grid container className={classes.Grid_Box}>
                    {object.map((item, index) => (
                        <Grid item className={classes.Grid_Card} >
                            <Box style={{ marginRight: 50, marginLeft: 50 }}>
                                <Typography variant="h4">
                                    {item.number}
                                </Typography>
                                <Typography style={{ color: 'gray' }}>
                                    {item.description}
                                </Typography>
                            </Box>
                            {item.show &&
                                < Box className={classes.line_box}>
                                </Box>
                            }
                        </Grid>
                    ))
                    }
                </Grid>
            </Container>
        </div >
    )
}

export default FirstBlog