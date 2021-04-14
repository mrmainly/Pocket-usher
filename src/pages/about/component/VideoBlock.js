import React from 'react'
import { Container, Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: 300,
        },
    },
    btn: {
        color: 'white',
        background: "#22A2FF",
        border: 0,
        height: 48,
        padding: '0 20px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

        borderTopRightRadius: 15,
        borderEndStartRadius: 15,
        '&:focus': {
            outline: "none",
        },
        fontSize: 14,
        position: 'absolute',

    },
    img_block: {
        width: '100%',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
}));


const VideoBlock = () => {
    const classes = useStyles()
    return (
        <div>
            <Container className={classes.container}>
                <Grid lg={12} sm={12} md={12} xl={12} xs={12} className={classes.content}>
                    <img src={'/image/Group/Group176.png'} className={classes.img_block} />
                    <Button startIcon={<PlayArrowIcon />} variant="contained" className={classes.btn}>Смотреть</Button>
                </Grid>
            </Container>
        </div>
    )
}

export default VideoBlock