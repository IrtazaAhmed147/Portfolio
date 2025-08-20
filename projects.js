import ecommerceImg from "./src/assets/ecommerce.png";
import bookingImg from "./src/assets/booking.png";
import lmsImg from "./src/assets/lms.png";
import movieCornerImg from "./src/assets/movie corner.png";
import passwordManagerImg from "./src/assets/pass manager.png";
import forkifyImg from "./src/assets/forkify.png";
import todoImg from "./src/assets/todo.png";
import chatAppImg from "./src/assets/chat.png";
import newsMonkeyImg from "./src/assets/newmonkey.png";

const projects = [
  {
    id: 1,
    image: ecommerceImg,
    title: "E-Commerce Website",
    description:
      "A E-Commerce Website built with React.js and Redux, featuring dynamic product fetching, infinite scroll, cart & wishlist management, category-based browsing, search functionality, and a sleek responsive UI. This project strengthened my skills in API integration, state management, and UI optimization.",
    liveLink: "https://ecommerce-webreactjs.vercel.app/",
    githubLink: "https://github.com/IrtazaAhmed147/EcommerceWeb_ReactJS",
  },
  {
    id: 2,
    image: bookingImg,
    title: "Booking App",
    description:
      "A Full Stack Hotel Booking App built with the MERN Stack, featuring hotel search, real-time availability, and instant booking for users, along with a powerful admin dashboard for managing hotels, rooms, and users. Secure JWT authentication, responsive design, and a scalable architecture make it both user-friendly and efficient.",
    liveLink: "https://bookingappclientside.vercel.app/",
    githubLink: "https://github.com/IrtazaAhmed147/Booking_App",
  },
  {
    id: 3,
    image: lmsImg,
    title: "Learning Management System",
    description:
      "A fully responsive MERN stack learning platform built with React.js, Node.js, Express.js, MongoDB, and Material UI, allowing instructors to create courses and students to enroll, learn, and track progress.",
    liveLink: "",
    githubLink: "https://github.com/IrtazaAhmed147/LMS",
  },
  {
    id: 4,
    image: movieCornerImg,
    title: "Movie Corner",
    description:
      "Movie Website built with React JS where users can browse movies, add favorites to a watchlist, and rate them. It features seamless navigation with React Router, persistent watchlists via Local Storage, efficient API fetching with TanStack Query, and real-time movie data integration. This project sharpened my skills in state management, routing, and API integration.",
    liveLink: "https://moviepopcorn147.netlify.app/",
    githubLink: "https://github.com/IrtazaAhmed147/movieCorner-ReactJS",
  },
  {
    id: 5,
    image: passwordManagerImg,
    title: "Password Manager",
    description:
      "Password Manager built with React.js that lets users securely store, edit, update, and delete passwords. It supports quick copy-to-clipboard functionality and uses Local Storage for fast, secure, and offline access without relying on external servers.",
    liveLink: "https://pass-manager147.netlify.app/",
    githubLink: "https://github.com/IrtazaAhmed147/Password-Manager-ReactJS",
  },
  {
    id: 6,
    image: forkifyImg,
    title: "Forkify - Recipe App",
    description:
      "Forkify - Recipe Search App built with JavaScript, HTML, and CSS. Users can search recipes via API, view details with ingredients & cooking time, bookmark favorites, browse with pagination, and enjoy a fully responsive UI. This project helped me strengthen skills in API handling, async JavaScript, and building interactive UIs.",
    liveLink: "https://recipe147.netlify.app/",
    githubLink: "https://github.com/IrtazaAhmed147/Forkify-React-JS",
  },
  {
    id: 7,
    image: todoImg,
    title: "Todo List",
    description:
      "I created a Todo List Application where users can easily manage their daily tasks through a clean and interactive interface. The app allows users to add new tasks via a modal, set their status (complete/incomplete), assign priority levels (low, normal, high), and even choose a due date for better organization. Users can also edit or delete tasks anytime, with all data being securely stored in local storage for persistence. For state management, I implemented the Context API, ensuring smooth performance and scalability",
    liveLink: "https://todo-app-by-irtaza.netlify.app/",
    githubLink: "https://github.com/IrtazaAhmed147/TodoList",
  },
  {
    id: 8,
    image: chatAppImg,
    title: "Chat Application",
    description:
      "I've built a real-time Chat Application using ReactJS, Firebase, and Redux, where users can send and receive messages instantly through Firebase Firestore. The app features scalable state management with Redux, ensuring smooth performance, and a responsive UI for seamless usage across devices. This project helped me strengthen my skills in real-time communication, Firebase integration, and building scalable React applications with a clean and user-friendly design.",
    liveLink: "https://chatapp-b0b76.web.app/chats",
    githubLink: "https://github.com/IrtazaAhmed147/ChatApplication",
  },
  {
    id: 9,
    image: newsMonkeyImg,
    title: "News Monkey",
    description:
      "I built a ReactJS News Website that fetches real-time news, supports category-based filtering, and uses Context API for smooth state management. It's fully responsive and gave me hands-on experience with API integration, dynamic routing, responsive design, and error handling. Due to API restrictions, it runs locally instead of being hosted online.",
    githubLink: "https://github.com/IrtazaAhmed147/NewsMonkey",
  },
];
export default projects