import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Router from "next/router";
import React from "react";
import { AppLayout } from "../../Components/AppLayout";

import { AppButton } from "../../Components/Elements/AppButton";
import { Cookie } from "../../Services/Cookie";
import { Rest, RestPublic } from "../../Services/Rest";

interface Iindex {
	styleProp?: IStyles,
	user: IAdmin
}

const index: React.FC<Iindex> = ({ styleProp, user }: Iindex): JSX.Element => {
	return (
		<AppLayout>
			<div style={{ ...styles.root, ...styleProp }}>
				<div>
					Logged in as: <span style={{color: "royalblue"}}>{ user.username }</span>
				</div>
				<AppButton
					text="Logout"
					onClick={async () => {
						const response = await RestPublic.Post("/logout");
						if (response.ok) return Router.push("/admin/login");
					}}
				/>
			</div>
		</AppLayout>
	);
};

const styles = {
	root: {
		textAlign: "center",
		padding: "20px"
	}
} as IStyles;

export default index;

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {

	const { jid } = ctx.req.cookies;

	if (!jid) {
		return {
			redirect: {
				destination: "/admin/login",
				permanent: false,
			},
		};
	}

	const response = await Rest.Post("admin/refresh", {}, { headers: { Authorization: `Bearer ${jid}` } });
	const { ok, data } = response;

	if (!ok) {
		return {
			redirect: {
				destination: "/admin/login",
				permanent: false,
			},
		};
	}

	Cookie.SetCtxCookie(ctx.res, data.token);

	return {
		props: {
			user: data.admin as IAdmin
		}
	};
};
