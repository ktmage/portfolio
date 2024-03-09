'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
	const menu = [
		{ name: 'Home', href: '/' },
		{ name: 'Work', href: '/work' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'About', href: '/about' },
	];

	const pathname = usePathname();

	return (
		<header className='navbar min-h-0 h-16 p-0 bg-base-200 sticky top-0 z-50 shadow-lg'>
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
							className={`h-full w-24 btn btn-ghost rounded-none no-animation ${pathname === item.href ? 'btn-disabled' : ''}`}
						>
							{item.name}
						</Link>
					</li>
				))}
			</ul>
		</header>
	);
}
