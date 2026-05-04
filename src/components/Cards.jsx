import { useState , useEffect} from "react"
const Cards = () => {
const [open , setOpen] = useState(true) ;
const [open1 , setOpen1] = useState(false);
const [open2 , setOpen2] = useState(false);
const [open3 , setOpen3] = useState(false);
const [open4 , setOpen4] = useState(false);

    return (
    <div>
        <main className="grid grid-cols-2 grid-flow-row px-28 py-24 text-white gap-x-10 font-bold max-[1025px]:grid-cols-1 max-[1025px]:gap-y-5! max-[1025px]:px-0!">
            <div className="bg-gray-800 flex flex-nowrap flex-row px-4 py-6 gap-x-5 font-serif rounded-2xl">
                <img src="../o1.jpg" className="border-amber-500 border-4 w-40 h-40 rounded-full! hover:scale-105! duration-500"/>
                <span className="py-3">
                    <p>Tasty Thursdays</p>
                    <h3>20% <span className="text-[15px]">Off</span></h3>
                    <button type="button" className="icon-link text-white bg-yellow-400 border rounded-full! px-4 py-2.5 hover:bg-yellow-500 duration-500">
                      Order Now
                      <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                       <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                      </svg></span>
                    </button>
                </span>
            </div>

            <div className="bg-gray-800 flex flex-nowrap flex-row px-4 py-6 gap-x-5 font-serif rounded-2xl">
                <img src="../o2.jpg" className="border-amber-500 border-4 w-40 h-40 rounded-full! hover:scale-105! duration-500"/>
                <span className="py-3">
                    <p>Pizza Days</p>
                    <h3>15% <span className="text-[15px]">Off</span></h3>
                    <button type="button" className="icon-link text-white bg-yellow-400 border rounded-full! px-4 py-2.5 hover:bg-yellow-500 duration-500">
                      Order Now
                      <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                       <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                      </svg></span>
                    </button>
                </span>
            </div>
        </main>

        <main className="text-center">
            <h3>Our Menu</h3>

            <div className="flex flex-nowrap gap-5 justify-center! py-8 max-[1025px]:gap-x-2!">
                <button type="button" className="focus:bg-gray-900 focus:text-white px-3 py-1.5 rounded-2xl!" onClick={()=>{setOpen(!open) , setOpen1(false) , setOpen2(false) , setOpen3(false) , setOpen4(false)}}>All</button>
                <button type="button" className="focus:bg-gray-900 focus:text-white px-3 py-1.5 rounded-2xl!" onClick={()=>{setOpen1(!open1) , setOpen(false) , setOpen2(false) , setOpen3(false) , setOpen4(false)}}>Burger</button>
                <button type="button" className="focus:bg-gray-900 focus:text-white px-3 py-1.5 rounded-2xl!" onClick={()=>{setOpen2(!open2) , setOpen(false) , setOpen1(false) , setOpen3(false) , setOpen4(false)}}>Pizza</button>
                <button type="button" className="focus:bg-gray-900 focus:text-white px-3 py-1.5 rounded-2xl!" onClick={()=>{setOpen3(!open3) , setOpen(false) , setOpen1(false) ,setOpen2(false) , setOpen4(false)}}>Pasta</button>
                <button type="button" className="focus:bg-gray-900 focus:text-white px-3 py-1.5 rounded-2xl!" onClick={()=>{setOpen4(!open4) , setOpen(false) , setOpen1(false) , setOpen2(false) , setOpen3(false)}}>Fries</button>
            </div>

            <div className="grid grid-cols-3 grid-flow-row mx-24 gap-4 max-[1025px]:grid-cols-2 max-[850px]:grid-cols-1 max-[1025px]:w-[80%]!">
              {open && 
              <>
                 <div className="bg-[#d6dbdf] w-[90%] h-[60%] rounded-2xl">
                <img src="../f1.png" className="w-35 h-35 rounded-full mx-auto!"/>
                <div className="bg-gray-950 text-white h-full py-4 px-2.5 rounded-2xl rounded-tl-4xl">
                    <h4 className="text-start">Delicious Pizza</h4>
                    <p className="text-start">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    <div className="flex flex-nowrap flex-row justify-between">
                        <p className="py-2.5">$20</p>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-fill bg-yellow-400 text-white rounded-full! p-2.5" viewBox="0 0 16 16">
                             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>

                 <div className="bg-[#d6dbdf] w-[90%] h-[60%] rounded-2xl">
                <img src="../f2.png" className="w-35 h-35 rounded-full mx-auto!"/>
                <div className="bg-gray-950 text-white h-full py-4 px-2.5 rounded-2xl rounded-tl-4xl">
                    <h4 className="text-start">Delicious Burger</h4>
                    <p className="text-start">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    <div className="flex flex-nowrap flex-row justify-between">
                        <p className="py-2.5">$15</p>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-fill bg-yellow-400 text-white rounded-full! p-2.5" viewBox="0 0 16 16">
                             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>

                 <div className="bg-[#d6dbdf] w-[90%] h-[60%] rounded-2xl">
                <img src="../f3.png" className="w-35 h-35 rounded-full mx-auto!"/>
                <div className="bg-gray-950 text-white h-full py-4 px-2.5 rounded-2xl rounded-tl-4xl">
                    <h4 className="text-start">Delicious Pizza</h4>
                    <p className="text-start">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    <div className="flex flex-nowrap flex-row justify-between">
                        <p className="py-2.5">$17</p>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-fill bg-yellow-400 text-white rounded-full! p-2.5" viewBox="0 0 16 16">
                             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>

                 <div className="bg-[#d6dbdf] w-[90%] h-[60%] rounded-2xl">
                <img src="../f4.png" className="w-35 h-35 rounded-full mx-auto!"/>
                <div className="bg-gray-950 text-white h-full py-4 px-2.5 rounded-2xl rounded-tl-4xl">
                    <h4 className="text-start">Delicious Pasta</h4>
                    <p className="text-start">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    <div className="flex flex-nowrap flex-row justify-between">
                        <p className="py-2.5">$18</p>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-fill bg-yellow-400 text-white rounded-full! p-2.5" viewBox="0 0 16 16">
                             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>

                <div className="bg-[#d6dbdf] w-[90%] h-[60%] rounded-2xl">
                <img src="../f5.png" className="w-35 h-35 rounded-full mx-auto!"/>
                <div className="bg-gray-950 text-white h-full py-4 px-2.5 rounded-2xl rounded-tl-4xl">
                    <h4 className="text-start">French Fries</h4>
                    <p className="text-start">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    <div className="flex flex-nowrap flex-row justify-between">
                        <p className="py-2.5">$10</p>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-fill bg-yellow-400 text-white rounded-full! p-2.5" viewBox="0 0 16 16">
                             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>

                <div className="bg-[#d6dbdf] w-[90%] h-[60%] rounded-2xl">
                <img src="../f6.png" className="w-35 h-35 rounded-full mx-auto!"/>
                <div className="bg-gray-950 text-white h-full py-4 px-2.5 rounded-2xl rounded-tl-4xl">
                    <h4 className="text-start">Delicious Pizza</h4>
                    <p className="text-start">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    <div className="flex flex-nowrap flex-row justify-between">
                        <p className="py-2.5">$15</p>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-fill bg-yellow-400 text-white rounded-full! p-2.5" viewBox="0 0 16 16">
                             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>

                <div className="bg-[#d6dbdf] w-[90%] h-[60%] rounded-2xl">
                <img src="../f7.png" className="w-35 h-35 rounded-full mx-auto!"/>
                <div className="bg-gray-950 text-white h-full py-4 px-2.5 rounded-2xl rounded-tl-4xl">
                    <h4 className="text-start">Tasty Burger</h4>
                    <p className="text-start">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    <div className="flex flex-nowrap flex-row justify-between">
                        <p className="py-2.5">$12</p>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-fill bg-yellow-400 text-white rounded-full! p-2.5" viewBox="0 0 16 16">
                             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>

                <div className="bg-[#d6dbdf] w-[90%] h-[60%] rounded-2xl">
                <img src="../f8.png" className="w-35 h-35 rounded-full mx-auto!"/>
                <div className="bg-gray-950 text-white h-full py-4 px-2.5 rounded-2xl rounded-tl-4xl">
                    <h4 className="text-start">Tasty Burger</h4>
                    <p className="text-start">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    <div className="flex flex-nowrap flex-row justify-between">
                        <p className="py-2.5">$14</p>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-fill bg-yellow-400 text-white rounded-full! p-2.5" viewBox="0 0 16 16">
                             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>

                <div className="bg-[#d6dbdf] w-[90%] h-[60%] rounded-2xl">
                <img src="../f9.png" className="w-35 h-35 rounded-full mx-auto!"/>
                <div className="bg-gray-950 text-white h-full py-4 px-2.5 rounded-2xl rounded-tl-4xl">
                    <h4 className="text-start">Delicious Pasta</h4>
                    <p className="text-start">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    <div className="flex flex-nowrap flex-row justify-between">
                        <p className="py-2.5">$10</p>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-fill bg-yellow-400 text-white rounded-full! p-2.5" viewBox="0 0 16 16">
                             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>

            </>
            
              }
                
                {open1 && 
                <>
                  <div className="bg-[#d6dbdf] w-[90%] h-[60%] rounded-2xl">
                <img src="../f2.png" className="w-35 h-35 rounded-full mx-auto!"/>
                <div className="bg-gray-950 text-white h-full py-4 px-2.5 rounded-2xl rounded-tl-4xl">
                    <h4 className="text-start">Delicious Burger</h4>
                    <p className="text-start">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    <div className="flex flex-nowrap flex-row justify-between">
                        <p className="py-2.5">$15</p>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-fill bg-yellow-400 text-white rounded-full! p-2.5" viewBox="0 0 16 16">
                             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>


                <div className="bg-[#d6dbdf] w-[90%] h-[60%] rounded-2xl">
                <img src="../f7.png" className="w-35 h-35 rounded-full mx-auto!"/>
                <div className="bg-gray-950 text-white h-full py-4 px-2.5 rounded-2xl rounded-tl-4xl">
                    <h4 className="text-start">Tasty Burger</h4>
                    <p className="text-start">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    <div className="flex flex-nowrap flex-row justify-between">
                        <p className="py-2.5">$12</p>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-fill bg-yellow-400 text-white rounded-full! p-2.5" viewBox="0 0 16 16">
                             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>

                <div className="bg-[#d6dbdf] w-[90%] h-[60%] rounded-2xl">
                <img src="../f8.png" className="w-35 h-35 rounded-full mx-auto!"/>
                <div className="bg-gray-950 text-white h-full py-4 px-2.5 rounded-2xl rounded-tl-4xl">
                    <h4 className="text-start">Tasty Burger</h4>
                    <p className="text-start">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    <div className="flex flex-nowrap flex-row justify-between">
                        <p className="py-2.5">$14</p>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-fill bg-yellow-400 text-white rounded-full! p-2.5" viewBox="0 0 16 16">
                             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>
               </>
                }

               {open2 && 
                <>
                 <div className="bg-[#d6dbdf] w-[90%] h-[60%] rounded-2xl">
                <img src="../f1.png" className="w-35 h-35 rounded-full mx-auto!"/>
                <div className="bg-gray-950 text-white h-full py-4 px-2.5 rounded-2xl rounded-tl-4xl">
                    <h4 className="text-start">Delicious Pizza</h4>
                    <p className="text-start">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    <div className="flex flex-nowrap flex-row justify-between">
                        <p className="py-2.5">$20</p>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-fill bg-yellow-400 text-white rounded-full! p-2.5" viewBox="0 0 16 16">
                             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>


                 <div className="bg-[#d6dbdf] w-[90%] h-[60%] rounded-2xl">
                <img src="../f3.png" className="w-35 h-35 rounded-full mx-auto!"/>
                <div className="bg-gray-950 text-white h-full py-4 px-2.5 rounded-2xl rounded-tl-4xl">
                    <h4 className="text-start">Delicious Pizza</h4>
                    <p className="text-start">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    <div className="flex flex-nowrap flex-row justify-between">
                        <p className="py-2.5">$17</p>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-fill bg-yellow-400 text-white rounded-full! p-2.5" viewBox="0 0 16 16">
                             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>

                <div className="bg-[#d6dbdf] w-[90%] h-[60%] rounded-2xl">
                <img src="../f6.png" className="w-35 h-35 rounded-full mx-auto!"/>
                <div className="bg-gray-950 text-white h-full py-4 px-2.5 rounded-2xl rounded-tl-4xl">
                    <h4 className="text-start">Delicious Pizza</h4>
                    <p className="text-start">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    <div className="flex flex-nowrap flex-row justify-between">
                        <p className="py-2.5">$15</p>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-fill bg-yellow-400 text-white rounded-full! p-2.5" viewBox="0 0 16 16">
                             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>
               </>
                }


                 {open3 && 
                <>
                 <div className="bg-[#d6dbdf] w-[90%] h-[60%] rounded-2xl">
                <img src="../f4.png" className="w-35 h-35 rounded-full mx-auto!"/>
                <div className="bg-gray-950 text-white h-full py-4 px-2.5 rounded-2xl rounded-tl-4xl">
                    <h4 className="text-start">Delicious Pasta</h4>
                    <p className="text-start">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    <div className="flex flex-nowrap flex-row justify-between">
                        <p className="py-2.5">$18</p>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-fill bg-yellow-400 text-white rounded-full! p-2.5" viewBox="0 0 16 16">
                             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>


                <div className="bg-[#d6dbdf] w-[90%] h-[60%] rounded-2xl">
                <img src="../f9.png" className="w-35 h-35 rounded-full mx-auto!"/>
                <div className="bg-gray-950 text-white h-full py-4 px-2.5 rounded-2xl rounded-tl-4xl">
                    <h4 className="text-start">Delicious Pasta</h4>
                    <p className="text-start">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    <div className="flex flex-nowrap flex-row justify-between">
                        <p className="py-2.5">$10</p>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-fill bg-yellow-400 text-white rounded-full! p-2.5" viewBox="0 0 16 16">
                             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>
               </>
                }

                {open4 && 
                <>
                 <div className="bg-[#d6dbdf] w-[90%] h-[60%] rounded-2xl">
                <img src="../f5.png" className="w-35 h-35 rounded-full mx-auto!"/>
                <div className="bg-gray-950 text-white h-full py-4 px-2.5 rounded-2xl rounded-tl-4xl">
                    <h4 className="text-start">French Fries</h4>
                    <p className="text-start">Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    <div className="flex flex-nowrap flex-row justify-between">
                        <p className="py-2.5">$10</p>
                        <button type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-cart-fill bg-yellow-400 text-white rounded-full! p-2.5" viewBox="0 0 16 16">
                             <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>
               </>
                }

            </div>

        </main>
 
      <div className="text-center py-10"><button type="button" className="px-10 py-2 bg-yellow-400 text-white rounded-2xl! font-bold hover:bg-yellow-500 duration-500">View More</button></div>
       
    </div>
  )
}

export default Cards