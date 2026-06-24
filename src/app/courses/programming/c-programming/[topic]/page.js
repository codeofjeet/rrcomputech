const topics = {
  introduction: {
    title: "Introduction to C",
    content: "C is a powerful general-purpose programming language.",
  },

  operators: {
    title: "Operators",
    content:
      "Operators perform arithmetic, logical and relational operations.",
  },

  arrays: {
    title: "Arrays",
    content:
      "Arrays are collections of similar data stored in contiguous memory.",
  },
};

export default function TopicPage({ params }) {
  const topic = topics[params.topic];

  if (!topic) {
    return <h1>Topic Not Found</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-5">
        {topic.title}
      </h1>

      <p>{topic.content}</p>
    </div>
  );
}