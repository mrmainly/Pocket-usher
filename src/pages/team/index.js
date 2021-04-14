import React from 'react'
import Layout from '../../components/layout/Layout'
import FirstBlog from './components/FirstBlog'
import SliderTeam from './components/SliderTeam'
import DreamTeam from './components/DreamTeam'
import AnswerTeam from './components/AnswerTeam'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${"/image/Element/Rectangle300.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingTop: 100
    },
}));

const Team = () => {
    const classes = useStyles()
    return (
        <Layout>
            <FirstBlog />
            <div className={classes.container}>
                <SliderTeam />
                <DreamTeam />
                <AnswerTeam />
            </div>
        </Layout>
    )
}

export default Team