declare interface IStyles {
	[key: string]: React.CSSProperties
}

declare interface IDrink {
	name: string,
	recipe: string[],
	sugarFreeOption: boolean,
	isACtive: boolean
}