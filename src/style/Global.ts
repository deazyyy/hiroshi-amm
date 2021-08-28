import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Poppins", sans-serif;
    font-weight:600 
  }
  body {
    background: linear-gradient(
      90deg
      , rgb(120, 170, 231) 0%, rgb(71, 205, 184) 100%);
    // width: fit-content;
    background-position:top 3vh left;
    font-family: "Poppins", sans-serif;
    img {
      height: auto;
      max-width: 100%;
    }
  }
  // .connectBtn{
  //   img{
  //     display:none;
  //   }
  // }
  // .menutopdesk{
  //   display:none;
  // }
  .menuconntouter {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 50%;
    justify-content: flex-end;
    .menulinkouter {
      display: flex;
      align-items: center;
      width: auto;
      justify-content: space-between;
      svg {
        display: none;
      }
      .priceouter {
        display: flex;
        // margin-right: 60px;
        a {
          display: flex;
          align-items: center;
  
          // &:nth-child(1) {
          //   padding-right: 14px;
          //   margin-right: 14px;
          //   border-right: 2px solid rgba(146, 255, 241, 0.3);
          // }
          div {
            color: #fff !important;
            font-weight: 500;
            span {
              color: #c5ffff !important;
              margin-right: 4px;
              font-size: 15px;
              font-weight: 400;
            }
          }
        }
      }
    }
    .connectrowouter {
      display: flex;
      align-items: center;
      z-index: 0;
      
    }
    .dropdown {
      position: relative;
      width: 76px;
      cursor: pointer;
  
      &__face,
      &__items {
        background-color: transparent;
        border: 2px solid rgba(146, 255, 241, 0.3);
        padding: 10px;
        border-radius: 25px;
        cursor: pointer;
        i {
          color: rgba(146, 255, 241, 0.3) !important;
        }
      }
  
      &__face {
        display: block;
        position: relative;
        margin-right: 10px;
      }
  
      &__items {
        background-color: rgba(146, 255, 241, 0.3);
        border: 0;
        margin: 0;
        position: absolute;
        right: 0;
        top: 50%;
        width: 100%;
        list-style: none;
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        visibility: hidden;
        z-index: -1;
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.93, 0.88, 0.1, 0.8);
        width: 200px;
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        align-items: center;
        img {
          height: 18px;
        }
        i {
          color: #fff !important;
          font-size: 16px;
        }
  
        &::before {
          content: "";
          background-color: transparent;
          position: absolute;
          bottom: 100%;
          right: 20%;
          height: 40px;
          width: 20px;
        }
      }
  
      &__arrow {
        border-bottom: 2px solid #fff;
        border-right: 2px solid #fff;
        position: absolute;
        top: 50%;
        right: 20px;
        width: 10px;
        height: 10px;
        transform: rotate(45deg) translateY(-50%);
        transform-origin: right;
      }
      &__text {
        img {
          width: 16px;
        }
      }
      input {
        display: none;
  
        &:checked ~ .dropdown__items {
          top: calc(100% + 10px);
          visibility: visible;
          opacity: 1;
          @media screen and (max-width: 550px) {
            left:15px;
          }
        }
      }
    }
    .centeric {
      display: flex;
      align-items: center;
      position: absolute;
      right: 50%;
      transform: translateX(-50%);
      z-index: 1;
      i {
        color: #766d78;
      }
      img {
        width: 22px !important;
        margin-right: 10px;
      }
      .hamburger {
        [type="checkbox"]:checked,
        [type="checkbox"]:not(:checked) {
          position: absolute;
          left: -9999px;
        }
        .menu-icon:checked + label,
        .menu-icon:not(:checked) + label {
          position: fixed;
          top: -12px;
          right: 0;
          display: block;
          width: 30px;
          height: 30px;
          padding: 0;
          margin: 0;
          cursor: pointer;
          z-index: 10;
          transform-origin: center;
          transform: scale(0.85);
        }
        .menu-icon:checked + label:before,
        .menu-icon:not(:checked) + label:before {
          position: absolute;
          content: "";
          display: block;
          width: 30px;
          height: 20px;
          z-index: 20;
          top: 0;
          left: 0;
          border-top: 2px solid #ececee;
          border-bottom: 2px solid #ececee;
          transition: border-width 100ms 1500ms ease,
            top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
            height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
            background-color 200ms ease,
            transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        .menu-icon:checked + label:after,
        .menu-icon:not(:checked) + label:after {
          position: absolute;
          content: "";
          display: block;
          width: 22px;
          height: 2px;
          z-index: 20;
          top: 10px;
          right: 4px;
          background-color: #ececee;
          margin-top: -1px;
          transition: width 100ms 1750ms ease, right 100ms 1750ms ease,
            margin-top 100ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        .menu-icon:checked + label:before {
          top: 10px;
          transform: rotate(45deg);
          height: 2px;
          background-color: #ececee;
          border-width: 0;
          transition: border-width 100ms 340ms ease,
            top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
            height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
            background-color 200ms 500ms ease,
            transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        .menu-icon:checked + label:after {
          width: 30px;
          margin-top: 0;
          right: 0;
          transform: rotate(-45deg);
          transition: width 100ms ease, right 100ms ease,
            margin-top 100ms 500ms ease,
            transform 200ms 1700ms cubic-bezier(0.23, 1, 0.32, 1);
        }
  
        .menu-icon:not(:checked) + label:before {
          content: "Menu";
          color: #fff;
          font-size: 12px;
          top: 2px;
          border-top: 0px solid #ececee;
          border-bottom: 0px solid #ececee;
        }
        .menu-icon:not(:checked) + label:after {
          opacity: 0;
        }
        .nav {
          position: fixed;
          top: -25px;
          right: -6px;
          display: block;
          width: 45px;
          height: 45px;
          padding: 0;
          margin: 0;
          z-index: 9;
          overflow: hidden;
          box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.3);
          background-color: #d92531;
          animation: border-transform 7s linear infinite;
          transition: top 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1),
            right 350ms 1100ms cubic-bezier(0.23, 1, 0.32, 1),
            transform 250ms 1100ms ease,
            width 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1),
            height 650ms 400ms cubic-bezier(0.23, 1, 0.32, 1);
        }
        @keyframes border-transform {
          0%,
          100% {
            border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
          }
          14% {
            border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
          }
          28% {
            border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
          }
          42% {
            border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
          }
          56% {
            border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
          }
          70% {
            border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
          }
          84% {
            border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
          }
        }
  
        .menu-icon:checked ~ .nav {
          animation-play-state: paused;
          top: -60vh;
          right: -100vw;
          // transform: translate(112vw,-60vh);
          width: 200vw;
          height: 200vh;
          transition: top 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
            right 350ms 700ms cubic-bezier(0.23, 1, 0.32, 1),
            transform 250ms 700ms ease,
            width 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1),
            height 750ms 1000ms cubic-bezier(0.23, 1, 0.32, 1);
          overflow: hidden;
        }
  
        .nav ul {
          position: absolute;
          top: 50%;
          left: 0;
          display: block;
          width: 100%;
          padding: 0;
          margin: 0;
          z-index: 6;
          text-align: center;
          transform: translateY(-50%);
          list-style: none;
        }
        .nav ul li {
          position: relative;
          display: block;
          width: 100%;
          padding: 0;
          margin: 10px 0;
          text-align: center;
          list-style: none;
          pointer-events: none;
          opacity: 0;
          visibility: hidden;
          transform: translateY(30px);
          transition: all 250ms linear;
        }
        .nav ul li:nth-child(1) {
          transition-delay: 200ms;
        }
        .nav ul li:nth-child(2) {
          transition-delay: 150ms;
        }
        .nav ul li:nth-child(3) {
          transition-delay: 100ms;
        }
        .nav ul li:nth-child(4) {
          transition-delay: 50ms;
        }
        .nav ul li a {
          font-family: "Montserrat", sans-serif;
          font-size: 32px;
          text-transform: uppercase;
          line-height: 1.2;
          font-weight: 800;
          display: inline-block;
          position: relative;
          color: #ececee;
          transition: all 250ms linear;
        }
        .nav ul li a:hover {
          text-decoration: none;
          color: #ffeba7;
        }
        .nav ul li a:after {
          display: block;
          position: absolute;
          top: 50%;
          content: "";
          height: 2vh;
          margin-top: -1vh;
          width: 0;
          left: 0;
          background-color: #d92531;
          opacity: 0.8;
          transition: width 250ms linear;
        }
        .nav ul li a:hover:after {
          width: 100%;
        }
  
        .menu-icon:checked ~ .nav ul li {
          pointer-events: auto;
          visibility: visible;
          opacity: 1;
          transform: translateY(0);
          transition: opacity 350ms ease, transform 250ms ease;
        }
        .menu-icon:checked ~ .nav ul li:nth-child(1) {
          transition-delay: 1400ms;
        }
        .menu-icon:checked ~ .nav ul li:nth-child(2) {
          transition-delay: 1480ms;
        }
        .menu-icon:checked ~ .nav ul li:nth-child(3) {
          transition-delay: 1560ms;
        }
        .menu-icon:checked ~ .nav ul li:nth-child(4) {
          transition-delay: 1640ms;
        }
  
        .logo {
          position: absolute;
          top: 60px;
          left: 50px;
          display: block;
          z-index: 11;
          transition: all 250ms linear;
        }
        .logo img {
          height: 26px;
          width: auto;
          display: block;
        }
  
        @media screen and (max-width: 991px) {
          .logo {
            left: 30px;
          }
          h1 {
            -webkit-text-stroke: 2px transparent;
            text-stroke: 2px transparent;
            -webkit-text-fill-color: #ffeba7;
            text-fill-color: #ffeba7;
            color: #ffeba7;
          }
        }
        @media screen and (max-width: 800px) {
        }
        @media screen and (max-width: 700px) {
          .menu-icon:checked ~ .nav {
            right: -118vw;
          }
        }
        @media screen and (max-width: 600px) {
          .menu-icon:checked ~ .nav {
            right: -125vw;
          }
        }
        @media screen and (max-width: 500px) {
          .menu-icon:checked ~ .nav {
            right: -118vw;
          }
        }
      }
    }
    @media (max-width: 968px) {
      .centeric {
        position: relative;
        right: 0;
        transform: translateX(0);
      }
  
      max-width: unset;
      .menulinkouter {
        justify-content: flex-end;
      }
    }
    @media (max-width: 768px) {
      justify-content: flex-end;
      .centeric {
        transform: translateX(0%);
      }
      .menulinkouter {
        justify-content: center;
      }
      .menulinkouter{
        .dropdown{
          display:none;
        }
      }
    }
    @media (max-width: 500px) {
      div, button{
        font-size: 11px !important;
      }
      .connectBtn{
        button{
          padding: 10px 12px;
        }
      }    
      .exchangemenubtn{
        padding: 10px 12px !important;
        margin-right:10px;
        margin-left:-6px;
      }
      .backtofarmbtn{
        padding: 10px 12px !important;
        margin-right:10px;
        margin-left:-6px;
      }
      .dropdown__face{
        padding: 8px 8px !important;
  
      }
      .dropdown__text {
        transform:scale(0.8);
      }
      
    }
  }
  .connectBtn {
     button {
      background-color: rgba(146, 255, 241, 0.3);
      // background: transparent;
      border:0;
      color:#fff;
      img{
        height:16px;
      }
    }
    img {
      // display: none;
      height:23px;
      margin-right:6px;
      width:auto;
    }
  }
  .menutopdesk {
    margin: 0 auto;
    height: auto !important;
    left: 50%;
    transform: translateX(-50%);
    background-color: transparent;
    border-bottom: 0;
    position: relative;
    .menutopdeskinner {
      margin: auto;
      padding: 0 24px;
      width:calc( 100% - 5vw );
      // max-width: 1200px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    @media (max-width: 768px) {
      .menutopdeskinner {
        margin-top:14px;
        .navigation{
          margin-left:14px;
          .text{
            display:none;
          }
        }
      }
    }
  
    @media (max-width: 500px) {
      height: auto;
      top:0 !important;
      .menutopdeskinner {
        margin-top: 10px;
        margin-bottom: 10px;
        padding:0;      
      }
    }
    
  }
  .menuconntouter{
    display:flex;
    align-items:center;
    .connectrowouter{
      display:flex;
      align-items:center;
    }
  }
  .innerbody{
    max-width:1200px;
    // div:first-child{max-width:unset}
  } 
  .styledpanelcss{display:none}
  .innerbody{}
  .tags{
    color: #4bb3dd;
    border: 2px solid #4bb3dd;
    border-radius:8px;
    svg{
      fill:#4bb3dd
    }
  }
  .pianoimg{
    margin-left:-12px;
    margin-top:-20px;
    height:100%;
    max-height:450px;
    @media (max-width: 968px) {
      max-height:300px;
      margin-top:0;
    } 
  }
  .mozartstandingimg{
    height:100%;
    max-height:120px
  }
  .mozartstatsimg{
    position: relative;
    bottom: -16px;
    max-height: 260px;
    margin-left: auto;
    display: block;
    margin-right: 25px;
    margin-top: -100px;
    @media (max-width: 968px) {
      bottom: -15px;
    } 
  }
  .lockiconouter {
    background: rgba(255, 100, 100, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 8px;
    margin-left: 10px;
    img {
      width: auto;
      height: 14px;
    }
  }
  
  .nav_link {
    color: #fff;
    display: block;
    cursor: pointer;
    margin-right: 20px;
    border: 2px solid rgba(146, 255, 241, 0.3);
    font-weight: 400;
    padding: 10px 20px;
    border-radius: 20px;
    &:hover {
      color: #fff;
    }
  }
  .menufooter {
    position: relative;
    padding: 8px 0;
    .menutopdeskinner {
      div:first-child {
        display: flex;
        align-items: center;
        color: #fff;
        .logoName {
          font-weight: 500;
        }
      }
    }
    @media (max-width: 768px) {
      .logoimg{
        margin-right:0;
      }
      .ecosystemimg{
        margin:10px 0;
        height: 40px;
      }
    }
    .socialIcons {
      ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        img {
          position: relative;
          top: 2px;
        }
        li {
          margin: 0 8px;
          i {
            color: #fff;
          }
        }
      }
      @media (max-width: 500px) {
        margin-top: 12px;
      }
    }
    .priceouter {
      margin-right: 0px !important;
    }
  }
  // menu hamburger animation
