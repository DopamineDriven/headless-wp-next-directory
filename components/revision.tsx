import { parseISO, format } from "date-fns"

type PluginProps = {
	revisions: {
		edges: any;
	} | any;
	dateString: string;
};



export default function Revision({ revisions }: PluginProps) {
    // const plugs: any = plugins.edges?.node.author;
    // plugs.value === "StudioPress" ? console.log("plugin success", plugs) : null; 
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
