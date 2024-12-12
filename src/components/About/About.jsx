import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <section className="w-11/12 lg:w-4/5 mx-auto container  mt-10 p-3">
      <h2 className="text-3xl  font-bold text-center text-color1 hover:text-color3">
        About Us
      </h2>
      <p className="mt-4 text-gray-700">
        Welcome to <strong>Gadget Haven</strong>, where we believe in delivering
        quality products at unbeatable prices. Our goal is to provide a seamless
        shopping experience for all our customers.
      </p>

      <div className="mt-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h3 className="text-2xl font-semibold">Our Mission</h3>
          <p className="mt-2 text-gray-700">
            Our mission is to provide the best shopping experience for our
            customers by offering high-quality products, excellent customer
            service, and a wide variety of choices.
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-8">Why Choose Us?</h3>
      <ul className="list-disc list-inside mt-4 text-gray-700">
        <li>Curated selection of top-quality products</li>
        <li>Competitive pricing and special discounts</li>
        <li>Fast and reliable shipping</li>
        <li>24/7 Customer support</li>
        <li>Easy returns and exchanges</li>
      </ul>
    </section>
  );
};

export default About;
