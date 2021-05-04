import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    Form_input: {
        width: 300,
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderEndEndRadius: 15,
        height: 50,
        '&:focus': {
            outline: "none",
        },
        border: 0,
        paddingLeft: 15,
        marginTop: 30
    },

}))

const FormInput = ({ textDes }) => {
    const classes = useStyles()
    return (
        <div>
            <input placeholder="Поиск по темам или заголовкам" className={classes.Form_input} />
        </div>
    )
}

export default FormInput