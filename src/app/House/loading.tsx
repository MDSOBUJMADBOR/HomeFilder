
export default function Loading() {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto w-full max-w-7xl animate-pulse px-5 py-10 sm:px-8 sm:py-14 lg:px-8">
        {/* Hero Skeleton */}
        <div className="mb-10 w-full">
          <div className="h-64 w-full rounded-2xl bg-slate-200 sm:h-72 lg:h-80" />
        </div>

        {/* Section Heading Skeleton */}
        <div className="mb-7">
          <div className="mb-3 h-8 w-56 rounded-lg bg-slate-200" />
          <div className="h-4 w-80 max-w-full rounded bg-slate-100" />
        </div>

        {/* Property Cards */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              {/* Image */}
              <div className="mb-4 h-48 w-full rounded-xl bg-slate-200 sm:h-52" />

              {/* Title */}
              <div className="mb-3 h-5 w-3/4 rounded-md bg-slate-200" />

              {/* Location / Price */}
              <div className="mb-4 h-4 w-1/2 rounded-md bg-slate-100" />

              {/* Property Features */}
              <div className="mb-5 flex gap-2">
                <div className="h-4 w-16 rounded bg-slate-100" />
                <div className="h-4 w-16 rounded bg-slate-100" />
                <div className="h-4 w-16 rounded bg-slate-100" />
              </div>

              {/* Button */}
              <div className="h-10 w-full rounded-xl bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

