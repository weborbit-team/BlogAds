// Technology blogs
export { cloudComputingBlog } from "./technology/cloud-computing.js";
export { aiRevolutionBlog } from "./technology/ai-revolution.js";
export { quantumComputingBlog } from "./technology/quantum-computing.js";
export { fiveGConnectivityBlog } from "./technology/5g-connectivity.js";
export { cybersecurityRemoteBlog } from "./technology/cybersecurity-remote.js";

// Development blogs
export { react19Blog } from "./development/react-19.js";
export { scalableApisBlog } from "./development/scalable-apis.js";
export { javascriptPatternsBlog } from "./development/javascript-patterns.js";
export { dockerKubernetesBlog } from "./development/docker-kubernetes.js";
export { testingStrategiesBlog } from "./development/testing-strategies.js";

// Design blogs
export { aiWebDesignBlog } from "./design/ai-web-design.js";
export { designSystemsBlog } from "./design/design-systems.js";
export { accessibilityDesignBlog } from "./design/accessibility-design.js";
export { motionDesignBlog } from "./design/motion-design.js";
export { colorTheoryBlog } from "./design/color-theory.js";

// Business blogs
export { digitalTransformationBlog } from "./business/digital-transformation.js";

// Marketing blogs
export { digitalMarketingTrendsBlog } from "./marketing/digital-marketing-trends.js";

// Lifestyle blogs
export { workLifeBalanceBlog } from "./lifestyle/work-life-balance.js";

// Detailed blog data mapping
const detailedBlogs = {
  "675e4a2b8f1c2d3e4f567890": () =>
    import("./technology/cloud-computing.js").then((m) => m.cloudComputingBlog),
  "675e4a2c8f1c2d3e4f567891": () =>
    import("./technology/ai-revolution.js").then((m) => m.aiRevolutionBlog),
  "675e4a2d8f1c2d3e4f567892": () =>
    import("./technology/quantum-computing.js").then(
      (m) => m.quantumComputingBlog
    ),
  "675e4a2e8f1c2d3e4f567893": () =>
    import("./technology/5g-connectivity.js").then(
      (m) => m.fiveGConnectivityBlog
    ),
  "675e4a2f8f1c2d3e4f567894": () =>
    import("./technology/cybersecurity-remote.js").then(
      (m) => m.cybersecurityRemoteBlog
    ),
  "675e4a308f1c2d3e4f567895": () =>
    import("./development/react-19.js").then((m) => m.react19Blog),
  "675e4a318f1c2d3e4f567896": () =>
    import("./development/scalable-apis.js").then((m) => m.scalableApisBlog),
  "675e4a328f1c2d3e4f567897": () =>
    import("./development/javascript-patterns.js").then(
      (m) => m.javascriptPatternsBlog
    ),
  "675e4a338f1c2d3e4f567898": () =>
    import("./development/docker-kubernetes.js").then(
      (m) => m.dockerKubernetesBlog
    ),
  "675e4a348f1c2d3e4f567899": () =>
    import("./development/testing-strategies.js").then(
      (m) => m.testingStrategiesBlog
    ),
  "675e4a358f1c2d3e4f56789a": () =>
    import("./design/ai-web-design.js").then((m) => m.aiWebDesignBlog),
  "675e4a368f1c2d3e4f56789b": () =>
    import("./design/design-systems.js").then((m) => m.designSystemsBlog),
  "675e4a378f1c2d3e4f56789c": () =>
    import("./design/accessibility-design.js").then(
      (m) => m.accessibilityDesignBlog
    ),
  "675e4a388f1c2d3e4f56789d": () =>
    import("./design/motion-design.js").then((m) => m.motionDesignBlog),
  "675e4a398f1c2d3e4f56789e": () =>
    import("./design/color-theory.js").then((m) => m.colorTheoryBlog),
  "675e4a3a8f1c2d3e4f56789f": () =>
    import("./business/digital-transformation.js").then(
      (m) => m.digitalTransformationBlog
    ),
  "675e4a3f8f1c2d3e4f5678a4": () =>
    import("./marketing/digital-marketing-trends.js").then(
      (m) => m.digitalMarketingTrendsBlog
    ),
  "675e4a448f1c2d3e4f5678a9": () =>
    import("./lifestyle/work-life-balance.js").then(
      (m) => m.workLifeBalanceBlog
    ),
};

