import React from 'react'
import Layout from '../../components/layout/Layout'
import FirstBlog from './components/FirstBlog'
import { makeStyles } from '@material-ui/core/styles'
import TeamCardBlog from './components/TeamCardBlog'
import Events from './components/Events'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${"/image/Element/Rect202.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
}));

const Blog = () => {
    const classes = useStyles()
    return (
        <Layout>
            <div className={classes.root}>
                <FirstBlog />
                <TeamCardBlog />
            </div>
            <Events />
        </Layout>
    )
}

export default Blog