document.addEventListener('DOMContentLoaded', function() {
    let nav = document.getElementById('sidebar-nav');
    let protector = document.getElementById('protector');
    let navToggle = document.getElementById('menu-header');
    navToggle.addEventListener('click', function() {
        if(nav.style.display === 'none') {
            nav.style.display = 'inline';
            protector.style.display = 'inline';
        }
        else {
            nav.style.display = 'none';
            protector.style.display = 'none';
        }
    });
    window.addEventListener("resize",function() {
        if(screen.width>800){
            nav.style.display = 'inline';
            protector.style.display = 'none';
        }
    });
});