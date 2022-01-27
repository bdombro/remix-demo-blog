export function PageFooter() {
	return (
	<footer data-pagefooter>
		<nav>
			<ul>
				<li>
					<a target="_blank" href="https://remix.run/tutorials/blog">
						{'< '}Loosely based on the 15m Quickstart Blog Tutorial{' />'}
					</a>
				</li>
			</ul>
		</nav>
	</footer>
	);
}

PageFooter.links = () => [
	{ rel: "stylesheet", href: require('./index.css') }
];