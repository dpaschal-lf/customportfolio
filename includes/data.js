var projectData = [
    {
        title: 'Todo jQuery',
        extraClasses: 'todoJqueryMysqlProject',
        technologies: ['html','css','js','jquery','php','mysql'],
        links: {
            'github': 'https://github.com/dpaschal-lf/todo_base_oop_jquery_mysql_php',
            'live': 'http://app.danielpaschal.com/todo_base_oop_jquery_mysql_php/',
        },
        info: `A basic todo list created with 
        <p>html/css/jquery client side</p>
        <p>php/myhsql server side`,
        background: 'images/projects/todoexample_still.jpg'
    },
    {
        title: 'Todo React Node',
        extraClasses: 'todoReactNodeMysqlProject',
        technologies: ['css','react','js','node','mysql','bootstrap'],
        links: {
            'github': 'https://github.com/dpaschal-lf/todo_react_node',
            'live': 'http://reactnodetodo.danielpaschal.com/',
        },
        info: `A basic todo list created with 
        <ul>
            <li>React</li>
            <li>Bootstrap 4</li>
            <li>Node</li>
            <li>MySQL</li>
        </ul>`,
        background: 'images/projects/todoreactexample_still.jpg'
    },
    {
        title: 'Tank Designer',
        extraClasses: 'tankDesignerProject',
        technologies: ['css','js','html'],
        links: {
            'github': 'https://github.com/dpaschal-lf/tankDesigner',
            'live': 'http://app.danielpaschal.com/tankdesigner/',
        },
        info: `A tank AI simulator that pits multiple tank AI against each other.
        `,
        background: 'images/projects/tankdesigner_still.jpg'
    },
    {
        title: 'Javascript Exercises',
        extraClasses: 'javascriptExerciseProject',
        technologies: ['html','css','jquery','php','mysql'],
        links: {
            'github': 'https://github.com/dpaschal-lf/exercises',
            'live': 'http://javascript-exercises.com/',
        },
        info: 'An exercise website for learning core JS<p>Gives you specific feedback on errors',
        background: 'images/projects/javascriptexercises_still.jpg'
    },
    {
        title: 'pure PHP memory match',
        extraClasses: 'phpMemoryMatchProject',
        technologies: ['html','css','php'],
        links: {
            'github': 'https://github.com/dpaschal-lf/memoryMatch_purePHP',
            'live': 'http://app.danielpaschal.com/memorymatch_php',
        },
        info: 'A pure PHP server version of concentration',
        background: 'images/projects/phpmemorymatch_still.jpg'
    },
    {
        title: 'react news app',
        extraClasses: 'reactNewsApp',
        technologies: ['react','css'],
        links: {
            'github': 'https://github.com/dpaschal-lf/newsproject',
            'live': 'http://app.danielpaschal.com/newsproject/',
        },
        info: 'A react app using google news api',
        background: 'images/projects/newsproject_still.jpg'
    },
    {
        title: 'instagram clone',
        extraClasses: 'instagramProject',
        technologies: ['react','php','mysql','css','aws'],
        links: {
            'github': 'https://github.com/dpaschal-lf/instagramclone',
            //'live': '#http://app.danielpaschal.com/instagram/',
        },
        info: 'A react clone of instagram with a php/mysql backend',
        background: 'images/projects/instagram_still.png'
    },
    {
        title: 'url shortener',
        extraClasses: 'url-shortener',
        technologies: ['aws','node','lambda','s3','iam','dynamodb'],
        links: {
            'github': 'https://github.com/dpaschal-lf/tldr',
            'live': 'http://daniel-paschal-bitly.s3-website-us-west-2.amazonaws.com/',
        },
        info: 'lambda + dynamodb microservice url shortener',
        background: 'images/projects/instagram_still.png'
    }
]

