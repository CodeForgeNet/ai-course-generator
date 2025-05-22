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
    <div className="p-4 md:p-10">
      {/* Chapter Title */}
      <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-2 drop-shadow">
        {chapter?.name}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        {chapter?.about}
      </p>

      {/* Video */}
      {content?.videoId && (
        <div className="flex justify-center my-8">
          <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-purple-100 dark:border-gray-800 bg-white dark:bg-gray-900">
            <YouTube videoId={content?.videoId} opts={opts} />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="space-y-8">
        {content?.content.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-br from-purple-50 via-yellow-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950 rounded-2xl shadow-md border border-purple-100 dark:border-gray-800"
          >
            <h3 className="font-bold text-xl mb-2 text-purple-800 dark:text-yellow-200">
              {item.title}
            </h3>
            <div className="prose prose-purple dark:prose-invert max-w-none mb-3">
              <ReactMarkdown>{item.explanation}</ReactMarkdown>
            </div>
            {item.codeExample && (
              <div className="p-4 bg-slate-900 text-white rounded-lg mt-4 overflow-x-auto shadow-inner">
                <pre className="whitespace-pre-wrap text-sm">
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
