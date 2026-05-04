import React, { useState, useEffect } from "react";
const Header = ({ interval = 3000 }) => {
  const slides = [
  {
    title: "Fast Food Restaurant",
    desc: "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.",
    btn: "Order Now",
  },
  {
    title: "Fast Food Restaurant",
    desc: "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.",
    btn: "Order Now",
  },
  {
    title: "Fast Food Restaurant",
    desc: "Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.",
    btn: "Order Now",
  },
];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [justify , setJustify] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [paused, interval]);

    return (
    <div className="bg-[url('../hero.jpg')] bg-cover">
        <header className="grid grid-cols-3 grid-flow-row justify-between px-24 pt-2.5 max-[1025px]:grid-cols-2 ">
            <div className="max-[1025px]:text-end">
                <a href='#' className='font-sans no-underline! text-white text-2xl'>Feane</a>
            </div>

            <div className="flex flex-nowrap justify-center gap-x-8 pt-2.5 max-[1025px]:hidden">
                <a href="#" className="no-underline! text-white hover:text-amber-500! duration-500">HOME</a>
                <a href="#" className="no-underline! text-white hover:text-amber-500! duration-500">MENU</a>
                <a href="#" className="no-underline! text-white hover:text-amber-500! duration-500">ABOUT</a>
                <a href="#" className="no-underline! text-white hover:text-amber-500! duration-500">BOOK TABLE</a>
            </div>

            <div className="flex flex-nowrap justify-center gap-x-4 font-bold">
                <button type="button">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill text-white hover:text-amber-500! duration-500  max-[1025px]:hidden" viewBox="0 0 16 16">
                     <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                   </svg>
                </button>
                <button type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill text-white hover:text-amber-500! duration-500  max-[1025px]:hidden" viewBox="0 0 16 16">
                     <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                </button>
                <button type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search text-white hover:text-amber-500! duration-500  max-[1025px]:hidden" viewBox="0 0 16 16">
                     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                   </svg>
                </button>
                <button type="button" className="text-white bg-yellow-300 border rounded-full! px-4 py-2 hover:bg-yellow-400 duration-500 max-[1025px]:hidden">Order Online</button>
            
            <button type="button" className="text-white hidden max-[1025px]:block" onClick={()=>setJustify(!justify)}>{justify ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-justify" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
</svg>}</button>
            </div>

            {justify && (
  <>
  <div className="flex flex-col w-full text-center mx-0!" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">

            <div className="flex flex-col justify-center gap-x-8 gap-y-10 pt-2.5">
                <a href="#" className=" block w-full no-underline! text-white hover:text-amber-500! duration-500">HOME</a>
                <a href="#" className=" block w-full no-underline! text-white hover:text-amber-500! duration-500">MENU</a>
                <a href="#" className=" block w-full no-underline! text-white hover:text-amber-500! duration-500">ABOUT</a>
                <a href="#" className=" block w-full no-underline! text-white hover:text-amber-500! duration-500">BOOK TABLE</a>
            </div>


    <div className="flex flex-col">
           <div className="flex flex-nowrap justify-center gap-x-4 font-bold mt-4">
                <button type="button">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill text-white hover:text-amber-500! duration-500" viewBox="0 0 16 16">
                     <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                   </svg>
                </button>
                <button type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill text-white hover:text-amber-500! duration-500" viewBox="0 0 16 16">
                     <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                </button>
                <button type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search text-white hover:text-amber-500! duration-500" viewBox="0 0 16 16">
                     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                   </svg>
                </button>
                </div>
                <button type="button" className="text-white bg-yellow-300 border rounded-full! px-4 py-2 mt-4 block! hover:bg-yellow-400 duration-500 max-[1025px]:w-50!">Order Online</button>
            </div>
    </div>
  </>
)}
        </header>

        <div>
             <div
      className="relative w-full h-screen text-white overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center h-full px-6 md:px-20">
            {/* LEFT: النص */}
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-serif mb-4">{s.title}</h1>
              <p className="text-sm md:text-base text-gray-200 max-w-xl mb-6">{s.desc}</p>
              <button className="bg-yellow-300 text-white px-10 py-2.5 rounded-full! my-2 font-medium hover:bg-yellow-500 duration-500">
                {s.btn}
              </button>
               <div className=" mt-20! flex gap-3 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-2 h-2 md:w-4 md:h-4 rounded-full! transition-colors ${
              i === index ? "bg-yellow-400 p-3!" : "bg-white/60"
            }`}
          />
        ))}
      </div>
      
            </div>

          </div>
        </div>
      ))}

    </div>         
        </div>
    </div>
  )

}
export default Header 