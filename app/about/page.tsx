import Image from "next/image";
import logo from "@/public/logo.png";
import mail from "@/public/mail.png";
import mappin from "@/public/mappin.png";

export default function AboutPage() {
  return (
    <div className="bg-zinc-900 min-h-screen text-white ">
        <div className=" max-w-7xl mx-auto px-[5%] pt-10">
            {/* acm info div */}
            <div className="flex justify-between items-center gap-20 pt-10 pb-10">
                <div className="">
                    <Image src={logo} alt="ACM Logo" width={300} height={120}/>
                </div>
                <div className="max-w-[55%]">
                    <h1 className="text-5xl mb-4">ACM</h1>
                    <p className="text-lg">ACM is the world's largest educational and scientific computing society, aimed at increasing the level and visibility of ACM activities across the globe. ACM is a society of dedicated professionals, academicians, and research scientists, who contribute towards the growth of technological innovations. The purpose of Society is to inculcate computational thinking aiding in career development and a lifelong learning experience.</p>
                </div>
            </div>

            {/* acmxpccoer info div */}
            <div className="flex justify-between items-center gap-20 pt-10 pb-10    ">
                <div className="max-w-[55%]">
                    <h1 className="text-5xl mb-4">ACMxPCCOER</h1>
                    <p className="text-lg">ACMxPCCOER Student Chapter is an auxiliary organization of ACM. It is one of the most reputed and distinguished technical chapters working with a vision and determination since its inception in 2011, with an aspiration of advancement in Computer Science as a science and a profession. We encourage co-curricular activities amongst the members, which helps in their overall development and transform students into responsible adults with a strong core.</p>
                </div>
                <div className="">
                    <Image src={logo} alt="ACM Logo" width={300} height={120}/>
                </div>
            </div>

            {/* contact section */}
            <h1 className="text-5xl pb-10 pt-10">Contact Us</h1>
            <div className="pb-10 flex justify-between gap-5 items-center">
                {/* left side */}
                <div className="max-w-[50%]">
                    <p className="text-lg flex gap-2 "><Image src={mail} alt="ACM Logo" width={30} height={30}/>acm@pccoer.in</p>
                    <p className="text-lg flex gap-2"> <span><Image src={mappin} alt="ACM Logo" width={50} height={50}/></span> Plot No. B, Sector no. 110, Gate no.1, Laxminagar, Ravet, Haveli, Pune, Pimpri-Chinchwad, Maharashtra 412101</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.306391515053!2d73.74263657492071!3d18.650242065200988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ba0251959e2d%3A0x4d7ea2cc35724480!2sPCCOER-%20Ravet%2C%20Pimpri%20Chinchwad%20College%20of%20Engineering%20and%20Research%2C%20Ravet%2C%20Pune!5e0!3m2!1sen!2sin!4v1763270354425!5m2!1sen!2sin"
                        width="90%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-xl shadow-lg mt-10"
                    />
                </div>
                {/* right side  */}
                <div className="min-w-[45%] bg-zinc-800 p-8 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>

                    <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 rounded-lg bg-zinc-700 border border-zinc-600 outline-none focus:ring-2 focus:ring-blue-500"
                        />  
                    </div>

                    <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                     className="w-full p-3 rounded-lg bg-zinc-700 border border-zinc-600 outline-none focus:ring-2 focus:ring-blue-500"
                     />
                    </div>

                    <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                        rows={5}
                     placeholder="Type your message here..."
                        className="w-full p-3 rounded-lg bg-zinc-700 border border-zinc-600 outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    </div>

                    <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg text-lg font-semibold"
                    >
                    Send Message
                    </button>
                    </form>
                </div>
            </div>

        </div>
    </div>
  );
}
