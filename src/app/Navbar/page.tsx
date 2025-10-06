"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import TopBar from "../TopBar/page";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ Normal navItems (Downloads removed)
  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About us",
      href: "/AboutUs",
      dropdown: [
        { label: "Our Team", link: "/AboutUs/OurTeam" },
        { label: "Client", link: "/AboutUs/ClientsPage" },
        { label: "Consulting", link: "/AboutUs/Consulting" },
        {
          label: "Notification And Crisis Communication",
          link: "/AboutUs/NotificationAndCrisisCommunication",
        },
      ],
    },
    {
      name: "Consulting",
      href: "/Consulting",
      dropdown: [
        {
          label: "Leadership Consulting",
          link: "/Consulting/LeadershipConsulting",
        },
        { label: "Risk Management", link: "/Consulting/RiskManagement" },
        {
          label: "IT Disaster Recovery",
          link: "/Consulting/ITDisasterRecovery",
        },
        { label: "Crisis Management", link: "/Consulting/CrisisManagement" },
        {
          label: "Business Continuity",
          link: "/Consulting/BusinessContinuity",
        },
        {
          label: "Information Security",
          link: "/Consulting/InformationSecurity",
        },

        { label: "Cyber Security", link: "/Consulting/CyberSecurity" },
        { label: "Green IT & Energy Management", link: "/Consulting/GreenIT" },
        { label: "IT Service", link: "/Consulting/ITServices" },
        { label: "Project Management", link: "/Consulting/ProjectManagement" },
      ],
    },
    {
      name: "Training",
      href: "/Training",
      dropdown: [
        {
          label: "Business Continuity Trainings",
          link: "/Training/BusinessContinuityTrainings",
        },
        {
          label: "Risk Management Training",
          link: "/Training/RiskManagementTrainings",
        },

        {
          label: "Crisis Management Trainings",
          link: "/Training/CrisisManagementTrainings",
        },
        {
          label: "Intertek Trainings",
          link: "/Training/IntertekTrainings",
        },
        { label: "IT DR Trainings", link: "/Training/ITDRTrainings" },
      ],
    },
    {
      name: "Tools",
      href: "/Tool",
      dropdown: [
        {
          label: "Automation of your BCMS Readiness and Continuous Improvement",
          link: "/Tool/AutomationBCMS",
        },
        { label: "IT DR Tools", link: "/Tool/ITDRTools" },
      ],
    },
    {
      name: "Elearning",
      href: "/Elearning",
    },
    {
      name: "Contact",
      href: "/Contact",
      dropdown: [
        {
          label: "Register Now",
          link: "/Contact/Register",
        },
      ],
    },
  ];

  return (
    <>
      <TopBar />

      <nav className="sticky top-10 left-0 w-full z-40 bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center px-4 py-3 md:py-4">
          {/* ✅ Logo with Link */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Core logo.png"
                alt="Logo"
                width={150} // ✅ size adjust
                height={100} // ✅ size adjust
                className="flex-shrink-0 object-contain"
              />
            </Link>
          </div>

          {/* ✅ Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 text-gray-700 font-medium text-sm xl:text-base">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition" />
                  )}
                </Link>

                {/* ✅ Dropdown for desktop */}
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.dropdown.map((drop) => (
                      <Link
                        key={drop.label}
                        href={drop.link}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        {drop.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* ✅ Extra Buttons (Desktop) */}
            <div className="flex space-x-3 ml-4">
              <Link
                href="/PdfPage"
                className="px-4 py-2 text-sm bg-gray-600 text-white rounded-md shadow hover:bg-gray-700 transition"
              >
                NCEMA 7000 Book
              </Link>
              <Link
                href="/NecmaCheckList"
                className="px-4 py-2 text-sm bg-gray-600 text-white rounded-md shadow hover:bg-gray-700 transition"
              >
                NECMA Checklist
              </Link>
            </div>
          </div>

          {/* ✅ Mobile Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              className="text-gray-700 p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* ✅ Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg py-4">
            <ul className="flex flex-col items-start px-4 space-y-3 text-gray-700 font-medium">
              {navItems.map((item) => (
                <li key={item.name} className="w-full">
                  <details className="w-full">
                    <summary className="flex justify-between items-center w-full py-2 px-3 cursor-pointer hover:bg-gray-100 hover:text-blue-600 rounded-md transition">
                      {item.name}
                      {item.dropdown && (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      )}
                    </summary>
                    {item.dropdown && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.dropdown.map((drop) => (
                          <Link
                            key={drop.label}
                            href={drop.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-1 px-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition"
                          >
                            {drop.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </details>
                </li>
              ))}

              {/* ✅ Extra Buttons (Mobile) */}
              <li className="w-full pt-2 border-t border-gray-200 mt-2">
                <Link
                  href="/PdfPage"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-2 text-sm bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
                >
                  NCEMA 7000 Book
                </Link>
              </li>
              <li className="w-full mt-2">
                <Link
                  href="/NecmaCheckList"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-2 text-sm bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition"
                >
                  NECMA Checklist
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
