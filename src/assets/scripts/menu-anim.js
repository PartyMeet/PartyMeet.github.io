$(function(){

    let path = document.querySelector('path');
    let pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
    path.style.strokeDashoffset = pathLength;

    // draw path on scroll
    window.addEventListener('scroll', ()=>{
        var scrollPercentage = (-190 + document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        var drawLength = pathLength * scrollPercentage;
        path.style.strokeDashoffset = pathLength - drawLength;
        
    })

    

    document.addEventListener("mousemove", parallax)
    function parallax(e) {
        this.querySelectorAll('.parallax').forEach(layer => { // img parallax move
            const speed = layer.getAttribute('data-speed') // speed atr in html code

            const x = (window.innerWidth - e.pageX*speed)/100
            const y = (window.innerHeight - e.pageY*speed)/100

            layer.style.transform = `translateX(${x}px) translateY(${y}px) translate(-50%, -50%)`
        })
    }
})