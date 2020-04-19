import { makeStyles } from '@material-ui/core/styles'

export const sectionHeaderStyle = makeStyles({
    root: {
        borderBottom: '4px solid black',
        boxShadow: '0 3px 5px 2px rgba(255, 255, 255, .3)',
        textAlign: 'left',
        color: 'black',
            '& h2': {
                fontSize: '32px',
                marginBottom: '0px'
            },
            '& p': {
                fontSize: '12px',
                marginTop: '0px'
            },
        height: '56px',
    },
});