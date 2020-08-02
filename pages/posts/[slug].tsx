import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Container from '../../components/container';
import Header from '../../components/fixed-header';
import Layout from '../../components/layout';
import SectionSeparator from '../../components/section-separator';
import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import PostTitle from '../../components/post-title';
import MorePosts from '../../components/more-posts';
import Tags from '../../components/tags';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import { CLIENT_NAME } from '../../lib/constants';
import PostType from '../../types/post';
import Posts from '../../types/posts';

type Props = {
	post: PostType;
	posts: Posts;
	props: string | number;
	preview?: boolean;
};

const Post = ({ post, posts, preview, props }: Props) => {
    const router = useRouter();
    const morePosts = posts?.edges;
};
