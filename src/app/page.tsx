'use client'
import React from 'react'
import Hero from '@/components/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    const initAos = async () => {
     await import("aos");
     AOS.init({
       duration:1000,
       easing:'ease',
       once:true,
       anchorPlacement: 'top-bottom'
     })
    };

    initAos();
 }, []);
  return (
    <div className='overflow-hidden'>
<main>
<Hero />
</main>
    </div>
  )
}
export default Home 