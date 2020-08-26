import {
	library,
	IconDefinition,
	IconLookup
} from '@fortawesome/fontawesome-svg-core';

export interface CustomIconConstruct extends IconDefinition, IconLookup {}

export const faCustomWebsite: CustomIconConstruct = {
	prefix: 'fac',
	iconName: 'website-icon',
	icon: [
		256,
		256,
		[],
		'none',
		'M251.7 114.442L230.074 94.7366V29.3951C230.074 25.2376 226.703 21.8666 222.545 21.8666H170.488C166.33 21.8666 162.959 25.2371 162.959 29.3951V33.5821L136.841 9.78364C131.8 5.18914 124.197 5.18964 119.158 9.78314L4.29892 114.443C0.260924 118.123 -1.07358 123.793 0.899424 128.887C2.87292 133.982 7.67792 137.273 13.1414 137.273H31.4859V242.134C31.4859 246.291 34.8564 249.662 39.0144 249.662H101.971C106.128 249.662 109.499 246.292 109.499 242.134V178.466H146.5V242.134C146.5 246.292 149.87 249.663 154.028 249.663H216.982C221.14 249.663 224.511 246.292 224.51 242.134V137.274H242.859C248.322 137.274 253.127 133.982 255.101 128.888C257.073 123.793 255.739 118.123 251.7 114.442ZM216.982 122.217C212.825 122.217 209.454 125.587 209.454 129.745V234.606H161.557V170.937C161.557 166.78 158.186 163.409 154.029 163.409H101.971C97.8134 163.409 94.4424 166.779 94.4424 170.937V234.606H46.5424V129.745C46.5424 125.588 43.1719 122.217 39.0139 122.217H18.1224L128 22.0966L165.418 56.1921C167.622 58.2001 170.804 58.7176 173.53 57.5141C176.257 56.3091 178.017 53.6081 178.017 50.6271V36.9236H215.018V98.0616C215.018 100.18 215.91 102.2 217.476 103.627L237.877 122.217H216.982Z'
	]
};

library.add(faCustomWebsite);

/*
Home icon for website URLs

<svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M251.7 114.442L230.074 94.7366V29.3951C230.074 25.2376 226.703 21.8666 222.545 21.8666H170.488C166.33 21.8666 162.959 25.2371 162.959 29.3951V33.5821L136.841 9.78364C131.8 5.18914 124.197 5.18964 119.158 9.78314L4.29892 114.443C0.260924 118.123 -1.07358 123.793 0.899424 128.887C2.87292 133.982 7.67792 137.273 13.1414 137.273H31.4859V242.134C31.4859 246.291 34.8564 249.662 39.0144 249.662H101.971C106.128 249.662 109.499 246.292 109.499 242.134V178.466H146.5V242.134C146.5 246.292 149.87 249.663 154.028 249.663H216.982C221.14 249.663 224.511 246.292 224.51 242.134V137.274H242.859C248.322 137.274 253.127 133.982 255.101 128.888C257.073 123.793 255.739 118.123 251.7 114.442ZM216.982 122.217C212.825 122.217 209.454 125.587 209.454 129.745V234.606H161.557V170.937C161.557 166.78 158.186 163.409 154.029 163.409H101.971C97.8134 163.409 94.4424 166.779 94.4424 170.937V234.606H46.5424V129.745C46.5424 125.588 43.1719 122.217 39.0139 122.217H18.1224L128 22.0966L165.418 56.1921C167.622 58.2001 170.804 58.7176 173.53 57.5141C176.257 56.3091 178.017 53.6081 178.017 50.6271V36.9236H215.018V98.0616C215.018 100.18 215.91 102.2 217.476 103.627L237.877 122.217H216.982Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="256" height="256" fill="white"/>
</clipPath>
</defs>
</svg>

*/
