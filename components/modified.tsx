import { parseISO, format } from 'date-fns';

type ModifiedProps = {
	modifiedString: string;
};

export default function Modified({ modifiedString }: ModifiedProps) {
	const date: Date = parseISO(modifiedString);
	return (<time dateTime={modifiedString}>{format(date, 'LLLL	d, yyyy')}</time>);
}
