import { NextApiRequest, NextApiResponse } from "next";

import connect from "../../../MIddleware/DbConnect";
import Drink, { IDrink } from "../../../Models/Drink";

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	try {
		const drinks: IDrink[] = await Drink.find().select("-_id").sort({ name: 1 });
		res.status(200).json({
			drinks,
			chocolate: drinks.filter(a => a.recipe.includes("chocolate")),
			whiteChocolate: drinks.filter(a => a.recipe.includes("white chocolate")),
			vanilla: drinks.filter(a => a.recipe.includes("vanilla")),
			caramel: drinks.filter(a => a.recipe.includes("caramel")),
			sugarFree: drinks.filter(a => a.sugarFreeOption),
			other: drinks.filter(a =>
				!a.recipe.includes("chocolate") &&
				!a.recipe.includes("white chocolate") &&
				!a.recipe.includes("vanilla") &&
				!a.recipe.includes("caramel")
			)
		});
	} catch (error) {
		res.status(500).json({ error: error.toString() });
	}
};

export default connect(handler);