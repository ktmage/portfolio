import { client } from '@/lib/client';
import { BlogObject } from '@/types/index.type';
import Image from 'next/image';
import Link from 'next/link';

export default async function Blog() {
	const data = await client.get<BlogObject>({
		endpoint: 'blogs',
		customRequestInit: { cache: 'no-store' },
	});

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'>
			{data.contents.map((content, index) => (
				<div
					key={index}
					className='card max-w-96 max-h-96 bg-base-100 shadow-xl image-full'
				>
					<figure>
						<Image
							src={content.thumbnail.url}
							alt={content.title}
							width={400}
							height={400}
						/>
					</figure>
					<div className='card-body'>
						<h2 className='card-title'>{content.title}</h2>
						<p>{content.description}</p>
						<div className='card-actions justify-end'>
							<Link
								className='btn btn-primary'
								href={'/blog/' + content.id}
							>
								詳細を見る
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
