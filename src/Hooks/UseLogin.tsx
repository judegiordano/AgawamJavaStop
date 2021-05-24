import React, { useState } from "react";
import Router from "next/router";

import { RestPublic } from "../Services/Rest";

interface IUseLogin {
	login: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
	password: string,
	setPassword: React.Dispatch<React.SetStateAction<string>>,
	username: string,
	setUsername: React.Dispatch<React.SetStateAction<string>>,
	loading: boolean,
	error: string
}

export const UseLogin = (): IUseLogin => {

	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const login = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
		setLoading(true);
		e.preventDefault();
		const response = await RestPublic.Post("login", { username, password });
		if (!response.ok) {
			setLoading(false);
			setUsername("");
			setPassword("");
			setError(response.data.error);
			return;
		}
		if (response.ok) {
			setLoading(false);
			setUsername("");
			setPassword("");
			setError("");
			Router.push("/admin");
			return;
		}
	};

	return {
		login,
		password,
		setPassword,
		username,
		setUsername,
		loading,
		error
	};
};