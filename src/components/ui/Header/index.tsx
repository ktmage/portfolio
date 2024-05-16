'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
	const menu = [
		// { name: 'Home', href: '/' },
		{ name: 'Work', href: '/work' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'About', href: '/about' },
	];

	const pathname = usePathname();

	// パスからベースのパスを取得する。
	const getBasePath = (path: string): string => {
		const paths = path.split('/');
		return '/' + paths[1];
	};

	// Y軸のスクロールがかどうかを判定する。
	const [isTop, setIsTop] = useState(true);
	useEffect(() => {
		const handleScroll = () => {
			setIsTop(window.scrollY === 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header
			className={`navbar min-h-0 h-16 p-0 bg-base-200 sticky top-0 z-50 transition ${isTop ? 'shadow-none opacity-100' : 'shadow-lg bg-opacity-40'}`}
		>
			<div className='flex-1 h-full'>
				<Link
					href={'/'}
					className='h-full text-xl btn btn-ghost rounded-none no-animation'
				>
					Portfolio
				</Link>
			</div>
			<ul className='h-full'>
				{menu.map((item, index) => (
					<li
						key={index}
						className='h-full'
					>
						<Link
							href={item.href}
							className={`h-full w-24 btn btn-ghost rounded-none no-animation ${getBasePath(pathname) === item.href ? 'btn-disabled' : ''}
                                        sm: w-16 md:w-24 lg:w-32
                            `}
						>
							{item.name}
						</Link>
					</li>
				))}
			</ul>
		</header>
	);
}
