import { useState } from "react";

const COLORS = {
  "tertiary-dim": "#504f4f",
  "error-dim": "#b92902",
  "surface-container-low": "#fff0c4",
  "error": "#b02500",
  "on-primary-container": "#594a00",
  "on-surface-variant": "#6d5a00",
  "primary-fixed-dim": "#edc600",
  "outline": "#8c7500",
  "error-container": "#f95630",
  "tertiary": "#5c5b5b",
  "primary-container": "#fdd400",
  "primary": "#6d5a00",
  "surface": "#fff6e1",
  "background": "#fff6e1",
  "surface-container-highest": "#ffdb43",
  "surface-container": "#ffe794",
  "surface-container-high": "#ffe170",
  "on-error": "#ffefec",
  "on-error-container": "#520c00",
  "primary-fixed": "#fdd400",
  "outline-variant": "#ccab00",
  "on-surface": "#382e00",
  "on-primary": "#fff2ce",
  "surface-variant": "#ffdb43",
  "on-background": "#382e00",
  "inverse-surface": "#130e00",
  "surface-dim": "#fad100",
};

const INITIAL_TASKS = {
  pending: [
    {
      id: 284,
      title: "Design System Audit & Visual Refinement",
      priority: "Medium",
      lead: "Marcus V.",
      members: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB_8Ge7PKJ0zz4kPZiGHdKQRI0Ke3FT0zT58aqTa_5Ma3uskyvFphbHZEpGax8-zpYbRzoQIePySGIbARYkD87i03yR51_i-P30krzJzCw7iUdLWa_Oi_UMql8Ti33FG5vWKzUeWJXBO35ugN8A00wrxD9PUd8m67IpnPgvovjD0Q8vcfsJbDyilcwPVG9wUnZ0oGj_wsY9FOpembg-fJVA7MNT6azlCemS2L9rgFcbVkLhhym0KsGZr4R41BeMlQZnD7fnBW0f18Q",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuABBBAK0YSFi69IYa9ZhyIoMEVrRj0ROSjnRBGKDH4JtJRfQDZnWul0vv6Pm8Y9Z0c7khdSErzwiqY384dk7D7l277cQoLd4AKbe_rSiVXMOLebIl-QkJ8zMBb9jz3ayxJT61d4XkkGX0TStAmSCLEFlhOjjCUH1dFNaaKK2FiGfbytDs1fP7JAz3ZLBrsLlAfCnq5_UqGMRo5qhk7I1hyPZyZa52IIJq2kkS36NQ9jf6aYmMrYPyLViM2bps9C9mMiNry4cKbIfAE",
      ],
      extra: 3,
      description: "",
      deadline: "",
    },
    {
      id: 285,
      title: "User Research & Persona Mapping",
      priority: "Low",
      lead: "Priya K.",
      members: [],
      extra: 1,
      description: "",
      deadline: "",
    },
  ],
  inProgress: [
    {
      id: 291,
      title: "API Integration for Distribution Hub",
      priority: "Urgent",
      lead: "Sarah J.",
      timeLeft: "2h left",
      members: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCgdDt568YEDVzkBFeYMS8bOZcdJwbMGmm155UsxOOsAb4iJzHuQcI0nIUEY5zu_jcjGUU3MZDyb4s8KGoHvmfkIQyKCm5Die0TVyRwMqkF3GUbGkPSVkOHGTIubMBEAtPTFxE-RfpqyTDnPiXGImfKLXFEEUpB6AuuW4Q9hEnWDdFEBZdlEvZTfMceMUgonqPgH5FQVcWf8bBk85_8P7wkpVGNsI_GSCHLdypg7tIbjfMx2drc6WgYGsi1ua17u6GI6H7MsDlUlJc",
      ],
      extra: 1,
      description: "",
      deadline: "",
    },
  ],
  completed: [
    {
      id: 201,
      title: "Q4 Resource Planning",
      priority: "Done",
      lead: "",
      finalizedDate: "Oct 24th",
      members: [],
      extra: 0,
      description: "",
      deadline: "",
    },
    {
      id: 202,
      title: "Brand Identity Refresh",
      priority: "Done",
      lead: "",
      finalizedDate: "Oct 18th",
      members: [],
      extra: 0,
      description: "",
      deadline: "",
    },
  ],
  blocked: [
    {
      id: 301,
      title: "Client Feedback Implementation",
      priority: "High Risk",
      lead: "",
      blockedReason: "Waiting for brand assets from external partner.",
      overdue: "Overdue 3d",
      members: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDyZ9z59-7e3aGKzH4ygJp6lvm4MYk0fxbs0ZMc3phIfjDsl-YojROk1hmUJXZldR8VZpNcNlU7-66z9Rp5odPQ3wwuA5qj1LaAggrZsAHIcSqU-8KXS4PLCEuh1gyLiiVlP5MblRTNOkEzkclDmB9Zydrn6TNvkRcRAoOtW7ccLXmHZ9kgCAkHYL8xiikb1St2OPIVMqfLOwOlGt084jl-LuWgprSarH4Ry1LaGszQ3zl71IX5FyjbfX7oq-ihxBSJW7VJ6je6Cbs",
      ],
      extra: 0,
      description: "",
      deadline: "",
    },
  ],
};

