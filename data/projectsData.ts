interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Online Shop',
    description: `Coming soon: a basic online storefront that has inventory management and payment processing.`,
    imgSrc: '',
  }, {
    title: 'The Odin Project',
    description: `Various projects completed during The Odin Project Fundamentals and Full Stack Javascript pathways.`,
    imgSrc: '/static/images/odin-project.png',
    href: '/blog/odin-project',
  },
  // {
  //   title: 'The Time Machine',
  //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
  //   to the desired date and press "Go". No more worrying about lost keys or
  //   forgotten headphones with this simple yet affordable solution.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   href: '/blog/the-time-machine',
  // },
]

export default projectsData