var techMap = {
    mysql: {
        classes: 'customIcon mysql',
        altText: 'MySQL',
        categories: ['database', 'server']
    },
    jquery: {
        classes: 'customIcon jquery',
        altText: 'jQuery',
        categories: ['library','client']
    },
    html: {
        classes: 'fab fa-html5',
        altText: 'HTML 5',
        categories: ['client']
    },
    js: {
        classes: 'fab fa-js',
        altText: 'Javascript ES5/ES6',
        categories: ['client']
    },
    css: {
        classes: 'fab fa-css3-alt',
        altText: 'CSS 3',
        categories: ['client']
    },
    react: {
        classes: 'fab fa-react',
        altText: 'ReactJS',
        categories: ['framework','client']
    },
    php: {
        classes: 'fab fa-php',
        altText: 'PHP',
        categories: ['server']
    },
    node: {
        classes: "fab fa-node",
        altText: 'NodeJS',
        categories: ['server']
    },
    bootstrap: {
        classes: "fab fa-bootstrap",
        altText: 'Bootstrap 3/4',
        categories: ['library', 'client']
    },
    aws: {
        classes: "fab fa-aws",
        altText: 'AWS services',
        categories: ['hosting', 'SAAS']
    },
    lambda: {
        classes: "di di-lambda",
        altText: "AWS Lambda",
        categories: ['hosting', 'SAAS', 'microservice']
    },
    dynamodb: {
        classes: "di di-dynamodb",
        altText: "AWS dynamoDB",
        categories: ['database', 'SAAS', 'microservice']       
    },
    s3: {
        classes: "di di-s3",
        altText: "AWS s3",
        categories: ['hosting', 'SAAS']       
    }
    ,
    iam: {
        classes: "di di-iam",
        altText: "AWS iam",
        categories: ['authentication', 'SAAS']       
    }
}


var funData = [
    {
        title: 'Form Validation',
        description: 'core js with regex',
        background: './images/fun/regexform.png',
        icons: [
            { classes: 'fab fa-html5' },
            { classes: 'fab fa-js' },
            { classes: 'fab fa-css3-alt' },
            { classes: 'fa fa-eye', url: 'https://jsbin.com/sagayuy/edit?js,output'}
        ]
    },
    {
        title: 'Stock price lookup',
        description: 'canvas ajax api',
        background: './images/fun/ajaxcanvasstocks.png',
        icons: [
            { classes: 'fab fa-html5' },
            { classes: 'fab fa-js' },
            { classes: 'fa fa-eye', url: 'https://jsbin.com/bawitac/edit?html,js,output'}
        ]
    },
    {
        title: 'Fade to black',
        description: 'js css html',
        background: './images/fun/fadetoblack.png',
        icons: [
            { classes: 'fab fa-html5' },
            { classes: 'fab fa-js' },
            { classes: 'fa fa-eye', url: 'https://jsbin.com/yomuzop/edit?js,output'}
        ]
    },
    {
        title: 'syrup pour',
        description: 'js svg filter-effects',
        background: './images/fun/syrupeffects.png',
        icons: [
            { classes: 'fab fa-js' },
            { classes: 'fa fa-eye', url: 'https://jsbin.com/sicaroj/edit?output'}
        ]
    },
    {
        title: 'collapsible folders',
        description: 'js react-js css',
        background: './images/fun/collapsiblefolderreact.png',
        icons: [
            { classes: 'fab fa-js' },
            { classes: 'fab fa-react' },
            { classes: 'fab fa-css3-alt' },
            { classes: 'fa fa-eye', url: 'https://codepen.io/dpaschal-lf/pen/MzMzdm?editors=0010'}
        ]
    },
    {
        title: 'color picker',
        description: 'js react-js css',
        background: './images/fun/colorlevels.png',
        icons: [
            { classes: 'fab fa-js' },
            { classes: 'fab fa-react' },
            { classes: 'fab fa-css3-alt' },
            { classes: 'fa fa-eye', url: 'https://codepen.io/dpaschal-lf/pen/WLNzZa?editors=0010'}
        ]
    },
    {
        title: 'auto-complete',
        description: 'js react-js css',
        background: './images/fun/formautocomplete.png',
        icons: [
            { classes: 'fab fa-js' },
            { classes: 'fab fa-react' },
            { classes: 'fab fa-css3-alt' },
            { classes: 'fa fa-eye', url: 'https://codepen.io/dpaschal-lf/pen/REbzPg?editors=0110'}
        ]
    },
    {
        title: 'nested bars',
        description: 'js react-js css',
        background: './images/fun/nestedbars.png',
        icons: [
            { classes: 'fab fa-js' },
            { classes: 'fab fa-react' },
            { classes: 'fab fa-css3-alt' },
            { classes: 'fa fa-eye', url: 'https://codesandbox.io/s/nice-bush-kwtu9'}
        ]
    },
    {
        title: 'hover timer',
        description: 'js react-js css',
        background: './images/fun/hovertimer.png',
        icons: [
            { classes: 'fab fa-js' },
            { classes: 'fab fa-react' },
            { classes: 'fab fa-css3-alt' },
            { classes: 'fa fa-eye', url: 'https://codesandbox.io/s/hovercontentwithtimer-7diw6'}
        ]
    },
    {
        title: 'drag select',
        description: 'js react-js css',
        background: './images/fun/dragselect.png',
        icons: [
            { classes: 'fab fa-js' },
            { classes: 'fab fa-react' },
            { classes: 'fab fa-css3-alt' },
            { classes: 'fa fa-eye', url: 'https://codesandbox.io/s/griddragmarking-v1b8p'}
        ]
    },
    {
        title: 'letter juggle',
        description: 'js jquery css',
        background: './images/fun/letterjuggle.png',
        icons: [
            { classes: 'fab fa-js' },
            { classes: 'fab fa-css3-alt' },
            { classes: 'fa fa-eye', url: 'https://jsbin.com/rofaron/edit?js,output'}
        ]
    },
    {
        title: 'php tictactoe',
        description: 'js jquery css',
        background: './images/fun/php_tictactoe.png',
        icons: [
            { classes: 'fab fa-php' },
            { classes: 'fab fa-css3-alt' },
            { classes: 'fas fa-code', url: 'https://github.com/dpaschal-lf/php_tic_tac_toe' },
            { classes: 'fa fa-eye', url: 'http://danielpaschal.com/php_tic_tac_toe/'}
        ]
    },
    {
        title: 'newtonian physics',
        description: 'js jquery css',
        background: './images/fun/newtonianphysics.png',
        icons: [
            { classes: 'fab fa-js' },
            { classes: 'fab fa-css3-alt' },
            { classes: 'fas fa-code', url: 'https://github.com/dpaschal-lf/asteroids.git' },
            { classes: 'fa fa-eye', url: 'http://app.danielpaschal.com/asteroids/'}
        ]
    },
    {
        title: 'crytomatch',
        description: 'Crytocurrency Concentration',
        background: './images/fun/cryptomatch_still.png',
        icons: [
            { classes: 'fab fa-js' },
            { classes: 'fab fa-css3-alt' },
            { classes: 'fas fa-code', url: 'https://github.com/dpaschal-lf/cryptomatch' },
            { classes: 'fa fa-eye', url: 'http://app.danielpaschal.com/cryptomatch/'}
        ]
    }
]

