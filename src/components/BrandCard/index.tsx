import React from "react";
import Image from "../Image";
import { Link } from "gatsby";

interface IProps {
  title: string;
  description: string;
  image: string;
  to: string;
}

const BrandCard: React.FC<IProps> = ({ title, description, image, to }) => {
  return (
    <div className="relative h-80 p-10 border border-black group hover:cursor-pointer">
      <Link to={to}>
        <div className="flex w-full h-full justify-center items-center">
          <Image
            imageName={image}
            imageClassName="w-full h-full object-contain object-center"
            wrapperClassName="w-full"
            alt={title}
          />
        </div>
        <div className="absolute inset-0 bg-[#c9a246] space-y-2 p-6 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-white text-center text-[20px]">{title}</p>
          <p className="text-center text-white text-[16px] leading-5">
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BrandCard;
