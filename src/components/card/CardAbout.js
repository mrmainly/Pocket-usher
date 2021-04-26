import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActions, Button, Box } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#EAF5FF',
        borderTopLeftRadius: 20,
        borderEndEndRadius: 20,
        marginTop: 30,
        margin: '0 auto',
        '&:focus': {
            outline: "none",
        },
        width: 380,
        height: 438,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',


    },
    media: {
        height: 320,
    },
    btn: {
        color: 'white',
        background: "#22A2FF",
        border: 0,
        height: 48,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        borderTopRightRadius: 15,
        borderEndStartRadius: 15,
        '&:focus': {
            outline: "none",
        },
        fontSize: 14,
        marginTop: 40
    },
    mainBody: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    absoluteBlock: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFC267',
        width: 112,
        height: 67,
        position: 'absolute',
        fontSize: 20,
        color: 'white',
        borderTopRightRadius: 15,
        borderEndStartRadius: 15,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 6px rgba(0, 0, 0, 0.03), 0px 14px 24px rgba(27, 22, 66, 0.06)',
        marginTop: '-420px',
        marginLeft: '-290px'
    }
});

export default function CardAbout({ description, price, status, buttonText, elem }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            {elem &&
                <Box className={classes.absoluteBlock}>
                    Скоро
            </Box>
            }
            <CardContent className={classes.mainBody}>
                <Typography variant="body2" component="p" style={{ color: '#FFC267' }}>
                    {status}
                </Typography>
                <Typography variant="h4" component="p">
                    {price}
                </Typography>

                <Box style={{ textAlign: 'left', display: 'flex', justifyContent: "left", flexDirection: 'column', }}>
                    {description.map((item, index) => (
                        <div key={index} style={{ marginTop: 15, fontSize: 18 }}>
                            <img src={'/image/Element/check2.png'} style={{ marginRight: 15 }} />
                            {item}
                        </div>
                    ))}
                </Box>

                <CardActions style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button className={classes.btn} variant="contained">
                        {buttonText}
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    );
}