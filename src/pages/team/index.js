import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Layout from '../../components/layout/Layout'
import FirstBlog from './components/FirstBlog'
import SliderTeam from './components/SliderTeam'
import DreamTeam from './components/DreamTeam'
import AnswerTeam from './components/AnswerTeam'
import MapTeam from './components/MapTeam'
import MediaCardBox from './components/MediaCardBox'


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${"/image/Element/background.png"})`,
        backgroundSize: 'cover'
    },
    answerContainer: {
        backgroundImage: `url(${"/image/Element/asd.png"})`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    MediaContainer: {
        backgroundSize: 'cover',
        backgroundImage: `url(${"/image/Element/fg.png"})`
    }
}));

const Team = () => {
    const classes = useStyles()
    return (
        <Layout>
            <div className={classes.container}>
                <FirstBlog />
                <SliderTeam />
            </div>
            <DreamTeam />
            <div className={classes.answerContainer}>
                <AnswerTeam />
            </div>

            <MapTeam />
            <div className={classes.MediaContainer}>
                <MediaCardBox />
            </div>


        </Layout>
    )
}

export default Team