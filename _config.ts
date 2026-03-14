import lume from "lume/mod.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import postcss from "lume/plugins/postcss.ts";
import postcssImport from "npm:postcss-import";
import favicon from "lume/plugins/favicon.ts";
import transformImages from "lume/plugins/transform_images.ts";

const site = lume({
    src: "./src",
    location: new URL("https://reticulas.com"),
    server: {
        open: true,
        reload: true,
        port: 3000,
    },
});
site
    .copy("img")
    .copy("fonts")
    .copy("rrss.jpg")
    .add("css/main.css")
    .add("js/main.js")
    .use(transformImages({
        cache: true,
        extensions: [".jpg", ".jpeg", ".png", ".gif", ".svg", ".webp"],
    }))
    .use(postcss({
        plugins: [
            postcssImport(),
        ],
        keepDefaultPlugins: true,
    }))
    .use(favicon({
        input: "/favicon.svg",
    }))
    .use(multilanguage({
        languages: ["gl", "es"],
        defaultLanguage: "es",
    }));


export default site;
