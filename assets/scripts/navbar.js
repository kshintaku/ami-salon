// Opening the side menu when in tablet/mobile view
function toggleNav() {
    if (document.getElementById('nav-icon').className === '') {
        document.getElementById('nav-icon').className = 'open'
        document.getElementById('side-nav').style.width = '72%'
    } else {
        document.getElementById('nav-icon').className = ''
        document.getElementById('side-nav').style.width = '0'
    }
}
