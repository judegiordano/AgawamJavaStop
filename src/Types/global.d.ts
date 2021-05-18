declare interface IStyles {
	[key: string]: React.CSSProperties
}

declare interface IDrink {
	name: string,
	recipe: string[],
	sugarFreeOption: boolean,
	isACtive: boolean
}

declare interface IAdmin {
	id: number,
	uid: string,
	username: string,
	tokenVersion: number,
	createdAt: Date
}