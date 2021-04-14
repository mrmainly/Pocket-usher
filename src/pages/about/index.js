import React from 'react'
import Layout from '../../components/layout/Layout'
import StartedBlog from './component/StartedBlog'
import GroupOne from './component/GroupOne'
import GroupTwo from './component/GroupTwo'
import VideoBlock from './component/VideoBlock'
import AnswerGroup from './component/AnswerGroup'
import PriceBlock from './component/PriceBlock'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundImage: `url(${"/image/Element/Vector6.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingTop: 100
    },
}));


const About = () => {
    const classes = useStyles()
    return (
        <Layout>
            <StartedBlog />
            <GroupOne />
            <GroupTwo />
            <VideoBlock />
            <div className={classes.container}>
                <AnswerGroup />
                {/* <SliderMorePhone title={"Скачай Pocket medic и получай промокоды на все медицинские услуги"} /> */}
                <PriceBlock />
            </div>
        </Layout>
    )
}

export default About