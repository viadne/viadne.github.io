import { useMemo, useState } from "react";
import BlogImage from "../components/BlogImage"
import PoissonDiskSampling from "poisson-disk-sampling";
import Sidebar from "../components/SideBar";




const images = import.meta.glob("../assets/blogImages/*", { eager: true });
const imageList = Object.values(images).map((img) => img.default).reverse();

// const pds = new PoissonDiskSampling({
//   shape: [100],
//   minDistance: 40, // minimum distance between points
//   maxDistance: 100, // optional
//   tries: 30,
// });
// const points = pds.fill(); // returns array of [x, y]
// console.log(points)

const Pinboard = () => {
  const numImages = Object.keys(images).length
  const [imageCount, setImageCount] = useState(0)
  const [imageAndPositionList, setImageAndPositionList] = useState([])

  const randomSign = () => {
    return Math.random()>.5? -1:1
  }

  const appendImage = () => {
    if (imageCount >= numImages) {
      return
    }
    const w = Math.random() * (80) + 200
    setImageAndPositionList([...imageAndPositionList, {
        src: imageList[imageCount],
        width: w,
        left: randomSign() * Math.random() * (window.innerWidth/4) + (window.innerWidth/2),  // 5 +- .25
        top:  randomSign() * Math.random() * (window.innerHeight/4) + (window.innerHeight/2),  // .5 +- .25
    }])
    setImageCount(imageCount+1)
  }

  return <div className="absolute inset-0" >
    <Sidebar/>
    <div className='flex flex-col justify-center h-screen items-center' onClick={appendImage}>
      <p>a Pinboard </p>
      <p>SDFKLKDS</p>
      
      <div>
      {imageAndPositionList.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={`Blog ${index}`}
            className=" absolute -translate-x-1/2 -translate-y-1/2  "
            style={{
              width: `${img.width}px`,
              top: `${img.top}px`,
              left: `${img.left}px`,
            }}
          />
        ))}
      </div>
    </div>

    
    
  </div>
}

export default Pinboard