import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
} from '@mantine/core';
import { IconArrowAutofitRight, IconArrowBack, IconCheck, IconHelp, IconPhoneCalling, IconQuestionMark, IconUser, IconUsers } from '@tabler/icons';
import image from '../../public/logoCAM2.svg';
import image_draw from '../../public/draw.png';



const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: theme.spacing.xl * 0.5,
        paddingBottom: theme.spacing.xl * 2,
    },


    contentBelowImage: {
        //marginLeft: 100,
        maxWidth: 960,
        marginRight: theme.spacing.xl * 3,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0,
        },
    },

    contentNextImage: {
        maxWidth: 480,
        marginRight: theme.spacing.xl * 10,
        padding: 10,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0,
        },
    },
    
    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 40,
        lineHeight: 1.2,
        fontWeight: 900,

        [theme.fn.smallerThan('xs')]: {
            fontSize: 28,
        },
    },

    subtitle: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 24,
        lineHeight: 1,
        fontWeight: 900,

        [theme.fn.smallerThan('xs')]: {
            fontSize: 20,
        },
    },

    control: {
        [theme.fn.smallerThan('xs')]: {
            flex: 1,
        },
    },

    image: {
        flex: 1,

        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
        marginTop: 'auto',
        marginBlockEnd: 'auto',
    },

    highlight: {
        fontSize: 46,
        position: 'relative',
        //backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
        borderRadius: theme.radius.sm,
        padding: '4px 12px',
    },

    internalLinks: {
        color: 'black',
        textDecoration: 'underline'
    }
}));



const Impressum = () => {
    const { classes } = useStyles();
    return (
        <div>
            <Container>
                <div className={classes.inner}>
                    <div className={classes.contentBelowImage}>
                        <Title className={classes.title}>
                        Impressum:
                        </Title>
                    </div>
                </div>
                
                <div className={classes.inner}>
                        <div className={classes.contentNextImage}>
                            <Title className={classes.subtitle}>
                                Editor:
                                </Title>
                        </div>
                    <div className={classes.contentNextImage}>
                        Albert Ludwig University of Freiburg
                        <br></br>
                        Psychology Department
                        <br></br>
                        D-79085 Freiburg
                        <br></br>
                        Germany
                    </div>
                </div>
                    The website adheres to the privacy policy of the Institute of Psychology of the University of Freiburg, for further information see <a key='in our Slack channel' href='https://www.psychologie.uni-freiburg.de/impressum-en?set_language=en' target='_blank'>
                                <span className={classes.internalLinks}>
                                https://www.psychologie.uni-freiburg.de/impressum-en?set_language=en
                                </span>
                                </a>
            </Container>
        </div>
    );	
}

export default Impressum;



