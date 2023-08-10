"use client"
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import {motion} from 'framer-motion'
import logonew from "../../../../public/logonew.png";



export default function Footer() {
  const footer1 = [
    {
      name: "About",
      link: "",
    },
    {
      name: "Terms of Use",
      link: "",
    },
    {
      name: "Privacy Policy",
      link: "",
    },
    {
      name: "Contact Us",
      link: "",
    },
  ];
  const footer2 = [
    {
      name: "Support Center",
      link: "",
    },
    {
      name: "24h Service",
      link: "",
    },
    {
      name: "Quick Chat",
      link: "",
    },
  ];
  const footer3 = [
    {
      name: "Whatsapp",
      link: "",
    },
    {
      name: "Support 24h",
      link: "",
    },
  ];
  return (
    <main className="mt-20 mx-4 md:mx-0">
      <div className="md:grid md:grid-cols-5 mx-auto py-20">
        <div className="mr-12 col-span-2">
          <div className="w-full">
            <Image
              src={logonew}
              width={173}
              height={40}
              alt="logo-Buttom"
              className=""
            />
          </div>
          <p className="my-8">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex gap-x-7">
            <motion.div className="p-4 border border-gray-400 rounded-xl"
            
            whileHover={{ backgroundColor: "#4267B2" }}
            transition={{ duration: 0.5 }}
            >
              <FacebookIcon />
            </motion.div>
            <div className="p-4 border border-gray-400 rounded-xl">
              <LinkedinIcon />
            </div>
            <div className="p-4 border border-gray-400 rounded-xl">
              <TwitterIcon />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-gray-700 text-xl font-semibold pt-4">Company</h1>
          {footer1.map((item) => (
            <div key={item.name} className="pt-4">
              {item.name}
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-gray-700 text-xl font-semibold pt-4">Support</h1>
          {footer2.map((item) => (
            <div key={item.name} className="pt-4">
              {item.name}
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-gray-700 text-xl font-semibold pt-4">Contact</h1>
          {footer3.map((item) => (
            <div key={item.name} className="pt-4">
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className="border-t-2 p-2 ">
        <div className="md:flex md:justify-between">
          <p className="flex items-end">copyright 2023</p>
          <p className="flex">
            Design by:
            <span className="font-bold">Mubeen Ameen</span>
          </p>
          <p className="flex">
            Code by:<span className="font-bold ">Mubeen Ameen</span>
          </p>
        </div>
      </div>
    </main>
  );
}
