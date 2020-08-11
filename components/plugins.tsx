type PluginProps = {
	plugins: {
		edges: any;
	} | any;
};



export default function Plugins({ plugins }: PluginProps) {
    // const plugs: any = plugins.edges?.node.author;
    // plugs.value === "StudioPress" ? console.log("plugin success", plugs) : null; 
    console.log(plugins);
	return (
		<div className='ml-1'>
			under
			{plugins > 0 ? (
				plugins.edges.map((plugin: any, index: any) => (
					<span key={index} className='ml-1 text-success'>
						{plugin.node.name}
					</span>
				))
			) : (
				<span className='ml-1'>{plugins[0].toString()}</span>
			)}
		</div>
	);
}
