
$(document).ready( startApp );

function startApp(){
    addFunItems();
    addGuideItems();
    addArticlesItems();
    addLinkNavs();
}


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

function addArticlesItems(){
    var targetContainer = $("#articles .articleList");
    var targetClone = $("#articleItem");
    var maxLines = 4;
    var lineLength = 25;
    for( var dataIndex = 0; dataIndex < articlesData.length; dataIndex++){
        var currentData = articlesData[dataIndex];
        var item = targetClone.clone();
        item.removeAttr('id');
        item.find('.title').text( currentData.title);
        if(currentData.title.length > 30){
            item.find('.title').addClass('smallText');
        }
        item.find('.background').css('background-image', 'url('+currentData.background+')');
        var text = currentData.text
        var lines = [];
        while( text && lines.length<=maxLines){
            var sampleText = text.slice(0, lineLength);
            var endPos = sampleText.lastIndexOf(' ');
            thisText = sampleText.slice(0, endPos );
            text = text.slice(endPos);
            var lineDom = $("<div>",{
                text: thisText,
                class: 'line'
            });
            lines.push( lineDom );
        }
        if(text){
            if(currentData.title==='the quest for fire'){
                //debugger;
            }
            if((thisText.length+3)>=lineLength){
                thisText = thisText.slice(0, -3);
            }
            lines[lines.length-1].text(thisText + '...');
        }
        item.find('.intro').attr('href', currentData.url).append( lines );
        targetContainer.append(item);
    }
}

function addLinkNavs(){
    $(".menuItem").click( scrollToSection );
}

function scrollToSection( event ){
    debugger;
    var target = event.target.getAttribute('data-section');
    var destinationElement = document.querySelector(target);
    var destinationLocation = $(destinationElement).offset().top;
    var navHeight = $("#nav").height();
    $('body, html').animate({
        scrollTop: Math.floor(destinationLocation)-navHeight+'px'
    },200)

    
}