const backEndUrl = 'https://backend.lorenzo-viganego.com/';
const backEndUrlNoProxy = 'http://172.232.217.98:3000/';
const localHost = 'http://localhost:3000/';
const awardSpaceUrl = 'http://lorenzovdev.atwebpages.com/';
export let portGallery = [
  {
    header: 'Login And Subscription',
    image: 'loginPage.png',
    description: 'A login/subscription page that request login authorization to the dummy server. It also stores fake contacts into the users.json and check hashed password authenticity',
    href: `${backEndUrl}projects/loginpage/`,
    type: 'reactprojects',
    linkType: 'params'
  }, {
    header: 'Animal cards',
    image: 'animals.png',
    description: 'An animals\' cards project showing up animals information in a design powered up with bootstrap',
    href: `${backEndUrl}projects/animalcards/`,
    type: 'reactprojects',
    linkType: 'params'
  },  {
    header: 'E-commerce',
    image: 'product-page.png',
    description: 'An e-commerce page that uses multiple react features',
    href: 'https://commerce.lorenzo-viganego.com/index.html',
    type: 'reactprojects',
    linkType: 'newtab'
  }, {
    header: 'Redux Birds',
    image: 'reduxbirds.png',
    description: '""⚠️Project not Adaptive yet!"" A Project that involves the usage of the redux-library in React. Very useful to manage both states and states\' reducers',
    href: `${backEndUrl}projects/reduxbirds/`,
    type: 'reactprojects',
    linkType: 'params'
  },{
    header: 'Salad Maker',
    image: 'saladmaker.png',
    description: 'A Salad Maker project simulating the logic behind adding ingredients on the Glovo website',
    href: `https://saladmaker.lorenzo-viganego.com/`,
    type: 'reactprojects',
    linkType: 'newtab'
  }, {
    header: 'Text Analyzer',
    image: 'textanalyzer.png',
    description: 'A text analyzer that gives the characters and words count as well as offering a character map (how many times a character has been written in the text)',
    href: `${backEndUrl}projects/textanalyzer/`,
    type: 'reactprojects',
    linkType: 'params'
  }, {
    header: 'File Creator',
    image: 'filecreator.png',
    description: 'Project In Development ⚠️ A file creator program that allows the client to: define the file\'s extension, write the file content and request how many files he needs',
    href: `${backEndUrl}projects/filecreator/`,
    type: 'reactprojects',
    linkType: 'params'
  }, {
    header: 'Amazon Like Website',
    image: 'amazon-like-project.png',
    description: 'An Amazon-like website that contains Javascript hard-coding such as DOM manipulation via MVC, libraries usage (dayjs), GET requests and POST requests to the backend. You can find its code on the "My porfolio FRONT-end repository." project',
    href: 'AmazonLikeWebsite/amazon.html',
    type: 'projects',
    linkType: 'internal'
  },  {
    header: 'Youtube Like Webpage',
    image: 'youtube-like-project.png',
    description: 'A Youtube-like webpage built using only HTML and CSS. You can find its code on the "My porfolio FRONT-end repository" project.',
    href: 'YoutubeLikeWebsite/youtube.html',
    type: 'projects',
    linkType: 'internal'
  }, {
    header: 'Authorization Server',
    image: 'login.png',
    description: 'An authorization server that checks whether the client credentials are right. MVC using express.Routes() to handle the login authorization and virtual other subscribe/login scripts with just one uri segment....',
    href: `https://github.com/lorenzoVwebDev/login-authorization`,
    type: 'node',
    linkType: 'newtab'
  }, {
    header: 'Static Files Server',
    image: 'staticfilesserver.png',
    description: 'A simple but useful static files server.',
    href: `https://github.com/lorenzoVwebDev/static-files-server`,
    type: 'node',
    linkType: 'newtab'
  }, {
    header: 'Calculator',
    image: 'calculator.png',
    description: 'A useful calculator with a fancy CSS appearance. You can find its code on the "My porfolio BACK-end repository" project.',
    href: `${backEndUrl}projects/sendcalculator/`,
    type: 'projects',
    linkType: 'params'
  }, {
    header: 'Tic-Tac-Toe-Game',
    image: 'tic-tac-toe-game.png',
    description: 'A simple looking Tic-Tac-Toe game with an interesting usage of a while loop behind. A useful calculator with a fancy CSS appearance. You can find its code on the "My porfolio BACK-end repository" project.',
    href: `${backEndUrl}projects/tictactoe/`,
    type: 'projects',
    linkType: 'params'
  }, {
    header: 'Rock-Paper-Scissors',
    image: 'rock-paper-scissors-game.png',
    description: 'Rock, paper, and scissor game. One of my first projects. A useful calculator with a fancy CSS appearance. You can find its code on the "My porfolio BACK-end repository" project.',
    href: `${backEndUrl}projects/rockpaperscissor/`,
    type: 'projects', 
    linkType: 'params'
  }, {
    header: 'Game Of Life',
    image: 'gameoflife.png',
    description: 'The famous John Conway\' game.',
    href: `https://gameoflife.lorenzo-viganego.com/`,
    type: 'reactprojects',
    linkType: 'newtab'
  }, {
    header: 'To do list',
    image: 'todolist.png',
    description: 'A simple and useful to do list developed with react.',
    href: `${backEndUrl}projects/todolist/`,
    type: 'reactprojects',
    linkType: 'params'
  }, {
    header: 'My portfolio front-end repository',
    image: 'portfolio.png',
    description: 'This portfolio has been entirely developed by me. I have combined all my experience in terms of web development in order to create my own portfolio. You can check on Git for more information about it....',
    href: 'https://github.com/lorenzoVwebDev/lorenzoVigPortfolioFrontend.git',
    type: 'projects',
    linkType: 'newtab'
  }, {
    header: 'My portfolio back-end repository',
    image: 'backend.png',
    description: 'I decided to build both my portolio and its own backend in order to become proficient in terms of full stack web development. You can check on Git for more information about it....',
    href: 'https://github.com/lorenzoVwebDev/PortfolioBackend.git',
    type: 'node',
    linkType: 'newtab'

  }, {
    header: 'Microsoft 365 Templates',
    image: 'microsoft.png',
    description: 'Watch my microsoft 365 templates',
    href: 'EXC&PP.html',
    type: 'excelpowerpoint',
    linkType: 'html'
  }, {
    header: 'dogCreationEngine',
    image: 'dogApplication.png',
    description: '⚠️ "Project In Development" A dog creation engine involving several aspects of developing with php',
    href: 'https://apachebackend.lorenzo-viganego.com/dogapplication/',
    type: 'php',
    linkType: 'newtab'
  }, {
    header: 'Exception Logger',
    image: 'exceptionlogger.png',
    description: 'An exception logger backend that manages exception and log a file, you can log the error log file by dividing by 0',
    href: `https://apachebackend.lorenzo-viganego.com/exceptionlogpr/`,
    type: 'php',
    linkType: 'newtab'
  }, {
    header: 'Logs Table Reader',
    image: 'logstablereader.png',
    description: 'A web application based on an mvc framework that is able to log inputs, download log files and SSR a table by reading the log file',
    href: `https://apachebackend.lorenzo-viganego.com/logs-table-reader-mvc/public/`,
    type: 'php',
    linkType: 'newtab'
  }, {
    header: 'MVC Dog Application',
    image: 'mvcdogapplication.png',
    description: '⚠️ Project In Development: A simple dog creation engine that involves: MVC approach, Ajax request, Dependecies',
    href: `https://apachebackend.lorenzo-viganego.com/mvc-dog-application/public/`,
    type: 'php',
    linkType: 'newtab'
  }, {
    header: 'MVC Mailer Form',
    image: 'mailerform.png',
    description: '⚠️ Project In Development: Project currently works: I am waiting to have linode\'permission to send mail from my backend. A mailer form that you can select what log table you want to receive from; you can even select the log table based on the date selected',
    href: `https://apachebackend.lorenzo-viganego.com/mvc-mailer-form/public/`,
    type: 'php',
    linkType: 'newtab'
  }, {
    header: 'MVC Framework Template',
    image: 'mvcframeworktemplate.png',
    description: 'The base template (built by me) of my mvc php projects',
    href: `https://github.com/lorenzoVwebDev/mvc-framework-template`,
    type: 'php',
    linkType: 'newtab'
  }
];

