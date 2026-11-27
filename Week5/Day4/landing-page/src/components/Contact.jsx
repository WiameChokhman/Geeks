
function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
  };

  return (
    <section id="contact" className="bg-white py-16 px-6">

      <div className="max-w-5xl mx-auto">

        {/* Section title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-5">
            Contact Us
          </h1>

          <p className="text-gray-600 text-lg">
            Have any questions? Send us a message and
            we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">

          <h2 className="text-2xl font-bold mb-6">
            Contact Us
          </h2>

          <div className="border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Description */}
            <p className="text-gray-600 leading-8">
              Have any questions? Send us a message
              and we'll get back to you as soon as possible.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <input
                type="email"
                placeholder="Email Address"
                required
                className="border border-gray-300 rounded-lg p-3 outline-none focus:border-red-500"
              />

              <textarea
                placeholder="Your Message"
                rows="4"
                required
                className="border border-gray-300 rounded-lg p-3 outline-none focus:border-red-500"
              ></textarea>

              <button
                type="submit"
                className="bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition"
              >
                Send Message
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
