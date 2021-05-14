import React from "react";
import { IconButton } from "@material-ui/core";
import { Instagram, Facebook, Call } from "@material-ui/icons";

export const SocialBar: React.FC = (): JSX.Element => {
	return (
		<div>
			<a target="_blank" href="https://www.facebook.com/Agawamsjavastop" rel="noreferrer">
				<IconButton aria-label="facebookLink">
					<Facebook />
				</IconButton>
			</a>
			<a href="tel:+014137860000">
				<IconButton aria-label="phoneButton">
					<Call />
				</IconButton>
			</a>
			<a target="_blank" href="https://www.instagram.com/agawamsjavastop/" rel="noreferrer">
				<IconButton aria-label="instagramLink">
					<Instagram />
				</IconButton>
			</a>
		</div>
	);
};