$(function(){
  
    // FADE ON SCROLL
    $(window).on("load",function() {
        $(window).scroll(function() {
          var windowBottom = $(this).scrollTop() + $(this).innerHeight();
          $(".fade").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            var direction = $(this).attr('direction') == 'left' ? 'translateX(-50px)' : 'translateX(50px)';
            
            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
              if ($(this).css("opacity")==0) {$(this).css('opacity', '1').css('transform', 'translateX(0)');}
            } else { //object goes out of view (scrolling up)
              if ($(this).css("opacity")==1) {$(this).css('opacity', '0').css('transform', direction);}
            }
          });
        }).scroll(); //invoke scroll-handler on page-load
    });
    
    // PARALLAX ON SCROLL
    $(document).scroll(function(){
        var scrollPos = $(this).scrollTop();
        this.querySelectorAll('.parallax-item').forEach(layer => {
            

            var speed = $(layer).attr('data-speed');
            $(layer).css('margin-top', scrollPos/speed);
        });
        
    });
    
    
    // PARALLAX ON MOUSE MOVE
    document.addEventListener("mousemove", parallax)
    function parallax(e) {
        this.querySelectorAll('.parallax').forEach(layer => { // img parallax move
            const speed = layer.getAttribute('data-speed') // speed atr in html code

            const x = (window.innerWidth - e.pageX*speed)/100
            const y = (window.innerHeight - e.pageY*speed)/100

            layer.style.transform = `translateX(${x}px) translateY(${y}px) translate(-50%, -50%)`
        })
    }
    
    // let path = document.querySelector('path');
    // let pathLength = path.getTotalLength();
    // path.style.strokeDasharray = pathLength + ' ' + pathLength;
    // path.style.strokeDashoffset = pathLength;

    // // draw path on scroll
    // window.addEventListener('scroll', ()=>{
    //     var scrollPercentage = (-190 + document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    //     var drawLength = pathLength * scrollPercentage;
    //     path.style.strokeDashoffset = pathLength - drawLength;
        
    // })
})