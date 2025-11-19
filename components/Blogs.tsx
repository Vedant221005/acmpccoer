"use client";

import React, { useState } from "react";

interface Blog {
  id: number;
  title: string;
  description: string;
  fullContent: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
  slug: string;
}

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const blogs: Blog[] = [
    {
      id: 1,
      title: "Getting Started with Google Cloud",
      description:
        "Learn the basics of Google Cloud Platform and how to deploy your first application in minutes.",
      fullContent:
        "Google Cloud Platform (GCP) is a suite of cloud computing services offered by Google. In this comprehensive guide, we'll walk you through the essentials of getting started with GCP.\n\nWhy Google Cloud?\n- Global Infrastructure: Deploy your applications in multiple regions worldwide\n- Managed Services: Focus on your code, not infrastructure management\n- AI and ML: Built-in machine learning capabilities\n- Cost Effective: Pay only for what you use\n\nGetting Started:\n1. Create a Google Cloud account\n2. Set up your first project\n3. Configure billing\n4. Deploy your first application\n\nNext Steps:\nExplore Compute Engine, App Engine, and Cloud Functions for different use cases.",
      author: "John Doe",
      date: "Nov 15, 2025",
      image: "/blogs/blog1.jpg",
      category: "Cloud",
      readTime: "5 min read",
      slug: "getting-started-google-cloud",
    },
    {
      id: 2,
      title: "Web Development Best Practices",
      description:
        "Discover essential web development practices to build scalable, maintainable, and performant applications.",
      fullContent:
        "Building great web applications requires following industry best practices. This guide covers everything you need to know.\n\nPerformance Optimization:\n- Minimize CSS and JavaScript\n- Optimize images\n- Use CDNs for content delivery\n- Implement caching strategies\n\nCode Quality:\n- Write clean, readable code\n- Use version control\n- Implement automated testing\n- Follow naming conventions\n\nSecurity:\n- Validate all user input\n- Use HTTPS everywhere\n- Implement proper authentication\n- Keep dependencies updated\n\nAccessibility:\n- Ensure semantic HTML\n- Add ARIA labels\n- Test with screen readers\n- Support keyboard navigation",
      author: "Jane Smith",
      date: "Nov 10, 2025",
      image: "/blogs/blog2.jpg",
      category: "Web Development",
      readTime: "8 min read",
      slug: "web-dev-best-practices",
    },
    {
      id: 3,
      title: "Introduction to Machine Learning",
      description:
        "A beginner-friendly guide to understanding machine learning concepts and their real-world applications.",
      fullContent:
        "Machine Learning is transforming how we solve problems. Let's dive into the fundamentals.\n\nWhat is Machine Learning?\nMachine Learning is a subset of Artificial Intelligence that enables computers to learn from data without being explicitly programmed.\n\nTypes of Machine Learning:\n- Supervised Learning: Learning from labeled data\n- Unsupervised Learning: Finding patterns in unlabeled data\n- Reinforcement Learning: Learning through rewards and penalties\n\nCommon Algorithms:\n- Linear Regression\n- Decision Trees\n- Neural Networks\n- K-Means Clustering\n\nReal-World Applications:\n- Recommendation systems\n- Image recognition\n- Natural language processing\n- Predictive analytics",
      author: "Mike Johnson",
      date: "Nov 5, 2025",
      image: "/blogs/blog3.jpg",
      category: "AI/ML",
      readTime: "10 min read",
      slug: "intro-to-ml",
    },
    {
      id: 4,
      title: "React Hooks Deep Dive",
      description:
        "Master React Hooks and learn how to write cleaner, more efficient React components.",
      fullContent:
        "React Hooks revolutionized how we write React components. Let's explore them in depth.\n\nWhat are Hooks?\nHooks are functions that let you use state and other React features in functional components.\n\nCommon Hooks:\n- useState: Manage component state\n- useEffect: Handle side effects\n- useContext: Access context values\n- useReducer: Complex state management\n- useCallback: Memoize functions\n- useMemo: Memoize values\n\nCustom Hooks:\nCreate your own hooks to reuse stateful logic across components.\n\nBest Practices:\n- Only call hooks at the top level\n- Only call hooks from React functions\n- Use ESLint plugin for hooks\n- Keep hooks focused and simple",
      author: "Sarah Williams",
      date: "Oct 28, 2025",
      image: "/blogs/blog4.jpg",
      category: "React",
      readTime: "7 min read",
      slug: "react-hooks-deep-dive",
    },
    {
      id: 5,
      title: "Understanding API Design",
      description:
        "Learn how to design robust, user-friendly APIs that scale with your application.",
      fullContent:
        "Good API design is crucial for building scalable applications. Here's what you need to know.\n\nRESTful Principles:\n- Use HTTP methods correctly (GET, POST, PUT, DELETE)\n- Design meaningful resource URLs\n- Use proper HTTP status codes\n- Implement versioning\n\nSecurity:\n- Implement authentication (OAuth, JWT)\n- Rate limiting\n- Input validation\n- CORS configuration\n\nDocumentation:\n- Keep docs updated\n- Provide code examples\n- Use tools like Swagger/OpenAPI\n- Document error responses\n\nScalability:\n- Design for pagination\n- Implement caching\n- Use database indexes\n- Monitor performance",
      author: "Tom Brown",
      date: "Oct 20, 2025",
      image: "/blogs/blog5.jpg",
      category: "Backend",
      readTime: "6 min read",
      slug: "api-design-guide",
    },
    {
      id: 6,
      title: "DevOps Essentials",
      description:
        "Explore the fundamentals of DevOps and how to streamline your development pipeline.",
      fullContent:
        "DevOps bridges the gap between development and operations. Let's explore the essentials.\n\nCore Principles:\n- Collaboration between teams\n- Automation of processes\n- Continuous integration\n- Continuous deployment\n\nKey Tools:\n- Version Control: Git\n- CI/CD: Jenkins, GitLab CI\n- Containerization: Docker\n- Orchestration: Kubernetes\n- Monitoring: Prometheus, ELK\n\nBest Practices:\n- Automate repetitive tasks\n- Monitor everything\n- Keep systems simple\n- Learn from failures\n- Focus on feedback loops",
      author: "Emily Davis",
      date: "Oct 15, 2025",
      image: "/assets/blog-6.jpg",
      category: "DevOps",
      readTime: "9 min read",
      slug: "devops-essentials",
    },
  ];

  return (
    <>
      <section className="min-h-screen bg-black py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Blogs
            </h1>
            <div className="h-1 w-21 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 rounded-full"></div>
            <p className="text-gray-300 text-lg mt-4">
              Insights, tutorials, and stories from our community
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => setSelectedBlog(blog)}
                className="h-full rounded-xl overflow-hidden bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer group hover:scale-105"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gray-800">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Category Badge */}
                  {/* <div className="absolute top-4 right-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {blog.category}
                    </span>
                  </div> */}
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col h-[calc(100%-192px)]">
                  {/* Title */}
                  <h2 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                    {blog.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 grow">
                    {blog.description}
                  </p>

                  {/* Meta Information */}
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                        {blog.author.charAt(0)}
                      </div>
                      <span className="text-gray-400 text-sm ml-2">{blog.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Dialog/Modal */}
      {selectedBlog && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedBlog(null)}
        >
          <div
            className="bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-xl font-bold text-white flex-1 pr-4">
                {selectedBlog.title}
              </h2>
              <button
                onClick={() => setSelectedBlog(null)}
                className="text-gray-400 hover:text-white text-xl transition cursor-pointer flex-shrink-0"
              >
                ✕
              </button>
            </div>

            {/* Modal Content - Scrollable without scrollbar */}
            <div className="flex-1 overflow-y-scroll scrollbar-hide p-6">
              <div className="text-gray-300 leading-relaxed text-sm">
                {selectedBlog.fullContent.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blogs;
