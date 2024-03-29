'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IconChevronsLeft, IconChevronsRight } from '@tabler/icons-react';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, images }: HeroProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === (images?.length ?? 0) - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? (images?.length ?? 0) - 1 : prevIndex - 1));
  };

  return (
    <section id="heroOne">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
            {tagline && <p className="text-base font-semibold uppercase tracking-wide">{tagline}</p>}
            {title && (
              <h1 className="text-primary-500 dark:text-primary-500 leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-8xl">
                {title}
              </h1>
            )}
            <div className="mx-auto max-w-3xl">
              {subtitle && <p className="mb-6 text-3xl font-normal text-gray-600 dark:text-zinc-400">{subtitle}</p>}
              <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary" />}
                {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn" />}
              </div>
            </div>
          </div>
          {images && images.length > 1 && (
            <div className="relative m-auto max-w-5xl">
              <div className="relative">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-orange-500 rounded-full p-2"
                  onClick={prevImage}
                >
                  <IconChevronsLeft />
                </motion.button>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-orange-500 rounded-full p-2"
                  onClick={nextImage}
                >
                  <IconChevronsRight />
                </motion.button>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <Image
                    className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-zinc-700"
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    width={1024}
                    height={607}
                    sizes="(max-width: 64rem) 100vw, 1024px"
                    loading="eager"
                    placeholder="blur"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
