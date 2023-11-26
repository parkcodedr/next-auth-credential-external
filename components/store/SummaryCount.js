import React from "react";

const SummaryCount = () => {
  return (
    <main className="container mt-20 mx-auto flex justify-around items-center gap-10 counter__summary h-[317px]">
      <CountItem title="Reviews" count={"5000+"} />
      <CountItem title="Customers" count={"3000+"} />
      <CountItem title="Products" count={"10,0000+"} />
    </main>
  );
};

export default SummaryCount;

const CountItem = ({ count, title }) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-[#FFF079] font-bold text-5xl">{count}</h1>
      <p className="text-white font-normal text-xl">{title}</p>
    </div>
  );
};
