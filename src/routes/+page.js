// +page.js
/** @type {import('./$types').PageLoad} */

export function load() {
    return {sections: [
        { slug: 'profile', title: 'Profile' },
        { slug: 'notifications', title: 'Notifications' }
      ]
    };
  }