import React, { useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField, Checkbox } from "@material-ui/core";
import { CheckBox, CheckBoxOutlineBlank } from "@material-ui/icons";

import { DrinkCard } from "../DrinkCard";

interface IIngredientSearch {
	drinks: IDrink[],
	ingredients: string[]
}

const icon = <CheckBoxOutlineBlank fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;

export const IngredientSearch: React.FC<IIngredientSearch> = ({ ingredients, drinks: _drinks }: IIngredientSearch): JSX.Element => {

	const staticDrinks = _drinks;
	const [drinks, setDrinks] = useState(_drinks);

	const handleChange = (event: React.ChangeEvent, values: string[]) => {
		const temp = [];
		staticDrinks.forEach(drink => {
			const match = values.every(i => drink.recipe.includes(i));
			if(match) temp.push(drink);
		});
		setDrinks(temp);
	};

	return (
		<div style={{maxWidth: "700px", margin: "auto"}}>
			<div style={{padding: "20px"}}>
				<Autocomplete
					multiple
					id="checkboxes-tags-demo"
					options={ingredients}
					disableCloseOnSelect
					getOptionLabel={(option) => option}
					onChange={handleChange}
					renderOption={(option, { selected }) => (
						<React.Fragment>
							<Checkbox
								icon={icon}
								checkedIcon={checkedIcon}
								style={{ marginRight: 8 }}
								checked={selected}
							/>
							{option}
						</React.Fragment>
					)}
					style={{ width: "100%", }}
					renderInput={(params) => (
						<TextField {...params} variant="outlined" label="Ingredients" placeholder="choose ingredients..." />
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