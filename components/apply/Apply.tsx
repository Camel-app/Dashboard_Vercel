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
    maxWidth: "400px",
    margin: "auto",
    border: "none",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    padding: "20px",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderRadius: theme.radius.md,
  },

  title: {
    marginBottom: "20px",
    textAlign: "center",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
  },

  subtitle: {
    color: theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    textAlign: "center",
    marginBottom: "20px",
  },

  inputLabel: {
    marginBottom: "10px",
  },

  submitButton: {
    marginTop: "20px",
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
  const [username, setUsername] = useState("");

  const [emailUpdates, setEmailUpdates] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const { publicRuntimeConfig } = getConfig();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleEmailUpdateChange = (value) => {
    setEmailUpdates(value === "yes");
  };

  const validateUsername = (input) => {
    // Regular expression for email validation
    const usernameRegex = /^(?![-_])[a-zA-Z0-9-_]{1,14}(?<![-_])$/;
    return usernameRegex.test(input);
  };

  const handleUsernameChange = (event) => {
    const inputValue = event.target.value;
    setUsername(inputValue);
    if (!validateUsername(inputValue)) {
      setUsernameError("Please enter a valid username");
    } else {
      setUsernameError("");
    }
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

  const registerUser = async (event) => {
    event.preventDefault();
    const body = {
      email: email,
      password: password,
      username: username,
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
    <Container size={420} padding={0} className={classes.outerDiv}>
      <Title order={2} className={classes.title}>
        Apply for an Account
      </Title>
      <Text size="sm" color="dimmed" className={classes.subtitle}>
        Fill in the details to join our community.
      </Text>
      <form onSubmit={handleSubmit}>
        <TextInput
          required
          label="Username"
          placeholder="Enter your username"
          onChange={handleUsernameChange}
          value={username}
          error={usernameError}
          className={classes.inputLabel}
        />
        <PasswordInput
          required
          label="Password"
          placeholder="Enter your password"
          onChange={($event) => setPassword($event.target.value)}
          value={password}
          className={classes.inputLabel}
        />
        <Select
          required
          label="Your Affiliation"
          placeholder="Select"
          data={[
            { value: "researcher", label: "Researcher at University" },
            { value: "privateCompany", label: "Private Company" },
            { value: "student", label: "Student" },
            { value: "other", label: "Somewhere Else" },
          ]}
          className={classes.inputLabel}
        />
        <Textarea
          required
          label="Your Aim in Using CAM"
          placeholder="Describe your aim"
          className={classes.inputLabel}
        />
        <RadioGroup
          required
          label="Receive Email Updates?"
          onChange={handleEmailUpdateChange}
          className={classes.inputLabel}
          value={emailUpdates ? "yes" : "no"} // Ensure this is set based on the state if you need preselection
        >
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </RadioGroup>
        {emailUpdates && (
          <TextInput
            required
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            className={classes.inputLabel}
          />
        )}
        <Textarea
          label="Anything to Add?"
          placeholder="Do you need any support, have any remarks, etc.?"
          className={classes.inputLabel}
        />
        <Button fullWidth className={classes.submitButton} type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ApplyAccount;
