import React from "react";

const PolicyItem = ({ title, description, sub, icon }) => {
  return (
    <div className="flex items-center gap-3 my-4">
      {title == "Return Policy" ? (
        <div className="w-8 h-8 bg-[#A80CC4] flex items-center justify-center rounded-full">
          {icon}
        </div>
      ) : (
        <div className="w-8 h-8">{icon}</div>
      )}
      <div>
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-xs">{description}</p>
        <p className="text-[10px]">{sub}</p>
      </div>
    </div>
  );
};

export default PolicyItem;