export let templatesGallery = [
  {
    header: 'Simple interactive Dashboard',
    image: 'interactivedashboard.png',
    description: 'A Gantt chart is a commonly used graphical depiction of a project schedule. It s a type of bar chart showing the start and finish dates of a project s elements, such as resources, planning, and dependencies.',
    href: `${backEndUrl}templatesresume/dashboard`,
    type: 'excel'
  },  {
    header: 'Gannt Chart',
    image: 'ganttChart.png',
    description: 'An interactive dashboard is a business data management tool that allows users to interact with data by tracking, analyzing, monitoring, and displaying key business metrics.l',
    href: `${backEndUrl}templatesresume/ganttchart`,
    type: 'excel'
  }, {
    header: 'Full stack interactive dashboard',
    image: 'fullstack.png',
    description: 'Manage, track, and update all project details, and gain insight into how the project is progressing against your project plan with this project tracker template.',
    href: `${backEndUrl}templatesresume/Interactiveganttdashboard`,
    type: 'excel'
  }, {
    header: 'Company Presentation',
    image: 'company.png',
    description: 'A company presentation that has been enriched with morph transitions.',
    href: `${backEndUrl}templatesresume/company`,
    type: 'powerpoint'
  }, {
    header: 'Department Presentation',
    image: 'department.png',
    description: 'A scroll presentation that is very useful to rapidly show you company\'s departments.',
    href: `${backEndUrl}templatesresume/department`,
    type: 'powerpoint'
  }, {
    header: 'Company business plan presentation',
    image: 'business.png',
    description: 'A fast-forward, to the point presentation with the purpose of showcase your company\'s future goals',
    href: `${backEndUrl}templatesresume/business`,
    type: 'powerpoint'
  }  
];

