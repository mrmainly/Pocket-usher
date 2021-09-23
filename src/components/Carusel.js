import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Slider from 'react-slick'
import ButtonCustom from './ButtonCustom'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    slide: {
        transform: 'scale(0.3)',
        transition: 'transform 300ms',
        display: 'flex',
        justifyContent: 'centet',
        alignItems: 'center',
        backgroundColor: 'red',
        height: 800
    },
    image: {
        opacity: '0.3',
        borderRadius: 30,
        marginTop: 85,
        width: '60rem'
    },
    imageActive: {
        transform: 'scale(1.2)',
        opacity: 1,
        borderRadius: 30,
        marginBottom: 190,
        width: '60rem'
    },
    text__blog: {
        fontSize: 45,
        width: '60rem'
    },
    btnBox: {

    }

}));



const CaruselCustom = () => {
    const [slidesToShow, setSlidesToShow] = useState()
    const [imageIndex, setImageIndex] = useState(0)
    const classes = useStyles()
    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 960 && window.innerWidth >= 600) {
                setSlidesToShow(2)
            } else if (window.innerWidth < 1400 && window.innerWidth >= 960) {
                setSlidesToShow(3)
            }
            else if (window.innerWidth < 600) {
                setSlidesToShow(1)
            } else {
                setSlidesToShow(4)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
    })
    const settings = {
        dots: false,
        centerMode: true,
        infinite: true,
        speed: 200,
        slidesToShow,
        slidesToScroll: 1,
        beforeChange: (current, next) => setImageIndex(next),
        centerPadding: "0px",
    };
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
    return (
        <Slider {...settings} style={{ margin: '0 auto' }}>
            {object.map((item, index) => (
                <div key={index}>
                    <div className={classes.slide}>
                        <div className={classes.center}>
                            <img src={item.img} alt="..." className={item.id == imageIndex ? classes.imageActive : classes.image} />
                            <div className={classes.text__blog}>
                                <p>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </Slider>
    )
}

export default CaruselCustom