.navigation {
  position: relative;

  .text {
    display: inline-block;
    transition: all 5s ease;
    opacity: 1;
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    vertical-align: super;
    margin-left: 7px;
  }

  [type="checkbox"]:checked,
  [type="checkbox"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  .menu-icon:checked + label,
  .menu-icon:not(:checked) + label {
    position: relative;

    display: inline-block;
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0;
    cursor: pointer;
    z-index: 10;
    transform-origin: center;
    transform: scale(0.8);
    top: 5px;
  }
  .menu-icon:checked + label:before,
  .menu-icon:not(:checked) + label:before {
    position: absolute;
    content: "";
    display: inline-block;
    width: 30px;
    height: 20px;
    z-index: 20;
    top: 0;
    left: 0;
    border-top: 2px solid #ececee;
    border-bottom: 2px solid #ececee;
    transition: border-width 100ms 800ms ease,
      top 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
      height 100ms 1600ms cubic-bezier(0.23, 1, 0.32, 1),
      background-color 200ms ease,
      transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .menu-icon:checked + label:after,
  .menu-icon:not(:checked) + label:after {
    position: absolute;
    content: "";
    display: inline-block;
    width: 22px;
    height: 2px;
    z-index: 20;
    top: 10px;
    right: 4px;
    background-color: #ececee;
    margin-top: -1px;
    transition: width 100ms 950ms ease, right 100ms 950ms ease,
      margin-top 100ms ease, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .menu-icon:checked + label:before {
    top: 10px;
    transform: rotate(45deg);
    height: 2px;
    background-color: #ececee;
    border-width: 0;
    transition: border-width 100ms 340ms ease,
      top 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
      height 100ms 300ms cubic-bezier(0.23, 1, 0.32, 1),
      background-color 200ms 500ms ease,
      transform 200ms 500ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .menu-icon:checked + label:after {
    width: 30px;
    margin-top: 0;
    right: 0;
    transform: rotate(-45deg);
    transition: width 100ms ease, right 100ms ease, margin-top 100ms 500ms ease,
      transform 200ms 500ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  .menu-icon:not(:checked) + label:before {
    content: "  ";
    color: #fff;
    font-size: 12px;
    top: 1px;
    border-top: 2px solid #ececee;
    border-bottom: 2px solid #ececee;
  }
  .menu-icon:not(:checked) + label:after {
    opacity: 1;
  }

  .navigation__checkbox {
    display: none;
  }

  .menu-icon:checked ~ .navigation__nav {
    transform: translateX(0);
    visibility: initial;
    opacity: 1;
  }
  .menu-icon:checked ~ .text {
    opacity: 0;
    transition: all 0s ease;
  }

  .navigation__nav {
    position: absolute;
    top: 0;
    left: 36px;
    height: fit-content;
    width: max-content;
    z-index: 11;
    transform: translateX(-5%);
    visibility: hidden;
    opacity: 0;
    transition: opacity 2s ease-in,
      transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  .navigation__list {
    position: static;
    list-style: none;
    @media (max-width: 500px) {
      padding: 10px;
      background: rgba(70, 164, 198, 0.85);
      border-radius: 12px;
      .navigation__link {
        font-size: 13px !important;
      }
    }
  }
  .navigation__item {
    margin-bottom: 10px;
  }

  .navigation__link:link,
  .navigation__link:visited {
    font-size: 15px;
    font-weight: 500;
    padding: 0;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.4s;
  }
  .navigation__link:hover,
  .navigation__link:active {
    color: #c5ffff;
    background-position: 100%;
    transform: translateX(1rem);
  }

  .navigation__checkbox:checked
    + .navigation__button
    .navigation__icon-span:nth-child(1),
  .navigation__checkbox:checked
    + .navigation__button
    .navigation__icon-span:nth-child(6) {
    transform: rotate(45deg);
  }
  .navigation__checkbox:checked
    + .navigation__button
    .navigation__icon-span:nth-child(2),
  .navigation__checkbox:checked
    + .navigation__button
    .navigation__icon-span:nth-child(5) {
    transform: rotate(-45deg);
  }
  .navigation__checkbox:checked
    + .navigation__button
    .navigation__icon-span:nth-child(2),
  .navigation__checkbox:checked
    + .navigation__button
    .navigation__icon-span:nth-child(6) {
    transform-origin: left;
  }
  .navigation__checkbox:checked
    + .navigation__button
    .navigation__icon-span:nth-child(1),
  .navigation__checkbox:checked
    + .navigation__button
    .navigation__icon-span:nth-child(5) {
    transform-origin: right;
  }
  .navigation__checkbox:checked
    + .navigation__button
    .navigation__icon-span:nth-child(3) {
    left: -50%;
    opacity: 0;
  }
  .navigation__checkbox:checked
    + .navigation__button
    .navigation__icon-span:nth-child(4) {
    left: 100%;
    opacity: 0;
  }
  .navigation__button:hover .navigation__icon-span:nth-child(3) {
    transform: translateX(-0.3rem) scale(1.1);
  }
  .navigation__button:hover .navigation__icon-span:nth-child(4) {
    transform: translateX(0.3rem) scale(1.1);
  }
  .navigation__checkbox:checked + .navigation__button:hover .navigation__icon {
    transform: rotate(180deg);
  }

  .header {
    background-image: linear-gradient(to right bottom, #7ed56f, #28b485);
    height: 95vh;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  }
  .header__text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
}
.logoimg {
  height: auto;
  width: 185px;
  margin-right: 20px;
  @media screen and (max-width: 980px) {
    width: 52px;
    display:none;
  }
}

.logomobileimg{
  display:none;
  @media screen and (max-width: 980px) {
    width: 52px;
    display:block;
    margin-right:12px
  }
}
  .logoleft {
    display: flex;
    align-items: center;
  }
  .ecosystemimg{
    height:50px
  }






  .bgbxheading{font-size:28px}


  .claimmodelouter{
    padding:20px;
    border-radius:20px;
    background:#fff;
    h2{
      font-size:22px;
      font-weight:700;
    }
    h3{
      font-size:18px;
      font-weight:600;
    }
    .mozarrthead{
      position:absolute;
      height:90px;
      width:auto;
      top:0;
      left:50%;
      transform:translate(-50%,-50%);
    }
    .modalouter{
      margin-top:40px;
      color:#000;
      .type{
        text-decoration:underline;
      }
      .gbg{
        border-radius: 15px;
        background-color: rgba(246,246,246,1);
        padding:16px;
        line-height:1.5;
      }
    }
    
  }
  .claimairdrop{
    padding:60px 20px;
    text-align:center;
    margin-top:14px;
  }

  //responsive
  @media (max-width: 968px) {
    // .framelgbg {
    // 	background: url("images/hyrule/frame402.png");
    // 	background-size: 100% 100%;
    // }
    .homecardouter .bgbxl{
      // background: url("images/hyrule/framebxl400bg.png");
      // background-size: 100% 100%;
      min-height: 254px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }


  .Mainsitearrow{
    display:flex;
    flex-direction:column;
    position:absolute;
    left:0;
    padding: 0 20px 20px;
    border-radius: 14px;
    img{
      height:60px;
      width:auto;
    }
    @media (max-width: 600px) {
      display:none;
    }
  }
  .bouncea {

    animation: bounce-7 2s infinite;
    animation-timing-function: cubic-bezier(0.280, 0.840, 0.420, 1);
}
@keyframes bounce-7 {
    0%   { transform: scale(1,1)      translateY(0); }
    10%  { transform: scale(1.1,.9)   translateY(0); }
    30%  { transform: scale(.9,1.1)   translateY(-16px); }
    50%  { transform: scale(1.05,.95) translateY(0); }
    57%  { transform: scale(1,1)      translateY(-6px); }
    64%  { transform: scale(1,1)      translateY(0); }
    100% { transform: scale(1,1)      translateY(0); }
}
  .bounce {
    position: absolute;
    bottom: 30px;
    left: 50% ;
    width: auto;
    height: 60px ;
    margin-left:-30px;
    animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    -moz-animation: bounce 2s infinite;
    -o-animation: bounce 2s infinite;
  }
   
  @-webkit-keyframes bounce {
    0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);}	
    40% {-webkit-transform: translateY(-30px);}
    60% {-webkit-transform: translateY(-15px);}
  }
   
  @-moz-keyframes bounce {
    0%, 20%, 50%, 80%, 100% {-moz-transform: translateY(0);}
    40% {-moz-transform: translateY(-30px);}
    60% {-moz-transform: translateY(-15px);}
  }
   
  @-o-keyframes bounce {
    0%, 20%, 50%, 80%, 100% {-o-transform: translateY(0);}
    40% {-o-transform: translateY(-30px);}
    60% {-o-transform: translateY(-15px);}
  }
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-30px);}
    60% {transform: translateY(-15px);}
  }
  .invinciheight{
    @media (max-width: 768px) {
      margin-top:40px;
    }
  }















  .wavestop {
    position: relative;
    top: -130px;
    height: 150px;
    width: 100%;
    .waves {
      display: block !important;
      // min-width:900px
    }
    .wave2,
    .wave3 {
      position: absolute;
      bottom: 0;
    }
    .wave3 {
      z-index: 5;
      bottom: -50px;
    }
    .wave1 {
      z-index: 1;
    }
    .wave2 {
      z-index: 2;
      bottom: -20px;
    }
  }
  .wavesbottom {
    position: relative;
    top: 0;
    margin-top: 120px;
    margin-bottom: 50px;
    height: 150px;
    width: 100%;
    .waves {
      display: block !important;
    }
    .wave2,
    .wave3 {
      position: absolute;
      bottom: 0;
    }
    .wave3 {
      z-index: 5;
      bottom: -50px;
    }
    .wave1 {
      z-index: 1;
    }
    .wave2 {
      z-index: 2;
      bottom: -20px;
    }
  }










  // modal progress bar

  .progress {
    margin: 20px auto;
    padding: 4px;
    width: 90%;
    height: 30px;
    overflow: hidden;
    background-color: transparent;
    border-radius: 20px;
    position: relative;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
      background: linear-gradient(90deg, #78aae7 0%, #47cdb8 100%);
      opacity: 0.2;
    }
  }
  
  .bar {
    position: relative;
    float: left;
    min-width: 0%;
    height: 100%;
    background: linear-gradient(90deg, #78aae7 0%, #47cdb8 100%), #c4c4c4;
    border-radius: 18px;
  }
  
  .percent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    font-family: tahoma, arial, helvetica;
    font-size: 11px;
    font-weight: 400;
    color: white;
  }
  .rewards {
    .bar {
      position: static;
    }
    .percent {
      color: #2f604e;
      font-weight: 600;
    }
  }
  
  // modal config
  .ReactModal__Overlay {
    background-color: transparent !important;
    background: linear-gradient(
      0deg,
      rgba(24, 77, 124, 0.52),
      rgba(24, 77, 124, 0.52)
    );
    z-index: 99;
  }
  .ReactModal__Content {
    max-height: 90vh;
    overflow-y: scroll !important;
    overflow-x: hidden !important;
    scrollbar-width: none;
  }
  
  .inputmodal{
    overflow:hidden !important
  }




  .claimmodelouter {
    padding: 20px;
    border-radius: 20px;
    background: #fff;
    font-weight: 400 !important;
    font-size: 14px;
    color: rgba(47, 75, 96, 0.5);
    text-align: center;
    line-height: 1.3;
    overflow: hidden;
    
  }

  .nav-pills {
    // background: linear-gradient(90deg, #78AAE7 0%, #47CDB8 100%), #FFFFFF;
    // margin: -23px -23px 20px;
    // padding: 40px 40px 0;
    position: absolute;
    width: 100%;
    left: 15%;
    top: 4%;
    a {
      color: #c5ffff;
      font-weight: 400;
      margin: 0 10px;
    }
    .active a {
      color: #fff !important;
    }
  }
  .tab-content {
    .wavestop {
      top: 0;
      bottom: 0px;
      margin-bottom: 40px;
      .wave1 {
        bottom: -30px;
        position: relative;
      }
      .wave3 path {
        fill: #fff !important;
      }
      .dogwave {
        position: relative;
        bottom: 116px;
        z-index: 3;
        width: 22%;
        max-width: 130px;
        left: 25%;
      }
    }
    #poptab2 {
      .dogwave {
        left: unset;
        right: 25%;
      }
    }
    .header {
      background: linear-gradient(90deg, #78aae7 0%, #47cdb8 100%), #ffffff;
      min-height: 300px;
      margin: -23px -23px -20px;
      flex-direction: column;
      justify-content: flex-end;
      display: flex;
    
    }
    .headerbtm {
      position: relative;
      z-index: 10;
    }
    span {
      color: #2f4b60;
      font-weight: 500;
    }
    h5 {
      color: #2f4b60;
      font-size: 14px;
      font-weight: 600;
      margin-top: 10px;
      margin-bottom: 12px;
    }
    .top {
      color: #2f4b60;
      font-size: 14 px;
    }
    div {
      font-weight: 400;
    }
    a {
      color: #47cdb8;
      font-weight: 400;
    }
    .info {
      width: 80%;
      margin: auto;
    }
  }
  .modalouter {
    margin-top: 40px;
    color: #000;
    .type {
      text-decoration: underline;
    }
    .gbg {
      border-radius: 15px;
      background-color: rgba(246, 246, 246, 1);
      padding: 16px;
      line-height: 1.5;
    }
  }









  .wavestop {
    top: 0;
    bottom: 0px;
    margin-bottom: 40px;
    .wave1 {
      bottom: 0px;
      position: relative;
    }
    .wave3 path {
      fill: #fff !important;
    }
    .dogwave {
      position: relative;
      bottom: 116px;
      z-index: 3;
      width: 22%;
      max-width: 130px;
      left: 25%;
    }
  }












  .claimairdrop {
    padding: 30px 20px;
    text-align: center;
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    .col {
      font-weight: 400;
      font-size: 13px;
      padding: 0 10px;
      max-width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    h2 {
      color: #2f4b60;
      margin: 16px 0;
      font-weight: 600;
      font-size: 22px;
    }
    .outlineBtns {
      background-color: transparent !important;
      background-image: linear-gradient(
        120deg,
        transparent 50%,
        #99bfec 50%,
        #69d9c9 100%
      ) !important;
      -webkit-transition: 0.5s;
      transition: 0.5s;
      background-size: 250% auto;
      color: #69d9c9;
      font-weight: 500;
      border-radius: 34px;
      background-position: -5px;
      display: block;
      cursor: pointer;
      border: 2px solid rgba(105, 217, 201, 0.2);
      padding: 8px 18px;
      font-size: 14px;
      &.burn {
        border: 2px solid rgba(119, 171, 230, 0.2);
        color: #77abe6;
      }
    }
  
    @media (max-width: 500px){
      flex-flow:wrap;
      .col{
        max-width:50%;
        min-width: 50%;
  margin-bottom: 20px;
      }
    }
  }





















.exchangeicon{
  color:#77B3C0
}
.navOuter a{
  font-weight:600;
  &:hover{
    color:#fff
  }
}
#join-pool-button{width:100%}

.depositmodal h2, .modalwallet h2, .settingsmodal h2, .recentransactionmodal h2,  .connectmodal h2{
  color: #2F4B60 !important;
  font-size:22px !important;
  font-weight:600 !important
}
.modalwallet{
  position:relative;
  overflow: visible;
 h2{
  margin-top:45px !important;
 }
  .useridimg{
    position:absolute;
    top:0;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius:50%;
    width:100px;
  }
}

.settingsmodal{

}
.exchangemenubtn{display:none}

//notification  modal
.notificationmodal{
  overflow:visible !important;
  border:0;
  outline:0;
}
.notificationmodalouter{
  overflow:visible;
  background: rgba(12, 33, 53, 0.54);
  color:rgba(255, 255, 255, 0.78);
  text-align:left;
  position:relative;
  min-height: 100px;
  font-weight:400;
  .lpimage{
    position: absolute;
    left: -50px;
    bottom: -20px;
    height: calc( 100% + 55px );
    max-height: 170px;
  }
  .lpimage2{
    position: absolute;
    left: -70px;
    bottom: -24px;
    height: calc( 100% + 60px );
    // max-height: 180px;
  }
  div{font-weight:400}
  .content{
    margin-left:90px;
    font-size:14px;
    h2{
      font-weight:600;
      margin-bottom:6px;
      font-size:16px;
      color:rgba(255, 255, 255, 1);
    }
    a{
      display:block;
      color: #63ED63;
      font-weight:400;
      margin-top:5px;
    }
  }
}

.closebtn{
  background:transparent;
  border:0;
  padding:0;
  outline:0;
  margin-left:auto;
  display:block;
  margin-bottom:-18px;
}

`

export default GlobalStyle
