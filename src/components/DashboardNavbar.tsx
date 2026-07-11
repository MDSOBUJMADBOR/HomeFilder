
import Link from 'next/link';


const DashboardNavbar = () => {
    return (
        <Link href={'/'}>
        <div className=' text-2xl font-bold text-white  border-b-1 p-2 lg:p-4 w-full bg-blue-950'>
            HomeFinder 
        </div>
        </Link>
    );
};

export default DashboardNavbar;