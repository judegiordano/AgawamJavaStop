import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import ReCAPTCHA from "react-google-recaptcha";

import { AppLayout } from "../../Components/AppLayout";
import { AppButton } from "../../Components/Elements/AppButton";
import { AppInput } from "../../Components/Elements/AppInput";
import { AppLoader } from "../../Components/Elements/AppLoader";
import { UseContact } from "../../Hooks/UseContact";
import { ClientConfig } from "../../Services/ClientConfig";
import { MultiLineInput } from "../../Components/Elements/MultiLineInput";

const Index: React.FC = (): JSX.Element => {

	const { error, loading, contact, body, setBody, reRef } = UseContact();

	return (
		<AppLayout>
			<div style={styles.root}>
				<Typography style={{fontSize: "25px"}}>
						Important!
				</Typography>
				<Typography style={{maxWidth: "500px", textAlign: "center", margin: "auto", paddingBottom: "10px"}}>
					This page is for reporting technical bugs associated with the site. This page is not intended as a general purpose contact form.
				</Typography>
				<Card style={{ width: "100%" }}>
					<CardContent>
						<form action="" onSubmit={contact}>
							<AppInput
								styleProp={{maxWidth: "500px"} as IStyles}
								label="Your Email"
								error={error !== ""}
								type="email"
								helperText={error}
								required
								disabled={loading}
								onChange={e => {
									setBody({
										...body,
										email: e.target.value
									});
								}}
							/>
							<AppInput
								styleProp={{maxWidth: "500px"} as IStyles}
								label="Your Name"
								error={error !== ""}
								type="text"
								helperText={error}
								required
								disabled={loading}
								onChange={e => {
									setBody({
										...body,
										name: e.target.value
									});
								}}
							/>
							<MultiLineInput
								placeholder="your message..."
								label="Message"
								maxlength={500}
								disabled={loading}
								required
								onChange={e => {
									setBody({
										...body,
										message: e.target.value
									});
								}}
							/>
							<AppButton
								text="Report Bug"
								disabled={!body.email || !body.name || !body.message || loading}
							/>
						</form>
					</CardContent>
				</Card>
			</div>
			<AppLoader visible={loading} />
			<ReCAPTCHA
				sitekey={ClientConfig.Public.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
				size="invisible"
				ref={reRef as React.LegacyRef<ReCAPTCHA>}
			/>
		</AppLayout>
	);
};

const styles = {
	root: {
		textAlign: "center",
		padding: "20px",
		width: "100%",
		maxWidth: "700px"
	}
} as IStyles;

export default Index;