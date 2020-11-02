declare module '*.graphql' {
	import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
	const Schema: DocumentNode;
	export = Schema;
}
