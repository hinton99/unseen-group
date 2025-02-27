import React from 'react'
import Image from "next/image";
import Logo from "../../../public/logo.png";
import Link from 'next/link';
import { EnvelopeIcon, QuestionMarkCircleIcon } from '@heroicons/react/16/solid';


export const Footer = () => {
  return (
    <>
    <div className="bg-gray-100 p-4">
      <div className="container mx-auto">
      <Image
        src={Logo}
        alt="logo"
      />
      <div className="text-sm text-center pt-2">
        <p className='pb-1'>2025 All Rights Reserved. Powered by <Link className="text-blue-900 hover:text-red-600" href={'#'}>TopScore Technologies Ltd</Link> Since 2017</p>
        <p><Link className="text-blue-900 hover:text-red-600" href={'#'}><EnvelopeIcon className="size-5 inline"/> Contact Us</Link> | <Link className="text-blue-900 hover:text-red-600" href={'#'}><QuestionMarkCircleIcon className="size-5 inline"/> FAQs</Link></p>
      </div>
      </div>
    </div>
    </>
  )
}
