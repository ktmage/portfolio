import { MdiGithub } from '@/components/icon';
import Image from 'next/image';

export default function About() {
	interface Profile {
		icon: string;
		name: string;
		description: string;
		github: string;
	}

	const profile: Profile = {
		icon: '/icon.jpg',
		name: 'ktmage',
		description: 'FFは13、ドラクエは8が好き。',
		github: 'https://github.com/ktmage',
	};

	return (
		<div className='m-auto card bg-base-100 rounded-none shadow-xl px-12 py-8 '>
			<figure className='px-10 pt-10'>
				<Image
					src={profile.icon}
					alt='Icon'
					width={200}
					height={200}
					className=' rounded-full'
				/>
			</figure>
			<div className='card-body items-center text-center'>
				<h2 className='card-title'>{profile.name}</h2>
				<p>{profile.description}</p>
				<div className='card-actions'>
					<a
						href={profile.github}
						className='btn btn-circle btn-sm'
					>
						<MdiGithub className='w-6 h-6' />
					</a>
				</div>
			</div>
		</div>
	);
}
