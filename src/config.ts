import { isProd } from "./support/envs.ts";
import type { NavigationLink, Site } from "./types.ts";

export const SITE: Site = {
    author: "Godruoyi",
    url: "https://godruoyi.com",
    title: "连波的闲谈杂鱼",
    description:
        "Godruoyi's personal blog, I enjoy the process of building something using any technology stack",
    shortDescription: "",
};

export const NavigationLinks: NavigationLink[] = [
    { name: "Projects", url: "/projects" },
    { name: "Posts", url: "/posts" },
    { name: "Category", url: "/categories" },
];

export const FooterLinks = [
    {
        section: "Blog",
        links: [
            { name: "Posts", url: "/posts" },
            { name: "Timeline", url: "/timeline" },
            { name: "Categories", url: "/categories" },
            { name: "About Me", url: "/posts/about-godruoyi" },
        ],
    },
    {
        section: "Other",
        links: [
            { name: "RSS", url: "/rss.xml" },
            { name: "Site Map", url: "/sitemap-index.xml" },
            { name: "Twitter", url: "https://x.com/godruoyi" },
        ],
    },
];

export const Settings = {
    GoogleAnalytics: {
        enable: false,
        id: "G-TKQ4L3ZDSF",
    },

    UmamiAnalytics: {
        enable: true,
        dataWebsiteID: "bf63658a-9418-4f39-a6a1-5a0cedb6e429",
    },

    Assets: {
        // If you don't want to upload the build assert(image/js/css/etc...) anywhere, simply set this to false
        uploadAssetsToS3: isProd(),
        config: {
            // see https://github.com/syhily/astro-uploader to get how to configure the uploader API
            // The following configuration will upload the compiled `assets` directory to the `gblog` folder in S3 or R2.
            // You can set a separate domain for it so that you can access all resources using a CDN domain name.
            //
            // For example: https://images.godruoyi.com/gblog/assets/brand-logo.webp
            //
            // Note that you may also need to modify `build.assetsPrefix` in `astro.config.mjs` if you want to
            // automatically replace all images/js/css with a CDN link.
            paths: ["assets"],
            endpoint: process.env.S3_ENDPOINT as string,
            bucket: process.env.S3_BUCKET as string,
            accessKey: process.env.S3_ACCESS_KEY as string,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
            root: "gblog",
        },
    },
};

export const SEO = {
    title: SITE.title,
    description: SITE.description,
    structuredData: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        inLanguage: "en-US",
        "@id": SITE.url,
        url: SITE.url,
        name: SITE.title,
        description: SITE.description,
        isPartOf: {
            "@type": "WebSite",
            url: SITE.url,
            name: SITE.title,
            description: SITE.description,
        },
    },
};
