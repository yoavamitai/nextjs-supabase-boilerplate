"use client"

import { Button } from '@/components/ui/button'
import supabaseBrowser from '@/lib/supabase/browser';
import React from 'react'
import { FaGithub, FaGoogle, FaApple, FaBitbucket, FaDiscord, FaFacebook, FaMicrosoft, FaFigma, FaLinkedin, FaSlack, FaSpotify, FaTwitch  } from 'react-icons/fa';
import { FaGitlab, FaXTwitter  } from "react-icons/fa6";
import { RiKakaoTalkLine } from "react-icons/ri";
import { SiNotion, SiZoom  } from "react-icons/si";

import { Provider } from "@supabase/supabase-js";

type authIconMapType = Record<Provider, React.JSX.Element | undefined>;

const authIconMap: authIconMapType = {
    "github": <FaGithub className='w-4 h-4' />,
    "google": <FaGoogle className='w-4 h-4' />,
    "apple": <FaApple className='w-4 h-4' />,
    "azure": <FaMicrosoft className='w-4 h-4' />,
    "bitbucket": <FaBitbucket className='w-4 h-4' />,
    "discord": <FaDiscord className='w-4 h-4' />,
    "facebook": <FaFacebook className='w-4 h-4' />,
    "figma": <FaFigma className='w-4 h-4' />,
    "gitlab": <FaGitlab className='w-4 h-4' />,
    "kakao": <RiKakaoTalkLine className='w-4 h-4' />,
    "keycloak": undefined,
    "linkedin": <FaLinkedin className='w-4 h-4' />,
    "linkedin_oidc": <FaLinkedin className='w-4 h-4' />,
    "notion": <SiNotion className='w-4 h-4' />,
    "slack": <FaSlack className='w-4 h-4' />,
    "spotify": <FaSpotify className='w-4 h-4' />,
    "twitch": <FaTwitch className='w-4 h-4' />,
    "twitter": <FaXTwitter className='w-4 h-4' />,
    "workos": undefined,
    "zoom": <SiZoom className='w-4 h-4' />,
    "fly": undefined
};

interface AuthButtonProps {
    authType: Provider;
};

const AuthButton = ({ authType }: AuthButtonProps) => {

    const handleLoginWithOAuth = (authType: Provider) => {
        const supabase = supabaseBrowser();

        supabase.auth.signInWithOAuth({
            provider: authType,
            options: {
                redirectTo: `${location.origin}/auth/callback`
            }
        })
    };

    return (
        <Button className='flex justify-center items-center w-full' variant="outline" onClick={()=>handleLoginWithOAuth(authType)}>
           {authIconMap[authType]}
            <div className="w-2" />
            {`${authType.charAt(0).toUpperCase()}${authType.slice(1)}`}
        </Button>
    )
}

export default AuthButton
