import { parseISO, format } from 'date-fns';

interface ModifiedProps {
	modifiedString: string | null;
}

const Modified = ({ modifiedString }: ModifiedProps): JSX.Element => {
	if (modifiedString != null) {
		const date: Date = parseISO(modifiedString);
		return <time dateTime={modifiedString}>{format(date, 'LLLL	d, yyyy')}</time>;
	} else {
		return <p>Post hasn't been modified.</p>;
	}
};

export default Modified;
