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
        position: 'fixed',
        left: '0',
        top:'100%',
        width: '100vh',
        background: '#30342F',
        transform: 'rotate(270deg)',
        transformOrigin: 'top left',
        '& span':{
            color: 'white',
            textDecoration: 'none',
            cursor: 'pointer',
        }
    }
});

export const rightNavbarStyle = makeStyles({
    root: {
        position: 'fixed',
        right: '0',
        top:'100%',
        width: '100vh',
        background: '#30342F',
        transform: 'rotate(90deg)',
        transformOrigin: 'top right',
        '& a':{
            color: 'white',
            textDecoration: 'none'
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