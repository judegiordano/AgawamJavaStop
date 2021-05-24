import { TextField } from "@material-ui/core";
import React from "react";

interface IInput {
	styleProp?: IStyles,
	onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,
	helperText: string,
	error: boolean,
	label: string,
	type?: string,
	required?: boolean,
	disabled?: boolean,
	ref?: React.Ref<HTMLDivElement>,
	value?: unknown
}

export const AppInput: React.FC<IInput> = ({ styleProp, onChange, error, helperText, label, type, required, disabled, ref, value }: IInput): JSX.Element => {
	return (
		<div style={{...styles.root, ...styleProp}}>
			<TextField
				style={{ width: "!00%", display: "flex" }}
				error={error}
				helperText={helperText}
				variant="outlined"
				disabled={disabled}
				onChange={onChange}
				label={label}
				required={required}
				type={type}
				ref={ref}
				value={value}
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