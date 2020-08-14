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
	color: string;
}

const { TITLE, MODIFIED, DATE } = Field;
const { ASC, DESC } = Order;

const CustomSelect = ({ color, field, order }: CustomDropDown) => {
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
	const closeDropdownPopover = () => {
		setDropdownPopoverShow(false);
	};

	let bgColor;
	color === 'white' ? (bgColor = 'bg-customGray') : (bgColor = `bg-${color}`);

	return (
		<>
			<div className='flex flex-wrap'>
				<div className='w-full sm:w-6/12 md:w-4/12 px-4'>
					<div className='relative inline-flex align-middle w-full'>
						<button
							className={`text-white font-bold font-polished uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ${bgColor}`}
							style={{ transition: 'all .15s ease' }}
							type='button'
							ref={btnDropdownRef}
							onClick={() => {
								dropdownPopoverShow
									? closeDropdownPopover()
									: openDropdownPopover();
							}}
						>
							{color === 'white' ? 'FIELDS' : `FIELD`}
						</button>
						<div
							ref={popoverDropdownRef}
							className={
								(dropdownPopoverShow ? 'block' : 'hidden ') +
								(color === 'white' ? 'bg-white ' : bgColor + ' ') +
								'text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 w-48 min-w-full'
							}
						>
							<a
								className={
									'text-sm py-2 px-4 font-polished block w-full whitespace-no-wrap bg-transparent' +
									(color === 'white' ? 'black' : 'text-white')
								}
							></a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CustomSelect;

// https://medium.com/javascript-in-plain-english/usepopper-with-styled-components-for-react-react-popper-2-568284d029bf
