"use client";

import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

// Define the interface for a client object
interface Client {
  id: string;
  name: string;
  logoSrc: string;
  altText: string;
  description: string;
}

const ClientsPage: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch("/api/clients");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Client[] = await response.json();
        setClients(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred while fetching clients.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const openClientDetails = (client: Client) => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  const closeClientDetails = () => {
    setIsModalOpen(false);
    setSelectedClient(null);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center animate-pulse">
        <p className="text-xl text-gray-600">Loading clients...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-xl text-red-600">Error: {error}</p>
      </div>
    );
  }

  if (clients.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-xl text-gray-600">No clients found at this time.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:px-8 lg:px-16 max-w-6xl">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-900 text-center underline decoration-indigo-500">
        Our Valued Clients
      </h1>

      {/* Client Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {clients.map((client) => (
          <div
            key={client.id}
            className="group relative bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer p-6 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 hover:scale-105"
            onClick={() => openClientDetails(client)}
          >
            {/* Logo */}
            <div className="relative w-32 h-20 mb-4 flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2">
              <Image
                src={client.logoSrc}
                alt={client.altText}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-md"
                priority
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mt-2 group-hover:text-indigo-700 transition-colors duration-300">
              {client.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-500 mt-2 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
              {client.description}
            </p>

            {/* Hover Overlay Effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"></span>
          </div>
        ))}
      </div>

      {/* Client Details Modal */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeClientDetails}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-90"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-2xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-6 text-gray-900 mb-4 text-center"
                  >
                    {selectedClient?.name}
                  </Dialog.Title>

                  <div className="mt-2 text-center mb-6">
                    {selectedClient?.logoSrc && (
                      <div className="relative w-48 h-24 mx-auto transition-transform duration-500 hover:scale-110">
                        <Image
                          src={selectedClient.logoSrc}
                          alt={selectedClient.altText}
                          fill
                          style={{ objectFit: "contain" }}
                          className="rounded-lg"
                        />
                      </div>
                    )}
                  </div>

                  <div className="mt-2">
                    <p className="text-md text-gray-700 whitespace-pre-wrap leading-relaxed">
                      {selectedClient?.description}
                    </p>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 text-sm font-medium text-white shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                      onClick={closeClientDetails}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ClientsPage;
