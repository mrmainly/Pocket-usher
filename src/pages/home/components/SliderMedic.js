import React from 'react'
import Slider from "react-slick"
import { Container, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: 'white',
        width: 400,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderTopRightRadius: 20,
        borderEndStartRadius: 20,
        zIndex: 1,
        boxShadow: "1px 14px 25px rgba(0, 0, 0, 0.22)",
        marginTop: '-90px',
        marginRight: '-100px',
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
            marginTop: 0,
            boxShadow: "none",
            borderEndStartRadius: 0,
            borderTopRightRadius: 30,
        },
        paddingLeft: 5,
        paddingRight: 5
    },
    content: {
        marginTop: '-100px',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            marginTop: 20,
            marginBottom: 150
        },
        overflow: 'hidden'
    },
    img: {
        width: '100%',
        height: '100%',
        boxShadow: "1px 14px 25px rgba(0, 0, 0, 0.22)",
        borderRadius: 25,
        marginBottom: 40,
        marginTop: 15,
        [theme.breakpoints.down('sm')]: {
            boxShadow: 'none',
            borderRadius: 0,
            borderEndStartRadius: 30,
        },
    }
}));

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} onClick={onClick} style={{
            ...style,
            height: 60,
            width: 60,
            position: "absolute",
            top: '50%',
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            right: 0,
            backgroundColor: '#22A2FF',

        }} />

    )
}
const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div className={className} onClick={onClick} style={{
            ...style,
            height: 60,
            width: 60,
            position: "absolute",
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
            top: '50%',
            left: 0,
            zIndex: 15,
            backgroundColor: '#22A2FF',

        }} />

    )
}
const SliderMedic = () => {
    const classes = useStyles()
    const settings = {
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const object = [
        {
            img: '/image/Element/SliderPhoto.png',
            description: 'это мобильное приложение, с помощью которого вы сможете улучшить менеджмент лекарств всей своей семьи.',
            title: 'Pocket Medic'
        },
        {
            img: '/image/Element/SliderPhoto.png',
            description: ' позволяет сэкономить не только деньги, но и время на поиски скидок/акций на медицинские услуги в Вашем городе. Регулируйте прием лекарств.',
            title: 'Pocket Medic'
        },
        {
            img: '/image/Element/SliderPhoto.png',
            description: ' Больше не нужно тратить время на долгие поиски акций и скидок на медицинские услуги. Все собрано в одном месте.Только проверенные медицинские учреждения- партнеры.',
            title: 'Pocket Medic'
        },
    ]

    return (
        <Container className={classes.content}>
            <Slider {...settings} >
                {object.map((item, index) => (
                    <div key={index} >
                        <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid className={classes.card} item lg={4} sm={12} md={4} xl={4} xs={12}>
                                <Typography variant="h4" style={{ fontFamily: "serif", fontWeight: 'bold' }}>{item.title}</Typography>
                                <Typography >{item.description}</Typography>
                            </Grid>
                            <Grid item lg={8} sm={12} md={8} xl={8} xs={12}>
                                <img src={item.img} className={classes.img} alt={''} />
                            </Grid>
                        </Grid>
                    </div>
                ))
                }
            </Slider>
        </Container>
    )
}

export default SliderMedic