const TEAM_MEMBERS = [
  {
    name: "Alex Chen",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCG1Ech8zgGngTqVobJoRbIuH-WWQGG3H-VSvQJ-e8mXgVPlQlSOnS6-ShVSfizhgo5D1M1RurD_WHXwXde7UEdiG4lqK1aZ_EA6Wu1bV-RiUe8nH-OGjhlLxLIRYz0YlzYb9wofdEi5cZuTas0Xnyn89QxYCtFdmAgX5jSkdyp093P1d8plNa3mqh5RokHi--4Jk7kNsrOK_feXaIMkYGYBg3siMKXSi0KDbPGSHYwnsJVbWNK7NkTkV5yNxhjVOYXXsCdtmMoVow",
  },
  {
    name: "Sarah J.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuABBBAK0YSFi69IYa9ZhyIoMEVrRj0ROSjnRBGKDH4JtJRfQDZnWul0vv6Pm8Y9Z0c7khdSErzwiqY384dk7D7l277cQoLd4AKbe_rSiVXMOLebIl-QkJ8zMBb9jz3ayxJT61d4XkkGX0TStAmSCLEFlhOjjCUH1dFNaaKK2FiGfbytDs1fP7JAz3ZLBrsLlAfCnq5_UqGMRo5qhk7I1hyPZyZa52IIJq2kkS36NQ9jf6aYmMrYPyLViM2bps9C9mMiNry4cKbIfAE",
  },
  {
    name: "Marcus V.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgdDt568YEDVzkBFeYMS8bOZcdJwbMGmm155UsxOOsAb4iJzHuQcI0nIUEY5zu_jcjGUU3MZDyb4s8KGoHvmfkIQyKCm5Die0TVyRwMqkF3GUbGkPSVkOHGTIubMBEAtPTFxE-RfpqyTDnPiXGImfKLXFEEUpB6AuuW4Q9hEnWDdFEBZdlEvZTfMceMUgonqPgH5FQVcWf8bBk85_8P7wkpVGNsI_GSCHLdypg7tIbjfMx2drc6WgYGsi1ua17u6GI6H7MsDlUlJc",
  },
  {
    name: "Jordan Smith",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyZ9z59-7e3aGKzH4ygJp6lvm4MYk0fxbs0ZMc3phIfjDsl-YojROk1hmUJXZldR8VZpNcNlU7-66z9Rp5odPQ3wwuA5qj1LaAggrZsAHIcSqU-8KXS4PLCEuh1gyLiiVlP5MblRTNOkEzkclDmB9Zydrn6TNvkRcRAoOtW7ccLXmHZ9kgCAkHYL8xiikb1St2OPIVMqfLOwOlGt084jl-LuWgprSarH4Ry1LaGszQ3zl71IX5FyjbfX7oq-ihxBSJW7VJ6je6Cbs",
  },
];

const PRIORITY_STYLES = {
  Urgent: { bg: "#fdd400", text: "#594a00" },
  High: { bg: "#f95630", text: "#520c00" },
  "High Risk": { bg: "#b02500", text: "#ffefec" },
  Medium: { bg: "rgba(255,219,67,0.2)", text: "#ffdb43", border: "1px solid rgba(255,219,67,0.3)" },
  Low: { bg: "rgba(255,255,255,0.08)", text: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.15)" },
  Done: { bg: "rgba(56,46,0,0.12)", text: "#382e00" },
};

