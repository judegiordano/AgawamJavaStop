import React, { useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
import { IngredientSearch } from "./IngredientSearch";
import { TabPanel } from "./TabPanel";
import { NameSearch } from "./NameSearch";

interface ISearchTabs {
	styleProp?: IStyles,
	ingredients: string[],
	drinks: IDrink[],
	drinkNames: string[]
}

const a11yProps = (index: number) => {
	return {
		id: `full-width-tab-${index}`,
		"aria-controls": `full-width-tabpanel-${index}`,
	};
};

export const SearchTabs: React.FC<ISearchTabs> = ({ styleProp, ingredients, drinks, drinkNames }: ISearchTabs): JSX.Element => {
	
	const [value, setValue] = useState(0);

	const handleChange = (event: React.ChangeEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<div style={{ ...styles.root, ...styleProp }}>
			<Tabs
				value={value}
				onChange={handleChange}
				indicatorColor="primary"
				textColor="primary"
				centered
			>
				<Tab label="Ingredients" {...a11yProps(0)} />
				<Tab label="Name" {...a11yProps(1)} />
			</Tabs>
			<TabPanel value={value} index={0}>
				<IngredientSearch drinks={drinks} ingredients={ingredients} />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<NameSearch drinks={drinks} drinkNames={drinkNames} />
			</TabPanel>
		</div>
	);
};

const styles = {
	root: {
		textAlign: "center"
	}
} as IStyles;