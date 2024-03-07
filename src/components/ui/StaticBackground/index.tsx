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
		<Image
			src={image.src}
			alt='background'
			fill={true}
			objectFit='cover'
			quality={100}
			priority={true}
			className={`transition duration-75 ${isActiveBlur ? 'blur-2xl' : 'blur-none'}`}
		/>
	);
}
