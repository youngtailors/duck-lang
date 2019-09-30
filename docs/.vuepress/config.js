module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/duck-lang/',
    themeConfig: {
        sidebar: [
            '/',
            {
                title: 'Học dart',
                children: [
                    '/guides/samples-and-tutorials/language-samples',
                    {
                        title: 'Codelabs',
                        children: [
                            '/guides/samples-and-tutorials/Codelabs/list-of-dart-codelabs',
                            '/guides/samples-and-tutorials/Codelabs/language-cheatsheet',
                            '/guides/samples-and-tutorials/Codelabs/asynchronous-programing',
                        ]
                    },
                    '/guides/samples-and-tutorials/tutorials',
                ]
            }
        ]
    }
}