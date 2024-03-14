import clsx from "clsx";
import React from "react";
import * as ImageNext from "next/image";

interface IProps {
  imageName: string;
  wrapperClassName?: string;
  imageClassName?: string;
  style?: any;
  alt: string;
}

const Image: React.FC<IProps> = ({
  imageName,
  wrapperClassName,
  imageClassName,
  style,
  alt,
}) => {
  if (imageName) {
    return (
      <div className={wrapperClassName}>
        <ImageNext.default
          src={`/${imageName}`}
          className={clsx(
            "h-80 w-full object-cover object-center",
            imageClassName
          )}
          style={style}
          alt={alt}
          width={500}
          height={500}
        />
      </div>
    );
  }

  return (
    <img
      className="absolute left-0 top-0 w-full h-[20vh] object-cover z-0"
      src={imageName}
      alt={`Image: ${imageName}`}
    />
  );
};

export default Image;
