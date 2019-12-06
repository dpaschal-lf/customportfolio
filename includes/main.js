
$(document).ready( startApp );

function startApp(){
    var techs = addProjectItems();
    createProjectTechFilters( techs );
    addFunItems();
    addGuideItems();
    addArticlesItems();
    addEventListeners();
    determinePageLocation();
    addContactInfo();
}

function addProjectItems(){
    var targetContainer = $("#projects .items");
    var allTechs = {};
    for( var dataIndex = 0; dataIndex < projectData.length; dataIndex++){
        var currentData = projectData[dataIndex];
        var item = $("#projectItem").clone();
        item.css('background-image', 'url('+currentData.background+')')
        item.addClass( currentData.extraClasses );
        item.removeAttr('id');
        var techList = item.find('.techList');
        item.find('.title').text( currentData.title);
        for( var techIndex=0; techIndex < currentData.technologies.length; techIndex++){
            var currentTech = currentData.technologies[ techIndex ];
            allTechs[currentTech] = allTechs[currentTech] ? allTechs[currentTech]+1 : 1;
            item.addClass('tech-' + currentTech);
            var techInfo = techMap[currentTech];
            var techTag = $('<i>').addClass( techInfo.classes).attr('alt',techInfo.altText);
            techList.append(techTag);
        }
        item.find('.github a').attr('href', currentData.links.github);
        if(currentData.links.live){
            item.find('.live a').attr('href', currentData.links.live);
        } else {
            item.find('.live a').remove();
        }
        //totally could have done this with let on the loop's var or any number of other ways, but wanted to do a closure
        (function(){
            var clickData = currentData;
            item.find('.info').click( 
                function(){
                    displayModal( clickData.info );
                }
            )
        }())
        targetContainer.append(item);
    }
    return allTechs;
}

function createProjectTechFilters( technologyList ){
    for( var technology in technologyList ){
        var techInfo = techMap[technology];
        var techTag = $('<i>').addClass( techInfo.classes);
        var techContainerButton = $("<div>",{
            class: 'techContainer active',
            'data-tech':  technology,
            alt: techMap[technology].altText,
            title: techMap[technology].altText,
            on: {
                click: projectTechFilterToggle
            }
        })
        techContainerButton.append( techTag );
        $("#projects .filters").append( techContainerButton);
    }
    
}

function projectTechFilterToggle( event ){
    $(this).toggleClass('active');
    var activeTech = [];
    var selectedElements = $(".techContainer.active");
    $("#projects .item").addClass('hidden-animated');
    for(var elementIndex = 0; elementIndex < selectedElements.length; elementIndex++){
        var tech = selectedElements[ elementIndex ].getAttribute('data-tech');
        $("#projects .item.tech-" + tech ).removeClass('hidden-animated');
    }
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
            if((thisText.length+3)>=lineLength){
                thisText = thisText.slice(0, -3);
            }
            lines[lines.length-1].text(thisText + '...');
        }
        item.find('.intro').attr('href', currentData.url).append( lines );
        targetContainer.append(item);
    }
}
/*
            <a id="contactItem" class="contactItem" href="#stuff">
                <i class="" alt="" title=""></i>
                text
            </a>
*/
function addContactInfo(){
    var targetContainer = $("#contact .contactContainer");
    var targetClone = $("#contactItem");
    for(var contactIndex = 0; contactIndex < contactData.length; contactIndex++){
        var contactDatum = contactData[contactIndex];
        var clone = targetClone.clone();
        clone.removeAttr('id');
        clone.attr('href', contactDatum.targetLink);
        clone.find('i').addClass(contactDatum.icon).attr('alt',contactDatum.title).attr('title',contactDatum.title);
        clone.append(contactDatum.targetText);
        targetContainer.append(clone);
    }
}

function addEventListeners(){
    $(".menuItem").click( scrollToSection );
    $(document).on('scroll', determinePageLocation );
}

function scrollToSection( event ){
    var target = event.target.getAttribute('data-section');
    var destinationElement = document.querySelector(target);
    var destinationLocation = $(destinationElement).offset().top;
    var navHeight = $("#nav").height();
    $('body, html').animate({
        scrollTop: Math.floor(destinationLocation)-navHeight+'px'
    },200);
}


function determinePageLocation(  ){
    $(".selected").removeClass('selected');
    var currentScroll = document.querySelector('html').scrollTop;
    var targets = $(".centerContainer > *");
    var currentPosition = 0;
    var currentHeight = 0;
    while( currentPosition < targets.length && currentScroll > currentHeight){
        console.log('height: ' + currentHeight );
        currentHeight += $(targets[++currentPosition]).height();
    }
    $("#nav .desktopMenu .menuItem").eq(currentPosition).addClass('selected');
}

/* modal functions */

function displayModal( content ){
    $("#modalShadow").removeClass('hidden');
    $("#modalClose").off('click').click( this.hideModal );
    $("#modalContents").html( content );
}
function hideModal(){
    $("#modalShadow").addClass('hidden');
}

/* end modal section */