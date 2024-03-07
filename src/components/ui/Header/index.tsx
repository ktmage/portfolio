import Link from 'next/link';

export default function Header() {
	const menu = [
		{ name: 'Home', href: '/' },
		{ name: 'Work', href: '/work' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'About', href: '/about' },
	];

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
							className='h-full w-24 btn btn-ghost rounded-none no-animation'
						>
							{item.name}
						</Link>
					</li>
				))}
			</ul>
		</header>
	);
}
