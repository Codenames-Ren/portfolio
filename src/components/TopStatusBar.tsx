export function TopStatusBar() {
  return (
    <div className="flex justify-end items-center gap-4 bg-black/50 px-4 py-2 rounded-xl">
      <div className="flex items-center gap-1">
        <span role="img" aria-label="time">
          ⏳
        </span>
        <span>613</span>
      </div>
      <div className="flex items-center gap-1">
        <span role="img" aria-label="coin">
          🪙
        </span>
        <span>22,197</span>
      </div>
      <button className="text-xl">⚙️</button>
    </div>
  );
}
