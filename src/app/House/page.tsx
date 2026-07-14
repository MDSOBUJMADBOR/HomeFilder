
import SearchFilter from '@/components/SearchFilter';
import page from '../page';
import { AllHousesData } from '@/lib/housedata/data';
import Link from 'next/link';

const Houses = async ({searchParams}) => {

const resolvedParams = await searchParams;
const page = Number(resolvedParams.page) || 1;
console.log(page,'page');
const products = await AllHousesData(page);
const productData = products?.data;
console.log(productData,'product');

const totalPage = products.totalPage;
const pages = Array.from({length: totalPage}, (_, i) => i + 1);
 console.log(pages,'pages');
console.log("products =", products);
console.log("totalPage =", products?.totalPage);
console.log("typeof totalPage =", typeof products?.totalPage);

    return (
 <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Explore House</h1>
        <p className="text-gray-500 mt-2">
          Discover your next favorite House
        </p>
      </div>

      {/* Search + Filter + Books */}
      <SearchFilter House={productData} />


      {/* Pagination */}
     

<div className="flex justify-center mt-14">
  <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white p-3 shadow-lg">

    {/* Previous */}
    <Link href={`/House?page=${page - 1}`}>
      <button
        disabled={page === 1}
        className={`px-4 py-2 rounded-xl font-medium transition-all duration-300
        ${
          page === 1
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white border hover:bg-blue-600 hover:text-white hover:shadow-md"
        }`}
      >
        ← Prev
      </button>
    </Link>

    {/* Page Numbers */}
    <div className="flex items-center gap-2">
      {pages.map((p) => (
        <Link key={p} href={`/House?page=${p}`}>
          <button
            className={`w-11 h-11 rounded-xl font-semibold transition-all duration-300
            ${
              p === page
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-110"
                : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
            }`}
          >
            {p}
          </button>
        </Link>
      ))}
    </div>

    {/* Next */}
    <Link href={`/House?page=${page + 1}`}>
      <button
        disabled={page === totalPage}
        className={`px-4 py-2 rounded-xl font-medium transition-all duration-300
        ${
          page === totalPage
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white border hover:bg-blue-600 hover:text-white hover:shadow-md"
        }`}
      >
        Next →
      </button>
    </Link>

  </div>
</div> 





    </div>
    );
};

export default Houses;
