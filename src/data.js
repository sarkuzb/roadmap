import ImageOne from "./assets/essentials/essential-target-web-svgrepo-com.svg";
import ImageTwo from "./assets/essentials/html-svgrepo-com.svg";
import ImageThree from "./assets/essentials/brush-essential-paint-svgrepo-com.svg";
import ImageFour from "./assets/essentials/box-1.svg";
import ImageFive from "./assets/essentials/bootstrap.svg";
import ImageSix from "./assets/essentials/tailwind.svg";
import ImageSeven from "./assets/essentials/design.svg";
import ImageEight from "./assets/essentials/document.svg";
import jscript from "./assets/essentials/js.svg";
import ReactImage from "./assets/essentials/react.png";
import NodeImage from "./assets/essentials/node-js.png";

export const Informations = [
  {
    id: 1,
    direction: "Web Development Fundamentals",
    liId: 1,
    informa: [
      "Understand how websites work and how HTML, CSS, and JavaScript contribute.",
      "Understand how the internet works and how websites are served.",
      "Learn to use git, GitHub and version control.",
      "Learn key troubleshooting and debugging skills to apply to your projects",
    ],
    image: ImageOne,
  },
  {
    id: 2,
    direction: "HTML 5",
    liId: 2,
    informa: [
      "Learn the anatomy of HTML syntax to structure your websites.",
      "Understand the HTML boilerplate and HTML doctypes.",
      "Understand indentation and nesting in HTML code.",
      "Learn to use HTML tags to structure headings, paragraphs.",
      "How to structure HTML lists to create unordered and ordered lists.",
      "How to insert images using HTML",
      "How to create hyperlinks using anchor tags.",
      "Create multi-page websites.",
      "Learn HTML best practices.",
    ],
    image: ImageTwo,
  },
  {
    id: 3,
    direction: "CSS 3",
    liId: 3,
    informa: [
      "Understand what are cascading style sheets and how you can use it to style your website.",
      "How to use CSS selectors and properties.",
      "Learn about how to use inline, internal and external CSS.",
      "Understand CSS coding best practices.",
      "Learn about CSS specificity and inheritance.",
      "Learn and understand the CSS Box Model.",
      "Learn to use developer tools to inspect and diagnose CSS.",
      "Learn about CSS positioning and display properties.",
      "Learn about font styling using CSS and web safe fonts.",
      "Implement responsiveness using CSS media queries.",
      "How to use CSS float and clear properties.",
      "How combine CSS selectors and understand selector priority.",
    ],
    image: ImageThree,
  },
];

