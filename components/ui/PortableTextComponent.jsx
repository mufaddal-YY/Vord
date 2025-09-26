import { FiCheckCircle } from "react-icons/fi";
import PortableText from "react-portable-text";
import { urlFor } from "@/sanity/lib/image";
import { projectId, dataset } from "@/sanity/env";

const myPortableTextComponents = {
  types: {
    image: ({ value }) => {
      const src =
        (value && value.asset && value.asset.url) ||
        (value && urlFor(value)?.url());
      if (!src) return null;
      return <img src={src} alt={value?.alt || "Image"} className="rounded-lg my-4 max-w-full h-auto" />;
    },
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url} className="callToActionInline">
          {value.text}
        </a>
      ) : (
        <div className="callToActionBlock">{value.text}</div>
      ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel} className="text-primary hover:underline">
          {children}
        </a>
      );
    },
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{children}</code>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    strikethrough: ({ children }) => <span className="line-through">{children}</span>,
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-900">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold mt-5 mb-2 text-gray-900">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-900">{children}</h4>,
    h5: ({ children }) => <h5 className="text-base font-semibold mt-3 mb-2 text-gray-900">{children}</h5>,
    h6: ({ children }) => <h6 className="text-sm font-semibold mt-3 mb-2 text-gray-900">{children}</h6>,
    normal: ({ children }) => {
      if (children.length === 1 && children[0] === "") {
        return <br />;
      }
      return <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>;
    },
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 italic text-gray-600 bg-gray-50">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-1 text-gray-700">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="special-list-item text-md flex lg:text-md list-none leading-snug py-2">
        <span>
          <FiCheckCircle className="mr-2 mt-1 text-md text-green-600" />{" "}
        </span>
        <span className="text-gray-700 leading-relaxed">{children}</span>
      </li>
    ),
  },
};

const PortableTextComponent = ({ content }) => {
  return (
    <div className="">
      <PortableText
        content={content}
        components={myPortableTextComponents}
        projectId={projectId}
        dataset={dataset}
        serializers={{
          h1: (props) => <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900" {...props} />,
          h2: (props) => <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-900" {...props} />,
          h3: (props) => <h3 className="text-xl font-semibold mt-5 mb-2 text-gray-900" {...props} />,
          h4: (props) => <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-900" {...props} />,
          h5: (props) => <h5 className="text-base font-semibold mt-3 mb-2 text-gray-900" {...props} />,
          h6: (props) => <h6 className="text-sm font-semibold mt-3 mb-2 text-gray-900" {...props} />,
          normal: ({ children }) => {
            if (children.length === 1 && children[0] === "") {
              return <br />;
            }
            return <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>;
          },
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 space-y-1 text-gray-700">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="special-list-item text-md flex lg:text-md list-none leading-snug py-2">
              <span>
                <FiCheckCircle className="mr-2 mt-1 text-md text-green-600" />{" "}
              </span>
              <span className="text-gray-700 leading-relaxed">{children}</span>
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-4 py-2 my-4 italic text-gray-600 bg-gray-50">
              {children}
            </blockquote>
          ),
        }}
      />
    </div>
  );
};

export default PortableTextComponent;
