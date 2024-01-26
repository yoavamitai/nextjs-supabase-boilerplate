"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { KeyRound } from 'lucide-react'
import React from 'react';
import AuthButton from "./AuthButton"

export default function Auth() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Card className="w-96 p-5 space-y-5 relative">
        <CardHeader>
          <div className='flex flex-row items-center gap-2'>
            <KeyRound className='translate-y-0.5' />
            <CardTitle className='text-2xl font-bold'>Next + Supabase</CardTitle>
          </div>
          <CardDescription>Register / Sign in Today 👇</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col gap-3'>
          <AuthButton authType="github" />
          <AuthButton authType="google" />
        </CardContent>


      </Card>
      <div className='glowBox -z-20' >

      </div>
    </div>
  )
}


