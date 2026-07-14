export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-1 text-center">
          <h2 className="text-xl font-semibold text-gray-900">
            Loading...
          </h2>
          <p className="text-sm text-gray-500">
            Please wait while we prepare your content.
          </p>
        </div>
      </div>
    </div>
  );
}