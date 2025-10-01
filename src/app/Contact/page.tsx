

"use client";
import React from "react";

const Contact = () => {
return ( <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16 max-w-4xl">
{/* Page Title */} <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
Contact Us </h1>

```
  {/* Our Offices */}
  <section className="mb-10">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
      Our Offices
    </h2>
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800">
        ABU DHABI – UAE
      </h3>
      <p className="text-gray-700">Dhiraj Lal</p>
      <p className="text-gray-600 mb-2">Executive Director</p>
      <p className="text-gray-700">
        Continuity and Resilience
        <br />
        Abu Dhabi, United Arab Emirates
      </p>
      <p>
        Tel:{" "}
        <a
          href="tel:+97126594006"
          className="text-blue-600 hover:underline"
        >
          +971 2 6594006
        </a>
      </p>
      <p>
        Mobile:{" "}
        <a
          href="tel:+971529263933"
          className="text-blue-600 hover:underline"
        >
          +971 52 9263933
        </a>
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:dlal@continuityandresilience.com"
          className="text-blue-600 hover:underline"
        >
          dlal@continuityandresilience.com
        </a>
      </p>
      <p className="text-gray-700">PO Box: 25722, Abu Dhabi, UAE</p>
    </div>
  </section>

  {/* Worldwide Offices */}
  <section>
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-indigo-700">
      Worldwide
    </h2>

    {/* Dubai */}
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800">
        DUBAI – UNITED ARAB EMIRATES
      </h3>
      <p className="text-gray-700">Chanchal Sharma</p>
      <p>
        Mobile:{" "}
        <a
          href="tel:+971505767804"
          className="text-blue-600 hover:underline"
        >
          +971 505767804
        </a>
      </p>
      <p>
        Tel:{" "}
        <a
          href="tel:+97126594006"
          className="text-blue-600 hover:underline"
        >
          +971 2 6594006
        </a>
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:info@continuityandresilience.com"
          className="text-blue-600 hover:underline"
        >
          info@continuityandresilience.com
        </a>
      </p>
    </div>

    {/* Riyadh */}
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800">
        RIYADH – KINGDOM OF SAUDI ARABIA
      </h3>
      <p>
        Email:{" "}
        <a
          href="mailto:info@continuityandresilience.com"
          className="text-blue-600 hover:underline"
        >
          info@continuityandresilience.com
        </a>
      </p>
    </div>

    {/* Abu Dhabi */}
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800">
        ABU DHABI – UNITED ARAB EMIRATES
      </h3>
      <p className="text-gray-700">Dhiraj Lal</p>
      <p>
        Mobile:{" "}
        <a
          href="tel:+971529263933"
          className="text-blue-600 hover:underline"
        >
          +971 52 9263933
        </a>
      </p>
      <p>
        Tel:{" "}
        <a
          href="tel:+97126594006"
          className="text-blue-600 hover:underline"
        >
          +971 2 6594006
        </a>
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:info@continuityandresilience.com"
          className="text-blue-600 hover:underline"
        >
          info@continuityandresilience.com
        </a>
      </p>
    </div>

    {/* Beirut */}
    <div>
      <h3 className="text-xl font-semibold text-gray-800">
        BEIRUT – LEBANON
      </h3>
      <p>
        Email:{" "}
        <a
          href="mailto:info@continuityandresilience.com"
          className="text-blue-600 hover:underline"
        >
          info@continuityandresilience.com
        </a>
      </p>
    </div>
  </section>
</div>


);
};

export default Contact;
