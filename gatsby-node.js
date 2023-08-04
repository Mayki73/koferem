const brands = require("./src/data/brands.json");

exports.createPages = async ({ graphql, actions, useStaticQuery }) => {
  const { createPage } = actions;

  createPage({
    path: "/",
    component: require.resolve("./src/templates/IndexTemplate.tsx"),
    context: {
      brands: brands["page-templates"].slice(0, 6),
    },
  });

  createPage({
    path: "/repair/",
    component: require.resolve("./src/templates/RepairTemplate.tsx"),
    context: {
      brands: brands["page-templates"],
    },
  });

  brands["page-templates"].forEach((brand) => {
    createPage({
      path: `/repair/${brand.brand_name.toLowerCase()}`,
      component: require.resolve("./src/templates/BrandTemplate.tsx"),
      context: {
        brand,
      },
    });
  });
};
