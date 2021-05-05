import React from 'react'
import Layout from '../../components/layout/Layout'
import FirstBlog from './components/FirstBlog'
import { makeStyles } from '@material-ui/core/styles'
import TeamCardBlog from './components/TeamCardBlog'
import Events from './components/Events'
import AttainmentCard from './components/AttainmentCard'
import MondinoCard from './components/MondinoCard'
import ArticleCards from './components/ArticleCards'

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

                <Events />
                <AttainmentCard />
                <MondinoCard />
                <ArticleCards />
            </div>
        </Layout>
    )
}

export default Blog