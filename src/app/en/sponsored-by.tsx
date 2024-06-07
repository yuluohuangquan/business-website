"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { stagger, useAnimate, useInView } from "framer-motion"
import { useEffect } from "react";

const SPONSORS = [
  "coinbase",
  "spotify",
  "pinterest",
  "google",
  "amazon",
  "netflix",
];

export function SponsoredBy() {

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true })

  useEffect(() => {
    if (isInView) {
      console.log("isInView")
      animate(
        "#sponsored-by",
        { opacity: [0, 1], y: [25, 0] },
        { duration: 1, ease: "easeIn", delay: stagger(1) }
      )
    }
  }, [animate, isInView])

  return (
    <section ref={scope} className="py-8 px-8 lg:py-20 mt-1">
      <div id="sponsored-by" className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          SPONSORED BY
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {SPONSORS.map((logo, key) => (
            <Image
              width={256}
              height={256}
              key={key}
              src={`/logos/logo-${logo}.svg`}
              alt={logo}
              className="w-40"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
