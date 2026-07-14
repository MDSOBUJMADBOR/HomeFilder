"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#3B82F6", "#10B981", "#F59E0B"];

export default function AdminOverviewPage() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [stats, setStats] = useState({
    houses: 0,
    myHouses: 0,
    favorites: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchDashboardData = async () => {
      try {
        const [houseRes, myHouseRes, favoriteRes] =
          await Promise.all([
            fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/housepost`
            ),

            fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/housepost/email/${user.email}`
            ),

            fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/favorites/email/${user.email}`
            ),
          ]);

        const houses = await houseRes.json();
        const myHouses = await myHouseRes.json();
        const favorites = await favoriteRes.json();


        setStats({
          houses: houses?.length || 0,
          myHouses: myHouses?.length || 0,
          favorites: favorites?.length || 0,
        });

      } catch (error) {
        console.error("Dashboard Error:", error);
      } finally {
        setLoading(false);
      }
    };


    fetchDashboardData();

  }, [user?.email]);


  const chartData = [
    {
      name: "Total Houses",
      value: stats.houses,
    },

    {
      name: "My Houses",
      value: stats.myHouses,
    },

    {
      name: "Favorites",
      value: stats.favorites,
    },
  ];


  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <p className="text-lg sm:text-xl font-semibold text-gray-700">
          Loading Dashboard...
        </p>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">

      <div className="mx-auto max-w-7xl">

        <h2 className="mb-8 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          House Analytics
        </h2>


        <div className="rounded-2xl bg-white p-4 sm:p-6 shadow-lg">


          <h3 className="mb-6 text-xl sm:text-2xl font-semibold text-gray-700 text-center">
            Houses Analytics Overview
          </h3>



          {/* Pie Chart */}

          <div className="w-full h-[300px] sm:h-[420px] lg:h-[500px]">

            <ResponsiveContainer width="100%" height="100%">

              <PieChart>

                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius="45%"
                  outerRadius="70%"
                  paddingAngle={5}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >

                  {
                    chartData.map((_, index) => (
                      <Cell
                        key={index}
                        fill={
                          COLORS[index % COLORS.length]
                        }
                      />
                    ))
                  }

                </Pie>


                <Tooltip />


                <Legend
                  verticalAlign="bottom"
                  align="center"
                  wrapperStyle={{
                    fontSize: "14px",
                    paddingTop: "20px",
                  }}
                />

              </PieChart>

            </ResponsiveContainer>

          </div>




          {/* Stats Cards */}

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">


            {/* Total Houses */}

            <div className="rounded-xl bg-blue-50 p-6 text-center shadow-sm">

              <h4 className="text-base sm:text-lg font-medium text-gray-600">
                Total Houses
              </h4>


              <p className="mt-3 text-3xl sm:text-4xl font-bold text-blue-600">
                {stats.houses}
              </p>

            </div>




            {/* My Houses */}

            <div className="rounded-xl bg-green-50 p-6 text-center shadow-sm">

              <h4 className="text-base sm:text-lg font-medium text-gray-600">
                My Houses
              </h4>


              <p className="mt-3 text-3xl sm:text-4xl font-bold text-green-600">
                {stats.myHouses}
              </p>

            </div>





            {/* Favorites */}

            <div className="rounded-xl bg-yellow-50 p-6 text-center shadow-sm">

              <h4 className="text-base sm:text-lg font-medium text-gray-600">
                Favorites
              </h4>


              <p className="mt-3 text-3xl sm:text-4xl font-bold text-yellow-600">
                {stats.favorites}
              </p>

            </div>


          </div>


        </div>

      </div>

    </div>
  );
}