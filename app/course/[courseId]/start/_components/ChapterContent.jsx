import React from "react";
import YouTube from "react-youtube";
import ReactMarkdown from "react-markdown";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 0,
  },
};

function ChapterContent({ chapter, content }) {
  return (
    <div className="p-10">
      <h2 className="font-medium text-2xl">{chapter?.name}</h2>
      <p className="text-gray-500">{chapter?.about}</p>

      {/* Video */}
      <div className="flex justify-center my-6">
        <YouTube videoId={content?.videoId} opts={opts} />
      </div>

      {/* Content */}
      <div>
        {content?.content.map((item, index) => (
          // <div className="p-5 bg-slate-100 mb-10 rounded-lg">
          <div key={index} className="p-5 bg-slate-100 mb-10 rounded-lg">
            <h2 className="font-medium text-lg">{item.title}</h2>
            {/* <p className="whitespace-pre-wrap">{item.explanation}</p> */}
            <ReactMarkdown>{item.explanation}</ReactMarkdown>
            {item.codeExample && (
              <div className="p-4 bg-slate-800 text-white rounded-lg mt-3">
                <pre>
                  <code>{item.codeExample}</code>
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterContent;
