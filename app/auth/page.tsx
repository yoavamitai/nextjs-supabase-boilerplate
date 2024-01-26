import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { KeyRound } from 'lucide-react'
import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";


export default function Auth() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Card className="w-96 h-96 rounded-md border p-5 space-y-5 relative">
        <CardHeader className="flex flex-row items-center gap-2">
          <KeyRound />
          <CardTitle className='text-2xl font-bold'>Next + Supabase</CardTitle>
        </CardHeader>
        <p className='text-sm text-gray-300'>
          Register / Sign in Today 👇
        </p>
        <Button className='flex justify-center items-center w-full' variant="outline">
          <FaGithub className='w-4 h-4' />
          <div className="w-2" />
          Github
        </Button>
        <Button className='flex justify-center items-center w-full' variant="outline">
          <FaGoogle className='w-4 h-4' />
          <div className="w-2" />
          Google
        </Button>
      </Card>
      <div className='glowBox -z-20' >

      </div>
    </div>
  )
}


