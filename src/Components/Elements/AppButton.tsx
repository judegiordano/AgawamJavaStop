import React from "react";
import { Button } from "@material-ui/core";

interface IAppButton {
	styleProp?: IStyles,
	text: string,
	onClick?: React.MouseEventHandler<HTMLButtonElement>,
	disabled?: boolean
}

export const AppButton: React.FC<IAppButton> = ({ styleProp, onClick, text, disabled=false }: IAppButton): JSX.Element => {
	return (
		<div style={{ ...styles.root, ...styleProp }}>
			<Button
				disabled={disabled}
				variant="contained"
				color="primary"
				onClick={onClick}
				type="submit">
				{ text }
			</Button>
		</div>
	);
};

const styles = {
	root: {
		textAlign: "center",
		padding: "10px"
	}
} as IStyles;