import { useMemo, useState } from "react";
import BlogImage from "../components/BlogImage"
import PoissonDiskSampling from "poisson-disk-sampling";
import Sidebar from "../components/SideBar";




const modules = import.meta.glob('../assets/writtens/*.md', { as: 'raw' });
const MDfiles = await Promise.all(
  Object.entries(modules).map(async ([path, module]) => ({
    filename: path,
    content: await module()
  }))
);

console.log(MDfiles)

const Written = () => {
  const numMD = Object.keys(modules).length
  const [mdCount, setMdCount] = useState(0)
  const [imageAndPositionList, setImageAndPositionList] = useState([])

  const randomSign = () => {
    return Math.random()>.5? -1:1
  }

  const appendImage = () => {
    if (mdCount >= numMD) {
      return
    }
    const w = Math.random() * (80) + 200
    setImageAndPositionList([...imageAndPositionList, {
        src: MDfiles[mdCount],
        width: w,
        left: randomSign() * Math.random() * (window.innerWidth/4) + (window.innerWidth/2),  // 5 +- .25
        top:  randomSign() * Math.random() * (window.innerHeight/4) + (window.innerHeight/2),  // .5 +- .25
    }])
    setMdCount(mdCount+1)
  }


  const x = 21
  return <div className="absolute inset-0" >
    <Sidebar/>
    <div className='flex flex-col justify-center h-screen items-center' onClick={appendImage}>
      <p>written </p>
      <p>SDFKLKDS</p>
      
      <div>
      {imageAndPositionList.map((img, index) => (
        <p className="text-lg absolute -translate-x-1/2 -translate-y-1/2  "
            style={{
              width: `${img.width}px`,
              top: `${img.top}px`,
              left: `${img.left}px`,
            }}>
          {img.src.content}
        </p>
          // <img
          //   key={index}
          //   src={img.src}
          //   alt={`Blog ${index}`}
          //   className=" absolute -translate-x-1/2 -translate-y-1/2  "
          //   style={{
          //     width: `${img.width}px`,
          //     top: `${img.top}px`,
          //     left: `${img.left}px`,
          //   }}
          // />
        ))}
      </div>
    </div>

    
    
  </div>
}

export default Written