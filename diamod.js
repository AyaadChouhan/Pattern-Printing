function createPiramid() {
  let elOfIndex = "";
  let dollar = 10;
  let stars = 1;
  let height = 20;

  for (let i = 0; i < height - 1; i++) {

    for (let j = 0; j < dollar; j++) {
      elOfIndex += "{";
    }

    for (let k = 0; k < stars; k++) {
      elOfIndex += "@";
    }

    for (let l = 0; l < dollar; l++) {
      elOfIndex += "}";
    }

    if (i >= height / 2 || dollar < 2) {
      dollar++;
      stars -= 2;
    } else {
      stars += 2;
      dollar--;
    }




    console.log(elOfIndex);
    elOfIndex = "";
  }
}

createPiramid();
