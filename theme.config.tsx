import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src="/kirimase_logo.png"
        width="24px"
        style={{ marginRight: ".5rem", borderRadius: "4px" }}
      />
      <span style={{ fontSize: "1.4rem", fontWeight: "700" }}>Kirimase</span>
    </div>
  ),
  project: {
    link: "https://github.com/nicoalbanese/kirimase",
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: "https://github.com/nicoalbanese/kirimase-docs",
  footer: {
    text: "Kirimase Docs Template",
  },
  primaryHue: 124,
  primarySaturation: 38,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Kirimase",
    };
  },
  head: () => {
    const { frontMatter, title } = useConfig();

    const ogTitle = title ? `${title} – Kirimase` : "No title";
    const ogDescription = frontMatter.description;

    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content="SWR" />
        <meta name="description" content={ogDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
      </>
    );
  },
};

export default config;
