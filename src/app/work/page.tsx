import { client } from '@/lib/client';
import { WorkObject } from '@/types/index.type';
import Image from 'next/image';
import Link from 'next/link';
import { EosIconsApplicationWindow, MdiGithub } from '@/components/icon';

export default async function Work() {
	const data = await client.get<WorkObject>({
		endpoint: 'work',
		customRequestInit: { cache: 'no-store' },
	});

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'>
			{data.contents.map((content, index) => (
				<div
					key={index}
					className='card bg-base-100 shadow-xl rounded-none'
				>
					<figure>
						<Image
							width={350}
							height={350}
							src={content.thumbnail.url}
							alt='thumbnail'
						/>
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>
							{content.title}
							{index === 0 && <div className='badge badge-outline'>NEW</div>}
						</h2>
						<p>{content.description}</p>
						<div className='card-actions justify-end'>
							<Link
								href={content.repository}
								className='btn btn-circle btn-sm'
							>
								<MdiGithub className='w-6 h-6' />
							</Link>
							<Link
								href={`/work/${content.id}`}
								className='btn btn-circle btn-sm'
							>
								<EosIconsApplicationWindow className='w-5 h-5' />
							</Link>
							<Link
								href={`/blog/${content.about.id}`}
								className='btn btn-sm'
							>
								制作ブログ
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
