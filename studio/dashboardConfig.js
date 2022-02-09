export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '620450422cc7df4a55bdf01e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-11f9t19h',
                  apiId: '1d34822e-d04c-4fe2-b60b-3078f8d53055'
                },
                {
                  buildHookId: '6204504249625f4b22cc374c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-i545mi5c',
                  apiId: '48a5dcf0-f533-4942-85f3-f6d8dd7398cd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Trabontea/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-i545mi5c.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
