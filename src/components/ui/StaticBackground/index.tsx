'use client';

import Image from 'next/image';

interface StaticBackgroundProps {
	image: {
		src: string;
		width: number;
		height: number;
	};
	isActiveBlur?: boolean;
}

export default function StaticBackground(props: StaticBackgroundProps) {
	const { image, isActiveBlur } = props;

	return (
		<div className='fixed top-0 left-0 w-full h-full'>
			<Image
				src={image.src}
				alt='background'
				fill
				quality={100}
				priority={true}
				className={`object-cover transition duration-75 ${isActiveBlur ? 'blur-2xl' : 'blur-none'}`}
			/>
		</div>
	);
}
