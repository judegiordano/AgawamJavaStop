import React from "react";
import { IconButton } from "@material-ui/core";
import { Instagram, Facebook, Call } from "@material-ui/icons";

export const SocialBar: React.FC = (): JSX.Element => {
	return (
		<div>
			<a target="_blank" href="https://www.facebook.com/Agawamsjavastop" rel="noreferrer">
				<IconButton>
					<Facebook />
				</IconButton>
			</a>
			<a href="tel:+014137860000">
				<IconButton>
					<Call />
				</IconButton>
			</a>
			<a target="_blank" href="https://www.instagram.com/agawamsjavastop/" rel="noreferrer">
				<IconButton>
					<Instagram />
				</IconButton>
			</a>
		</div>
	);
};