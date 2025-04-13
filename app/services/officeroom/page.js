// 'use client'
// import Hero from './../../components/hero2'
// import NavBar from './../../components/navbar'
// import ImagesComponent from "../../components/imagesComponent";
// import Benifits from "../../components/benefits";
// import Services from "../../components/services";
// import Footer from '@/app/components/footer';
// import heroImg2 from "./../../../public/openspace.jpg";
// import RoomsType from './../../components/roomsType'



// import { useState , useEffect} from "react";

// const images = [
//     "/officeroom1.jpg",
//     "/officeroom2.jpg",
//     "/officeroom3.jpg",
//     // "/openspace.jpg"
//   ];

// const Rooms = [
//     {
//         title: "Private Office Premium +",
//         // features: [
//         //     "Capacity: 6 persons",
//         //     "Wi-Fi"
//         // ]
//         description: "A cozy and professional meeting space, ideal for small team discussions, client meetings, and brainstorming sessions. Perfect for groups of 4 to 6 people looking for a quiet and well-equipped environment.",
//         image: "/officeroom1.jpg"
//     },
//     {
//         title: "Private Office",
//         description: "A spacious training room designed for workshops, seminars, and group learning sessions. It’s the ideal setting for hosting formations, with enough room to accommodate up to 16 participants comfortably.",
//         image: "/officeroom2.jpg"

//     }
// ]
  
// export default function MeetingRoom(){

//     const [fetchedData, setFetchedData] = useState([]);


//     useEffect(() => {
//         async function fetchingSubscriptions() {
//           try {
//             const response = await fetch("http://localhost:8000/ELACO/subcription/get/officeroom");
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
//             <RoomsType rooms={Rooms}/>

//             <Benifits subs={fetchedData} />
//             <Services />
//             <Footer />
//         </>
//     )
// }

'use client'
// import Hero from './../../components/hero2'
import NavBar from './../../components/navbar'
import ImagesComponent from "../../components/imagesComponent";
import Benifits from "../../components/benefits";
import Services from "../../components/services";
import Footer from '@/app/components/footer';
import heroImg2 from "./../../../public/openspace.jpg";
import RoomsType from './../../components/roomsType'
import Hero from './../../components/hero3'




import { useState , useEffect} from "react";

const images = [
    "/officeroom1.jpg",
    "/officeroom2.jpg",
    "/officeroom3.jpg",
    // "/openspace.jpg"
  ];

const Rooms = [
    {
        title: "Private Office Premium +",
        // features: [
        //     "Capacity: 6 persons",
        //     "Wi-Fi"
        // ]
        description: "A cozy and professional meeting space, ideal for small team discussions, client meetings, and brainstorming sessions. Perfect for groups of 4 to 6 people looking for a quiet and well-equipped environment.",
        image: "/officeroom1.jpg"
    },
    {
        title: "Private Office",
        description: "A spacious training room designed for workshops, seminars, and group learning sessions. It’s the ideal setting for hosting formations, with enough room to accommodate up to 16 participants comfortably.",
        image: "/officeroom2.jpg"

    }
]
  
export default function MeetingRoom(){

    const [fetchedData, setFetchedData] = useState([]);


    useEffect(() => {
        async function fetchingSubscriptions() {
          try {
            const response = await fetch("http://localhost:8000/ELACO/subcription/get/officeroom");
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



    return(
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
        <Hero roomType="Office Room"/>
      </main>

          {/* / */}
            <ImagesComponent images={images}/>
            <RoomsType rooms={Rooms}/>

            <Benifits subs={fetchedData} />
            <Services />
            {/* <Footer /> */}
        </>
    )
}