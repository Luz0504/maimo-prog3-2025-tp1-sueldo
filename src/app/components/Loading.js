import Image from "next/image"

const Loading = () => {
  return (
    <div className="loadingBar">
        <Image  
        src="/assets/Junimo.gif"
        width={50}
        height={20}
        alt='Junimo'/>
        <div className="loader"></div>
    </div>
  )
}

export default Loading