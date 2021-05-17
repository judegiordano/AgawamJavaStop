import Link from "next/link";
import { IconButton } from "@material-ui/core";
import { HomeOutlined } from "@material-ui/icons";
import React from "react";

export const HomeIcon: React.FC = (): JSX.Element => {
	return (
		<div style={styles.root}>
			<IconButton aria-label="scrollTop" style={{padding: "0"}}>
				<Link href="/">
					<HomeOutlined />
				</Link>
			</IconButton>
		</div>
	);
};

const styles = {
	root: {
		bottom: "20px",
		left: "20px",
		height: "40px",
		width: "40px",
		borderRadius: "20px",
		background: "gray",
		opacity: ".5",
		display: "inline-grid",
		fontSize: "20px",
		position: "fixed",
	}
} as IStyles;