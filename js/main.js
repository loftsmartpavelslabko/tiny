document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#side-mn').addEventListener('click', function() {
        if (document.body.className.includes('active')) {
            document.body.className = document.body.className.replace(' active', '');
        } else {
            document.body.className += ' active';
        }
    })

});
