export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://media.licdn.com/dms/image/v2/D4E03AQGu0lpIfVRdvg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723298326277?e=1769040000&v=beta&t=2-uRuFxmIRuB08frR5vn8NYj1tXO6e8U_JiJDM6DnK4',
      light: 'https://media.licdn.com/dms/image/v2/D4E03AQGu0lpIfVRdvg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723298326277?e=1769040000&v=beta&t=2-uRuFxmIRuB08frR5vn8NYj1tXO6e8U_JiJDM6DnK4',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/alberto-alejandro/30-minute-meeting-consultation-work-session',
    quickChatLink: 'https://api.whatsapp.com/send/?phone=%2B584249448022',
    email: 'alberto196g@gmail.com',
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
    },
    pageSection: {
      slots: {
        container: 'py-4 sm:py-8 lg:py-16'
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
      },
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/albertoalejandro10',
        'target': '_blank',
        'aria-label': 'Alberto Alejandro on GitHub'
      }
    ]
  }
})
