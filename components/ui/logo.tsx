import Link from 'next/link'

import LogoImage from '@/public/images/image.png'
import Image from 'next/image'



export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image className="md:max-w-none mx-auto rounded" src={LogoImage} width={50} height={50} alt='logo'/>
    </Link>
  )
}
