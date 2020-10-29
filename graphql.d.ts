import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

/** The root entry point into the Graph */
export type RootQuery = {
	__typename?: 'RootQuery';
	/**
	 * Entry point to get all settings for the site
	 * @deprecated
	 */
	allSettings?: Maybe<Settings>;
	/**
	 * Connection between the RootQuery type and the category type
	 * @deprecated
	 */
	categories?: Maybe<RootQueryToCategoryConnection>;
	/**
	 * A 0bject
	 * @deprecated
	 */
	category?: Maybe<Category>;
	/**
	 * Returns a Comment
	 * @deprecated
	 */
	comment?: Maybe<Comment>;
	/**
	 * Connection between the RootQuery type and the Comment type
	 * @deprecated
	 */
	comments?: Maybe<RootQueryToCommentConnection>;
	/**
	 * A node used to manage content
	 * @deprecated
	 */
	contentNode?: Maybe<ContentNode>;
	/**
	 * Connection between the RootQuery type and the ContentNode type
	 * @deprecated
	 */
	contentNodes?: Maybe<RootQueryToContentNodeConnection>;
	/**
	 * Fetch a Content Type node by unique Identifier
	 * @deprecated
	 */
	contentType?: Maybe<ContentType>;
	/**
	 * Connection between the RootQuery type and the ContentType type
	 * @deprecated
	 */
	contentTypes?: Maybe<RootQueryToContentTypeConnection>;
	/** @deprecated  */
	discussionSettings?: Maybe<DiscussionSettings>;
	/** @deprecated  */
	generalSettings?: Maybe<GeneralSettings>;
	/**
	 * An object of the mediaItem Type.
	 * @deprecated
	 */
	mediaItem?: Maybe<MediaItem>;
	/**
	 * A mediaItem object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	mediaItemBy?: Maybe<MediaItem>;
	/**
	 * Connection between the RootQuery type and the mediaItem type
	 * @deprecated
	 */
	mediaItems?: Maybe<RootQueryToMediaItemConnection>;
	/**
	 * A WordPress navigation menu
	 * @deprecated
	 */
	menu?: Maybe<Menu>;
	/**
	 * A WordPress navigation menu item
	 * @deprecated
	 */
	menuItem?: Maybe<MenuItem>;
	/**
	 * Connection between the RootQuery type and the MenuItem type
	 * @deprecated
	 */
	menuItems?: Maybe<RootQueryToMenuItemConnection>;
	/**
	 * Connection between the RootQuery type and the Menu type
	 * @deprecated
	 */
	menus?: Maybe<RootQueryToMenuConnection>;
	/**
	 * Fetches an object given its ID
	 * @deprecated
	 */
	node?: Maybe<Node>;
	/** @deprecated  */
	nodeByUri?: Maybe<UniformResourceIdentifiable>;
	/**
	 * An object of the page Type.
	 * @deprecated
	 */
	page?: Maybe<Page>;
	/**
	 * A page object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	pageBy?: Maybe<Page>;
	/**
	 * Connection between the RootQuery type and the page type
	 * @deprecated
	 */
	pages?: Maybe<RootQueryToPageConnection>;
	/**
	 * A WordPress plugin
	 * @deprecated
	 */
	plugin?: Maybe<Plugin>;
	/**
	 * Connection between the RootQuery type and the Plugin type
	 * @deprecated
	 */
	plugins?: Maybe<RootQueryToPluginConnection>;
	/**
	 * An object of the post Type.
	 * @deprecated
	 */
	post?: Maybe<Post>;
	/**
	 * A post object
	 * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
	 */
	postBy?: Maybe<Post>;
	/**
	 * A 0bject
	 * @deprecated
	 */
	postFormat?: Maybe<PostFormat>;
	/**
	 * Connection between the RootQuery type and the postFormat type
	 * @deprecated
	 */
	postFormats?: Maybe<RootQueryToPostFormatConnection>;
	/**
	 * Connection between the RootQuery type and the post type
	 * @deprecated
	 */
	posts?: Maybe<RootQueryToPostConnection>;
	/** @deprecated  */
	readingSettings?: Maybe<ReadingSettings>;
	/**
	 * Connection between the RootQuery type and the EnqueuedScript type
	 * @deprecated
	 */
	registeredScripts?: Maybe<RootQueryToEnqueuedScriptConnection>;
	/**
	 * Connection between the RootQuery type and the EnqueuedStylesheet type
	 * @deprecated
	 */
	registeredStylesheets?: Maybe<RootQueryToEnqueuedStylesheetConnection>;
	/**
	 * Connection between the RootQuery type and the ContentRevisionUnion type
	 * @deprecated
	 */
	revisions?: Maybe<RootQueryToContentRevisionUnionConnection>;
	/**
	 * A 0bject
	 * @deprecated
	 */
	tag?: Maybe<Tag>;
	/**
	 * Connection between the RootQuery type and the tag type
	 * @deprecated
	 */
	tags?: Maybe<RootQueryToTagConnection>;
	/**
	 * Connection between the RootQuery type and the Taxonomy type
	 * @deprecated
	 */
	taxonomies?: Maybe<RootQueryToTaxonomyConnection>;
	/**
	 * Fetch a Taxonomy node by unique Identifier
	 * @deprecated
	 */
	taxonomy?: Maybe<Taxonomy>;
	/**
	 * A node in a taxonomy used to group and relate content nodes
	 * @deprecated
	 */
	termNode?: Maybe<TermNode>;
	/**
	 * Connection between the RootQuery type and the TermNode type
	 * @deprecated
	 */
	terms?: Maybe<RootQueryToTermNodeConnection>;
	/**
	 * A Theme object
	 * @deprecated
	 */
	theme?: Maybe<Theme>;
	/**
	 * Connection between the RootQuery type and the Theme type
	 * @deprecated
	 */
	themes?: Maybe<RootQueryToThemeConnection>;
	/**
	 * Returns a user
	 * @deprecated
	 */
	user?: Maybe<User>;
	/**
	 * Returns a user role
	 * @deprecated
	 */
	userRole?: Maybe<UserRole>;
	/**
	 * Connection between the RootQuery type and the UserRole type
	 * @deprecated
	 */
	userRoles?: Maybe<RootQueryToUserRoleConnection>;
	/**
	 * Connection between the RootQuery type and the User type
	 * @deprecated
	 */
	users?: Maybe<RootQueryToUserConnection>;
	/**
	 * Returns the current user
	 * @deprecated
	 */
	viewer?: Maybe<User>;
	/** @deprecated  */
	writingSettings?: Maybe<WritingSettings>;
};

/** The root entry point into the Graph */
export type RootQueryCategoriesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToCategoryConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryCategoryArgs = {
	id: Scalars['ID'];
	idType?: Maybe<CategoryIdType>;
};

/** The root entry point into the Graph */
export type RootQueryCommentArgs = {
	id: Scalars['ID'];
};

/** The root entry point into the Graph */
export type RootQueryCommentsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToCommentConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryContentNodeArgs = {
	id: Scalars['ID'];
	idType?: Maybe<ContentNodeIdTypeEnum>;
	contentType?: Maybe<ContentTypeEnum>;
	asPreview?: Maybe<Scalars['Boolean']>;
};

