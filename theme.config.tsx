import { DocsThemeConfig } from "nextra-theme-docs";

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
};

export default config;
