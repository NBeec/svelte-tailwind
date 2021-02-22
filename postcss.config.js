const { plugin } = require("postcss");
const tailwindcss = require("tailwindcss");

const purgecss = require("postcss-purgecss")({
    content: ["./src/**/*.svelte", "./public/**/*.html"],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g),
});

module.exports = {
    plugins: [
        tailwindcss("./tailwind.config.js"),
        ...(process.env.NODE_ENV === 'production') ? [purgecss] : [],
    ]
}