/** The root entry point into the Graph */
export type RootQueryContentNodesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToContentNodeConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryContentTypeArgs = {
	id: Scalars['ID'];
	idType?: Maybe<ContentTypeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryContentTypesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryMediaItemArgs = {
	id: Scalars['ID'];
	idType?: Maybe<MediaItemIdType>;
	asPreview?: Maybe<Scalars['Boolean']>;
};

/** The root entry point into the Graph */
export type RootQueryMediaItemByArgs = {
	id?: Maybe<Scalars['ID']>;
	mediaItemId?: Maybe<Scalars['Int']>;
	uri?: Maybe<Scalars['String']>;
	slug?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryMediaItemsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToMediaItemConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryMenuArgs = {
	id: Scalars['ID'];
	idType?: Maybe<MenuNodeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryMenuItemArgs = {
	id: Scalars['ID'];
	idType?: Maybe<MenuItemNodeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryMenuItemsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToMenuItemConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryMenusArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToMenuConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryNodeArgs = {
	id?: Maybe<Scalars['ID']>;
};

/** The root entry point into the Graph */
export type RootQueryNodeByUriArgs = {
	uri: Scalars['String'];
};

/** The root entry point into the Graph */
export type RootQueryPageArgs = {
	id: Scalars['ID'];
	idType?: Maybe<PageIdType>;
	asPreview?: Maybe<Scalars['Boolean']>;
};

/** The root entry point into the Graph */
export type RootQueryPageByArgs = {
	id?: Maybe<Scalars['ID']>;
	pageId?: Maybe<Scalars['Int']>;
	uri?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryPagesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToPageConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryPluginArgs = {
	id: Scalars['ID'];
};

/** The root entry point into the Graph */
export type RootQueryPluginsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryPostArgs = {
	id: Scalars['ID'];
	idType?: Maybe<PostIdType>;
	asPreview?: Maybe<Scalars['Boolean']>;
};

/** The root entry point into the Graph */
export type RootQueryPostByArgs = {
	id?: Maybe<Scalars['ID']>;
	postId?: Maybe<Scalars['Int']>;
	uri?: Maybe<Scalars['String']>;
	slug?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryPostFormatArgs = {
	id: Scalars['ID'];
	idType?: Maybe<PostFormatIdType>;
};

/** The root entry point into the Graph */
export type RootQueryPostFormatsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToPostFormatConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryPostsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToPostConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryRegisteredScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryRegisteredStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryRevisionsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToContentRevisionUnionConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryTagArgs = {
	id: Scalars['ID'];
	idType?: Maybe<TagIdType>;
};

/** The root entry point into the Graph */
export type RootQueryTagsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToTagConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryTaxonomiesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryTaxonomyArgs = {
	id: Scalars['ID'];
	idType?: Maybe<TaxonomyIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryTermNodeArgs = {
	id: Scalars['ID'];
	idType?: Maybe<TermNodeIdTypeEnum>;
	taxonomy?: Maybe<TaxonomyEnum>;
};

/** The root entry point into the Graph */
export type RootQueryTermsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToTermNodeConnectionWhereArgs>;
};

/** The root entry point into the Graph */
export type RootQueryThemeArgs = {
	id: Scalars['ID'];
};

/** The root entry point into the Graph */
export type RootQueryThemesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryUserArgs = {
	id: Scalars['ID'];
	idType?: Maybe<UserNodeIdTypeEnum>;
};

/** The root entry point into the Graph */
export type RootQueryUserRoleArgs = {
	id: Scalars['ID'];
};

/** The root entry point into the Graph */
export type RootQueryUserRolesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The root entry point into the Graph */
export type RootQueryUsersArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<RootQueryToUserConnectionWhereArgs>;
};

/** All of the registered settings */
export type Settings = {
	__typename?: 'Settings';
	/**
	 * Allow people to submit comments on new posts.
	 * @deprecated
	 */
	discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
	/**
	 * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
	 * @deprecated
	 */
	discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
	/**
	 * A date format for all date strings.
	 * @deprecated
	 */
	generalSettingsDateFormat?: Maybe<Scalars['String']>;
	/**
	 * Site tagline.
	 * @deprecated
	 */
	generalSettingsDescription?: Maybe<Scalars['String']>;
	/**
	 * This address is used for admin purposes, like new user notification.
	 * @deprecated
	 */
	generalSettingsEmail?: Maybe<Scalars['String']>;
	/**
	 * WordPress locale code.
	 * @deprecated
	 */
	generalSettingsLanguage?: Maybe<Scalars['String']>;
	/**
	 * A day number of the week that the week should start on.
	 * @deprecated
	 */
	generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
	/**
	 * A time format for all time strings.
	 * @deprecated
	 */
	generalSettingsTimeFormat?: Maybe<Scalars['String']>;
	/**
	 * A city in the same timezone as you.
	 * @deprecated
	 */
	generalSettingsTimezone?: Maybe<Scalars['String']>;
	/**
	 * Site title.
	 * @deprecated
	 */
	generalSettingsTitle?: Maybe<Scalars['String']>;
	/**
	 * Site URL.
	 * @deprecated
	 */
	generalSettingsUrl?: Maybe<Scalars['String']>;
	/**
	 * Blog pages show at most.
	 * @deprecated
	 */
	readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
	/**
	 * Default post category.
	 * @deprecated
	 */
	writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
	/**
	 * Default post format.
	 * @deprecated
	 */
	writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
	/**
	 * Convert emoticons like :-) and :-P to graphics on display.
	 * @deprecated
	 */
	writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type RootQueryToCategoryConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Options for ordering the connection by */
export enum TermObjectsConnectionOrderbyEnum {
	Count = 'COUNT',
	Description = 'DESCRIPTION',
	Name = 'NAME',
	Slug = 'SLUG',
	TermGroup = 'TERM_GROUP',
	TermId = 'TERM_ID',
	TermOrder = 'TERM_ORDER'
}

/** Connection between the RootQuery type and the category type */
export type RootQueryToCategoryConnection = {
	__typename?: 'RootQueryToCategoryConnection';
	/**
	 * Edges for the RootQueryToCategoryConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<RootQueryToCategoryConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Category>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToCategoryConnectionEdge = {
	__typename?: 'RootQueryToCategoryConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Category>;
};

/** The category type */
export type Category = Node &
	TermNode &
	UniformResourceIdentifiable &
	HierarchicalTermNode &
	MenuItemLinkable & {
		__typename?: 'Category';
		/**
		 * The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
		 * @deprecated
		 */
		ancestors?: Maybe<CategoryToAncestorsCategoryConnection>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of databaseId
		 */
		categoryId?: Maybe<Scalars['Int']>;
		/**
		 * Connection between the category type and the category type
		 * @deprecated
		 */
		children?: Maybe<CategoryToCategoryConnection>;
		/**
		 * The number of objects connected to the object
		 * @deprecated
		 */
		count?: Maybe<Scalars['Int']>;
		/**
		 * Identifies the primary key from the database.
		 * @deprecated
		 */
		databaseId: Scalars['Int'];
		/**
		 * The description of the object
		 * @deprecated
		 */
		description?: Maybe<Scalars['String']>;
		/**
		 * Connection between the TermNode type and the EnqueuedScript type
		 * @deprecated
		 */
		enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
		/**
		 * Connection between the TermNode type and the EnqueuedStylesheet type
		 * @deprecated
		 */
		enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
		/**
		 * The globally unique ID for the object
		 * @deprecated
		 */
		id: Scalars['ID'];
		/**
		 * Whether the object is restricted from the current viewer
		 * @deprecated
		 */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/**
		 * The link to the term
		 * @deprecated
		 */
		link?: Maybe<Scalars['String']>;
		/**
		 * The human friendly name of the object.
		 * @deprecated
		 */
		name?: Maybe<Scalars['String']>;
		/**
		 * Connection between the category type and the category type
		 * @deprecated
		 */
		parent?: Maybe<CategoryToParentCategoryConnectionEdge>;
		/**
		 * Database id of the parent node
		 * @deprecated
		 */
		parentDatabaseId?: Maybe<Scalars['Int']>;
		/**
		 * The globally unique identifier of the parent node.
		 * @deprecated
		 */
		parentId?: Maybe<Scalars['ID']>;
		/**
		 * Connection between the category type and the post type
		 * @deprecated
		 */
		posts?: Maybe<CategoryToPostConnection>;
		/**
		 * An alphanumeric identifier for the object unique to its type.
		 * @deprecated
		 */
		slug?: Maybe<Scalars['String']>;
		/**
		 * Connection between the category type and the Taxonomy type
		 * @deprecated
		 */
		taxonomy?: Maybe<CategoryToTaxonomyConnectionEdge>;
		/**
		 * The ID of the term group that this term object belongs to
		 * @deprecated
		 */
		termGroupId?: Maybe<Scalars['Int']>;
		/**
		 * The taxonomy ID that the object is associated with
		 * @deprecated
		 */
		termTaxonomyId?: Maybe<Scalars['Int']>;
		/**
		 * The unique resource identifier path
		 * @deprecated
		 */
		uri: Scalars['String'];
	};

/** The category type */
export type CategoryAncestorsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The category type */
export type CategoryChildrenArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<CategoryToCategoryConnectionWhereArgs>;
};

/** The category type */
export type CategoryEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The category type */
export type CategoryEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The category type */
export type CategoryPostsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<CategoryToPostConnectionWhereArgs>;
};

/** An object with an ID */
export type Node = {
	/** The globally unique ID for the object */
	id: Scalars['ID'];
};

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNode = {
	/** The number of objects connected to the object */
	count?: Maybe<Scalars['Int']>;
	/** Identifies the primary key from the database. */
	databaseId: Scalars['Int'];
	/** The description of the object */
	description?: Maybe<Scalars['String']>;
	/** Connection between the TermNode type and the EnqueuedScript type */
	enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
	/** Connection between the TermNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
	/** Unique identifier for the term */
	id: Scalars['ID'];
	/** Whether the object is restricted from the current viewer */
	isRestricted?: Maybe<Scalars['Boolean']>;
	/** The link to the term */
	link?: Maybe<Scalars['String']>;
	/** The human friendly name of the object. */
	name?: Maybe<Scalars['String']>;
	/** An alphanumeric identifier for the object unique to its type. */
	slug?: Maybe<Scalars['String']>;
	/** The ID of the term group that this term object belongs to */
	termGroupId?: Maybe<Scalars['Int']>;
	/** The taxonomy ID that the object is associated with */
	termTaxonomyId?: Maybe<Scalars['Int']>;
	/** The unique resource identifier path */
	uri: Scalars['String'];
};

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** Connection between the TermNode type and the EnqueuedScript type */
export type TermNodeToEnqueuedScriptConnection = {
	__typename?: 'TermNodeToEnqueuedScriptConnection';
	/**
	 * Edges for the TermNodeToEnqueuedScriptConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<TermNodeToEnqueuedScriptConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TermNodeToEnqueuedScriptConnectionEdge = {
	__typename?: 'TermNodeToEnqueuedScriptConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<EnqueuedScript>;
};

/** Script enqueued by the CMS */
export type EnqueuedScript = Node &
	EnqueuedAsset & {
		__typename?: 'EnqueuedScript';
		/**
		 * @todo
		 * @deprecated
		 */
		args?: Maybe<Scalars['Boolean']>;
		/**
		 * Dependencies needed to use this asset
		 * @deprecated
		 */
		dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
		/**
		 * Extra information needed for the script
		 * @deprecated
		 */
		extra?: Maybe<Scalars['String']>;
		/**
		 * The handle of the enqueued asset
		 * @deprecated
		 */
		handle?: Maybe<Scalars['String']>;
		/**
		 * The globally unique ID for the object
		 * @deprecated
		 */
		id: Scalars['ID'];
		/**
		 * The source of the asset
		 * @deprecated
		 */
		src?: Maybe<Scalars['String']>;
		/**
		 * The version of the enqueued asset
		 * @deprecated
		 */
		version?: Maybe<Scalars['String']>;
	};

/** Asset enqueued by the CMS */
export type EnqueuedAsset = {
	/** @todo */
	args?: Maybe<Scalars['Boolean']>;
	/** Dependencies needed to use this asset */
	dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
	/** Extra information needed for the script */
	extra?: Maybe<Scalars['String']>;
	/** The handle of the enqueued asset */
	handle?: Maybe<Scalars['String']>;
	/** The ID of the enqueued asset */
	id: Scalars['ID'];
	/** The source of the asset */
	src?: Maybe<Scalars['String']>;
	/** The version of the enqueued asset */
	version?: Maybe<Scalars['String']>;
};

/** Information about pagination in a connection. */
export type WpPageInfo = {
	__typename?: 'WPPageInfo';
	/**
	 * When paginating forwards, the cursor to continue.
	 * @deprecated
	 */
	endCursor?: Maybe<Scalars['String']>;
	/**
	 * When paginating forwards, are there more items?
	 * @deprecated
	 */
	hasNextPage: Scalars['Boolean'];
	/**
	 * When paginating backwards, are there more items?
	 * @deprecated
	 */
	hasPreviousPage: Scalars['Boolean'];
	/**
	 * When paginating backwards, the cursor to continue.
	 * @deprecated
	 */
	startCursor?: Maybe<Scalars['String']>;
};

/** Connection between the TermNode type and the EnqueuedStylesheet type */
export type TermNodeToEnqueuedStylesheetConnection = {
	__typename?: 'TermNodeToEnqueuedStylesheetConnection';
	/**
	 * Edges for the TermNodeToEnqueuedStylesheetConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<TermNodeToEnqueuedStylesheetConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TermNodeToEnqueuedStylesheetConnectionEdge = {
	__typename?: 'TermNodeToEnqueuedStylesheetConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<EnqueuedStylesheet>;
};

/** Stylesheet enqueued by the CMS */
export type EnqueuedStylesheet = Node &
	EnqueuedAsset & {
		__typename?: 'EnqueuedStylesheet';
		/**
		 * @todo
		 * @deprecated
		 */
		args?: Maybe<Scalars['Boolean']>;
		/**
		 * Dependencies needed to use this asset
		 * @deprecated
		 */
		dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
		/**
		 * Extra information needed for the script
		 * @deprecated
		 */
		extra?: Maybe<Scalars['String']>;
		/**
		 * The handle of the enqueued asset
		 * @deprecated
		 */
		handle?: Maybe<Scalars['String']>;
		/**
		 * The globally unique ID for the object
		 * @deprecated
		 */
		id: Scalars['ID'];
		/**
		 * The source of the asset
		 * @deprecated
		 */
		src?: Maybe<Scalars['String']>;
		/**
		 * The version of the enqueued asset
		 * @deprecated
		 */
		version?: Maybe<Scalars['String']>;
	};

/** Any node that has a URI */
export type UniformResourceIdentifiable = {
	/** The unique resource identifier path */
	databaseId: Scalars['Int'];
	/** The unique resource identifier path */
	id: Scalars['ID'];
	/** The unique resource identifier path */
	uri: Scalars['String'];
};

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNode = {
	/** Database id of the parent node */
	parentDatabaseId?: Maybe<Scalars['Int']>;
	/** The globally unique identifier of the parent node. */
	parentId?: Maybe<Scalars['ID']>;
};

/** Nodes that can be linked to as Menu Items */
export type MenuItemLinkable = {
	/** The unique resource identifier path */
	databaseId: Scalars['Int'];
	/** The unique resource identifier path */
	id: Scalars['ID'];
	/** The unique resource identifier path */
	uri: Scalars['String'];
};

/** Connection between the category type and the category type */
export type CategoryToAncestorsCategoryConnection = {
	__typename?: 'CategoryToAncestorsCategoryConnection';
	/**
	 * Edges for the CategoryToAncestorsCategoryConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<CategoryToAncestorsCategoryConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Category>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToAncestorsCategoryConnectionEdge = {
	__typename?: 'CategoryToAncestorsCategoryConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Category>;
};

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type CategoryToCategoryConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the category type and the category type */
export type CategoryToCategoryConnection = {
	__typename?: 'CategoryToCategoryConnection';
	/**
	 * Edges for the CategoryToCategoryConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<CategoryToCategoryConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Category>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToCategoryConnectionEdge = {
	__typename?: 'CategoryToCategoryConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Category>;
};

/** Connection between the category type and the category type */
export type CategoryToParentCategoryConnectionEdge = {
	__typename?: 'CategoryToParentCategoryConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	node?: Maybe<Category>;
};

/** Arguments for filtering the CategoryToPostConnection connection */
export type CategoryToPostConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Tag Slug */
	tag?: Maybe<Scalars['String']>;
	/** Use Tag ID */
	tagId?: Maybe<Scalars['String']>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Filter the connection based on input */
export type DateQueryInput = {
	/** Nodes should be returned after this date */
	after?: Maybe<DateInput>;
	/** Nodes should be returned before this date */
	before?: Maybe<DateInput>;
	/** Column to query against */
	column?: Maybe<PostObjectsConnectionDateColumnEnum>;
	/** For after/before, whether exact value should be matched or not */
	compare?: Maybe<Scalars['String']>;
	/** Day of the month (from 1 to 31) */
	day?: Maybe<Scalars['Int']>;
	/** Hour (from 0 to 23) */
	hour?: Maybe<Scalars['Int']>;
	/** For after/before, whether exact value should be matched or not */
	inclusive?: Maybe<Scalars['Boolean']>;
	/** Minute (from 0 to 59) */
	minute?: Maybe<Scalars['Int']>;
	/** Month number (from 1 to 12) */
	month?: Maybe<Scalars['Int']>;
	/** OR or AND, how the sub-arrays should be compared */
	relation?: Maybe<RelationEnum>;
	/** Second (0 to 59) */
	second?: Maybe<Scalars['Int']>;
	/** Week of the year (from 0 to 53) */
	week?: Maybe<Scalars['Int']>;
	/** 4 digit year (e.g. 2017) */
	year?: Maybe<Scalars['Int']>;
};

/** Date values */
export type DateInput = {
	/** Day of the month (from 1 to 31) */
	day?: Maybe<Scalars['Int']>;
	/** Month number (from 1 to 12) */
	month?: Maybe<Scalars['Int']>;
	/** 4 digit year (e.g. 2017) */
	year?: Maybe<Scalars['Int']>;
};

/** The column to use when filtering by date */
export enum PostObjectsConnectionDateColumnEnum {
	Date = 'DATE',
	Modified = 'MODIFIED'
}

/** The logical relation between each item in the array when there are more than one. */
export enum RelationEnum {
	And = 'AND',
	Or = 'OR'
}

/** The MimeType of the object */
export enum MimeTypeEnum {
	ApplicationJava = 'APPLICATION_JAVA',
	ApplicationMsword = 'APPLICATION_MSWORD',
	ApplicationOctetStream = 'APPLICATION_OCTET_STREAM',
	ApplicationOnenote = 'APPLICATION_ONENOTE',
	ApplicationOxps = 'APPLICATION_OXPS',
	ApplicationPdf = 'APPLICATION_PDF',
	ApplicationRar = 'APPLICATION_RAR',
	ApplicationRtf = 'APPLICATION_RTF',
	ApplicationTtafXml = 'APPLICATION_TTAF_XML',
	ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
	ApplicationVndAppleNumbers = 'APPLICATION_VND_APPLE_NUMBERS',
	ApplicationVndApplePages = 'APPLICATION_VND_APPLE_PAGES',
	ApplicationVndMsAccess = 'APPLICATION_VND_MS_ACCESS',
	ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
	ApplicationVndMsExcelAddinMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12',
	ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
	ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
	ApplicationVndMsExcelTemplateMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12',
	ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
	ApplicationVndMsPowerpointAddinMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12',
	ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
	ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
	ApplicationVndMsPowerpointSlideMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12',
	ApplicationVndMsPowerpointTemplateMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12',
	ApplicationVndMsProject = 'APPLICATION_VND_MS_PROJECT',
	ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
	ApplicationVndMsWordTemplateMacroenabled_12 = 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12',
	ApplicationVndMsWrite = 'APPLICATION_VND_MS_WRITE',
	ApplicationVndMsXpsdocument = 'APPLICATION_VND_MS_XPSDOCUMENT',
	ApplicationVndOasisOpendocumentChart = 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART',
	ApplicationVndOasisOpendocumentDatabase = 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE',
	ApplicationVndOasisOpendocumentFormula = 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA',
	ApplicationVndOasisOpendocumentGraphics = 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS',
	ApplicationVndOasisOpendocumentPresentation = 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION',
	ApplicationVndOasisOpendocumentSpreadsheet = 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET',
	ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
	ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
	ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE',
	ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
	ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE',
	ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
	ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE',
	ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
	ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE',
	ApplicationWordperfect = 'APPLICATION_WORDPERFECT',
	ApplicationX_7ZCompressed = 'APPLICATION_X_7Z_COMPRESSED',
	ApplicationXGzip = 'APPLICATION_X_GZIP',
	ApplicationXTar = 'APPLICATION_X_TAR',
	ApplicationZip = 'APPLICATION_ZIP',
	AudioAac = 'AUDIO_AAC',
	AudioFlac = 'AUDIO_FLAC',
	AudioMidi = 'AUDIO_MIDI',
	AudioMpeg = 'AUDIO_MPEG',
	AudioOgg = 'AUDIO_OGG',
	AudioWav = 'AUDIO_WAV',
	AudioXMatroska = 'AUDIO_X_MATROSKA',
	AudioXMsWax = 'AUDIO_X_MS_WAX',
	AudioXMsWma = 'AUDIO_X_MS_WMA',
	AudioXRealaudio = 'AUDIO_X_REALAUDIO',
	ImageBmp = 'IMAGE_BMP',
	ImageGif = 'IMAGE_GIF',
	ImageHeic = 'IMAGE_HEIC',
	ImageJpeg = 'IMAGE_JPEG',
	ImagePng = 'IMAGE_PNG',
	ImageTiff = 'IMAGE_TIFF',
	ImageXIcon = 'IMAGE_X_ICON',
	TextCalendar = 'TEXT_CALENDAR',
	TextCss = 'TEXT_CSS',
	TextCsv = 'TEXT_CSV',
	TextPlain = 'TEXT_PLAIN',
	TextRichtext = 'TEXT_RICHTEXT',
	TextTabSeparatedValues = 'TEXT_TAB_SEPARATED_VALUES',
	TextVtt = 'TEXT_VTT',
	Video_3Gpp = 'VIDEO_3GPP',
	Video_3Gpp2 = 'VIDEO_3GPP2',
	VideoAvi = 'VIDEO_AVI',
	VideoDivx = 'VIDEO_DIVX',
	VideoMp4 = 'VIDEO_MP4',
	VideoMpeg = 'VIDEO_MPEG',
	VideoOgg = 'VIDEO_OGG',
	VideoQuicktime = 'VIDEO_QUICKTIME',
	VideoWebm = 'VIDEO_WEBM',
	VideoXFlv = 'VIDEO_X_FLV',
	VideoXMatroska = 'VIDEO_X_MATROSKA',
	VideoXMsAsf = 'VIDEO_X_MS_ASF',
	VideoXMsWm = 'VIDEO_X_MS_WM',
	VideoXMsWmv = 'VIDEO_X_MS_WMV',
	VideoXMsWmx = 'VIDEO_X_MS_WMX'
}

/** Options for ordering the connection */
export type PostObjectsConnectionOrderbyInput = {
	/** The field to order the connection by */
	field: PostObjectsConnectionOrderbyEnum;
	/** Possible directions in which to order a list of items */
	order: OrderEnum;
};

/** Field to order the connection by */
export enum PostObjectsConnectionOrderbyEnum {
	/** Order by author */
	Author = 'AUTHOR',
	/** Order by the number of comments it has acquired */
	CommentCount = 'COMMENT_COUNT',
	/** Order by publish date */
	Date = 'DATE',
	/** Preserve the ID order given in the IN array */
	In = 'IN',
	/** Order by the menu order value */
	MenuOrder = 'MENU_ORDER',
	/** Order by last modified date */
	Modified = 'MODIFIED',
	/** Preserve slug order given in the NAME_IN array */
	NameIn = 'NAME_IN',
	/** Order by parent ID */
	Parent = 'PARENT',
	/** Order by slug */
	Slug = 'SLUG',
	/** Order by title */
	Title = 'TITLE'
}

/** The cardinality of the connection order */
export enum OrderEnum {
	Asc = 'ASC',
	Desc = 'DESC'
}

/** The status of the object. */
export enum PostStatusEnum {
	/** Objects with the acf-disabled status */
	AcfDisabled = 'ACF_DISABLED',
	/** Objects with the auto-draft status */
	AutoDraft = 'AUTO_DRAFT',
	/** Objects with the draft status */
	Draft = 'DRAFT',
	/** Objects with the future status */
	Future = 'FUTURE',
	/** Objects with the inherit status */
	Inherit = 'INHERIT',
	/** Objects with the pending status */
	Pending = 'PENDING',
	/** Objects with the private status */
	Private = 'PRIVATE',
	/** Objects with the publish status */
	Publish = 'PUBLISH',
	/** Objects with the request-completed status */
	RequestCompleted = 'REQUEST_COMPLETED',
	/** Objects with the request-confirmed status */
	RequestConfirmed = 'REQUEST_CONFIRMED',
	/** Objects with the request-failed status */
	RequestFailed = 'REQUEST_FAILED',
	/** Objects with the request-pending status */
	RequestPending = 'REQUEST_PENDING',
	/** Objects with the trash status */
	Trash = 'TRASH'
}

/** Connection between the category type and the post type */
export type CategoryToPostConnection = {
	__typename?: 'CategoryToPostConnection';
	/**
	 * Edges for the CategoryToPostConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<CategoryToPostConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Post>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CategoryToPostConnectionEdge = {
	__typename?: 'CategoryToPostConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Post>;
};

/** The post type */
export type Post = Node &
	ContentNode &
	UniformResourceIdentifiable &
	NodeWithTitle &
	NodeWithContentEditor &
	NodeWithAuthor &
	NodeWithFeaturedImage &
	NodeWithExcerpt &
	NodeWithComments &
	NodeWithTrackbacks &
	NodeWithRevisions &
	MenuItemLinkable & {
		__typename?: 'Post';
		/**
		 * Connection between the NodeWithAuthor type and the User type
		 * @deprecated
		 */
		author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
		/**
		 * The database identifier of the author of the node
		 * @deprecated
		 */
		authorDatabaseId?: Maybe<Scalars['Int']>;
		/**
		 * The globally unique identifier of the author of the node
		 * @deprecated
		 */
		authorId?: Maybe<Scalars['ID']>;
		/**
		 * Connection between the post type and the category type
		 * @deprecated
		 */
		categories?: Maybe<PostToCategoryConnection>;
		/**
		 * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
		 * @deprecated
		 */
		commentCount?: Maybe<Scalars['Int']>;
		/**
		 * Whether the comments are open or closed for this particular post.
		 * @deprecated
		 */
		commentStatus?: Maybe<Scalars['String']>;
		/**
		 * Connection between the post type and the Comment type
		 * @deprecated
		 */
		comments?: Maybe<PostToCommentConnection>;
		/**
		 * The content of the post.
		 * @deprecated
		 */
		content?: Maybe<Scalars['String']>;
		/**
		 * Connection between the post type and the ContentType type
		 * @deprecated
		 */
		contentType?: Maybe<PostToContentTypeConnectionEdge>;
		/**
		 * The ID of the node in the database.
		 * @deprecated
		 */
		databaseId: Scalars['Int'];
		/**
		 * Post publishing date.
		 * @deprecated
		 */
		date?: Maybe<Scalars['String']>;
		/**
		 * The publishing date set in GMT.
		 * @deprecated
		 */
		dateGmt?: Maybe<Scalars['String']>;
		/**
		 * The desired slug of the post
		 * @deprecated
		 */
		desiredSlug?: Maybe<Scalars['String']>;
		/**
		 * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
		 * @deprecated
		 */
		editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
		/**
		 * The RSS enclosure for the object
		 * @deprecated
		 */
		enclosure?: Maybe<Scalars['String']>;
		/**
		 * Connection between the ContentNode type and the EnqueuedScript type
		 * @deprecated
		 */
		enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/**
		 * Connection between the ContentNode type and the EnqueuedStylesheet type
		 * @deprecated
		 */
		enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/**
		 * The excerpt of the post.
		 * @deprecated
		 */
		excerpt?: Maybe<Scalars['String']>;
		/**
		 * Connection between the NodeWithFeaturedImage type and the MediaItem type
		 * @deprecated
		 */
		featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
		/**
		 * The database identifier for the featured image node assigned to the content node
		 * @deprecated
		 */
		featuredImageDatabaseId?: Maybe<Scalars['Int']>;
		/**
		 * Globally unique ID of the featured image assigned to the node
		 * @deprecated
		 */
		featuredImageId?: Maybe<Scalars['ID']>;
		/**
		 * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
		 * @deprecated
		 */
		guid?: Maybe<Scalars['String']>;
		/**
		 * The globally unique identifier of the post object.
		 * @deprecated
		 */
		id: Scalars['ID'];
		/**
		 * Whether the object is a node in the preview state
		 * @deprecated
		 */
		isPreview?: Maybe<Scalars['Boolean']>;
		/**
		 * Whether the object is restricted from the current viewer
		 * @deprecated
		 */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/**
		 * True if the node is a revision of another node
		 * @deprecated
		 */
		isRevision?: Maybe<Scalars['Boolean']>;
		/**
		 * The user that most recently edited the node
		 * @deprecated
		 */
		lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
		/**
		 * The permalink of the post
		 * @deprecated
		 */
		link?: Maybe<Scalars['String']>;
		/**
		 * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
		 * @deprecated
		 */
		modified?: Maybe<Scalars['String']>;
		/**
		 * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
		 * @deprecated
		 */
		modifiedGmt?: Maybe<Scalars['String']>;
		/**
		 * Whether the pings are open or closed for this particular post.
		 * @deprecated
		 */
		pingStatus?: Maybe<Scalars['String']>;
		/**
		 * URLs that have been pinged.
		 * @deprecated
		 */
		pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
		/**
		 * Connection between the post type and the postFormat type
		 * @deprecated
		 */
		postFormats?: Maybe<PostToPostFormatConnection>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		postId: Scalars['Int'];
		/**
		 * Connection between the post type and the post type
		 * @deprecated
		 */
		preview?: Maybe<PostToPreviewConnectionEdge>;
		/**
		 * The database id of the preview node
		 * @deprecated
		 */
		previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
		/**
		 * Whether the object is a node in the preview state
		 * @deprecated
		 */
		previewRevisionId?: Maybe<Scalars['ID']>;
		/**
		 * If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node.
		 * @deprecated
		 */
		revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
		/**
		 * Connection between the post type and the post type
		 * @deprecated
		 */
		revisions?: Maybe<PostToRevisionConnection>;
		/**
		 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
		 * @deprecated
		 */
		slug?: Maybe<Scalars['String']>;
		/** @deprecated  */
		social?: Maybe<Post_Social>;
		/**
		 * The current status of the object
		 * @deprecated
		 */
		status?: Maybe<Scalars['String']>;
		/**
		 * Connection between the post type and the tag type
		 * @deprecated
		 */
		tags?: Maybe<PostToTagConnection>;
		/**
		 * The template assigned to the node
		 * @deprecated
		 */
		template?: Maybe<ContentTemplateUnion>;
		/**
		 * Connection between the ContentNode type and the TermNode type
		 * @deprecated
		 */
		terms?: Maybe<ContentNodeToTermNodeConnection>;
		/**
		 * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
		 * @deprecated
		 */
		title?: Maybe<Scalars['String']>;
		/**
		 * URLs queued to be pinged.
		 * @deprecated
		 */
		toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
		/**
		 * URI path for the resource
		 * @deprecated
		 */
		uri: Scalars['String'];
	};

/** The post type */
export type PostCategoriesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PostToCategoryConnectionWhereArgs>;
};

/** The post type */
export type PostCommentsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PostToCommentConnectionWhereArgs>;
};

/** The post type */
export type PostContentArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The post type */
export type PostEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The post type */
export type PostEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The post type */
export type PostExcerptArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The post type */
export type PostPostFormatsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PostToPostFormatConnectionWhereArgs>;
};

/** The post type */
export type PostRevisionsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PostToRevisionConnectionWhereArgs>;
};

/** The post type */
export type PostTagsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PostToTagConnectionWhereArgs>;
};

/** The post type */
export type PostTermsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<ContentNodeToTermNodeConnectionWhereArgs>;
};

/** The post type */
export type PostTitleArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** Nodes used to manage content */
export type ContentNode = {
	/** The ID of the node in the database. */
	databaseId: Scalars['Int'];
	/** Post publishing date. */
	date?: Maybe<Scalars['String']>;
	/** The publishing date set in GMT. */
	dateGmt?: Maybe<Scalars['String']>;
	/** The desired slug of the post */
	desiredSlug?: Maybe<Scalars['String']>;
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn't exist or is greater than 15 seconds */
	editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
	/** The RSS enclosure for the object */
	enclosure?: Maybe<Scalars['String']>;
	/** Connection between the ContentNode type and the EnqueuedScript type */
	enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post->guid and the guid column in the "post_objects" database table. */
	guid?: Maybe<Scalars['String']>;
	/** The globally unique identifier of the node. */
	id: Scalars['ID'];
	/** Whether the object is a node in the preview state */
	isPreview?: Maybe<Scalars['Boolean']>;
	/** Whether the object is restricted from the current viewer */
	isRestricted?: Maybe<Scalars['Boolean']>;
	/** The user that most recently edited the node */
	lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
	/** The permalink of the post */
	link?: Maybe<Scalars['String']>;
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?: Maybe<Scalars['String']>;
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?: Maybe<Scalars['String']>;
	/** The database id of the preview node */
	previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
	/** Whether the object is a node in the preview state */
	previewRevisionId?: Maybe<Scalars['ID']>;
	/** The uri slug for the post. This is equivalent to the WP_Post->post_name field and the post_name column in the database for the "post_objects" table. */
	slug?: Maybe<Scalars['String']>;
	/** The current status of the object */
	status?: Maybe<Scalars['String']>;
	/** Connection between the ContentNode type and the TermNode type */
	terms?: Maybe<ContentNodeToTermNodeConnection>;
	/** URI path for the resource */
	uri: Scalars['String'];
};

/** Nodes used to manage content */
export type ContentNodeEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** Nodes used to manage content */
export type ContentNodeEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** Nodes used to manage content */
export type ContentNodeTermsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<ContentNodeToTermNodeConnectionWhereArgs>;
};

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLockConnectionEdge = {
	__typename?: 'ContentNodeToEditLockConnectionEdge';
	/**
	 * The timestamp for when the node was last edited
	 * @deprecated
	 */
	lockTimestamp?: Maybe<Scalars['String']>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	node?: Maybe<User>;
};

/** A User object */
export type User = Node &
	UniformResourceIdentifiable &
	Commenter & {
		__typename?: 'User';
		/**
		 * Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument.
		 * @deprecated
		 */
		avatar?: Maybe<Avatar>;
		/**
		 * User metadata option name. Usually it will be &quot;wp_capabilities&quot;.
		 * @deprecated
		 */
		capKey?: Maybe<Scalars['String']>;
		/**
		 * A list of capabilities (permissions) granted to the user
		 * @deprecated
		 */
		capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
		/**
		 * Connection between the User type and the Comment type
		 * @deprecated
		 */
		comments?: Maybe<UserToCommentConnection>;
		/**
		 * Identifies the primary key from the database.
		 * @deprecated
		 */
		databaseId: Scalars['Int'];
		/**
		 * Description of the user.
		 * @deprecated
		 */
		description?: Maybe<Scalars['String']>;
		/**
		 * Email address of the user. This is equivalent to the WP_User-&gt;user_email property.
		 * @deprecated
		 */
		email?: Maybe<Scalars['String']>;
		/**
		 * Connection between the User type and the EnqueuedScript type
		 * @deprecated
		 */
		enqueuedScripts?: Maybe<UserToEnqueuedScriptConnection>;
		/**
		 * Connection between the User type and the EnqueuedStylesheet type
		 * @deprecated
		 */
		enqueuedStylesheets?: Maybe<UserToEnqueuedStylesheetConnection>;
		/**
		 * A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps.
		 * @deprecated
		 */
		extraCapabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
		/**
		 * First name of the user. This is equivalent to the WP_User-&gt;user_first_name property.
		 * @deprecated
		 */
		firstName?: Maybe<Scalars['String']>;
		/**
		 * The globally unique identifier for the user object.
		 * @deprecated
		 */
		id: Scalars['ID'];
		/**
		 * Whether the JWT User secret has been revoked. If the secret has been revoked, auth tokens will not be issued until an admin, or user with proper capabilities re-issues a secret for the user.
		 * @deprecated
		 */
		isJwtAuthSecretRevoked: Scalars['Boolean'];
		/**
		 * Whether the object is restricted from the current viewer
		 * @deprecated
		 */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/**
		 * The expiration for the JWT Token for the user. If not set custom for the user, it will use the default sitewide expiration setting
		 * @deprecated
		 */
		jwtAuthExpiration?: Maybe<Scalars['String']>;
		/**
		 * A JWT token that can be used in future requests for authentication/authorization
		 * @deprecated
		 */
		jwtAuthToken?: Maybe<Scalars['String']>;
		/**
		 * A JWT token that can be used in future requests to get a refreshed jwtAuthToken. If the refresh token used in a request is revoked or otherwise invalid, a valid Auth token will NOT be issued in the response headers.
		 * @deprecated
		 */
		jwtRefreshToken?: Maybe<Scalars['String']>;
		/**
		 * A unique secret tied to the users JWT token that can be revoked or refreshed. Revoking the secret prevents JWT tokens from being issued to the user. Refreshing the token invalidates previously issued tokens, but allows new tokens to be issued.
		 * @deprecated
		 */
		jwtUserSecret?: Maybe<Scalars['String']>;
		/**
		 * Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property.
		 * @deprecated
		 */
		lastName?: Maybe<Scalars['String']>;
		/**
		 * The preferred language locale set for the user. Value derived from get_user_locale().
		 * @deprecated
		 */
		locale?: Maybe<Scalars['String']>;
		/**
		 * Connection between the User type and the mediaItem type
		 * @deprecated
		 */
		mediaItems?: Maybe<UserToMediaItemConnection>;
		/**
		 * Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property.
		 * @deprecated
		 */
		name?: Maybe<Scalars['String']>;
		/**
		 * The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename
		 * @deprecated
		 */
		nicename?: Maybe<Scalars['String']>;
		/**
		 * Nickname of the user.
		 * @deprecated
		 */
		nickname?: Maybe<Scalars['String']>;
		/**
		 * Connection between the User type and the page type
		 * @deprecated
		 */
		pages?: Maybe<UserToPageConnection>;
		/**
		 * Connection between the User type and the post type
		 * @deprecated
		 */
		posts?: Maybe<UserToPostConnection>;
		/**
		 * The date the user registered or was created. The field follows a full ISO8601 date string format.
		 * @deprecated
		 */
		registeredDate?: Maybe<Scalars['String']>;
		/**
		 * Connection between the User and Revisions authored by the user
		 * @deprecated
		 */
		revisions?: Maybe<UserToContentRevisionUnionConnection>;
		/**
		 * Connection between the User type and the UserRole type
		 * @deprecated
		 */
		roles?: Maybe<UserToUserRoleConnection>;
		/**
		 * The slug for the user. This field is equivalent to WP_User-&gt;user_nicename
		 * @deprecated
		 */
		slug?: Maybe<Scalars['String']>;
		/**
		 * The unique resource identifier path
		 * @deprecated
		 */
		uri: Scalars['String'];
		/**
		 * A website url that is associated with the user.
		 * @deprecated
		 */
		url?: Maybe<Scalars['String']>;
		/**
		 * The Id of the user. Equivalent to WP_User-&gt;ID
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		userId?: Maybe<Scalars['Int']>;
		/**
		 * Username for the user. This field is equivalent to WP_User-&gt;user_login.
		 * @deprecated
		 */
		username?: Maybe<Scalars['String']>;
	};

/** A User object */
export type UserAvatarArgs = {
	size?: Maybe<Scalars['Int']>;
	forceDefault?: Maybe<Scalars['Boolean']>;
	rating?: Maybe<AvatarRatingEnum>;
};

/** A User object */
export type UserCommentsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<UserToCommentConnectionWhereArgs>;
};

/** A User object */
export type UserEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** A User object */
export type UserEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** A User object */
export type UserMediaItemsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<UserToMediaItemConnectionWhereArgs>;
};

/** A User object */
export type UserPagesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<UserToPageConnectionWhereArgs>;
};

/** A User object */
export type UserPostsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<UserToPostConnectionWhereArgs>;
};

/** A User object */
export type UserRevisionsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<UserToContentRevisionUnionConnectionWhereArgs>;
};

/** A User object */
export type UserRolesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The author of a comment */
export type Commenter = {
	/** Identifies the primary key from the database. */
	databaseId?: Maybe<Scalars['Int']>;
	/** The email address of the author of a comment. */
	email?: Maybe<Scalars['String']>;
	/** The globally unique identifier for the comment author. */
	id: Scalars['ID'];
	/** Whether the author information is considered restricted. (not fully public) */
	isRestricted?: Maybe<Scalars['Boolean']>;
	/** The name of the author of a comment. */
	name?: Maybe<Scalars['String']>;
	/** The url of the author of a comment. */
	url?: Maybe<Scalars['String']>;
};

/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export enum AvatarRatingEnum {
	G = 'G',
	Pg = 'PG',
	R = 'R',
	X = 'X'
}

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type Avatar = {
	__typename?: 'Avatar';
	/**
	 * URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo).
	 * @deprecated
	 */
	default?: Maybe<Scalars['String']>;
	/**
	 * HTML attributes to insert in the IMG element. Is not sanitized.
	 * @deprecated
	 */
	extraAttr?: Maybe<Scalars['String']>;
	/**
	 * Whether to always show the default image, never the Gravatar.
	 * @deprecated
	 */
	forceDefault?: Maybe<Scalars['Boolean']>;
	/**
	 * Whether the avatar was successfully found.
	 * @deprecated
	 */
	foundAvatar?: Maybe<Scalars['Boolean']>;
	/**
	 * Height of the avatar image.
	 * @deprecated
	 */
	height?: Maybe<Scalars['Int']>;
	/**
	 * Whether the object is restricted from the current viewer
	 * @deprecated
	 */
	isRestricted?: Maybe<Scalars['Boolean']>;
	/**
	 * What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order.
	 * @deprecated
	 */
	rating?: Maybe<Scalars['String']>;
	/**
	 * Type of url scheme to use. Typically HTTP vs. HTTPS.
	 * @deprecated
	 */
	scheme?: Maybe<Scalars['String']>;
	/**
	 * The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image.
	 * @deprecated
	 */
	size?: Maybe<Scalars['Int']>;
	/**
	 * URL for the gravatar image source.
	 * @deprecated
	 */
	url?: Maybe<Scalars['String']>;
	/**
	 * Width of the avatar image.
	 * @deprecated
	 */
	width?: Maybe<Scalars['Int']>;
};

/** Arguments for filtering the UserToCommentConnection connection */
export type UserToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl?: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType?: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName?: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order?: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status?: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId?: Maybe<Scalars['ID']>;
};

/** Allowed Content Types */
export enum ContentTypeEnum {
	/** The Type of Content object */
	Attachment = 'ATTACHMENT',
	/** The Type of Content object */
	Page = 'PAGE',
	/** The Type of Content object */
	Post = 'POST'
}

/** Options for ordering the connection */
export enum CommentsConnectionOrderbyEnum {
	CommentAgent = 'COMMENT_AGENT',
	CommentApproved = 'COMMENT_APPROVED',
	CommentAuthor = 'COMMENT_AUTHOR',
	CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
	CommentAuthorIp = 'COMMENT_AUTHOR_IP',
	CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
	CommentContent = 'COMMENT_CONTENT',
	CommentDate = 'COMMENT_DATE',
	CommentDateGmt = 'COMMENT_DATE_GMT',
	CommentId = 'COMMENT_ID',
	CommentIn = 'COMMENT_IN',
	CommentKarma = 'COMMENT_KARMA',
	CommentParent = 'COMMENT_PARENT',
	CommentPostId = 'COMMENT_POST_ID',
	CommentType = 'COMMENT_TYPE',
	UserId = 'USER_ID'
}

