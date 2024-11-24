import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 19.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free WiFi",
        "Open during staffed hours",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 39.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free WiFi",
        "24/7 gym access",
        "1 complimentary fitness class per month",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 59.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free WiFi",
        "24/7 gym access",
        "Unlimited fitness classes",
        "Free personal training session once a month",
        "Access to sauna and steam room",
      ],
    },
    {
      id: 4,
      name: "Family Plan",
      price: 99.99,
      features: [
        "Access to gym equipment for up to 4 members",
        "Locker room access",
        "Free WiFi",
        "24/7 gym access",
        "Unlimited fitness classes for all members",
        "Discounted personal training sessions",
        "Access to kid-friendly zones and daycare",
      ],
    },
    {
      id: 5,
      name: "Elite Plan",
      price: 129.99,
      features: [
        "All Premium Plan features",
        "Access to exclusive training areas",
        "Monthly wellness consultation",
        "Free nutrition plan tailored to your goals",
        "Priority booking for fitness classes and trainers",
        "Exclusive member-only events",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best prices in the town</h2>
      <div className="grid lg:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
