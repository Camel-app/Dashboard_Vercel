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

    listItems:{
        fontSize: 24,
        [theme.fn.smallerThan('xs')]: {
            fontSize: 16,
        },
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
        marginRight: theme.spacing.xl * 1,
        padding: 10,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0,
        },
        fontSize: 24,
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
        fontSize: 30,
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
    },

    internalLinks: {
        color: 'black',
        textDecoration: 'underline'
    }
}));



const Information = () => {
    const { classes } = useStyles();
    return (
        <div>
            <Container>
            <div className={classes.inner}>
                    <div className={classes.contentBelowImage}>
                        <Title className={classes.title}>
                        Thank you for checking out our <br></br> <span className={classes.highlight}>Cognitive Affective Map tools</span>!
                        </Title>
                    </div>
                </div>

                <Title className={classes.subtitle}>
                Cognitive-Affective Maps (CAM) tools encompass the following tools:
                        </Title>
                    <div className={classes.inner}>
                    <div>
                            <Image src={image.src} className={classes.image} />
                            </div>
                        <div className={classes.contentNextImage}>
                            <List
                                    mt={30}
                                    spacing="sm"
                                    size="sm"
                                    icon={
                                        <ThemeIcon size={20} radius="xl">
                                            <IconArrowAutofitRight size={12} stroke={1.5} />
                                        </ThemeIcon>
                                    }
                                    className={classes.listItems}
                                >
                                    <List.Item>
                                    for data collection: Cognitive-Affective Map extended logic (C.A.M.E.L.)
                                    </List.Item>
                                    <List.Item>
                                    for data analysis: CAM-App (Shiny)
                                    </List.Item>
                                    <List.Item>
                                    for setting up studies with different designs and preprocessing steps: administrative panel (you are currently on)
                                    </List.Item>
                                </List>
                                For detailed information and how to register have a look in our <a key='Documentation' href='https://camtools-documentation.readthedocs.io/en/master/Set%20up%20study/' target='_blank'>
                                <span className={classes.internalLinks}>
                                Documentation
                                </span>
                                </a>.
                        </div>
                    </div>

                    <Title className={classes.subtitle}>
                    No coding is required:
                        </Title>
                    <div className={classes.inner}>
                        <div className={classes.contentBelowImage}>
                            <List
                                    mt={30}
                                    spacing="sm"
                                    size="sm"
                                    icon={
                                        <ThemeIcon size={20} radius="xl">
                                            <IconArrowAutofitRight size={12} stroke={1.5} />
                                        </ThemeIcon>
                                    }
                                    className={classes.listItems}
                                >
                                    <List.Item>
                                        It is possible to set up CAM studies using a visual interface and all kind of adjustments are possible 
                                        (see <a key='Config file documentation' href='https://camtools-documentation.readthedocs.io/en/master/Cognitive-Affective%20Map%20extended%20logic/#define-your-config-file' target='_blank'>
                                <span className={classes.internalLinks}>
                                Config file documentation
                                </span>
                                </a> for details).
                                    </List.Item>
                                    <List.Item>
                                        Thanks to our ready-made example studies, constructing studies couldn't be easier (see <a key='example studies' href=' https://camtools-documentation.readthedocs.io/en/master/Set%20up%20study/#example-studies' target='_blank'>
                                <span className={classes.internalLinks}>
                                example studies
                                </span>
                                </a>).
                                    </List.Item>
                                    <List.Item>
                                        Using the visual interface of the CAM-App data can be easily summarized and analyzed (see <a key='CAM-App documentation' href='https://camtools-documentation.readthedocs.io/en/master/CAM-App/' target='_blank'>
                                <span className={classes.internalLinks}>
                                CAM-App documentation
                                </span>
                                </a>).
                                    </List.Item>
                                </List> 
                        </div>
                    </div>

                    <Title className={classes.subtitle}>
                    Flexible and extensible:
                        </Title>
                    <div className={classes.inner}>
                        <div className={classes.contentBelowImage}>
                            <List
                                    mt={30}
                                    spacing="sm"
                                    size="sm"
                                    icon={
                                        <ThemeIcon size={20} radius="xl">
                                            <IconArrowAutofitRight size={12} stroke={1.5} />
                                        </ThemeIcon>
                                    }
                                    className={classes.listItems}
                                >
                                    <List.Item>
                                    There are no limits: If it's possible on a web page, you can theoretically implement it in the C.A.M.E.L. software.
                                    </List.Item>
                                    <List.Item>
                                    Set up the C.A.M.E.L. software on your own server to have full control. Here it is possible to implement even more advanced features 
                                    (for inspiration see future features sections in the documentation).
                                    </List.Item>
                                    <List.Item>
                                    If you want to extend the features of the CAM-App you can freely adjust our written functions in R or write your own (check out our source code).
                                    </List.Item>
                                </List> 
                        </div>
                    </div>

                    <Title className={classes.subtitle}>
                    There's so much more:
                        </Title>
                    <div className={classes.inner}>
                    <div className={classes.contentNextImage}>
                            <List
                                    mt={30}
                                    spacing="sm"
                                    size="sm"
                                    icon={
                                        <ThemeIcon size={20} radius="xl">
                                            <IconArrowAutofitRight size={12} stroke={1.5} />
                                        </ThemeIcon>
                                    }
                                    className={classes.listItems}
                                >
                                    <List.Item>
                                    Learn the <a key='theoretical background' href='https://camtools-documentation.readthedocs.io/en/master/Cognitive-Affective%20Maps/#what-are-cognitive-affective-maps' target='_blank'>
                                        <span className={classes.internalLinks}>
                                            theoretical background
                                            </span>
                                </a> of Cognitive-Affective Maps and see <a key='how this method can help you' href='https://camtools-documentation.readthedocs.io/en/master/Cognitive-Affective%20Maps/#what-are-the-advantages-of-using-cognitive-affective-maps' target='_blank'>
                                        <span className={classes.internalLinks}>
                                        how this method can help you
                                            </span>
                                </a> with your research.
                                    </List.Item>
                                    <List.Item>
                                    Watch our introductory video online and build your first study after we have generated an account for you in minutes.
                                    </List.Item>
                                </List>
                        </div>
                        <div className={classes.contentNextImage}>
                            <List
                                    mt={30}
                                    spacing="sm"
                                    size="sm"
                       
                                >
                                    <List.Item 
                                    icon={
                                        <ThemeIcon size={20} radius="xl">
                                            <IconHelp size={12} stroke={1.5} />
                                        </ThemeIcon>
                                    }
                                    className={classes.listItems}>
                                    You'll always find friendly people <a key='in our Slack channel' href='https://join.slack.com/t/cognitiveaffe-um96332/shared_invite/zt-1cybwr0tf-u2PWQh4L3BP3tuxLuH4c5w' target='_blank'>
                                <span className={classes.internalLinks}>
                                in our Slack channel
                                </span>
                                </a>. We're happy to help!
                                    </List.Item>
                                    <List.Item
                                    icon={
                                        <ThemeIcon size={20} radius="xl">
                                            <IconUsers size={12} stroke={1.5} />
                                        </ThemeIcon>
                                    }
                                    className={classes.listItems}>
                                    Learning to build Cognitive-Affective Maps studies is most fun in a group. We offer workshops tailored to your needs
                                    (send an E-Mail to: <a key='Email' href='mailto:cam.contact@drawyourminds.de'>
                                <span className={classes.internalLinks}>
                                cam.contact@drawyourminds.de
                                </span>
                                </a>).
                                    </List.Item>
                                    <List.Item
                                     icon={
                                        <ThemeIcon size={20} radius="xl">
                                            <IconPhoneCalling size={12} stroke={1.5} />
                                        </ThemeIcon>
                                    }
                                    className={classes.listItems}>
                                    Whether you're in a hurry or looking for a custom study, we'll find an expert to help you. Please get in touch 
                                    (send an E-Mail to: <a key='Email' href='mailto:cam.contact@drawyourminds.de'>
                                <span className={classes.internalLinks}>
                                cam.contact@drawyourminds.de
                                </span>
                                </a>).
                                    </List.Item>
                                </List>
                           .
                        </div>
                    </div>

            </Container>
        </div>
    );	
}

export default Information;



