
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { LayoutDashboard, PenBox } from 'lucide-react'
import { checkUser } from '@/lib/checkUser'

const Header = async() => {
  await checkUser();
  return (
    <div className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b'>
      <nav className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <Link href='/'> <p className='px-4 text-3xl font-extrabold gradient gradient-title'>WEALTH</p> </Link>
        <div className='flex items-center space-x-4'>
          <SignedIn>
            <Link href={'/dashboard'} className='text-gray-600 hover:text-red-600 flex items-center gap-2'>
              <Button variant={'outline'} className={'cursor-pointer'}>
                <LayoutDashboard size={18}/>
                <span className='hidden md:inline '>Dashboard</span></Button>
            </Link>
          
            <Link href={'/transaction/create'} className='text-gray-600 hover:text-blue-600 flex items-center gap-2 '>
              <Button className={'cursor-pointer'}>
                <PenBox size={18}/>
                <span className='hidden md:inline '>Add Transaction</span></Button>
            </Link>
          
            
          </SignedIn>
          <SignedOut>
                <SignInButton forceRedirectUrl='/dashboard'>
                  <Button variant={'outline'}>Sign In</Button>
                </SignInButton>
                <SignUpButton>
                  <Button >
                    Sign Up
                  </Button>
                </SignUpButton>
              </SignedOut>
          <SignedIn>
            <UserButton
  appearance={{
    elements: {
      avatarBox: 'h-[40px] w-[40px] bg-blue-500 !important',

    },
  }}
/>

          </SignedIn>
        </div>

      </nav>
      
    </div>
  )
}

export default Header
