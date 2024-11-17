// import Axioss from "./component/Axioss";
// import NavbarExp from "./component/NavbarExp";
// import Cards from "./component/Cards";
// import Cards2 from "./component/Cards2";
// import Cards3 from "./component/Cards3";
// import Buttons from "./component/Buttons";
// import Axioss2 from "./component/Axioss2";
// import { useState } from "react";
// import New from "./component/new";

// import Copies from "./c/Copies";
import Hero from "./c/hero/Hero";
import Headar from "./c/hedar/Headar";
import Pricing from "./c/pricing/Pricing";
import Service from "./c/service/Service";
import Watch from "./c/watch/Watch";
import Team from "./c/team/Team";
import FAQ from "./c/faq/FAQ";
import Start from "./c/starts/Start";
import Testimonials from "./c/testimonials/Testimonials";
import Contact from "./c/contact/Contact";
import Footer from "./c/footer/Footer";



// import Example from "./play/1header/Example";
// import Features from "./play/2features/Features";
// import Hero from "./play/2hero/Hero";
// import Brilliant from "./play/3brilliant/Brilliant";
// import What from "./play/4what/What";
// import Pricing from "./play/5Pricing Table/Pricing";
// import FAQ from "./play/7faq/FAQ";
// import OurTeam from "./play/8our team/OurTeam";
// import Blog from "./play/9our blogs/Blog";
// import ContactUs from "./play/10contact us/ContactUs"
// import Footer from "./play/11footer/Footer";



// import Userss from "./NextCode/Userss";
// import About from "./components/about/About";
// import Blog from "./components/blog/Blog";
// import Footer from "./components/footer/Footer";
// import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
// import Footer from "./components/footer/Footer";
// import Blog from "./components/blog/Blog";
// import Header from "./components/header/Header";
// import About from "./components/about/About"
// import Service from "./components/service/Service";
// import "./App.css"
// import Btn from "./NextCode/Btn";
// import Card from "./NextCode/Card";

