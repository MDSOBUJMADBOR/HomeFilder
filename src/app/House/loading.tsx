
export default function Loading() {
  return (
    <div className="container mx-auto animate-pulse px-4 py-10">
      {/* Hero */}
      <div className="mb-10 h-72 rounded-2xl bg-gray-200" />

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border bg-white p-4"
          >
            <div className="mb-4 h-48 rounded-lg bg-gray-200" />

            <div className="mb-3 h-5 w-3/4 rounded bg-gray-200" />

            <div className="mb-4 h-4 w-1/2 rounded bg-gray-200" />

            <div className="mb-5 flex gap-2">
              <div className="h-4 w-16 rounded bg-gray-200" />
              <div className="h-4 w-16 rounded bg-gray-200" />
              <div className="h-4 w-16 rounded bg-gray-200" />
            </div>

            <div className="h-10 rounded-lg bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}