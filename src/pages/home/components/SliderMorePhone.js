import React, { useState, useEffect } from 'react'
import { Container, Grid, Typography, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-slick'
import ButtonCustom from '../../../components/ButtonCustom'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${"/image/Element/fonSlider.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        color: 'white',
        textAlign: 'center',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 1400
    },
    slide_block: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title_block: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    slide: {
        transform: 'scale(0.3)',
        transition: 'transform 300ms',

    },
    image: {
        opacity: '0.3',
        borderRadius: 30,
        width: '50rem',
        marginTop: 85
    },
    imageActive: {
        transform: 'scale(1.2)',
        opacity: 1,
        borderRadius: 30,
        width: '50rem',
        marginBottom: 170
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    text__blog: {
        width: '50rem',
        fontSize: 45
    }

}));


const SliderMorePhone = ({ title }) => {
    const classes = useStyles()
    const [slidesToShow, setSlidesToShow] = useState()
    const [imageIndex, setImageIndex] = useState(0)
    const object = [
        {
            img: '/image/Screen/screen1.png',
            description: 'Загрузка приложения бесплатная. Установи приложение прямо сейчас.',
            title: 'Pocket Medic',
            id: 0
        },
        {
            img: '/image/Screen/screen2.png',
            description: ' Загрузка приложения бесплатная. Установи приложение прямо сейчас.',
            title: 'Pocket Medic',
            id: 1
        },
        {
            img: '/image/Screen/screen4.png',
            description: ' Загрузка приложения бесплатная. Установи приложение прямо сейчас.',
            title: 'Pocket Medic',
            id: 2
        },
        {
            img: '/image/Screen/screen5.png',
            description: ' Загрузка приложения бесплатная. Установи приложение прямо сейчас.',
            title: 'Pocket Medic',
            id: 3

        },
        {
            img: '/image/Screen/screen6.png',
            description: ' Загрузка приложения бесплатная. Установи приложение прямо сейчас.',
            title: 'Pocket Medic',
            id: 4
        },
        {
            img: '/image/Screen/screen4.png',
            description: ' Загрузка приложения бесплатная. Установи приложение прямо сейчас.',
            title: 'Pocket Medic',
            id: 5
        },
    ]
    const settings = {
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        infinite: true,
        speed: 200,
        slidesToShow,
        slidesToScroll: 1,
        beforeChange: (current, next) => setImageIndex(next),
        centerPadding: 0,
    };
    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 960 && window.innerWidth >= 600) {
                setSlidesToShow(2)
            } else if (window.innerWidth < 600) {
                setSlidesToShow(1)
            } else {
                setSlidesToShow(4)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
    })
    useEffect(() => {
        console.log('asdasd', imageIndex)
    }, [])
    return (
        <div className={classes.container}>
            <Container >
                <Grid className={classes.title_block}>
                    <Typography variant="h4"> {title}</Typography>
                </Grid>
                <div >
                    <Slider {...settings}>
                        {object.map((item, index) => (
                            <div className={classes.slide} key={index}>
                                <div className={classes.center}>
                                    <img src={item.img} alt="..." className={item.id == imageIndex ? classes.imageActive : classes.image} />
                                    <div className={classes.text__blog}>
                                        <h6 className="text-uppercase text-white">
                                        </h6>
                                        <p>
                                            {item.description}
                                        </p>
                                        <ButtonCustom text={"Скачать приложении"} style={{ fontSize: 50 }} />
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </Slider>
                </div>
            </Container>

        </div >
    )
}

export default SliderMorePhone