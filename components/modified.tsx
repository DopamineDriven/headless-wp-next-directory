import { parseISO, format } from 'date-fns';

export type ModifiedProps = {
	modifiedString: string;
};

export default function Modified({ modifiedString }: ModifiedProps) {
	const modified = parseISO(modifiedString);
	return (
		<time dateTime={modifiedString}>{format(modified, 'LLLL	d, yyyy')}</time>
	);
}
