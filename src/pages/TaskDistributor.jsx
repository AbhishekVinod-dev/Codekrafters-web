import { useState } from "react";

const MEMBERS = ["Member 1", "Member 2", "Member 3"];

export default function TaskDistributorPage() {
  const [tasks, setTasks] = useState("");
  const [result, setResult] = useState({});

  const distributeTasks = () => {
    const taskList = tasks
      .split("\n")
      .map((t) => t.trim())
      .filter(Boolean);

    const distribution = {};
    MEMBERS.forEach((m) => (distribution[m] = []));

    taskList.forEach((task, index) => {
      const member = MEMBERS[index % MEMBERS.length];
      distribution[member].push(task);
    });

    setResult(distribution);
  };

  return (
    <div
      className="min-h-screen px-6 py-10 transition-colors duration-300"
      style={{
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--secondary)" }}>
          🚀 Task Distributor
        </h1>

        <p className="mb-8" style={{ color: "var(--primary)" }}>
          Paste your tasks and we’ll automatically split them among 3 members.
        </p>

        {/* Input Card */}
        <div
          className="rounded-2xl p-6 shadow-lg mb-8"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
          }}
        >
          <label
            className="block mb-2 font-medium"
            style={{ color: "var(--secondary)" }}
          >
            Tasks (one per line)
          </label>

          <textarea
            placeholder={`Example:\nDesign landing page\nBuild API\nFix navbar\nWrite docs`}
            value={tasks}
            onChange={(e) => setTasks(e.target.value)}
            className="w-full h-36 p-4 rounded-xl resize-none focus:outline-none"
            style={{
              background: "var(--bg)",
              color: "white",
              border: "1px solid var(--border)",
            }}
          />

          <button
            onClick={distributeTasks}
            className="mt-6 w-full py-3 rounded-xl font-semibold transition hover:opacity-90"
            style={{
              background: "var(--primary)",
              color: "var(--bg)",
            }}
          >
            Auto Distribute
          </button>
        </div>

        {/* Results */}
        {Object.keys(result).length > 0 && (
          <>
            <h2
              className="text-2xl font-semibold mb-4"
              style={{ color: "var(--secondary)" }}
            >
              📋 Task Assignment
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {MEMBERS.map((member) => (
                <div
                  key={member}
                  className="rounded-2xl p-5 shadow transition hover:scale-[1.02]"
                  style={{
                    background: "var(--primary)",
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                >
                  <h3 className="text-lg font-semibold mb-3">{member}</h3>

                  <ul
                    className="space-y-2 text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {result[member]?.length > 0 ? (
                      result[member].map((task, i) => (
                        <li key={i} className="flex gap-2">
                          <span>•</span>
                          <span style={{ color: "var(--text)" }}>{task}</span>
                        </li>
                      ))
                    ) : (
                      <li className="italic">No tasks assigned</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
