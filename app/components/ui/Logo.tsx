import React from 'react'

export const LogoLight = () => (
  <p className="font-display text-xl md:text-2xl text-white font-normal">
    Pillar
  </p>
)

const Logo = () => (
  <img
    className="block w-32 max-w-full shadow-xl rounded"
    style={
      {
        // height: '72px',
        // background: 'RGBA(173, 6, 184, 1.00)',
      }
    }
    src="/static/LogoBoxBig.png"
    alt=""
  />
)

export const LogoMasked = () => (
  <img
    className="block w-32 max-w-full shadow-xl rounded"
    src="/static/LogoPurpleMask.png"
    alt=""
  />
)

export default Logo
