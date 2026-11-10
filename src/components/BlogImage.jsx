import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";


const BlogImage = ({bit}) => {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = bit.img;

    img.onload = () => {
      setWidth(img.width)
      setHeight(img.height)
    };
  }, [bit.img]);




  const MaybeLink = ({ href, children }) => href ? <a href={href}>{children}</a> : children

  const calculateLeft = () =>{
    const pos = bit.positioning;
    const leftPosVw = pos.left* 50 + 50
    const widthVw = pos.width/window.innerWidth * 100
    let adjust = 0;
    if (leftPosVw + widthVw/2 > 100) {
      adjust = -widthVw;
    }
    if (leftPosVw - widthVw/2 < 0 ) {
      adjust = widthVw;
    }
    return leftPosVw + adjust;
  }

  const calculateTop = () =>{
    const pos = bit.positioning;
    const topPosVh = pos.top* 50 + 50
    const aspectRatio = height/width
    const heightVh = (pos.width* aspectRatio+12)/window.innerHeight * 100
    let adjust = 0;
    console.log(heightVh, topPosVh );
    if (topPosVh + heightVh/2 > 100) {
      adjust = -heightVh;
    }
    if (topPosVh - heightVh/2 < 0 ) {
      adjust = heightVh;
    }
    return topPosVh + adjust;
  }    

  return <div 
            className={" absolute -translate-x-1/2 -translate-y-1/2  " +  (!bit.isVisible && " invisible opacity-0") }
            style={{
                  width: bit.positioning.width,
                  left: `${calculateLeft()}vw`,
                  top: `${calculateTop()}vh`,
          }}>

    <MaybeLink href={bit.isVisible && (bit.write ? `writes/` + bit.write : false)}>
      <p className="text-[10px] text-left">{bit.img}</p>
      <img src={bit.img} className="border w-64" />
    </MaybeLink>
  </div>
}

export default BlogImage