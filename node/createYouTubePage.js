// const path = require("path");
// const fetch = require("node-fetch");

// module.exports = async (createPage, graphql) => {
//   const { data } = await graphql(`
//     query WebsitesQuery {
//       allAirtable(filter: { table: { eq: "YouTube" } }) {
//         edges {
//           node {
//             data {
//               Name
//               UserName
//               LastModified
//               Tags
//             }
//           }
//         }
//       }
//     }
//   `);

//   const BASE_URL =
//     "https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics";

//   data.allAirtable.edges.forEach(({ node }) => {
//     fetch(
//       `${BASE_URL}&forUsername=${node.data.UserName}&key=${PROCESS.ENV.YOUTUBE_API_KEY}`
//     );
//   });

  // createPage({
  //   path: `youtube`,
  //   component: path.resolve(`./src/templates/communities-template.tsx`),
  //   context: {
  //     data: websitesMetadata,
  //     lastModified,
  //   },
  // });
};
