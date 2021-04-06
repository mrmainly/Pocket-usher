import React from 'react'
import Layout from '../../components/layout/Layout'
import Greeting from './components/Greeting'
import SliderMedic from './components/SliderMedic'
import Answer from './components/Answer'
import { Box } from '@material-ui/core'

const homePage = () => {
    return (
        <Layout>
            <Greeting />
            <SliderMedic />
            <Answer />
        </Layout>
    )
}

export default homePage