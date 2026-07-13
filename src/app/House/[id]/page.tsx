
import { HouseSingleData } from '@/lib/housedata/data';
import React from 'react';

const HousesDetailsPage = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
   
const houses = await HouseSingleData(id);
console.log(houses);


    return (
        <div>
            house details page
        </div>
    );
};

export default HousesDetailsPage;
