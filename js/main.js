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

    bottomMenu = [];


function drawMenuItem(item, menu, menuIndex) {
    // todo create li element and set href and text
    var element = document.createElement('li'),
        link = document.createElement('a');

    element.classList.add('nav-item', item.color);
    link.classList.add('nav-link', item.hcolor);
    link.setAttribute('href', item.href);
    link.innerText = item.text;

    element.appendChild(link);

    menu.appendChild(element);


    //<li class="nav-item item-color-one"><a class="nav-link color-one" href="#">ABOUT US</a></li>
}

function drawMenu(menu, container) {
    var virtualMenu = document.createElement('ul'); // todo create empty element

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