// Function to get detailed blog data
export const getBlogDetail = async (id) => {
  const loader = detailedBlogs[id];
  if (loader) {
    return await loader();
  }

  // Fallback to main blog data if detailed version not available
  const { blogPosts } = await import("../blogs.js");
  return blogPosts.find((post) => post.id === id) || null;
};

// Get available blog IDs (only blogs with detailed data)
const getAvailableBlogIds = () => Object.keys(detailedBlogs);

// Export function to get available blog IDs
export { getAvailableBlogIds };

// API Response structure for blog posts
export const blogApiResponse = {
  success: true,
  message: "Blogs fetched successfully",
  data: {
    posts: [
      // Technology
      {
        id: 1,
        slug: "future-of-cloud-computing",
        title: "The Future of Cloud Computing",
        excerpt:
          "Exploring emerging trends in cloud technology and infrastructure.",
        content: null,
        featuredImage:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
        publishedAt: "2024-12-15T09:00:00Z",
        updatedAt: "2024-12-15T09:00:00Z",
        author: {
          id: 1,
          name: "David Brown",
          email: "david.brown@readgo.com",
          avatar: "/images/authors/david-brown.jpg",
          bio: "Cloud Architecture Expert with 10+ years experience",
        },
        category: {
          id: 1,
          name: "Technology",
          slug: "technology",
          color: "#2563eb",
        },
        tags: ["cloud", "serverless", "edge-computing", "multi-cloud"],
        readTime: "8 min read",
        views: 1247,
        likes: 89,
        comments: 23,
        status: "published",
        seoTitle: "The Future of Cloud Computing - Trends & Innovations 2024",
        seoDescription:
          "Discover the latest cloud computing trends including serverless, edge computing, and multi-cloud strategies shaping the future of technology.",
        featured: true,
      },
      {
        id: 2,
        slug: "ai-revolution-2024",
        title: "AI Revolution in 2024",
        excerpt:
          "How artificial intelligence is transforming industries worldwide.",
        content: null,
        featuredImage:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
        publishedAt: "2024-12-14T08:00:00Z",
        updatedAt: "2024-12-14T08:00:00Z",
        author: {
          id: 2,
          name: "Sarah Tech",
          email: "sarah.tech@readgo.com",
          avatar: "/images/authors/sarah-tech.jpg",
          bio: "AI Technology Specialist and Industry Analyst",
        },
        category: {
          id: 1,
          name: "Technology",
          slug: "technology",
          color: "#2563eb",
        },
        tags: ["AI", "machine-learning", "automation", "innovation"],
        readTime: "10 min read",
        views: 1856,
        likes: 134,
        comments: 42,
        status: "published",
        seoTitle: "AI Revolution 2024 - Industry Transformation & Trends",
        seoDescription:
          "Discover how artificial intelligence is revolutionizing industries worldwide with breakthrough applications and innovations.",
        featured: true,
      },
      {
        id: 3,
        slug: "quantum-computing-breakthroughs",
        title: "Quantum Computing Breakthroughs",
        excerpt:
          "Latest advances in quantum computing and their real-world applications.",
        content: null,
        featuredImage:
          "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop",
        publishedAt: "2024-12-13T08:00:00Z",
        updatedAt: "2024-12-13T08:00:00Z",
        author: {
          id: 3,
          name: "Dr. Quantum",
          email: "quantum@readgo.com",
          avatar: "/images/authors/dr-quantum.jpg",
          bio: "Quantum Physics Researcher and Technology Evangelist",
        },
        category: {
          id: 1,
          name: "Technology",
          slug: "technology",
          color: "#2563eb",
        },
        tags: ["quantum", "computing", "cryptography", "research"],
        readTime: "12 min read",
        views: 892,
        likes: 67,
        comments: 15,
        status: "published",
        seoTitle:
          "Quantum Computing Breakthroughs - Real-World Applications 2024",
        seoDescription:
          "Explore the latest quantum computing advances and their applications in cryptography, drug discovery, and optimization problems.",
        featured: false,
      },
      {
        id: 4,
        slug: "5g-future-connectivity",
        title: "5G and Beyond: The Future of Connectivity",
        excerpt: "Exploring the impact of 5G networks and what comes next.",
        content: null,
        featuredImage:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
        publishedAt: "2024-12-12T08:00:00Z",
        updatedAt: "2024-12-12T08:00:00Z",
        author: {
          id: 8,
          name: "Network Pro",
          email: "network.pro@readgo.com",
          avatar: "/images/authors/network-pro.jpg",
          bio: "Telecommunications Engineer and 5G Technology Expert",
        },
        category: {
          id: 1,
          name: "Technology",
          slug: "technology",
          color: "#2563eb",
        },
        tags: ["5G", "connectivity", "IoT", "telecommunications"],
        readTime: "9 min read",
        views: 1123,
        likes: 87,
        comments: 21,
        status: "published",
        seoTitle: "5G and Beyond - The Future of Wireless Connectivity",
        seoDescription:
          "Explore the impact of 5G networks on industries and discover what comes next in wireless connectivity technology.",
        featured: false,
      },
      {
        id: 5,
        slug: "cybersecurity-remote-work",
        title: "Cybersecurity in the Age of Remote Work",
        excerpt: "Essential security practices for distributed teams.",
        content: null,
        featuredImage:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
        publishedAt: "2024-12-11T08:00:00Z",
        updatedAt: "2024-12-11T08:00:00Z",
        author: {
          id: 9,
          name: "SecureMax",
          email: "secure.max@readgo.com",
          avatar: "/images/authors/secure-max.jpg",
          bio: "Cybersecurity Consultant specializing in remote work security",
        },
        category: {
          id: 1,
          name: "Technology",
          slug: "technology",
          color: "#2563eb",
        },
        tags: [
          "cybersecurity",
          "remote-work",
          "zero-trust",
          "endpoint-security",
        ],
        readTime: "11 min read",
        views: 1567,
        likes: 123,
        comments: 38,
        status: "published",
        seoTitle:
          "Cybersecurity for Remote Work - Essential Security Practices",
        seoDescription:
          "Learn essential cybersecurity practices for distributed teams including zero-trust architecture and endpoint security.",
        featured: false,
      },

      // Development
      {
        id: 6,
        slug: "getting-started-react-19",
        title: "Getting Started with React 19",
        excerpt:
          "Learn about the latest features and improvements in React 19.",
        content: null,
        featuredImage:
          "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
        publishedAt: "2024-12-15T10:00:00Z",
        updatedAt: "2024-12-15T10:00:00Z",
        author: {
          id: 4,
          name: "John Doe",
          email: "john.doe@readgo.com",
          avatar: "/images/authors/john-doe.jpg",
          bio: "Senior Frontend Developer and React Expert",
        },
        category: {
          id: 2,
          name: "Development",
          slug: "development",
          color: "#059669",
        },
        tags: ["React", "JavaScript", "frontend", "performance"],
        readTime: "15 min read",
        views: 2341,
        likes: 189,
        comments: 56,
        status: "published",
        seoTitle:
          "Getting Started with React 19 - New Features & Migration Guide",
        seoDescription:
          "Learn about React 19's groundbreaking features including the React Compiler, enhanced Suspense, and migration strategies.",
        featured: true,
      },
      {
        id: 7,
        slug: "building-scalable-apis",
        title: "Building Scalable APIs",
        excerpt:
          "Best practices for creating robust and scalable API architectures.",
        content: null,
        featuredImage:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
        publishedAt: "2024-12-14T10:00:00Z",
        updatedAt: "2024-12-14T10:00:00Z",
        author: {
          id: 5,
          name: "Mike Johnson",
          email: "mike.johnson@readgo.com",
          avatar: "/images/authors/mike-johnson.jpg",
          bio: "Senior Backend Engineer with expertise in distributed systems",
        },
        category: {
          id: 2,
          name: "Development",
          slug: "development",
          color: "#059669",
        },
        tags: ["API", "REST", "GraphQL", "microservices", "scalability"],
        readTime: "13 min read",
        views: 1456,
        likes: 112,
        comments: 34,
        status: "published",
        seoTitle:
          "Building Scalable APIs - Best Practices & Architecture Guide",
        seoDescription:
          "Learn best practices for creating robust, scalable API architectures with REST, GraphQL, and microservices patterns.",
        featured: true,
      },
      {
        id: 8,
        slug: "modern-javascript-patterns",
        title: "Modern JavaScript Patterns",
        excerpt:
          "Advanced JavaScript patterns and techniques for modern development.",
        content: null,
        featuredImage:
          "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=400&fit=crop",
        publishedAt: "2024-12-13T10:00:00Z",
        updatedAt: "2024-12-13T10:00:00Z",
        author: {
          id: 10,
          name: "JS Master",
          email: "js.master@readgo.com",
          avatar: "/images/authors/js-master.jpg",
          bio: "JavaScript Expert and Frontend Architecture Specialist",
        },
        category: {
          id: 2,
          name: "Development",
          slug: "development",
          color: "#059669",
        },
        tags: ["JavaScript", "patterns", "async", "functional-programming"],
        readTime: "10 min read",
        views: 1789,
        likes: 145,
        comments: 42,
        status: "published",
        seoTitle:
          "Modern JavaScript Patterns - Advanced Development Techniques",
        seoDescription:
          "Master advanced JavaScript patterns including async/await, functional programming, and performance optimization techniques.",
        featured: false,
      },
      {
        id: 9,
        slug: "docker-kubernetes-mastery",
        title: "Docker and Kubernetes Mastery",
        excerpt: "Complete guide to containerization and orchestration.",
        content: null,
        featuredImage:
          "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=400&fit=crop",
        publishedAt: "2024-12-12T10:00:00Z",
        updatedAt: "2024-12-12T10:00:00Z",
        author: {
          id: 11,
          name: "DevOps Pro",
          email: "devops.pro@readgo.com",
          avatar: "/images/authors/devops-pro.jpg",
          bio: "DevOps Engineer specializing in containerization and orchestration",
        },
        category: {
          id: 2,
          name: "Development",
          slug: "development",
          color: "#059669",
        },
        tags: ["Docker", "Kubernetes", "containerization", "orchestration"],
        readTime: "16 min read",
        views: 2156,
        likes: 178,
        comments: 67,
        status: "published",
        seoTitle:
          "Docker and Kubernetes Mastery - Complete Containerization Guide",
        seoDescription:
          "Master Docker and Kubernetes with this comprehensive guide covering containerization, orchestration, and deployment strategies.",
        featured: true,
      },
      {
        id: 10,
        slug: "testing-strategies-modern-apps",
        title: "Testing Strategies for Modern Apps",
        excerpt: "Comprehensive testing approaches for reliable software.",
        content: null,
        featuredImage:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
        publishedAt: "2024-12-11T10:00:00Z",
        updatedAt: "2024-12-11T10:00:00Z",
        author: {
          id: 12,
          name: "Test Guru",
          email: "test.guru@readgo.com",
          avatar: "/images/authors/test-guru.jpg",
          bio: "Quality Assurance Expert and Testing Strategy Consultant",
        },
        category: {
          id: 2,
          name: "Development",
          slug: "development",
          color: "#059669",
        },
        tags: ["testing", "TDD", "automation", "quality-assurance"],
        readTime: "12 min read",
        views: 1432,
        likes: 119,
        comments: 35,
        status: "published",
        seoTitle: "Testing Strategies for Modern Apps - Complete Testing Guide",
        seoDescription:
          "Learn comprehensive testing strategies including unit testing, integration testing, and test-driven development for reliable software.",
        featured: false,
      },

      // Design
      {
        id: 11,
        slug: "ai-modern-web-design",
        title: "AI in Modern Web Design",
        excerpt:
          "How artificial intelligence is transforming web design practices.",
        content: null,
        featuredImage:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
        publishedAt: "2024-12-15T14:00:00Z",
        updatedAt: "2024-12-15T14:00:00Z",
        author: {
          id: 6,
          name: "Jane Smith",
          email: "jane.smith@readgo.com",
          avatar: "/images/authors/jane-smith.jpg",
          bio: "UX/UI Designer specializing in AI-powered design tools",
        },
        category: {
          id: 3,
          name: "Design",
          slug: "design",
          color: "#dc2626",
        },
        tags: ["AI", "web-design", "UX", "automation"],
        readTime: "9 min read",
        views: 1234,
        likes: 98,
        comments: 27,
        status: "published",
        seoTitle: "AI in Modern Web Design - Transforming Design Practices",
        seoDescription:
          "Discover how AI is revolutionizing web design through automated layouts, intelligent color palettes, and personalized experiences.",
        featured: false,
      },
      {
        id: 12,
        slug: "design-systems-at-scale",
        title: "Design Systems at Scale",
        excerpt:
          "Building and maintaining design systems for large organizations.",
        content: null,
        featuredImage:
          "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=400&fit=crop",
        publishedAt: "2024-12-14T14:00:00Z",
        updatedAt: "2024-12-14T14:00:00Z",
        author: {
          id: 7,
          name: "Design Lead",
          email: "design.lead@readgo.com",
          avatar: "/images/authors/design-lead.jpg",
          bio: "Design Systems Architect with 8+ years in enterprise design",
        },
        category: {
          id: 3,
          name: "Design",
          slug: "design",
          color: "#dc2626",
        },
        tags: ["design-systems", "components", "tokens", "documentation"],
        readTime: "14 min read",
        views: 987,
        likes: 78,
        comments: 19,
        status: "published",
        seoTitle: "Design Systems at Scale - Building Consistent UI Libraries",
        seoDescription:
          "Learn how to build and maintain design systems for large organizations with design tokens, component libraries, and governance models.",
        featured: false,
      },
      {
        id: 13,
        slug: "accessibility-first-design",
        title: "Accessibility-First Design",
        excerpt: "Creating inclusive digital experiences for all users.",
        content: null,
        featuredImage:
          "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop",
        publishedAt: "2024-12-13T14:00:00Z",
        updatedAt: "2024-12-13T14:00:00Z",
        author: {
          id: 13,
          name: "A11y Expert",
          email: "a11y.expert@readgo.com",
          avatar: "/images/authors/a11y-expert.jpg",
          bio: "Accessibility Specialist and Inclusive Design Advocate",
        },
        category: {
          id: 3,
          name: "Design",
          slug: "design",
          color: "#dc2626",
        },
        tags: ["accessibility", "inclusive-design", "WCAG", "UX"],
        readTime: "11 min read",
        views: 987,
        likes: 89,
        comments: 24,
        status: "published",
        seoTitle:
          "Accessibility-First Design - Creating Inclusive Digital Experiences",
        seoDescription:
          "Learn how to create accessible, inclusive digital experiences following WCAG guidelines and inclusive design principles.",
        featured: false,
      },
      {
        id: 14,
        slug: "motion-design-web",
        title: "Motion Design for Web",
        excerpt: "Enhancing user experience through thoughtful animations.",
        content: null,
        featuredImage:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
        publishedAt: "2024-12-12T14:00:00Z",
        updatedAt: "2024-12-12T14:00:00Z",
        author: {
          id: 14,
          name: "Motion Designer",
          email: "motion.designer@readgo.com",
          avatar: "/images/authors/motion-designer.jpg",
          bio: "Motion Designer specializing in web animations and micro-interactions",
        },
        category: {
          id: 3,
          name: "Design",
          slug: "design",
          color: "#dc2626",
        },
        tags: ["motion-design", "animation", "CSS", "user-experience"],
        readTime: "8 min read",
        views: 1345,
        likes: 102,
        comments: 28,
        status: "published",
        seoTitle: "Motion Design for Web - Creating Engaging User Experiences",
        seoDescription:
          "Learn how to enhance user experience through thoughtful web animations using CSS and JavaScript animation techniques.",
        featured: false,
      },
      {
        id: 15,
        slug: "color-theory-digital-design",
        title: "Color Theory in Digital Design",
        excerpt:
          "Understanding color psychology and application in digital interfaces.",
        content: null,
        featuredImage:
          "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=400&fit=crop",
        publishedAt: "2024-12-11T14:00:00Z",
        updatedAt: "2024-12-11T14:00:00Z",
        author: {
          id: 15,
          name: "Color Expert",
          email: "color.expert@readgo.com",
          avatar: "/images/authors/color-expert.jpg",
          bio: "Color Theory Specialist and Digital Design Consultant",
        },
        category: {
          id: 3,
          name: "Design",
          slug: "design",
          color: "#dc2626",
        },
        tags: ["color-theory", "psychology", "accessibility", "branding"],
        readTime: "10 min read",
        views: 1156,
        likes: 94,
        comments: 31,
        status: "published",
        seoTitle:
          "Color Theory in Digital Design - Psychology and Application Guide",
        seoDescription:
          "Master color theory for digital design including color psychology, accessibility considerations, and effective palette creation.",
        featured: false,
      },

      // Business
      {
        id: 16,
        slug: "digital-transformation-strategies",
        title: "Digital Transformation Strategies",
        excerpt: "Leading successful digital transformation initiatives.",
        content: null,
        featuredImage:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
        publishedAt: "2024-12-15T12:00:00Z",
        updatedAt: "2024-12-15T12:00:00Z",
        author: {
          id: 16,
          name: "Business Strategist",
          email: "business.strategist@readgo.com",
          avatar: "/images/authors/business-strategist.jpg",
          bio: "Digital Transformation Consultant with 15+ years experience",
        },
        category: {
          id: 4,
          name: "Business",
          slug: "business",
          color: "#7c3aed",
        },
        tags: [
          "digital-transformation",
          "strategy",
          "change-management",
          "innovation",
        ],
        readTime: "12 min read",
        views: 1876,
        likes: 145,
        comments: 38,
        status: "published",
        seoTitle:
          "Digital Transformation Strategies - Leading Successful Change",
        seoDescription:
          "Learn proven strategies for leading successful digital transformation initiatives in your organization.",
        featured: true,
      },
      {
        id: 17,
        title: "Remote Team Management",
        excerpt: "Best practices for managing distributed teams effectively.",
        date: "Dec 14, 2024",
        author: "Team Leader",
        category: "Business",
        readTime: "10 min read",
      },
      {
        id: 18,
        title: "Startup Funding Landscape 2024",
        excerpt: "Navigating the current investment environment for startups.",
        date: "Dec 13, 2024",
        author: "Venture Analyst",
        category: "Business",
        readTime: "13 min read",
      },
      {
        id: 19,
        title: "Customer Experience Excellence",
        excerpt: "Building customer-centric organizations that drive loyalty.",
        date: "Dec 12, 2024",
        author: "CX Specialist",
        category: "Business",
        readTime: "11 min read",
      },
      {
        id: 20,
        title: "Agile Business Operations",
        excerpt:
          "Implementing agile methodologies beyond software development.",
        date: "Dec 11, 2024",
        author: "Agile Coach",
        category: "Business",
        readTime: "9 min read",
      },

      // Marketing
      {
        id: 21,
        slug: "digital-marketing-trends-2024",
        title: "Digital Marketing Trends 2024",
        excerpt: "The latest trends shaping digital marketing strategies.",
        content: null,
        featuredImage:
          "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=400&fit=crop",
        publishedAt: "2024-12-15T11:00:00Z",
        updatedAt: "2024-12-15T11:00:00Z",
        author: {
          id: 21,
          name: "Sarah Wilson",
          email: "sarah.wilson@readgo.com",
          avatar: "/images/authors/sarah-wilson.jpg",
          bio: "Digital Marketing Expert and Strategy Consultant",
        },
        category: {
          id: 5,
          name: "Marketing",
          slug: "marketing",
          color: "#f59e0b",
        },
        tags: [
          "digital-marketing",
          "trends",
          "AI",
          "personalization",
          "social-commerce",
        ],
        readTime: "11 min read",
        views: 2134,
        likes: 178,
        comments: 45,
        status: "published",
        seoTitle:
          "Digital Marketing Trends 2024 - Latest Strategies & Insights",
        seoDescription:
          "Discover the latest digital marketing trends including AI personalization, privacy-first strategies, and social commerce growth.",
        featured: true,
      },
      {
        id: 22,
        title: "Content Marketing Mastery",
        excerpt:
          "Creating compelling content that drives engagement and conversions.",
        date: "Dec 14, 2024",
        author: "Content Pro",
        category: "Marketing",
        readTime: "13 min read",
      },
      {
        id: 23,
        title: "Social Media Strategy 2024",
        excerpt: "Building effective social media presence across platforms.",
        date: "Dec 13, 2024",
        author: "Social Media Expert",
        category: "Marketing",
        readTime: "10 min read",
      },
      {
        id: 24,
        title: "Email Marketing Renaissance",
        excerpt: "Modern email marketing strategies that deliver results.",
        date: "Dec 12, 2024",
        author: "Email Specialist",
        category: "Marketing",
        readTime: "9 min read",
      },
      {
        id: 25,
        title: "Performance Marketing Analytics",
        excerpt: "Data-driven approaches to marketing optimization.",
        date: "Dec 11, 2024",
        author: "Analytics Pro",
        category: "Marketing",
        readTime: "12 min read",
      },

      // Lifestyle
      {
        id: 26,
        slug: "work-life-balance-tech",
        title: "Work-Life Balance in Tech",
        excerpt:
          "Tips for maintaining healthy work-life balance in the tech industry.",
        content: null,
        featuredImage:
          "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=400&fit=crop",
        publishedAt: "2024-12-15T16:00:00Z",
        updatedAt: "2024-12-15T16:00:00Z",
        author: {
          id: 26,
          name: "Emily Davis",
          email: "emily.davis@readgo.com",
          avatar: "/images/authors/emily-davis.jpg",
          bio: "Wellness Coach specializing in tech industry professionals",
        },
        category: {
          id: 6,
          name: "Lifestyle",
          slug: "lifestyle",
          color: "#10b981",
        },
        tags: [
          "work-life-balance",
          "wellness",
          "tech-industry",
          "stress-management",
        ],
        readTime: "8 min read",
        views: 1567,
        likes: 134,
        comments: 42,
        status: "published",
        seoTitle: "Work-Life Balance in Tech - Wellness Tips for Professionals",
        seoDescription:
          "Learn practical strategies for maintaining healthy work-life balance while building a successful tech career.",
        featured: true,
      },
      {
        id: 27,
        title: "Remote Work Productivity Hacks",
        excerpt: "Maximizing productivity while working from home.",
        date: "Dec 14, 2024",
        author: "Productivity Guru",
        category: "Lifestyle",
        readTime: "10 min read",
      },
      {
        id: 28,
        title: "Digital Minimalism for Professionals",
        excerpt: "Reducing digital clutter to improve focus and well-being.",
        date: "Dec 13, 2024",
        author: "Mindful Tech",
        category: "Lifestyle",
        readTime: "9 min read",
      },
      {
        id: 29,
        title: "Building Healthy Habits",
        excerpt: "Science-based approaches to habit formation and maintenance.",
        date: "Dec 12, 2024",
        author: "Habit Coach",
        category: "Lifestyle",
        readTime: "11 min read",
      },
      {
        id: 30,
        title: "Mindfulness for Busy Professionals",
        excerpt:
          "Incorporating mindfulness practices into a demanding schedule.",
        date: "Dec 11, 2024",
        author: "Mindfulness Teacher",
        category: "Lifestyle",
        readTime: "7 min read",
      },
    ],
    totalPosts: 30,
    totalPages: 3,
    currentPage: 1,
    postsPerPage: 10,
    categories: [
      "Technology",
      "Development",
      "Design",
      "Business",
      "Marketing",
      "Lifestyle",
    ],
  },
  timestamp: "2024-12-15T10:30:00Z",
};

// Extract and filter posts for easy use (simulating API data extraction)
export const blogPosts = blogApiResponse.data.posts.filter((post) =>
  getAvailableBlogIds().includes(post.id)
);
