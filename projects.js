// Apps included on the portfolio, newest first.
// Add one only when asked. The home page shows the first three.
// projects.html shows this whole list.
var projects = [
  {
    name: "Armarium",
    live: "https://reading-shelf-2617.web.app",
    source: "https://github.com/RoboJock/shelf",
    image: "images/shelf.png",
    alt: "Armarium home page, with a bookshelf illustration and a search box for a title or author.",
    stack: "Next.js · React · TypeScript · Firebase",
    summary: "A bookshelf in the browser. Search for a title or an author, then add the book to a shelf. Opening a book shows its summary and whether it belongs to a series.",
    detail: "You can start a shelf as a guest. Signing in keeps your shelves, and public shelves are there for anyone to read."
  },
  {
    name: "Puzzle Cube",
    live: "https://faceturn-b3b7.web.app",
    source: "https://github.com/RoboJock/face-turn",
    image: "images/cube.png",
    alt: "Puzzle Cube, with a solved 3×3, a timer at 0.00, and turn buttons for each face.",
    stack: "Next.js · React · TypeScript · Firebase",
    summary: "Solve a 2×2, 3×3, 4×4, or 5×5 cube in the browser. Drag a sticker to turn that layer, use the keyboard for a turn, and open the lessons when a solve stalls. A timer and a leaderboard are there when you want them.",
    detail: "A guest session keeps solves on this device. Signing in saves them. GitHub is one of the sign-in methods."
  },
  {
    name: "Study Deck",
    live: "https://flashcard-project-2ca2e.web.app",
    source: "https://github.com/RoboJock/deck",
    image: "images/deck.png",
    alt: "Study Deck home page, with a sample card that asks what a deck is and answers that it is a stack of cards you can flip.",
    stack: "React · TypeScript · Vite · Firebase",
    summary: "Make a deck, flip through the cards, and come back to the ones that have not stuck. A deck can be a few words or a set you return to.",
    detail: "The deck stays in the browser until an account saves it. Saved decks use Firebase Authentication and Cloud Firestore, and the security rules have their own tests."
  }
];
