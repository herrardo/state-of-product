export default {
    title: 'State of the Product',
    description: 'This is a summary of Product Management events, conferences and certifications',
    head: [
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "assets/favicons/favicon-32x32.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "assets/favicons/favicon-16x16.png"}],
        ['script', { defer:true, 'data-domain': "herrardo.github.io/state-of-product",src: "https://plausible.io/js/script.js"}],
    ],
    lang: 'en-US',
    themeConfig: {
        logo: 'assets/logo-color.png',
        nav: [
            { text: 'Events', link: '/events/2023/' },
            { text: 'Certifications', link: '/certifications/scrum/' }
        ],
        sidebar: [
            {
                text: 'Events',
                items: [
                    { text: '2023 Product Events', link: '/events/2023/' }
                ]
            },
            {
                text: 'Certifications',
                items: [
                    { text: 'scrum.org', link: '/certifications/scrum/' }
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
            message: `Released under the MIT License.<br /><a href="https://www.flaticon.com/free-icons/product">Product icons created by Freepik - Flaticon</a>`,
            copyright: 'Powered by VitePress'
        }
    },
    lastUpdated: true,
    base: '/state-of-product/'
}