var articlesData = [
    {
        title: 'touch detection in React',
        background: './images/articles/touchreact.jpeg',
        text: 'The goal of this was to see if I could detect a "swipe" event. To do so, I jumped a ball around the page in the same direction / magnitude of the swipe.',
        url: 'https://www.linkedin.com/pulse/touch-detection-react-daniel-paschal/'
    },
    {
        title: 'Webscraping is legal... kinda... sometimes',
        background: './images/articles/webscraping.jpeg',
        text: "Web scraping, for those that don't know, is the act of harvesting data from a data resource. Specifically it is harvesting data from a webpage, typically meant for human consumption, and processing it with a script to extract the useful bits.",
        url: 'https://www.linkedin.com/pulse/webscraping-legal-kindasometimes-daniel-paschal/'
    },
    {
        title: "I'm not as good as everyone else",
        background: './images/articles/notasgood.jpeg',
        text: "Did you compare yourself to others when you were learning? What was the outcome? What do you think about it now after having a bit of experience? Leave a comment down below and help your fellow developers!",
        url: 'https://www.linkedin.com/pulse/im-good-everyone-else-daniel-paschal/'
    },
    {
        title: "the quest for fire",
        background: './images/articles/quest.jpeg',
        text: "A common theme I see is the situation where students who have a little bit of knowledge of coding combined with an insatiable desire to use the latest trends get blinded by the shiny.",
        url: 'https://www.linkedin.com/pulse/quest-fire-daniel-paschal/'
    },
    {
        title: "Difficult to understand error messages.",
        background: './images/articles/errormessages.jpeg',
        text: "Make sure your errors will be understandable to the least technically capable among you. It will often be them that need those error messages the most.",
        url: 'https://www.linkedin.com/pulse/difficult-understand-error-messages-daniel-paschal/'
    },
    {
        title: "Adventures in answering stackoverflow questions",
        background: './images/articles/stackoverflow.png',
        text: "I've long seen StackOverflow, and knew of this system, but had never taken the plunge to answering questions. Truth be told, I was a little nervous. So here's my first impressions.",
        url: 'https://www.linkedin.com/pulse/adventures-answering-stackoverflow-questions-daniel-paschal/'
    },
    {
        title: "undefined === maddening",
        background: './images/articles/undefined.jpeg',
        text: "undefined compared to anything except for null or undefined is FALSE. For greater details, check out this equality comparison on MDN. ",
        url: 'https://www.linkedin.com/pulse/undefined-maddening-daniel-paschal/'
    },
    {
        title: "A thought on cramming",
        background: './images/articles/cramming.jpeg',
        text: `I hear from a lot of students and developers that they want to "study up" before a test / certification / interview.`,
        url: 'https://www.linkedin.com/pulse/quick-thought-cramming-interview-test-daniel-paschal/'
    },
    {
        title: "Language differences - Mod musings",
        background: './images/articles/mod.jpeg',
        text: "Nowadays, there can be very little difference between how languages handle different things. In this particular case, PHP and Javascript.",
        url: 'https://www.linkedin.com/pulse/language-differences-mod-musings-daniel-paschal/'
    },
    {
        title: "Efficiency can be inefficient",
        background: './images/articles/efficiency.png',
        text: `Sometimes in the course of coding, we do what seems like a harmless change. A change rooted in a desire to reduce our variable use, or put as much onto one line and "look cool".`,
        url: 'https://www.linkedin.com/pulse/efficiency-can-inefficient-daniel-paschal/'
    },
    {
        title: "Simple data animation with js/jquery",
        background: './images/articles/dataanimation.png',
        text: "A student at Learningfuze was interested in how the animations were done in this article. I thought it was a good challenge to try to recreate some of it and explain how it works.",
        url: 'https://www.linkedin.com/pulse/simple-data-animation-jsjquery-daniel-paschal/'
    },
    {
        title: "JS bind, apply, and call explained",
        background: './images/articles/bindapplycall.jpeg',
        text: "An alumni recently asked me a question about the difference between bind, apply, and call. It was asked in an interview. ",
        url: 'https://www.linkedin.com/pulse/js-bind-apply-call-explained-daniel-paschal/'
    },
    {
        title: "Iffe, closures, encapsulations",
        background: './images/articles/fencedarea.jpeg',
        text: " have seen a recent flood in articles about Immediately Invoked Function Expressions. Here's the crash course on how they all work",
        url: 'https://www.linkedin.com/pulse/iffe-closures-encapsulations-daniel-paschal/'
    },
    {
        title: "MySQL - multiple rows into fewer rows",
        background: './images/articles/mysql.png',
        text: "One nice thing about questions from students embedded in companies that are doing things \"their own way\" is that you have the luxury of answering a question in a way that you normally wouldn't",
        url: 'https://www.linkedin.com/pulse/mysql-condensing-multiple-small-rows-fewer-large-daniel-paschal/'
    },
    {
        title: "no dev can ever know everything all at once",
        background: './images/articles/strpos.jpeg',
        text: `You can know all the fancy frameworks you want. You will still be brought down by a dumb bug or inconsistency or lack of knowledge"`,
        url: 'https://www.linkedin.com/pulse/php-strpos-doesnt-like-linefeeds-why-dev-can-ever-know-paschal/'
    },
    {
        title: "css: aligning things to the right",
        background: './images/articles/cssaligning.png',
        text: "Sometimes you really need to get something on the right side of the page. I see a lot of bad practices, usually having to do with position absolute.",
        url: 'https://www.linkedin.com/pulse/css-aligning-things-right-daniel-paschal/'
    },
    {
        title: "React: modifying children",
        background: './images/articles/modifyingchildren.jpeg',
        text: "if I use React, I like to avoid adding yet more frameworks, modules, and libraries to it to make it do \"more\".",
        url: 'https://www.linkedin.com/pulse/react-modifying-children-daniel-paschal/'
    },
    {
        title: "Bit masks to optimize options/rights",
        background: './images/articles/bitmasks.jpeg',
        text: "In development we often need to handle multiple closely related states. Examples of this would be user rights, or filtering traits of something to get only those things that match what you are looking for. Basically multiple boolean values.",
        url: 'https://www.linkedin.com/pulse/bit-masks-optimize-optionsrights-daniel-paschal/'
    },
    {
        title: "Recreating the wheel",
        background: './images/articles/recreatingthewheel.jpeg',
        text: "There are some programming concepts that you understand intellectually, but you just don't quite 'get' them. Promises were like that for me in JS. I knew how to use them, I understood the basic concept, but I always felt rough around the edges with them.",
        url: 'https://www.linkedin.com/pulse/recreating-wheel-daniel-paschal/'
    },
    {
        title: "coding challenges: think human",
        background: './images/articles/thinkhuman.jpeg',
        text: "At the end of the day, your human mind has a lot of tools to solve problems. You need to pay attention to the way your brain solves problems, document it fastidiously, and then try to recreate that in code as much as possible",
        url: 'https://www.linkedin.com/pulse/coding-challenges-think-human-daniel-paschal/'
    }
]

