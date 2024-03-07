'use client';

import './globals.css';
import { Footer, Header, StaticBackground } from '@/components/ui';
import { usePathname } from 'next/navigation';
export default function RootLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const isRoot = pathname === '/';

	return (
		<html
			lang='ja'
			data-theme='light'
		>
			<body className='flex flex-col min-h-screen bg-base-100 overflow-y-scroll'>
				<Header />
				<main className='flex-grow p-10 flex justify-center z-10'>{children}</main>
				<StaticBackground
					image={{ src: '/background.png', width: 1600, height: 800 }}
					isActiveBlur={!isRoot}
				/>
				<Footer />
			</body>
		</html>
	);
}
