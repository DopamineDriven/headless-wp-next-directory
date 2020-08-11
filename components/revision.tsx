import { parseISO, format } from "date-fns";

type RevisionProps = {
	revisions: {
		edges: any;
	} | any;
	dateString: string;
};



export default function Revision({ revisions }: RevisionProps) {
	console.log(revisions);
	const revised = (
		<div className='ml-1'>
			under
			{revisions > 0 ? (
				revisions.edges.map((revision: any, index: any) => (
					<span key={index} className='ml-1 text-success'>
						{revision.node.date}
					</span>
				))
			) : (
				<span className='ml-1'>{revisions.edges?.node.date[0].toString()}</span>
			)}
		</div>
	);

	return (
		console.log(revised)
	)
}
