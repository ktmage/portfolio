import './globals.css';
import { Footer, Header, Background } from '@/components/ui';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='ja'
			data-theme='light'
		>
			<body className='flex flex-col min-h-screen bg-base-100'>
				<Header />
				<main className='flex-grow p-10 flex justify-center z-10'>{children}</main>
				<Background />
				<Footer />
			</body>
		</html>
	);
}
