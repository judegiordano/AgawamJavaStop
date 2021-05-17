import React from "react";
import { Box, Typography } from "@material-ui/core";

interface ITabPanel {
	children?: React.ReactNode,
	index: number,
	value: number
}

export const TabPanel: React.FC<ITabPanel> = ({ children, index, value, ...other }: ITabPanel): JSX.Element => {
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{ children }</Typography>
				</Box>
			)}
		</div>
	);
};