function Icon({ name, style = {}, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`} style={style}>
      {name}
    </span>
  );
}

function MemberAvatars({ members = [], extra = 0 }) {
  return (
    <div className="flex -space-x-2">
      {members.slice(0, 3).map((src, i) => (
        <img
          key={i}
          src={src}
          className="w-8 h-8 rounded-full border-2"
          style={{ borderColor: "#382e00" }}
          alt="member"
        />
      ))}
      {extra > 0 && (
        <div
          className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold"
          style={{ borderColor: "#382e00", background: "rgba(253,212,0,0.2)", color: "#fdd400" }}
        >
          +{extra}
        </div>
      )}
    </div>
  );
}

function PendingCard({ task }) {
  const pStyle = PRIORITY_STYLES[task.priority] || PRIORITY_STYLES["Medium"];
  return (
    <div
      className="rounded-2xl p-6 group transition-all duration-300 cursor-pointer"
      style={{
        background: "#382e00",
        boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.28)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.18)"; }}
    >
      <div className="flex justify-between items-start mb-4">
        <span
          className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest"
          style={{ background: pStyle.bg, color: pStyle.text, border: pStyle.border }}
        >
          {task.priority}
        </span>
        <span className="text-[10px] font-bold" style={{ color: "rgba(255,240,196,0.3)" }}>#{task.id}</span>
      </div>
      <h4 className="font-bold text-lg leading-tight mb-4 transition-colors" style={{ color: "white" }}>
        {task.title}
      </h4>
      <div className="flex items-center gap-2 mb-6">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md" style={{ background: "rgba(255,255,255,0.05)" }}>
          <Icon name="star" style={{ color: "#fdd400", fontSize: 16, fontVariationSettings: "'FILL' 1" }} />
          <span className="text-xs font-semibold italic" style={{ color: "rgba(255,255,255,0.8)" }}>Lead: {task.lead}</span>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <MemberAvatars members={task.members} extra={task.extra} />
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 rounded-lg transition-colors" style={{ background: "rgba(255,255,255,0.05)", color: "white" }}>
            <Icon name="visibility" className="text-lg" />
          </button>
          <button className="p-2 rounded-lg" style={{ background: "#fdd400", color: "#594a00" }}>
            <Icon name="edit" className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

function InProgressCard({ task }) {
  return (
    <div
      className="rounded-2xl p-6 relative overflow-hidden transition-all duration-300 cursor-pointer"
      style={{
        background: "#382e00",
        borderLeft: "4px solid #fdd400",
        boxShadow: "0 8px 32px rgba(0,0,0,0.22)",
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.02)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16" style={{ background: "rgba(253,212,0,0.08)", filter: "blur(32px)" }} />
      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest" style={{ background: "#fdd400", color: "#594a00" }}>
          {task.priority}
        </span>
        {task.timeLeft && (
          <span className="text-[10px] font-bold flex items-center gap-1" style={{ color: "#fdd400" }}>
            <Icon name="schedule" style={{ fontSize: 12 }} />
            {task.timeLeft}
          </span>
        )}
      </div>
      <h4 className="font-bold text-lg leading-tight mb-4" style={{ color: "white" }}>{task.title}</h4>
      <div className="flex items-center gap-2 mb-6">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md" style={{ background: "rgba(255,255,255,0.05)" }}>
          <Icon name="workspace_premium" style={{ color: "#fdd400", fontSize: 16, fontVariationSettings: "'FILL' 1" }} />
          <span className="text-xs font-semibold italic" style={{ color: "rgba(255,255,255,0.8)" }}>Lead: {task.lead}</span>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <MemberAvatars members={task.members} extra={task.extra} />
        <button className="p-2 rounded-lg transition-colors" style={{ background: "rgba(255,255,255,0.05)", color: "white" }}>
          <Icon name="open_in_new" className="text-lg" />
        </button>
      </div>
    </div>
  );
}

function CompletedCard({ task }) {
  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: "#ffdb43",
        border: "2px dashed rgba(204,171,0,0.3)",
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest" style={{ background: "rgba(56,46,0,0.1)", color: "#382e00" }}>
          Done
        </span>
        <Icon name="check_circle" style={{ color: "#6d5a00", fontVariationSettings: "'FILL' 1" }} />
      </div>
      <h4 className="font-bold text-lg leading-tight mb-2" style={{ color: "#382e00" }}>{task.title}</h4>
      {task.finalizedDate && (
        <p className="text-xs font-medium" style={{ color: "#6d5a00" }}>Finalized on {task.finalizedDate}</p>
      )}
    </div>
  );
}

function BlockedCard({ task }) {
  return (
    <div
      className="rounded-2xl p-6 relative transition-all duration-300 cursor-pointer"
      style={{
        background: "#382e00",
        border: "2px solid rgba(185,41,2,0.4)",
        boxShadow: "0 0 20px rgba(185,41,2,0.1)",
      }}
    >
      <div
        className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce"
        style={{ background: "#b92902" }}
      >
        <Icon name="priority_high" style={{ fontSize: 20 }} />
      </div>
      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest" style={{ background: "#b02500", color: "#ffefec" }}>
          High Risk
        </span>
        <span className="text-[10px] font-black uppercase" style={{ color: "#f95630" }}>{task.overdue}</span>
      </div>
      <h4 className="font-bold text-lg leading-tight mb-4" style={{ color: "white" }}>{task.title}</h4>
      <div className="p-3 rounded-xl mb-4" style={{ background: "rgba(249,86,48,0.1)", border: "1px solid rgba(249,86,48,0.2)" }}>
        <p className="text-[11px] font-bold italic leading-relaxed" style={{ color: "#f95630" }}>
          Blocked by: {task.blockedReason}
        </p>
      </div>
      <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <MemberAvatars members={task.members} extra={task.extra} />
        <button
          className="px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-colors text-white"
          style={{ background: "#b02500" }}
          onMouseEnter={e => e.currentTarget.style.background = "#b92902"}
          onMouseLeave={e => e.currentTarget.style.background = "#b02500"}
        >
          Escalate
        </button>
      </div>
    </div>
  );
}

function KanbanColumn({ title, dot, count, children }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between px-2">
        <h3 className="font-black text-sm uppercase tracking-widest flex items-center gap-2" style={{ color: "#382e00" }}>
          <span className="w-2 h-2 rounded-full" style={{ background: dot }} />
          {title} ({count})
        </h3>
        <button style={{ color: "#6d5a00" }}>
          <Icon name="more_horiz" />
        </button>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function CreateTaskModal({ onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("pending");
  const [assignedMembers, setAssignedMembers] = useState([TEAM_MEMBERS[0], TEAM_MEMBERS[1]]);
  const [lead, setLead] = useState(TEAM_MEMBERS[3].name);
  const [showMemberPicker, setShowMemberPicker] = useState(false);
  const [showLeadPicker, setShowLeadPicker] = useState(false);
  const [error, setError] = useState("");

  const priorities = ["Low", "Medium", "High", "Urgent"];
  const statuses = [
    { value: "pending", label: "Pending" },
    { value: "inProgress", label: "In Progress" },
    { value: "blocked", label: "Blocked" },
  ];

  const toggleMember = (member) => {
    setAssignedMembers(prev =>
      prev.find(m => m.name === member.name)
        ? prev.filter(m => m.name !== member.name)
        : [...prev, member]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) { setError("Task title is required."); return; }
    setError("");
    const newTask = {
      id: Math.floor(Math.random() * 900) + 300,
      title: title.trim(),
      description,
      deadline,
      priority,
      lead: lead || "Unassigned",
      members: assignedMembers.map(m => m.img),
      extra: 0,
      ...(status === "inProgress" ? { timeLeft: deadline ? `Due ${deadline}` : "No deadline" } : {}),
      ...(status === "completed" ? { finalizedDate: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" }) } : {}),
      ...(status === "blocked" ? { blockedReason: "Pending review.", overdue: "New" } : {}),
    };
    onSubmit(status, newTask);
  };

  const priorityActive = {
    background: "linear-gradient(135deg, #fdd400 0%, #5f4e00 100%)",
    color: "#fff2ce",
    border: "none",
  };
  const priorityInactive = {
    background: "transparent",
    color: "rgba(255,255,255,0.5)",
    border: "1px solid rgba(253,212,0,0.25)",
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backdropFilter: "blur(24px) saturate(180%)", background: "rgba(19,14,0,0.85)" }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="w-full max-w-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row relative"
        style={{ background: "#ffffff", boxShadow: "0 40px 80px rgba(0,0,0,0.5)", maxHeight: "92vh" }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 transition-colors"
          style={{ color: "#382e00" }}
          onMouseEnter={e => e.currentTarget.style.color = "#fdd400"}
          onMouseLeave={e => e.currentTarget.style.color = "#382e00"}
        >
          <Icon name="close" style={{ fontSize: 28 }} />
        </button>

        {/* Side strip */}
        <div
          className="hidden md:block w-2 flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #fdd400 0%, #5f4e00 100%)" }}
        />

        {/* Content */}
        <div className="flex-1 p-8 md:p-10 overflow-y-auto" style={{ background: "#382e00" }}>
          <header className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#edc600" }}>New Assignment</span>
            <h2 className="text-4xl font-black tracking-tighter mt-1" style={{ color: "white" }}>Create Task</h2>
          </header>

          <form onSubmit={handleSubmit} className="space-y-7">
            {error && (
              <div className="px-4 py-3 rounded-xl text-sm font-bold" style={{ background: "rgba(176,37,0,0.2)", color: "#f95630", border: "1px solid rgba(249,86,48,0.3)" }}>
                {error}
              </div>
            )}

            {/* Title */}
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-widest" style={{ color: "#fdd400" }}>Task Title *</label>
              <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="w-full p-4 text-lg font-bold outline-none rounded-t-lg"
                placeholder="Enter high-velocity objective..."
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderBottom: "2px solid rgba(253,212,0,0.4)",
                  color: "white",
                }}
                onFocus={e => e.target.style.borderBottomColor = "#fdd400"}
                onBlur={e => e.target.style.borderBottomColor = "rgba(253,212,0,0.4)"}
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-widest" style={{ color: "#fdd400" }}>Description</label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                rows={3}
                className="w-full p-4 outline-none rounded-t-lg resize-none"
                placeholder="Context and key deliverables..."
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderBottom: "2px solid rgba(253,212,0,0.4)",
                  color: "white",
                }}
                onFocus={e => e.target.style.borderBottomColor = "#fdd400"}
                onBlur={e => e.target.style.borderBottomColor = "rgba(253,212,0,0.4)"}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Deadline */}
              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-widest" style={{ color: "#fdd400" }}>Deadline</label>
                <div className="relative">
                  <input
                    type="date"
                    value={deadline}
                    onChange={e => setDeadline(e.target.value)}
                    className="w-full p-4 outline-none rounded-t-lg appearance-none"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      borderBottom: "2px solid rgba(253,212,0,0.4)",
                      color: "white",
                      colorScheme: "dark",
                    }}
                    onFocus={e => e.target.style.borderBottomColor = "#fdd400"}
                    onBlur={e => e.target.style.borderBottomColor = "rgba(253,212,0,0.4)"}
                  />
                </div>
              </div>

              {/* Status */}
              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-widest" style={{ color: "#fdd400" }}>Status</label>
                <div className="flex gap-2">
                  {statuses.map(s => (
                    <button
                      key={s.value}
                      type="button"
                      onClick={() => setStatus(s.value)}
                      className="flex-1 py-2 px-1 rounded-full text-[10px] font-black uppercase tracking-widest transition-all"
                      style={status === s.value ? priorityActive : priorityInactive}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Priority */}
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-widest" style={{ color: "#fdd400" }}>Priority</label>
              <div className="flex gap-2">
                {priorities.map(p => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPriority(p)}
                    className="flex-1 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all"
                    style={priority === p ? priorityActive : priorityInactive}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Assign Members */}
            <div className="space-y-3">
              <label className="block text-xs font-black uppercase tracking-widest" style={{ color: "#fdd400" }}>Assign Members</label>
              <div className="flex flex-wrap gap-2">
                {assignedMembers.map(member => (
                  <div
                    key={member.name}
                    className="flex items-center gap-2 p-1 pr-3 rounded-full transition-all"
                    style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <img src={member.img} className="w-7 h-7 rounded-full" alt={member.name} />
                    <span className="text-white text-xs font-bold">{member.name}</span>
                    <button type="button" onClick={() => toggleMember(member)}>
                      <Icon name="close" style={{ fontSize: 14, color: "rgba(255,255,255,0.4)" }} />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => setShowMemberPicker(v => !v)}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                  style={{ border: "2px dashed #fdd400", color: "#fdd400" }}
                >
                  <Icon name="add" style={{ fontSize: 18 }} />
                </button>
              </div>
              {showMemberPicker && (
                <div className="rounded-xl p-3 space-y-1" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(253,212,0,0.2)" }}>
                  {TEAM_MEMBERS.filter(m => !assignedMembers.find(a => a.name === m.name)).map(member => (
                    <button
                      key={member.name}
                      type="button"
                      onClick={() => { toggleMember(member); }}
                      className="w-full flex items-center gap-3 p-2 rounded-lg transition-colors text-left"
                      style={{ color: "white" }}
                      onMouseEnter={e => e.currentTarget.style.background = "rgba(253,212,0,0.1)"}
                      onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                    >
                      <img src={member.img} className="w-7 h-7 rounded-full" alt={member.name} />
                      <span className="text-sm font-bold">{member.name}</span>
                    </button>
                  ))}
                  {TEAM_MEMBERS.filter(m => !assignedMembers.find(a => a.name === m.name)).length === 0 && (
                    <p className="text-xs text-center py-2" style={{ color: "rgba(255,255,255,0.4)" }}>All members assigned</p>
                  )}
                </div>
              )}
            </div>

            {/* Task Lead */}
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-widest" style={{ color: "#fdd400" }}>Task Lead</label>
              <div
                className="w-full p-4 rounded-t-lg flex justify-between items-center cursor-pointer"
                style={{ background: "rgba(255,255,255,0.05)", borderBottom: "2px solid rgba(253,212,0,0.4)" }}
                onClick={() => setShowLeadPicker(v => !v)}
              >
                <div className="flex items-center gap-3">
                  <Icon name="workspace_premium" style={{ color: "#fdd400", fontVariationSettings: "'FILL' 1" }} />
                  <span className="font-bold" style={{ color: "white" }}>{lead || "Select Lead"}</span>
                  {lead && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase" style={{ background: "#fdd400", color: "#594a00" }}>LEAD</span>
                  )}
                </div>
                <Icon name="expand_more" style={{ color: "rgba(255,255,255,0.4)", transform: showLeadPicker ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
              </div>
              {showLeadPicker && (
                <div className="rounded-xl p-2 space-y-1" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(253,212,0,0.2)" }}>
                  {TEAM_MEMBERS.map(member => (
                    <button
                      key={member.name}
                      type="button"
                      onClick={() => { setLead(member.name); setShowLeadPicker(false); }}
                      className="w-full flex items-center gap-3 p-2 rounded-lg transition-colors text-left"
                      style={{ color: "white", background: lead === member.name ? "rgba(253,212,0,0.15)" : "transparent" }}
                      onMouseEnter={e => { if (lead !== member.name) e.currentTarget.style.background = "rgba(253,212,0,0.08)"; }}
                      onMouseLeave={e => { if (lead !== member.name) e.currentTarget.style.background = "transparent"; }}
                    >
                      <img src={member.img} className="w-7 h-7 rounded-full" alt={member.name} />
                      <span className="text-sm font-bold">{member.name}</span>
                      {lead === member.name && <Icon name="check" style={{ color: "#fdd400", fontSize: 16, marginLeft: "auto" }} />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-5 rounded-xl font-black text-xl tracking-tighter flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
                style={{ background: "linear-gradient(135deg, #fdd400 0%, #5f4e00 100%)", color: "#fff2ce" }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 40px rgba(253,212,0,0.4)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
              >
                Create Task
                <Icon name="bolt" style={{ fontVariationSettings: "'FILL' 1", fontSize: 24 }} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function TaskDistributor() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [showModal, setShowModal] = useState(false);
  const [activeNav, setActiveNav] = useState("Board");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const totalTasks =
    tasks.pending.length + tasks.inProgress.length + tasks.completed.length + tasks.blocked.length;

  const handleCreateTask = (status, task) => {
    setTasks(prev => ({ ...prev, [status]: [...prev[status], task] }));
    setShowModal(false);
    setSuccessMsg(`Task "${task.title}" added to ${status === "inProgress" ? "In Progress" : status.charAt(0).toUpperCase() + status.slice(1)}!`);
    setTimeout(() => setSuccessMsg(""), 3500);
  };

  const navItems = [
    { label: "Board", icon: "dashboard" },
    { label: "Timeline", icon: "view_timeline" },
    { label: "Analytics", icon: "analytics" },
    { label: "Team", icon: "group" },
  ];

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; font-family: 'Inter', sans-serif; background: #fff6e1; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; font-family: 'Material Symbols Outlined'; font-style: normal; font-weight: normal; display: inline-block; line-height: 1; letter-spacing: normal; text-transform: none; white-space: nowrap; word-wrap: normal; direction: ltr; -webkit-font-feature-settings: 'liga'; -webkit-font-smoothing: antialiased; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(204,171,0,0.2); border-radius: 10px; }
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(1); opacity: 0.5; cursor: pointer; }
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-12px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in-down { animation: fadeInDown 0.3s ease forwards; }
        @keyframes bounceIn { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        .animate-bounce { animation: bounceIn 1s infinite; }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#fff6e1", fontFamily: "Inter, sans-serif" }}>

        {/* Top Nav */}
        <header
          className="w-full sticky top-0 z-50 flex justify-between items-center px-4 md:px-8 py-4"
          style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(20px) saturate(180%)",
            borderBottom: "2px solid #fad100",
            boxShadow: "0 20px 40px rgba(109,90,0,0.08)",
          }}
        >
          <div className="flex items-center gap-4 md:gap-12">
            <span className="text-2xl font-black italic tracking-tighter" style={{ color: "#382e00" }}>
              TaskDistributor
            </span>
            <div
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full w-80"
              style={{ background: "#fff0c4" }}
            >
              <Icon name="search" style={{ color: "#6d5a00" }} />
              <input
                className="bg-transparent border-none outline-none text-sm w-full font-medium"
                placeholder="Search tasks, teams, or status..."
                style={{ color: "#382e00" }}
              />
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-6">
            <button
              className="p-2 rounded-full transition-all duration-300"
              style={{ color: "#6d5a00" }}
              onMouseEnter={e => e.currentTarget.style.background = "#fdd400"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
            >
              <Icon name="notifications" />
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-4 md:px-6 py-2.5 rounded-full font-bold text-sm shadow-lg transition-all hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg, #fdd400 0%, #5f4e00 100%)", color: "#fff2ce" }}
            >
              <Icon name="add" style={{ fontSize: 18 }} />
              <span className="hidden sm:inline">Create Task</span>
            </button>
            <button
              className="md:hidden p-2 rounded-full"
              style={{ color: "#6d5a00" }}
              onClick={() => setMobileMenuOpen(v => !v)}
            >
              <Icon name={mobileMenuOpen ? "close" : "menu"} />
            </button>
          </div>
        </header>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 z-40 fade-in-down"
            style={{ background: "rgba(19,14,0,0.6)", backdropFilter: "blur(8px)" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="w-72 h-full p-8 space-y-2"
              style={{ background: "#ffe794" }}
              onClick={e => e.stopPropagation()}
            >
              <div className="mb-8">
                <h2 className="font-black text-xs uppercase tracking-widest" style={{ color: "#6d5a00", opacity: 0.6 }}>Project Alpha</h2>
                <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#6d5a00" }}>High-Velocity Mode</p>
              </div>
              {navItems.map(item => (
                <button
                  key={item.label}
                  onClick={() => { setActiveNav(item.label); setMobileMenuOpen(false); }}
                  className="w-full flex items-center gap-4 py-3 px-4 rounded-xl font-semibold text-sm uppercase tracking-widest transition-all"
                  style={{
                    background: activeNav === item.label ? "#fdd400" : "transparent",
                    color: activeNav === item.label ? "#382e00" : "#6d5a00",
                  }}
                >
                  <Icon name={item.icon} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex">
          {/* Side Nav */}
          <aside
            className="hidden md:flex flex-col w-64 fixed left-0 top-0 pt-24 pb-8 z-40 h-screen"
            style={{ background: "#ffe794" }}
          >
            <div className="px-6 mb-8">
              <h2 className="font-black text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(109,90,0,0.6)" }}>Project Alpha</h2>
              <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#6d5a00" }}>High-Velocity Mode</p>
            </div>
            <nav className="flex-1 space-y-1">
              {navItems.map(item => (
                <button
                  key={item.label}
                  onClick={() => setActiveNav(item.label)}
                  className="w-full flex items-center gap-4 py-3 px-6 font-semibold text-sm uppercase tracking-widest transition-all"
                  style={{
                    background: activeNav === item.label ? "#fdd400" : "transparent",
                    color: activeNav === item.label ? "#382e00" : "#6d5a00",
                    borderRadius: activeNav === item.label ? "0 9999px 9999px 0" : "0",
                    transform: activeNav === item.label ? "translateX(4px)" : "none",
                  }}
                  onMouseEnter={e => { if (activeNav !== item.label) e.currentTarget.style.background = "#ffdb43"; }}
                  onMouseLeave={e => { if (activeNav !== item.label) e.currentTarget.style.background = "transparent"; }}
                >
                  <Icon name={item.icon} />
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="mt-auto px-6 space-y-3">
              <button
                className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors"
                style={{ border: "2px solid rgba(109,90,0,0.2)", color: "#6d5a00" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(109,90,0,0.08)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                Invite Member
              </button>
              <div className="pt-4" style={{ borderTop: "1px solid rgba(109,90,0,0.1)" }}>
                {["settings", "help"].map(icon => (
                  <button
                    key={icon}
                    className="w-full flex items-center gap-3 py-2 text-xs font-bold uppercase tracking-widest transition-colors capitalize"
                    style={{ color: "#6d5a00" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#382e00"}
                    onMouseLeave={e => e.currentTarget.style.color = "#6d5a00"}
                  >
                    <Icon name={icon} style={{ fontSize: 18 }} />
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main */}
          <main className="flex-1 md:ml-64 p-4 md:p-8 custom-scrollbar" style={{ minHeight: "calc(100vh - 73px)" }}>

            {/* Success toast */}
            {successMsg && (
              <div
                className="fade-in-down mb-6 px-5 py-4 rounded-xl font-bold text-sm flex items-center gap-3"
                style={{ background: "#fdd400", color: "#382e00", boxShadow: "0 8px 24px rgba(253,212,0,0.3)" }}
              >
                <Icon name="check_circle" style={{ fontVariationSettings: "'FILL' 1" }} />
                {successMsg}
              </div>
            )}

            {/* Board Header */}
            <div className="mb-8 md:mb-10 flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div>
                  <h1 className="text-3xl md:text-5xl font-black tracking-tighter" style={{ color: "#382e00" }}>
                    {totalTasks} Tasks Remaining
                  </h1>
                  <p className="font-medium mt-1" style={{ color: "#6d5a00" }}>Project velocity is up by 12% this week.</p>
                </div>
                <div className="flex gap-3">
                  <button
                    className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2"
                    style={{ background: "#ffe170", color: "#382e00" }}
                  >
                    Status <Icon name="expand_more" style={{ fontSize: 16 }} />
                  </button>
                  <button
                    className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2"
                    style={{ background: "#ffe170", color: "#382e00" }}
                  >
                    Priority <Icon name="filter_list" style={{ fontSize: 16 }} />
                  </button>
                </div>
              </div>
              {/* Progress bar */}
              <div className="w-full h-3 rounded-full overflow-hidden" style={{ background: "#ffe794" }}>
                <div
                  className="h-full rounded-full relative overflow-hidden transition-all duration-700"
                  style={{ width: `${(tasks.completed.length / totalTasks) * 100}%`, background: "#fdd400" }}
                >
                  <div className="absolute inset-0 animate-pulse" style={{ background: "rgba(255,255,255,0.2)" }} />
                </div>
              </div>
              <p className="text-xs font-bold" style={{ color: "#6d5a00" }}>
                {tasks.completed.length} of {totalTasks} tasks completed ({Math.round((tasks.completed.length / totalTasks) * 100)}%)
              </p>
            </div>

            {/* Kanban Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              <KanbanColumn title="Pending" dot="#6d5a00" count={tasks.pending.length}>
                {tasks.pending.map(t => <PendingCard key={t.id} task={t} />)}
                {tasks.pending.length === 0 && <EmptyColumn label="No pending tasks" />}
              </KanbanColumn>

              <KanbanColumn title="In Progress" dot="#6d5a00" count={tasks.inProgress.length}>
                {tasks.inProgress.map(t => <InProgressCard key={t.id} task={t} />)}
                {tasks.inProgress.length === 0 && <EmptyColumn label="Nothing in progress" />}
              </KanbanColumn>

              <KanbanColumn title="Completed" dot="#5c5b5b" count={tasks.completed.length}>
                <div style={{ opacity: 0.85 }}>
                  {tasks.completed.map(t => <CompletedCard key={t.id} task={t} />)}
                </div>
                {tasks.completed.length === 0 && <EmptyColumn label="No completed tasks" />}
              </KanbanColumn>

              <KanbanColumn title="Blocked" dot="#b02500" count={tasks.blocked.length}>
                {tasks.blocked.map(t => <BlockedCard key={t.id} task={t} />)}
                {tasks.blocked.length === 0 && <EmptyColumn label="Nothing blocked" />}
              </KanbanColumn>
            </div>
          </main>
        </div>

        {/* Background decoration */}
        <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: -1, overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "25%", right: -80, width: 384, height: 384, background: "rgba(253,212,0,0.15)", borderRadius: "50%", filter: "blur(100px)" }} />
          <div style={{ position: "absolute", bottom: -80, left: -80, width: 500, height: 500, background: "rgba(255,231,148,0.2)", borderRadius: "50%", filter: "blur(120px)" }} />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <CreateTaskModal
          onClose={() => setShowModal(false)}
          onSubmit={handleCreateTask}
        />
      )}
    </>
  );
}

function EmptyColumn({ label }) {
  return (
    <div
      className="rounded-2xl h-32 flex items-center justify-center"
      style={{ border: "2px dashed rgba(204,171,0,0.3)", color: "rgba(109,90,0,0.4)", fontWeight: 700, fontSize: 13 }}
    >
      {label}
    </div>
  );
}