import ReactMarkdown from "react-markdown";


const BlogImage = ({bit}) => {

  const MaybeLink = ({ href, children }) => href ? <a href={href}>{children}</a> : children

  return <div 
            className={" absolute -translate-x-1/2 -translate-y-1/2  " +  (!bit.isVisible && " invisible opacity-0") }
            style={{
                  width: bit.positioning.width,
                  left: bit.positioning.left,
                  top: bit.positioning.top,
          }}>

    <MaybeLink href={bit.isVisible && (bit.write ? `writes/` + bit.write : false)}>
      <p className="text-[10px] text-left">{bit.img}</p>
      <img src={bit.img} className="border w-64" />
    </MaybeLink>
  </div>
}

export default BlogImage