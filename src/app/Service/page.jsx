import Link from "next/link";
import React from "react";

const Page = () => {
  const data = [
    {
      id: "1abc23def",
      service_name: "EcoClean",
      service_img: "https://i.ibb.co/gZ6gZCmy/image.png",
      service_des:
        "Premium eco-friendly cleaning services for homes and offices.",
    },
    {
      id: "2xyz56klm",
      service_name: "QuickFix",
      service_img: "https://i.ibb.co/F4wPRD7L/image.png",
      service_des:
        "Fast and affordable repair services for electronics and appliances.",
    },
    {
      id: "3qwe98poi",
      service_name: "FitLife Gym",
      service_img: "https://i.ibb.co/N6YJF4wS/image.png",
      service_des:
        "Modern gym with personal trainers and customized fitness programs.",
    },
    {
      id: "4asd76lkj",
      service_name: "FreshBites",
      service_img: "https://i.ibb.co/F4wPRD7L/image.png",
      service_des:
        "Healthy and delicious meal delivery service with flexible plans.",
    },
    {
      id: "5zxc34vbn",
      service_name: "Sparkle Car Wash",
      service_img: "https://i.ibb.co/gZ6gZCmy/image.png",
      service_des:
        "Professional car wash and detailing services with eco-friendly products.",
    },
  ];

  return (
    <div className="p-5">
      <p className="font-bold text-3xl mb-5">Services Page</p>

      {/* Images side by side with gap */}
      <div className="flex flex-wrap gap-5">
        {data.map((service) => (
          <Link key={service.id} href={`/Service/${service.id}`}>
            <img
              src={service.service_img}
              alt={service.service_name}
              className="h-50 w-50 cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
