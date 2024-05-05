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
  TextInput,
  Select,
  Textarea,
  RadioGroup,
  Radio,
  Space,
  Loader,
  PasswordInput,
} from "@mantine/core";
import {
  IconArrowAutofitRight,
  IconArrowBack,
  IconCheck,
  IconHelp,
  IconPhoneCalling,
  IconQuestionMark,
  IconUser,
  IconUsers,
} from "@tabler/icons";
import image from "../../public/logoCAM2.svg";
import image_draw from "../../public/draw.png";
import { useState } from "react";
import getConfig from "next/config";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 0.5,
    paddingBottom: theme.spacing.xl * 0.5,
    fontSize: "22px",
  },

  outerDiv: {
    margin: "auto",
    border: "1px solid black",
    fontSize: "20px",
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 40,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  subtitle: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 30,
    lineHeight: 1,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 20,
    },
  },

  highlight: {
    fontSize: 46,
    position: "relative",
    //backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

const ApplyAccount = () => {
  const [cookie, setCookie] = useCookies(["auth"]);
  const { classes } = useStyles();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [emailUpdates, setEmailUpdates] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleEmailUpdateChange = (value) => {
    setEmailUpdates(value === "yes");
  };

  const validateEmail = (input) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    if (!validateEmail(inputValue)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { publicRuntimeConfig } = getConfig();

  const registerUser = async (event) => {
    event.preventDefault();
    const body = {
      email: email,
      password: password,
      //username: username,
    };

    const res = await fetch(
      publicRuntimeConfig.DEV_URL + "researchers/signup",
      {
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    const result = await res.json();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && username && password) {
      registerUser(event);
      setFormSubmitted(true);
    }
  };

  return (
    // <div>
    //   <Container>
    //     <div className={classes.inner}>
    //       <Title className={classes.title}>
    //         Thank you for trying out our <br></br>{" "}
    //         <span className={classes.highlight}>
    //           Cognitive Affective Map tools
    //         </span>
    //         !
    //       </Title>
    //     </div>

    //     <Title className={classes.subtitle}>Apply for an account:</Title>

    //     <div className={classes.inner}>
    //       If you want to register an account, please send us an E-Mail and
    //       provide the following information (copy & paste as a template):
    //     </div>

    //     <div className={classes.outerDiv}>
    //       <ul style={{ marginTop: "20px", marginBottom: "20px" }}>
    //         <li>First and second name:</li>
    //         <li>
    //           Please indicate where are you working (Researcher at University,
    //           Private Company, Student or Somewhere else):
    //         </li>
    //         <li>What is your aim in using Cognitive-Affective Maps:</li>
    //         <li>
    //           Do you want to receive regular emails about CAM tools updates (Yes
    //           / No):
    //         </li>
    //         <li>Anything to add (do you need any support, remarks, ..):</li>
    //       </ul>
    //     </div>

    //     <div className={classes.inner}>
    //       <div>
    //         Write an E-Mail to:{" "}
    //         <a
    //           href="mailto:cam.contact@drawyourminds.de"
    //           style={{
    //             color: "darkblue",
    //           }}
    //         >
    //           cam.contact@drawyourminds.de
    //         </a>
    //       </div>
    //     </div>
    //   </Container>
    // </div>
    <>
      <div
        style={{
          width: 400,
          margin: "50px auto",
          backgroundColor: "#ebedef",
          borderRadius: 10,
          padding: 10,
        }}
      >
        {/* <form onSubmit={form.onSubmit((values) => registerUser(values))}> */}
        <form onSubmit={handleSubmit}>
          <TextInput
            required
            id="usernameInput"
            label="Username"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
            // {...form.getInputProps("lastName")}
          />

          <PasswordInput
            required
            id="pwdInput"
            label="Password"
            placeholder="password"
            onChange={($event) => {
              setPassword($event.target.value);
            }}
            value={password}
            // {...form.getInputProps("password")}
          />

          <Select
            required
            id="affiliationSelect"
            label="Your Affiliation"
            placeholder="Select"
            data={[
              { value: "researcher", label: "Researcher at University" },
              { value: "privateCompany", label: "Private Company" },
              { value: "student", label: "Student" },
              { value: "other", label: "Somewhere Else" },
            ]}
            // {...form.getInputProps("affiliation")}
          />

          <Textarea
            required
            id="aimInput"
            label="Your Aim in Using CAM"
            placeholder="Describe your aim"
            // {...form.getInputProps("aim")}
          />

          <RadioGroup
            required
            id="emailUpdates"
            label="Receive Email Updates?"
            onChange={handleEmailUpdateChange}
            // {...form.getInputProps("emailUpdates")}
          >
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </RadioGroup>

          {emailUpdates && (
            <div>
              <TextInput
                required
                id="emailInput"
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && <div style={{ color: "red" }}>{emailError}</div>}
            </div>
          )}

          <Textarea
            id="remarksInput"
            label="Anything to Add?"
            placeholder="Do you need any support, have any remarks, etc.?"
            // {...form.getInputProps("remarks")}
          />

          <Space h="xl" />
          <div style={{ display: "flex", justifyContent: "right" }}>
            {/* {isError && <Text color="red">Please check your input</Text>}
              {isLoading && <Loader />} */}
            <Button id="submit" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ApplyAccount;
