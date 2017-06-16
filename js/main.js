var topMenu = [{
        href: '/about-us',
        text: 'About us',
        content: 'Lorem ipsum dolor sit amet orem ipsum dolor sit amet, minimum appetere neglegentur sit an, pri eu ludus sanctus ullamcorper. Eam no quidam utroque vituperata. Ea dicam graeci aliquam mei, melius dolores vix ut, vel audire antiopam cu. Id dicunt assentior usu, assum delectus salutandi sit ad. Probo mazim appareat nec ex. Duo ad fierent posidonium dissentiet, ad ubique nonumes vix.'
    }, {
        href: '/services',
        text: 'Services',
        content: 'Not available now.'
    }];



function drawMenuItem(item, menu) {
    // todo create li element and set href and text
}

function drawMenu(menu, container) {
    var virtualMenu; // todo create empty element



    for (var i = 0; i < menu.length; i += 1) {
        drawMenuItem(menu[i], virtualMenu);
    }

    container.innerHTML = menu;
}






document.addEventListener('DOMContentLoaded', function () {
    var container;

    container  = document.querySelector('#top-menu');
    drawMenu(topMenu, container);


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
