// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
    name: {
        firstname: 'Denis',
        lastname: 'Bielkin',
      },
      position: 'Junior Fullstack JS Developer',
      salary: '600$',
      address: 'Киев, ул. Г.Хоткевича',
}
var footer = {
    social: {
        email: {
          text: 'denis@mail.com',
          href: 'mailto:denis@mail.com',
        },
      },
}
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {

    page: {
      title: 'Resume | Summary',
    },

    header,
    
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },

    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {

    page: {
      title: 'Resume | Skills',
    },

    header,
    
    main: {
      skills: [
        'HTML',
        'NPM',
        'VS Code',
        'Terminal',
      ],
      hobbies: [
        {
            name: 'Guitar',
            isMain: true,
        },
        {
            name: 'Cards',
            isMain: true,
        },
        {
            name: 'Football',
            isMain: false,
        },
      ],
    },

    footer,
  })
})


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {

    page: {
      title: 'Resume | Education',
    },

    header,
    
    main: {
      education: [
          {
              name: 'University Shevchenko',
              isEnd: true,
          },
          {
              name: 'KPI',
              isEnd: false,
          },
          {
              name: 'KNEU',
              isEnd: false,
          },
      ],
      certificates: [
          {
              name: 'University Shevchenko',
              id: 10,
          },
          {
              name: 'KPI',
              id: 9,
          },
          {
              name: 'KNEU',
              id: 8,
          },
      ],
     },
    
    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,
    
    main: {
      works: [
        {
          position: 'Junior FSD',
          company: {
            name: 'IT-Brains',
            url: null,
          },
          duration: {
            from: '23.02.2023',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              about: 'Pet project for parsing sport betting data from different.',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'Player, every colleague is a friend to me.',
                },
                {
                  name: 'Analyzing by simple mathematics models and preparing probability.',
                },
              ],
              stackAmount: 1,
              awardAmount: 2,
            },
          ],
        },
      ],
    },
    
    footer,
  })
})
  
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {

    layout: 'person',
    
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================  

// Підключаємо роутер до бек-енду
module.exports = router
