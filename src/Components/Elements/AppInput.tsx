import { TextField } from "@material-ui/core";
import React from "react";

interface IInput {
	styleProp?: IStyles,
	onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,
	helperText: string,
	error: boolean,
	label: string,
	type?: string
}

export const AppInput: React.FC<IInput> = ({ styleProp, onChange, error, helperText, label, type }: IInput): JSX.Element => {
	return (
		<div style={{...styles.root, ...styleProp}}>
			<TextField
				style={{ width: "!00%", display: "flex" }}
				error={error}
				helperText={helperText}
				variant="outlined"
				onChange={onChange}
				label={label}
				type={type}
			/>
		</div>
	);
};

const styles = {
	root: {
		margin: "auto",
		textAlign: "center",
		paddingTop: "10px",
		paddingBottom: "10px",
		maxWidth: "300px"
	}
} as IStyles;