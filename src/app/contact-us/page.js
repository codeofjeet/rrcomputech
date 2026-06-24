import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* Left Side Form */}
        <div>
          <p className="text-green-700 font-semibold uppercase tracking-wider mb-3">
            Contact Us
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-10">
            We are Here To Provide
            <br />
            <span className="text-green-700">
              24x7 Support
            </span>
          </h1>

          <form className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border-b border-gray-300 p-3 outline-none bg-transparent focus:border-green-700"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="w-full border-b border-gray-300 p-3 outline-none bg-transparent focus:border-green-700"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border-b border-gray-300 p-3 outline-none bg-transparent focus:border-green-700"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border-b border-gray-300 p-3 outline-none bg-transparent focus:border-green-700"
              />
            </div>

            <select className="w-full border-b border-gray-300 p-3 outline-none bg-transparent focus:border-green-700">
              <option>Select Query</option>
              <option>Admission</option>
              <option>Courses</option>
              <option>Fees</option>
              <option>Support</option>
            </select>

            <textarea
              rows="5"
              placeholder="Tell us about your query"
              className="w-full border-b border-gray-300 p-3 outline-none bg-transparent resize-none focus:border-green-700"
            ></textarea>

            <button
              type="submit"
              className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition duration-300"
            >
              Submit A Query
            </button>
          </form>
        </div>

        {/* Right Side Contact Card */}
        <div className="bg-green-900 text-white p-6 rounded-2xl shadow-lg">

          <h2 className="text-4xl font-bold mb-3">
            Say Hello!
          </h2>

          <p className="text-gray-200 mb-6">
            Feel free to contact us anytime. Our team is available
            24/7 to help you.
          </p>

          {/* Image Section */}
          <div className="relative overflow-hidden rounded-xl">
          <div className="w-full h-[300px] bg-slate-900 flex items-center justify-center rounded-xl">
            <Image
              src="/rrlogo.png"
              alt="Support"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Text On Image */}
            <div className="absolute bottom-5 left-5">
              <h3 className="text-2xl font-bold">
                24/7 Contact Support
              </h3>
              <p className="text-sm">
                rrcomputech96@gmail.com
              </p>
            </div>

          </div>

          {/* Contact Details */}
          <div className="mt-8 space-y-5">

            <div>
              <h3 className="font-semibold text-lg mb-1">
                📍 Address
              </h3>
              <p className="text-gray-200">
                RR Computech Institute,
                <br />
                Ajay Vihar, Gandhi Path,  Vaishali Nagar (W)
                <br />
                Rajasthan, India
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-1">
                📞 Mobile
              </h3>
              <p className="text-gray-200">
                +91 9694236976
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-1">
                ✉️ Email
              </h3>
              <p className="text-gray-200">
                rrcomputech96@gmail.com
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}