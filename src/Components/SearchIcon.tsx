import Link from "next/link";
import React from "react";
import { IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";

export const SearchIcon: React.FC = (): JSX.Element => {
	return (
		<div style={styles.root}>
			<IconButton aria-label="searchIcon" style={{padding: "0"}}>
				<Link href="/search">
					<SearchOutlined />
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