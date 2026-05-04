const Article = () => {
  return (
    <div>
        <main className="bg-gray-900 grid grid-cols-2 max-h-screen! m-0! px-50 py-20 max-[1025px]:grid-cols-1 max-[1025px]:h-full! max-[1025px]:px-1! max-[1025px]:py-5! imgabout">
            <div>
                <img src="../about-img.png" className="h-[70%] max-[1025px]:h-[50%]!"/>
            </div>

            <div className="text-white max-[1025px]:-translate-y-46! about">
                <h2 className="font-serif">We Are Feane</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
                <button type="button" className="text-white font-bold bg-yellow-300 border rounded-full! px-4 py-2 hover:bg-yellow-400 duration-500">Read More</button>                
            </div>
        </main>

<main className="grid grid-cols-2 px-20 py-20 max-[1025px]:grid-cols-1 max-[1025px]:px-2">

    <div>
        <h3 className="font-bold font-serif">Book A Table</h3>
        <form className="flex flex-col w-[80%] gap-y-5">
        <input type="text" placeholder="  Your Name  " required className="py-2.5 border border-black rounded-md" />
        <input type="email" placeholder="  Your Email  " required className="py-2.5 border border-black rounded-md" />
        <input type="number" placeholder="  Phone Number  " required className="py-2.5 border border-black rounded-md" />
        <select className="py-2.5 border border-black rounded-md">
                  <option value="" disabled selected>
                    How many persons?
                  </option>
                  <option value="">
                    2
                  </option>
                  <option value="">
                    3
                  </option>
                  <option value="">
                    4
                  </option>
                  <option value="">
                    5
                  </option>
                </select>
        <input type="date" placeholder="  Date   " required className="py-2.5 border border-black rounded-md" />
        <button type="submit" className="text-white w-44 font-bold font-sans bg-yellow-300 border rounded-full! px-4 py-2 hover:bg-yellow-400 duration-500" >Book Now</button>

        </form>
    </div>

    {/* <div>
<iframe src="https://maps.googleapis.com/embed?pb=!1m18!1m12!1m3!1d3024.21114994354!2d-74.00425307511263!3d40.713368037533144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a18a8f1e8a7%3A0x354a2435f5095fd1!2sCity%20Hall!5e0!3m2!1sar!2s!4v1776614334309!5m2!1sar!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
   </div> */}

</main>

    </div>
  )
}

export default Article