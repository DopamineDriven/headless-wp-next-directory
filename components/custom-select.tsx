// @flow
import { usePopper } from 'react-popper';
import { StrictModifiers } from '@popperjs/core';
import { getAllPostsForHomeSorted } from '../lib/api';
import { useState, useRef } from 'react';

enum Field {
	TITLE = 'TITLE',
	MODIFIED = 'MODIFIED',
	DATE = 'DATE'
}

enum Order {
	ASC = 'ASC',
	DESC = 'DESC'
}

interface CustomDropDown {
	field: string | string[];
	order: string | string[];
	preview?: boolean;
}

const { TITLE, MODIFIED, DATE } = Field;
const { ASC, DESC } = Order;

const CustomSelect = ({ field, order, preview }: CustomDropDown) => {
	const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
	const btnDropdownRef = useRef(null);
	const popoverDropdownRef = useRef(null);
	const openDropdownPopover = () => {
		usePopper<StrictModifiers>(
			btnDropdownRef.current,
			popoverDropdownRef.current,
			{
				placement: 'bottom-start'
			}
		);
		setDropdownPopoverShow(true);
	};
};

export default CustomSelect;


// https://medium.com/javascript-in-plain-english/usepopper-with-styled-components-for-react-react-popper-2-568284d029bf