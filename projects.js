// Apps included on the portfolio, newest first.
// Add one only when asked. The home page shows the first three.
// projects.html shows this whole list.
var projects = [
  {
    name: "Shelf",
    live: "https://reading-shelf-2617.web.app",
    source: "https://github.com/RoboJock/shelf",
    image: "images/shelf.png",
    alt: "Shelf, with a search box labeled Title or author and a prompt asking what you are reading.",
    stack: "Next.js · React · TypeScript · Firebase",
    summary: "Search for a book by title or author, then keep the cover, author, and year on a shelf. Search goes to Open Library. If a record is missing a description, page count, or cover, Google Books fills that gap. Close spellings are tried when the first results do not match what was typed.",
    detail: "A shelf can stay on this device. Signing in moves those books onto the account instead of starting over."
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
