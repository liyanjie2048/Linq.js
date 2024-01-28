const typescript = require('@rollup/plugin-typescript');

exports.default = {
    input: "./src/index.ts",
    output: {
        file: "./dist/liyanjie.linq.js",
        name: "liyanjie.linq",
        format: "umd",
    },
    plugins: [typescript()]
};
