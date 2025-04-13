// // // 'use client'
// // // import Hero from './../../components/hero2'
// // // import NavBar from './../../components/navbar'
// // // import ImagesComponent from "../../components/imagesComponent";
// // // import Benifits from "../../components/benefits";
// // // import Services from "../../components/services";
// // // import Footer from '@/app/components/footer';
// // // // import heroImg2 from "./../../../public/openspace.jpg";


// // // import { useState , useEffect} from "react";





// // // const images = [
// // //     "/openspace.jpg",
// // //     "/openspace1.jpg",
// // //     "/openspace2.jpg",
// // //     "/openspace.jpg"
// // //   ];
  

// // // export default function OpenSpaceRoom(){

// // //     const [fetchedData, setFetchedData] = useState([]);


// // //     useEffect(() => {
// // //         async function fetchingSubscriptions() {
// // //           try {
// // //             const response = await fetch("http://localhost:8000/ELACO/subcription/get/openspace");
// // //             if (!response.ok) {
// // //               throw new Error("Error in fetching subscriptions");
// // //             }
// // //             const data = await response.json();
// // //             setFetchedData(data.subscriptions);
// // //           } catch (err) {
// // //             console.error(err);
// // //           }
// // //         }
// // //         fetchingSubscriptions();
// // //       }, []);



// // //     return(
// // //         <>
// // //             <NavBar />
// // //             <Hero />
// // //             <ImagesComponent images={images}/>
// // //             <Benifits subs={fetchedData}/>
// // //             <Services />
// // //             <Footer />
// // //         </>
// // //     )
// // // }

// // 'use client'
// // import Hero from './../../components/hero2'
// // import NavBar from './../../components/navbar'
// // import ImagesComponent from "../../components/imagesComponent";
// // import Benifits from "../../components/benefits";
// // import Services from "../../components/services";
// // import Footer from '@/app/components/footer';
// // import heroImg2 from "./../../../public/openspace.jpg";


// // import { useState , useEffect} from "react";





// // const images = [
// //     "/openspace.jpg",
// //     "/openspace1.jpg",
// //     "/openspace2.jpg",
// //     "/openspace.jpg"
// //   ];
  

// // export default function OpenSpaceRoom(){

// //     const [fetchedData, setFetchedData] = useState([]);


// //     useEffect(() => {
// //         async function fetchingSubscriptions() {
// //           try {
// //             const response = await fetch("http://localhost:8000/ELACO/subcription/get/openspace");
// //             if (!response.ok) {
// //               throw new Error("Error in fetching subscriptions");
// //             }
// //             const data = await response.json();
// //             setFetchedData(data.subscriptions);
// //           } catch (err) {
// //             console.error(err);
// //           }
// //         }
// //         fetchingSubscriptions();
// //       }, []);



// //     return(
// //         <>
// //             <NavBar />
// //             <Hero image={heroImg2}/>
// //             <ImagesComponent images={images}/>
// //             <Benifits subs={fetchedData}/>
// //             <Services />
// //             <Footer />
// //         </>
// //     )
// // }

// 'use client'
// import Hero from './../../components/hero2'
// import NavBar from './../../components/navbar'
// import ImagesComponent from "../../components/imagesComponent";
// import Benifits from "../../components/benefits";
// import Services from "../../components/services";
// import Footer from '@/app/components/footer';
// import heroImg2 from "./../../../public/openspace.jpg";


// import { useState , useEffect} from "react";





// const images = [
//     "/openspace.jpg",
//     "/openspace1.jpg",
//     "/openspace2.jpg",
//     "/openspace.jpg"
//   ];
  

// export default function OpenSpaceRoom(){

//     const [fetchedData, setFetchedData] = useState([]);


//     useEffect(() => {
//         async function fetchingSubscriptions() {
//           try {
//             const response = await fetch("http://localhost:8000/ELACO/subcription/get/openspace");
//             if (!response.ok) {
//               throw new Error("Error in fetching subscriptions");
//             }
//             const data = await response.json();
//             setFetchedData(data.subscriptions);
//           } catch (err) {
//             console.error(err);
//           }
//         }
//         fetchingSubscriptions();
//       }, []);



//     return(
//         <>
//             <NavBar />
//             <Hero image={heroImg2}/>
//             <ImagesComponent images={images}/>
//             <Benifits subs={fetchedData}/>
//             <Services />
//             <Footer />
//         </>
//     )
// }

// 'use client'
// import Hero from './../../components/hero3'
// import NavBar from './../../components/navbar'
// import ImagesComponent from "../../components/imagesComponent";
// import Benifits from "../../components/benefits";
// import Services from "../../components/services";
// import Footer from '@/app/components/footer';
// // import heroImg2 from "./../../../public/openspace.jpg";


// import { useState , useEffect} from "react";





// const images = [
//     "/openspace.jpg",
//     "/openspace1.jpg",
//     "/openspace2.jpg",
//     "/openspace.jpg"
//   ];
  

// export default function OpenSpaceRoom(){

//     const [fetchedData, setFetchedData] = useState([]);


//     useEffect(() => {
//         async function fetchingSubscriptions() {
//           try {
//             const response = await fetch("http://localhost:8000/ELACO/subcription/get/openspace");
//             if (!response.ok) {
//               throw new Error("Error in fetching subscriptions");
//             }
//             const data = await response.json();
//             setFetchedData(data.subscriptions);
//           } catch (err) {
//             console.error(err);
//           }
//         }
//         fetchingSubscriptions();
//       }, []);



//     return(
//         <>

//         <main
//                 className="min-h-screen bg-gradient-to-r text-gray-800 font-sans relative overflow-hidden mb-20"
//                 style={{
//                   backgroundImage:
//                     "linear-gradient(to right, rgb(241, 249, 248) 0%, #aee6f9 30%, rgb(163, 244, 235) 50%, #62e3cd 100%)",
//                 }}
//               >
//                 {/* <Navbar /> */}
//             <NavBar />
//             <Hero />


//                 {/* <Hero /> */}
//               </main>
//             {/* <NavBar /> */}
//             {/* <Hero /> */}
//             <ImagesComponent images={images}/>
//             <Benifits subs={fetchedData}/>
//             <Services />
//             <Footer />
//         </>
//     )
// }

'use client'

import Hero from './../../components/hero3'
import NavBar from './../../components/navbar'
import ImagesComponent from "../../components/imagesComponent";
import Benifits from "../../components/benefits";
import Services from "../../components/services";
// import Footer from '@/app/components/footer';
import { useState, useEffect } from "react";

const images = [
  "/openspace.jpg",
  "/openspace1.jpg",
  "/openspace2.jpg",
  "/openspace.jpg"
];

export default function OpenSpaceRoom() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    async function fetchingSubscriptions() {
      try {
        const response = await fetch("http://localhost:8000/ELACO/subcription/get/openspace");
        if (!response.ok) {
          throw new Error("Error in fetching subscriptions");
        }
        const data = await response.json();
        setFetchedData(data.subscriptions);
      } catch (err) {
        console.error(err);
      }
    }
    fetchingSubscriptions();
  }, []);

  return (
    <>
    <NavBar />
    
      <main
        className="h-[50vh] bg-gradient-to-r text-gray-800 font-sans relative overflow-hidden mb-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(241, 249, 248) 0%, #aee6f9 30%, rgb(163, 244, 235) 50%, #62e3cd 100%)",
        }}
      >
        {/* <NavBar /> */}
        <Hero roomType="Open Space"/>
      </main>

      <ImagesComponent images={images} />
      <Benifits subs={fetchedData} />
      <Services />
      {/* <Footer /> */}
    </>
  );
}
