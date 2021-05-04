import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Slider from 'react-slick'
import ButtonCustom from './ButtonCustom'

const useStyles = makeStyles((theme) => ({
    slide: {
        transform: 'scale(0.3)',
        transition: 'transform 300ms',
        display: 'flex',
        justifyContent: 'centet',
        alignItems: 'center',
        height: 800,
        marginLeft: '-100px',

    },
    image: {
        opacity: '0.3',
        borderRadius: 30,
        width: '60rem',
        marginTop: 85,

    },
    imageActive: {
        transform: 'scale(1.2)',
        opacity: 1,
        borderRadius: 30,
        width: '60rem',
        marginBottom: 190,
    },
    text__blog: {
        width: '60rem',
        fontSize: 45
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
        centerPadding: 0,


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

    )
}

export default CaruselCustom