var guidesData = [
    {
        title: 'JS_OOP',
        icons: [
            { classes: 'fab fa-js' },
            { classes: 'fa fa-eye', url: 'https://docs.google.com/presentation/d/e/2PACX-1vTvCDJnxLi8rNVXuMQxlOJt6s1Q_NrMwVhb5St0gtDObJ1MgZqnK7DRgT6qi80NQdF7Fd42KYUTOBC3/pub?start=false&loop=false&delayms=3000&slide=id.p'}
        ]
    },
    {
        title: 'oopconversion',
        icons: [
            { classes: 'fab fa-js' },
            { classes: 'fa fa-eye', url: 'https://docs.google.com/presentation/d/e/2PACX-1vRQCUCXZu_XVqm5-rilvwg4U8KhkkMWEyRt2JH6KmRRVQBVSpXGegKuyNto--GsHbDQPyTpViI0Sq0Q/pub?start=false&loop=false&delayms=3000&slide=id.g1b2ecf4593_0_0'}
        ]
    },
    {
        title: 'higher order functions',
        icons: [
            { classes: 'fab fa-js' },
            { classes: 'fa fa-eye', url: 'https://docs.google.com/presentation/d/e/2PACX-1vT8tCKjYFSAlGU02Yu9lmNbHaiCZtmbjT7kYdgPM6E1EDRz0Jlh0oUbguPb_JpsV73sgVH7SyN1nM6B/pub?start=false&loop=false&delayms=3000'}
        ]
    }
];
function caesarShift(target, delta){
    return target.split('').map( l => String.fromCharCode(l.charCodeAt(0)+delta)).join('');
}

var contactData = [
    { 
        title: 'email',
        icon: 'far fa-envelope',
        targetLink: 'mailto:'+caesarShift('gdqlho1sdvfkdoCjpdlo1frp', -3),
        targetText: caesarShift('gdqlho1sdvfkdoCjpdlo1frp', -3)
    },
    {
        title: 'phone',
        icon: 'fas fa-phone',
        targetLink: 'tel:'+caesarShift('D=D9AD@9BB@>',-12),
        targetText: caesarShift('D=D9AD@9BB@>',-12)
    },
    {
        title: 'github',
        icon: 'fab fa-github-alt',
        targetLink: 'https://github.com/dpaschal-lf',
        targetText: 'dpaschal-lf'
    },
    {
        title: 'linkedin',
        icon: 'fab fa-linkedin-in',
        targetLink: 'https://www.linkedin.com/in/daniel-paschal-4ba23038/',
        targetText: 'Daniel Paschal'
    },
    {
        title: 'senior dev résumé',
        icon: 'fas fa-file',
        targetLink: 'includes/Daniel_Paschal-Senior_Software_Engineer-2020-01.pdf',
        targetText: 'résumé'
    }
]