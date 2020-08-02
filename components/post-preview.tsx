import Avatar from './avatar';
import DateFormater from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import Author from '../types/author';

type Props = {
    title: string;
    coverImage: string;
    date: string;
    excerpt: string;
    slug: string | number;
    author: Author;
}

const PostPreview = ({
    title,
    coverImage,
    date,
    excerpt,
    slug,
    author
}: Props) => {
    return (
        <div>
            <div className="mb-5">
                <CoverImage slug={slug} title={title} src={coverImage} />
            </div>
            
        </div>
    )
}

export default PostPreview;
