import React, { useContext, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { gadgetContext } from "../../AuthContent/AuthContent";

const StatChart = () => {
  const { products } = useContext(gadgetContext);
  const [selectedSubject, setSelectedSubject] = useState("price");

  const handleStatistics = (subject) => {
    setSelectedSubject(subject);
  };

  const filteredProducts = products.filter((product) => product.availability);

  return (
    <div style={{ width: "100%", height: 500 }}>
      {!filteredProducts.length ? (
        <p className="font-semibold lg:text-24 leading-8 text-red-500 text-center">
          No data available
        </p>
      ) : (
        <>
          <div className="flex justify-center items-center gap-4">
            <button
              className="bg-color3 rounded-xl px-5 py-1 text-white font-semibold text-xl"
              onClick={() => handleStatistics("price")}
            >
              Price
            </button>
            <button
              className="bg-color4 rounded-xl px-5 py-1 text-white font-semibold text-xl"
              onClick={() => handleStatistics("rating")}
            >
              Rating
            </button>
          </div>
          <ResponsiveContainer>
            <BarChart
              data={filteredProducts}
              margin={{
                top: 20,
                right: 30,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="product_title" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey={selectedSubject}
                fill={
                  selectedSubject === "price"
                    ? "rgb(149, 56, 226)"
                    : "rgb(48, 156, 8,0.9)"
                }
              />
            </BarChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
};

export default StatChart;
