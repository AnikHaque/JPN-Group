import React from "react";
import { useParams } from "react-router-dom";
import { list } from "../../data/Data";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = list.find((item) => item.id === parseInt(id));

  if (!property) {
    return <div>Property not found!</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <img
          className="w-full h-64 object-cover object-center"
          src={property.cover}
          alt={property.name}
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            {property.name}
          </h2>
          <p className="text-sm text-gray-600 mt-2">{property.location}</p>
          <div className="flex items-center mt-4">
            <span
              className={`inline-block py-1 px-2 uppercase rounded-full text-xs font-semibold ${getColorClass(
                property.category
              )}`}
            >
              {property.category}
            </span>
            <span className="ml-2 text-xs text-gray-600">{property.type}</span>
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">
                {property.price}
              </span>
              <span className="ml-2 text-sm text-gray-600">/ month</span>
            </div>
            <div className="mt-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {property.bedrooms} bedrooms
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {property.bathrooms} bathrooms
              </span>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Description</h3>
            <p className="mt-2 text-sm text-gray-600">{property.description}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Features</h3>
            <ul className="mt-2 text-sm text-gray-600">
              {property.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">Images</h3>
            <div className="mt-2 grid grid-cols-2 gap-4">
              {property.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Property ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getColorClass = (category) => {
  switch (category) {
    case "For Rent":
      return "bg-blue-200 text-blue-800";
    case "For Sale":
      return "bg-yellow-200 text-yellow-800";
    case "Ongoing":
      return "bg-indigo-200 text-indigo-800";
    case "Pending":
      return "bg-orange-200 text-orange-800";
    case "Completed":
      return "bg-green-200 text-green-800";
    default:
      return "bg-gray-200 text-gray-800";
  }
};

export default PropertyDetails;
