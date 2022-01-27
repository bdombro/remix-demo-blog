import { Link } from "remix";

export function PageHeader() {
	return (
	<header data-pageheader>
		<nav>
			<ul>
				<li>
					<Link to="/">{'/'}</Link>
				</li>
				<li>
					<Link to="/posts">Posts</Link>
				</li>
			</ul>
		</nav>
	</header>
	);
}

PageHeader.links = [
	{ rel: "stylesheet", href: require('./index.css') }
];