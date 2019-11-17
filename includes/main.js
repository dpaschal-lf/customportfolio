
$(document).ready( startApp );

function startApp(){
    addFunItems();
    addGuideItems();
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
        title: 'collapsible folders',
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
        background: './images/fun/letterjuggle.png',
        icons: [
            { classes: 'fab fa-php' },
            { classes: 'fab fa-css3-alt' },
            { classes: 'fas fa-code', url: 'https://github.com/dpaschal-lf/php_tic_tac_toe' },
            { classes: 'fa fa-eye', url: 'http://danielpaschal.com/php_tic_tac_toe/'}
        ]
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
    }
]

function addFunItems(){
    var targetContainer = $("#experimentsAndFun .itemList");
    for( var dataIndex = 0; dataIndex < funData.length; dataIndex++){
        var currentData = funData[dataIndex];
        var item = $("#funItem").clone();
        item.removeAttr('id');
        item.find('.background').css('background-image', 'url('+currentData.background+')')
        item.find('.title').text( currentData.title);
        item.find('.description').text( currentData.description);
        for( var iconIndex=0; iconIndex < currentData.icons.length ; iconIndex++){
            var currentIcon = currentData.icons[iconIndex];
            var icon = $("<i>").addClass( currentIcon.classes);
            var container = icon;
            if(currentIcon.hasOwnProperty('url')){
                container = $("<a>",{
                    target: '_blank',
                    href: currentIcon.url
                });
                container.append(icon);
            }
            item.find('.info').append(container);
        }
        targetContainer.append(item);
    }
}

function addGuideItems(){
    var targetContainer = $("#guides .itemList");
    for( var dataIndex = 0; dataIndex < guidesData.length; dataIndex++){
        var currentData = guidesData[dataIndex];
        var item = $("#guideItem").clone();
        item.removeAttr('id');
        item.find('.title, .subTitle').text( currentData.title);
        item.find('.description').text( currentData.description);
        for( var iconIndex=0; iconIndex < currentData.icons.length ; iconIndex++){
            var currentIcon = currentData.icons[iconIndex];
            var icon = $("<i>").addClass( currentIcon.classes);
            var container = icon;
            if(currentIcon.hasOwnProperty('url')){
                container = $("<a>",{
                    target: '_blank',
                    href: currentIcon.url
                });
                container.append(icon);
            }
            item.find('.menu').append(container);
        }
        targetContainer.append(item);
    }
}