export const ShowMoreInfo = [
  {
    id: 4,
    direction: "Flexbox",
    liId: 4,
    informa: [
      "Learn about why flexbox was introduced to CSS.",
      "Understand what happens when display is set as flex.",
      "Understand flex direction and how it affects layout.",
      "Learn to use align and justify for layout of child items",
      "Understand how child items are sized and distributed in a flexbox and use the flex shorthand property.",
    ],
    image: ImageFour,
  },
  {
    id: 5,
    direction: "Grid",
    liId: 5,
    informa: [
      "Learn about how grid is different to flexbox and their strengths and weaknesses.",
      "Understand what happens when display is set as grid.",
      "Learn how grid sizing is done and how to create and arrange a grid.",
      "Learn to position items in a grid and how placement across rows and columns is done.",
      "Learn to use grid in combination with flexbox to create complex layout using native CSS.",
    ],
    image: ImageFour,
  },
  {
    id: 6,
    direction: "Bootstrap",
    liId: 6,
    informa: [
      "Understand the difference between native CSS tooling and external frameworks.",
      "Learn to install the Bootstrap framework into your website.",
      "Understand the Bootstrap 12 column layout system.",
      "Learn to use Bootstrap components such as buttons, carousels, cards and navigation bars.",
      "Accessing and incorporating designer icons from Bootstrap.",
      "Find and use bootstrap code snippets, examples and pre-built templates to quickly created beautiful mobile-first websites.",
    ],
    image: ImageFive,
  },
  {
    id: 7,
    direction: "Tailwind",
    liId: 7,
    informa: [
      "Understand the difference between utility-first CSS classes and traditional styling approaches.",
      "Learn to install the Tailwind CSS framework into your website.",
      "Understand the responsive design system using Tailwind's utility classes.",
      "Learn to use Tailwind components such as buttons, forms, modals and alerts.",
      "Accessing and incorporating designer icons with Tailwind-compatible icon libraries like Heroicons.",
    ],
    image: ImageSix,
  },
  {
    id: 8,
    direction: "Web Design",
    liId: 8,
    informa: [
      "Learn the fundamental principles of web design, UI and UX",
      "Understand colour theory and how to choose and use modern colour palettes to make your website look professional.",
      "Understand modern typography and choose free-forcommercial use typefaces to make your website user friendly and stylish.",
      "Learn to manage user attention using the key principles of User Interface (UI) design.",
      "Learn to design user friendly websites by understanding User Experience (UX) design.",
    ],
    image: ImageSeven,
  },
  {
    id: 9,
    direction: "Document Object Model (DOM)",
    liId: 9,
    informa: [
      "Learn the tree structure of HTML based websites.",
      "Traverse through the document using object notation.",
      "Separation of concerns and coding best practices.",
      "Manipulate and change the HTML elements using your understanding of the DOM.",
    ],
    image: ImageEight,
  },
];
export const JavaScript = [
  {
    id: 1,
    direction: "Javascript",
    liId: 1,
    informa: [
      "Compare programming languages like JS with scripting and markup/stylesheet languages.",
      "Overview of JavaScript and its uses.",
      "Understand how to work with a code editor and IDEs.",
      "Basic syntax and data types in JavaScript.",
      "Variables and their scope (let, const).",
      "Data types (string, number, boolean, null, undefined, symbol)",
      "Operators and expressions, including arithmetic, comparison,and logical operators",
      "Control structures like if/else statements and loops",
      "The for loop and while loop",
      "The for...of loop to iterate over arrays",
      "The for...in loop to iterate over object properties",
      "Functions and their importance in JavaScript",
      "Function declaration and expression",
      "Function scope and closures",
      "Arrow functions and their syntax",
      "Higher-order functions",
      "Passing functions as arguments to other functions",
      "Returning functions from other functions",
      "The map, filter, and reduce methods on arrays and their use with higher-order functions",
      "Arrays and their methods",
      "Creating and accessing arrays",
      "Adding and removing elements from arrays",
      "The slice method for slicing arrays",
      "The concat method for concatenating arrays",
      "The indexOf and lastIndexOf methods for finding elements in arrays",
      "The map, filter, and reduce methods for manipulating arrays",
      "The spread syntax ... to spread the elements of an array into a new array or function call",
      "Object-oriented programming in JavaScript",
      "Creating objects with object literals",
      "Creating objects with constructor functions and the new keyword",
      "Creating objects with classes and the class keyword",
      "Adding and accessing properties and methods on objects",
      "The this keyword and how it works in object methods",
      "The super keyword for accessing parent class methods and properties",
      "Manipulating objects and arrays using methods and iteration",
      "The Object.keys and Object.values methods for getting the keys and values of an object as arrays",
      "The for...in loop for iterating over object properties",
      "The Object.assign method for copying properties from one object to another",
    ],
    image: jscript,
  },
];

export const ReactJs = [
  {
    id: 1,
    direction: "React Js",
    liId: 1,
    informa: [
      "Learn front-end development with React",
      "Understand when and how to use React Components.",
      "Learn to pass Props and work with them",
      "Learn to write JSX and understand JSX syntax.",
      "Learn about the React DOM.",
      "Learn State Management in React.",
      "Learn about React Hooks",
      "Learn about conditional rendering in React",
      "Understand the difference between class and functional components",
    ],
    image: ReactImage,
  },
];

export const NodeJs = [
  {
    id: 1,
    direction: "Node Js",
    liId: 1,
    informa: [
      "Explore the components of back-end development, working with an MVC framework",
      "Apply concepts like data types, objects, methods, objectoriented programming and classes in the context of backend development.",
      "Server-Side JavaScript",
      "Using Node on the command line.",
      "NPM.",
      "JavaScript Build Processes.",
      "Event Loop and Emitters",
      "File System Interaction",
      "Modules",
      "Native Node drivers",
    ],
    image: NodeImage,
  },
];
