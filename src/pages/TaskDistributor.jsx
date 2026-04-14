// import { useState } from "react";

// const MEMBERS = ["Member 1", "Member 2", "Member 3"];

// export default function TaskDistributorPage() {
//   const [tasks, setTasks] = useState("");
//   const [result, setResult] = useState({});

//   const distributeTasks = () => {
//     const taskList = tasks
//       .split("\n")
//       .map((t) => t.trim())
//       .filter(Boolean);

//     const distribution = {};
//     MEMBERS.forEach((m) => (distribution[m] = []));

//     taskList.forEach((task, index) => {
//       const member = MEMBERS[index % MEMBERS.length];
//       distribution[member].push(task);
//     });

//     setResult(distribution);
//   };

//   return (
//     <div
//       className="min-h-screen px-6 py-10 transition-colors duration-300"
//       style={{
//         background: "var(--bg)",
//         color: "var(--text)",
//       }}
//     >
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <h1 className="text-4xl font-bold mb-2" style={{ color: "var(--secondary)" }}>
//           🚀 Task Distributor
//         </h1>

//         <p className="mb-8" style={{ color: "var(--primary)" }}>
//           Paste your tasks and we’ll automatically split them among 3 members.
//         </p>

//         {/* Input Card */}
//         <div
//           className="rounded-2xl p-6 shadow-lg mb-8"
//           style={{
//             background: "var(--card)",
//             border: "1px solid var(--border)",
//           }}
//         >
//           <label
//             className="block mb-2 font-medium"
//             style={{ color: "var(--secondary)" }}
//           >
//             Tasks (one per line)
//           </label>

//           <textarea
//             placeholder={`Example:\nDesign landing page\nBuild API\nFix navbar\nWrite docs`}
//             value={tasks}
//             onChange={(e) => setTasks(e.target.value)}
//             className="w-full h-36 p-4 rounded-xl resize-none focus:outline-none"
//             style={{
//               background: "var(--bg)",
//               color: "white",
//               border: "1px solid var(--border)",
//             }}
//           />

//           <button
//             onClick={distributeTasks}
//             className="mt-6 w-full py-3 rounded-xl font-semibold transition hover:opacity-90"
//             style={{
//               background: "var(--primary)",
//               color: "var(--bg)",
//             }}
//           >
//             Auto Distribute
//           </button>
//         </div>

//         {/* Results */}
//         {Object.keys(result).length > 0 && (
//           <>
//             <h2
//               className="text-2xl font-semibold mb-4"
//               style={{ color: "var(--secondary)" }}
//             >
//               📋 Task Assignment
//             </h2>

//             <div className="grid md:grid-cols-3 gap-6">
//               {MEMBERS.map((member) => (
//                 <div
//                   key={member}
//                   className="rounded-2xl p-5 shadow transition hover:scale-[1.02]"
//                   style={{
//                     background: "var(--primary)",
//                     border: "1px solid var(--border)",
//                     color: "var(--text)",
//                   }}
//                 >
//                   <h3 className="text-lg font-semibold mb-3">{member}</h3>

//                   <ul
//                     className="space-y-2 text-sm"
//                     style={{ color: "var(--text-muted)" }}
//                   >
//                     {result[member]?.length > 0 ? (
//                       result[member].map((task, i) => (
//                         <li key={i} className="flex gap-2">
//                           <span>•</span>
//                           <span style={{ color: "var(--text)" }}>{task}</span>
//                         </li>
//                       ))
//                     ) : (
//                       <li className="italic">No tasks assigned</li>
//                     )}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
import { useState } from "react";

