import Image from "next/image";
import logo from "@/public/logo1.png";
import mail from "@/public/mail.png";
import mappin from "@/public/mappin.png";

export default function AboutPage() {
  return (
    <div className="bg-zinc-900 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24">

        {/* ACM SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-14 py-16">
          <Image src={logo} alt="ACM Logo" width={280} height={100} className="drop-shadow-lg" />

          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">ACM</h1>
            <p className="text-lg leading-relaxed text-zinc-300">
              ACM is the world's largest educational and scientific computing society,
              aimed at increasing visibility of computing innovations across the globe.
              It consists of dedicated professionals, academicians, and researchers working to
              elevate computational thinking and lifelong learning.
            </p>
          </div>
        </div>

        {/* ACM x PCCOER SECTION */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-14 py-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">ACMxPCCOER</h1>
            <p className="text-lg leading-relaxed text-zinc-300">
              ACMxPCCOER Student Chapter is an auxiliary body of ACM, established in 2011.
              The chapter fosters technical excellence, encourages co-curricular engagement,
              and nurtures students into responsible professionals with strong computational foundations.
            </p>
          </div>

          <Image src={logo} alt="ACM Logo" width={280} height={100} className="drop-shadow-lg" />
        </div>

        {/* CONTACT SECTION */}
        <h1 className="text-4xl lg:text-5xl font-bold pt-10 pb-8">Contact Us</h1>

        <div className="flex flex-col lg:flex-row justify-between gap-10 pb-20">

          {/* LEFT SIDE */}
          <div className="lg:max-w-[50%] space-y-6">
            <p className="text-lg flex items-center gap-3">
              <Image src={mail} alt="mail icon" width={28} height={28} />
              acm@pccoer.in
            </p>

            <p className="text-lg flex gap-3 leading-relaxed">
              <Image src={mappin} alt="map pin" width={40} height={40} />
              Plot No. B, Sector no. 110, Gate no.1, Laxminagar, Ravet,
              Haveli, Pune, Pimpri-Chinchwad, Maharashtra 412101
            </p>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.306391515053!2d73.74263657492071!3d18.650242065200988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ba0251959e2d%3A0x4d7ea2cc35724480!2sPCCOER-%20Ravet%2C%20Pimpri%20Chinchwad%20College%20of%20Engineering%20and%20Research%2C%20Ravet%2C%20Pune!5e0!3m2!1sen!2sin!4v1763270354425!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-xl shadow-xl"
            />
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="lg:w-[45%] bg-zinc-800 p-8 rounded-2xl shadow-xl border border-zinc-700">
            <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>

            <form className="space-y-5">

              <div>
                <label className="block text-sm mb-1 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-zinc-700 border border-zinc-600 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full p-3 rounded-lg bg-zinc-700 border border-zinc-600 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-1 font-medium">Message</label>
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
