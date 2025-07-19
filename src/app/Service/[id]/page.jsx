import React from "react";

const ServiceDetailsPage = ({ params }) => {
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

  const id = params?.id;
  const singleData = data.find((item) => item.id === id);

  if (!singleData) {
    return (
      <div className="text-center mt-10 text-red-500 font-semibold text-xl">
        Service not found.
      </div>
    );
  }

  return (
    <div className="p-5 max-w-xl mx-auto space-y-5">
      <h1 className="text-3xl font-bold text-center">Service Details Page</h1>
      <p className="text-gray-500 text-center">ID: {id}</p>

      <div className="flex justify-center">
        <img
          src={singleData.service_img}
          alt={singleData.service_name}
          className="h-40 w-40 rounded-lg shadow-lg"
        />
      </div>

      <h2 className="text-2xl font-semibold text-center">
        {singleData.service_name}
      </h2>

      <p className="text-center text-gray-700">{singleData.service_des}</p>
    </div>
  );
};

export default ServiceDetailsPage;
