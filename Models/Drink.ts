import mongoose, { Document, Schema } from "mongoose";

export interface IDrink extends Document {
    name: string,
    recipe: string[],
    sugarFreeOption: boolean,
    isACtive: boolean
}

const Drink = new Schema(
	{
		name: {
			type: String,
			required: true
		},
        recipe: {
            type: Array,
        },
        sugarFreeOption: {
            type: Boolean
        },
		isACtive: {
			type: Boolean,
			default: true
		}
	},
	{
		collection: "DevDb",
		versionKey: false
	}
);

export default mongoose.models.Drink || mongoose.model<IDrink>("DevDb", Drink);