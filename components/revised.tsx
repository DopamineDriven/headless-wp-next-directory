import { parseISO, format } from 'date-fns';

type RevisedProps = {
	dateString: string;
	revisions: any;
};

export default function Revised({ dateString, revisions }: RevisedProps) {
	const revision = parseISO(dateString);
	const revising = revisions.edges?.node.date;
	const rev = revising(revision);
	return <time dateTime={dateString}>{format(rev, 'LLLL, d, yyyy')}</time>;
}
