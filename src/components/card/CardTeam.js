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
        maxWidth: 240,
        backgroundColor: '#EAF5FF',
        borderTopLeftRadius: 20,
        borderEndEndRadius: 20,
        marginTop: 30,
        margin: '0 auto'
    },
    media: {
        height: 320,
    },
});

export default function CardTeam({ img, title, description }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title="Contemplative Reptile"
                />
                <CardContent style={{ marginTop: '-95px' }}>
                    <Typography variant="body2" component="p">
                        {title}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}