const App = () => {
  // const [dummyData, setDummyData] = useState([
  //     {
  //       title1: "New to Product Design",
  //       paragrafh1: 13,
  //       img1: "https://designerup.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdVlGIiwiZXhwIjoiMjAyNS0wNi0wNFQwNjoyMzo1Mi4zODJaIiwicHVyIjoiYmxvYl9pZCJ9fQ==--b9611aa0e845bb46749f3981076d2b5828c1736a/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKZUFXa0J4UT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--b41136514dbccf65ed4867f2219cc60846fb3589/New.png",
  //     },
  //     {
  //       title1: "UI Design Crash Course",
  //       paragrafh1: 12,
  //       img1: "https://designerup.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdWNGIiwiZXhwIjoiMjAyNS0wNi0wOVQxMTozMzo1OS40NjRaIiwicHVyIjoiYmxvYl9pZCJ9fQ==--fd127bab88358e40fedaa708821607afe089a257/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKZUFXa0J4UT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--b41136514dbccf65ed4867f2219cc60846fb3589/UI.png",
  //     },
  //     {
  //       title1: "UX/UI Portfolio Crash Course",
  //       paragrafh1: 6,

  //       img1: "https://designerup.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdWdGIiwiZXhwIjoiMjAyNS0wNi0wOVQxMTozMzo1OS40NzFaIiwicHVyIjoiYmxvYl9pZCJ9fQ==--713dab21773dfc6c918033f81b752faba65c6093/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKZUFXa0J4UT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--b41136514dbccf65ed4867f2219cc60846fb3589/Port.png",
  //     },
  //     {
  //       title1: "Color in UI Design",
  //       paragrafh1: 9,
  //       img1: "https://designerup.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdHdHIiwiZXhwIjoiMjAyNS0wNi0wOVQxMTozMzo1OS40NzhaIiwicHVyIjoiYmxvYl9pZCJ9fQ==--53c6bc7c94242e6059082d82fae5ca74c87f34a0/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKZUFXa0J4UT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--b41136514dbccf65ed4867f2219cc60846fb3589/color.png",
  //     },
  //   ]);

  //   const [dummData, setDummData] = useState([
  //     {

  //       title: "Make Your Website and QR code for Config!",
  //       paragrafh:"Use this Config Connect Kit for Figma to create your website and QR..." ,
  //       img: "https://designerup.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ0FIIiwiZXhwIjoiMjAyNS0wNy0wNlQwNjoxMTowMi42ODFaIiwicHVyIjoiYmxvYl9pZCJ9fQ==--00dfa8c1dd3f6be2e88d21bcb0a057360dddbd33/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKZUFXa0J4UT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--cc49776a627e8c03c764dc2473a1c72f510c3fce/maxresdefault.jpg",
  //     },
  //     {

  //       title: "Make Your Config Website and QR Code Lockscreen!",
  //       paragrafh: "Check out this awesome website and QR code maker for @Figma Config!...",
  //       img: "https://designerup.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ0VIIiwiZXhwIjoiMjAyNS0wNy0wNlQwNjoxMTowMi42OTRaIiwicHVyIjoiYmxvYl9pZCJ9fQ==--29a3bde88653e44866180c9f5ef658d6462ba51b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKZUFXa0J4UT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--cc49776a627e8c03c764dc2473a1c72f510c3fce/maxresdefault.jpg",
  //     },
  //     {
  //       title: "How Far Can AI Go with UI Design? | Uizard Autodesigner 2.0 First Look! 👀",
  //       paragrafh: "Just like with ChatGPT, you can now use AI to chat with your design...",
  //       img: "https://designerup.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdndHIiwiZXhwIjoiMjAyNS0wNy0wNlQwNjoxMTowMi43MDNaIiwicHVyIjoiYmxvYl9pZCJ9fQ==--7ccefd3f7685edab7b0b24d17d64a962f5a2f475/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKZUFXa0J4UT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--cc49776a627e8c03c764dc2473a1c72f510c3fce/maxresdefault.jpg",
  //     },
  //     {
  //       title: "How to ACTUALLY get ahead in this insane UX/UI Job Market!",
  //       paragrafh: "Is it really that bad out there? The short answer is yes, it can b...",
  //       img: "https://designerup.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdmdHIiwiZXhwIjoiMjAyNS0wNy0wNlQwNjoxMTowMi43MTFaIiwicHVyIjoiYmxvYl9pZCJ9fQ==--799332ce27809ad2d53afde57386c180be94e2ec/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKZUFXa0J4UT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--cc49776a627e8c03c764dc2473a1c72f510c3fce/maxresdefault.jpg",
  //     },
  //     {
  //       title: "Complete Guide to UI Animation and Tools in UNDER 10 minutes!",
  //       paragrafh: "UI animations, micro-interactions and interaction design are what g...",
  //       img: "https://designerup.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdW9HIiwiZXhwIjoiMjAyNS0wNy0wNlQwNjoxMTowMi43MzFaIiwicHVyIjoiYmxvYl9pZCJ9fQ==--3b352c66cbdfc40b70051e4b6e98d617a98fc7ed/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKZUFXa0J4UT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--cc49776a627e8c03c764dc2473a1c72f510c3fce/maxresdefault.jpg",
  //     },
  //     {
  //       title: "Crazy Designer-less UI Designs with Uizard AI + Adobe Firefly 🤯",
  //       paragrafh: "@uizardio is an amazing AI design tool for developers, product desi...",
  //       img: "https://designerup.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdVlHIiwiZXhwIjoiMjAyNS0wNi0wNVQwOTo1ODo1Mi42ODdaIiwicHVyIjoiYmxvYl9pZCJ9fQ==--67534f01930f54b2961127a4c6140af4ec19d644/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKZUFXa0J4UT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--cc49776a627e8c03c764dc2473a1c72f510c3fce/maxresdefault.jpg",
  //     },
  //     {
  //       title: "These color trends will be HUGE in 2024! | UI, Web, Graphic Design",
  //       paragrafh: "Watch as I use 2024's Color of the Year color palettes in Web and U...",
  //       img: "https://designerup.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdUlHIiwiZXhwIjoiMjAyNS0wNy0wNlQwNjoxMTowMi43NTZaIiwicHVyIjoiYmxvYl9pZCJ9fQ==--400a8f1bedb22d3e0f1b8b6b3980e4906249375f/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKZUFXa0J4UT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--cc49776a627e8c03c764dc2473a1c72f510c3fce/maxresdefault.jpg",
  //     },
  //     {
  //       title: "The Coolest UI Color Palette Tools Ever!",
  //       paragrafh: "These are 3 of my absolute favorite tools for choosing color palett...",
  //       img: "https://designerup.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc0lHIiwiZXhwIjoiMjAyNS0wNy0wNlQwNjoxMTowMi43NjhaIiwicHVyIjoiYmxvYl9pZCJ9fQ==--5138173973ca60a79a5e1015f389a6d289e92fd3/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKZUFXa0J4UT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--cc49776a627e8c03c764dc2473a1c72f510c3fce/maxresdefault.jpg",
  //     },
  //     {
  //       title: "Essential UX/UI Design Inspiration Resources of 2024 | Real Design Examples!",
  //       paragrafh: "If you’re designing products like software, SaaS or mobile apps and...",
  //       img: "https://designerup.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbzRHIiwiZXhwIjoiMjAyNS0wNy0wNlQwNjoxMTowMi43NzhaIiwicHVyIjoiYmxvYl9pZCJ9fQ==--226269228792be89d403bdd8dd0de28f3c904da8/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKZUFXa0J4UT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--cc49776a627e8c03c764dc2473a1c72f510c3fce/maxresdefault.jpg",
  //     },
  //     {
  //       title: "How To Design The Hottest Hero Trends 2024 ! | FULL FIGMA TUTORIAL",
  //       paragrafh: "This video is a step by step Figma tutorial of how to design the ho...",
  //       img: "https://designerup.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb29HIiwiZXhwIjoiMjAyNS0wNy0wNlQwNjoxMTowMi43ODdaIiwicHVyIjoiYmxvYl9pZCJ9fQ==--ced0e39b9aa8d1f1db3fc04c26b34174c2c8cabe/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKZUFXa0J4UT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--cc49776a627e8c03c764dc2473a1c72f510c3fce/maxresdefault.jpg",
  //     },
  //     {
  //       title: "Where I find the most INCREDIBLE Web Design Trends 2024 | Website inspiration ✨",
  //       paragrafh: "If you're looking for web design inspiration and trends for 2024 th...",
  //       img: "https://designerup.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb1lHIiwiZXhwIjoiMjAyNS0wNy0wNlQwNjoxMTowMi43OTVaIiwicHVyIjoiYmxvYl9pZCJ9fQ==--5af95d738e20918fe151dd5ca1e2c54c79d1c925/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKZUFXa0J4UT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--cc49776a627e8c03c764dc2473a1c72f510c3fce/maxresdefault.jpg",
  //     },
  //     {
  //       title: "2024 Design Trends! | 5 Must Try Hero Layouts",
  //       paragrafh: "Here are some of the hottest design trends popping off for hero des...",
  //       img: "https://designerup.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb0lHIiwiZXhwIjoiMjAyNS0wNy0wNlQwNjoxMTowMi44MDNaIiwicHVyIjoiYmxvYl9pZCJ9fQ==--3cfc373f3d66432b64670eeb9571cec9a0d780a6/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFKZUFXa0J4UT09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--cc49776a627e8c03c764dc2473a1c72f510c3fce/maxresdefault.jpg",
  //     },
  //  ]);
// const clickHandler=(e)=>{
// console.log(e.target.value);
// }

  return (
    <>
    {/* <input style={{border:"1px solid black"}} onChange={(e)=>clickHandler(e)} type="text" /> */}
    {/* <Router>
      <Header />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="services" element={<Service />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
      <Footer />
      </Router> */}


      <Headar/>
     <Hero/>
    <Service/>
    <Watch/>
    <Pricing/>
    <Team/>
    <FAQ/>
    <Start/>
    <Testimonials/>
    <Contact/>
    <Footer/>
     
     
    
     {/* <Copies/> */}


     

    


{/* <Example/>
<Hero/>
<Features/>
<Brilliant/>
<What/>
<Pricing/>
<FAQ/>
<OurTeam/>
<Blog/>
<ContactUs/>
<Footer/> */}



      {/* <Service />
      <Blog />
      <Footer /> */}
      {/* <Btn name="name">salam</Btn>
    <Btn>alikom</Btn>
    <Btn>walikom</Btn>
    <div id="rows">
    <Card imgs="./images/01.png" titls="shose1"/>
    <Card imgs="./images/02.png" titls="shose2"/>
    <Card  titls="shose3"/>
    
    </div> */}
      {/* <div id="first">
    <Userss  height="178"/>
    <Userss name="lemar" age="25" height="172"/>
    <Userss name="zahid" age="26" height="176"/>
    
    </div> */}

      {/* <NavbarExp />
    <Cards2 />
    <Axioss/> */}
      {/* <New/> */}

      {/* <div className="flex flex-wrap justify-evenly">
        {dummyData.map((singleData,index)=>{
          return(
            <div key={index}>
              <Cards
              paragrafh1={singleData.paragrafh1}
              img1={singleData.img1}
              title1={singleData.title1}
              />
            </div>
          );
        })}
      </div> */}

      {/* <Cards2 />
       <Buttons /> */}
      {/*  <div className="flex flex-wrap justify-evenly">
        {dummData.map((singleData, index) => {
          return (
            <div key={index}>
              <Cards3
                paragrafh={singleData.paragrafh}
                img={singleData.img}
                title={singleData.title}
              />
            </div>
          );
        })}
      </div> */}
      {/* <Axioss2/> */}
    </>
  );
};

export default App;
