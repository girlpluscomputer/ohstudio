'use client'
import Image from 'next/image'

import { CardContainer } from './styles'

const Card = ({ src }: { src: string }) => {
  return (
    <CardContainer>
      <Image src={src} alt="j" fill />
    </CardContainer>
  )
}

export default Card
