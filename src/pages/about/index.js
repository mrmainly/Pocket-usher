import React from 'react'
import Layout from '../../components/layout/Layout'
import StartedBlog from './component/StartedBlog'
import GroupOne from './component/GroupOne'
import GroupTwo from './component/GroupTwo'

const About = () => {
    return (
        <Layout>
            <StartedBlog />
            <GroupOne />
            <GroupTwo />
        </Layout>
    )
}

export default About