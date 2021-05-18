import { CircularProgress } from "@material-ui/core";
import React from "react";

interface IAppLoader {
	styleProp?: IStyles,
	visible: boolean
}

export const AppLoader: React.FC<IAppLoader> = ({ styleProp, visible }: IAppLoader): JSX.Element => {
	if(!visible) return (
		null
	);

	return (
		<div style={{...styles.root, ...styleProp}}>
			<CircularProgress size={50} />
		</div>
	);
};

const styles = {
	root: {
		textAlign: "center",
		padding: "10px"
	}
} as IStyles;