import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Card, CardContent, Typography } from "@material-ui/core";
import { CheckCircleOutlineOutlined } from "@material-ui/icons";

import { AppLayout } from "../../Components/AppLayout";

interface IContact {
	styleProp?: IStyles,
	name: string
}

const Success: React.FC<IContact> = ({ name }: IContact): JSX.Element => {
	return (
		<AppLayout>
			<div style={styles.root}>
				<Card style={{ width: "100%" }}>
					<CardContent>
						<Typography>
							Your Email Has Been Sent!
						</Typography>
						<Typography>
							Thanks For Reaching out { name }
						</Typography>
						<CheckCircleOutlineOutlined style={styles.icon} />
					</CardContent>
				</Card>
			</div>
		</AppLayout>
	);
};

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const name = ctx.query.name as string;

	if (!name) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	return {
		props: {
			name: name.trim()
		}
	};
};

const styles = {
	root: {
		textAlign: "center",
		padding: "20px",
		width: "100%",
		maxWidth: "700px"
	},
	icon: {
		color: "lightgreen",
		height: "70px",
		width: "70px",
		paddingTop: "20px"
	}
} as IStyles;

export default Success;