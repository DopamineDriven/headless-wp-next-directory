export type RequiredKeys<T> = {
	[K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

// example from Tim Suchanek TSConf2020
type UserSelect = {
	id?: boolean;
	name?: boolean;
};

type User = {
	id: number;
	name: string;
};

type OptionalityError = 'Please only pass in the object directly.';

type ReqKeys<T> = {
	[K in keyof T]-?: {} extends Pick<T, K> ? OptionalityError : K;
}[keyof T];

declare function getUserReturnType<T extends UserSelect, U = ReqKeys<T>>(
	select: T
): OptionalityError extends U
	? OptionalityError
	: {
			[K in ReqKeys<T>]: K extends keyof User ? User[K] : never;
	  };

const exampleUser = getUserReturnType({
	id: true
});

const params: UserSelect = { id: true, name: true };
const exampleUser2 = getUserReturnType(params);
