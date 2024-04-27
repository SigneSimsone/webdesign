document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.tm-img-slider');
    sliders.forEach(slider => {
      let currentSlide = 0;
      const slides = slider.querySelectorAll('.mdc-image-list__item');
      const numberOfSlides = slides.length;
  
      // Function to change slide
      function changeSlide(next = true) {
        slides[currentSlide].classList.remove('active'); // Hide current slide
        currentSlide = next ? (currentSlide + 1) % numberOfSlides : (currentSlide - 1 + numberOfSlides) % numberOfSlides;
        slides[currentSlide].classList.add('active'); // Show next slide
      }
  
      // Automatically cycle through slides every 3 seconds
      setInterval(changeSlide, 3000);
  
      // Initialize the first slide
      slides[currentSlide].classList.add('active');
    });
  });
  

        $(document).ready(function () {
            if (renderPage) {
                $('body').addClass('loaded');
            }

            setCarousel();

            $(window).resize(function () {
                setCarousel();
            });

            // Close menu after link click
            $('.nav-link').click(function () {
                $('#mainNav').removeClass('show');
            });

            // Select all links with hashes
            $('a[href*="#"]')
                // Remove links that don't actually link to anything
                .not('[href="#"]')
                .not('[href="#0"]')
                .click(function (event) {
                    // On-page links
                    if (
                        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                        &&
                        location.hostname == this.hostname
                    ) {
                        // Figure out element to scroll to
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                        // Does a scroll target exist?
                        if (target.length) {
                            // Only prevent default if animation is actually gonna happen
                            event.preventDefault();
                            $('html, body').animate({
                                scrollTop: target.offset().top + 1
                            }, 1000, function () {
                                // Callback after animation
                                // Must change focus
                                var $target = $(target);
                                $target.focus();
                                if ($target.is(":focus")) { // Checking if the target was focused
                                    return false;
                                } else {
                                    $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                    $target.focus(); // Set focus again
                                };
                            });
                        }
                    }
                });
        });
