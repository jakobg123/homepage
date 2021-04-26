module.exports = {
    env: {
        TEXT: process.env.SECRET_TEXT,
    },
    webpack(config, {isServer}) {
        if(isServer){
            require("./scripts/generate-sitemap")
        }
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};
