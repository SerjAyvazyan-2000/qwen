

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const fadeAnimations = [
    { selector: ".fade-left", from: { x: -40 } },
    { selector: ".fade-right", from: { x: 40 } },
    { selector: ".fade-top", from: { y: -40 } },
    { selector: ".fade-bottom", from: { y: 40 } },
  ];

  fadeAnimations.forEach(({ selector, from }) => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.fromTo(
        el,
        { ...from, opacity: 0, visibility: "visible" },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 10%",
            once: true, 
          
          },
        }
      );
    });
  });
});

function initCustomTextareaPlaceholder() {
  const wrappers = document.querySelectorAll('.e-textarea-wrapper');

  wrappers.forEach(wrapper => {
    const textarea = wrapper.querySelector('textarea');
    const placeholder = wrapper.querySelector('.e-textarea-placeholder');

    if (!textarea || !placeholder) return;

    const togglePlaceholder = () => {
      if (document.activeElement === textarea || textarea.value.trim() !== '') {
        placeholder.classList.add('hidden');
      } else {
        placeholder.classList.remove('hidden');
      }
    };

    textarea.addEventListener('focus', togglePlaceholder);
    textarea.addEventListener('blur', togglePlaceholder);
    textarea.addEventListener('input', togglePlaceholder);

    togglePlaceholder();
  });
}

document.addEventListener('DOMContentLoaded', initCustomTextareaPlaceholder);


document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".animate-item");
    if (!items.length) return; 

    const observer = new IntersectionObserver((entries) =>
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const index = [...items].indexOf(entry.target);
            entry.target.style.transitionDelay = `${ 0.15}s`;
            entry.target.classList.add("visible");

            observer.unobserve(entry.target);
        })
    , { threshold: 0.1 });

    items.forEach(item => observer.observe(item));
});





document.addEventListener("DOMContentLoaded", () => {
    const heroBlock = document.querySelector(".e-hero-textarea");
    if (!heroBlock) return; 

    const textarea = heroBlock.querySelector("textarea");
    const placeholder = heroBlock.querySelector(".e-textarea-placeholder");
    const buttons = document.querySelectorAll(".e-hero-hints button");

    if (!textarea || !placeholder) return;

    const toggle = () =>
        textarea.value.trim() === ""
            ? placeholder.classList.remove("hidden")
            : placeholder.classList.add("hidden");

    buttons.forEach(btn =>
        btn.addEventListener("click", () => {
            textarea.value = btn.textContent.trim();
            placeholder.classList.add("hidden");
            textarea.focus();
        })
    );

    textarea.addEventListener("input", toggle);
    textarea.addEventListener("blur", toggle);
    textarea.addEventListener("focus", () => placeholder.classList.add("hidden"));

    toggle();
});
