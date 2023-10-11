import { useRouter } from 'next/router';
import { useCookies } from "react-cookie";
import { Loader, Text, TextInput, Button, PasswordInput, Space } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { useState, useEffect } from "react";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();


const Register = () => {

	const router = useRouter();
	const [cookie, setCookie] = useCookies(["auth"]);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const registerUser = async (event) => {
		const body = {
			email: event.email,
			password: event.password
		};

		const res = await fetch(
			publicRuntimeConfig.DEV_URL + 'researchers/login',
			{
				body: JSON.stringify(body),
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST'
			}
		)

		const result = await res.json();
		if (res.status == 201) {
			setCookie('auth', result.token, { path: '/', maxAge: 3600, secure: true, sameSite: true });
			router.push('/dashboard');
		}

	};

	const form = useForm({
		initialValues: {
			email: '',
			password: '',
			stayLogged: false,
		},

		validationRules: {
			email: (value) => /^\S+@\S+$/.test(value),
			password: (password) => password.trim().length >= 2,
		},
	});

	return (
		<>
			<div style={{ width: 400, margin: "50px auto", backgroundColor: "#ebedef", borderRadius: 10, padding: 10, }}>
				<form onSubmit={form.onSubmit((values) => registerUser(values))}>
					<TextInput
						required
						id="emailInput"
						label="Email"
						placeholder="your@email.com"
						{...form.getInputProps('email')}
					/>

					<PasswordInput
						required
						id="pwdInput"
						label="Password"
						placeholder="password"
						{...form.getInputProps('password')}
					/>

					<Space h="xl" />
					<div style={{ display: "flex", justifyContent: "right" }}>
						{isError && <Text color="red">
							Login/password are not matching
						</Text>}
						{isLoading &&
							<Loader/>
						}
						<Button id="submit" type="submit">Log in</Button>
					</div>
					<Space h="xl" />
					<div style={{ display: "flex", justifyContent: "left", fontStyle: "italic", fontSize: "12px"}}>
					If you have problems logging in and out, check if you block coockies (for example, with Ghostery).
					</div>
				</form>
			</div>
		</>
	)
}

export default Register;