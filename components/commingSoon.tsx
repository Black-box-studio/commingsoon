import Link from "next/link";
import "../app/globals.css";
export const CommingSoon =() => {
  return (
    <main className="absolute bg-gradient-to-bl from-[rgb(201,201,201)] to-[rgb(255,255,255)]">
    <div className=" absolute w-screen h-screen flex md:flex-row overflow-x-hidden flex-col">    
      <div className="text-center w-screen h-screen flex flex-col md:flex-row justify-evenly items-center">
          <div className="flex flex-col gap-5 items-center z-10">
            <p className="text-lg font-medium shadow-md border-[black] border-b-2 border-opacity-50 backdrop-blur-sm text-transparent bg-clip-text bg-gradient-to-bl from-[#000000] to-[rgb(255,32,32)] w-60 px-3 py-2 rounded-3xl flex justify-center">
              Coming Soon . . . . !
            </p>
            <p className="text-6xl font-bold text-transparent bg-gradient-to-bl bg-clip-text from-red-500 to-[rgb(31,31,31)] ">Get Notified <br/> when we launch </p>
            <p className="text-base">"Don't Worry we will not spam you."</p>
            <div className=" -z-10">
              <img src="bg_illustration.png" alt="bg_illustration"/>
            </div>
            <div className="flex flex-col item-center md:flex-row gap-5 z-10 relative justify-center">
              <input type="email" name="email"
              className="shadow-md focus:outline-none focus:shadow-xl  backdrop-blur-lg w-96 text-transparent text-center bg-clip-text text-lg bg-gradient-to-bl from-[#000000] to-[rgb(255,32,32)] border-e-2 border-s-2 border-opacity-50 bg-transparent border-black px-5 py-2 rounded-3xl font-medium" 
              placeholder="Enter Your Email Here.....!"/>
              <div className="flex flex-col item-center md:flex-row gap-5 justify-center">
                <button className="font-medium px-5 md:w-48 py-2 border-b-2 border-white rounded-3xl bg-gradient-to-bl from-[#ff0000] to-[#1f1f1f] text-[rgb(255,255,255)] hover:scale-95 duration-300 transition">Notify Me</button>
              </div>
            </div>
              <div className="flex text-center w-auto gap-5 ">
              <Link href="https://www.facebook.com/BlackBoysOfficial/" className="h-[30px] w-[30px] hover:scale-105 duration-300 transition">
                 <img src="facebook.svg" alt="facebook" />
              </Link>
              <Link href="https://www.instagram.com/blackboysofficial" className="h-[30px] w-[30px] hover:scale-105 duration-300 transition">
                 <img src="instagram.svg" alt="instagram" />
              </Link> 
              <Link href="https://www.youtube.com/@BlackBoysOfficial" className="h-[30px] w-[30px] hover:scale-105 duration-300 transition">
                <img src="youtube.svg" alt="youtube" />
              </Link> 
              <Link href="https://www.linkedin.com/company/blackboys" className="h-[30px] w-[30px] hover:scale-105 duration-300 transition">
                <img src="linkedin.svg" alt="linkedin" />
              </Link>
                
            </div>
            <div className="flex text-center"><p className="w-auto text-center justify-center items-center text-sm bg-gradient-to-bl from-[#ff0000] to-[#1f1f1f] text-transparent bg-clip-text">© 2022 BlackBoys studio</p> </div>
          </div>
            
        </div>
      </div>
    </main>
  );
}

