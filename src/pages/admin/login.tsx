import { Card, CardContent } from "@material-ui/core";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";

import { AppLayout } from "../../Components/AppLayout";
import { AppButton } from "../../Components/Elements/AppButton";
import { AppInput } from "../../Components/Elements/AppInput";
import { AppLoader } from "../../Components/Elements/AppLoader";
import { UseLogin } from "../../Hooks/UseLogin";
import { Rest } from "../../Services/Rest";

const login: React.FC = (): JSX.Element => {

	const { login, password, setPassword, username, setUsername, loading, error } = UseLogin();

	return (
		<AppLayout>
			<div style={styles.root}>
				<Card style={{ width: "100%" }}>
					<CardContent>
						<form action="" onSubmit={login}>
							<AppInput
								error={error !== ""}
								label="Username"
								helperText={error}
								onChange={e => setUsername(e.target.value)}
							/>
							<AppInput
								error={error !== ""}
								label="Password"
								helperText={error}
								onChange={e => setPassword(e.target.value)}
								type="password"
							/>
							<AppButton
								text="Login"
								disabled={!username || !password || loading}
							/>
						</form>
					</CardContent>
				</Card>
			</div>
			<AppLoader visible={loading} />
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

export default login;

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {

	const { jid } = ctx.req.cookies;

	const response = await Rest.Post("admin/refresh", {}, { headers: { Authorization: `Bearer ${jid}` } });
	const { ok } = response;

	if (ok) {
		return {
			redirect: {
				destination: "/admin",
				permanent: false,
			},
		};
	}

	return {
		props: {}
	};
};