export const jobsDone = [
  {
    name: 'Web developer',
    slightDescription: 'I decided to undertake this path in January 2024. Programming languages and, more in general, informatics have always interested me from many points of view, such as being able to build your own application for business purposes....',
    description: 'I decided to undertake this path in January 2024. Programming languages and, more in general, informatics have always interested me from many points of view, such as being able to build your own application for business purposes or just for fun. Since January 2024, I\'ve been studying web development for work purposes. It was a very hard endeavor to pursue, and throughout my learning journey, I have faced several issues that I have overcome, all due to my perseverance and relying on many very good information sources broadly renowed by the whole web developers\' community, such as MDN Web, w3Schools and frameworks, libraries, and runtime docs (the useful ones, in my opinion). Although I\'ve used many other tools through my learning journey, I have to say that these formal information sources have enhanced my skills as well as my overall knowledge in terms of web development, as no other one has. I\'m thrilling to start working in this very fascinating new world. Let\'s code together.',
    image: '1.png',
    id: 'webdev',
    icon: 'bx-code-alt service-icon',
    href: './jobexperience.html'
  }, {
    name: 'Energetic advicer',
    slightDescription: 'I worked in the energy sector for about two years. This former experience allowed me to undertake many different paths in almost all the different departments related to the energy sector. Mainly, I worked in the SSD addressing issues department....',
    description: 'I worked in the energy sector for about two years. This former experience allowed me to undertake many different paths in almost all the different departments related to the energy sector. Mainly, I worked in the SSD addressing issues department, which was related to addressing issues derived from mistakes during the bank periodic payment alignment. I was in charge as the team coordinator, and my main responsibility was to weekly report the data about revenues and outcomes in terms of SSD per client retrieved to the client\'s account managers. Anyway, my superiors put me in many other departments, such as the customer service mail department, SDI retrieval, selling, crossselling, upselling, and others.',
    image: '2.png',
    id: 'enerconsul',
    icon: 'bx-money service-icon',
    href: './jobexperience.html'
  }, {
    name: 'Music Producer',
    slightDescription: 'My musical life, at a certain point, led me to become a music producer. I\'ve always had a really strong passion for composing almost any kind of genre. Although I\'ve been producing almost exclusively for pop singers....',
    description: 'My musical life, at a certain point, led me to become a music producer. I\'ve always had a really strong passion for composing almost any kind of genre. Although I\'ve been producing almost exclusively for pop singers, I have had many other experiences related to other genres in the past. However, I\'m open-minded toward any kind of feature as well as work due to my broad range of tastes related to music. You can check my Instagram page to retrieve as much information as you need to get a good idea of my skills. Anyway, I\'ve worked with many good musicians throughout my career, you can even check my Spotify account to listen to many of my productions as well as entire pieces. I\'m also a guitar player. Indeed, I graduated from Saint Louise College of Music about three years ago in Pop/Jazz guitar. I\'ve worked in various situations, which have led me to become very versatile with my instrument. I really like to play almost everything. Check out my Instagram page to retrieve better information about my music career.',
    image: '3.png',
    id: 'music',
    icon: 'bxl-deezer service-icon',
    href: './jobexperience.html'
  }
];
