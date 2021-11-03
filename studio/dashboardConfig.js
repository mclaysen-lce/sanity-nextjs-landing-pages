export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61831bf26ccfef4238c31b61',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4krs2dzd',
                  apiId: 'd2e8f128-9345-4e89-a5c9-7a7e903a3b69'
                },
                {
                  buildHookId: '61831bf309557d009a41b11e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vxp8njnn',
                  apiId: '68a923d2-1d0b-4756-bb05-f0e7947b034a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mclaysen-lce/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vxp8njnn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
