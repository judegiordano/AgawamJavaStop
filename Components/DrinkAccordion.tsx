import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

interface IDrink {
	name: string,
	recipe: string[],
	sugarFreeOption: boolean,
	isACtive: boolean
}

interface IDrinkAccordion {
	title: string,
	drinks: IDrink[]
}

export const DrinkAccordion: React.FC<IDrinkAccordion> = ({ title, drinks }: IDrinkAccordion): JSX.Element => {
	return (
		<Accordion
			TransitionProps={{ unmountOnExit: true }}
			style={{ margin: "auto", padding: "10px", marginTop: "5px", marginBottom: "5px", maxWidth: "700px" }}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography style={{ width: "100%", textTransform: "uppercase" }}>{title}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<div style={{ width: "100%", textAlign: "center" }}>
					{
						drinks.map((drink, index) => (
							<div style={styles.drink} key={index}>
								<h2 style={{
									fontWeight: "lighter",
									textTransform: "capitalize",
									marginBottom: "5px"
								}}>
									{drink.name}
								</h2>
								<h4 style={{
									paddingBottom: "5px",
									fontWeight: "lighter"
								}}>
									{drink.recipe.toString().replace(/,/gmi, " - ")}
								</h4>
							</div>
						))
					}
				</div>
			</AccordionDetails>
		</Accordion>
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
};