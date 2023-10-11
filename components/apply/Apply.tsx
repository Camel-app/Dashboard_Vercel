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
        paddingBottom: theme.spacing.xl * 0.5,
        fontSize: '22px'
    },

    outerDiv: {
        margin: 'auto',
        border: '1px solid black',
        fontSize: '20px'
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



    highlight: {
        fontSize: 46,
        position: 'relative',
        //backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
        borderRadius: theme.radius.sm,
        padding: '4px 12px',
    },


}));



const ApplyAccount = () => {
    const { classes } = useStyles();
    return (
        <div>
            <Container>
            <div className={classes.inner}>
                <Title className={classes.title}>
                Thank you for trying out our <br></br> <span className={classes.highlight}>Cognitive Affective Map tools</span>!
                </Title>
            </div>
            
             <Title className={classes.subtitle}>
                Apply for an account:
            </Title>
            
            <div className={classes.inner}>
                If you want to register an account, please send us an E-Mail and provide the following information (copy & paste as a template):
            </div>


         <div className={classes.outerDiv}>
      <ul style={{ marginTop: "20px", marginBottom: "20px" }}>
        <li>First and second name:</li>
        <li>
          Please indicate where are you working (Researcher at University,
          Private Company, Student or Somewhere else):
        </li>
        <li>What is your aim in using Cognitive-Affective Maps:</li>
        <li>Do you want to receive regular emails about CAM tools updates (Yes / No):</li>
        <li>Anything to add (do you need any support, remarks, ..):</li>
      </ul>
    </div>

    <div className={classes.inner}>
        <div>
        Write an E-Mail to: <a
          href="mailto:cam.contact@drawyourminds.de"
          style={{
            color: "darkblue",
          }}
        >
          cam.contact@drawyourminds.de
        </a>
        </div>

    </div>
    </Container>
    </div>
    );	
}




export default ApplyAccount;