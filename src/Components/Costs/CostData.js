import React from "react";

const CostData = ({ date }) => {
  const month = new Date(date).toLocaleString("ru-Ru", { month: "long" });
  const year = new Date(date).getFullYear();
  const day = new Date(date).toLocaleString("ru-Ru", { day: "2-digit" });

  return (
    <div className="cost-date">
      <div className="cost-date__month">{month}</div>
      <div className="cost-date__year">{year}</div>
      <div className="cost-date__day">{day}</div>
    </div>
  );
};

export default CostData;
