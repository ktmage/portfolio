import './globals.css';
import { Footer, Header, StaticBackground } from '@/components/ui';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='ja'
			data-theme='light'
		>
			<body className='flex flex-col min-h-screen bg-base-100'>
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
