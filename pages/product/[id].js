// //= =============== PRODUCTS AND ORDERS PAGE?
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// // import Card from 'react-bootstrap/Card';
// import { Button } from 'react-bootstrap';
// import { useRouter } from 'next/router';
// // import { viewProductDetails } from '../../api/mergedData';

// export default function ViewProduct() {
//   const [productDetails, setProductDetails] = useState({});

//   const router = useRouter();

//   const { firebaseKey } = router.query;

//   // const onUpdate = () => {
//   //   viewProductDetails(firebaseKey).then(setProductDetails);
//   // };

//   useEffect(() => {
//     viewProductDetails(firebaseKey).then(setProductDetails);
//   }, [firebaseKey]);
//   return (
//     <>
//       <div style={{
//         display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh',
//       }}
//       >
//         <div className="text-center">
//           <Link href={`/order/new/${productDetails.id}`} passHref>
//             <Button variant="dark">Add To Order?</Button>
//           </Link>
//           <div className="text-white mt-5 details">
//             <h2 className="card-title bold">{productDetails.name}</h2>
//             <p className="card-text bold">{productDetails.price}</p>
//             <p className="card-text bold">{productDetails.description}</p>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         {/* <Stack gap={3}>
//           {productDetails?.characters?.map((character) => (
//             <CharacterCard key={character.firebaseKey} characterObj={character} onUpdate={onUpdate} />
//           ))}
//         </Stack> */}
//       </div>
//     </>
//   );
// }
