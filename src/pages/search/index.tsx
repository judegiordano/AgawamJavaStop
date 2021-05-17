import React from "react";
import { GetStaticProps } from "next";

import { IngredientSearch } from "../../Components/IngredientSearch";
import { Rest } from "../../Services/Rest";
import { ScrollToTop } from "../../Components/ScrollToTop";
import { HomeIcon } from "../../Components/HomeIcon";

interface Iindex {
	ingredients: string[],
	drinks: IDrink[]
}

const index: React.FC<Iindex> = ({ ingredients, drinks }: Iindex): JSX.Element => {
	return (
		<div style={styles.root}>
			<IngredientSearch drinks={drinks} ingredients={ingredients} />
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
	
	return {
		props: {
			ingredients: recipes.data.ingredients,
			drinks: allDrinks.data.drinks
		},
		revalidate: 60
	};
};

export default index;