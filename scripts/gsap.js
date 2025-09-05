// Register GSAP plugins
gsap.registerPlugin(ScrambleTextPlugin);
gsap.registerPlugin(ScrollToPlugin);

// Scramble text animation
gsap.to("#scramble-text-1", {
    scrambleText: {
        text: "Elias GHEERAERT",
        chars: "upperAndLowerCase",
        speed: 0.3,
    },
    duration: 2.5,
});

// Scroll to section on button click
document.querySelectorAll("nav button").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    gsap.to(window, {duration: 1, scrollTo:{y:"#section" + (index + 1), offsetY:80}});
  });
});
