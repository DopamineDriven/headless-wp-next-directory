import { parseISO, format } from 'date-fns';

export type DateProps = {
	dateString: string | null;
};

export default function Date({ dateString }: DateProps) {
	if (dateString != null) {
		const date = parseISO(dateString);
		return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>;
	} else {
		return null;
	}
}
