

import { FeaturedData } from '@/lib/housedata/data';
import { Button } from '@heroui/react';
import Link from 'next/link';
import PropertyCard from './HouseCard';

const FeaturedBooks = async () => {

const Featured = await FeaturedData();
console.log(Featured,'Fetured');
    return (
       <div className='max-w-7xl mx-auto px-10 py-10'>
 <h1 className='font-bold text-3xl my-3'>Featured Books</h1>  

 <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-3'>
{
Featured?.map(Features => <PropertyCard key={Features?._id} book={Features}></PropertyCard>) 
}
</div> 
<div className='flex items-center justify-center pt-2'>
  <Link href="/houses"><Button variant='outline'>View All</Button></Link>
</div>
                    </div>
    );
};

export default FeaturedBooks;