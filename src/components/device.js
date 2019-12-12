export const device = {
  /* 
        ##Device = Most of the Smartphones Mobiles (Portrait)
        ##Screen = B/w 320px to 479px
    */
  mobileS: `(min-width: 320px) and (max-width: 480px)`,
  mobileSLandscape: `(min-width: 320px) and (max-width: 480px) and (orientation: landscape)`,
  /* 
        ##Device = Low Resolution Tablets, Mobiles (Landscape)
        ##Screen = B/w 481px to 767px
    */
  mobileM: `(min-width: 481px) and (max-width: 767px)`,
  mobileMLandscape: `(min-width: 481px) and (max-width: 767px) and (orientation: landscape)`,
  /* 
        ##Device = Tablets, Ipads (landscape)
        ##Screen = B/w 768px to 1024px
    */
  tablet: `(min-width: 768px)`,
  tabletland: `(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)`,
  /* 
        ##Device = Tablets, Ipads (portrait)
        ##Screen = B/w 768px to 1024px
    */
  tabletPortrait: `(min-width: 768px) and (orientation: portrait) 
  `,
  /* 
        ##Device = Laptops, Desktops
        ##Screen = B/w 1025px to 1280px
    */
  ipadProPortrait: `(min-width: 1024px) 
   and (max-height: 1366px) 
   and (orientation: portrait) 
   and (-webkit-min-device-pixel-ratio: 1.5)`,

  laptop: `(min-width: 1024px)`,
  /* 
    ##Device = Desktops
    ##Screen = 1281px to higher resolution desktops
    */
  desktop: `(min-width: 1281px)`,
}
