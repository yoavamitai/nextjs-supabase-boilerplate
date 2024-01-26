"use client"
import * as React from "react";
import { ThemeProvider as NextThemeprovider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";


const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemeprovider {...props}>{children}</NextThemeprovider>
}

export default ThemeProvider
