import { makeStyles } from '@material-ui/core/styles'
//alignts content middle left
export const blockStyle = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        backgroundColor: '#30342F', 
        height:'100vh', 
        margin: '0px 18px 0px 18px'
    }
})
//do i still want to split this up?
export const blockFrame = makeStyles({
    root: {
        backgroundColor: '#30342F', 
        height:'100vh', 
        margin: '0px 18px 0px 18px'
    }
})

export const blockAlignment = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
    }
})