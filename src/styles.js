import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {

    return ({
        photoIcon: {
            marginRight: '10px'
        },
        container: {
            backgroundColor: '#fff',
            padding: '20px 0'
        },
        cardGrid: {
            padding: '20px 0'
        },
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        },
        cardContent: {
            flexGrow: 1
        },
        cardMedia: {
            paddingTop: "56.29%"
        }

    })

})

export default useStyles;