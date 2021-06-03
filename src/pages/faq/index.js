import * as React from 'react';
import Layout from '../../components/layout/Layout'

import { HeaderScreen } from "./components/HeaderScreen";
import FaqScreen from "./components/FaqScreen";

export default function Faq() {
    return (
        <Layout>
            <HeaderScreen marginBottom={15} marginTop={15} />
            <FaqScreen />
        </Layout>
    );
};