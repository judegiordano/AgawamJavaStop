import React from "react";
import { GetStaticProps } from "next";

import { DrinkAccordion } from "../Components/DrinkAccordion";
import { ScrollToTop } from "../Components/ScrollToTop";
import { Rest } from "../Services/Rest";
import { SearchIcon } from "../Components/SearchIcon";
import { AppLayout } from "../Components/AppLayout";

interface IHomeProps {
	chocolate: IDrink[],
	whiteChocolate: IDrink[],
	caramel: IDrink[],
	vanilla: IDrink[],
	sugarFree: IDrink[],
	other: IDrink[],
}

const Home: React.FC<IHomeProps> = ({
	chocolate,
	whiteChocolate,
	caramel,
	vanilla,
	sugarFree,
	other,
}: IHomeProps): JSX.Element => {

	return (
		<AppLayout>
			<div style={{width: "100%", textAlign: "center", paddingTop: "10px"}}>
				<h2 style={{ fontWeight: "lighter" }}>Agawam Java Stop Menu</h2>

				<div style={{ textAlign: "center", width: "100%" }}>
					<DrinkAccordion title="chocolate" drinks={chocolate} />
					<DrinkAccordion title="vanilla" drinks={vanilla} />
					<DrinkAccordion title="white chocolate" drinks={whiteChocolate} />
					<DrinkAccordion title="caramel" drinks={caramel} />
					<DrinkAccordion title="sugar free" drinks={sugarFree} />
					<DrinkAccordion title="other" drinks={other} />
				</div>

				<ScrollToTop />
				<SearchIcon />
			</div>
		</AppLayout>
	);
};

export const getStaticProps: GetStaticProps = async () => {

	const allDrinks = await Rest.Get("/drinks/popular");

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
		},
		revalidate: 60
	};
};

export default Home;