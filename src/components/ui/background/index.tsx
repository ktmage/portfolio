'use client';

import { useRef, useEffect } from 'react';

export default function Background() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
		colors.forEach((color, index) => {
			gradient.addColorStop(index / (colors.length - 1), color);
		});

		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}, [colors]);

	return (
		<canvas
			ref={canvasRef}
			className='fixed w-screen h-screen'
		/>
	);
}
