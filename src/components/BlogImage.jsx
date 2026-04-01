

const BlogImage = ({bit}) => {

  const randomSign = () => Math.random() > .5? -1 : 1

  return <div 
            className=" absolute -translate-x-1/2 -translate-y-1/2  " 
            style={{
                  width: bit.positioning.width,
                  left: bit.positioning.left,
                  top: bit.positioning.top,
          }}>

    {bit.img}
    <a href="/board">
      <img 
        src={bit.img} 
        className="border w-64"
        />
    </a>
  </div>
}

export default BlogImage