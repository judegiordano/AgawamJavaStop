import React from "react";
import { GetStaticProps } from "next";

import styles from "../styles/Home.module.css";
import { DrinkAccordion } from "../Components/DrinkAccordion";
import { ScrollToTop } from "../Components/ScrollToTop";
import { SocialBar } from "../Components/SocialBar";
import { AppHead } from "../Components/AppHead";
import { AppFooter } from "../Components/AppFooter";
import { Rest } from "../Services/Rest";
import { SearchIcon } from "../Components/SearchIcon";

interface IHomeProps {
	drinks: IDrink[],
	chocolate: IDrink[],
	whiteChocolate: IDrink[],
	caramel: IDrink[],
	vanilla: IDrink[],
	sugarFree: IDrink[],
	other: IDrink[],
	ingredients: string[]
}

const Home: React.FC<IHomeProps> = ({
	drinks,
	chocolate,
	whiteChocolate,
	caramel,
	vanilla,
	sugarFree,
	other,
	ingredients
}: IHomeProps): JSX.Element => {

	return (
		<div className={styles.container}>
			<AppHead title="Agawam Java Stop" />

			<SocialBar />

			<h2 style={{ fontWeight: "lighter" }}>Agawam Java Stop Menu</h2>

			<div style={{ textAlign: "center", width: "100%" }}>
				<DrinkAccordion title="chocolate" drinks={chocolate} />
				<DrinkAccordion title="vanilla" drinks={vanilla} />
				<DrinkAccordion title="white chocolate" drinks={whiteChocolate} />
				<DrinkAccordion title="caramel" drinks={caramel} />
				<DrinkAccordion title="sugar free" drinks={sugarFree} />
				<DrinkAccordion title="other" drinks={other} />
			</div>

			<AppFooter />
			<ScrollToTop />
			<SearchIcon drinks={drinks} ingredients={ingredients} />
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {

	const allDrinks = await Rest.Get("/drinks/popular");
	const recipes = await Rest.Get("/recipes/");

	const {
		ingredients
	} = recipes.data;

	const { drinks,
		chocolate,
		whiteChocolate,
		vanilla,
		caramel,
		sugarFree,
		other } = allDrinks.data;

	return {
		props: {
			drinks,
			chocolate,
			whiteChocolate,
			vanilla,
			caramel,
			sugarFree,
			other,
			ingredients
		},
		revalidate: 60
	};
};

export default Home;