const books = [
  {
    title: "Catch-22",
    imgPath: "./covers/Catch-22.jpg",
    imgCropping: [
      {
        top: 0,
        left: 1110,
        bottom: 545,
        right: 1231
      },
      {
        top: 0,
        left: 1231,
        bottom: 766,
        right: 1509
      },
      {
        top: 0,
        left: 1509,
        bottom: 620,
        right: 1920
      }
    ]
  },
  {
    title: "The Importance of Being Earnest",
    imgPath: "./covers/Earnest.jpg",
    imgCropping: [
      {
        top: 545,
        left: 850,
        bottom: 1080,
        right: 1232
      }
    ]
  },
  // {
  //   title: "The Handmaid's Tale",
  //   imgPath: "/covers/Handmaid's Tale.jpg"
  // },
  // {
  //   title: "The Hitchhiker's Guide to the Galaxy",
  //   imgPath: "/covers/Hitchhiker's Guide.jpg"
  // },
  {
    title: "Pride and Prejudice",
    imgPath: "./covers/Pride and Prejudice.jpg",
    imgCropping: [
      {
        top: 621,
        left: 1510,
        bottom: 1080,
        right: 1920
      }
    ]
  },
  {
    title: "Slaughterhouse-Five",
    imgPath: "./covers/Slaughterhouse-Five.jpg",
    imgCropping: [
      {
        top: 0,
        left: 0,
        right: 1110,
        bottom: 543
      },
      {
        top: 543,
        left: 0,
        right: 850,
        bottom: 740
      }
    ]
  }
];

function bookButtonPressed(e) {
  let bookButtonId = e.target.parentNode.id;
  console.log(e.target.parentNode)
  let actualId = parseInt(bookButtonId.substring(12));
  console.log(actualId)
  let bookSelected = books[actualId];
  for (let img of bookSelected.imgCropping) {
    makeSectionColored(img.left, img.top, img.right - img.left, img.bottom - img.top);
  }
}


let bookElementsToAdd = [];

for (let i=0; i<books.length; i++) {
  let book = books[i];
  let el = document.createElement("button");
  let img = document.createElement("img");
  img.src = book.imgPath;
  img.width = 100;
  el.appendChild(img);
  el.id = "book-button-" + i;
  el.addEventListener("click", bookButtonPressed);
  bookElementsToAdd.push(el);
}

for (let bookEl of bookElementsToAdd) {
  document.body.appendChild(bookEl)
}


