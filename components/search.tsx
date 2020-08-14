import { useCallback, useRef, useState } from 'react';
import Link from 'next/link';

const Search = async () => {
	const searchRef = useRef(null);
	const [query, setQuery] = useState(' ');
	const [active, setActive] = useState(false);
	const [results, setResults] = useState([]);
};

export default Search;
