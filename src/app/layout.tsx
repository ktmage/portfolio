import './globals.css';
import { Footer, Header } from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ja'>
			<body className='flex flex-col min-h-screen bg-base-100'>
				<Header />
				<main className='flex-grow p-10 flex justify-center z-10'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
