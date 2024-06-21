export default function Nav() {
  const printNavButtons = () => {
    const navHeadings = [
      "home",
      "about",
      "projects",
      "technologies",
      "contact",
    ];
    return navHeadings.map((heading, index) => {
      const delay = index * 100; // Incremental delay, e.g., 0ms, 100ms, 200ms, etc.
      return (
        <button
          aria-label={`${heading} section`}
          key={`${heading}`}
          style={{
            animationDelay: `${delay}ms`,
            animation: "fadeIn 1s ease forwards",
          }}
          className="m-1 rounded-sm bg-transparent px-4 py-2  font-bold uppercase tracking-wider text-white opacity-0"
        >
          {heading}
        </button>
      );
    });
  };

  return (
    <nav className="fixed bottom-0 z-20 w-full bg-blurBlack">
      <div className="flex justify-start p-1">{printNavButtons()}</div>
    </nav>
  );
}