export default function TaskDistributorPage() {
  const [members, setMembers] = useState([""]);
  const [tasks, setTasks] = useState("");
  const [result, setResult] = useState({});

  /* ===== MEMBER INPUT HANDLING ===== */
  const updateMember = (index, value) => {
    const updated = [...members];
    updated[index] = value;
    setMembers(updated);
  };

  const addMemberField = () => {
    setMembers([...members, ""]);
  };

  const removeMemberField = (index) => {
    const updated = members.filter((_, i) => i !== index);
    setMembers(updated.length ? updated : [""]);
  };

  /* ===== DISTRIBUTE TASKS ===== */
  const distributeTasks = () => {
    const cleanMembers = members.map((m) => m.trim()).filter(Boolean);
    if (cleanMembers.length === 0) return;

    const taskList = tasks
      .split("\n")
      .map((t) => t.trim())
      .filter(Boolean);

    const distribution = {};
    cleanMembers.forEach((m) => (distribution[m] = []));

    taskList.forEach((task, index) => {
      const member = cleanMembers[index % cleanMembers.length];
      distribution[member].push(task);
    });

    setResult(distribution);
  };

  return (
    <div
      className="min-h-screen px-6 py-12"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold mb-3" style={{ color: "var(--secondary)" }}>
            🚀 Task Distributor
          </h1>
          <p className="opacity-80">Enter members and distribute tasks automatically.</p>
        </div>

        {/* ===== MEMBER INPUT CARD ===== */}
        <div
          className="rounded-3xl p-8 shadow-xl mb-8"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <h2 className="text-xl font-bold mb-4" style={{ color: "var(--primary)" }}>
            Members
          </h2>

          <div className="space-y-3">
            {members.map((member, i) => (
              <div key={i} className="flex gap-2">
                <input
                  type="text"
                  placeholder={`Member ${i + 1} name`}
                  value={member}
                  onChange={(e) => updateMember(i, e.target.value)}
                  className="flex-1 px-4 py-2 rounded-xl focus:outline-none"
                  style={{
                    background: "var(--bg)",
                    color: "var(--text)",
                    border: "1px solid var(--border)",
                  }}
                />

                <button
                  onClick={() => removeMemberField(i)}
                  className="px-3 rounded-xl"
                  style={{ background: "var(--secondary)", color: "#000" }}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={addMemberField}
            className="mt-4 px-4 py-2 rounded-xl font-semibold"
            style={{ background: "var(--primary)", color: "#fff" }}
          >
            + Add Member
          </button>
        </div>

        {/* ===== TASK INPUT CARD ===== */}
        <div
          className="rounded-3xl p-8 shadow-xl mb-10"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <label className="block mb-3 font-semibold" style={{ color: "var(--secondary)" }}>
            Tasks (one per line)
          </label>

          <textarea
            placeholder={`Example:\nDesign landing page\nBuild API\nFix navbar`}
            value={tasks}
            onChange={(e) => setTasks(e.target.value)}
            className="w-full h-40 p-4 rounded-2xl resize-none focus:outline-none"
            style={{
              background: "var(--bg)",
              color: "var(--text)",
              border: "1px solid var(--border)",
            }}
          />

          <button
            onClick={distributeTasks}
            className="mt-6 w-full py-3 rounded-2xl font-semibold"
            style={{ background: "var(--primary)", color: "#fff" }}
          >
            Auto Distribute
          </button>
        </div>

        {/* ===== RESULTS ===== */}
        {Object.keys(result).length > 0 && (
          <>
            <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: "var(--secondary)" }}>
              📋 Task Assignment
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(result).map(([member, tasks]) => (
                <div
                  key={member}
                  className="rounded-3xl p-6 shadow-lg"
                  style={{ background: "var(--card)", border: "1px solid var(--border)" }}
                >
                  <h3 className="text-xl font-bold mb-4" style={{ color: "var(--primary)" }}>
                    {member}
                  </h3>

                  <ul className="space-y-2 text-sm">
                    {tasks.length ? (
                      tasks.map((task, i) => (
                        <li key={i} className="flex gap-2">
                          <span style={{ color: "var(--secondary)" }}>•</span>
                          <span>{task}</span>
                        </li>
                      ))
                    ) : (
                      <li className="italic opacity-60">No tasks assigned</li>
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
