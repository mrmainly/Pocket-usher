import * as React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/core/styles";
import { mainTheme } from "../../../styles";

import { ScreenWrapper } from "../../../components/ScreenWrapper";

const faqs = [
    {
        question: 'Почему существует этот проект?',
        answer: 'Сервис DDI Pocket Medic Online вырос из конкретной цели: сделать удобную единую платформу, где врачи проверяли бы взаимодействие действующих веществ выписанных лекарственных препаратов при одновременном приеме. Команда из «Mondino Technologies» обучила нейронную сеть (на базе TensorFlow 2.0) на основе данных, предоставленных фармакологами Медцентра. Важно понимать, что сервис не заменяет врача, она разработана для того, чтобы понизить риск назначения лекарств с опасным взаимодействием. Мы рады, что можем предоставить продукт которая служит для повышения качества жизни обычных граждан.',
    },
    {
        question: 'Что означает «DDI»?',
        answer: 'Лекарственное взаимодействие (drug-drug interaction)  – это изменение эффектов препарата, обусловленное одновременным приемом других лекарственных средств (межлекарственное взаимодействие)',
    },
    {
        question: 'Как проверить взаимодействие лекарственных препаратов?',
        answer: `DDI осуществляется перекрестным сравнением между лекарственными препаратами (ЛП). Пользователи вводят международное непатентованное наименование (МНН) ЛП, где обученная нейросеть находит эти МНН и по ним производит процесс сравнения на взаимодействие, результат взаимодействия выводится пользователю.`,
    },
    {
        question: 'Кто за этим стоит?',
        answer: 'Проект DDI Pocket Medic Online разработан отделом разработки ИИ компании «Mondino Technologies» при содействии с командой фармакологов Медцентра г. Якутска',
    },
]


const useClasses = makeStyles({
    question: {
        fontSize: mainTheme.textSizes.middle,
        color: mainTheme.colors.darkBlue,
        padding: '10px 0px',
        fontWeight: 500,
    },

    answer: {
        fontSize: mainTheme.textSizes.small,
        color: mainTheme.colors.lightPurple,
    }
})

const FaqScreen = () => {
    const classes = useClasses()
    return (
        <ScreenWrapper marginTop={15} marginBottom={15}>
            {faqs.map((faq, index) => {
                return (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.question}>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.answer}>
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </ScreenWrapper>
    );
};

export default FaqScreen