import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { SearchDialog } from "./SearchDialog";

interface ISearchIcon {
	drinks?: IDrink[],
	ingredients?: string[]
}

export const SearchIcon: React.FC<ISearchIcon> = ({drinks, ingredients }: ISearchIcon): JSX.Element => {

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div style={styles.root}>
			<IconButton aria-label="scrollTop" onClick={handleClickOpen} style={{padding: "0", paddingTop: "8px"}}>
				<SearchOutlined />
			</IconButton>
			<SearchDialog open={open} handleClose={handleClose} drinks={drinks} ingredients={ingredients} />
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