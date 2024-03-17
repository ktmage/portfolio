import { client } from '@/lib/client';
import { BlogObject } from '@/types/index.type';
import Link from 'next/link';

export default async function Blog() {
	const data = await client.get<BlogObject>({
		endpoint: 'blogs',
		customRequestInit: { cache: 'no-store' },
	});

	return (
		<div className='flex flex-col gap-8 w-full justify-center items-center'>
			{data.contents.map((content, index) => (
				<div
					key={index}
					className='card card-side bg-base-100 shadow-xl rounded-none  w-full md:w-10/12 lg:w-8/12'
				>
					<div className='flex flex-col flex-grow'>
						<div className='card-body'>
							<p className='text-sm'>
								{new Date(content.publishedAt).toLocaleDateString()}
							</p>
							<h2 className='card-title'>{content.title}</h2>
							<div className='flex gap-1'>
								{index === 0 && <div className='badge badge-outline'>NEW</div>}
								<div className='badge badge-outline'>{content.category.name}</div>
							</div>
							<div className='card-actions justify-end'>
								<Link
									href={`/blog/${content.id}`}
									className='btn btn-sm'
								>
									詳細を表示
								</Link>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
