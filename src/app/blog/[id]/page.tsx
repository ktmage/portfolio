import { client } from '@/lib/client';
import { BlogContent } from '@/types/index.type';
import parse from 'html-react-parser';

export default async function Detail({ params }: { params: { id: string } }) {
	const data = await client.get<BlogContent>({ endpoint: 'blogs', contentId: params.id });
	const date = new Date(data.updatedAt).toLocaleString();

	return (
		<div className='flex flex-row justify-center my-4 bg-base-200 drop-shadow-2xl'>
			<div className='flex flex-col items-center justify-center   py-24 px-36 bg-base-100'>
				<h1 className='text-4xl font-bold mb-2'>{data.title}</h1> {/* タイトルを表示 */}
				<p className='text-gray-600 mb-4'>Updated at: {date}</p> {/* 更新日時を表示 */}
				<div className='prose max-w-3xl'>{parse(data.content)}</div>
			</div>
		</div>
	);
}
