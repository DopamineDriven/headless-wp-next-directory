import { useState, useEffect } from 'react';

export default function useIsClient(): boolean {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return isClient;
}
