import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const links = [
  {
    href: "https://twitter.com/",
    label: "Twitter",
    icon: <FaTwitter className="h-6 w-6 text-blue-500" />,
  },
  {
    href: "https://youtube.com/",
    label: "YouTube",
    icon: <FaYoutube className="h-6 w-6 text-red-600" />,
  },
  {
    href: "https://github.com/Raitis128",
    label: "GitHub",
    icon: <FaGithub className="h-6 w-6 text-gray-900" />,
  },
  {
    href: "https://instagram.com/",
    label: "Instagram",
    icon: <FaInstagram className="h-6 w-6 text-pink-500" />,
  },
];

const Contact = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Contact Me</h2>

      <div className="flex items-center">
        {links.map(({ href, label, icon }, index) => (
          <a
            href={href}
            key={index}
            target="_blank"
            className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 mr-[2rem]"
          >
            {icon}
            <span className="text-lg">{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
