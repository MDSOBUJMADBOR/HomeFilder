"use client";

import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#3B82F6", "#10B981"];

export default function AdminOverviewPage() {
  const [stats, setStats] = useState({
    houses: 0,
    users: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [houseRes, userRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/housepost`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`),
        ]);

        const houses = await houseRes.json();
        const users = await userRes.json();

        setStats({
          houses: houses?.length || 0,
          users: users?.length || 0,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const chartData = [
    {
      name: "Houses",
      value: stats.houses,
    },
    {
      name: "Users",
      value: stats.users,
    },
  ];

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <p className="text-lg sm:text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-2xl font-bold sm:text-3xl lg:text-4xl">
          Admin Analytics
        </h2>

        <div className="rounded-2xl bg-white p-4 shadow-md sm:p-6 lg:p-8">
          <h3 className="mb-6 text-center text-xl font-semibold sm:text-2xl">
            Houses vs Users
          </h3>

          {/* Pie Chart */}
          <div className="h-[280px] w-full sm:h-[380px] lg:h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius="40%"
                  outerRadius="70%"
                  paddingAngle={5}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {chartData.map((_, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />

                <Legend
                  verticalAlign="bottom"
                  align="center"
                  wrapperStyle={{
                    fontSize: "14px",
                    paddingTop: "10px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Stats Cards */}
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-xl bg-blue-50 p-6 text-center shadow-sm">
              <h4 className="text-base font-medium text-gray-600 sm:text-lg">
                Total Houses
              </h4>

              <p className="mt-2 text-3xl font-bold text-blue-600 sm:text-4xl lg:text-5xl">
                {stats.houses}
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-6 text-center shadow-sm">
              <h4 className="text-base font-medium text-gray-600 sm:text-lg">
                Total Users
              </h4>

              <p className="mt-2 text-3xl font-bold text-green-600 sm:text-4xl lg:text-5xl">
                {stats.users}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}