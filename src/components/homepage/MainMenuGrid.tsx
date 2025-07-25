const menu = [
  { label: "Education", icon: "🏫", href: "/education" },
  { label: "Skill", icon: "🧠", href: "/skills" },
  { label: "Quest", icon: "📜", href: "/quests" },
  { label: "Shop", icon: "🛒", href: "/shop" },
];

export function MainMenuGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {menu.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="bg-black/40 p-4 rounded-xl flex flex-col items-center hover:bg-black/60 transition"
        >
          <div className="text-3xl">{item.icon}</div>
          <div className="mt-2 text-sm">{item.label}</div>
        </a>
      ))}
    </div>
  );
}
