document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.side-menu').forEach(function (item) {
        item.addEventListener('click', function() {
            if (item.className.includes('active')) {
                item.className = item.className.replace(' active', '');
            } else {
                item.className += ' active';
            }
        })
    });

});
