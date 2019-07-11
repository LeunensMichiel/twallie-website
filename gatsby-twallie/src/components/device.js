export const device = {
  /* 
        ##Device = Most of the Smartphones Mobiles (Portrait)
        ##Screen = B/w 320px to 479px
    */
  mobileS: `(min-width: 320px) and (max-width: 480px)`,
  /* 
        ##Device = Low Resolution Tablets, Mobiles (Landscape)
        ##Screen = B/w 481px to 767px
    */
  mobileM: `(min-width: 481px) and (max-width: 767px)`,
  /* 
        ##Device = Tablets, Ipads (landscape)
        ##Screen = B/w 768px to 1024px
    */
  tabletland: `(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)`,
  /* 
        ##Device = Tablets, Ipads (portrait)
        ##Screen = B/w 768px to 1024px
    */
  tablet: `(min-width: 768px)`,
  /* 
        ##Device = Laptops, Desktops
        ##Screen = B/w 1025px to 1280px
    */
  laptop: `(min-width: 1025px)`,
  /* 
    ##Device = Desktops
    ##Screen = 1281px to higher resolution desktops
    */
  desktop: `(min-width: 1281px)`,
}
