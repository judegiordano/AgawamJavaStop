import React from "react";
import { GetStaticProps } from "next";
import axios from "axios";

import styles from "../styles/Home.module.css";
import { DrinkAccordion } from "../Components/DrinkAccordion";
import { ScrollToTop } from "../Components/ScrollToTop";
import { SocialBar } from "../Components/SocialBar";
import { AppHead } from "../Components/AppHead";
import { AppFooter } from "../Components/AppFooter";

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

	const response = await axios.get(`${process.env.HOST}drinks`);

	const {
		drinks,
		chocolate,
		whiteChocolate,
		vanilla,
		caramel,
		sugarFree,
		other
	} = response.data;

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