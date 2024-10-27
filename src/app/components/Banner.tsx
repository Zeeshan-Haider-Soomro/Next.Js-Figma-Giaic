import React from "react";
import Card from "./card/Card";
import CardCenter from "./card/CardCenter";
import CardLeft from "./clientCard/CardLeft";
import CardRight from "./clientCard/CardRight";

const Banner = () => {
  return (
    <div>
      <section className="flex justify-around items-center p-10 bg-[#222222]">
        <div className="flex flex-col gap-5 w-1/2 m-6">
          <h1 className="text-[#38F881] text-[80px] font-bold">
            Get More Done with Whitepace
          </h1>
          <p className="text-white">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
          <button className="bg-[#FF4040] rounded w-[150px] p-1">
            Try Whitepace Free
          </button>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <img
            className="h-[320.94px] w-[400px]"
            src="/images/heroimg.png"
            alt=""
          />
        </div>
      </section>

      <section className="flex justify-around items-center p-5 bg-[#FFFFFF] m-6">
        <div className="flex flex-col gap-5 w-1/2">
          <h1 className="text-black text-[80px] font-bold">
            Project Management
          </h1>
          <p className="text-black">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <button className="bg-[#FF4040] rounded w-[150px] p-1">
            Get Started
          </button>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <img
            className="h-[320.94px] w-[400px]"
            src="/images/heroimg.png"
            alt=""
          />
        </div>
      </section>

      <section className="flex justify-around items-center p-5 bg-[#FFFFFF] m-6">
        <div className="w-1/3 flex justify-start items-center">
          <img
            className="h-[320.94px] w-[400px]"
            src="/images/heroimg.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <h1 className="text-black text-[80px] font-bold">Work Together</h1>
          <p className="text-black">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>
          <button className="bg-[#38F881] rounded w-[150px] p-1">
            Try it now
          </button>
        </div>
      </section>

      <section className="flex justify-around items-center p-5 bg-[#222222]">
        <div className="flex flex-col gap-5 w-1/2 m-6">
          <h1 className="text-[#38F881] text-[80px] font-bold">
            Use as Extension
          </h1>
          <p className="text-white">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>
          <button className="bg-[#FF4040] rounded w-[150px] p-1">
            Let's Go
          </button>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <img
            className="h-[320.94px] w-[400px]"
            src="/images/heroimg.png"
            alt=""
          />
        </div>
      </section>

      <section className="flex justify-around items-center p-5 bg-[#FFFFFF] m-6">
        <div className="w-1/3 flex justify-start items-center">
          <img
            className="h-[320.94px] w-[400px]"
            src="/images/heroimg.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <h1 className="text-black text-[80px] font-bold">
            Customise it to your needs
          </h1>
          <p className="text-black">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API..
          </p>
          <button className="bg-[#38F881] rounded w-[150px] p-1">
            Let&apos;s Go
          </button>
        </div>
      </section>

      <section className="text-center m-5 p-5">
        <h1 className="text-black text-[80px] font-bold">Choose Your Plan</h1>
        <p>
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you
        </p>
      </section>

      <section className="flex justify-center items-center m-5 flex-wrap">
        <Card />
        <CardCenter />
        <Card />
      </section>

      <section className="bg-[#222222] p-[50px]">
        <div className=" text-center w-[70%] m-auto leading-10">
          <h1 className="text-[#38F881] text-5xl font-semibold">
            Your work, Everywhere you are
          </h1>
          <p className="text-white">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
          <button className="bg-[#FF4040] text-white py-[2px] rounded px-4">
            Button
          </button>
        </div>
      </section>

      <section className="flex justify-around items-center p-5 bg-[#FFFFFF] ">
        <div className="flex flex-col gap-5 w-1/2 m-6">
          <h1 className=" text-[80px] font-semibold">100% Your Data</h1>
          <p className="">
            The app is open source and your notes are saved to an open format,
            so you&apos;ll always have access to them. Uses End-To-End Encryption
            (E2EE) to secure your notes and ensure no-one but yourself can
            access them.
          </p>
          <button className="bg-[#FF4040] rounded w-[150px] p-1 text-white">
            Read more
          </button>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <img
            className="h-[320.94px] w-[400px]"
            src="/images/heroimg.png"
            alt=""
          />
        </div>
      </section>

      <section className="text-center m-5 p-5">
        <h1 className="text-black text-[80px] font-bold m-5">Our sponsors</h1>
        <div className="flex justify-around items-center m-10 mt-10">
          <img src="/images/Logo Apple.png" alt="" />
          <img src="/images/Logo Microsoft.png" alt="" />
          <img src="/images/Logo Stack.png" alt="" />
          <img src="/images/Logo Google.png" alt="" />
        </div>
      </section>

      <section className="flex justify-around items-center p-5 bg-[#222222] ">
        <div className="w-1/3 flex justify-start items-center">
          <img
            className="h-[320.94px] w-[400px]"
            src="/images/heroimg.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <h1 className="text-[#38F881] text-[80px] font-bold">
            Customise it to your needs
          </h1>
          <p className="text-white">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API..
          </p>
          <button className="bg-[#FF4040] rounded w-[150px] p-1">
            Read more
          </button>
        </div>
      </section>

      <section>
        <h1 className="text-5xl font-semibold text-center m-5">
          What Our Clients Says
        </h1>
        <div className="flex justify-center">
          <CardLeft />
          <CardRight />
          <CardRight />
        </div>
      </section>

      <section className="bg-[#222222] text-center leading-10 p-10">
         <h1 className="text-[#38F881] text-5xl">Try Whitepace
         today</h1>
         <p className="text-white">Get started for free.
         Add your whole team as your needs grow.</p>
         <button className="bg-[#FF4040] rounded w-[150px] p-1">
         Try Taskey free
          </button>
          <p className="text-white">On a big team? Contact sales</p>
          <div className="flex justify-center gap-10 p-5">
            <img src="/images/Vector (1).png" alt="" />
            <img src="/images/Vector (2).png" alt="" />
            <img src="/images/Vector (3).png" alt="" />
          </div>
      </section>

      <section className="flex justify-around gap-5 p-5 leading-8 bg-[#222222] text-white">
         <div className="w-[200px]">
         <div className='flex gap-3 items-center '>
            <img className='h-10 w-7' src="../images/logo.png" alt="" />
            <h1 className='font-bold text-4xl '>Figma</h1>
        </div>
            <p>Whitepace was created for
the new ways we live and
work.We make a better
workspace around the world.</p>
         </div>
         <div>
            <h1 className="text-2xl font-semibold">Product</h1>
            <p>Overview</p>
            <p>Pricing</p>
            <p>Customer Stories</p>
         </div>
         <div>
            <h1 className="text-2xl font-semibold">Resources</h1>
            <p>Blog</p>
            <p>Guides & tutorials</p>
            <p>Help center</p>
         </div>
         <div>
         <h1 className="text-2xl font-semibold">Company</h1>
            <p>About us</p>
            <p>Careers</p>
            <p>Media kit</p>
         </div>
         <div className="w-[200px]">
            <h1 className="text-2xl font-semibold">Try it Today</h1>
            <p>Get started for free. Add your
            whole team as your needs grow</p>
            <button className="bg-[#FF4040] text-white rounded w-[150px] p-1">
         Try Taskey free
          </button>
         </div>
      </section>

      <section className="bg-[#222222] text-white p-10">
         <div className="flex w-2/3 justify-around">
            <p>English</p>
            <p>Terms & privacy</p>
            <p>Security</p>
            <p>Status</p>
            <p>@2024 Copyrights Reserved Zeeshan Haider Soomro</p>
         </div>
         <div className="w-1/3">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
         </div>
      </section>





    </div>
  );
};

export default Banner;
