import React from "react";
import { GetStaticProps } from "next";

import { Rest } from "../../Services/Rest";
import { ScrollToTop } from "../../Components/ScrollToTop";
import { HomeIcon } from "../../Components/HomeIcon";
import { SearchTabs } from "../../Components/Search/SearchTabs";
import { AppLayout } from "../../Components/AppLayout";

interface Iindex {
	ingredients: string[],
	drinks: IDrink[],
	drinkNames: string[]
}

const index: React.FC<Iindex> = ({ ingredients, drinks, drinkNames }: Iindex): JSX.Element => {
	return (
		<AppLayout>
			<div style={styles.root}>
				<SearchTabs ingredients={ingredients} drinks={drinks} drinkNames={drinkNames} />
				<ScrollToTop />
				<HomeIcon />
			</div>
		</AppLayout>
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