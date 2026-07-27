  import BlogImage from "../components/BlogImage"
  import Sidebar from "../components/SideBar"
  import bits from "../../data/hbd_bribri_bits.json"
  import { useState } from "react"

  const HbdBriBri = () => {
    const [numBits, setNumBits] = useState(0)

    const randomSign = () => Math.random() > .5? -1 : 1
  
    const bitsElements = bits.map(bit => 
      <BlogImage bit={bit}/>
    )

    const addBit = () => {
      if (numBits >= bits.length) {
        return
      }
      bits[numBits]["positioning"] = {
          width: Math.random() * (80) + 200,
          left: randomSign() * Math.random() * (window.innerWidth/4) + (window.innerWidth/2),  // 5 +- .25
          top:  randomSign() * Math.random() * (window.innerHeight/4) + (window.innerHeight/2),  // .5 +- .25
      }
      setNumBits(numBits + 1)
    }
    

    return <div className="absolute inset-0" onClick={addBit}>
      {/* <Sidebar/> */}
      <div className=' flex flex-col justify-center h-screen items-center' >
        
      <p className="my-auto italic">Happy Birthday Brian!</p>
        <div>
          {bitsElements.slice(0, numBits)}
        </div>
      </div>

    </div>
  }

  export default HbdBriBri