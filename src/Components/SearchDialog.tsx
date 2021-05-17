import React from "react";
import { Close } from "@material-ui/icons";
import { Slide,
	TransitionsOptions,
	Typography,
	IconButton,
	Toolbar,
	AppBar,
	Dialog
} from "@material-ui/core";

import { IngredientSearch } from "./IngredientSearch";

interface ISearchDialog {
	drinks: IDrink[],
	ingredients: string[],
	open: boolean,
	handleClose: React.MouseEventHandler<HTMLButtonElement>
}

const Transition = React.forwardRef(function Transition(
	props: TransitionsOptions & { children?: React.ReactElement },
	ref: React.Ref<unknown>,
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export const SearchDialog: React.FC<ISearchDialog> = ({ open, handleClose, drinks, ingredients }: ISearchDialog): JSX.Element => {

	return (
		<div style={styles.root}>
			<Dialog fullScreen open={open} style={{margin: "auto"}} onClose={handleClose} TransitionComponent={Transition}>
				<AppBar>
					<Toolbar>
						<IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
							<Close />
						</IconButton>
						<Typography variant="h6">
							Search
						</Typography>
					</Toolbar>
				</AppBar>
				<div style={{paddingTop: "70px"}}>
					<IngredientSearch drinks={drinks} ingredients={ingredients} />
				</div>
			</Dialog>
		</div>
	);
};

const styles = {
	root: {
		margin: "auto",
		textAlign: "center",
		padding: "20px",
		maxWidth: "700px"
	}
} as IStyles;