export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d1492ea1aa5bb30cc2709db',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4vpoy1nh',
                  apiId: 'd0f67ee2-5af5-473d-96c5-7efb91331eb1'
                },
                {
                  buildHookId: '5d1492ea4ac788751186c24b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gifz6m3e',
                  apiId: 'b80acbd0-2f8a-4c4e-afbe-22f6c9aa31ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mhmdiqbal/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gifz6m3e.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
