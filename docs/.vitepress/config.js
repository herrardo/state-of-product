export default {
    title: 'State of the Product',
    description: 'This is a list of Product Management resources',
    lang: 'en-US',
    themeConfig: {
        nav: [
            { text: 'Events', link: '/events/2023/' },
            { text: 'Certifications', link: '/certifications/' }
        ],
        sidebar: [
            {
                text: 'Events',
                items: [
                    { text: '2023 Events', link: '/events/2023/' }
                ]
            },
            {
                text: 'Certifications',
                items: [
                    { text: 'Index', link: '/certifications/' }
                ]
            }
        ],
        editLink: {
            pattern: 'https://github.com/herrardo/state-of-product/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/herrardo/state-of-product' },
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Powered by VitePress'
        }
    },
    lastUpdated: true,
    base: '/state-of-product/'
}
