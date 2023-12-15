const allStars = document.querySelectorAll(".star");
// console.log(allStars); -- nodelist

allStars.forEach((star, i) => {
  star.onclick = function () {
    // console.log(i);
    // console.log(star);
    let current_star_level = i + 1;
    allStars.forEach((star, j) => {
      if (current_star_level >= j + 1) {
        star.innerHTML = " &starf;";
      } else {
        star.innerHTML = " &star;";
      }
    });
  };
});
