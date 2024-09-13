import Image from "next/image"

interface CardProjectProps {
  src: string
}

export function CardProject({ src }: CardProjectProps) {
  return (
    <div className="flex items-center">
      <Image src={src} alt="techs" width={300} height={300} />
    </div>
  )
}