// @flow
import { createPopper } from '@popperjs/core';
import type { StrictModifiers } from '@popperjs/core';
import { getAllPostsForHomeSorted } from '../lib/api';

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
	preview: boolean;
}

const { TITLE, MODIFIED, DATE } = Field;
const { ASC, DESC } = Order;

const CustomSelect = () => {};

export default CustomSelect;
