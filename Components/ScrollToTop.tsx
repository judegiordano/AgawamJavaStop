import React from "react";
import { IconButton } from "@material-ui/core";
import { ArrowUpward } from "@material-ui/icons";
import { CSSProperties } from "@material-ui/styles";

export const ScrollToTop: React.FC = (): JSX.Element => {
	return (
		<div style={styles.root}>
			<IconButton aria-label="scrollTop" onClick={() => window["scrollTo"]({top: 0, behavior: "smooth"})} style={{padding: "0"}}>
				<ArrowUpward />
			</IconButton>
		</div>
	);
};

const styles = {
	root: {
		bottom: "20px",
		right: "20px",
		height: "40px",
		width: "40px",
		borderRadius: "20px",
		background: "gray",
		opacity: ".5",
		display: "inline-grid",
		fontSize: "20px",
		position: "fixed",
	}
} as CSSProperties;