import React, { useState } from "react";
import Router from "next/router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import { LockOutlined, HomeOutlined, MailOutline, MenuOutlined, SearchOutlined } from "@material-ui/icons";

interface IStyles {
	[key: string]: React.CSSProperties
}

interface INavBar {
	styleProp?: IStyles
}

export const NavBar: React.FC<INavBar> = ({ styleProp }: INavBar): JSX.Element => {

	const [open, setOpen] = useState(false);

	const toggleDrawer = (open: boolean) => (
		event: React.KeyboardEvent | React.MouseEvent,
	) => {
		if (
			event &&
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" ||
				(event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}
		setOpen(open);
	};

	const route = (to: string) => {
		Router.push(to);
		setOpen(false);
	};

	return (
		<div style={{ ...styles.root, ...styleProp }}>
			<AppBar position="fixed" style={{backgroundColor: "royalblue"}}>
				<Toolbar>
					<IconButton
						aria-label="open drawer"
						onClick={toggleDrawer(true)}
						style={{color: "black"}}
					>
						<MenuOutlined />
					</IconButton>
				</Toolbar>
			</AppBar>

			<SwipeableDrawer
				anchor="left"
				open={open}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
			>
				<Divider />
				<List style={{width: 240}}>

					<ListItem button onClick={() => route("/")}>
						<ListItemIcon>
							<HomeOutlined />
						</ListItemIcon>
						<ListItemText primary="home" />
					</ListItem>
					<Divider />

					<ListItem button onClick={() => route("/search")}>
						<ListItemIcon>
							<SearchOutlined />
						</ListItemIcon>
						<ListItemText primary="search" />
					</ListItem>
					<Divider />

					<ListItem button onClick={() => route("/contact")}>
						<ListItemIcon>
							<MailOutline />
						</ListItemIcon>
						<ListItemText primary="report a bug" />
					</ListItem>
					<Divider />

					<ListItem button onClick={() => route("/admin/login")}>
						<ListItemIcon>
							<LockOutlined />
						</ListItemIcon>
						<ListItemText primary="admin portal" />
					</ListItem>
					<Divider />
				</List>
			</SwipeableDrawer>
		</div>
	);
};

const styles = {
	root: {
		// margin: "auto",
		textAlign: "center"
	},
	link: {
	}
} as IStyles;