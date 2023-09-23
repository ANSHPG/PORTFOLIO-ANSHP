let parent = document.querySelector(".featured-body");
let child = document.querySelector(".scroll-icon");
let menu_pull = document.querySelector(".menu-pull");
let menu_container = document.querySelector(".menu-container");
let menu_upper_right = document.querySelector(".menu-upper-right");
let menu_projects = document.querySelector(".menu-projects");
let featured_text = document.querySelector(".featured-text");
let menu_reach_me = document.querySelector(".menu-reach-me");
let third_page_content = document.querySelector(".third-page-content");
let menu_resources = document.querySelector(".menu-resources");
let fourth_page_content = document.querySelector(".fourth-page-content");
let show_reel = document.querySelector(".show-reel");
let menu_symbol = document.querySelector("#menu-symbol");
let view_projects_btn = document.querySelector(".view-projects");
let linkedin_btn = document.querySelector("#linkedin-btn");
let instagram_btn = document.querySelector("#instagram-btn");
let gmail_btn = document.querySelector("#gmail-btn");
let github_btn = document.querySelector("#github-btn");
let cursor_content = document.querySelector(".mf-cursor");
let bts_anshp = document.querySelector(".bts-anshp");
let anshp_cast = document.querySelector(".anshp-cast");
let sphere = document.querySelector(".sphere");
let spotify = document.querySelector(".spotify")
// cursor_content.style.color = "blue";

if (screen.width >= 600) {
    const cursor = new MouseFollower({
        el: null,
        container: '#main',
        className: 'mf-cursor',
        innerClassName: 'mf-cursor-inner',
        textClassName: 'mf-cursor-text',
        mediaClassName: 'mf-cursor-media',
        mediaBoxClassName: 'mf-cursor-media-box',
        iconSvgClassName: 'mf-svgsprite',
        iconSvgNamePrefix: '-',
        iconSvgSrc: '',
        dataAttr: 'cursor',
        hiddenState: '-hidden',
        textState: '-text',
        iconState: '-icon',
        activeState: '-active',
        mediaState: '-media',
        stateDetection: {
            '-pointer': 'a,button',
            '-hidden': 'iframe'
        },
        visible: true,
        visibleOnState: false,
        speed: 0.55,
        ease: 'expo.out',
        overwrite: true,
        skewing: 0,
        skewingText: 2,
        skewingIcon: 1,
        skewingMedia: 2,
        skewingDelta: 0.001,
        skewingDeltaMax: 0.15,
        stickDelta: 0.15,
        showTimeout: 20,
        hideOnLeave: true,
        hideTimeout: 300,
        hideMediaTimeout: 300,
    });
}

if (screen.width < 600) {
    cursor.hide();
}

// cursor.style.backgroundColor = "red";

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollSmoother);

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


// let smoother = ScrollSmoother.create({
//     wrapper: '#main',
//     content: '#home-page',
//     smooth: 1,
//     effects: true,
//     normalizeScroll: true
// });

gsap.to(".scroll-icon", {
    scrollTrigger: {
        trigger: ".scroll-1",
        start: "top center",
        end: "top 100px",
        markers: false,
        scrub: 1,
    },
    x: "72vw",
    duration: 1,
    ease: "none"
});

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// ScrollTrigger.normalizeScroll(true)

// create the smooth scroller FIRST!
// let smoother = ScrollSmoother.create({
//   smooth: 2,
//   effects: true,
//   normalizeScroll: true
// });

let mouse_cusor = document.querySelector('.mouseCursor');
let main_page = document.querySelector('#main');

let details_global;
window.addEventListener("mousemove", function (details) {
    details_global = details;
    gsap.to(mouse_cusor, {
        x: details.clientX,
        y: details.pageY
    })
})

// function update() {
//     window.requestAnimationFrame(update);

//     // gsap.to(mouse_cusor, {
//     //     // x: details_global.clientX,
//     //     y: (-1 * main_page.getBoundingClientRect().top) + 400,
//     // })

//     console.log(main_page.getBoundingClientRect().top);
//     console.log(main_page.getBoundingClientRect().bottom);

// }
// update();

function menuOpen() {
    if (screen.width > 600) {
        gsap.to(menu_container, {
            x: "-21vw",
            duration: 1,
            ease: Power2
        });
    }
    else {
        gsap.to(menu_container, {
            x: "-49.5vw",
            duration: 1,
            ease: Power2
        });
    }
}

function menuClose() {
    if (screen.width > 600) {
        gsap.to(menu_container, {
            x: "20vw",
            duration: 2,
            ease: Power2
        });
    }
    else {
        gsap.to(menu_container, {
            x: "51vw",
            duration: 2,
            ease: Power2
        });
    }
}

menu_pull.addEventListener("click", () => {
    console.log("clicked menu - pull");
    menuOpen();
    console.log(screen.width)
});

menu_upper_right.addEventListener("click", () => {
    console.log("clicked menu close logo");
    menuClose();
});

menu_symbol.addEventListener("click", () => {
    console.log("clicked menu - symbol");
    menuOpen();
    console.log(screen.width)
});

// window.addEventListener("scroll" ,() => {
//     console.log("scroll on window")
//     gsap.to(menu_container,{
//         x:"20vw",
//         duration: 2,
//         ease: Power2
//     });
// })

menu_projects.addEventListener("click", () => {
    gsap.to(window, {
        scrollTo: featured_text.getBoundingClientRect().top,
        duration: 2
    })
    menuClose();
})

menu_reach_me.addEventListener("click", () => {
    gsap.to(window, {
        scrollTo: third_page_content.getBoundingClientRect().top,
        duration: 2
    })
    menuClose();
})

show_reel.addEventListener("click", () => {
    gsap.to(window, {
        scrollTo: featured_text.getBoundingClientRect().top,
        duration: 2
    })
    menuClose();
})

menu_resources.addEventListener("click", () => {
    gsap.to(window, {
        scrollTo: fourth_page_content.getBoundingClientRect().top,
        duration: 2
    })
    menuClose();
})

function skipBtn() {
    view_projects_btn.addEventListener("click", () => {
        window.open("https://github.com/ANSHPG", "_blank");
    })

    linkedin_btn.addEventListener("click", () => {
        window.open("https://www.linkedin.com/in/anshuman-pattnaik-9694a3255", "_blank");
    })

    instagram_btn.addEventListener("click", () => {
        window.open("https://www.instagram.com/anshphere", "_blank");
    })

    gmail_btn.addEventListener("click", () => {
        let subject = "Want to connect";
        let body = "Hello nice to meet you,"
        window.open("mailto:helloanshu04@gmail.com?subject=" + subject + "&body=" + body, "_blank");
    })

    github_btn.addEventListener("click", () => {
        window.open("https://github.com/ANSHPG", "_blank");
    })

    bts_anshp.addEventListener("click", () => {
        window.open("https://github.com/ANSHPG/Chordopolis-ANSHP", "_blank");
    })

    anshp_cast.addEventListener("click", () => {
        window.open("https://github.com/ANSHPG/WeatherApp-ANSHP", "_blank");
    })

    sphere.addEventListener("click", () => {
        window.open("https://github.com/ANSHPG/SPHERE-ANSHP", "_blank");
    })

    spotify.addEventListener("click", () => {
        window.open("https://github.com/ANSHPG/SPOTIFY-ANSHP", "_blank");
    })

}