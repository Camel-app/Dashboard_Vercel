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
            onChange={handleUsernameChange}
            value={username}
            error={usernameError} // Display error message below the input field
          />

          <PasswordInput
            required
            id="pwdInput"
            label="Password"
            placeholder="Password"
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
                error={emailError}
              />
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
