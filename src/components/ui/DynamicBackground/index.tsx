'use client';

import { useRef, useEffect } from 'react';

interface DynamicBackgroundProps {
	config: Config;
}

interface Config {
	image: {
		src: string;
		width: number;
		height: number;
	};
	chunk: {
		widthRange: { max: number; min: number };
		heightRange: { max: number; min: number };
		isRandom?: boolean;
	};
}

export default function DynamicBackground(props: DynamicBackgroundProps) {
	const { config } = props;

	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const img = new Image();
		img.src = config.image.src;

		img.onload = () => {
			let chunkWidth: number;
			let chunkHeight: number;

			if (config.chunk.isRandom) {
				chunkWidth = Math.round(
					Math.random() * (config.chunk.widthRange.max - config.chunk.widthRange.min) +
						config.chunk.widthRange.min,
				);
				chunkHeight = Math.round(
					Math.random() * (config.chunk.heightRange.max - config.chunk.heightRange.min) +
						config.chunk.heightRange.min,
				);
			} else {
				chunkWidth = config.chunk.widthRange.max;
				chunkHeight = config.chunk.heightRange.max;
			}

			const numChunksX = config.image.width / chunkWidth;
			const numChunksY = config.image.height / chunkHeight;
			const chunks = [];

			// チャンクを作成
			for (let y = 0; y < numChunksY; y++) {
				for (let x = 0; x < numChunksX; x++) {
					const canvas = document.createElement('canvas');
					canvas.width = chunkWidth;
					canvas.height = chunkHeight;
					const ctx = canvas.getContext('2d');
					if (ctx) {
						ctx.drawImage(
							img,
							x * chunkWidth,
							y * chunkHeight,
							chunkWidth,
							chunkHeight,
							0,
							0,
							chunkWidth,
							chunkHeight,
						);
						chunks.push(canvas);
					}
				}
			}

			// チャンクをランダムに並び替え
			const shuffledChunks = shuffleArray(chunks);

			// キャンバスサイズを設定
			canvas.width = config.image.width;
			canvas.height = config.image.height;

			// 並び替えたチャンクを描画
			shuffledChunks.forEach((chunk, index) => {
				const x = (index % numChunksX) * chunkWidth;
				const y = Math.floor(index / numChunksX) * chunkHeight;
				ctx.drawImage(chunk, x, y);

				// 最初の3つのチャンクの色を反転
				if (index % 3 === 0) {
					const imageData = ctx.getImageData(x, y, chunkWidth, chunkHeight);
					const data = imageData.data;
					for (let i = 0; i < data.length; i += 4) {
						data[i] = 255 - data[i]; // 赤の反転
						data[i + 1] = 255 - data[i + 1]; // 緑の反転
						data[i + 2] = 255 - data[i + 2]; // 青の反転
					}
					ctx.putImageData(imageData, x, y);
				}
			});
		};
	}, []);

	// 配列をランダムに並び替える関数
	function shuffleArray(array: any[]) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	return (
		<canvas
			ref={canvasRef}
			className='fixed w-screen h-screen'
		/>
	);
}
