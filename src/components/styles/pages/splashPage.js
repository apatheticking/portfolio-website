import { makeStyles } from '@material-ui/core/styles'

export const splashPage = makeStyles({
    root: {
        color: 'white',
        textAlign: 'left',
        marginLeft: '10%',
        alignContent: 'left',
            '& h2': {
                fontSize: '56px',
                marginTop: '0px',
                marginBottom: '0px'
            }
    }
})

export const IconsAlignmentStyles = makeStyles({ 
    root: {
        marginLeft: '10%',
            '& a': {
                paddingRight: '8px'
            }
        }
})