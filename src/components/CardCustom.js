import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActions, Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 280,
        marginTop: 20
    },
    media: {
        height: 180,
    },
});

export default function CardCustom({ img, title, description }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="text" color="primary">Перейти</Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}