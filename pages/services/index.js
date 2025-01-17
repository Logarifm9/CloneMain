// components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-12 sm:py-24 lg:py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl'
            >
              Nasz zespół <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[350px] sm:max-w-[400px] mx-auto lg:mx-0 text-sm sm:text-base md:text-lg lg:text-xl'
            >
              Zespół Kancelarii Ochrony Prawnej w Sieci
              to grupa doświadczonych prawników, specjalistów ds. bezpieczeństwa cyfrowego oraz detektywów, którzy łączą wiedzę prawniczą z zaawansowaną ekspertyzą w obszarze cyberprzestępczości. Każdy członek naszego zespołu posiada specjalistyczną wiedzę z zakresu prawa internetowego, ochrony danych osobowych oraz zwalczania oszustw internetowych, co pozwala nam skutecznie rozwiązywać nawet najbardziej skomplikowane sprawy.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
