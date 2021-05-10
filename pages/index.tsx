import React from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import { DrinkAccordion } from "../Components/DrinkAccordion";
import { ScrollToTop } from "../Components/ScrollToTop";
import { SocialBar } from "../Components/SocialBar";

interface IDrink {
	name: string,
	recipe: string[],
	sugarFreeOption: boolean,
	isACtive: boolean
}

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
			<Head>
				<title>Agawam Java Stop</title>
				<meta charSet="UTF-8" />
				<meta name="node application" content="A simple web application" />
				<meta name="keywords" content="HTML,CSS,XML,JavaScript" />
				<meta name="Description" content="Agawam Java Stop Menu" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content="Agawam Java Stop" />
				<meta name="author" content="Jude Giordano" />
				<link rel="icon" href="/java-stop-logo.jpg" />
			</Head>

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

			<footer className={styles.footer}>
				developed by <a target="_blank" href="https://www.facebook.com/jude.giordano.1" rel="noreferrer">Jude Giordano</a> &#169; {new Date().getFullYear()}
			</footer>
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