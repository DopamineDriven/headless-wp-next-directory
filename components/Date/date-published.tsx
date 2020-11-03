import { parseISO, format } from 'date-fns';

export type DateProps = {
	dateString: string | null;
};

const Date = ({ dateString }: DateProps) => {
	if (dateString != null) {
		const date: Date = parseISO(dateString);
		return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
	} else {
		return <p>Error fetching original date published.</p>;
	}
};

export default Date;
