const Slider = () => {
  return (
    <div>
        <h1 className="text-center py-5">What Says Our Customers</h1>
        <main className="grid grid-cols-2 gap-x-40 px-20 animate-scroll max-[1025px]:grid-cols-1 max-[1025px]:py-5 max-[1025px]:gap-2.5 max-[1025px]:px-0!">
            <div>
                <div className="bg-gray-900 text-white p-3.5 rounded-md">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <p>Mike Hamell</p>
                <p>magna aliqua</p>
                </div>
                <img src="../client2.jpg" className="w-35 h-35 rounded-full border-4 border-amber-500" />
            </div>

            <div>
                <div className="bg-gray-900 text-white p-3.5 rounded-md">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <p>Moana Michell</p>
                <p>magna aliqua</p>
                </div>
                <img src="../client1.jpg" className="w-35 h-35 rounded-full border-4 border-amber-500"/>
            </div>
        </main>
    </div>
  )
}

export default Slider