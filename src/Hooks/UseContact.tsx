import React, { useState, useRef } from "react";
import Router from "next/router";
import ReCAPTCHA from "react-google-recaptcha";

import { RestPublic } from "../Services/Rest";

interface IUseContact {
	contact: (e: React.FormEvent<HTMLFormElement>) => Promise<void>,
	loading: boolean,
	error: string,
	body: {
		email: string;
		name: string;
		message: string;
	},
	setBody: React.Dispatch<React.SetStateAction<{
		email: string;
		name: string;
		message: string;
	}>>,
	reRef: React.MutableRefObject<ReCAPTCHA | undefined>
}

export const UseContact = (): IUseContact => {

	const [body, setBody] = useState({
		email: "",
		name: "",
		message: ""
	});
	const reRef = useRef<ReCAPTCHA>();

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const contact = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
		setLoading(true);
		e.preventDefault();
		const token = await reRef.current?.executeAsync();
		reRef.current?.reset();

		const response = await RestPublic.Post("mail", { ...body, token });
		const { data } = response;

		if (!data.ok) {
			setLoading(false);
			setError("internal error");
			return;
		}
		if (data.ok) {
			Router.push(`/contact/success?name=${body.name}`);
			setError("");
			setLoading(false);
			return;
		}
	};

	return {
		error,
		loading,
		contact,
		body,
		setBody,
		reRef
	};
};