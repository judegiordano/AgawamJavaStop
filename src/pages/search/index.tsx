import React from "react";
import { GetStaticProps } from "next";

import { Rest } from "../../Services/Rest";
import { ScrollToTop } from "../../Components/ScrollToTop";
import { HomeIcon } from "../../Components/HomeIcon";
import { SearchTabs } from "../../Components/Search/SearchTabs";
import { AppHead } from "../../Components/AppHead";

interface Iindex {
	ingredients: string[],
	drinks: IDrink[],
	drinkNames: string[]
}

const index: React.FC<Iindex> = ({ ingredients, drinks, drinkNames }: Iindex): JSX.Element => {
	return (
		<div style={styles.root}>
			<AppHead title="Search" />
			<SearchTabs ingredients={ingredients} drinks={drinks} drinkNames={drinkNames} />
			<ScrollToTop />
			<HomeIcon />
		</div>
	);
};

const styles = {
	root: {
		textAlign: "center"
	}
} as IStyles;

export const getStaticProps: GetStaticProps = async () => {
	const recipes = await Rest.Get("/recipes/");
	const allDrinks = await Rest.Get("/drinks/");

	const drinkNames: string[] = [];
	allDrinks.data.drinks.forEach((drink: IDrink) => {
		drinkNames.push(drink.name);
	});
	
	return {
		props: {
			ingredients: recipes.data.ingredients,
			drinks: allDrinks.data.drinks,
			drinkNames
		},
		revalidate: 60
	};
};

export default index;