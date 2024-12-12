const books = [
  {
    title: "Catch-22",
    imgPath: "./covers/Catch-22.jpg",
    imgCropping: [
      [
        0,
        1626,
        289,
        1656
      ],
      [
        0,
        1656,
        502,
        1920
      ]
    ]
  },
  {
    title: "The Importance of Being Earnest",
    imgPath: "./covers/Earnest.jpg",
    imgCropping: [
      [
        725,
        0,
        1080,
        515
      ],
      [
        580,
        918,
        1080,
        1156
      ],
      [
        602,
        1156,
        1080,
        1270
      ]
    ]
  },
  {
    title: "The Handmaid's Tale",
    imgPath: "/covers/Handmaid's Tale.jpg",
    imgCropping: [
      [
        385,
        0,
        725,
        711
      ],
      [
        725,
        515,
        785,
        711
      ]
    ]
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    imgPath: "/covers/Hitchhiker's Guide.jpg",
    imgCropping: [
      [
        289,
        1156,
        602,
        1656
      ]
    ]
  },
  {
    title: "Pride and Prejudice",
    imgPath: "./covers/Pride and Prejudice.jpg",
    imgCropping: [
      [
        504,
        1656,
        602,
        1920
      ],
      [
        602,
        1270,
        1080,
        1920
      ]
    ]
  },
  {
    title: "Slaughterhouse-Five",
    imgPath: "./covers/Slaughterhouse-Five.jpg",
    imgCropping: [
      [
        0,
        0,
        385,
        463
      ],
      [
        562,
        711,
        580,
        1156
      ],
      [
        562,
        711,
        785,
        918
      ],
      [
        785,
        515,
        1080,
        918
      ]
    ]
  },
  {
    title: "Counting By Sevens",
    imgPath: "./covers/Counting by Sevens.jpg",
    imgCropping: [
      [
        0,
        463,
        289,
        1324
      ],
      [
        289,
        463,
        385,
        1156
      ],
      [
        385,
        711,
        562,
        1156
      ]
    ]

  },
  {
    title: "The Picture of Dorian Gray",
    imgPath: "./covers/Picture of Dorian Gray.jpg",
    imgCropping: [
      [
        0,
        1324,
        289,
        1626
      ]
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
    makeSectionColored(img[1], img[0], img[3] - img[1], img[2] - img[0]);
  }
  if (!completed.includes(actualId)) {
    completed.push(actualId)
  }
  if (completed.length >= books.length) {
    document.body.classList.add("complete")
  }
  e.target.classList.add("complete")
}


let bookElementsToAdd = [];

for (let i=0; i<books.length; i++) {
  let book = books[i];
  let el = document.createElement("button");
  let img = document.createElement("img");
  img.src = book.imgPath;
  img.width = 200;
  el.appendChild(img);
  el.id = "book-button-" + i;
  el.addEventListener("click", bookButtonPressed);
  bookElementsToAdd.push(el);
}

for (let bookEl of bookElementsToAdd) {
  document.body.appendChild(bookEl)
}


