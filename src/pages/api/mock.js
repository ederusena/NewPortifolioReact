const mockData = {
  experiences: [
    {
      id: 1,
      position: 'Software Engineer',
      company: 'Google',
      companyLink: 'https://www.google.com/',
      time: '2022-Present',
      address: 'Mountain View, CA',
      work: "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization.",
    },
    {
      id: 2,
      position: 'Intern',
      company: 'Facebook',
      companyLink: 'https://www.facebook.com/',
      time: 'Summer 2021',
      address: 'Menlo Park, CA',
      work: 'Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature.',
    },
    {
      id: 3,
      position: 'Software Developer',
      company: 'Amazon',
      companyLink: 'https://www.amazon.com/',
      time: '2020-2021',
      address: 'Seattle, WA',
      work: "Worked on a team responsible for developing Amazon's mobile app, including implementing new features such as product recommendations and user reviews, and optimizing the app's performance and reliability.",
    },
    {
      id: 4,
      position: 'Software Developer Intern',
      company: 'Microsoft',
      companyLink: 'https://www.microsoft.com/',
      time: 'Summer 2019',
      address: 'Redmond, WA',
      work: "Worked on a team responsible for developing new features for Microsoft's Windows operating system, including implementing a new user interface for a system settings panel and optimizing the performance of a core system component.",
    },
    {
      id: 5,
      position: 'Teaching Assistant',
      company: 'MIT',
      companyLink: 'https://web.mit.edu/',
      time: 'Fall 2018',
      address: 'Massachusetts Ave, Cambridge, MA',
      work: 'Assisted in teaching a course on computer programming, held office hours to help students with assignments, and graded exams and assignments.',
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
      x: '-4vw',
      y: '0',
    },
    {
      name: 'React',
      x: '4vw',
      y: '0',
    },
    {
      name: 'Html',
      x: '0',
      y: '10vw',
    },
    {
      name: 'Javascript',
      x: '-16vw',
      y: '-1vw',
    },
    {
      name: 'Typescript',
      x: '16vw',
      y: '0vw',
    },
    {
      name: 'Dotnet',
      x: '13vw',
      y: '7vw',
    },
    {
      name: 'SpringBoot',
      x: '-13vw',
      y: '7vw',
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
      time: '2016-2020',
      place: 'Massachusetts Institute Of Technology (MIT)',
      info: 'Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence.',
    },
    {
      id: '2',
      type: 'Master Of Computer Science',
      time: '2020-2022',
      place: 'Stanford University',
      info: "Completed a master's project on deep learning, developing a new neural network architecture for natural language understanding.",
    },
    {
      id: '3',
      type: 'Online Coursework',
      time: '2016-2020',
      place: 'Coursera And EdX',
      info: 'Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering.',
    },
  ]
};

export default (req, res) => {
  const { type } = req.query;

  if (!type || !mockData[type]) {
    return res.status(400).json({ error: 'Invalid data type specified' });
  }

  const selectedData = mockData[type];
  res.status(200).json(selectedData);
};
