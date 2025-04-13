'use client';

export default function Hero({roomType}) {
  return (
    <section
      className="h-[50vh] flex flex-col justify-end items-center px-6 lg:px-24 text-gray-800"
      style={{
        background: "linear-gradient(to right, rgb(241, 249, 248) 0%, #aee6f9 30%, rgb(163, 244, 235) 50%, #62e3cd 100%)",
      }}
    >
     <div className="flex flex-row items-center justify-center bg-white rounded-tl-4xl rounded-tr-4xl w-52 h-16">

        <h1 className="text-xl">{roomType}</h1>


     </div>
    </section>
  );
}
