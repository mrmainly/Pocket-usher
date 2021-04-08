import React from 'react'
import Layout from '../../components/layout/Layout'
import Greeting from './components/Greeting'
import SliderMedic from './components/SliderMedic'
import Answer from './components/Answer'
import SentenceScreen from './components/SentenceScreen'
import SentenceScreenTwo from './components/SentenceScreenTwo'
import SliderMorePhone from './components/SliderMorePhone'
import MorePhoto from './components/MorePhoto'
import HomeFooter from './components/HomeFooter'

const homePage = () => {
    return (
        <Layout>
            <Greeting />
            <SliderMedic />
            <Answer />
            <SentenceScreen />
            <SentenceScreenTwo />
            <SliderMorePhone />
            <MorePhoto />
            <HomeFooter />
        </Layout>
    )
}

export default homePage