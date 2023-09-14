document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var options = {
        direction: 'top',
        hoverEnabled: true,
        toolbarEnabled: false
    }
    let navElem = document.querySelectorAll('.sidenav');
    let navInstances = M.Sidenav.init(navElem);

    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
})