/** Connection between the User type and the Comment type */
export type UserToCommentConnection = {
	__typename?: 'UserToCommentConnection';
	/**
	 * Edges for the UserToCommentConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<UserToCommentConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Comment>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToCommentConnectionEdge = {
	__typename?: 'UserToCommentConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Comment>;
};

/** A Comment object */
export type Comment = Node & {
	__typename?: 'Comment';
	/**
	 * User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL.
	 * @deprecated
	 */
	agent?: Maybe<Scalars['String']>;
	/**
	 * The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL.
	 * @deprecated
	 */
	approved?: Maybe<Scalars['Boolean']>;
	/**
	 * The author of the comment
	 * @deprecated
	 */
	author?: Maybe<CommentToCommenterConnectionEdge>;
	/**
	 * IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL.
	 * @deprecated
	 */
	authorIp?: Maybe<Scalars['String']>;
	/**
	 * ID for the comment, unique among comments.
	 * @deprecated Deprecated in favor of databaseId
	 */
	commentId?: Maybe<Scalars['Int']>;
	/**
	 * Connection between the Comment type and the ContentNode type
	 * @deprecated
	 */
	commentedOn?: Maybe<CommentToContentNodeConnectionEdge>;
	/**
	 * Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL.
	 * @deprecated
	 */
	content?: Maybe<Scalars['String']>;
	/**
	 * ID for the comment, unique among comments.
	 * @deprecated
	 */
	databaseId?: Maybe<Scalars['Int']>;
	/**
	 * Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL.
	 * @deprecated
	 */
	date?: Maybe<Scalars['String']>;
	/**
	 * Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL.
	 * @deprecated
	 */
	dateGmt?: Maybe<Scalars['String']>;
	/**
	 * The globally unique identifier for the comment object
	 * @deprecated
	 */
	id: Scalars['ID'];
	/**
	 * Whether the object is restricted from the current viewer
	 * @deprecated
	 */
	isRestricted?: Maybe<Scalars['Boolean']>;
	/**
	 * Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL.
	 * @deprecated
	 */
	karma?: Maybe<Scalars['Int']>;
	/**
	 * Connection between the Comment type and the Comment type
	 * @deprecated
	 */
	parent?: Maybe<CommentToParentCommentConnectionEdge>;
	/**
	 * Connection between the Comment type and the Comment type
	 * @deprecated
	 */
	replies?: Maybe<CommentToCommentConnection>;
	/**
	 * Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL.
	 * @deprecated
	 */
	type?: Maybe<Scalars['String']>;
};

/** A Comment object */
export type CommentContentArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A Comment object */
export type CommentParentArgs = {
	where?: Maybe<CommentToParentCommentConnectionWhereArgs>;
};

/** A Comment object */
export type CommentRepliesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<CommentToCommentConnectionWhereArgs>;
};

/** Connection between the Comment type and the Commenter type */
export type CommentToCommenterConnectionEdge = {
	__typename?: 'CommentToCommenterConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	node?: Maybe<Commenter>;
};

/** Connection between the Comment type and the ContentNode type */
export type CommentToContentNodeConnectionEdge = {
	__typename?: 'CommentToContentNodeConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	node?: Maybe<ContentNode>;
};

/** The format of post field data. */
export enum PostObjectFieldFormatEnum {
	/** Provide the field value directly from database */
	Raw = 'RAW',
	/** Apply the default WordPress rendering */
	Rendered = 'RENDERED'
}

/** Arguments for filtering the CommentToParentCommentConnection connection */
export type CommentToParentCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl?: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType?: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName?: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order?: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status?: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId?: Maybe<Scalars['ID']>;
};

/** Connection between the Comment type and the Comment type */
export type CommentToParentCommentConnectionEdge = {
	__typename?: 'CommentToParentCommentConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	node?: Maybe<Comment>;
};

/** Arguments for filtering the CommentToCommentConnection connection */
export type CommentToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl?: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType?: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName?: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order?: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status?: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId?: Maybe<Scalars['ID']>;
};

