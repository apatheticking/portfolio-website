import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { makeStyles } from '@material-ui/core/styles'

const iconStyle = makeStyles({
    root: {
        color: 'white',
        width: '30px',
        height: '30px'
    }
})

export const icons = [
    {
        url: "https://www.linkedin.com/in/jeffrey-lee-80760a48/",
        icon: faLinkedin,
        style: iconStyle
    },
    {
        url: "https://github.com/apatheticking",
        icon: faGithub,
        style: iconStyle
    }
]