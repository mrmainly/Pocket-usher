import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ButtonCustom from './ButtonCustom'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function OutlinedCard({ variant, price, list, buttonText }) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {variant}
                </Typography>
                <Typography variant="h5" component="h2">
                    {price}
                </Typography>
                <Typography>
                    {list}
                </Typography>
            </CardContent>
            <CardActions>
                <ButtonCustom text={buttonText} />
            </CardActions>
        </Card>
    );
}