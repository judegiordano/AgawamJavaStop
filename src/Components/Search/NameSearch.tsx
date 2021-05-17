import React, { useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";

import { DrinkCard } from "../DrinkCard";

interface INameSearch {
	drinks: IDrink[],
	drinkNames: string[]
}

export const NameSearch: React.FC<INameSearch> = ({ drinks: _drinks, drinkNames }: INameSearch): JSX.Element => {

	const staticDrinks = _drinks;
	const [drinks, setDrinks] = useState(_drinks);

	const handleChange = (event: React.ChangeEvent, value: string) => {
		if(!value) return setDrinks(staticDrinks);

		const temp = staticDrinks.filter(a => a.name === value);
		setDrinks(temp);
	};

	return (
		<div style={{maxWidth: "700px", margin: "auto"}}>
			<div style={{padding: "20px"}}>
				<Autocomplete
					id="combo-box-demo"
					options={drinkNames}
					getOptionLabel={(option) => option}
					onChange={handleChange}
					style={{ width: "100%", }}
					renderInput={(params) => (
						<TextField {...params} variant="outlined" label="Names" placeholder="choose name..." />
					)}
				/>
				<div style={{ width: "100%", textAlign: "center"}}>
					{
						drinks.map((drink, index) => (
							<DrinkCard drink={drink} key={index} />
						))
					}
				</div>
			</div>
		</div>
	);
};