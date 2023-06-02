// "use client";
// export default async function page({ params }) {
//   const products = getProductsById(params.shopId);

//   return (
//     <div>
//       <h1>id: {params.shopId} </h1>
//       <div className="products-container">
//         {products?.map((product) => (
//           <div>{product}</div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import { client } from "../../../lib/sanityClient";

// async function getProductsById(shopId) {
//   console.log(shopId);
//   const query = `*[_type == "product" && slug.current == '${shopId}'][0]`;
//   const res = await fetch(client.fetch(query));
//   return res.json();
// }

// export const getServerSideProps = async () => {
//   let slug = params.shopId;
//   console.log("l", slug);
//   const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
//   const products = await client.fetch(query);

//   return {
//     props: { products },
//   };
// };
