import { useLoaderData } from "react-router-dom";
import placeHolderImage from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();

  const {
    cover_image,
    title,
    description,
    published_at,
    tags,
    body_html,
    url,
  } = blog;
  //   console.log("body_html content:", body_html);

  //   console.log(body_html);

  return (
    <div className=" mx-auto group border border-opacity-30 p-2 focus:no-underline ">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={cover_image || placeHolderImage}
      />

      <div className="flex flex-wrap py-6 gap-2 border-t border-dashed  dark:border-gray-600">
        {tags.map((tag) => (
          <a
            key={tag}
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
          >
            #{tag}
          </a>
        ))}
      </div>

      <div className=" space-y-2">
        <a
          href={url}
          target="_blank"
          className="text-3xl font-bold  group-hover:underline group-focus:underline"
        >
          {title}
        </a>

        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>

        {/* <Markdown rehypePlugins={[rehypeRaw]}> {body_html}</Markdown> */}
        {/* <Markdown># Hello World</Markdown> */}
      </div>
    </div>
  );
};

export default Content;