<div align="center">
  <br />
    <a href="https://skygear.onrender.com" target="_blank">
      SkyGear Banner
    </a>
  <br />


   <div>
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="MongoDB" />
    <img src="https://img.shields.io/badge/-Express.js-black?style=for-the-badge&logoColor=white&logo=express&color=000000" alt="Express.js" />
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="React.js" />
    <img src="https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logoColor=white&logo=node.js&color=339933" alt="Node.js" />
  </div>

  </div>

  <h3 align="center">
    <a href="https://skygear.onrender.com" target="_blank">
      SkyGear
    </a>
  </h3>

   <div align="center">
 This is a fully functional eCommerce shop built for selling drones, developed using the MERN stack along with Redux Toolkit. The platform features a robust backend with a MongoDB database for managing drone inventory, product categories, and customer orders. The front end offers a seamless user interface, with state management powered by Redux. Authentication is handled securely with JWT, and the shop includes full order processing capabilities. From browsing and purchasing drones to managing an online store, this platform provides all the essential features for a modern eCommerce experience. 
  </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. ⚙️ [Tech Stack](#tech-stack)
2. 🔋 [Features](#features)
3. 🤸 [Quick Start](#quick-start)

## <a name="tech-stack">⚙️ Tech Stack</a>

- MongoDB
- Express.js
- React.js
- Node.js
- Redux Toolkit

## <a name="features">🔋 Features</a>

👉 Product reviews and ratings

👉 Top products carousel

👉 Product pagination

👉 Product search feature

👉 User profile with orders

👉 Admin product management

👉 Admin user management

👉 Admin Order details page

👉 Mark orders as delivered option

👉 Checkout process (shipping, payment method, etc)

👉 PayPal / credit card integration

👉 Custom database seeder script

## <a name="quick-start">🤸 Quick Start</a>

Create `.env` and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
PAGINATION_LIMIT = 8
```

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

<details>
<summary><code>index.css</code></summary>

```css
@import url("https://fonts.cdnfonts.com/css/general-sans");

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  width: 100dvw;
  overflow-x: hidden;
  background-color: #dfdff0;
  font-family: "General Sans", sans-serif;
}

@layer base {
  @font-face {
    font-family: "circular-web";
    src: url("/fonts/circularweb-book.woff2") format("woff2");
  }

  @font-face {
    font-family: "general";
    src: url("/fonts/general.woff2") format("woff2");
  }

  @font-face {
    font-family: "robert-medium";
    src: url("/fonts/robert-medium.woff2") format("woff2");
  }

  @font-face {
    font-family: "robert-regular";
    src: url("/fonts/robert-regular.woff2") format("woff2");
  }

  @font-face {
    font-family: "zentry";
    src: url("/fonts/zentry-regular.woff2") format("woff2");
  }
}

@layer utilities {
  .border-hsla {
    @apply border border-white/20;
  }

  .nav-hover-btn {
    @apply relative ms-10 font-general text-xs uppercase text-blue-50 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer;
  }

  .floating-nav {
    @apply bg-black rounded-lg border;
  }

  .absolute-center {
    @apply absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%];
  }

  .flex-center {
    @apply flex justify-center items-center;
  }

  .mask-clip-path {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  .special-font b {
    font-family: "Zentry";
    font-feature-settings: "ss01" on;
  }

  .hero-heading {
    @apply uppercase font-zentry font-black text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem];
  }

  .about-subtext {
    @apply absolute bottom-[-80dvh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular-web text-lg md:max-w-[34rem];
  }

  .about-image {
    @apply absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw];
  }

  .animated-title {
    @apply flex flex-col gap-1 text-7xl uppercase leading-[.8] text-white sm:px-32 md:text-[6rem];
  }

  .animated-word {
    @apply special-font font-zentry font-black opacity-0;
    transform: translate3d(10px, 51px, -60px) rotateY(60deg) rotateX(-40deg);
    transform-origin: 50% 50% -150px !important;
    will-change: opacity, transform;
  }

  .bento-tilt_1 {
    @apply relative border-hsla col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out;
  }

  .bento-tilt_2 {
    @apply relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out;
  }

  .bento-title {
    @apply uppercase md:text-6xl text-4xl font-black font-zentry;
  }

  .story-img-container {
    @apply relative md:h-dvh h-[90vh] w-full;
    filter: url("#flt_tag");
  }

  .story-img-mask {
    @apply absolute left-0 top-0 size-full overflow-hidden md:left-[20%] md:top-[-10%] md:size-4/5;
    clip-path: polygon(4% 0, 83% 21%, 100% 73%, 0% 100%);
  }

  .story-img-content {
    @apply absolute w-full md:h-dvh h-[50dvh] opacity-100 left-10 top-16 md:left-0 md:top-10 lg:left-[-300px] lg:top-[-100px];
    transform: translate3d(0, 0, 0) rotateX(0) rotateY(0) rotateZ(0) scale(1);
  }

  .gallery-img-container {
    @apply size-64 overflow-hidden bg-violet-300;
  }

  .gallery-img {
    @apply size-full bg-cover;
  }

  .gallery-img-4 {
    @apply sm:size-80 md:h-96 md:w-[25rem] rounded-lg;
  }

  .sword-man-clip-path {
    clip-path: polygon(16% 0, 89% 15%, 75% 100%, 0 97%);
  }

  .contact-clip-path-1 {
    clip-path: polygon(25% 0%, 74% 0, 69% 64%, 34% 73%);
  }

  .contact-clip-path-2 {
    clip-path: polygon(29% 15%, 85% 30%, 50% 100%, 10% 64%);
  }
}

.indicator-line {
  @apply h-1 w-px rounded-full bg-white transition-all duration-200 ease-in-out;
}

.indicator-line.active {
  animation: indicator-line 0.5s ease infinite;
  animation-delay: calc(var(--animation-order) * 0.1s);
}

@keyframes indicator-line {
  0% {
    height: 4px;
    transform: translateY(-0px);
  }
  50% {
    height: 16px;
    transform: translateY(-4px);
  }
  100% {
    height: 4px;
    transform: translateY(-0px);
  }
}

/* From Uiverse.io by G4b413l */
/* https://uiverse.io/G4b413l/tidy-walrus-92 */
.three-body {
  --uib-size: 35px;
  --uib-speed: 0.8s;
  --uib-color: #5d3fd3;
  position: relative;
  display: inline-block;
  height: var(--uib-size);
  width: var(--uib-size);
  animation: spin78236 calc(var(--uib-speed) * 2.5) infinite linear;
}

.three-body__dot {
  position: absolute;
  height: 100%;
  width: 30%;
}

.three-body__dot:after {
  content: "";
  position: absolute;
  height: 0%;
  width: 100%;
  padding-bottom: 100%;
  background-color: var(--uib-color);
  border-radius: 50%;
}

.three-body__dot:nth-child(1) {
  bottom: 5%;
  left: 0;
  transform: rotate(60deg);
  transform-origin: 50% 85%;
}

.three-body__dot:nth-child(1)::after {
  bottom: 0;
  left: 0;
  animation: wobble1 var(--uib-speed) infinite ease-in-out;
  animation-delay: calc(var(--uib-speed) * -0.3);
}

.three-body__dot:nth-child(2) {
  bottom: 5%;
  right: 0;
  transform: rotate(-60deg);
  transform-origin: 50% 85%;
}

.three-body__dot:nth-child(2)::after {
  bottom: 0;
  left: 0;
  animation: wobble1 var(--uib-speed) infinite calc(var(--uib-speed) * -0.15)
    ease-in-out;
}

.three-body__dot:nth-child(3) {
  bottom: -5%;
  left: 0;
  transform: translateX(116.666%);
}

.three-body__dot:nth-child(3)::after {
  top: 0;
  left: 0;
  animation: wobble2 var(--uib-speed) infinite ease-in-out;
}

@keyframes spin78236 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes wobble1 {
  0%,
  100% {
    transform: translateY(0%) scale(1);
    opacity: 1;
  }

  50% {
    transform: translateY(-66%) scale(0.65);
    opacity: 0.8;
  }
}

@keyframes wobble2 {
  0%,
  100% {
    transform: translateY(0%) scale(1);
    opacity: 1;
  }

  50% {
    transform: translateY(66%) scale(0.65);
    opacity: 0.8;
  }
}
```

</details>

<details>
  <summary><code>components/RoundedCorners.jsx</code></summary>

```js
import React from 'react'

const RoundedCorners = () => {
  return (
    <svg
      className="invisible absolute size-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="flt_tag">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="8"
            result="blur"
          />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="flt_tag"
          />
          <feComposite
            in="SourceGraphic"
            in2="flt_tag"
            operator="atop"
          />
        </filter>
      </defs>
    </svg>
  )
}
export default RoundedCorners
```

</details>

