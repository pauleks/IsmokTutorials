const { remarkCodeHike } = require("@code-hike/mdx")

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          theme: require("shiki/themes/github-light.json"),
          lineNumbers: true,
          staticMediaQuery: "not screen, (max-width: 768px)",
        }
      ]
    ],
    rehypePlugins: [],
  },
})

module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.kawaii.sh']
  },
  async redirects() {
    return [
      {
        source: '/pamokos',
        destination: '/',
        permanent: true,
      },
    ]
  },
})
