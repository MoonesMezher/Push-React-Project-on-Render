import { useEffect, useRef, useState } from "react"

const Test = () => {
    const item = useRef();
    const [color, setColor] = useState("");

    useEffect(() => {
        if(item.current) {
            item.current.style.backgroundColor = color;
        }
    }, [color])
    
    return (
        <div>
            <h2>Test</h2>
            <input type="color" onChange={(e) => setColor(e.target.value)} />
            <div ref={item} className="w-[50px] h-[50px] mx-auto my-10"></div>
        </div>
    )
}

export default Test