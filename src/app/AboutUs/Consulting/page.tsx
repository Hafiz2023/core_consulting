"use client";

import React, { useState } from "react";

export default function Consulting() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container mx-auto px-6 py-12 max-w-5xl">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-700 mb-10 underline underline-offset-8 decoration-4 decoration-indigo-500">
        Consulting
      </h1>

      {/* Short Intro */}
      <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
        It is easy to “advise”. But in our opinion, what adds true value is not
        to merely “advise”, but to “implement”, to “hand-hold”, walk along with
        the customer till the finishing line. In our case, we can do either.
        Choice is that of the customer. But given a choice, our preferred
        approach is not to just “tell” or “advise” – but to “show how”, “do” and
        “hand-hold”. That way, we put our money where our mouth is, and truly
        add value. Our success is to bring customer preparedness and
        competencies to a stage where you do not need us anymore. That is truly
        when we can be comfortable that we have done justice to your faith in
        us.
      </p>

      {/* Toggleable Content */}
      {showMore && (
        <>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            At <span className="font-semibold">Continuity and Resilience</span>,
            the approach is to utilize our collective experience of over{" "}
            <span className="font-semibold">140+ man-years</span> in order to
            assist our clients to implement Global Best Practices in
            Sustainability, Crisis Management, Business Continuity, Disaster
            Recovery, Information Security, IT Service Management, Project
            Management and Quality. We have made our share of mistakes and
            learned from them, and over time, have developed better, smarter and
            faster ways of deploying domain-based solutions. By virtue of our
            exposure to industry best practices across various industries,
            geographies and organization cultures, we are able to define the
            most appropriate method of deployment to rapidly and effectively
            implement a reliable and robust framework for our clients.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            And since in today’s world time is money, time saved automatically
            translates into money saved. BCM being a specialized activity, smart
            organizations choose to save money by outsourcing either the whole
            or parts of their BCM initiative to{" "}
            <span className="font-semibold">CORE</span>. Continuity and
            Resilience is committed to helping BCM and DR practitioners raise
            the professional standards and competency levels.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            While it is very easy to postulate on how to implement Best
            Practices, the real edge comes from having implemented them first as
            a user, before doing so as a consultant. Amongst other
            differentiators, what makes us more effective is that our
            consultants have been the Domain Heads of global multinationals and
            transnational corporations, and so speak from experience. This has
            allowed them to develop a hands-on understanding of the domain,
            particularly the challenges of implementation, and how to overcome
            them. Our experience, attention to detail, and leveraging of past
            learning’s has given us the ability to anticipate bottlenecks and
            come up with timely proactive solutions – which effectively is
            really what high-quality Consulting is all about!
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            Other than the above, we also provide advisory services on BCM/ IT
            DR Tools and Company-wide communications/Notification Systems
            including RaaS (Recovery as a Service). These services could also be
            provided to your customers on a partnership basis. The notification
            tools can help you reach out to your people in emergency/crisis
            situations simultaneously through various modes of communication
            alerts. In case you are looking for back-up seats for your key staff
            in a case of facility outage (known as Work Area Recovery -WAR), or
            also back-up seats for your IT team (IT Disaster recovery), that is
            also something we can assist you with.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
            Industries in which we have consulted are Telecom, Banking &
            Finance, Technology/IT, Oil & Gas, Healthcare, Utilities and
            Manufacturing. Proof of the pudding is in the eating – please refer
            to our testimonials page for an indication of our competence.
          </p>
        </>
      )}

      {/* Show More / Less Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-transform duration-300 transform hover:scale-105"
        >
          {showMore ? "Show Less" : "Get More"}
        </button>
      </div>

      {/* Social Links */}
      <div className="mt-10 flex justify-center gap-6">
        <a
          href="https://facebook.com"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          Twitter
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          className="text-red-600 hover:underline"
        >
          Youtube
        </a>
      </div>
    </div>
  );
}