/** Connection between the Comment type and the Comment type */
export type CommentToCommentConnection = {
	__typename?: 'CommentToCommentConnection';
	/**
	 * Edges for the CommentToCommentConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<CommentToCommentConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Comment>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type CommentToCommentConnectionEdge = {
	__typename?: 'CommentToCommentConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Comment>;
};

/** Connection between the User type and the EnqueuedScript type */
export type UserToEnqueuedScriptConnection = {
	__typename?: 'UserToEnqueuedScriptConnection';
	/**
	 * Edges for the UserToEnqueuedScriptConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<UserToEnqueuedScriptConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToEnqueuedScriptConnectionEdge = {
	__typename?: 'UserToEnqueuedScriptConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<EnqueuedScript>;
};

/** Connection between the User type and the EnqueuedStylesheet type */
export type UserToEnqueuedStylesheetConnection = {
	__typename?: 'UserToEnqueuedStylesheetConnection';
	/**
	 * Edges for the UserToEnqueuedStylesheetConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<UserToEnqueuedStylesheetConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToEnqueuedStylesheetConnectionEdge = {
	__typename?: 'UserToEnqueuedStylesheetConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<EnqueuedStylesheet>;
};

/** Arguments for filtering the UserToMediaItemConnection connection */
export type UserToMediaItemConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the mediaItem type */
export type UserToMediaItemConnection = {
	__typename?: 'UserToMediaItemConnection';
	/**
	 * Edges for the UserToMediaItemConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<UserToMediaItemConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<MediaItem>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToMediaItemConnectionEdge = {
	__typename?: 'UserToMediaItemConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<MediaItem>;
};

/** The mediaItem type */
export type MediaItem = Node &
	ContentNode &
	UniformResourceIdentifiable &
	NodeWithTitle &
	NodeWithAuthor &
	NodeWithComments &
	HierarchicalContentNode & {
		__typename?: 'MediaItem';
		/**
		 * Alternative text to display when resource is not displayed
		 * @deprecated
		 */
		altText?: Maybe<Scalars['String']>;
		/**
		 * Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
		 * @deprecated
		 */
		ancestors?: Maybe<HierarchicalContentNodeToContentNodeConnection>;
		/**
		 * Connection between the NodeWithAuthor type and the User type
		 * @deprecated
		 */
		author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
		/**
		 * The database identifier of the author of the node
		 * @deprecated
		 */
		authorDatabaseId?: Maybe<Scalars['Int']>;
		/**
		 * The globally unique identifier of the author of the node
		 * @deprecated
		 */
		authorId?: Maybe<Scalars['ID']>;
		/**
		 * The caption for the resource
		 * @deprecated
		 */
		caption?: Maybe<Scalars['String']>;
		/**
		 * Connection between the HierarchicalContentNode type and the ContentNode type
		 * @deprecated
		 */
		children?: Maybe<HierarchicalContentNodeToContentNodeConnection>;
		/**
		 * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
		 * @deprecated
		 */
		commentCount?: Maybe<Scalars['Int']>;
		/**
		 * Whether the comments are open or closed for this particular post.
		 * @deprecated
		 */
		commentStatus?: Maybe<Scalars['String']>;
		/**
		 * Connection between the mediaItem type and the Comment type
		 * @deprecated
		 */
		comments?: Maybe<MediaItemToCommentConnection>;
		/**
		 * Connection between the mediaItem type and the ContentType type
		 * @deprecated
		 */
		contentType?: Maybe<MediaItemToContentTypeConnectionEdge>;
		/**
		 * The ID of the node in the database.
		 * @deprecated
		 */
		databaseId: Scalars['Int'];
		/**
		 * Post publishing date.
		 * @deprecated
		 */
		date?: Maybe<Scalars['String']>;
		/**
		 * The publishing date set in GMT.
		 * @deprecated
		 */
		dateGmt?: Maybe<Scalars['String']>;
		/**
		 * Description of the image (stored as post_content)
		 * @deprecated
		 */
		description?: Maybe<Scalars['String']>;
		/**
		 * The desired slug of the post
		 * @deprecated
		 */
		desiredSlug?: Maybe<Scalars['String']>;
		/**
		 * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
		 * @deprecated
		 */
		editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
		/**
		 * The RSS enclosure for the object
		 * @deprecated
		 */
		enclosure?: Maybe<Scalars['String']>;
		/**
		 * Connection between the ContentNode type and the EnqueuedScript type
		 * @deprecated
		 */
		enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/**
		 * Connection between the ContentNode type and the EnqueuedStylesheet type
		 * @deprecated
		 */
		enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/**
		 * The filesize in bytes of the resource
		 * @deprecated
		 */
		fileSize?: Maybe<Scalars['Int']>;
		/**
		 * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
		 * @deprecated
		 */
		guid?: Maybe<Scalars['String']>;
		/**
		 * The globally unique identifier of the attachment object.
		 * @deprecated
		 */
		id: Scalars['ID'];
		/**
		 * Whether the object is a node in the preview state
		 * @deprecated
		 */
		isPreview?: Maybe<Scalars['Boolean']>;
		/**
		 * Whether the object is restricted from the current viewer
		 * @deprecated
		 */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/**
		 * The user that most recently edited the node
		 * @deprecated
		 */
		lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
		/**
		 * The permalink of the post
		 * @deprecated
		 */
		link?: Maybe<Scalars['String']>;
		/**
		 * Details about the mediaItem
		 * @deprecated
		 */
		mediaDetails?: Maybe<MediaDetails>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		mediaItemId: Scalars['Int'];
		/**
		 * Url of the mediaItem
		 * @deprecated
		 */
		mediaItemUrl?: Maybe<Scalars['String']>;
		/**
		 * Type of resource
		 * @deprecated
		 */
		mediaType?: Maybe<Scalars['String']>;
		/**
		 * The mime type of the mediaItem
		 * @deprecated
		 */
		mimeType?: Maybe<Scalars['String']>;
		/**
		 * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
		 * @deprecated
		 */
		modified?: Maybe<Scalars['String']>;
		/**
		 * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
		 * @deprecated
		 */
		modifiedGmt?: Maybe<Scalars['String']>;
		/**
		 * The parent of the node. The parent object can be of various types
		 * @deprecated
		 */
		parent?: Maybe<HierarchicalContentNodeToContentNodeConnectionEdge>;
		/**
		 * Database id of the parent node
		 * @deprecated
		 */
		parentDatabaseId?: Maybe<Scalars['Int']>;
		/**
		 * The globally unique identifier of the parent node.
		 * @deprecated
		 */
		parentId?: Maybe<Scalars['ID']>;
		/**
		 * The database id of the preview node
		 * @deprecated
		 */
		previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
		/**
		 * Whether the object is a node in the preview state
		 * @deprecated
		 */
		previewRevisionId?: Maybe<Scalars['ID']>;
		/**
		 * The sizes attribute value for an image.
		 * @deprecated
		 */
		sizes?: Maybe<Scalars['String']>;
		/**
		 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
		 * @deprecated
		 */
		slug?: Maybe<Scalars['String']>;
		/**
		 * Url of the mediaItem
		 * @deprecated
		 */
		sourceUrl?: Maybe<Scalars['String']>;
		/**
		 * The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths.
		 * @deprecated
		 */
		srcSet?: Maybe<Scalars['String']>;
		/**
		 * The current status of the object
		 * @deprecated
		 */
		status?: Maybe<Scalars['String']>;
		/**
		 * The template assigned to the node
		 * @deprecated
		 */
		template?: Maybe<ContentTemplateUnion>;
		/**
		 * Connection between the ContentNode type and the TermNode type
		 * @deprecated
		 */
		terms?: Maybe<ContentNodeToTermNodeConnection>;
		/**
		 * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
		 * @deprecated
		 */
		title?: Maybe<Scalars['String']>;
		/**
		 * URI path for the resource
		 * @deprecated
		 */
		uri: Scalars['String'];
	};

/** The mediaItem type */
export type MediaItemAncestorsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The mediaItem type */
export type MediaItemCaptionArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The mediaItem type */
export type MediaItemChildrenArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The mediaItem type */
export type MediaItemCommentsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<MediaItemToCommentConnectionWhereArgs>;
};

/** The mediaItem type */
export type MediaItemDescriptionArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The mediaItem type */
export type MediaItemEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The mediaItem type */
export type MediaItemEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The mediaItem type */
export type MediaItemFileSizeArgs = {
	size?: Maybe<MediaItemSizeEnum>;
};

/** The mediaItem type */
export type MediaItemSizesArgs = {
	size?: Maybe<MediaItemSizeEnum>;
};

/** The mediaItem type */
export type MediaItemSourceUrlArgs = {
	size?: Maybe<MediaItemSizeEnum>;
};

/** The mediaItem type */
export type MediaItemSrcSetArgs = {
	size?: Maybe<MediaItemSizeEnum>;
};

/** The mediaItem type */
export type MediaItemTermsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<ContentNodeToTermNodeConnectionWhereArgs>;
};

/** The mediaItem type */
export type MediaItemTitleArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that NodeWith a title */
export type NodeWithTitle = {
	/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
	title?: Maybe<Scalars['String']>;
};

/** A node that NodeWith a title */
export type NodeWithTitleTitleArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that can have an author assigned to it */
export type NodeWithAuthor = {
	/** Connection between the NodeWithAuthor type and the User type */
	author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
	/** The database identifier of the author of the node */
	authorDatabaseId?: Maybe<Scalars['Int']>;
	/** The globally unique identifier of the author of the node */
	authorId?: Maybe<Scalars['ID']>;
};

/** Connection between the NodeWithAuthor type and the User type */
export type NodeWithAuthorToUserConnectionEdge = {
	__typename?: 'NodeWithAuthorToUserConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	node?: Maybe<User>;
};

/** A node that can have comments associated with it */
export type NodeWithComments = {
	/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
	commentCount?: Maybe<Scalars['Int']>;
	/** Whether the comments are open or closed for this particular post. */
	commentStatus?: Maybe<Scalars['String']>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNode = {
	/** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
	ancestors?: Maybe<HierarchicalContentNodeToContentNodeConnection>;
	/** Connection between the HierarchicalContentNode type and the ContentNode type */
	children?: Maybe<HierarchicalContentNodeToContentNodeConnection>;
	/** The parent of the node. The parent object can be of various types */
	parent?: Maybe<HierarchicalContentNodeToContentNodeConnectionEdge>;
	/** Database id of the parent node */
	parentDatabaseId?: Maybe<Scalars['Int']>;
	/** The globally unique identifier of the parent node. */
	parentId?: Maybe<Scalars['ID']>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeAncestorsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeChildrenArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeConnection = {
	__typename?: 'HierarchicalContentNodeToContentNodeConnection';
	/**
	 * Edges for the HierarchicalContentNodeToContentNodeConnection connection
	 * @deprecated
	 */
	edges?: Maybe<
		Array<Maybe<HierarchicalContentNodeToContentNodeConnectionEdge>>
	>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<ContentNode>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeConnectionEdge = {
	__typename?: 'HierarchicalContentNodeToContentNodeConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	node?: Maybe<ContentNode>;
};

/** Arguments for filtering the MediaItemToCommentConnection connection */
export type MediaItemToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl?: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType?: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName?: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order?: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status?: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId?: Maybe<Scalars['ID']>;
};

/** Connection between the mediaItem type and the Comment type */
export type MediaItemToCommentConnection = {
	__typename?: 'MediaItemToCommentConnection';
	/**
	 * Edges for the MediaItemToCommentConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<MediaItemToCommentConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Comment>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type MediaItemToCommentConnectionEdge = {
	__typename?: 'MediaItemToCommentConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Comment>;
};

/** Connection between the mediaItem type and the ContentType type */
export type MediaItemToContentTypeConnectionEdge = {
	__typename?: 'MediaItemToContentTypeConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	node?: Maybe<ContentType>;
};

/** An Post Type object */
export type ContentType = Node & {
	__typename?: 'ContentType';
	/**
	 * Whether this content type should can be exported.
	 * @deprecated
	 */
	canExport?: Maybe<Scalars['Boolean']>;
	/**
	 * Connection between the ContentType type and the Taxonomy type
	 * @deprecated
	 */
	connectedTaxonomies?: Maybe<ContentTypeToTaxonomyConnection>;
	/**
	 * Connection between the ContentType type and the ContentNode type
	 * @deprecated
	 */
	contentNodes?: Maybe<ContentTypeToContentNodeConnection>;
	/**
	 * Whether content of this type should be deleted when the author of it is deleted from the system.
	 * @deprecated
	 */
	deleteWithUser?: Maybe<Scalars['Boolean']>;
	/**
	 * Description of the content type.
	 * @deprecated
	 */
	description?: Maybe<Scalars['String']>;
	/**
	 * Whether to exclude nodes of this content type from front end search results.
	 * @deprecated
	 */
	excludeFromSearch?: Maybe<Scalars['Boolean']>;
	/**
	 * The plural name of the content type within the GraphQL Schema.
	 * @deprecated
	 */
	graphqlPluralName?: Maybe<Scalars['String']>;
	/**
	 * The singular name of the content type within the GraphQL Schema.
	 * @deprecated
	 */
	graphqlSingleName?: Maybe<Scalars['String']>;
	/**
	 * Whether this content type should have archives. Content archives are generated by type and by date.
	 * @deprecated
	 */
	hasArchive?: Maybe<Scalars['Boolean']>;
	/**
	 * Whether the content type is hierarchical, for example pages.
	 * @deprecated
	 */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/**
	 * The globally unique identifier of the post-type object.
	 * @deprecated
	 */
	id: Scalars['ID'];
	/**
	 * Whether the object is restricted from the current viewer
	 * @deprecated
	 */
	isRestricted?: Maybe<Scalars['Boolean']>;
	/**
	 * Display name of the content type.
	 * @deprecated
	 */
	label?: Maybe<Scalars['String']>;
	/**
	 * Details about the content type labels.
	 * @deprecated
	 */
	labels?: Maybe<PostTypeLabelDetails>;
	/**
	 * The name of the icon file to display as a menu icon.
	 * @deprecated
	 */
	menuIcon?: Maybe<Scalars['String']>;
	/**
	 * The position of this post type in the menu. Only applies if show_in_menu is true.
	 * @deprecated
	 */
	menuPosition?: Maybe<Scalars['Int']>;
	/**
	 * The internal name of the post type. This should not be used for display purposes.
	 * @deprecated
	 */
	name?: Maybe<Scalars['String']>;
	/**
	 * Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention.
	 * @deprecated
	 */
	public?: Maybe<Scalars['Boolean']>;
	/**
	 * Whether queries can be performed on the front end for the content type as part of parse_request().
	 * @deprecated
	 */
	publiclyQueryable?: Maybe<Scalars['Boolean']>;
	/**
	 * Name of content type to display in REST API &quot;wp/v2&quot; namespace.
	 * @deprecated
	 */
	restBase?: Maybe<Scalars['String']>;
	/**
	 * The REST Controller class assigned to handling this content type.
	 * @deprecated
	 */
	restControllerClass?: Maybe<Scalars['String']>;
	/**
	 * Makes this content type available via the admin bar.
	 * @deprecated
	 */
	showInAdminBar?: Maybe<Scalars['Boolean']>;
	/**
	 * Whether to add the content type to the GraphQL Schema.
	 * @deprecated
	 */
	showInGraphql?: Maybe<Scalars['Boolean']>;
	/**
	 * Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that.
	 * @deprecated
	 */
	showInMenu?: Maybe<Scalars['Boolean']>;
	/**
	 * Makes this content type available for selection in navigation menus.
	 * @deprecated
	 */
	showInNavMenus?: Maybe<Scalars['Boolean']>;
	/**
	 * Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace.
	 * @deprecated
	 */
	showInRest?: Maybe<Scalars['Boolean']>;
	/**
	 * Whether to generate and allow a UI for managing this content type in the admin.
	 * @deprecated
	 */
	showUi?: Maybe<Scalars['Boolean']>;
};

/** An Post Type object */
export type ContentTypeConnectedTaxonomiesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** An Post Type object */
export type ContentTypeContentNodesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<ContentTypeToContentNodeConnectionWhereArgs>;
};

/** Connection between the ContentType type and the Taxonomy type */
export type ContentTypeToTaxonomyConnection = {
	__typename?: 'ContentTypeToTaxonomyConnection';
	/**
	 * Edges for the ContentTypeToTaxonomyConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<ContentTypeToTaxonomyConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Taxonomy>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContentTypeToTaxonomyConnectionEdge = {
	__typename?: 'ContentTypeToTaxonomyConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Taxonomy>;
};

/** A taxonomy object */
export type Taxonomy = Node & {
	__typename?: 'Taxonomy';
	/**
	 * List of Content Types associated with the Taxonomy
	 * @deprecated
	 */
	connectedContentTypes?: Maybe<TaxonomyToContentTypeConnection>;
	/**
	 * Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description
	 * @deprecated
	 */
	description?: Maybe<Scalars['String']>;
	/**
	 * The plural name of the post type within the GraphQL Schema.
	 * @deprecated
	 */
	graphqlPluralName?: Maybe<Scalars['String']>;
	/**
	 * The singular name of the post type within the GraphQL Schema.
	 * @deprecated
	 */
	graphqlSingleName?: Maybe<Scalars['String']>;
	/**
	 * Whether the taxonomy is hierarchical
	 * @deprecated
	 */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/**
	 * The globally unique identifier of the taxonomy object.
	 * @deprecated
	 */
	id: Scalars['ID'];
	/**
	 * Whether the object is restricted from the current viewer
	 * @deprecated
	 */
	isRestricted?: Maybe<Scalars['Boolean']>;
	/**
	 * Name of the taxonomy shown in the menu. Usually plural.
	 * @deprecated
	 */
	label?: Maybe<Scalars['String']>;
	/**
	 * The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label
	 * @deprecated
	 */
	name?: Maybe<Scalars['String']>;
	/**
	 * Whether the taxonomy is publicly queryable
	 * @deprecated
	 */
	public?: Maybe<Scalars['Boolean']>;
	/**
	 * Name of content type to diplay in REST API &quot;wp/v2&quot; namespace.
	 * @deprecated
	 */
	restBase?: Maybe<Scalars['String']>;
	/**
	 * The REST Controller class assigned to handling this content type.
	 * @deprecated
	 */
	restControllerClass?: Maybe<Scalars['String']>;
	/**
	 * Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud
	 * @deprecated
	 */
	showCloud?: Maybe<Scalars['Boolean']>;
	/**
	 * Whether to display a column for the taxonomy on its post type listing screens.
	 * @deprecated
	 */
	showInAdminColumn?: Maybe<Scalars['Boolean']>;
	/**
	 * Whether to add the post type to the GraphQL Schema.
	 * @deprecated
	 */
	showInGraphql?: Maybe<Scalars['Boolean']>;
	/**
	 * Whether to show the taxonomy in the admin menu
	 * @deprecated
	 */
	showInMenu?: Maybe<Scalars['Boolean']>;
	/**
	 * Whether the taxonomy is available for selection in navigation menus.
	 * @deprecated
	 */
	showInNavMenus?: Maybe<Scalars['Boolean']>;
	/**
	 * Whether to show the taxonomy in the quick/bulk edit panel.
	 * @deprecated
	 */
	showInQuickEdit?: Maybe<Scalars['Boolean']>;
	/**
	 * Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace.
	 * @deprecated
	 */
	showInRest?: Maybe<Scalars['Boolean']>;
	/**
	 * Whether to generate and allow a UI for managing terms in this taxonomy in the admin
	 * @deprecated
	 */
	showUi?: Maybe<Scalars['Boolean']>;
};

/** A taxonomy object */
export type TaxonomyConnectedContentTypesArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** Connection between the Taxonomy type and the ContentType type */
export type TaxonomyToContentTypeConnection = {
	__typename?: 'TaxonomyToContentTypeConnection';
	/**
	 * Edges for the TaxonomyToContentTypeConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<TaxonomyToContentTypeConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<ContentType>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TaxonomyToContentTypeConnectionEdge = {
	__typename?: 'TaxonomyToContentTypeConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<ContentType>;
};

/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
export type ContentTypeToContentNodeConnectionWhereArgs = {
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the ContentType type and the ContentNode type */
export type ContentTypeToContentNodeConnection = {
	__typename?: 'ContentTypeToContentNodeConnection';
	/**
	 * Edges for the ContentTypeToContentNodeConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<ContentTypeToContentNodeConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<ContentNode>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContentTypeToContentNodeConnectionEdge = {
	__typename?: 'ContentTypeToContentNodeConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<ContentNode>;
};

/** Details for labels of the PostType */
export type PostTypeLabelDetails = {
	__typename?: 'PostTypeLabelDetails';
	/**
	 * Default is ‘Add New’ for both hierarchical and non-hierarchical types.
	 * @deprecated
	 */
	addNew?: Maybe<Scalars['String']>;
	/**
	 * Label for adding a new singular item.
	 * @deprecated
	 */
	addNewItem?: Maybe<Scalars['String']>;
	/**
	 * Label to signify all items in a submenu link.
	 * @deprecated
	 */
	allItems?: Maybe<Scalars['String']>;
	/**
	 * Label for archives in nav menus
	 * @deprecated
	 */
	archives?: Maybe<Scalars['String']>;
	/**
	 * Label for the attributes meta box.
	 * @deprecated
	 */
	attributes?: Maybe<Scalars['String']>;
	/**
	 * Label for editing a singular item.
	 * @deprecated
	 */
	editItem?: Maybe<Scalars['String']>;
	/**
	 * Label for the Featured Image meta box title.
	 * @deprecated
	 */
	featuredImage?: Maybe<Scalars['String']>;
	/**
	 * Label for the table views hidden heading.
	 * @deprecated
	 */
	filterItemsList?: Maybe<Scalars['String']>;
	/**
	 * Label for the media frame button.
	 * @deprecated
	 */
	insertIntoItem?: Maybe<Scalars['String']>;
	/**
	 * Label for the table hidden heading.
	 * @deprecated
	 */
	itemsList?: Maybe<Scalars['String']>;
	/**
	 * Label for the table pagination hidden heading.
	 * @deprecated
	 */
	itemsListNavigation?: Maybe<Scalars['String']>;
	/**
	 * Label for the menu name.
	 * @deprecated
	 */
	menuName?: Maybe<Scalars['String']>;
	/**
	 * General name for the post type, usually plural.
	 * @deprecated
	 */
	name?: Maybe<Scalars['String']>;
	/**
	 * Label for the new item page title.
	 * @deprecated
	 */
	newItem?: Maybe<Scalars['String']>;
	/**
	 * Label used when no items are found.
	 * @deprecated
	 */
	notFound?: Maybe<Scalars['String']>;
	/**
	 * Label used when no items are in the trash.
	 * @deprecated
	 */
	notFoundInTrash?: Maybe<Scalars['String']>;
	/**
	 * Label used to prefix parents of hierarchical items.
	 * @deprecated
	 */
	parentItemColon?: Maybe<Scalars['String']>;
	/**
	 * Label for removing the featured image.
	 * @deprecated
	 */
	removeFeaturedImage?: Maybe<Scalars['String']>;
	/**
	 * Label for searching plural items.
	 * @deprecated
	 */
	searchItems?: Maybe<Scalars['String']>;
	/**
	 * Label for setting the featured image.
	 * @deprecated
	 */
	setFeaturedImage?: Maybe<Scalars['String']>;
	/**
	 * Name for one object of this post type.
	 * @deprecated
	 */
	singularName?: Maybe<Scalars['String']>;
	/**
	 * Label for the media frame filter.
	 * @deprecated
	 */
	uploadedToThisItem?: Maybe<Scalars['String']>;
	/**
	 * Label in the media frame for using a featured image.
	 * @deprecated
	 */
	useFeaturedImage?: Maybe<Scalars['String']>;
	/**
	 * Label for viewing a singular item.
	 * @deprecated
	 */
	viewItem?: Maybe<Scalars['String']>;
	/**
	 * Label for viewing post type archives.
	 * @deprecated
	 */
	viewItems?: Maybe<Scalars['String']>;
};

/** Connection between the ContentNode type and the EnqueuedScript type */
export type ContentNodeToEnqueuedScriptConnection = {
	__typename?: 'ContentNodeToEnqueuedScriptConnection';
	/**
	 * Edges for the ContentNodeToEnqueuedScriptConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<ContentNodeToEnqueuedScriptConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContentNodeToEnqueuedScriptConnectionEdge = {
	__typename?: 'ContentNodeToEnqueuedScriptConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<EnqueuedScript>;
};

/** Connection between the ContentNode type and the EnqueuedStylesheet type */
export type ContentNodeToEnqueuedStylesheetConnection = {
	__typename?: 'ContentNodeToEnqueuedStylesheetConnection';
	/**
	 * Edges for the ContentNodeToEnqueuedStylesheetConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<ContentNodeToEnqueuedStylesheetConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContentNodeToEnqueuedStylesheetConnectionEdge = {
	__typename?: 'ContentNodeToEnqueuedStylesheetConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<EnqueuedStylesheet>;
};

/** The size of the media item object. */
export enum MediaItemSizeEnum {
	/** MediaItem with the large size */
	Large = 'LARGE',
	/** MediaItem with the medium size */
	Medium = 'MEDIUM',
	/** MediaItem with the medium_large size */
	MediumLarge = 'MEDIUM_LARGE',
	/** MediaItem with the post-thumbnail size */
	PostThumbnail = 'POST_THUMBNAIL',
	/** MediaItem with the thumbnail size */
	Thumbnail = 'THUMBNAIL',
	/** MediaItem with the twentytwenty-fullscreen size */
	TwentytwentyFullscreen = 'TWENTYTWENTY_FULLSCREEN',
	/** MediaItem with the 1536x1536 size */
	'1536X1536' = '_1536X1536',
	/** MediaItem with the 2048x2048 size */
	'2048X2048' = '_2048X2048'
}

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLastConnectionEdge = {
	__typename?: 'ContentNodeToEditLastConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	node?: Maybe<User>;
};

/** File details for a Media Item */
export type MediaDetails = {
	__typename?: 'MediaDetails';
	/**
	 * The height of the mediaItem
	 * @deprecated
	 */
	file?: Maybe<Scalars['String']>;
	/**
	 * The height of the mediaItem
	 * @deprecated
	 */
	height?: Maybe<Scalars['Int']>;
	/** @deprecated  */
	meta?: Maybe<MediaItemMeta>;
	/**
	 * The available sizes of the mediaItem
	 * @deprecated
	 */
	sizes?: Maybe<Array<Maybe<MediaSize>>>;
	/**
	 * The width of the mediaItem
	 * @deprecated
	 */
	width?: Maybe<Scalars['Int']>;
};

/** Meta connected to a MediaItem */
export type MediaItemMeta = {
	__typename?: 'MediaItemMeta';
	/** @deprecated  */
	aperture?: Maybe<Scalars['Float']>;
	/** @deprecated  */
	camera?: Maybe<Scalars['String']>;
	/** @deprecated  */
	caption?: Maybe<Scalars['String']>;
	/** @deprecated  */
	copyright?: Maybe<Scalars['String']>;
	/** @deprecated  */
	createdTimestamp?: Maybe<Scalars['Int']>;
	/** @deprecated  */
	credit?: Maybe<Scalars['String']>;
	/** @deprecated  */
	focalLength?: Maybe<Scalars['Float']>;
	/** @deprecated  */
	iso?: Maybe<Scalars['Int']>;
	/** @deprecated  */
	keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** @deprecated  */
	orientation?: Maybe<Scalars['String']>;
	/** @deprecated  */
	shutterSpeed?: Maybe<Scalars['Float']>;
	/** @deprecated  */
	title?: Maybe<Scalars['String']>;
};

/** Details of an available size for a media item */
export type MediaSize = {
	__typename?: 'MediaSize';
	/**
	 * The file of the for the referenced size
	 * @deprecated
	 */
	file?: Maybe<Scalars['String']>;
	/**
	 * The filesize of the resource
	 * @deprecated
	 */
	fileSize?: Maybe<Scalars['Int']>;
	/**
	 * The height of the for the referenced size
	 * @deprecated
	 */
	height?: Maybe<Scalars['String']>;
	/**
	 * The mime type of the resource
	 * @deprecated
	 */
	mimeType?: Maybe<Scalars['String']>;
	/**
	 * The referenced size name
	 * @deprecated
	 */
	name?: Maybe<Scalars['String']>;
	/**
	 * The url of the for the referenced size
	 * @deprecated
	 */
	sourceUrl?: Maybe<Scalars['String']>;
	/**
	 * The width of the for the referenced size
	 * @deprecated
	 */
	width?: Maybe<Scalars['String']>;
};

export type ContentTemplateUnion =
	| DefaultTemplate
	| CoverTemplateTemplate
	| FullWidthTemplateTemplate;

/** The template assigned to the node */
export type DefaultTemplate = ContentTemplate & {
	__typename?: 'DefaultTemplate';
	/**
	 * The name of the template
	 * @deprecated
	 */
	templateName?: Maybe<Scalars['String']>;
};

/** The template assigned to a node of content */
export type ContentTemplate = {
	/** The name of the template */
	templateName?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type CoverTemplateTemplate = ContentTemplate & {
	__typename?: 'CoverTemplateTemplate';
	/**
	 * The name of the template
	 * @deprecated
	 */
	templateName?: Maybe<Scalars['String']>;
};

/** The template assigned to the node */
export type FullWidthTemplateTemplate = ContentTemplate & {
	__typename?: 'FullWidthTemplateTemplate';
	/**
	 * The name of the template
	 * @deprecated
	 */
	templateName?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the ContentNodeToTermNodeConnection connection */
export type ContentNodeToTermNodeConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** The Taxonomy to filter terms by */
	taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Allowed taxonomies */
export enum TaxonomyEnum {
	Category = 'CATEGORY',
	Postformat = 'POSTFORMAT',
	Tag = 'TAG'
}

/** Connection between the ContentNode type and the TermNode type */
export type ContentNodeToTermNodeConnection = {
	__typename?: 'ContentNodeToTermNodeConnection';
	/**
	 * Edges for the ContentNodeToTermNodeConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<ContentNodeToTermNodeConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<TermNode>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type ContentNodeToTermNodeConnectionEdge = {
	__typename?: 'ContentNodeToTermNodeConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<TermNode>;
};

/** Arguments for filtering the UserToPageConnection connection */
export type UserToPageConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the page type */
export type UserToPageConnection = {
	__typename?: 'UserToPageConnection';
	/**
	 * Edges for the UserToPageConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<UserToPageConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Page>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToPageConnectionEdge = {
	__typename?: 'UserToPageConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Page>;
};

/** The page type */
export type Page = Node &
	ContentNode &
	UniformResourceIdentifiable &
	NodeWithTitle &
	NodeWithContentEditor &
	NodeWithAuthor &
	NodeWithFeaturedImage &
	NodeWithComments &
	NodeWithRevisions &
	NodeWithPageAttributes &
	HierarchicalContentNode &
	MenuItemLinkable & {
		__typename?: 'Page';
		/**
		 * Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root).
		 * @deprecated
		 */
		ancestors?: Maybe<HierarchicalContentNodeToContentNodeConnection>;
		/**
		 * Connection between the NodeWithAuthor type and the User type
		 * @deprecated
		 */
		author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
		/**
		 * The database identifier of the author of the node
		 * @deprecated
		 */
		authorDatabaseId?: Maybe<Scalars['Int']>;
		/**
		 * The globally unique identifier of the author of the node
		 * @deprecated
		 */
		authorId?: Maybe<Scalars['ID']>;
		/**
		 * Connection between the HierarchicalContentNode type and the ContentNode type
		 * @deprecated
		 */
		children?: Maybe<HierarchicalContentNodeToContentNodeConnection>;
		/**
		 * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
		 * @deprecated
		 */
		commentCount?: Maybe<Scalars['Int']>;
		/**
		 * Whether the comments are open or closed for this particular post.
		 * @deprecated
		 */
		commentStatus?: Maybe<Scalars['String']>;
		/**
		 * Connection between the page type and the Comment type
		 * @deprecated
		 */
		comments?: Maybe<PageToCommentConnection>;
		/**
		 * The content of the post.
		 * @deprecated
		 */
		content?: Maybe<Scalars['String']>;
		/**
		 * Connection between the page type and the ContentType type
		 * @deprecated
		 */
		contentType?: Maybe<PageToContentTypeConnectionEdge>;
		/**
		 * The ID of the node in the database.
		 * @deprecated
		 */
		databaseId: Scalars['Int'];
		/**
		 * Post publishing date.
		 * @deprecated
		 */
		date?: Maybe<Scalars['String']>;
		/**
		 * The publishing date set in GMT.
		 * @deprecated
		 */
		dateGmt?: Maybe<Scalars['String']>;
		/**
		 * The desired slug of the post
		 * @deprecated
		 */
		desiredSlug?: Maybe<Scalars['String']>;
		/**
		 * If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
		 * @deprecated
		 */
		editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
		/**
		 * The RSS enclosure for the object
		 * @deprecated
		 */
		enclosure?: Maybe<Scalars['String']>;
		/**
		 * Connection between the ContentNode type and the EnqueuedScript type
		 * @deprecated
		 */
		enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
		/**
		 * Connection between the ContentNode type and the EnqueuedStylesheet type
		 * @deprecated
		 */
		enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
		/**
		 * Connection between the NodeWithFeaturedImage type and the MediaItem type
		 * @deprecated
		 */
		featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
		/**
		 * The database identifier for the featured image node assigned to the content node
		 * @deprecated
		 */
		featuredImageDatabaseId?: Maybe<Scalars['Int']>;
		/**
		 * Globally unique ID of the featured image assigned to the node
		 * @deprecated
		 */
		featuredImageId?: Maybe<Scalars['ID']>;
		/**
		 * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
		 * @deprecated
		 */
		guid?: Maybe<Scalars['String']>;
		/**
		 * The globally unique identifier of the page object.
		 * @deprecated
		 */
		id: Scalars['ID'];
		/**
		 * Whether this page is set to the static front page.
		 * @deprecated
		 */
		isFrontPage: Scalars['Boolean'];
		/**
		 * Whether the object is a node in the preview state
		 * @deprecated
		 */
		isPreview?: Maybe<Scalars['Boolean']>;
		/**
		 * Whether the object is restricted from the current viewer
		 * @deprecated
		 */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/**
		 * True if the node is a revision of another node
		 * @deprecated
		 */
		isRevision?: Maybe<Scalars['Boolean']>;
		/**
		 * The user that most recently edited the node
		 * @deprecated
		 */
		lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
		/**
		 * The permalink of the post
		 * @deprecated
		 */
		link?: Maybe<Scalars['String']>;
		/**
		 * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
		 * @deprecated
		 */
		menuOrder?: Maybe<Scalars['Int']>;
		/**
		 * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
		 * @deprecated
		 */
		modified?: Maybe<Scalars['String']>;
		/**
		 * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
		 * @deprecated
		 */
		modifiedGmt?: Maybe<Scalars['String']>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of the databaseId field
		 */
		pageId: Scalars['Int'];
		/**
		 * The parent of the node. The parent object can be of various types
		 * @deprecated
		 */
		parent?: Maybe<HierarchicalContentNodeToContentNodeConnectionEdge>;
		/**
		 * Database id of the parent node
		 * @deprecated
		 */
		parentDatabaseId?: Maybe<Scalars['Int']>;
		/**
		 * The globally unique identifier of the parent node.
		 * @deprecated
		 */
		parentId?: Maybe<Scalars['ID']>;
		/**
		 * Connection between the page type and the page type
		 * @deprecated
		 */
		preview?: Maybe<PageToPreviewConnectionEdge>;
		/**
		 * The database id of the preview node
		 * @deprecated
		 */
		previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
		/**
		 * Whether the object is a node in the preview state
		 * @deprecated
		 */
		previewRevisionId?: Maybe<Scalars['ID']>;
		/**
		 * If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node.
		 * @deprecated
		 */
		revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
		/**
		 * Connection between the page type and the page type
		 * @deprecated
		 */
		revisions?: Maybe<PageToRevisionConnection>;
		/**
		 * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
		 * @deprecated
		 */
		slug?: Maybe<Scalars['String']>;
		/**
		 * The current status of the object
		 * @deprecated
		 */
		status?: Maybe<Scalars['String']>;
		/**
		 * The template assigned to the node
		 * @deprecated
		 */
		template?: Maybe<ContentTemplateUnion>;
		/**
		 * Connection between the ContentNode type and the TermNode type
		 * @deprecated
		 */
		terms?: Maybe<ContentNodeToTermNodeConnection>;
		/**
		 * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
		 * @deprecated
		 */
		title?: Maybe<Scalars['String']>;
		/**
		 * URI path for the resource
		 * @deprecated
		 */
		uri: Scalars['String'];
	};

/** The page type */
export type PageAncestorsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The page type */
export type PageChildrenArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The page type */
export type PageCommentsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PageToCommentConnectionWhereArgs>;
};

/** The page type */
export type PageContentArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** The page type */
export type PageEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The page type */
export type PageEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The page type */
export type PageRevisionsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PageToRevisionConnectionWhereArgs>;
};

/** The page type */
export type PageTermsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<ContentNodeToTermNodeConnectionWhereArgs>;
};

/** The page type */
export type PageTitleArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that supports the content editor */
export type NodeWithContentEditor = {
	/** The content of the post. */
	content?: Maybe<Scalars['String']>;
};

/** A node that supports the content editor */
export type NodeWithContentEditorContentArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that can have a featured image set */
export type NodeWithFeaturedImage = {
	/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
	featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
	/** The database identifier for the featured image node assigned to the content node */
	featuredImageDatabaseId?: Maybe<Scalars['Int']>;
	/** Globally unique ID of the featured image assigned to the node */
	featuredImageId?: Maybe<Scalars['ID']>;
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type NodeWithFeaturedImageToMediaItemConnectionEdge = {
	__typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	node?: Maybe<MediaItem>;
};

/** A node that can have revisions */
export type NodeWithRevisions = {
	/** True if the node is a revision of another node */
	isRevision?: Maybe<Scalars['Boolean']>;
	/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
	revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type NodeWithRevisionsToContentNodeConnectionEdge = {
	__typename?: 'NodeWithRevisionsToContentNodeConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	node?: Maybe<ContentNode>;
};

/** A node that can have page attributes */
export type NodeWithPageAttributes = {
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: Maybe<Scalars['Int']>;
};

/** Arguments for filtering the PageToCommentConnection connection */
export type PageToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl?: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType?: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName?: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order?: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status?: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId?: Maybe<Scalars['ID']>;
};

/** Connection between the page type and the Comment type */
export type PageToCommentConnection = {
	__typename?: 'PageToCommentConnection';
	/**
	 * Edges for the PageToCommentConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<PageToCommentConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Comment>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PageToCommentConnectionEdge = {
	__typename?: 'PageToCommentConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Comment>;
};

/** Connection between the page type and the ContentType type */
export type PageToContentTypeConnectionEdge = {
	__typename?: 'PageToContentTypeConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	node?: Maybe<ContentType>;
};

/** Connection between the page type and the page type */
export type PageToPreviewConnectionEdge = {
	__typename?: 'PageToPreviewConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	node?: Maybe<Page>;
};

/** Arguments for filtering the pageToRevisionConnection connection */
export type PageToRevisionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the page type and the page type */
export type PageToRevisionConnection = {
	__typename?: 'PageToRevisionConnection';
	/**
	 * Edges for the pageToRevisionConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<PageToRevisionConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Page>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PageToRevisionConnectionEdge = {
	__typename?: 'PageToRevisionConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Page>;
};

/** Arguments for filtering the UserToPostConnection connection */
export type UserToPostConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Tag Slug */
	tag?: Maybe<Scalars['String']>;
	/** Use Tag ID */
	tagId?: Maybe<Scalars['String']>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the post type */
export type UserToPostConnection = {
	__typename?: 'UserToPostConnection';
	/**
	 * Edges for the UserToPostConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<UserToPostConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Post>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToPostConnectionEdge = {
	__typename?: 'UserToPostConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Post>;
};

/** Arguments for filtering the UserToContentRevisionUnionConnection connection */
export type UserToContentRevisionUnionConnectionWhereArgs = {
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the User type and the ContentRevisionUnion type */
export type UserToContentRevisionUnionConnection = {
	__typename?: 'UserToContentRevisionUnionConnection';
	/**
	 * Edges for the UserToContentRevisionUnionConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<UserToContentRevisionUnionConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<ContentRevisionUnion>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToContentRevisionUnionConnectionEdge = {
	__typename?: 'UserToContentRevisionUnionConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<ContentRevisionUnion>;
};

export type ContentRevisionUnion = Post | Page;

/** Connection between the User type and the UserRole type */
export type UserToUserRoleConnection = {
	__typename?: 'UserToUserRoleConnection';
	/**
	 * Edges for the UserToUserRoleConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<UserToUserRoleConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<UserRole>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type UserToUserRoleConnectionEdge = {
	__typename?: 'UserToUserRoleConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<UserRole>;
};

/** A user role object */
export type UserRole = Node & {
	__typename?: 'UserRole';
	/**
	 * The capabilities that belong to this role
	 * @deprecated
	 */
	capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
	/**
	 * The display name of the role
	 * @deprecated
	 */
	displayName?: Maybe<Scalars['String']>;
	/**
	 * The globally unique identifier for the user role object.
	 * @deprecated
	 */
	id: Scalars['ID'];
	/**
	 * Whether the object is restricted from the current viewer
	 * @deprecated
	 */
	isRestricted?: Maybe<Scalars['Boolean']>;
	/**
	 * The registered name of the role
	 * @deprecated
	 */
	name?: Maybe<Scalars['String']>;
};

/** A node that can have an excerpt */
export type NodeWithExcerpt = {
	/** The excerpt of the post. */
	excerpt?: Maybe<Scalars['String']>;
};

/** A node that can have an excerpt */
export type NodeWithExcerptExcerptArgs = {
	format?: Maybe<PostObjectFieldFormatEnum>;
};

/** A node that can have trackbacks and pingbacks */
export type NodeWithTrackbacks = {
	/** Whether the pings are open or closed for this particular post. */
	pingStatus?: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** URLs queued to be pinged. */
	toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Arguments for filtering the PostToCategoryConnection connection */
export type PostToCategoryConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the category type */
export type PostToCategoryConnection = {
	__typename?: 'PostToCategoryConnection';
	/**
	 * Edges for the PostToCategoryConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<PostToCategoryConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Category>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToCategoryConnectionEdge = {
	__typename?: 'PostToCategoryConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Category>;
};

/** Arguments for filtering the PostToCommentConnection connection */
export type PostToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl?: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType?: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName?: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order?: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status?: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId?: Maybe<Scalars['ID']>;
};

/** Connection between the post type and the Comment type */
export type PostToCommentConnection = {
	__typename?: 'PostToCommentConnection';
	/**
	 * Edges for the PostToCommentConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<PostToCommentConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Comment>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToCommentConnectionEdge = {
	__typename?: 'PostToCommentConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Comment>;
};

/** Connection between the post type and the ContentType type */
export type PostToContentTypeConnectionEdge = {
	__typename?: 'PostToContentTypeConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	node?: Maybe<ContentType>;
};

/** Arguments for filtering the PostToPostFormatConnection connection */
export type PostToPostFormatConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the postFormat type */
export type PostToPostFormatConnection = {
	__typename?: 'PostToPostFormatConnection';
	/**
	 * Edges for the PostToPostFormatConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<PostToPostFormatConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<PostFormat>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToPostFormatConnectionEdge = {
	__typename?: 'PostToPostFormatConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<PostFormat>;
};

/** The postFormat type */
export type PostFormat = Node &
	TermNode &
	UniformResourceIdentifiable & {
		__typename?: 'PostFormat';
		/**
		 * The number of objects connected to the object
		 * @deprecated
		 */
		count?: Maybe<Scalars['Int']>;
		/**
		 * Identifies the primary key from the database.
		 * @deprecated
		 */
		databaseId: Scalars['Int'];
		/**
		 * The description of the object
		 * @deprecated
		 */
		description?: Maybe<Scalars['String']>;
		/**
		 * Connection between the TermNode type and the EnqueuedScript type
		 * @deprecated
		 */
		enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
		/**
		 * Connection between the TermNode type and the EnqueuedStylesheet type
		 * @deprecated
		 */
		enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
		/**
		 * The globally unique ID for the object
		 * @deprecated
		 */
		id: Scalars['ID'];
		/**
		 * Whether the object is restricted from the current viewer
		 * @deprecated
		 */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/**
		 * The link to the term
		 * @deprecated
		 */
		link?: Maybe<Scalars['String']>;
		/**
		 * The human friendly name of the object.
		 * @deprecated
		 */
		name?: Maybe<Scalars['String']>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of databaseId
		 */
		postFormatId?: Maybe<Scalars['Int']>;
		/**
		 * Connection between the postFormat type and the post type
		 * @deprecated
		 */
		posts?: Maybe<PostFormatToPostConnection>;
		/**
		 * An alphanumeric identifier for the object unique to its type.
		 * @deprecated
		 */
		slug?: Maybe<Scalars['String']>;
		/**
		 * Connection between the postFormat type and the Taxonomy type
		 * @deprecated
		 */
		taxonomy?: Maybe<PostFormatToTaxonomyConnectionEdge>;
		/**
		 * The ID of the term group that this term object belongs to
		 * @deprecated
		 */
		termGroupId?: Maybe<Scalars['Int']>;
		/**
		 * The taxonomy ID that the object is associated with
		 * @deprecated
		 */
		termTaxonomyId?: Maybe<Scalars['Int']>;
		/**
		 * The unique resource identifier path
		 * @deprecated
		 */
		uri: Scalars['String'];
	};

/** The postFormat type */
export type PostFormatEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The postFormat type */
export type PostFormatEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The postFormat type */
export type PostFormatPostsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<PostFormatToPostConnectionWhereArgs>;
};

/** Arguments for filtering the PostFormatToPostConnection connection */
export type PostFormatToPostConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Tag Slug */
	tag?: Maybe<Scalars['String']>;
	/** Use Tag ID */
	tagId?: Maybe<Scalars['String']>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the postFormat type and the post type */
export type PostFormatToPostConnection = {
	__typename?: 'PostFormatToPostConnection';
	/**
	 * Edges for the PostFormatToPostConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<PostFormatToPostConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Post>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostFormatToPostConnectionEdge = {
	__typename?: 'PostFormatToPostConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Post>;
};

/** Connection between the postFormat type and the Taxonomy type */
export type PostFormatToTaxonomyConnectionEdge = {
	__typename?: 'PostFormatToTaxonomyConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	node?: Maybe<Taxonomy>;
};

/** Connection between the post type and the post type */
export type PostToPreviewConnectionEdge = {
	__typename?: 'PostToPreviewConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	node?: Maybe<Post>;
};

/** Arguments for filtering the postToRevisionConnection connection */
export type PostToRevisionConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Tag Slug */
	tag?: Maybe<Scalars['String']>;
	/** Use Tag ID */
	tagId?: Maybe<Scalars['String']>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the post type and the post type */
export type PostToRevisionConnection = {
	__typename?: 'PostToRevisionConnection';
	/**
	 * Edges for the postToRevisionConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<PostToRevisionConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Post>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToRevisionConnectionEdge = {
	__typename?: 'PostToRevisionConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Post>;
};

/** Field Group */
export type Post_Social = {
	__typename?: 'Post_Social';
	/**
	 * Facebook Url (optional)
	 * @deprecated
	 */
	facebook?: Maybe<Scalars['String']>;
	/** @deprecated  */
	fieldGroupName?: Maybe<Scalars['String']>;
	/**
	 * Instagram Url (optional)
	 * @deprecated
	 */
	instagram?: Maybe<Scalars['String']>;
	/**
	 * Twitter Url (optional)
	 * @deprecated
	 */
	twitter?: Maybe<Scalars['String']>;
	/**
	 * Company Website Url (optional)
	 * @deprecated
	 */
	website?: Maybe<Scalars['String']>;
};

/** Arguments for filtering the PostToTagConnection connection */
export type PostToTagConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the post type and the tag type */
export type PostToTagConnection = {
	__typename?: 'PostToTagConnection';
	/**
	 * Edges for the PostToTagConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<PostToTagConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Tag>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type PostToTagConnectionEdge = {
	__typename?: 'PostToTagConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Tag>;
};

/** The tag type */
export type Tag = Node &
	TermNode &
	UniformResourceIdentifiable &
	MenuItemLinkable & {
		__typename?: 'Tag';
		/**
		 * The number of objects connected to the object
		 * @deprecated
		 */
		count?: Maybe<Scalars['Int']>;
		/**
		 * Identifies the primary key from the database.
		 * @deprecated
		 */
		databaseId: Scalars['Int'];
		/**
		 * The description of the object
		 * @deprecated
		 */
		description?: Maybe<Scalars['String']>;
		/**
		 * Connection between the TermNode type and the EnqueuedScript type
		 * @deprecated
		 */
		enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
		/**
		 * Connection between the TermNode type and the EnqueuedStylesheet type
		 * @deprecated
		 */
		enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
		/**
		 * The globally unique ID for the object
		 * @deprecated
		 */
		id: Scalars['ID'];
		/**
		 * Whether the object is restricted from the current viewer
		 * @deprecated
		 */
		isRestricted?: Maybe<Scalars['Boolean']>;
		/**
		 * The link to the term
		 * @deprecated
		 */
		link?: Maybe<Scalars['String']>;
		/**
		 * The human friendly name of the object.
		 * @deprecated
		 */
		name?: Maybe<Scalars['String']>;
		/**
		 * Connection between the tag type and the post type
		 * @deprecated
		 */
		posts?: Maybe<TagToPostConnection>;
		/**
		 * An alphanumeric identifier for the object unique to its type.
		 * @deprecated
		 */
		slug?: Maybe<Scalars['String']>;
		/**
		 * The id field matches the WP_Post-&gt;ID field.
		 * @deprecated Deprecated in favor of databaseId
		 */
		tagId?: Maybe<Scalars['Int']>;
		/**
		 * Connection between the tag type and the Taxonomy type
		 * @deprecated
		 */
		taxonomy?: Maybe<TagToTaxonomyConnectionEdge>;
		/**
		 * The ID of the term group that this term object belongs to
		 * @deprecated
		 */
		termGroupId?: Maybe<Scalars['Int']>;
		/**
		 * The taxonomy ID that the object is associated with
		 * @deprecated
		 */
		termTaxonomyId?: Maybe<Scalars['Int']>;
		/**
		 * The unique resource identifier path
		 * @deprecated
		 */
		uri: Scalars['String'];
	};

/** The tag type */
export type TagEnqueuedScriptsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The tag type */
export type TagEnqueuedStylesheetsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
};

/** The tag type */
export type TagPostsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<TagToPostConnectionWhereArgs>;
};

/** Arguments for filtering the TagToPostConnection connection */
export type TagToPostConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Tag Slug */
	tag?: Maybe<Scalars['String']>;
	/** Use Tag ID */
	tagId?: Maybe<Scalars['String']>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the tag type and the post type */
export type TagToPostConnection = {
	__typename?: 'TagToPostConnection';
	/**
	 * Edges for the TagToPostConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<TagToPostConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Post>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type TagToPostConnectionEdge = {
	__typename?: 'TagToPostConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Post>;
};

/** Connection between the tag type and the Taxonomy type */
export type TagToTaxonomyConnectionEdge = {
	__typename?: 'TagToTaxonomyConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	node?: Maybe<Taxonomy>;
};

/** Connection between the category type and the Taxonomy type */
export type CategoryToTaxonomyConnectionEdge = {
	__typename?: 'CategoryToTaxonomyConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	node?: Maybe<Taxonomy>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum CategoryIdType {
	/** The Database ID for the node */
	DatabaseId = 'DATABASE_ID',
	/** The hashed Global ID */
	Id = 'ID',
	/** The name of the node */
	Name = 'NAME',
	/** Url friendly name of the node */
	Slug = 'SLUG',
	/** The URI for the node */
	Uri = 'URI'
}

/** Arguments for filtering the RootQueryToCommentConnection connection */
export type RootQueryToCommentConnectionWhereArgs = {
	/** Comment author email address. */
	authorEmail?: Maybe<Scalars['String']>;
	/** Array of author IDs to include comments for. */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Comment author URL. */
	authorUrl?: Maybe<Scalars['String']>;
	/** Array of comment IDs to include. */
	commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Include comments of a given type. */
	commentType?: Maybe<Scalars['String']>;
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: Maybe<Scalars['String']>;
	/** Content object author ID to limit results by. */
	contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: Maybe<Scalars['ID']>;
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Content object name to retrieve affiliated comments for. */
	contentName?: Maybe<Scalars['String']>;
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: Maybe<Scalars['Int']>;
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Karma score to retrieve matching comments for. */
	karma?: Maybe<Scalars['Int']>;
	/** The cardinality of the order of the connection */
	order?: Maybe<OrderEnum>;
	/** Field to order the comments by. */
	orderby?: Maybe<CommentsConnectionOrderbyEnum>;
	/** Parent ID of comment to retrieve children of. */
	parent?: Maybe<Scalars['Int']>;
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Search term(s) to retrieve matching comments for. */
	search?: Maybe<Scalars['String']>;
	/** Comment status to limit results by. */
	status?: Maybe<Scalars['String']>;
	/** Include comments for a specific user ID. */
	userId?: Maybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the Comment type */
export type RootQueryToCommentConnection = {
	__typename?: 'RootQueryToCommentConnection';
	/**
	 * Edges for the RootQueryToCommentConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<RootQueryToCommentConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Comment>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToCommentConnectionEdge = {
	__typename?: 'RootQueryToCommentConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Comment>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ContentNodeIdTypeEnum {
	/** Identify a resource by the Database ID. */
	DatabaseId = 'DATABASE_ID',
	/** Identify a resource by the (hashed) Global ID. */
	Id = 'ID',
	/** Identify a resource by the URI. */
	Uri = 'URI'
}

/** Arguments for filtering the RootQueryToContentNodeConnection connection */
export type RootQueryToContentNodeConnectionWhereArgs = {
	/** The Types of content to filter */
	contentTypes?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToContentNodeConnection = {
	__typename?: 'RootQueryToContentNodeConnection';
	/**
	 * Edges for the RootQueryToContentNodeConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<RootQueryToContentNodeConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<ContentNode>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToContentNodeConnectionEdge = {
	__typename?: 'RootQueryToContentNodeConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<ContentNode>;
};

/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
export enum ContentTypeIdTypeEnum {
	/** The globally unique ID */
	Id = 'ID',
	/** The name of the content type. */
	Name = 'NAME'
}

/** Connection between the RootQuery type and the ContentType type */
export type RootQueryToContentTypeConnection = {
	__typename?: 'RootQueryToContentTypeConnection';
	/**
	 * Edges for the RootQueryToContentTypeConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<RootQueryToContentTypeConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<ContentType>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToContentTypeConnectionEdge = {
	__typename?: 'RootQueryToContentTypeConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<ContentType>;
};

/** The discussion setting type */
export type DiscussionSettings = {
	__typename?: 'DiscussionSettings';
	/**
	 * Allow people to submit comments on new posts.
	 * @deprecated
	 */
	defaultCommentStatus?: Maybe<Scalars['String']>;
	/**
	 * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
	 * @deprecated
	 */
	defaultPingStatus?: Maybe<Scalars['String']>;
};

/** The general setting type */
export type GeneralSettings = {
	__typename?: 'GeneralSettings';
	/**
	 * A date format for all date strings.
	 * @deprecated
	 */
	dateFormat?: Maybe<Scalars['String']>;
	/**
	 * Site tagline.
	 * @deprecated
	 */
	description?: Maybe<Scalars['String']>;
	/**
	 * This address is used for admin purposes, like new user notification.
	 * @deprecated
	 */
	email?: Maybe<Scalars['String']>;
	/**
	 * WordPress locale code.
	 * @deprecated
	 */
	language?: Maybe<Scalars['String']>;
	/**
	 * A day number of the week that the week should start on.
	 * @deprecated
	 */
	startOfWeek?: Maybe<Scalars['Int']>;
	/**
	 * A time format for all time strings.
	 * @deprecated
	 */
	timeFormat?: Maybe<Scalars['String']>;
	/**
	 * A city in the same timezone as you.
	 * @deprecated
	 */
	timezone?: Maybe<Scalars['String']>;
	/**
	 * Site title.
	 * @deprecated
	 */
	title?: Maybe<Scalars['String']>;
	/**
	 * Site URL.
	 * @deprecated
	 */
	url?: Maybe<Scalars['String']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum MediaItemIdType {
	/** Identify a resource by the Database ID. */
	DatabaseId = 'DATABASE_ID',
	/** Identify a resource by the (hashed) Global ID. */
	Id = 'ID',
	/** Identify a resource by the URI. */
	Uri = 'URI',
	/** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
	Slug = 'SLUG',
	/** Identify a media item by its source url */
	SourceUrl = 'SOURCE_URL'
}

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export type RootQueryToMediaItemConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the mediaItem type */
export type RootQueryToMediaItemConnection = {
	__typename?: 'RootQueryToMediaItemConnection';
	/**
	 * Edges for the RootQueryToMediaItemConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<RootQueryToMediaItemConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<MediaItem>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToMediaItemConnectionEdge = {
	__typename?: 'RootQueryToMediaItemConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<MediaItem>;
};

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuNodeIdTypeEnum {
	/** Identify a menu node by the Database ID. */
	DatabaseId = 'DATABASE_ID',
	/** Identify a menu node by the (hashed) Global ID. */
	Id = 'ID',
	/** Identify a menu node by it's name */
	Name = 'NAME'
}

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type Menu = Node & {
	__typename?: 'Menu';
	/**
	 * The number of items in the menu
	 * @deprecated
	 */
	count?: Maybe<Scalars['Int']>;
	/**
	 * The ID of the node in the database.
	 * @deprecated
	 */
	databaseId?: Maybe<Scalars['Int']>;
	/**
	 * The globally unique identifier of the nav menu object.
	 * @deprecated
	 */
	id: Scalars['ID'];
	/**
	 * Whether the object is restricted from the current viewer
	 * @deprecated
	 */
	isRestricted?: Maybe<Scalars['Boolean']>;
	/** @deprecated  */
	locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
	/**
	 * WP ID of the nav menu.
	 * @deprecated Deprecated in favor of the databaseId field
	 */
	menuId?: Maybe<Scalars['Int']>;
	/**
	 * Connection between the Menu type and the MenuItem type
	 * @deprecated
	 */
	menuItems?: Maybe<MenuToMenuItemConnection>;
	/**
	 * Display name of the menu. Equivalent to WP_Term-&gt;name.
	 * @deprecated
	 */
	name?: Maybe<Scalars['String']>;
	/**
	 * The url friendly name of the menu. Equivalent to WP_Term-&gt;slug
	 * @deprecated
	 */
	slug?: Maybe<Scalars['String']>;
};

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type MenuMenuItemsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<MenuToMenuItemConnectionWhereArgs>;
};

/** Registered menu locations */
export enum MenuLocationEnum {
	Expanded = 'EXPANDED',
	Footer = 'FOOTER',
	Mobile = 'MOBILE',
	Primary = 'PRIMARY',
	Social = 'SOCIAL'
}

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type MenuToMenuItemConnectionWhereArgs = {
	/** The ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** The menu location for the menu being queried */
	location?: Maybe<MenuLocationEnum>;
	/** The database ID of the parent menu object */
	parentDatabaseId?: Maybe<Scalars['Int']>;
	/** The ID of the parent menu object */
	parentId?: Maybe<Scalars['ID']>;
};

/** Connection between the Menu type and the MenuItem type */
export type MenuToMenuItemConnection = {
	__typename?: 'MenuToMenuItemConnection';
	/**
	 * Edges for the MenuToMenuItemConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<MenuToMenuItemConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<MenuItem>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type MenuToMenuItemConnectionEdge = {
	__typename?: 'MenuToMenuItemConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<MenuItem>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItem = Node & {
	__typename?: 'MenuItem';
	/**
	 * Connection between the MenuItem type and the MenuItem type
	 * @deprecated
	 */
	childItems?: Maybe<MenuItemToMenuItemConnection>;
	/**
	 * Connection from MenuItem to it&#039;s connected node
	 * @deprecated
	 */
	connectedNode?: Maybe<MenuItemToMenuItemLinkableConnectionEdge>;
	/**
	 * The object connected to this menu item.
	 * @deprecated Deprecated in favor of the connectedNode field
	 */
	connectedObject?: Maybe<MenuItemObjectUnion>;
	/**
	 * Class attribute for the menu item link
	 * @deprecated
	 */
	cssClasses?: Maybe<Array<Maybe<Scalars['String']>>>;
	/**
	 * WP ID of the menu item.
	 * @deprecated
	 */
	databaseId?: Maybe<Scalars['Int']>;
	/**
	 * Description of the menu item.
	 * @deprecated
	 */
	description?: Maybe<Scalars['String']>;
	/**
	 * The globally unique identifier of the nav menu item object.
	 * @deprecated
	 */
	id: Scalars['ID'];
	/**
	 * Whether the object is restricted from the current viewer
	 * @deprecated
	 */
	isRestricted?: Maybe<Scalars['Boolean']>;
	/**
	 * Label or title of the menu item.
	 * @deprecated
	 */
	label?: Maybe<Scalars['String']>;
	/**
	 * Link relationship (XFN) of the menu item.
	 * @deprecated
	 */
	linkRelationship?: Maybe<Scalars['String']>;
	/** @deprecated  */
	locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
	/**
	 * The Menu a MenuItem is part of
	 * @deprecated
	 */
	menu?: Maybe<MenuItemToMenuConnectionEdge>;
	/**
	 * WP ID of the menu item.
	 * @deprecated Deprecated in favor of the databaseId field
	 */
	menuItemId?: Maybe<Scalars['Int']>;
	/**
	 * Menu item order
	 * @deprecated
	 */
	order?: Maybe<Scalars['Int']>;
	/**
	 * The database id of the parent menu item or null if it is the root
	 * @deprecated
	 */
	parentDatabaseId?: Maybe<Scalars['Int']>;
	/**
	 * The globally unique identifier of the parent nav menu item object.
	 * @deprecated
	 */
	parentId?: Maybe<Scalars['ID']>;
	/**
	 * Path for the resource. Relative path for internal resources. Absolute path for external resources.
	 * @deprecated
	 */
	path: Scalars['String'];
	/**
	 * Target attribute for the menu item link.
	 * @deprecated
	 */
	target?: Maybe<Scalars['String']>;
	/**
	 * Title attribute for the menu item link
	 * @deprecated
	 */
	title?: Maybe<Scalars['String']>;
	/**
	 * URL or destination of the menu item.
	 * @deprecated
	 */
	url?: Maybe<Scalars['String']>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItemChildItemsArgs = {
	first?: Maybe<Scalars['Int']>;
	last?: Maybe<Scalars['Int']>;
	after?: Maybe<Scalars['String']>;
	before?: Maybe<Scalars['String']>;
	where?: Maybe<MenuItemToMenuItemConnectionWhereArgs>;
};

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type MenuItemToMenuItemConnectionWhereArgs = {
	/** The ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** The menu location for the menu being queried */
	location?: Maybe<MenuLocationEnum>;
	/** The database ID of the parent menu object */
	parentDatabaseId?: Maybe<Scalars['Int']>;
	/** The ID of the parent menu object */
	parentId?: Maybe<Scalars['ID']>;
};

/** Connection between the MenuItem type and the MenuItem type */
export type MenuItemToMenuItemConnection = {
	__typename?: 'MenuItemToMenuItemConnection';
	/**
	 * Edges for the MenuItemToMenuItemConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<MenuItemToMenuItemConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<MenuItem>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type MenuItemToMenuItemConnectionEdge = {
	__typename?: 'MenuItemToMenuItemConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<MenuItem>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type MenuItemToMenuItemLinkableConnectionEdge = {
	__typename?: 'MenuItemToMenuItemLinkableConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	node?: Maybe<MenuItemLinkable>;
};

/** Deprecated in favor of MenuItemLinkeable Interface */
export type MenuItemObjectUnion = Post | Page | Category | Tag;

/** Connection between the MenuItem type and the Menu type */
export type MenuItemToMenuConnectionEdge = {
	__typename?: 'MenuItemToMenuConnectionEdge';
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	node?: Maybe<Menu>;
};

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuItemNodeIdTypeEnum {
	/** Identify a resource by the Database ID. */
	DatabaseId = 'DATABASE_ID',
	/** Identify a resource by the (hashed) Global ID. */
	Id = 'ID'
}

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type RootQueryToMenuItemConnectionWhereArgs = {
	/** The ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** The menu location for the menu being queried */
	location?: Maybe<MenuLocationEnum>;
	/** The database ID of the parent menu object */
	parentDatabaseId?: Maybe<Scalars['Int']>;
	/** The ID of the parent menu object */
	parentId?: Maybe<Scalars['ID']>;
};

/** Connection between the RootQuery type and the MenuItem type */
export type RootQueryToMenuItemConnection = {
	__typename?: 'RootQueryToMenuItemConnection';
	/**
	 * Edges for the RootQueryToMenuItemConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<RootQueryToMenuItemConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<MenuItem>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToMenuItemConnectionEdge = {
	__typename?: 'RootQueryToMenuItemConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<MenuItem>;
};

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type RootQueryToMenuConnectionWhereArgs = {
	/** The ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** The menu location for the menu being queried */
	location?: Maybe<MenuLocationEnum>;
	/** The slug of the menu to query items for */
	slug?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Menu type */
export type RootQueryToMenuConnection = {
	__typename?: 'RootQueryToMenuConnection';
	/**
	 * Edges for the RootQueryToMenuConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<RootQueryToMenuConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Menu>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToMenuConnectionEdge = {
	__typename?: 'RootQueryToMenuConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Menu>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PageIdType {
	/** Identify a resource by the Database ID. */
	DatabaseId = 'DATABASE_ID',
	/** Identify a resource by the (hashed) Global ID. */
	Id = 'ID',
	/** Identify a resource by the URI. */
	Uri = 'URI'
}

/** Arguments for filtering the RootQueryToPageConnection connection */
export type RootQueryToPageConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the page type */
export type RootQueryToPageConnection = {
	__typename?: 'RootQueryToPageConnection';
	/**
	 * Edges for the RootQueryToPageConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<RootQueryToPageConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Page>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPageConnectionEdge = {
	__typename?: 'RootQueryToPageConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Page>;
};

/** An plugin object */
export type Plugin = Node & {
	__typename?: 'Plugin';
	/**
	 * Name of the plugin author(s), may also be a company name.
	 * @deprecated
	 */
	author?: Maybe<Scalars['String']>;
	/**
	 * URI for the related author(s)/company website.
	 * @deprecated
	 */
	authorUri?: Maybe<Scalars['String']>;
	/**
	 * Description of the plugin.
	 * @deprecated
	 */
	description?: Maybe<Scalars['String']>;
	/**
	 * The globally unique identifier of the plugin object.
	 * @deprecated
	 */
	id: Scalars['ID'];
	/**
	 * Whether the object is restricted from the current viewer
	 * @deprecated
	 */
	isRestricted?: Maybe<Scalars['Boolean']>;
	/**
	 * Display name of the plugin.
	 * @deprecated
	 */
	name?: Maybe<Scalars['String']>;
	/**
	 * Plugin path.
	 * @deprecated
	 */
	path?: Maybe<Scalars['String']>;
	/**
	 * URI for the plugin website. This is useful for directing users for support requests etc.
	 * @deprecated
	 */
	pluginUri?: Maybe<Scalars['String']>;
	/**
	 * Current version of the plugin.
	 * @deprecated
	 */
	version?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Plugin type */
export type RootQueryToPluginConnection = {
	__typename?: 'RootQueryToPluginConnection';
	/**
	 * Edges for the RootQueryToPluginConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<RootQueryToPluginConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Plugin>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPluginConnectionEdge = {
	__typename?: 'RootQueryToPluginConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Plugin>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostIdType {
	/** Identify a resource by the Database ID. */
	DatabaseId = 'DATABASE_ID',
	/** Identify a resource by the (hashed) Global ID. */
	Id = 'ID',
	/** Identify a resource by the URI. */
	Uri = 'URI',
	/** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
	Slug = 'SLUG'
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostFormatIdType {
	/** The Database ID for the node */
	DatabaseId = 'DATABASE_ID',
	/** The hashed Global ID */
	Id = 'ID',
	/** The name of the node */
	Name = 'NAME',
	/** Url friendly name of the node */
	Slug = 'SLUG',
	/** The URI for the node */
	Uri = 'URI'
}

/** Arguments for filtering the RootQueryToPostFormatConnection connection */
export type RootQueryToPostFormatConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the postFormat type */
export type RootQueryToPostFormatConnection = {
	__typename?: 'RootQueryToPostFormatConnection';
	/**
	 * Edges for the RootQueryToPostFormatConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<RootQueryToPostFormatConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<PostFormat>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPostFormatConnectionEdge = {
	__typename?: 'RootQueryToPostFormatConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<PostFormat>;
};

/** Arguments for filtering the RootQueryToPostConnection connection */
export type RootQueryToPostConnectionWhereArgs = {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: Maybe<Scalars['Int']>;
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Find objects connected to the author by the author's nicename */
	authorName?: Maybe<Scalars['String']>;
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Category ID */
	categoryId?: Maybe<Scalars['Int']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Use Category Slug */
	categoryName?: Maybe<Scalars['String']>;
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Tag Slug */
	tag?: Maybe<Scalars['String']>;
	/** Use Tag ID */
	tagId?: Maybe<Scalars['String']>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the post type */
export type RootQueryToPostConnection = {
	__typename?: 'RootQueryToPostConnection';
	/**
	 * Edges for the RootQueryToPostConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<RootQueryToPostConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Post>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToPostConnectionEdge = {
	__typename?: 'RootQueryToPostConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Post>;
};

/** The reading setting type */
export type ReadingSettings = {
	__typename?: 'ReadingSettings';
	/**
	 * Blog pages show at most.
	 * @deprecated
	 */
	postsPerPage?: Maybe<Scalars['Int']>;
};

/** Connection between the RootQuery type and the EnqueuedScript type */
export type RootQueryToEnqueuedScriptConnection = {
	__typename?: 'RootQueryToEnqueuedScriptConnection';
	/**
	 * Edges for the RootQueryToEnqueuedScriptConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<RootQueryToEnqueuedScriptConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToEnqueuedScriptConnectionEdge = {
	__typename?: 'RootQueryToEnqueuedScriptConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<EnqueuedScript>;
};

/** Connection between the RootQuery type and the EnqueuedStylesheet type */
export type RootQueryToEnqueuedStylesheetConnection = {
	__typename?: 'RootQueryToEnqueuedStylesheetConnection';
	/**
	 * Edges for the RootQueryToEnqueuedStylesheetConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<RootQueryToEnqueuedStylesheetConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToEnqueuedStylesheetConnectionEdge = {
	__typename?: 'RootQueryToEnqueuedStylesheetConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<EnqueuedStylesheet>;
};

/** Arguments for filtering the RootQueryToContentRevisionUnionConnection connection */
export type RootQueryToContentRevisionUnionConnectionWhereArgs = {
	/** Filter the connection based on dates */
	dateQuery?: Maybe<DateQueryInput>;
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: Maybe<Scalars['Boolean']>;
	/** Specific ID of the object */
	id?: Maybe<Scalars['Int']>;
	/** Array of IDs for the objects to retrieve */
	in?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Get objects with a specific mimeType property */
	mimeType?: Maybe<MimeTypeEnum>;
	/** Slug / post_name of the object */
	name?: Maybe<Scalars['String']>;
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: Maybe<Scalars['ID']>;
	/** Specify objects whose parent is in an array */
	parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Show posts with a specific password. */
	password?: Maybe<Scalars['String']>;
	/** Show Posts based on a keyword search */
	search?: Maybe<Scalars['String']>;
	stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
	status?: Maybe<PostStatusEnum>;
	/** Title of the object */
	title?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the ContentRevisionUnion type */
export type RootQueryToContentRevisionUnionConnection = {
	__typename?: 'RootQueryToContentRevisionUnionConnection';
	/**
	 * Edges for the RootQueryToContentRevisionUnionConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<RootQueryToContentRevisionUnionConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<ContentRevisionUnion>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToContentRevisionUnionConnectionEdge = {
	__typename?: 'RootQueryToContentRevisionUnionConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<ContentRevisionUnion>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum TagIdType {
	/** The Database ID for the node */
	DatabaseId = 'DATABASE_ID',
	/** The hashed Global ID */
	Id = 'ID',
	/** The name of the node */
	Name = 'NAME',
	/** Url friendly name of the node */
	Slug = 'SLUG',
	/** The URI for the node */
	Uri = 'URI'
}

/** Arguments for filtering the RootQueryToTagConnection connection */
export type RootQueryToTagConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the tag type */
export type RootQueryToTagConnection = {
	__typename?: 'RootQueryToTagConnection';
	/**
	 * Edges for the RootQueryToTagConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<RootQueryToTagConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Tag>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToTagConnectionEdge = {
	__typename?: 'RootQueryToTagConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Tag>;
};

/** Connection between the RootQuery type and the Taxonomy type */
export type RootQueryToTaxonomyConnection = {
	__typename?: 'RootQueryToTaxonomyConnection';
	/**
	 * Edges for the RootQueryToTaxonomyConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<RootQueryToTaxonomyConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Taxonomy>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToTaxonomyConnectionEdge = {
	__typename?: 'RootQueryToTaxonomyConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Taxonomy>;
};

/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
export enum TaxonomyIdTypeEnum {
	/** The globally unique ID */
	Id = 'ID',
	/** The name of the taxonomy */
	Name = 'NAME'
}

/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export enum TermNodeIdTypeEnum {
	/** The Database ID for the node */
	DatabaseId = 'DATABASE_ID',
	/** The hashed Global ID */
	Id = 'ID',
	/** The name of the node */
	Name = 'NAME',
	/** Url friendly name of the node */
	Slug = 'SLUG',
	/** The URI for the node */
	Uri = 'URI'
}

/** Arguments for filtering the RootQueryToTermNodeConnection connection */
export type RootQueryToTermNodeConnectionWhereArgs = {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: Maybe<Scalars['String']>;
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: Maybe<Scalars['Int']>;
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: Maybe<Scalars['Boolean']>;
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: Maybe<Scalars['String']>;
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: Maybe<Scalars['Boolean']>;
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: Maybe<Scalars['Boolean']>;
	/** Array of term ids to include. Default empty array. */
	include?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Array of names to return term(s) for. Default empty. */
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: Maybe<Scalars['String']>;
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: Maybe<Scalars['Boolean']>;
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: Maybe<Scalars['Int']>;
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: Maybe<Scalars['String']>;
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** The Taxonomy to filter terms by */
	taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

/** Connection between the RootQuery type and the TermNode type */
export type RootQueryToTermNodeConnection = {
	__typename?: 'RootQueryToTermNodeConnection';
	/**
	 * Edges for the RootQueryToTermNodeConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<RootQueryToTermNodeConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<TermNode>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToTermNodeConnectionEdge = {
	__typename?: 'RootQueryToTermNodeConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<TermNode>;
};

/** A theme object */
export type Theme = Node & {
	__typename?: 'Theme';
	/**
	 * Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ).
	 * @deprecated
	 */
	author?: Maybe<Scalars['String']>;
	/**
	 * URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ).
	 * @deprecated
	 */
	authorUri?: Maybe<Scalars['String']>;
	/**
	 * The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ).
	 * @deprecated
	 */
	description?: Maybe<Scalars['String']>;
	/**
	 * The globally unique identifier of the theme object.
	 * @deprecated
	 */
	id: Scalars['ID'];
	/**
	 * Whether the object is restricted from the current viewer
	 * @deprecated
	 */
	isRestricted?: Maybe<Scalars['Boolean']>;
	/**
	 * Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ).
	 * @deprecated
	 */
	name?: Maybe<Scalars['String']>;
	/**
	 * The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot().
	 * @deprecated
	 */
	screenshot?: Maybe<Scalars['String']>;
	/**
	 * The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet().
	 * @deprecated
	 */
	slug?: Maybe<Scalars['String']>;
	/**
	 * URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ).
	 * @deprecated
	 */
	tags?: Maybe<Array<Maybe<Scalars['String']>>>;
	/**
	 * A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ).
	 * @deprecated
	 */
	themeUri?: Maybe<Scalars['String']>;
	/**
	 * The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ).
	 * @deprecated
	 */
	version?: Maybe<Scalars['String']>;
};

/** Connection between the RootQuery type and the Theme type */
export type RootQueryToThemeConnection = {
	__typename?: 'RootQueryToThemeConnection';
	/**
	 * Edges for the RootQueryToThemeConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<RootQueryToThemeConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<Theme>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToThemeConnectionEdge = {
	__typename?: 'RootQueryToThemeConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<Theme>;
};

/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
export enum UserNodeIdTypeEnum {
	/** The Database ID for the node */
	DatabaseId = 'DATABASE_ID',
	/** The Email of the User */
	Email = 'EMAIL',
	/** The hashed Global ID */
	Id = 'ID',
	/** The slug of the User */
	Slug = 'SLUG',
	/** The URI for the node */
	Uri = 'URI',
	/** The username the User uses to login with */
	Username = 'USERNAME'
}

/** Connection between the RootQuery type and the UserRole type */
export type RootQueryToUserRoleConnection = {
	__typename?: 'RootQueryToUserRoleConnection';
	/**
	 * Edges for the RootQueryToUserRoleConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<RootQueryToUserRoleConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<UserRole>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToUserRoleConnectionEdge = {
	__typename?: 'RootQueryToUserRoleConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<UserRole>;
};

/** Arguments for filtering the RootQueryToUserConnection connection */
export type RootQueryToUserConnectionWhereArgs = {
	/** Array of userIds to exclude. */
	exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
	/** Pass an array of post types to filter results to users who have published posts in those post types. */
	hasPublishedPosts?: Maybe<Array<Maybe<ContentTypeEnum>>>;
	/** Array of userIds to include. */
	include?: Maybe<Array<Maybe<Scalars['Int']>>>;
	/** The user login. */
	login?: Maybe<Scalars['String']>;
	/** An array of logins to include. Users matching one of these logins will be included in results. */
	loginIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** An array of logins to exclude. Users matching one of these logins will not be included in results. */
	loginNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** The user nicename. */
	nicename?: Maybe<Scalars['String']>;
	/** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
	nicenameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
	nicenameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** What paramater to use to order the objects by. */
	orderby?: Maybe<Array<Maybe<UsersConnectionOrderbyInput>>>;
	/** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
	role?: Maybe<UserRoleEnum>;
	/** An array of role names. Matched users must have at least one of these roles. */
	roleIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
	/** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
	roleNotIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
	/** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
	search?: Maybe<Scalars['String']>;
	/** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
	searchColumns?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Options for ordering the connection */
export type UsersConnectionOrderbyInput = {
	field: UsersConnectionOrderbyEnum;
	order?: Maybe<OrderEnum>;
};

/** Field to order the connection by */
export enum UsersConnectionOrderbyEnum {
	/** Order by display name */
	DisplayName = 'DISPLAY_NAME',
	/** Order by email address */
	Email = 'EMAIL',
	/** Order by login */
	Login = 'LOGIN',
	/** Preserve the login order given in the LOGIN_IN array */
	LoginIn = 'LOGIN_IN',
	/** Order by nice name */
	NiceName = 'NICE_NAME',
	/** Preserve the nice name order given in the NICE_NAME_IN array */
	NiceNameIn = 'NICE_NAME_IN',
	/** Order by registration date */
	Registered = 'REGISTERED',
	/** Order by URL */
	Url = 'URL'
}

/** Names of available user roles */
export enum UserRoleEnum {
	Administrator = 'ADMINISTRATOR',
	Author = 'AUTHOR',
	Contributor = 'CONTRIBUTOR',
	Editor = 'EDITOR',
	Subscriber = 'SUBSCRIBER'
}

/** Connection between the RootQuery type and the User type */
export type RootQueryToUserConnection = {
	__typename?: 'RootQueryToUserConnection';
	/**
	 * Edges for the RootQueryToUserConnection connection
	 * @deprecated
	 */
	edges?: Maybe<Array<Maybe<RootQueryToUserConnectionEdge>>>;
	/**
	 * The nodes of the connection, without the edges
	 * @deprecated
	 */
	nodes?: Maybe<Array<Maybe<User>>>;
	/**
	 * Information about pagination in a connection.
	 * @deprecated
	 */
	pageInfo?: Maybe<WpPageInfo>;
};

/** An edge in a connection */
export type RootQueryToUserConnectionEdge = {
	__typename?: 'RootQueryToUserConnectionEdge';
	/**
	 * A cursor for use in pagination
	 * @deprecated
	 */
	cursor?: Maybe<Scalars['String']>;
	/**
	 * The item at the end of the edge
	 * @deprecated
	 */
	node?: Maybe<User>;
};

/** The writing setting type */
export type WritingSettings = {
	__typename?: 'WritingSettings';
	/**
	 * Default post category.
	 * @deprecated
	 */
	defaultCategory?: Maybe<Scalars['Int']>;
	/**
	 * Default post format.
	 * @deprecated
	 */
	defaultPostFormat?: Maybe<Scalars['String']>;
	/**
	 * Convert emoticons like :-) and :-P to graphics on display.
	 * @deprecated
	 */
	useSmilies?: Maybe<Scalars['Boolean']>;
};

/** The root mutation */
export type RootMutation = {
	__typename?: 'RootMutation';
	/**
	 * The payload for the UpdateCategory mutation
	 * @deprecated
	 */
	updateCategory?: Maybe<UpdateCategoryPayload>;
	/**
	 * The payload for the UpdatePostFormat mutation
	 * @deprecated
	 */
	updatePostFormat?: Maybe<UpdatePostFormatPayload>;
	/**
	 * The payload for the UpdateTag mutation
	 * @deprecated
	 */
	updateTag?: Maybe<UpdateTagPayload>;
	/**
	 * The payload for the createCategory mutation
	 * @deprecated
	 */
	createCategory?: Maybe<CreateCategoryPayload>;
	/**
	 * The payload for the createComment mutation
	 * @deprecated
	 */
	createComment?: Maybe<CreateCommentPayload>;
	/**
	 * The payload for the createMediaItem mutation
	 * @deprecated
	 */
	createMediaItem?: Maybe<CreateMediaItemPayload>;
	/**
	 * The payload for the createPage mutation
	 * @deprecated
	 */
	createPage?: Maybe<CreatePagePayload>;
	/**
	 * The payload for the createPost mutation
	 * @deprecated
	 */
	createPost?: Maybe<CreatePostPayload>;
	/**
	 * The payload for the createPostFormat mutation
	 * @deprecated
	 */
	createPostFormat?: Maybe<CreatePostFormatPayload>;
	/**
	 * The payload for the createTag mutation
	 * @deprecated
	 */
	createTag?: Maybe<CreateTagPayload>;
	/**
	 * The payload for the createUser mutation
	 * @deprecated
	 */
	createUser?: Maybe<CreateUserPayload>;
	/**
	 * The payload for the deleteCategory mutation
	 * @deprecated
	 */
	deleteCategory?: Maybe<DeleteCategoryPayload>;
	/**
	 * The payload for the deleteComment mutation
	 * @deprecated
	 */
	deleteComment?: Maybe<DeleteCommentPayload>;
	/**
	 * The payload for the deleteMediaItem mutation
	 * @deprecated
	 */
	deleteMediaItem?: Maybe<DeleteMediaItemPayload>;
	/**
	 * The payload for the deletePage mutation
	 * @deprecated
	 */
	deletePage?: Maybe<DeletePagePayload>;
	/**
	 * The payload for the deletePost mutation
	 * @deprecated
	 */
	deletePost?: Maybe<DeletePostPayload>;
	/**
	 * The payload for the deletePostFormat mutation
	 * @deprecated
	 */
	deletePostFormat?: Maybe<DeletePostFormatPayload>;
	/**
	 * The payload for the deleteTag mutation
	 * @deprecated
	 */
	deleteTag?: Maybe<DeleteTagPayload>;
	/**
	 * The payload for the deleteUser mutation
	 * @deprecated
	 */
	deleteUser?: Maybe<DeleteUserPayload>;
	/** @deprecated  */
	increaseCount?: Maybe<Scalars['Int']>;
	/**
	 * The payload for the login mutation
	 * @deprecated
	 */
	login?: Maybe<LoginPayload>;
	/**
	 * The payload for the refreshJwtAuthToken mutation
	 * @deprecated
	 */
	refreshJwtAuthToken?: Maybe<RefreshJwtAuthTokenPayload>;
	/**
	 * The payload for the registerUser mutation
	 * @deprecated
	 */
	registerUser?: Maybe<RegisterUserPayload>;
	/**
	 * The payload for the resetUserPassword mutation
	 * @deprecated
	 */
	resetUserPassword?: Maybe<ResetUserPasswordPayload>;
	/**
	 * The payload for the restoreComment mutation
	 * @deprecated
	 */
	restoreComment?: Maybe<RestoreCommentPayload>;
	/**
	 * The payload for the sendPasswordResetEmail mutation
	 * @deprecated
	 */
	sendPasswordResetEmail?: Maybe<SendPasswordResetEmailPayload>;
	/**
	 * The payload for the updateComment mutation
	 * @deprecated
	 */
	updateComment?: Maybe<UpdateCommentPayload>;
	/**
	 * The payload for the updateMediaItem mutation
	 * @deprecated
	 */
	updateMediaItem?: Maybe<UpdateMediaItemPayload>;
	/**
	 * The payload for the updatePage mutation
	 * @deprecated
	 */
	updatePage?: Maybe<UpdatePagePayload>;
	/**
	 * The payload for the updatePost mutation
	 * @deprecated
	 */
	updatePost?: Maybe<UpdatePostPayload>;
	/**
	 * The payload for the updateSettings mutation
	 * @deprecated
	 */
	updateSettings?: Maybe<UpdateSettingsPayload>;
	/**
	 * The payload for the updateUser mutation
	 * @deprecated
	 */
	updateUser?: Maybe<UpdateUserPayload>;
};

/** The root mutation */
export type RootMutationUpdateCategoryArgs = {
	input: UpdateCategoryInput;
};

/** The root mutation */
export type RootMutationUpdatePostFormatArgs = {
	input: UpdatePostFormatInput;
};

/** The root mutation */
export type RootMutationUpdateTagArgs = {
	input: UpdateTagInput;
};

/** The root mutation */
export type RootMutationCreateCategoryArgs = {
	input: CreateCategoryInput;
};

/** The root mutation */
export type RootMutationCreateCommentArgs = {
	input: CreateCommentInput;
};

/** The root mutation */
export type RootMutationCreateMediaItemArgs = {
	input: CreateMediaItemInput;
};

/** The root mutation */
export type RootMutationCreatePageArgs = {
	input: CreatePageInput;
};

/** The root mutation */
export type RootMutationCreatePostArgs = {
	input: CreatePostInput;
};

/** The root mutation */
export type RootMutationCreatePostFormatArgs = {
	input: CreatePostFormatInput;
};

/** The root mutation */
export type RootMutationCreateTagArgs = {
	input: CreateTagInput;
};

/** The root mutation */
export type RootMutationCreateUserArgs = {
	input: CreateUserInput;
};

/** The root mutation */
export type RootMutationDeleteCategoryArgs = {
	input: DeleteCategoryInput;
};

/** The root mutation */
export type RootMutationDeleteCommentArgs = {
	input: DeleteCommentInput;
};

/** The root mutation */
export type RootMutationDeleteMediaItemArgs = {
	input: DeleteMediaItemInput;
};

/** The root mutation */
export type RootMutationDeletePageArgs = {
	input: DeletePageInput;
};

/** The root mutation */
export type RootMutationDeletePostArgs = {
	input: DeletePostInput;
};

/** The root mutation */
export type RootMutationDeletePostFormatArgs = {
	input: DeletePostFormatInput;
};

/** The root mutation */
export type RootMutationDeleteTagArgs = {
	input: DeleteTagInput;
};

/** The root mutation */
export type RootMutationDeleteUserArgs = {
	input: DeleteUserInput;
};

/** The root mutation */
export type RootMutationIncreaseCountArgs = {
	count?: Maybe<Scalars['Int']>;
};

/** The root mutation */
export type RootMutationLoginArgs = {
	input: LoginInput;
};

/** The root mutation */
export type RootMutationRefreshJwtAuthTokenArgs = {
	input: RefreshJwtAuthTokenInput;
};

/** The root mutation */
export type RootMutationRegisterUserArgs = {
	input: RegisterUserInput;
};

/** The root mutation */
export type RootMutationResetUserPasswordArgs = {
	input: ResetUserPasswordInput;
};

/** The root mutation */
export type RootMutationRestoreCommentArgs = {
	input: RestoreCommentInput;
};

/** The root mutation */
export type RootMutationSendPasswordResetEmailArgs = {
	input: SendPasswordResetEmailInput;
};

/** The root mutation */
export type RootMutationUpdateCommentArgs = {
	input: UpdateCommentInput;
};

/** The root mutation */
export type RootMutationUpdateMediaItemArgs = {
	input: UpdateMediaItemInput;
};

/** The root mutation */
export type RootMutationUpdatePageArgs = {
	input: UpdatePageInput;
};

/** The root mutation */
export type RootMutationUpdatePostArgs = {
	input: UpdatePostInput;
};

/** The root mutation */
export type RootMutationUpdateSettingsArgs = {
	input: UpdateSettingsInput;
};

/** The root mutation */
export type RootMutationUpdateUserArgs = {
	input: UpdateUserInput;
};

/** Input for the UpdateCategory mutation */
export type UpdateCategoryInput = {
	/** The slug that the category will be an alias of */
	aliasOf?: Maybe<Scalars['String']>;
	clientMutationId: Scalars['String'];
	/** The description of the category object */
	description?: Maybe<Scalars['String']>;
	/** The ID of the category object to update */
	id: Scalars['ID'];
	/** The name of the category object to mutate */
	name?: Maybe<Scalars['String']>;
	/** The ID of the category that should be set as the parent */
	parentId?: Maybe<Scalars['ID']>;
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateCategory mutation */
export type UpdateCategoryPayload = {
	__typename?: 'UpdateCategoryPayload';
	/**
	 * The created category
	 * @deprecated
	 */
	category?: Maybe<Category>;
	/** @deprecated  */
	clientMutationId: Scalars['String'];
};

/** Input for the UpdatePostFormat mutation */
export type UpdatePostFormatInput = {
	/** The slug that the post_format will be an alias of */
	aliasOf?: Maybe<Scalars['String']>;
	clientMutationId: Scalars['String'];
	/** The description of the post_format object */
	description?: Maybe<Scalars['String']>;
	/** The ID of the postFormat object to update */
	id: Scalars['ID'];
	/** The name of the post_format object to mutate */
	name?: Maybe<Scalars['String']>;
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdatePostFormat mutation */
export type UpdatePostFormatPayload = {
	__typename?: 'UpdatePostFormatPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/**
	 * The created post_format
	 * @deprecated
	 */
	postFormat?: Maybe<PostFormat>;
};

/** Input for the UpdateTag mutation */
export type UpdateTagInput = {
	/** The slug that the post_tag will be an alias of */
	aliasOf?: Maybe<Scalars['String']>;
	clientMutationId: Scalars['String'];
	/** The description of the post_tag object */
	description?: Maybe<Scalars['String']>;
	/** The ID of the tag object to update */
	id: Scalars['ID'];
	/** The name of the post_tag object to mutate */
	name?: Maybe<Scalars['String']>;
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: Maybe<Scalars['String']>;
};

/** The payload for the UpdateTag mutation */
export type UpdateTagPayload = {
	__typename?: 'UpdateTagPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/**
	 * The created post_tag
	 * @deprecated
	 */
	tag?: Maybe<Tag>;
};

/** Input for the createCategory mutation */
export type CreateCategoryInput = {
	/** The slug that the category will be an alias of */
	aliasOf?: Maybe<Scalars['String']>;
	clientMutationId: Scalars['String'];
	/** The description of the category object */
	description?: Maybe<Scalars['String']>;
	/** The name of the category object to mutate */
	name: Scalars['String'];
	/** The ID of the category that should be set as the parent */
	parentId?: Maybe<Scalars['ID']>;
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: Maybe<Scalars['String']>;
};

/** The payload for the createCategory mutation */
export type CreateCategoryPayload = {
	__typename?: 'CreateCategoryPayload';
	/**
	 * The created category
	 * @deprecated
	 */
	category?: Maybe<Category>;
	/** @deprecated  */
	clientMutationId: Scalars['String'];
};

/** Input for the createComment mutation */
export type CreateCommentInput = {
	/** User agent used to post the comment. */
	agent?: Maybe<Scalars['String']>;
	/** The approval status of the comment. */
	approved?: Maybe<Scalars['String']>;
	/** The name of the comment's author. */
	author?: Maybe<Scalars['String']>;
	/** The email of the comment's author. */
	authorEmail?: Maybe<Scalars['String']>;
	/** IP address for the comment's author. */
	authorIp?: Maybe<Scalars['String']>;
	/** The url of the comment's author. */
	authorUrl?: Maybe<Scalars['String']>;
	clientMutationId: Scalars['String'];
	/** The ID of the post object the comment belongs to. */
	commentOn?: Maybe<Scalars['Int']>;
	/** Content of the comment. */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** Parent comment of current comment. */
	parent?: Maybe<Scalars['ID']>;
	/** Type of comment. */
	type?: Maybe<Scalars['String']>;
	/** The userID of the comment's author. */
	userId?: Maybe<Scalars['Int']>;
};

/** The payload for the createComment mutation */
export type CreateCommentPayload = {
	__typename?: 'CreateCommentPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/**
	 * The comment that was created
	 * @deprecated
	 */
	comment?: Maybe<Comment>;
	/**
	 * Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache
	 * @deprecated
	 */
	success?: Maybe<Scalars['Boolean']>;
};

/** Input for the createMediaItem mutation */
export type CreateMediaItemInput = {
	/** Alternative text to display when mediaItem is not displayed */
	altText?: Maybe<Scalars['String']>;
	/** The userId to assign as the author of the mediaItem */
	authorId?: Maybe<Scalars['ID']>;
	/** The caption for the mediaItem */
	caption?: Maybe<Scalars['String']>;
	clientMutationId: Scalars['String'];
	/** The comment status for the mediaItem */
	commentStatus?: Maybe<Scalars['String']>;
	/** The date of the mediaItem */
	date?: Maybe<Scalars['String']>;
	/** The date (in GMT zone) of the mediaItem */
	dateGmt?: Maybe<Scalars['String']>;
	/** Description of the mediaItem */
	description?: Maybe<Scalars['String']>;
	/** The file name of the mediaItem */
	filePath?: Maybe<Scalars['String']>;
	/** The file type of the mediaItem */
	fileType?: Maybe<MimeTypeEnum>;
	/** The WordPress post ID or the graphQL postId of the parent object */
	parentId?: Maybe<Scalars['ID']>;
	/** The ping status for the mediaItem */
	pingStatus?: Maybe<Scalars['String']>;
	/** The slug of the mediaItem */
	slug?: Maybe<Scalars['String']>;
	/** The status of the mediaItem */
	status?: Maybe<MediaItemStatusEnum>;
	/** The title of the mediaItem */
	title?: Maybe<Scalars['String']>;
};

/** The status of the media item object. */
export enum MediaItemStatusEnum {
	/** Objects with the auto-draft status */
	AutoDraft = 'AUTO_DRAFT',
	/** Objects with the inherit status */
	Inherit = 'INHERIT',
	/** Objects with the private status */
	Private = 'PRIVATE',
	/** Objects with the trash status */
	Trash = 'TRASH'
}

/** The payload for the createMediaItem mutation */
export type CreateMediaItemPayload = {
	__typename?: 'CreateMediaItemPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/** @deprecated  */
	mediaItem?: Maybe<MediaItem>;
};

/** Input for the createPage mutation */
export type CreatePageInput = {
	/** The userId to assign as the author of the object */
	authorId?: Maybe<Scalars['ID']>;
	clientMutationId: Scalars['String'];
	/** The comment status for the object */
	commentStatus?: Maybe<Scalars['String']>;
	/** The content of the object */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: Maybe<Scalars['Int']>;
	/** The ID of the parent object */
	parentId?: Maybe<Scalars['ID']>;
	/** The password used to protect the content of the object */
	password?: Maybe<Scalars['String']>;
	/** The slug of the object */
	slug?: Maybe<Scalars['String']>;
	/** The status of the object */
	status?: Maybe<PostStatusEnum>;
	/** The title of the object */
	title?: Maybe<Scalars['String']>;
};

/** The payload for the createPage mutation */
export type CreatePagePayload = {
	__typename?: 'CreatePagePayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/** @deprecated  */
	page?: Maybe<Page>;
};

/** Input for the createPost mutation */
export type CreatePostInput = {
	/** The userId to assign as the author of the object */
	authorId?: Maybe<Scalars['ID']>;
	/** Set connections between the post and categories */
	categories?: Maybe<PostCategoriesInput>;
	clientMutationId: Scalars['String'];
	/** The comment status for the object */
	commentStatus?: Maybe<Scalars['String']>;
	/** The content of the object */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt?: Maybe<Scalars['String']>;
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password?: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus?: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the post and postFormats */
	postFormats?: Maybe<PostPostFormatsInput>;
	/** The slug of the object */
	slug?: Maybe<Scalars['String']>;
	/** The status of the object */
	status?: Maybe<PostStatusEnum>;
	/** Set connections between the post and tags */
	tags?: Maybe<PostTagsInput>;
	/** The title of the object */
	title?: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Set relationships between the post to categories */
export type PostCategoriesInput = {
	/** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
	append?: Maybe<Scalars['Boolean']>;
	nodes?: Maybe<Array<Maybe<PostCategoriesNodeInput>>>;
};

/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostCategoriesNodeInput = {
	/** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
	description?: Maybe<Scalars['String']>;
	/** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
	id?: Maybe<Scalars['ID']>;
	/** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?: Maybe<Scalars['String']>;
	/** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?: Maybe<Scalars['String']>;
};

/** Set relationships between the post to postFormats */
export type PostPostFormatsInput = {
	/** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
	append?: Maybe<Scalars['Boolean']>;
	nodes?: Maybe<Array<Maybe<PostPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostPostFormatsNodeInput = {
	/** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
	description?: Maybe<Scalars['String']>;
	/** The ID of the postFormat. If present, this will be used to connect to the post. If no existing postFormat exists with this ID, no connection will be made. */
	id?: Maybe<Scalars['ID']>;
	/** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?: Maybe<Scalars['String']>;
	/** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?: Maybe<Scalars['String']>;
};

/** Set relationships between the post to tags */
export type PostTagsInput = {
	/** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
	append?: Maybe<Scalars['Boolean']>;
	nodes?: Maybe<Array<Maybe<PostTagsNodeInput>>>;
};

/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostTagsNodeInput = {
	/** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
	description?: Maybe<Scalars['String']>;
	/** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
	id?: Maybe<Scalars['ID']>;
	/** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?: Maybe<Scalars['String']>;
	/** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPost mutation */
export type CreatePostPayload = {
	__typename?: 'CreatePostPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/** @deprecated  */
	post?: Maybe<Post>;
};

/** Input for the createPostFormat mutation */
export type CreatePostFormatInput = {
	/** The slug that the post_format will be an alias of */
	aliasOf?: Maybe<Scalars['String']>;
	clientMutationId: Scalars['String'];
	/** The description of the post_format object */
	description?: Maybe<Scalars['String']>;
	/** The name of the post_format object to mutate */
	name: Scalars['String'];
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: Maybe<Scalars['String']>;
};

/** The payload for the createPostFormat mutation */
export type CreatePostFormatPayload = {
	__typename?: 'CreatePostFormatPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/**
	 * The created post_format
	 * @deprecated
	 */
	postFormat?: Maybe<PostFormat>;
};

/** Input for the createTag mutation */
export type CreateTagInput = {
	/** The slug that the post_tag will be an alias of */
	aliasOf?: Maybe<Scalars['String']>;
	clientMutationId: Scalars['String'];
	/** The description of the post_tag object */
	description?: Maybe<Scalars['String']>;
	/** The name of the post_tag object to mutate */
	name: Scalars['String'];
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: Maybe<Scalars['String']>;
};

/** The payload for the createTag mutation */
export type CreateTagPayload = {
	__typename?: 'CreateTagPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/**
	 * The created post_tag
	 * @deprecated
	 */
	tag?: Maybe<Tag>;
};

/** Input for the createUser mutation */
export type CreateUserInput = {
	/** User's AOL IM account. */
	aim?: Maybe<Scalars['String']>;
	clientMutationId: Scalars['String'];
	/** A string containing content about the user. */
	description?: Maybe<Scalars['String']>;
	/** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
	displayName?: Maybe<Scalars['String']>;
	/** A string containing the user's email address. */
	email?: Maybe<Scalars['String']>;
	/** 	The user's first name. */
	firstName?: Maybe<Scalars['String']>;
	/** User's Jabber account. */
	jabber?: Maybe<Scalars['String']>;
	/** The user's last name. */
	lastName?: Maybe<Scalars['String']>;
	/** User's locale. */
	locale?: Maybe<Scalars['String']>;
	/** A string that contains a URL-friendly name for the user. The default is the user's username. */
	nicename?: Maybe<Scalars['String']>;
	/** The user's nickname, defaults to the user's username. */
	nickname?: Maybe<Scalars['String']>;
	/** A string that contains the plain text password for the user. */
	password?: Maybe<Scalars['String']>;
	/** If true, this will refresh the users JWT secret. */
	refreshJwtUserSecret?: Maybe<Scalars['Boolean']>;
	/** The date the user registered. Format is Y-m-d H:i:s. */
	registered?: Maybe<Scalars['String']>;
	/** If true, this will revoke the users JWT secret. If false, this will unrevoke the JWT secret AND issue a new one. To revoke, the user must have proper capabilities to edit users JWT secrets. */
	revokeJwtUserSecret?: Maybe<Scalars['Boolean']>;
	/** A string for whether to enable the rich editor or not. False if not empty. */
	richEditing?: Maybe<Scalars['String']>;
	/** An array of roles to be assigned to the user. */
	roles?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** A string that contains the user's username for logging in. */
	username: Scalars['String'];
	/** A string containing the user's URL for the user's web site. */
	websiteUrl?: Maybe<Scalars['String']>;
	/** User's Yahoo IM account. */
	yim?: Maybe<Scalars['String']>;
};

/** The payload for the createUser mutation */
export type CreateUserPayload = {
	__typename?: 'CreateUserPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/** @deprecated  */
	user?: Maybe<User>;
};

/** Input for the deleteCategory mutation */
export type DeleteCategoryInput = {
	clientMutationId: Scalars['String'];
	/** The ID of the category to delete */
	id: Scalars['ID'];
};

/** The payload for the deleteCategory mutation */
export type DeleteCategoryPayload = {
	__typename?: 'DeleteCategoryPayload';
	/**
	 * The deteted term object
	 * @deprecated
	 */
	category?: Maybe<Category>;
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/**
	 * The ID of the deleted object
	 * @deprecated
	 */
	deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteComment mutation */
export type DeleteCommentInput = {
	clientMutationId: Scalars['String'];
	/** Whether the comment should be force deleted instead of being moved to the trash */
	forceDelete?: Maybe<Scalars['Boolean']>;
	/** The deleted comment ID */
	id: Scalars['ID'];
};

/** The payload for the deleteComment mutation */
export type DeleteCommentPayload = {
	__typename?: 'DeleteCommentPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/**
	 * The deleted comment object
	 * @deprecated
	 */
	comment?: Maybe<Comment>;
	/**
	 * The deleted comment ID
	 * @deprecated
	 */
	deletedId?: Maybe<Scalars['ID']>;
};

/** Input for the deleteMediaItem mutation */
export type DeleteMediaItemInput = {
	clientMutationId: Scalars['String'];
	/** Whether the mediaItem should be force deleted instead of being moved to the trash */
	forceDelete?: Maybe<Scalars['Boolean']>;
	/** The ID of the mediaItem to delete */
	id: Scalars['ID'];
};

/** The payload for the deleteMediaItem mutation */
export type DeleteMediaItemPayload = {
	__typename?: 'DeleteMediaItemPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/**
	 * The ID of the deleted mediaItem
	 * @deprecated
	 */
	deletedId?: Maybe<Scalars['ID']>;
	/**
	 * The mediaItem before it was deleted
	 * @deprecated
	 */
	mediaItem?: Maybe<MediaItem>;
};

/** Input for the deletePage mutation */
export type DeletePageInput = {
	clientMutationId: Scalars['String'];
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?: Maybe<Scalars['Boolean']>;
	/** The ID of the page to delete */
	id: Scalars['ID'];
};

/** The payload for the deletePage mutation */
export type DeletePagePayload = {
	__typename?: 'DeletePagePayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/**
	 * The ID of the deleted object
	 * @deprecated
	 */
	deletedId?: Maybe<Scalars['ID']>;
	/**
	 * The object before it was deleted
	 * @deprecated
	 */
	page?: Maybe<Page>;
};

/** Input for the deletePost mutation */
export type DeletePostInput = {
	clientMutationId: Scalars['String'];
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?: Maybe<Scalars['Boolean']>;
	/** The ID of the post to delete */
	id: Scalars['ID'];
};

/** The payload for the deletePost mutation */
export type DeletePostPayload = {
	__typename?: 'DeletePostPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/**
	 * The ID of the deleted object
	 * @deprecated
	 */
	deletedId?: Maybe<Scalars['ID']>;
	/**
	 * The object before it was deleted
	 * @deprecated
	 */
	post?: Maybe<Post>;
};

/** Input for the deletePostFormat mutation */
export type DeletePostFormatInput = {
	clientMutationId: Scalars['String'];
	/** The ID of the postFormat to delete */
	id: Scalars['ID'];
};

/** The payload for the deletePostFormat mutation */
export type DeletePostFormatPayload = {
	__typename?: 'DeletePostFormatPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/**
	 * The ID of the deleted object
	 * @deprecated
	 */
	deletedId?: Maybe<Scalars['ID']>;
	/**
	 * The deteted term object
	 * @deprecated
	 */
	postFormat?: Maybe<PostFormat>;
};

/** Input for the deleteTag mutation */
export type DeleteTagInput = {
	clientMutationId: Scalars['String'];
	/** The ID of the tag to delete */
	id: Scalars['ID'];
};

/** The payload for the deleteTag mutation */
export type DeleteTagPayload = {
	__typename?: 'DeleteTagPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/**
	 * The ID of the deleted object
	 * @deprecated
	 */
	deletedId?: Maybe<Scalars['ID']>;
	/**
	 * The deteted term object
	 * @deprecated
	 */
	tag?: Maybe<Tag>;
};

/** Input for the deleteUser mutation */
export type DeleteUserInput = {
	clientMutationId: Scalars['String'];
	/** The ID of the user you want to delete */
	id: Scalars['ID'];
	/** Reassign posts and links to new User ID. */
	reassignId?: Maybe<Scalars['ID']>;
};

/** The payload for the deleteUser mutation */
export type DeleteUserPayload = {
	__typename?: 'DeleteUserPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/**
	 * The ID of the user that you just deleted
	 * @deprecated
	 */
	deletedId?: Maybe<Scalars['ID']>;
	/**
	 * The deleted user object
	 * @deprecated
	 */
	user?: Maybe<User>;
};

/** Input for the login mutation */
export type LoginInput = {
	clientMutationId: Scalars['String'];
	/** The plain-text password for the user logging in. */
	password: Scalars['String'];
	/** The username used for login. Typically a unique or email address depending on specific configuration */
	username: Scalars['String'];
};

/** The payload for the login mutation */
export type LoginPayload = {
	__typename?: 'LoginPayload';
	/**
	 * JWT Token that can be used in future requests for Authentication
	 * @deprecated
	 */
	authToken?: Maybe<Scalars['String']>;
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/**
	 * A JWT token that can be used in future requests to get a refreshed jwtAuthToken. If the refresh token used in a request is revoked or otherwise invalid, a valid Auth token will NOT be issued in the response headers.
	 * @deprecated
	 */
	refreshToken?: Maybe<Scalars['String']>;
	/**
	 * The user that was logged in
	 * @deprecated
	 */
	user?: Maybe<User>;
};

/** Input for the refreshJwtAuthToken mutation */
export type RefreshJwtAuthTokenInput = {
	clientMutationId: Scalars['String'];
	/** A valid, previously issued JWT refresh token. If valid a new Auth token will be provided. If invalid, expired, revoked or otherwise invalid, a new AuthToken will not be provided. */
	jwtRefreshToken: Scalars['String'];
};

/** The payload for the refreshJwtAuthToken mutation */
export type RefreshJwtAuthTokenPayload = {
	__typename?: 'RefreshJwtAuthTokenPayload';
	/**
	 * JWT Token that can be used in future requests for Authentication
	 * @deprecated
	 */
	authToken?: Maybe<Scalars['String']>;
	/** @deprecated  */
	clientMutationId: Scalars['String'];
};

/** Input for the registerUser mutation */
export type RegisterUserInput = {
	/** User's AOL IM account. */
	aim?: Maybe<Scalars['String']>;
	clientMutationId: Scalars['String'];
	/** A string containing content about the user. */
	description?: Maybe<Scalars['String']>;
	/** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
	displayName?: Maybe<Scalars['String']>;
	/** A string containing the user's email address. */
	email?: Maybe<Scalars['String']>;
	/** 	The user's first name. */
	firstName?: Maybe<Scalars['String']>;
	/** User's Jabber account. */
	jabber?: Maybe<Scalars['String']>;
	/** The user's last name. */
	lastName?: Maybe<Scalars['String']>;
	/** User's locale. */
	locale?: Maybe<Scalars['String']>;
	/** A string that contains a URL-friendly name for the user. The default is the user's username. */
	nicename?: Maybe<Scalars['String']>;
	/** The user's nickname, defaults to the user's username. */
	nickname?: Maybe<Scalars['String']>;
	/** A string that contains the plain text password for the user. */
	password?: Maybe<Scalars['String']>;
	/** If true, this will refresh the users JWT secret. */
	refreshJwtUserSecret?: Maybe<Scalars['Boolean']>;
	/** The date the user registered. Format is Y-m-d H:i:s. */
	registered?: Maybe<Scalars['String']>;
	/** If true, this will revoke the users JWT secret. If false, this will unrevoke the JWT secret AND issue a new one. To revoke, the user must have proper capabilities to edit users JWT secrets. */
	revokeJwtUserSecret?: Maybe<Scalars['Boolean']>;
	/** A string for whether to enable the rich editor or not. False if not empty. */
	richEditing?: Maybe<Scalars['String']>;
	/** A string that contains the user's username. */
	username: Scalars['String'];
	/** A string containing the user's URL for the user's web site. */
	websiteUrl?: Maybe<Scalars['String']>;
	/** User's Yahoo IM account. */
	yim?: Maybe<Scalars['String']>;
};

/** The payload for the registerUser mutation */
export type RegisterUserPayload = {
	__typename?: 'RegisterUserPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/** @deprecated  */
	user?: Maybe<User>;
};

/** Input for the resetUserPassword mutation */
export type ResetUserPasswordInput = {
	clientMutationId: Scalars['String'];
	/** Password reset key */
	key?: Maybe<Scalars['String']>;
	/** The user's login (username). */
	login?: Maybe<Scalars['String']>;
	/** The new password. */
	password?: Maybe<Scalars['String']>;
};

/** The payload for the resetUserPassword mutation */
export type ResetUserPasswordPayload = {
	__typename?: 'ResetUserPasswordPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/** @deprecated  */
	user?: Maybe<User>;
};

/** Input for the restoreComment mutation */
export type RestoreCommentInput = {
	clientMutationId: Scalars['String'];
	/** The ID of the comment to be restored */
	id: Scalars['ID'];
};

/** The payload for the restoreComment mutation */
export type RestoreCommentPayload = {
	__typename?: 'RestoreCommentPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/**
	 * The restored comment object
	 * @deprecated
	 */
	comment?: Maybe<Comment>;
	/**
	 * The ID of the restored comment
	 * @deprecated
	 */
	restoredId?: Maybe<Scalars['ID']>;
};

/** Input for the sendPasswordResetEmail mutation */
export type SendPasswordResetEmailInput = {
	clientMutationId: Scalars['String'];
	/** A string that contains the user's username or email address. */
	username: Scalars['String'];
};

/** The payload for the sendPasswordResetEmail mutation */
export type SendPasswordResetEmailPayload = {
	__typename?: 'SendPasswordResetEmailPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/**
	 * The user that the password reset email was sent to
	 * @deprecated
	 */
	user?: Maybe<User>;
};

/** Input for the updateComment mutation */
export type UpdateCommentInput = {
	/** User agent used to post the comment. */
	agent?: Maybe<Scalars['String']>;
	/** The approval status of the comment. */
	approved?: Maybe<Scalars['String']>;
	/** The name of the comment's author. */
	author?: Maybe<Scalars['String']>;
	/** The email of the comment's author. */
	authorEmail?: Maybe<Scalars['String']>;
	/** IP address for the comment's author. */
	authorIp?: Maybe<Scalars['String']>;
	/** The url of the comment's author. */
	authorUrl?: Maybe<Scalars['String']>;
	clientMutationId: Scalars['String'];
	/** The ID of the post object the comment belongs to. */
	commentOn?: Maybe<Scalars['Int']>;
	/** Content of the comment. */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** The ID of the comment being updated. */
	id: Scalars['ID'];
	/** Parent comment of current comment. */
	parent?: Maybe<Scalars['ID']>;
	/** Type of comment. */
	type?: Maybe<Scalars['String']>;
	/** The userID of the comment's author. */
	userId?: Maybe<Scalars['Int']>;
};

/** The payload for the updateComment mutation */
export type UpdateCommentPayload = {
	__typename?: 'UpdateCommentPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/**
	 * The comment that was created
	 * @deprecated
	 */
	comment?: Maybe<Comment>;
	/**
	 * Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache
	 * @deprecated
	 */
	success?: Maybe<Scalars['Boolean']>;
};

/** Input for the updateMediaItem mutation */
export type UpdateMediaItemInput = {
	/** Alternative text to display when mediaItem is not displayed */
	altText?: Maybe<Scalars['String']>;
	/** The userId to assign as the author of the mediaItem */
	authorId?: Maybe<Scalars['ID']>;
	/** The caption for the mediaItem */
	caption?: Maybe<Scalars['String']>;
	clientMutationId: Scalars['String'];
	/** The comment status for the mediaItem */
	commentStatus?: Maybe<Scalars['String']>;
	/** The date of the mediaItem */
	date?: Maybe<Scalars['String']>;
	/** The date (in GMT zone) of the mediaItem */
	dateGmt?: Maybe<Scalars['String']>;
	/** Description of the mediaItem */
	description?: Maybe<Scalars['String']>;
	/** The file name of the mediaItem */
	filePath?: Maybe<Scalars['String']>;
	/** The file type of the mediaItem */
	fileType?: Maybe<MimeTypeEnum>;
	/** The ID of the mediaItem object */
	id: Scalars['ID'];
	/** The WordPress post ID or the graphQL postId of the parent object */
	parentId?: Maybe<Scalars['ID']>;
	/** The ping status for the mediaItem */
	pingStatus?: Maybe<Scalars['String']>;
	/** The slug of the mediaItem */
	slug?: Maybe<Scalars['String']>;
	/** The status of the mediaItem */
	status?: Maybe<MediaItemStatusEnum>;
	/** The title of the mediaItem */
	title?: Maybe<Scalars['String']>;
};

/** The payload for the updateMediaItem mutation */
export type UpdateMediaItemPayload = {
	__typename?: 'UpdateMediaItemPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/** @deprecated  */
	mediaItem?: Maybe<MediaItem>;
};

/** Input for the updatePage mutation */
export type UpdatePageInput = {
	/** The userId to assign as the author of the object */
	authorId?: Maybe<Scalars['ID']>;
	clientMutationId: Scalars['String'];
	/** The comment status for the object */
	commentStatus?: Maybe<Scalars['String']>;
	/** The content of the object */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** The ID of the page object */
	id: Scalars['ID'];
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: Maybe<Scalars['Int']>;
	/** The ID of the parent object */
	parentId?: Maybe<Scalars['ID']>;
	/** The password used to protect the content of the object */
	password?: Maybe<Scalars['String']>;
	/** The slug of the object */
	slug?: Maybe<Scalars['String']>;
	/** The status of the object */
	status?: Maybe<PostStatusEnum>;
	/** The title of the object */
	title?: Maybe<Scalars['String']>;
};

/** The payload for the updatePage mutation */
export type UpdatePagePayload = {
	__typename?: 'UpdatePagePayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/** @deprecated  */
	page?: Maybe<Page>;
};

/** Input for the updatePost mutation */
export type UpdatePostInput = {
	/** The userId to assign as the author of the object */
	authorId?: Maybe<Scalars['ID']>;
	/** Set connections between the post and categories */
	categories?: Maybe<PostCategoriesInput>;
	clientMutationId: Scalars['String'];
	/** The comment status for the object */
	commentStatus?: Maybe<Scalars['String']>;
	/** The content of the object */
	content?: Maybe<Scalars['String']>;
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: Maybe<Scalars['String']>;
	/** The excerpt of the object */
	excerpt?: Maybe<Scalars['String']>;
	/** The ID of the post object */
	id: Scalars['ID'];
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: Maybe<Scalars['Int']>;
	/** The password used to protect the content of the object */
	password?: Maybe<Scalars['String']>;
	/** The ping status for the object */
	pingStatus?: Maybe<Scalars['String']>;
	/** URLs that have been pinged. */
	pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** Set connections between the post and postFormats */
	postFormats?: Maybe<PostPostFormatsInput>;
	/** The slug of the object */
	slug?: Maybe<Scalars['String']>;
	/** The status of the object */
	status?: Maybe<PostStatusEnum>;
	/** Set connections between the post and tags */
	tags?: Maybe<PostTagsInput>;
	/** The title of the object */
	title?: Maybe<Scalars['String']>;
	/** URLs queued to be pinged. */
	toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The payload for the updatePost mutation */
export type UpdatePostPayload = {
	__typename?: 'UpdatePostPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/** @deprecated  */
	post?: Maybe<Post>;
};

/** Input for the updateSettings mutation */
export type UpdateSettingsInput = {
	clientMutationId: Scalars['String'];
	/** Allow people to submit comments on new posts. */
	discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
	/** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
	discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
	/** A date format for all date strings. */
	generalSettingsDateFormat?: Maybe<Scalars['String']>;
	/** Site tagline. */
	generalSettingsDescription?: Maybe<Scalars['String']>;
	/** This address is used for admin purposes, like new user notification. */
	generalSettingsEmail?: Maybe<Scalars['String']>;
	/** WordPress locale code. */
	generalSettingsLanguage?: Maybe<Scalars['String']>;
	/** A day number of the week that the week should start on. */
	generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
	/** A time format for all time strings. */
	generalSettingsTimeFormat?: Maybe<Scalars['String']>;
	/** A city in the same timezone as you. */
	generalSettingsTimezone?: Maybe<Scalars['String']>;
	/** Site title. */
	generalSettingsTitle?: Maybe<Scalars['String']>;
	/** Site URL. */
	generalSettingsUrl?: Maybe<Scalars['String']>;
	/** Blog pages show at most. */
	readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
	/** Default post category. */
	writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
	/** Default post format. */
	writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
	/** Convert emoticons like :-) and :-P to graphics on display. */
	writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

/** The payload for the updateSettings mutation */
export type UpdateSettingsPayload = {
	__typename?: 'UpdateSettingsPayload';
	/** @deprecated  */
	allSettings?: Maybe<Settings>;
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/** @deprecated  */
	discussionSettings?: Maybe<DiscussionSettings>;
	/** @deprecated  */
	generalSettings?: Maybe<GeneralSettings>;
	/** @deprecated  */
	readingSettings?: Maybe<ReadingSettings>;
	/** @deprecated  */
	writingSettings?: Maybe<WritingSettings>;
};

/** Input for the updateUser mutation */
export type UpdateUserInput = {
	/** User's AOL IM account. */
	aim?: Maybe<Scalars['String']>;
	clientMutationId: Scalars['String'];
	/** A string containing content about the user. */
	description?: Maybe<Scalars['String']>;
	/** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
	displayName?: Maybe<Scalars['String']>;
	/** A string containing the user's email address. */
	email?: Maybe<Scalars['String']>;
	/** 	The user's first name. */
	firstName?: Maybe<Scalars['String']>;
	/** The ID of the user */
	id: Scalars['ID'];
	/** User's Jabber account. */
	jabber?: Maybe<Scalars['String']>;
	/** The user's last name. */
	lastName?: Maybe<Scalars['String']>;
	/** User's locale. */
	locale?: Maybe<Scalars['String']>;
	/** A string that contains a URL-friendly name for the user. The default is the user's username. */
	nicename?: Maybe<Scalars['String']>;
	/** The user's nickname, defaults to the user's username. */
	nickname?: Maybe<Scalars['String']>;
	/** A string that contains the plain text password for the user. */
	password?: Maybe<Scalars['String']>;
	/** If true, this will refresh the users JWT secret. */
	refreshJwtUserSecret?: Maybe<Scalars['Boolean']>;
	/** The date the user registered. Format is Y-m-d H:i:s. */
	registered?: Maybe<Scalars['String']>;
	/** If true, this will revoke the users JWT secret. If false, this will unrevoke the JWT secret AND issue a new one. To revoke, the user must have proper capabilities to edit users JWT secrets. */
	revokeJwtUserSecret?: Maybe<Scalars['Boolean']>;
	/** A string for whether to enable the rich editor or not. False if not empty. */
	richEditing?: Maybe<Scalars['String']>;
	/** An array of roles to be assigned to the user. */
	roles?: Maybe<Array<Maybe<Scalars['String']>>>;
	/** A string containing the user's URL for the user's web site. */
	websiteUrl?: Maybe<Scalars['String']>;
	/** User's Yahoo IM account. */
	yim?: Maybe<Scalars['String']>;
};

/** The payload for the updateUser mutation */
export type UpdateUserPayload = {
	__typename?: 'UpdateUserPayload';
	/** @deprecated  */
	clientMutationId: Scalars['String'];
	/** @deprecated  */
	user?: Maybe<User>;
};

/** A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations. */
export type __Schema = {
	__typename?: '__Schema';
	description?: Maybe<Scalars['String']>;
	/** A list of all types supported by this server. */
	types: Array<__Type>;
	/** The type that query operations will be rooted at. */
	queryType: __Type;
	/** If this server supports mutation, the type that mutation operations will be rooted at. */
	mutationType?: Maybe<__Type>;
	/** If this server support subscription, the type that subscription operations will be rooted at. */
	subscriptionType?: Maybe<__Type>;
	/** A list of all directives supported by this server. */
	directives: Array<__Directive>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __Type = {
	__typename?: '__Type';
	kind: __TypeKind;
	name?: Maybe<Scalars['String']>;
	description?: Maybe<Scalars['String']>;
	specifiedByUrl?: Maybe<Scalars['String']>;
	fields?: Maybe<Array<__Field>>;
	interfaces?: Maybe<Array<__Type>>;
	possibleTypes?: Maybe<Array<__Type>>;
	enumValues?: Maybe<Array<__EnumValue>>;
	inputFields?: Maybe<Array<__InputValue>>;
	ofType?: Maybe<__Type>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeFieldsArgs = {
	includeDeprecated?: Maybe<Scalars['Boolean']>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeEnumValuesArgs = {
	includeDeprecated?: Maybe<Scalars['Boolean']>;
};

/** An enum describing what kind of type a given `__Type` is. */
export enum __TypeKind {
	/** Indicates this type is a scalar. */
	Scalar = 'SCALAR',
	/** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
	Object = 'OBJECT',
	/** Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields. */
	Interface = 'INTERFACE',
	/** Indicates this type is a union. `possibleTypes` is a valid field. */
	Union = 'UNION',
	/** Indicates this type is an enum. `enumValues` is a valid field. */
	Enum = 'ENUM',
	/** Indicates this type is an input object. `inputFields` is a valid field. */
	InputObject = 'INPUT_OBJECT',
	/** Indicates this type is a list. `ofType` is a valid field. */
	List = 'LIST',
	/** Indicates this type is a non-null. `ofType` is a valid field. */
	NonNull = 'NON_NULL'
}

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __Field = {
	__typename?: '__Field';
	name: Scalars['String'];
	description?: Maybe<Scalars['String']>;
	args: Array<__InputValue>;
	type: __Type;
	isDeprecated: Scalars['Boolean'];
	deprecationReason?: Maybe<Scalars['String']>;
};

/** Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value. */
export type __InputValue = {
	__typename?: '__InputValue';
	name: Scalars['String'];
	description?: Maybe<Scalars['String']>;
	type: __Type;
	/** A GraphQL-formatted string representing the default value for this input value. */
	defaultValue?: Maybe<Scalars['String']>;
};

/** One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string. */
export type __EnumValue = {
	__typename?: '__EnumValue';
	name: Scalars['String'];
	description?: Maybe<Scalars['String']>;
	isDeprecated: Scalars['Boolean'];
	deprecationReason?: Maybe<Scalars['String']>;
};

/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
 */
export type __Directive = {
	__typename?: '__Directive';
	name: Scalars['String'];
	description?: Maybe<Scalars['String']>;
	isRepeatable: Scalars['Boolean'];
	locations: Array<__DirectiveLocation>;
	args: Array<__InputValue>;
};

/** A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies. */
export enum __DirectiveLocation {
	/** Location adjacent to a query operation. */
	Query = 'QUERY',
	/** Location adjacent to a mutation operation. */
	Mutation = 'MUTATION',
	/** Location adjacent to a subscription operation. */
	Subscription = 'SUBSCRIPTION',
	/** Location adjacent to a field. */
	Field = 'FIELD',
	/** Location adjacent to a fragment definition. */
	FragmentDefinition = 'FRAGMENT_DEFINITION',
	/** Location adjacent to a fragment spread. */
	FragmentSpread = 'FRAGMENT_SPREAD',
	/** Location adjacent to an inline fragment. */
	InlineFragment = 'INLINE_FRAGMENT',
	/** Location adjacent to a variable definition. */
	VariableDefinition = 'VARIABLE_DEFINITION',
	/** Location adjacent to a schema definition. */
	Schema = 'SCHEMA',
	/** Location adjacent to a scalar definition. */
	Scalar = 'SCALAR',
	/** Location adjacent to an object type definition. */
	Object = 'OBJECT',
	/** Location adjacent to a field definition. */
	FieldDefinition = 'FIELD_DEFINITION',
	/** Location adjacent to an argument definition. */
	ArgumentDefinition = 'ARGUMENT_DEFINITION',
	/** Location adjacent to an interface definition. */
	Interface = 'INTERFACE',
	/** Location adjacent to a union definition. */
	Union = 'UNION',
	/** Location adjacent to an enum definition. */
	Enum = 'ENUM',
	/** Location adjacent to an enum value definition. */
	EnumValue = 'ENUM_VALUE',
	/** Location adjacent to an input object type definition. */
	InputObject = 'INPUT_OBJECT',
	/** Location adjacent to an input object field definition. */
	InputFieldDefinition = 'INPUT_FIELD_DEFINITION'
}

export type AllPostsGraphQlQueryVariables = Exact<{ [key: string]: never }>;

export type AllPostsGraphQlQuery = { __typename?: 'RootQuery' } & {
	posts?: Maybe<
		{ __typename?: 'RootQueryToPostConnection' } & {
			edges?: Maybe<
				Array<
					Maybe<
						{ __typename?: 'RootQueryToPostConnectionEdge' } & {
							node?: Maybe<
								{ __typename?: 'Post' } & Pick<
									Post,
									'title' | 'excerpt' | 'slug' | 'date'
								> & {
										featuredImage?: Maybe<
											{ __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge' } & {
												node?: Maybe<
													{ __typename?: 'MediaItem' } & Pick<MediaItem, 'sourceUrl'>
												>;
											}
										>;
									}
							>;
						}
					>
				>
			>;
		}
	>;
};

export type AllCategoriesQueryVariables = Exact<{
	first?: Maybe<Scalars['Int']>;
}>;

export type AllCategoriesQuery = { __typename?: 'RootQuery' } & {
	categories?: Maybe<
		{ __typename?: 'RootQueryToCategoryConnection' } & {
			pageInfo?: Maybe<
				{ __typename?: 'WPPageInfo' } & Pick<
					WpPageInfo,
					'hasNextPage' | 'endCursor'
				>
			>;
			edges?: Maybe<
				Array<
					Maybe<
						{ __typename?: 'RootQueryToCategoryConnectionEdge' } & {
							node?: Maybe<{ __typename?: 'Category' } & Pick<Category, 'name'>>;
						}
					>
				>
			>;
		}
	>;
};

export type AllPostsQueryVariables = Exact<{
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
}>;

export type AllPostsQuery = { __typename?: 'RootQuery' } & {
	posts?: Maybe<
		{ __typename?: 'RootQueryToPostConnection' } & {
			edges?: Maybe<
				Array<
					Maybe<
						{ __typename?: 'RootQueryToPostConnectionEdge' } & {
							node?: Maybe<
								{ __typename?: 'Post' } & Pick<
									Post,
									'title' | 'content' | 'date' | 'excerpt' | 'id' | 'modified' | 'slug'
								> & {
										author?: Maybe<
											{ __typename?: 'NodeWithAuthorToUserConnectionEdge' } & {
												node?: Maybe<
													{ __typename?: 'User' } & Pick<
														User,
														'name' | 'firstName' | 'lastName'
													> & {
															avatar?: Maybe<
																{ __typename?: 'Avatar' } & Pick<
																	Avatar,
																	'url' | 'size' | 'height' | 'width'
																>
															>;
														}
												>;
											}
										>;
										featuredImage?: Maybe<
											{ __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge' } & {
												node?: Maybe<
													{ __typename?: 'MediaItem' } & Pick<MediaItem, 'sourceUrl'>
												>;
											}
										>;
										social?: Maybe<
											{ __typename?: 'Post_Social' } & Pick<
												Post_Social,
												'facebook' | 'instagram' | 'twitter' | 'website'
											>
										>;
									}
							>;
						}
					>
				>
			>;
		}
	>;
};

export type AllTagsQueryVariables = Exact<{
	first?: Maybe<Scalars['Int']>;
}>;

export type AllTagsQuery = { __typename?: 'RootQuery' } & {
	tags?: Maybe<
		{ __typename?: 'RootQueryToTagConnection' } & {
			pageInfo?: Maybe<
				{ __typename?: 'WPPageInfo' } & Pick<
					WpPageInfo,
					'hasNextPage' | 'endCursor'
				>
			>;
			edges?: Maybe<
				Array<
					Maybe<
						{ __typename?: 'RootQueryToTagConnectionEdge' } & {
							node?: Maybe<{ __typename?: 'Tag' } & Pick<Tag, 'name'>>;
						}
					>
				>
			>;
		}
	>;
};

export type AuthorCardQueryQueryVariables = Exact<{ [key: string]: never }>;

export type AuthorCardQueryQuery = { __typename?: 'RootQuery' } & {
	users?: Maybe<
		{ __typename?: 'RootQueryToUserConnection' } & {
			nodes?: Maybe<
				Array<
					Maybe<
						{ __typename?: 'User' } & Pick<
							User,
							'name' | 'firstName' | 'lastName'
						> & { avatar?: Maybe<{ __typename?: 'Avatar' } & Pick<Avatar, 'url'>> }
					>
				>
			>;
		}
	>;
};

export type AuthorQueryVariables = Exact<{ [key: string]: never }>;

export type AuthorQuery = { __typename?: 'RootQuery' } & {
	users?: Maybe<
		{ __typename?: 'RootQueryToUserConnection' } & {
			edges?: Maybe<
				Array<
					Maybe<
						{ __typename?: 'RootQueryToUserConnectionEdge' } & {
							node?: Maybe<
								{ __typename?: 'User' } & Pick<
									User,
									'firstName' | 'id' | 'lastName' | 'name' | 'slug'
								> & {
										avatar?: Maybe<
											{ __typename?: 'Avatar' } & Pick<Avatar, 'url' | 'size'>
										>;
									}
							>;
						}
					>
				>
			>;
		}
	>;
};

export type CategoriesByEdgesQueryVariables = Exact<{ [key: string]: never }>;

export type CategoriesByEdgesQuery = { __typename?: 'RootQuery' } & {
	categories?: Maybe<
		{ __typename?: 'RootQueryToCategoryConnection' } & {
			edges?: Maybe<
				Array<
					Maybe<
						{ __typename?: 'RootQueryToCategoryConnectionEdge' } & Pick<
							RootQueryToCategoryConnectionEdge,
							'cursor'
						> & {
								node?: Maybe<
									{ __typename?: 'Category' } & Pick<
										Category,
										'slug' | 'name' | 'count' | 'id'
									>
								>;
							}
					>
				>
			>;
		}
	>;
};

export type CategoriesByNodesQueryVariables = Exact<{ [key: string]: never }>;

export type CategoriesByNodesQuery = { __typename?: 'RootQuery' } & {
	categories?: Maybe<
		{ __typename?: 'RootQueryToCategoryConnection' } & {
			nodes?: Maybe<
				Array<
					Maybe<
						{ __typename?: 'Category' } & Pick<
							Category,
							'name' | 'count' | 'slug' | 'id'
						>
					>
				>
			>;
		}
	>;
};

export type CategoryByIdQueryVariables = Exact<{
	id: Scalars['ID'];
	idType: CategoryIdType;
}>;

export type CategoryByIdQuery = { __typename?: 'RootQuery' } & {
	category?: Maybe<
		{ __typename: 'Category' } & Pick<Category, 'name' | 'id' | 'slug' | 'count'>
	>;
};

export type SearchCategoriesReturnPostsQueryVariables = Exact<{
	name?: Maybe<Array<Scalars['String']>>;
	search?: Maybe<Scalars['String']>;
	field: PostObjectsConnectionOrderbyEnum;
	order: OrderEnum;
}>;

export type SearchCategoriesReturnPostsQuery = { __typename?: 'RootQuery' } & {
	categories?: Maybe<
		{ __typename?: 'RootQueryToCategoryConnection' } & {
			edges?: Maybe<
				Array<
					Maybe<
						{ __typename?: 'RootQueryToCategoryConnectionEdge' } & {
							node?: Maybe<
								{ __typename?: 'Category' } & Pick<
									Category,
									'name' | 'count' | 'id'
								> & {
										posts?: Maybe<
											{ __typename?: 'CategoryToPostConnection' } & {
												edges?: Maybe<
													Array<
														Maybe<
															{ __typename?: 'CategoryToPostConnectionEdge' } & {
																node?: Maybe<
																	{ __typename?: 'Post' } & Pick<
																		Post,
																		| 'title'
																		| 'uri'
																		| 'excerpt'
																		| 'slug'
																		| 'content'
																		| 'date'
																		| 'modified'
																		| 'id'
																	> & {
																			social?: Maybe<
																				{ __typename?: 'Post_Social' } & Pick<
																					Post_Social,
																					'facebook' | 'instagram' | 'twitter' | 'website'
																				>
																			>;
																			featuredImage?: Maybe<
																				{
																					__typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
																				} & {
																					node?: Maybe<
																						{ __typename?: 'MediaItem' } & Pick<
																							MediaItem,
																							'sourceUrl'
																						>
																					>;
																				}
																			>;
																			author?: Maybe<
																				{ __typename?: 'NodeWithAuthorToUserConnectionEdge' } & {
																					node?: Maybe<
																						{ __typename?: 'User' } & Pick<
																							User,
																							'name' | 'firstName' | 'lastName'
																						> & {
																								avatar?: Maybe<
																									{ __typename?: 'Avatar' } & Pick<
																										Avatar,
																										'url' | 'size' | 'height' | 'width'
																									>
																								>;
																							}
																					>;
																				}
																			>;
																		}
																>;
															}
														>
													>
												>;
											}
										>;
									}
							>;
						}
					>
				>
			>;
		}
	>;
};

export type CategoryTypedQueryVariables = Exact<{
	idType: CategoryIdType;
	id: Scalars['ID'];
}>;

export type CategoryTypedQuery = { __typename: 'RootQuery' } & {
	category?: Maybe<{ __typename?: 'Category' } & Pick<Category, 'name'>>;
	categories?: Maybe<
		{ __typename: 'RootQueryToCategoryConnection' } & {
			edges?: Maybe<
				Array<
					Maybe<
						{ __typename: 'RootQueryToCategoryConnectionEdge' } & {
							node?: Maybe<
								{ __typename: 'Category' } & Pick<
									Category,
									'id' | 'name' | 'databaseId' | 'slug'
								>
							>;
						}
					>
				>
			>;
		}
	>;
};

export type PostsByIdReturnImageSlugQueryVariables = Exact<{
	[key: string]: never;
}>;

export type PostsByIdReturnImageSlugQuery = { __typename?: 'RootQuery' } & {
	posts?: Maybe<
		{ __typename?: 'RootQueryToPostConnection' } & {
			nodes?: Maybe<
				Array<
					Maybe<
						{ __typename?: 'Post' } & Pick<Post, 'title' | 'id'> & {
								featuredImage?: Maybe<
									{ __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge' } & {
										node?: Maybe<
											{ __typename?: 'MediaItem' } & Pick<
												MediaItem,
												'slug' | 'uri' | 'title' | 'sourceUrl'
											>
										>;
									}
								>;
							}
					>
				>
			>;
		}
	>;
};

export type IntrospectionQueryQueryVariables = Exact<{ [key: string]: never }>;

export type IntrospectionQueryQuery = { __typename?: 'RootQuery' } & {
	__schema: { __typename?: '__Schema' } & {
		queryType: { __typename?: '__Type' } & Pick<__Type, 'name'>;
		mutationType?: Maybe<{ __typename?: '__Type' } & Pick<__Type, 'name'>>;
		subscriptionType?: Maybe<{ __typename?: '__Type' } & Pick<__Type, 'name'>>;
		types: Array<{ __typename?: '__Type' } & FullTypeFragment>;
		directives: Array<
			{ __typename?: '__Directive' } & Pick<
				__Directive,
				'name' | 'description' | 'locations'
			> & { args: Array<{ __typename?: '__InputValue' } & InputValueFragment> }
		>;
	};
};

export type FullTypeFragment = { __typename?: '__Type' } & Pick<
	__Type,
	'kind' | 'name' | 'description'
> & {
		fields?: Maybe<
			Array<
				{ __typename?: '__Field' } & Pick<
					__Field,
					'name' | 'description' | 'isDeprecated' | 'deprecationReason'
				> & {
						args: Array<{ __typename?: '__InputValue' } & InputValueFragment>;
						type: { __typename?: '__Type' } & TypeRefFragment;
					}
			>
		>;
		inputFields?: Maybe<
			Array<{ __typename?: '__InputValue' } & InputValueFragment>
		>;
		interfaces?: Maybe<Array<{ __typename?: '__Type' } & TypeRefFragment>>;
		enumValues?: Maybe<
			Array<
				{ __typename?: '__EnumValue' } & Pick<
					__EnumValue,
					'name' | 'description' | 'isDeprecated' | 'deprecationReason'
				>
			>
		>;
		possibleTypes?: Maybe<Array<{ __typename?: '__Type' } & TypeRefFragment>>;
	};

export type InputValueFragment = { __typename?: '__InputValue' } & Pick<
	__InputValue,
	'name' | 'description' | 'defaultValue'
> & { type: { __typename?: '__Type' } & TypeRefFragment };

export type TypeRefFragment = { __typename?: '__Type' } & Pick<
	__Type,
	'kind' | 'name'
> & {
		ofType?: Maybe<
			{ __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
					ofType?: Maybe<
						{ __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
								ofType?: Maybe<
									{ __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
											ofType?: Maybe<
												{ __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
														ofType?: Maybe<
															{ __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
																	ofType?: Maybe<
																		{ __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'> & {
																				ofType?: Maybe<
																					{ __typename?: '__Type' } & Pick<__Type, 'kind' | 'name'>
																				>;
																			}
																	>;
																}
														>;
													}
											>;
										}
								>;
							}
					>;
				}
		>;
	};

export type GetAllPostsWithSlugQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllPostsWithSlugQuery = { __typename?: 'RootQuery' } & {
	posts?: Maybe<
		{ __typename?: 'RootQueryToPostConnection' } & {
			edges?: Maybe<
				Array<
					Maybe<
						{ __typename?: 'RootQueryToPostConnectionEdge' } & {
							node?: Maybe<{ __typename?: 'Post' } & Pick<Post, 'slug'>>;
						}
					>
				>
			>;
		}
	>;
};

export type PostsByIdQueryVariables = Exact<{ [key: string]: never }>;

export type PostsByIdQuery = { __typename?: 'RootQuery' } & {
	posts?: Maybe<
		{ __typename?: 'RootQueryToPostConnection' } & {
			nodes?: Maybe<
				Array<
					Maybe<{ __typename?: 'Post' } & Pick<Post, 'id' | 'title' | 'databaseId'>>
				>
			>;
		}
	>;
};

export type AllPostsForCategoryQueryVariables = Exact<{
	first?: Maybe<Scalars['Int']>;
	name?: Maybe<Array<Maybe<Scalars['String']>>>;
}>;

export type AllPostsForCategoryQuery = { __typename?: 'RootQuery' } & {
	categories?: Maybe<
		{ __typename?: 'RootQueryToCategoryConnection' } & {
			edges?: Maybe<
				Array<
					Maybe<
						{ __typename?: 'RootQueryToCategoryConnectionEdge' } & {
							node?: Maybe<
								{ __typename?: 'Category' } & Pick<
									Category,
									'id' | 'databaseId' | 'name'
								> & {
										posts?: Maybe<
											{ __typename?: 'CategoryToPostConnection' } & {
												nodes?: Maybe<
													Array<
														Maybe<
															{ __typename?: 'Post' } & Pick<
																Post,
																'id' | 'title' | 'date' | 'excerpt' | 'slug' | 'modified'
															> & {
																	social?: Maybe<
																		{ __typename?: 'Post_Social' } & Pick<
																			Post_Social,
																			'facebook' | 'instagram' | 'twitter' | 'website'
																		>
																	>;
																	featuredImage?: Maybe<
																		{
																			__typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
																		} & {
																			node?: Maybe<
																				{ __typename?: 'MediaItem' } & Pick<MediaItem, 'sourceUrl'>
																			>;
																		}
																	>;
																	author?: Maybe<
																		{ __typename?: 'NodeWithAuthorToUserConnectionEdge' } & {
																			node?: Maybe<
																				{ __typename?: 'User' } & Pick<
																					User,
																					'name' | 'firstName' | 'lastName'
																				> & {
																						avatar?: Maybe<
																							{ __typename?: 'Avatar' } & Pick<Avatar, 'url'>
																						>;
																					}
																			>;
																		}
																	>;
																}
														>
													>
												>;
											}
										>;
									}
							>;
						}
					>
				>
			>;
		}
	>;
};

export type WpSearchQueryQueryVariables = Exact<{
	term: Scalars['String'];
}>;

export type WpSearchQueryQuery = { __typename?: 'RootQuery' } & {
	Posts?: Maybe<
		{ __typename?: 'RootQueryToPostConnection' } & {
			nodes?: Maybe<
				Array<
					Maybe<
						{ __typename?: 'Post' } & Pick<Post, 'title' | 'uri' | 'id' | 'date'> & {
								categories?: Maybe<
									{ __typename?: 'PostToCategoryConnection' } & {
										nodes?: Maybe<
											Array<
												Maybe<
													{ __typename?: 'Category' } & Pick<Category, 'name' | 'id' | 'uri'>
												>
											>
										>;
									}
								>;
							}
					>
				>
			>;
		}
	>;
};

declare module '*/all-posts.graphql' {
	import { DocumentNode } from 'graphql';
	const defaultDocument: DocumentNode;
	export const AllPostsGraphQL: DocumentNode;

	export default defaultDocument;
}

declare module '*/api-all-categories.ts' {
	import { DocumentNode } from 'graphql';
	const defaultDocument: DocumentNode;
	export const AllCategories: DocumentNode;

	export default defaultDocument;
}

declare module '*/api-all-posts.ts' {
	import { DocumentNode } from 'graphql';
	const defaultDocument: DocumentNode;
	export const AllPosts: DocumentNode;

	export default defaultDocument;
}

declare module '*/api-all-tags.ts' {
	import { DocumentNode } from 'graphql';
	const defaultDocument: DocumentNode;
	export const AllTags: DocumentNode;

	export default defaultDocument;
}

declare module '*/api-author-card-query.ts' {
	import { DocumentNode } from 'graphql';
	const defaultDocument: DocumentNode;
	export const AuthorCardQuery: DocumentNode;

	export default defaultDocument;
}

declare module '*/api-by-author.ts' {
	import { DocumentNode } from 'graphql';
	const defaultDocument: DocumentNode;
	export const Author: DocumentNode;

	export default defaultDocument;
}

declare module '*/api-categories-by-edges.ts' {
	import { DocumentNode } from 'graphql';
	const defaultDocument: DocumentNode;
	export const CategoriesByEdges: DocumentNode;

	export default defaultDocument;
}

declare module '*/api-categories-by-nodes.ts' {
	import { DocumentNode } from 'graphql';
	const defaultDocument: DocumentNode;
	export const CategoriesByNodes: DocumentNode;

	export default defaultDocument;
}

declare module '*/api-category-by-id.ts' {
	import { DocumentNode } from 'graphql';
	const defaultDocument: DocumentNode;
	export const CategoryById: DocumentNode;

	export default defaultDocument;
}

declare module '*/api-category-search-by-post.ts' {
	import { DocumentNode } from 'graphql';
	const defaultDocument: DocumentNode;
	export const SearchCategoriesReturnPosts: DocumentNode;

	export default defaultDocument;
}

declare module '*/api-category-typed.ts' {
	import { DocumentNode } from 'graphql';
	const defaultDocument: DocumentNode;
	export const CategoryTyped: DocumentNode;

	export default defaultDocument;
}

declare module '*/api-cover-image.ts' {
	import { DocumentNode } from 'graphql';
	const defaultDocument: DocumentNode;
	export const PostsByIdReturnImageSlug: DocumentNode;

	export default defaultDocument;
}

declare module '*/api-introspection.ts' {
	import { DocumentNode } from 'graphql';
	const defaultDocument: DocumentNode;
	export const IntrospectionQuery: DocumentNode;
	export const FullType: DocumentNode;
	export const InputValue: DocumentNode;
	export const TypeRef: DocumentNode;

	export default defaultDocument;
}

declare module '*/api-post-slugs.ts' {
	import { DocumentNode } from 'graphql';
	const defaultDocument: DocumentNode;
	export const getAllPostsWithSlug: DocumentNode;

	export default defaultDocument;
}

declare module '*/api-posts-by-id.ts' {
	import { DocumentNode } from 'graphql';
	const defaultDocument: DocumentNode;
	export const PostsById: DocumentNode;

	export default defaultDocument;
}

declare module '*/api-posts-for-category.ts' {
	import { DocumentNode } from 'graphql';
	const defaultDocument: DocumentNode;
	export const AllPostsForCategory: DocumentNode;

	export default defaultDocument;
}

declare module '*/wp-search-query.ts' {
	import { DocumentNode } from 'graphql';
	const defaultDocument: DocumentNode;
	export const WPSearchQuery: DocumentNode;

	export default defaultDocument;
}

export const TypeRef = gql`
	fragment TypeRef on __Type {
		kind
		name
		ofType {
			kind
			name
			ofType {
				kind
				name
				ofType {
					kind
					name
					ofType {
						kind
						name
						ofType {
							kind
							name
							ofType {
								kind
								name
								ofType {
									kind
									name
								}
							}
						}
					}
				}
			}
		}
	}
`;
export const InputValue = gql`
	fragment InputValue on __InputValue {
		name
		description
		type {
			...TypeRef
		}
		defaultValue
	}
	${TypeRef}
`;
export const FullType = gql`
	fragment FullType on __Type {
		kind
		name
		description
		fields(includeDeprecated: true) {
			name
			description
			args {
				...InputValue
			}
			type {
				...TypeRef
			}
			isDeprecated
			deprecationReason
		}
		inputFields {
			...InputValue
		}
		interfaces {
			...TypeRef
		}
		enumValues(includeDeprecated: true) {
			name
			description
			isDeprecated
			deprecationReason
		}
		possibleTypes {
			...TypeRef
		}
	}
	${InputValue}
	${TypeRef}
`;
export const AllPostsGraphQl = gql`
	query AllPostsGraphQL {
		posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
			edges {
				node {
					title
					excerpt
					slug
					date
					featuredImage {
						node {
							sourceUrl
						}
					}
				}
			}
		}
	}
`;
export const AllCategories = gql`
	query AllCategories($first: Int) {
		categories(first: $first) {
			pageInfo {
				hasNextPage
				endCursor
			}
			edges {
				node {
					name
				}
			}
		}
	}
`;
export const AllPosts = gql`
	query AllPosts($field: PostObjectsConnectionOrderbyEnum!, $order: OrderEnum!) {
		posts(first: 35, where: { orderby: { field: $field, order: $order } }) {
			edges {
				node {
					author {
						node {
							name
							firstName
							lastName
							avatar {
								url
								size
								height
								width
							}
						}
					}
					title
					content
					date
					excerpt
					featuredImage {
						node {
							sourceUrl
						}
					}
					id
					modified
					slug
					social {
						facebook
						instagram
						twitter
						website
					}
				}
			}
		}
	}
`;
export const AllTags = gql`
	query AllTags($first: Int) {
		tags(first: $first) {
			pageInfo {
				hasNextPage
				endCursor
			}
			edges {
				node {
					name
				}
			}
		}
	}
`;
export const AuthorCardQuery = gql`
	query AuthorCardQuery {
		users(where: { include: [] }) {
			nodes {
				name
				firstName
				lastName
				avatar {
					url
				}
			}
		}
	}
`;
export const Author = gql`
	query Author {
		users {
			edges {
				node {
					avatar {
						url
						size
					}
					firstName
					id
					lastName
					name
					slug
				}
			}
		}
	}
`;
export const CategoriesByEdges = gql`
	query CategoriesByEdges {
		categories {
			edges {
				node {
					slug
					name
					count
					id
				}
				cursor
			}
		}
	}
`;
export const CategoriesByNodes = gql`
	query CategoriesByNodes {
		categories {
			nodes {
				name
				count
				slug
				id
			}
		}
	}
`;
export const CategoryById = gql`
	query CategoryById($id: ID!, $idType: CategoryIdType!) {
		category(id: $id, idType: $idType) {
			__typename
			name
			id
			slug
			count
		}
	}
`;
export const SearchCategoriesReturnPosts = gql`
	query SearchCategoriesReturnPosts(
		$name: [String!]
		$search: String
		$field: PostObjectsConnectionOrderbyEnum!
		$order: OrderEnum!
	) {
		categories(where: { name: $name, search: $search }) {
			edges {
				node {
					name
					count
					id
					posts(where: { orderby: { field: $field, order: $order } }) {
						edges {
							node {
								title
								uri
								social {
									facebook
									instagram
									twitter
									website
								}
								excerpt
								slug
								featuredImage {
									node {
										sourceUrl
									}
								}
								author {
									node {
										name
										firstName
										lastName
										avatar {
											url
											size
											height
											width
										}
									}
								}
								content
								date
								modified
								id
							}
						}
					}
				}
			}
		}
	}
`;
export const CategoryTyped = gql`
	query CategoryTyped($idType: CategoryIdType!, $id: ID!) {
		category(id: $id, idType: $idType) {
			name
		}
		__typename
		categories {
			__typename
			edges {
				__typename
				node {
					__typename
					id
					name
					databaseId
					slug
				}
			}
		}
	}
`;
export const PostsByIdReturnImageSlug = gql`
	query PostsByIdReturnImageSlug {
		posts(where: { in: [] }) {
			nodes {
				title
				featuredImage {
					node {
						slug
						uri
						title
						sourceUrl
					}
				}
				id
			}
		}
	}
`;
export const IntrospectionQuery = gql`
	query IntrospectionQuery {
		__schema {
			queryType {
				name
			}
			mutationType {
				name
			}
			subscriptionType {
				name
			}
			types {
				...FullType
			}
			directives {
				name
				description
				locations
				args {
					...InputValue
				}
			}
		}
	}
	${FullType}
	${InputValue}
`;
export const GetAllPostsWithSlug = gql`
	query getAllPostsWithSlug {
		posts(first: 10000) {
			edges {
				node {
					slug
				}
			}
		}
	}
`;
export const PostsById = gql`
	query PostsById {
		posts(where: { in: [] }) {
			nodes {
				id
				title
				databaseId
			}
		}
	}
`;
export const AllPostsForCategory = gql`
	query AllPostsForCategory($first: Int, $name: [String]) {
		categories(first: $first, where: { name: $name }) {
			edges {
				node {
					id
					databaseId
					name
					posts {
						nodes {
							id
							title
							date
							excerpt
							slug
							modified
							social {
								facebook
								instagram
								twitter
								website
							}
							featuredImage {
								node {
									sourceUrl
								}
							}
							author {
								node {
									name
									firstName
									lastName
									avatar {
										url
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;
export const WpSearchQuery = gql`
	query WPSearchQuery($term: String!) {
		Posts: posts(first: 500, where: { search: $term }) {
			nodes {
				title
				uri
				id
				date
				categories {
					nodes {
						name
						id
						uri
					}
				}
			}
		}
	}
`;
