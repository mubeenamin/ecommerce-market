"use client"
import { Award, ShipIcon, Trophy, Truck } from "lucide-react";
import { Separator } from "./ui/separator";
import { motion, useTransform, useScroll } from "framer-motion"

const itemVariants = {
  hidden: { y: 300 },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  },
};

export default function HeroBottum() {

  return (
    <main >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1 }}
        className="overflow-hidden flex flex-col mx-auto space-y-4 md:space-y-0 md:flex md:flex-row md:justify-between p-8">
        <motion.div variants={itemVariants} className="flex gap-x-6 font-bold">
          <div><Truck /></div>
          <div>Free Shipping & Retrun</div>
        </motion.div>
        <div className="hidden md:block">
          <Separator className="stroke-black" orientation="vertical" />
        </div>
        <motion.div variants={itemVariants} className="flex gap-x-6 font-bold">
          <div><Award /></div>
          <div>Lowest Price Quarantee</div>
        </motion.div>
        <div className="hidden md:block">
          <Separator orientation="vertical" />
        </div>
        <motion.div variants={itemVariants} className="flex gap-x-6 font-bold">
          <div><Trophy /></div>
          <div>Longest Warranty Offer</div>
        </motion.div>
      </motion.div>
    </main>
  );
}
