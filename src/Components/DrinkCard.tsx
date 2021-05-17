import React from "react";

interface IDrinkCard {
	drink: IDrink
}

export const DrinkCard: React.FC<IDrinkCard> = ({ drink }: IDrinkCard): JSX.Element => {
	return (
		<div style={styles.drink}>
			<h2 style={{
				fontWeight: "lighter",
				textTransform: "capitalize",
				marginBottom: "5px"
			}}>
				{ drink.name }
			</h2>
			<h4 style={{
				paddingBottom: "5px",
				fontWeight: "lighter"
			}}>
				{ drink.recipe.toString().replace(/,/gmi, " - ") }
			</h4>
		</div>
	);
};

const styles = {
	drink: {
		backgroundColor: "#f4b6434a",
		margin: "auto",
		marginTop: "5px",
		marginBottom: "5px",
		border: "1px solid gray"
	}
} as IStyles;