import Link from 'next/link';

export default function Header() {
	const menu = [
		{ name: 'Home', href: '/' },
		{ name: 'Work', href: '/work' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'About', href: '/about' },
	];

	return (
		<header className='navbar bg-base-200 sticky top-0 z-50'>
			<div className='flex-1'>
				<Link
					href={'/'}
					className='text-xl btn btn-ghost'
				>
					<span className='text-2xl font-bold'>サイトの名前</span>
				</Link>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal px-1 space-x-4'>
					{menu.map((item, index) => (
						<li key={index}>
							<Link href={item.href}>{item.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
}
