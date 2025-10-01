export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      light: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/',
    email: 'ui-pro@nuxt.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'green',
      neutral: 'neutral'
    }
  },
  uiPro: {
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-upwork',
        'to': 'https://www.upwork.com/freelancers/~0130a269b9b034c325?mp_source=share',
        'target': '_blank',
        'aria-label': 'Alberto Alejandro on Upwork'
      },
      {
        'icon': 'i-simple-icons-linkedin',
        'to': 'https://www.linkedin.com/in/albertoalejandro10/',
        'target': '_blank',
        'aria-label': 'Alberto Alejandro on LinkedIn'
      },
      {
        'icon': 'i-simple-icons-discord',
        'to': 'https://discord.com/users/497789899597021189',
        'target': '_blank',
        'aria-label': 'Alberto Alejandro on Discord'
      }, {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/albertoalejandro10',
        'target': '_blank',
        'aria-label': 'Alberto Alejandro on GitHub'
      }]
  }
})
