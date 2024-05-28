import React from "react";
import { Link } from "react-router-dom";
import Back from "../common/Back";

const Blog = () => {
  // Define the blog data as a constant
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

  return (
    <>
      <div>
        <Back
          name="Our Blogs"
          title="Our Blogs - Read our recent blogs today !!!"
          cover="https://media.istockphoto.com/id/1086352374/photo/minimal-work-space-creative-flat-lay-photo-of-workspace-desk-top-view-office-desk-with-laptop.jpg?s=612x612&w=0&k=20&c=JYBNQsgeO13lU1rq3kUWfD-W0Xii3sFyYzijvsntplY="
        />
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {blogsData.map((blog) => (
            <div
              key={blog.id}
              className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
            >
              <img
                src={blog.image || "https://via.placeholder.com/500"}
                className="object-cover w-full h-64"
                alt={blog.title}
              />
              <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <span className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700">
                    {blog.category}
                  </span>
                  <span className="text-gray-600">
                    {" "}
                    — {new Date(blog.date).toLocaleDateString()}
                  </span>
                </p>
                <Link
                  to={`/details/${blog.id}`}
                  className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  {blog.title}
                </Link>
                <p className="mb-2 text-gray-700">{blog.excerpt}</p>
                <Link
                  to={`/details/${blog.id}`}
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
