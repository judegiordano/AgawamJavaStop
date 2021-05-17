import React from "react";
import { AccordionDetails, AccordionSummary, Accordion, Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { DrinkCard } from "./DrinkCard";

interface IDrinkAccordion {
	title: string,
	drinks: IDrink[]
}

export const DrinkAccordion: React.FC<IDrinkAccordion> = ({ title, drinks }: IDrinkAccordion): JSX.Element => {
	return (
		<Accordion
			TransitionProps={{ unmountOnExit: true }}
			style={{ margin: "auto", padding: "10px", marginTop: "5px", marginBottom: "5px", maxWidth: "700px" }}>
			<AccordionSummary expandIcon={<ExpandMore />}>
				<Typography style={{ width: "100%", textTransform: "uppercase" }}>{title}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<div style={{ width: "100%", textAlign: "center" }}>
					{
						drinks.map((drink, index) => (
							<DrinkCard drink={drink} key={index} />
						))
					}
				</div>
			</AccordionDetails>
		</Accordion>
	);
};