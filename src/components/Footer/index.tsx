export const Footer = (): JSX.Element => {
	return (
		<footer className="mt-6 mb-4">
			<div className="flex align-center justify-center">
				<a className="flex justify-center items-center" target="_blank" href="/twitter">
					🐦&nbsp;
					<span className="hidden md:block">Twitter</span>
				</a>
				<span className="ml-2 mr-2">•</span>
				<a className="flex justify-center items-center" target="_blank" href="/github">
					💻&nbsp;
					<span className="hidden md:block">GitHub</span>
				</a>
				<span className="ml-2 mr-2">•</span>
				<a
					className="flex justify-center items-center"
					target="_blank"
					href="mailto:hi@santiagomartin.dev"
					rel="noreferrer"
				>
					✉️&nbsp;
					<span className="hidden md:block">Email</span>
				</a>
				<span className="ml-2 mr-2">•</span>
				<a
					className="flex justify-center items-center"
					target="_blank"
					href="/twitch"
					rel="noreferrer"
				>
					🟣&nbsp;
					<span className="hidden md:block">Twitch</span>
				</a>
				<span className="ml-2 mr-2">•</span>
				<a
					className="flex justify-center items-center"
					target="_blank"
					href="https://www.linkedin.com/in/santiago-martin-agra/"
					rel="noreferrer"
				>
					🎩&nbsp;
					<span className="hidden md:block">LinkedIn</span>
				</a>
			</div>
		</footer>
	);
};
