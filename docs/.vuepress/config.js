module.exports = {
  title: 'SendGrid CLI',
  description: 'A fully-fledged CLI for the SendGrid API',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Palanquin&display=swap' }],
    ['link', { rel: 'icon', href: 'https://static1.squarespace.com/static/597a08bc197aeafed2781380/t/5bca1c5be5e5f05d2c116971/1539972875789/sendgrid.png' }],
  ],
  themeConfig: {
    logo: 'https://static1.squarespace.com/static/597a08bc197aeafed2781380/t/5bca1c5be5e5f05d2c116971/1539972875789/sendgrid.pnghttps://static1.squarespace.com/static/597a08bc197aeafed2781380/t/5bca1c5be5e5f05d2c116971/1539972875789/sendgrid.png',
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/commands/'
        ]
      }
    ],
    sidebarDepth: 2,
    repo: 'GetTruck/sendgrid-cli',
    docsDir: 'docs',
    editLinks: true,
  }
}