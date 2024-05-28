import React from "react";
import manpower from "../../assets/manpower.png";
import hr from "../../assets/human-resource.png";
import groupRecruitment from "../../assets/group-recruitment.png";
import groupAssesment from "../../assets/group-assesment.png";
import thirdparty from "../../assets/third-party.png";
import appraisal from "../../assets/appraisal.png";
import skill from "../../assets/skill-develop.png";
import language from "../../assets/language.png";
import Back from "../common/Back";

const WhatWeDo = () => {
  return (
    <div>
      <div>
        <Back
          name="Our Recruitment"
          title="What We Do - Providing the best Recruitment and Outsourcing facilities"
          cover="https://img1.exportersindia.com/product_images/bc-full/2021/4/8749781/commercial-manpower-services-1619171017-5799679.jpeg"
        />
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <h5 className="mb-4 text-3xl font-bold leading-none text-[#27ae60]">
              We are committed in providing the best Recruitment
            </h5>
            <p className="mb-6 text-gray-900">
              As one of well-known Employment Recruitment Agencies in
              Bangladesh, we provide both temporary and permanent services.
              Moreover, we source, screen, aggregate, train and develop skill
              sets in our in-house training facility to provide world class
              world class skilled and technical individuals as per client’s
              requirements. We specialize in both Blue-Collar and White-Collar
              workforce Hiring. As an experienced manpower recruitment
              solutions, we provide world class placement related services to
              Various Industries such as of MEP, Construction, Hotels,
              Hospitals, Petrochemical Plants, Oil—exploration, production,
              transportation & refining, other industries like Cement, Steel,
              Engineering and Utilities such as Power Plants etc.
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
            <svg
              viewBox="0 0 88 88"
              className="w-full max-w-screen-xl text-indigo-100"
            >
              <circle fill="currentColor" cx="44" cy="44" r="15.5" />
              <circle
                fillOpacity="0.2"
                fill="currentColor"
                cx="44"
                cy="44"
                r="44"
              />
              <circle
                fillOpacity="0.2"
                fill="currentColor"
                cx="44"
                cy="44"
                r="37.5"
              />
              <circle
                fillOpacity="0.3"
                fill="currentColor"
                cx="44"
                cy="44"
                r="29.5"
              />
              <circle
                fillOpacity="0.3"
                fill="currentColor"
                cx="44"
                cy="44"
                r="22.5"
              />
            </svg>
          </div>
          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50">
                  <img src={manpower} className=""></img>
                </div>
                <p className="mb-2 font-bold text-center">
                  Manpower Search & Placement
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50">
                  <img src={hr} className=""></img>
                </div>
                <p className="mb-2 font-bold">Human Resources Management</p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50">
                  <img src={groupRecruitment} className=""></img>
                </div>
                <p className="mb-2 font-bold">
                  Bulk/Group Recruitment Services
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50">
                  <img src={groupAssesment} className=""></img>
                </div>
                <p className="mb-2 font-bold">Group Assessment Center</p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50">
                  <img src={thirdparty} className=""></img>
                </div>
                <p className="mb-2 font-bold">Third Party Contracts</p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50">
                  <img src={appraisal} className=""></img>
                </div>
                <p className="mb-2 font-bold">Employee Appraisal</p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50">
                  <img src={skill} className=""></img>
                </div>
                <p className="mb-2 font-bold">Skill Development and Training</p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-50">
                  <img src={language} className=""></img>
                </div>
                <p className="mb-2 font-bold">Foreign Language Training</p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
