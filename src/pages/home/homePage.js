import React from 'react'
import Layout from '../../components/layout/Layout'
import Greeting from './components/Greeting'
import SliderMedic from './components/SliderMedic'
import Answer from './components/Answer'
import SentenceScreen from './components/SentenceScreen'
import SentenceScreenTwo from './components/SentenceScreenTwo'

const homePage = () => {
    return (
        <Layout>
            <Greeting />
            <SliderMedic />
            <Answer />
            <SentenceScreen />
            <SentenceScreenTwo />
        </Layout>
    )
}

export default homePage