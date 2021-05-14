import React from "react";
import { GetStaticProps } from "next";

import styles from "../styles/Home.module.css";
import { DrinkAccordion } from "../Components/DrinkAccordion";
import { ScrollToTop } from "../Components/ScrollToTop";
import { SocialBar } from "../Components/SocialBar";
import { AppHead } from "../Components/AppHead";
import { AppFooter } from "../Components/AppFooter";
import { Rest } from "../Services/Rest";

interface IHomeProps {
	chocolate: IDrink[],
	whiteChocolate: IDrink[],
	caramel: IDrink[],
	vanilla: IDrink[],
	sugarFree: IDrink[],
	other: IDrink[]
}

const Home: React.FC<IHomeProps> = ({
	chocolate,
	whiteChocolate,
	caramel,
	vanilla,
	sugarFree,
	other
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
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {

	const response = await Rest.Get("/drinks");
	const { drinks } = response.data;

	// TODO: lets move this filter logic to the backend
	const chocolate = drinks.filter(a => a.recipe.includes("chocolate"));
	const whiteChocolate = drinks.filter(a => a.recipe.includes("white chocolate"));
	const vanilla = drinks.filter(a => a.recipe.includes("vanilla"));
	const caramel = drinks.filter(a => a.recipe.includes("caramel"));
	const sugarFree = drinks.filter(a => a.sugarFreeOption);
	const other = drinks.filter(a =>
		!a.recipe.includes("chocolate") &&
		!a.recipe.includes("white chocolate") &&
		!a.recipe.includes("vanilla") &&
		!a.recipe.includes("caramel")
	);

	return {
		props: {
			drinks,
			chocolate,
			whiteChocolate,
			vanilla,
			caramel,
			sugarFree,
			other
		},
		revalidate: 60
	};
};

export default Home;