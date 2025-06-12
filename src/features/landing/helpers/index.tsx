import {
  FaDocker,
  FaNodeJs,
  FaReact,
  FiCode,
  FiTool,
  JavaScriptIcon,
  PythonIcon,
  SiGraphql,
  SiJest,
  SiMongodb,
  SiPostgresql,
  TypeScriptIcon,
} from "../../../assets/icons";
import sample_img from "../../../assets/sample.webp";

export const portfolioData = {
  hero: {
    name: "John Olatubosun",
    tagline: "Building Scalable APIs and Robust Backend Systems",
    cta1: "View My Projects",
    cta2: "Get in Touch",
  },
  skills: {
    backend: [
      { name: "Node.js", icon: <FaNodeJs className='text-green-500' /> },
      { name: "Express.js", icon: <FiCode /> },
    ],
    frontend: [
      { name: "React.js", icon: <FaReact className='text-blue-500' /> },
    ],
    languages: [
      {
        name: "JavaScript",
        icon: <JavaScriptIcon className='h-3 w-3 text-yellow-400' />,
      },
      {
        name: "TypeScript",
        icon: <TypeScriptIcon className='h-4 w-4 text-blue-600' />,
      },
      { name: "Python", icon: <PythonIcon className='text-blue-300' /> },
    ],
    databases: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className='text-blue-400' />,
      },
      { name: "MongoDB", icon: <SiMongodb className='text-green-600' /> },
    ],
    apis: [
      { name: "RESTful APIs", icon: <FiCode /> },
      { name: "GraphQL", icon: <SiGraphql className='text-pink-500' /> },
    ],
    tools: [
      { name: "Docker", icon: <FaDocker className='text-blue-600' /> },
      { name: "Jest", icon: <SiJest className='text-red-600' /> },
      { name: "CI/CD", icon: <FiTool /> },
    ],
  },
  about: {
    story:
      "From a fascination with how data moves across the internet to building complex server-side applications, my journey into software development has been driven by a passion for problem-solving. I thrive on the challenge of designing and implementing efficient, scalable, and secure backend systems. My focus is on writing clean, maintainable code that forms the backbone of modern web applications. I am always eager to learn new technologies and take on challenging projects that push the boundaries of my skills.",
  },
  contact: {
    email: "johntubson@gmail.com",
    linkedin: "https://www.linkedin.com/in/john-olatubosun-89411227a/",
    github: "https://github.com/johntubson",
  },

  projects: [
    {
      title: "E-commerce Platform API",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Stripe"],
      liveLink: "#",
      repoLink: "#",
      context:
        "A multi-vendor e-commerce startup needed a robust backend to handle product inventory, user accounts, and secure transactions. The existing system was slow and lacked critical security features.",
      task: "My task was to design and build a new RESTful API from scratch. Key responsibilities included creating a secure authentication system, designing a scalable database schema for products and orders, and integrating a third-party payment gateway.",
      action:
        "I developed the API using Node.js and Express.js, implementing JWT for stateless authentication and authorization. For the database, I chose MongoDB for its flexibility with product catalogs and designed an efficient schema. I integrated the Stripe API for payment processing, ensuring all sensitive data was handled securely. I also wrote a suite of integration tests using Jest and Supertest to ensure API reliability.",
      result:
        "The new API improved average response times by 40%. It now securely handles over 10,000 API requests per day and has successfully processed thousands of transactions. The modular design has also reduced the time to implement new features by 25%.",
      diagramUrls: [sample_img, sample_img, sample_img],
      codeSnippets: [
        {
          title: "JWT Authentication Middleware",
          lang: "javascript",
          code: `const authMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};`,
        },
        {
          title: "Stripe Payment Intent",
          lang: "javascript",
          code: `router.post('/payment', auth, async (req, res) => {
  const { amount, id } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: 'Software purchase',
      payment_method: id,
      confirm: true,
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});`,
        },
      ],
    },
    {
      title: "Real-time Chat Application",
      technologies: ["Node.js", "Socket.IO", "React", "Redis", "PostgreSQL"],
      liveLink: "#",
      repoLink: "#",
      context:
        "A community platform wanted to add a real-time chat feature to increase user engagement. The challenge was to support a high number of concurrent users without performance degradation.",
      task: "I was responsible for the entire backend implementation. This involved setting up a WebSocket server, designing a database schema for messages and user sessions, and ensuring the system could scale.",
      action:
        "I used Node.js with Socket.IO for real-time, bidirectional communication. To handle session management and message caching for scalability, I integrated Redis. For persistent storage, I chose PostgreSQL due to its reliability and structured data capabilities, designing a schema optimized for fast message retrieval. The backend was containerized using Docker for easy deployment and scaling.",
      result:
        "The chat service now supports up to 5,000 concurrent users with an average message latency of under 200ms. User engagement on the platform increased by 30% within the first month of launch.",
      diagramUrls: [
        "https://placehold.co/800x600/1a202c/9ca3af?text=WebSocket+Architecture",
      ],
      codeSnippets: [
        {
          title: "Socket.IO Connection Handler",
          lang: "javascript",
          code: `io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('joinRoom', ({ username, room }) => {
    socket.join(room);
    // Persist user session with Redis
    redisClient.sadd(\`room:\${room}\`, username);

    socket.broadcast
      .to(room)
      .emit('message', \`\${username} has joined the chat\`);
  });
});`,
        },
      ],
    },
  ],
};

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "about", title: "About" },
  { id: "contact", title: "Contact" },
];
