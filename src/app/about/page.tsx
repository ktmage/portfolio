import Image from 'next/image';

export default function About() {
	return (
		<div className='flex flex-col items-center justify-center py-2'>
			<Image
				src='/icon.png' // アイコンのパスを指定
				alt='名前を記述'
				width={256}
				height={256}
				className='rounded-full'
			/>

			<h1 className='mt-6 text-4xl font-bold'>名前を記述</h1>

			<p className='mt-2 text-gray-600'>自己紹介文を記述</p>

			<div className='flex mt-6 space-x-4'>
				<a
					href='https://github.com'
					className='btn btn-primary px-3 py-1 text-white rounded-full'
					rel='noopener noreferrer'
					target='_blank'
				>
					GitHub
				</a>

				<a
					href='https://twitter.com'
					className='btn btn-primary px-3 py-1  text-white rounded-full'
					rel='noopener noreferrer'
					target='_blank'
				>
					Twitter
				</a>
			</div>
		</div>
	);
}
