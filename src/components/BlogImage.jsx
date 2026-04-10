import ReactMarkdown from "react-markdown";


const BlogImage = ({bit}) => {

  const randomSign = () => Math.random() > .5? -1 : 1

  const MaybeLink = ({ href, children }) => href ? <a href={href}>{children}</a> : children

  return <div 
            className=" absolute -translate-x-1/2 -translate-y-1/2  " 
            style={{
                  width: bit.positioning.width,
                  left: bit.positioning.left,
                  top: bit.positioning.top,
          }}>

    <MaybeLink href={bit.write ? `writes/` + bit.write : false}>
      <p className="text-[10px] text-left">{bit.img}</p>
      <img src={bit.img} className="border w-64" />
    </MaybeLink>
  </div>
}

export default BlogImage