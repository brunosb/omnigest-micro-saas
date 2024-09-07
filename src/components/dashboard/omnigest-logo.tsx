type OmnigestLogoProps = {
	size?: number
}
export default function OmnigestLogo({ size = 50 }: OmnigestLogoProps) {
	return (
		<div className="w-full flex items-center gap-2 rounded-md">
			<svg
				width={size}
				height={size}
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
						<stop
							offset="0%"
							style={{ stopColor: '#00ff00', stopOpacity: 1 }}
						/>
						<stop
							offset="100%"
							style={{ stopColor: '#008000', stopOpacity: 1 }}
						/>
					</linearGradient>
				</defs>

				{/* Círculo externo */}
				<circle
					cx="50"
					cy="50"
					r="48"
					fill="none"
					stroke="url(#grad)"
					strokeWidth="4"
				/>

				{/* Forma interna 'O' */}
				<path
					d="M50 20
           A30 30 0 0 1 80 50
           A30 30 0 0 1 50 80
           A30 30 0 0 1 20 50
           A30 30 0 0 1 50 20
           Z
           M50 35
           A15 15 0 0 0 35 50
           A15 15 0 0 0 50 65
           A15 15 0 0 0 65 50
           A15 15 0 0 0 50 35
           Z"
					fill="url(#grad)"
				/>

				{/* Curva 'G' */}
				<path
					d="M65 50
           A15 15 0 0 1 50 65
           L50 80
           A30 30 0 0 0 80 50
           Z"
					fill="#000000"
				/>
			</svg>
			<span className="text-md font-bold text-primary">Omnigest</span>
		</div>
	)
}
