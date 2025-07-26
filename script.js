window.addEventListener("load", () => {
  setTimeout(() => {
    // Hide the loader
    const loader = document.getElementById("loader");
    loader.style.display = "none";

    // Show the main section with zoom-in
    const main = document.getElementById("main");
    main.classList.remove("hidden");

    // Slight delay to trigger transition
    setTimeout(() => {
      main.classList.add("show");
    }, 100);
  }, 3000); // 3-second loading delay
});

