document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const semesters = document.querySelectorAll('.semester');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // ParticlesJS Background
    particlesJS('particles-js', {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            color: { value: ['#00ffff', '#0000ee', '#000fff'] },
            shape: {
                type: 'circle',
                stroke: { width: 0, color: '#000000' },
                polygon: { nb_sides: 5 }
            },
            opacity: {
                value: 0.7,
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: { enable: true, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: true, mode: 'push' },
                resize: true
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            }
        },
        retina_detect: true
    });

    // Timeline Item Click
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            const semesterNum = this.getAttribute('data-semester');
            semesters.forEach(semester => {
                if (semester.id === `semester-${semesterNum}`) {
                    semester.style.display = 'block';
                    semester.style.opacity = '0';
                    semester.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        semester.style.opacity = '1';
                        semester.style.transform = 'translateY(0)';
                    }, 50);
                    semester.scrollIntoView({behavior: 'smooth', block: 'start'});
                } else {
                    semester.style.display = 'none';
                }
            });

            timelineItems.forEach(ti => ti.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Animate timeline items on scroll
    const animateOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        timelineItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < triggerBottom) {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load

    // Scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
            scrollToTopBtn.style.opacity = '1';
        } else {
            scrollToTopBtn.style.opacity = '0';
            setTimeout(() => {
                scrollToTopBtn.style.display = 'none';
            }, 300);
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scroll for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hide preloader
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Animate courses on scroll
    const animateCoursesOnScroll = () => {
        const courses = document.querySelectorAll('.course');
        const triggerBottom = window.innerHeight / 5 * 4;

        courses.forEach((course, index) => {
            const courseTop = course.getBoundingClientRect().top;
            if (courseTop < triggerBottom) {
                setTimeout(() => {
                    course.style.opacity = '1';
                    course.style.transform = 'translateX(0)';
                }, index * 100);
            }
        });
    };

    window.addEventListener('scroll', animateCoursesOnScroll);
});