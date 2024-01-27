import { client } from '@/lib/client';
import { WorkContent } from '@/types/index.type';
import Image from 'next/image';
import parse from 'html-react-parser';

export default async function Detail({ params }: { params: { id: string } }) {
	const data = await client.get<WorkContent>({ endpoint: 'work', contentId: params.id });
	const date = new Date(data.updatedAt).toLocaleString();

	return (
		<div className='flex flex-col items-center justify-center w-full'>
			<h1 className='text-4xl font-bold mb-2'>{data.title}</h1> {/* タイトルを表示 */}
			<p className='text-gray-600 mb-4'>Updated at: {date}</p> {/* 更新日時を表示 */}
			<div className='prose max-w-3xl'>{parse(data.content)}</div>
		</div>
	);
}
