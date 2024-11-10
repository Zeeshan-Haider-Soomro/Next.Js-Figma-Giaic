
const Footer = () => {
  return (
    <div>

<section className="bg-[#222222] text-center leading-10 p-10">
        <h1 className="text-[#38F881] text-5xl">Try Whitepace today</h1>
        <p className="text-white">
          Get started for free. Add your whole team as your needs grow.
        </p>
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
          <div className="flex gap-3 items-center ">
            <h1 className="font-bold text-4xl ">SoomroGroup</h1>
          </div>
          <p>
            Whitepace was created for the new ways we live and work.We make a
            better workspace around the world.
          </p>
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
          <p>Get started for free. Add your whole team as your needs grow</p>
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
  )
}

export default Footer