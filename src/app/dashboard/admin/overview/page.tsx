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
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold mb-10">
          Admin Analytics
        </h2>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-2xl font-semibold mb-6">
            Houses vs Users
          </h3>

          <div className="w-full h-[450px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  paddingAngle={5}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-5 mt-8">
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <h4 className="text-lg font-medium text-gray-600">
                Total Houses
              </h4>
              <p className="text-4xl font-bold text-blue-600 mt-2">
                {stats.houses}
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-5 text-center">
              <h4 className="text-lg font-medium text-gray-600">
                Total Users
              </h4>
              <p className="text-4xl font-bold text-green-600 mt-2">
                {stats.users}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}