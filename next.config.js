const nextConfig = {
	poweredByHeader: false,
	reactStrictMode: true,

	eslint: {
		// by default eslint runs only on pages/, components/, lib/, and src/ directories, but we hvae other directories like utils , so these custom folders are included, src lib are not there in this proj
		dirs: ["components", "hooks", "pages", "lib", "src", "utils"],
	},

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};

module.exports = () => {
	return nextConfig;
};
