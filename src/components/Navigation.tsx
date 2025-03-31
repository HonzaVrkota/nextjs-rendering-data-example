import Link from "next/link";

const Navigation = () => {
  const routes = [
    { path: "/", label: "Home" },
    { path: "/csr", label: "Client-Side Rendering" },
    { path: "/ssr", label: "Server-Side Rendering" },
    { path: "/ssg", label: "Static Site Generation" },
    { path: "/isr", label: "Incremental Static Regeneration" },
    { path: "/server-components", label: "Server Components" },
  ];

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <h1 className="text-white text-2xl font-bold mb-4 sm:mb-0">
            Next.js Rendering Strategies
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
