export default {
    title: 'State Of Product',
    description: 'This is a list of Product Management resources',
    lang: 'en-US',
    themeConfig: {
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
        lastUpdated: true
    },
    base: '/state-of-product/'
}
