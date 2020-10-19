export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f8d94778d956d613ef713aa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-jmt-studio',
                  apiId: 'c244bf5b-35a8-470f-9099-356eadd713b7'
                },
                {
                  buildHookId: '5f8d9477ea9a9053714a86a8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-jmt',
                  apiId: 'f6a96921-e8db-4d85-b664-5aeafed9f9f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joelmturner/sanity-gatsby-blog-jmt',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-jmt.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
