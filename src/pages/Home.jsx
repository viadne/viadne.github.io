  import BlogImage from "../components/BlogImage"
  import Sidebar from "../components/SideBar"
  import bits from "../../data/bits.json"
  import { useState, useEffect } from "react"

  const Home = () => {
    const [numBits, setNumBits] = useState(0)
    const [bitsInfo, setBitsInfo] = useState([])

    const randomSign = () => Math.random() > .5? -1 : 1
  
    useEffect(() => {
      setBitsInfo(bits.map((bit, idx) => {
      bit["positioning"] = {
            width: Math.random() * (80) + 200,
            left: randomSign() * Math.random() * (window.innerWidth/4) + (window.innerWidth/2),  // 5 +- .25
            top:  randomSign() * Math.random() * (window.innerHeight/4) + (window.innerHeight/2),  // .5 +- .25
        };
        bit["isVisible"] = (idx < numBits) ;
        console.log(bit)
        return bit})
    )
    }, []); 

    const addBit = () => {
      setNumBits(numBits + 1)
      setBitsInfo( curr => curr.map( ( item, idx ) => 
        idx == numBits ? {...item, isVisible: true } : item))
    }

    return <div className="absolute inset-0" onClick={addBit}>
      <div className=' flex flex-col justify-center h-screen items-center' >
        <p className="my-auto italic">Hi!</p>
        <div>
          {bitsInfo.map( bit => <BlogImage bit={bit} />)}
        </div>
      </div>

    </div>
  }

  export default Home