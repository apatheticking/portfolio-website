import { makeStyles } from '@material-ui/core/styles'
//TODO: refactor css to be dry
export const navContainer = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    }
});

export const topNavbarStyle = makeStyles({
    root: {
        position: 'fixed',
        top: '0',
        width: '100%',
        background: '#30342F',
        '& a':{
            color: 'white',
            textDecoration: 'none'
        }
    }
});

export const leftNavbarStyle = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        left: '0',
        background: '#30342F',
        height: '100vh',
        width: '18px',
            '& span': {
                color: 'white',
                cursor: 'pointer',
                transform: 'rotate(-90deg)',
                transformOrigin: 'top left',
            }
    }
});

export const rightNavbarStyle = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        right: '0',
        height: '100vh',
        width: '18px',
        background: '#30342F',
        '& span':{
            whiteSpace: 'nowrap',
            color: 'white',
            cursor: 'pointer',
            transform: 'rotate(90deg)',
            transformOrigin: 'top left',
        }
    }
});

export const bottomNavbarStyle = makeStyles({
    root: {
        position: 'fixed',
        bottom: '0',
        width: '100%',
        background: '#30342F',
        '& a':{
            color: 'white',
            textDecoration: 'none'
        }
    }
})