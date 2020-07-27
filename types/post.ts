import Client from './client';

interface PostType {
    slug: string;
    title: string;
    date: string;
    coverImage: string;
    client: Client;
    excerpt: string;
    ogImage: {
        url: string;
    }
    content: string;
}

export default PostType;