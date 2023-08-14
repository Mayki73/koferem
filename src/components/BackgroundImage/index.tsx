import clsx from "clsx";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface IProps {
  imageName: string;
  wrapperClassName?: string;
  imageClassName?: string;
  style?: any;
  alt: string;
}

const BackgroundImage: React.FC<IProps> = ({
  imageName,
  wrapperClassName,
  imageClassName,
  style,
  alt,
}) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/(jpg|png|jpeg)/" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);

  const img = data.allFile.edges.find(({ node }: any) => {
    return node.relativePath === imageName;
  });

  if (img) {
    return (
      <div className={wrapperClassName}>
        {/* <GatsbyImage
          image={img.node.childImageSharp.gatsbyImageData}
          className={clsx(
            "h-80 w-full object-cover object-center",
            imageClassName
          )}
          style={style}
          alt={alt}
        /> */}
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

export default BackgroundImage;
