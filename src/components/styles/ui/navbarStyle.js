import { makeStyles } from '@material-ui/core/styles'
//TODO: refactor css to be dry
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
        position: 'absolute',
        left: '0',
        top:'0',
        background: '#30342F',
        transform: 'rotate(270deg)',
        '& a':{
            color: 'white',
            textDecoration: 'none'
        }
    }
});

export const rightNavbarStyle = makeStyles({
    root: {
        position: 'fixed',
        right: '0',
        width: '100%',
        background: '#30342F',
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