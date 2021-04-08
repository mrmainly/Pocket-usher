import React, { useState } from 'react'
import { Container, Grid, Typography, } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-slick'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${"/fonSlider.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: 1400,
        color: 'white',
        textAlign: 'center',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 300,
        height: 550,
        borderRadius: 20
    },
    slide_block: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));


const SliderMorePhone = () => {
    const classes = useStyles()
    const [slidesToShow, setSlidesToShow] = useState()
    const object = [
        {
            img: '/screen1.png',
            description: 'Загрузка приложения бесплатная. Установи приложение прямо сейчас.',
            title: 'Pocket Medic'
        },
        {
            img: '/screen2.png',
            description: ' Загрузка приложения бесплатная. Установи приложение прямо сейчас.',
            title: 'Pocket Medic'
        },
        {
            img: '/screen4.png',
            description: ' Загрузка приложения бесплатная. Установи приложение прямо сейчас.',
            title: 'Pocket Medic'
        },
        {
            img: '/screen5.png',
            description: ' Загрузка приложения бесплатная. Установи приложение прямо сейчас.',
            title: 'Pocket Medic'
        },
        {
            img: '/screen6.png',
            description: ' Загрузка приложения бесплатная. Установи приложение прямо сейчас.',
            title: 'Pocket Medic'
        },
        {
            img: '/screen1.png',
            description: ' Загрузка приложения бесплатная. Установи приложение прямо сейчас.',
            title: 'Pocket Medic'
        },
    ]
    const settings = {
        dots: true,
        centerMode: true,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
    };
    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 960 && window.innerWidth >= 600) {
                setSlidesToShow(2)
            } else if (window.innerWidth < 600) {
                setSlidesToShow(1)
            } else {
                setSlidesToShow(3)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
    })
    return (
        <div className={classes.container}>
            <Container>
                <Grid>
                    <Typography variant="h4"> Возьми под контроль свое здоровье прямо сейчас.</Typography>
                </Grid>
                <div className="flickity-items-fade" >
                    <Slider {...settings}>
                        {object.map((item, index) => (
                            <div style={{ width: "calc(100% - 2rem)", maxWidth: 380, display: 'flex', justifyContent: 'center', alignItems: 'center' }} key={index}>
                                <img className="img-fluid rounded" src={item.img} alt="..." alt={''} />
                                <div className="flickity-hidden py-6 text-center">
                                    <h6 className="text-uppercase text-white">
                                    </h6>
                                    <p className="font-size-sm text-center text-white-80 mb-0">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))
                        }
                    </Slider>
                </div>
            </Container>
        </div>
    )
}

export default SliderMorePhone