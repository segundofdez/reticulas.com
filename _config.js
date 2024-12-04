import lume from "lume/mod.ts";

import postcss from "lume/plugins/postcss.ts";
import postcssCustomMedia from "npm:postcss-custom-media@9.1.2";
import favicon from "lume/plugins/favicon.ts";

const site = lume({
    src: "./src",
    location: new URL("https://www.reticulas.com/"),
    server: {
        open: true,
    },
});

site
    .use(postcss({
        plugins: [
            postcssCustomMedia(),
        ],
        keepDefaultPlugins: true,
    }))

    .use(favicon({
        input: "/favicon.svg",
    }))
;


export default site;
