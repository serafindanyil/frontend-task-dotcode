const Header = () => {
	return (
		<header className="flex items-center justify-between p-4 bg-blur-xl bg-background-tertiary border border-border text-white rounded">
			<div className="flex items-center">
				<span className="text-xl font-bold">🚀 Crypto SPA</span>
			</div>
			<nav>
				<ul className="flex space-x-4">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
