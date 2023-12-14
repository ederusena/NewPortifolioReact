const mockData = {
  experiences: [
    {
      id: 1,
      position: 'Software Engineer | Vue.js | Node.js | Neo4j',
      company: 'Mirante Tecnologia',
      companyLink: 'https://www.mirante.net.br/',
      time: '2023-Present',
      address: 'Brasilia, DF',
      work: "I worked as a Full Stack Developer at Mirante Tecnologia, focusing on enhancing the online health insurance plan acquisition experiences through the Qualicorp platform. My contribution played a crucial role in debugging and implementing new features.",
    },
    {
      id: 2,
      position: 'Software Engineer | Vue.Js',
      company: 'TradeUp Group',
      companyLink: 'https://www.tradeupgroup.com/',
      time: '2023 - 2023',
      address: 'Barueri, SP',
      work: 'As a Mid-level Vue.js Developer at TradeUp Group, I played a crucial role in the ongoing evolution and optimization of user experiences. Leveraging a solid understanding of the Vue.js framework, I focused on crafting innovative new features and efficiently addressing bugs. My contributions aimed at enhancing technical excellence and functionality within the applications.',
    },
    {
      id: 3,
      position: 'Software Developer | Vue.Js',
      company: 'Amais Educação',
      companyLink: 'https://www.amaiseducacao.com.br/',
      time: '2022-2023',
      address: 'Blumenau, SC',
      work: "At Amais Educação, I excelled in the role of Frontend Vue.js Developer, leading the development of an innovative educational platform tailored for high schools. My expertise extends beyond Vue.js development to include the effective implementation of TypeScript and dependency injection, ensuring a modular and scalable architecture. This experience allowed for the creation of a cutting-edge educational solution for schools.",
    },
    {
      id: 4,
      position: 'Software Developer | Vue.Js | React.Js',
      company: 'PRORADIS',
      companyLink: 'https://proradis.com.br/',
      time: '2021 - 2022',
      address: 'São Paulo, SP',
      work: "At Proradis, I stand out as a Frontend Developer specializing in both ReactJS and Vue.js. I have played a key role in the development of an innovative platform focused on laboratory imaging, leveraging the DICOM protocol. In addition to my frontend responsibilities, I maintain seamless collaboration with backends in .NET and PHP, ensuring a comprehensive and efficient experience for both medical professionals and users.",
    },
    {
      id: 5,
      position: 'Software Developer | Vue.Js',
      company: 'Mazzatech Systems & Outsourcing',
      companyLink: 'https://www.mazza.tech/',
      time: '2021 - 2021',
      address: 'São Paulo, SP',
      work: 'At Mazzatech Systems & Outsourcing, I excel in my role as a Frontend Vue Developer, specializing in Vuetify. I take the lead in developing the health insurance platform, overseeing the implementation of new features, swiftly addressing bugs, and ensuring an exceptional user experience throughout my tenure.',
    },
  ],
  skills: [
    {
      name: 'CSS',
      x: '0',
      y: '-14vw',
    },
    {
      name: 'Vue',
      x: '-7vw',
      y: '0',
    },
    {
      name: 'React',
      x: '7vw',
      y: '0',
    },
    {
      name: 'Html',
      x: '0',
      y: '14vw',
    },
    {
      name: 'Javascript',
      x: '-24vw',
      y: '-1vw',
    },
    {
      name: 'Typescript',
      x: '24vw',
      y: '0vw',
    },
    {
      name: 'Dotnet',
      x: '15vw',
      y: '9vw',
    },
    {
      name: 'SpringBoot',
      x: '-15vw',
      y: '9vw',
    },
    {
      name: 'Java',
      x: '12vw',
      y: '-9vw',
    },
    {
      name: 'C#',
      x: '-14vw',
      y: '-9vw',
    },
  ],
  education: [
    {
      id: '1',
      type: 'Bachelor Of Science In Computer Science',
      time: '2022-2023',
      place: 'FIAP - Faculdade de Informática e Administração Paulista',
      info: 'FULL STACK, APPS & ARTIFICIAL INTELLIGENCE',
    }
  ],
}

const mock = (req, res) => {
  const { type } = req.query

  if (!type || !mockData[type]) {
    return res.status(400).json({ error: 'Invalid data type specified' })
  }

  const selectedData = mockData[type]
  res.status(200).json(selectedData)
}

export default mock
