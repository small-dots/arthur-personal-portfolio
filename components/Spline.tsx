"use client"

import React from "react"
import Spline from '@splinetool/react-spline';

export default function SplineAni() {
  return (
    <div className="fixed top-0 left-0 opacity-20 w-screen h-screen">
    <Spline scene="https://prod.spline.design/jfWxLnOoxVidM-jN/scene.splinecode" />
    </div>
  );
}
