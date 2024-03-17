import { SVGProps } from 'react';

export default function EosIconsApplicationWindow(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 24 24'
			{...props}
		>
			<path
				fill='currentColor'
				d='M21 1H3a2 2 0 0 0-2 2v2h22V3a2 2 0 0 0-2-2M4 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1m3 0a1 1 0 1 1 1-1a1.003 1.003 0 0 1-1 1m16 6V6H1v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2Z'
			></path>
		</svg>
	);
}
