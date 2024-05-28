import React from "react";
import { useParams } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const blogsData = [
  {
    id: 1,
    title: "Visit the East",
    excerpt:
      "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.",
    content:
      "Full content of the blog post goes here. This is a detailed description of the blog post.",
    category: "traveling",
    date: "2020-12-28",
    author: "John Doe",
    authorBio:
      "John is an avid traveler and blogger who loves sharing his adventures.",
    image:
      "https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  },
  {
    id: 2,
    title: "Simple is better",
    excerpt:
      "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.",
    content:
      "Full content of the blog post goes here. This is a detailed description of the blog post.",
    category: "traveling",
    date: "2020-12-28",
    author: "Jane Smith",
    authorBio:
      "Jane is a minimalist who writes about the beauty of simplicity.",
    image:
      "https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 3,
    title: "Film It!",
    excerpt:
      "Sed ut perspiciatis unde omnis iste natus error sit sed quia consequuntur magni voluptatem doloremque.",
    content:
      "Full content of the blog post goes here. This is a detailed description of the blog post.",
    category: "traveling",
    date: "2020-12-28",
    author: "Mark Lee",
    authorBio:
      "Mark is a filmmaker who travels the world capturing stunning visuals.",
    image:
      "https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogsData.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Main Content */}
          <div className="w-full md:w-3/4 bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={blog.image || "https://via.placeholder.com/1200x400"}
              alt="Blog cover"
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                {blog.title}
              </h1>
              <p className="text-gray-500 text-sm mb-6">
                Posted on {new Date(blog.date).toLocaleDateString()} by{" "}
                {blog.author}
              </p>
              <div className="prose max-w-none prose-lg">
                <p>{blog.content}</p>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="w-full md:w-1/4 mt-8 md:mt-0 md:ml-6">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                About the Author
              </h2>
              <p className="text-gray-600">
                {blog.authorBio || "No bio available."}
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    <FaFacebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
                  >
                    <FaInstagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 transition-colors duration-300"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 transition-colors duration-300"
                  >
                    <FaWhatsapp className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            {/* Add more sidebar content if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
