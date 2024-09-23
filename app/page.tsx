import Link from "next/link";
import { splitCamelCase } from "@/utils/splitCamelCase";
import { getPages } from "@/utils/getPages";

const HomePage = () => {
  const pages = getPages();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-8 space-y-8">
      {/* About Section */}
      <div className="max-w-3xl mx-auto p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
        <h1 className="text-3xl font-bold mb-1">About</h1>
        <p className="text-lg p-4 rounded shadow-md">
          {`Welcome to my coding algorithms visualization site! I created this space
            to help myself — and anyone else interested — understand how different
            algorithms work. Here, you'll find interactive visualizations and simple
            explanations that break down complex concepts into digestible pieces.
            Whether you're just starting out or brushing up on your skills, I hope
            you find these tools helpful and enjoyable.`}
        </p>
      </div>

      {/* Available Pages Section */}
      <div className="max-w-3xl mx-auto p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-left">
        <h1 className="text-3xl font-bold mb-6">Available Pages</h1>
        <ul className="list-disc pl-5 text-left">
          {pages.map((page) => (
            <li key={page} className="text-xl">
              <Link
                href={`/${page}`}
                className="text-white hover:underline capitalize"
              >
                {splitCamelCase(page)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
