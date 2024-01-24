import { client } from '@/lib/client';
import { Content } from '@/types/index.type';
import Image from 'next/image';
import parse from 'html-react-parser';

export default async function Detail({ params }: { params: { id: string } }) {
	const data = await client.get<Content>({ endpoint: 'work', contentId: params.id });

	return (
		<div className='flex flex-col items-center justify-center w-full'>
			<div className='prose max-w-3xl'>{parse(data.content)}</div>
		</div>
	);
}
