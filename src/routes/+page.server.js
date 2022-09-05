// +page.js

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
    return {
      heading: {
        h1:'Nelson Correia',
      },
      sections: [
        { slug: 'profile', title: 'Profile' },
        { slug: 'notifications', title: 'Notifications' }
      ]
    };
  }