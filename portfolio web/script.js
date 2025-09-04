document.querySelectorAll('a[href^="#"]').forEach(anchor => {anchor.addEventListener('click', function (e) {e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behaviour: 'smooth'});
});
});

window.addEventListener('scroll', function() {const navbar=this.document.querySelector('.navbar');
    this.window.scrollY > 50 ?
    navbar.computedStyleMap.backgroundColor = 'rgba(10, 10, 10, 0.98)' :
    navbar.computedStyleMap.backgroundColor='rgba(10,10,10,.95)';});
