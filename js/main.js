var topMenu = [{
        href: '#/about-us',
        text: 'About us',
        color: 'item-color-one',
        hcolor: 'color-one',
        content: 'Lorem ipsum dolor sit amet orem ipsum dolor sit amet, minimum appetere neglegentur sit an, pri eu ludus sanctus ullamcorper. Eam no quidam utroque vituperata. Ea dicam graeci aliquam mei, melius dolores vix ut, vel audire antiopam cu. Id dicunt assentior usu, assum delectus salutandi sit ad. Probo mazim appareat nec ex. Duo ad fierent posidonium dissentiet, ad ubique nonumes vix.'
    }, {
        href: '#/services',
        text: 'Services',
        color: 'item-color-two',
        hcolor: 'color-two',
        content: 'Not available now.'
    }, {
    	href: '#/portfolio',
    	text: 'Portfolio',
        color: 'item-color-three',
        hcolor: 'color-three',
    	content: 'Not available now.'
    }, {
    	href: '#/pricing',
    	text: 'Pricing',
        color: 'item-color-four',
        hcolor: 'color-four',
    	content: 'Not available now.'
    }, {
    	href: '#/contacts',
    	text: 'Contacts',
        color: 'item-color-five',
        hcolor: 'color-five',
    	content: 'Not available now.'
    }];

    bottomMenu = [{
        href: '#/a',
        text: 'A',
        color: 'item-color-one',
        hcolor: 'color-one',
        content: 'Not available now.'
    }, {
        href: '#/b',
        text: 'B',
        color: 'item-color-two',
        hcolor: 'color-two',
        content: 'Not available now.'
    }, {
    	href: '#/c',
    	text: 'C',
        color: 'item-color-three',
        hcolor: 'color-three',
    	content: 'Not available now.'
    }, {
    	href: '#/d',
    	text: 'D',
        color: 'item-color-four',
        hcolor: 'color-four',
    	content: 'Not available now.'
    }, {
    	href: '#/e',
    	text: 'E',
        color: 'item-color-five',
        hcolor: 'color-five',
    	content: 'Not available now.'
    }];

    mainContent = document.querySelector('#data-content');

function drawMenuItem(item, menu, menuIndex) {
    // todo create li element and set href and text
    var element = document.createElement('li'),
        link = document.createElement('a'),
        hiddiv = document.createElement('div');

    element.classList.add('nav-item', item.color);
    link.classList.add('nav-link', item.hcolor);
    link.setAttribute('href', item.href);
    link.innerText = item.text;
    hiddiv.classList.add('content-hidden');
    hiddiv.innerText = item.content;

    link.appendChild(hiddiv);

    element.appendChild(link);

    menu.appendChild(element);


    //<li class="nav-item item-color-one"><a class="nav-link color-one" href="#">ABOUT US</a></li>
}

function drawMenu(menu, container) {
    var virtualMenu = document.createElement('ul'); // todo create empty element
    
    virtualMenu.addEventListener('click', function (event) {

            var target = event.target,
                content = target.querySelector('.content-hidden');

            if (content) {
                mainContent.innerHTML = content.innerHTML;
            }

        }); 

    virtualMenu.classList.add('nav-list');


    
    for (var i = 0; i < menu.length; i += 1) {
        drawMenuItem(menu[i], virtualMenu, i);
    }

    
    container.innerHTML = '';
    container.appendChild(virtualMenu);

    
	
}






document.addEventListener('DOMContentLoaded', function () {
    var container;
        

    container  = document.querySelector('#top-menu');
    drawMenu(topMenu, container);

    /*todo draw bottom menu*/

    var crisper;

    crisper = document.querySelector('#bottom-menu');
    drawMenu(bottomMenu, crisper);


    document.querySelectorAll('.side-top').forEach(function (item) {
        item.addEventListener('click', function() {
            var parent = item.parentNode;
            if (parent.className.includes('active')) {
                parent.className = parent.className.replace(' active', '');
            } else {
                parent.className += ' active';
            }
        })
    });

 
    
    


    
});


