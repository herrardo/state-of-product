export default {
    title: 'State Of Product',
    description: 'This is a list of Product Management resources',
    lang: 'en-US',
    outDir: '../public',
    themeConfig: {
        sidebar: [
            {
                text: 'Events',
                items: [
                    { text: '2023 Events', link: '/events/2023/' },
                    { text: '2022 Events', link: '/events/2022/' }
                ]
            },
            {
                text: 'Certifications',
                items: [
                    { text: 'Comparative', link: '/certifications/' }
                ]
            }
        ]
    }
}
