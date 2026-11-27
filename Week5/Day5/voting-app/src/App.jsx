import React, { useState } from "react";

function App() {
  const initialLanguages = [
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 },
  ];

  const [languages, setLanguages] = useState(initialLanguages);

  const handleVote = (index) => {
    const updatedLanguages = languages.map((lang, i) =>
      i === index ? { ...lang, votes: lang.votes + 1 } : lang
    );
    setLanguages(updatedLanguages);
  };

  const handleReset = () => {
    setLanguages(initialLanguages);
  };

  const totalVotes = languages.reduce((sum, lang) => sum + lang.votes, 0);

  return (
    <div className="max-w-[500px] mx-auto my-10 px-8 pt-6 pb-8 border border-gray-200 rounded-md shadow-xs text-center font-sans bg-white">
      <h1 className="text-[32px] font-bold text-[#222] mb-6">
        Vote Your Language!
      </h1>

      <div className="flex flex-col items-center gap-2">
        {languages.map((language, index) => (
          <div
            key={index}
            className="w-full max-w-[360px] bg-[#ffe4c4] border border-[#555] px-5 py-5 flex justify-between items-center text-xl text-[#222]"
          >
            <span className="w-10 text-center font-medium">
              {language.votes}
            </span>
            <span className="flex-1 text-center">{language.name}</span>
            <button
              onClick={() => handleVote(index)}
              className="text-[#138808] text-xl cursor-pointer hover:opacity-75 active:scale-95 transition bg-transparent border-none p-0"
            >
              Click Here
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between max-w-[360px] mx-auto text-sm text-gray-600">
        <span>
          Total votes : <strong>{totalVotes}</strong>
        </span>
        <button
          onClick={handleReset}
          className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 text-gray-700 cursor-pointer transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;