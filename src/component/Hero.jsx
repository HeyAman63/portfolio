
const Hero = () => {
  return (
    <div id='hero' className="relative md:left-[20%] md:w-[80%]">
        <img
          src="/hero-bg.jpg"
          className="h-[100vh] z-50 md:w-full object-cover opacity-85 inset-0  shadow-2xl"
        />
        <h1 className="absolute top-80 text-6xl left-4 text-white font-extrabold">
          Aman Chaurasiya
        </h1>
        <p className="absolute md:top-96 top-[30rem] text-5xl text-gray-100 left-4">
          I'am a Web Developer
        </p>
        
      </div>
  )
}

export default Hero