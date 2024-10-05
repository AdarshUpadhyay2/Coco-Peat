import React from "react";

const AboutUs = () => {
  return (
    <section>
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-bold text-titleGreen dark:text-white">
            Rooted in Quality, Driven by Passion
          </h2>
          <p class="mb-4">
            At <strong>Kore Agro</strong>, we are dedicated to revolutionizing
            the agricultural landscape by offering sustainable, high-quality
            agro-based products. With years of expertise and a deep commitment
            to innovation, we aim to provide solutions that empower farmers,
            enhance productivity, and promote environmental stewardship.
          </p>
          <p>
            Our product portfolio ranges from organic fertilizers and soil
            conditioners to advanced irrigation systems and eco-friendly pest
            control solutions. Each of our offerings is meticulously designed to
            meet the evolving needs of modern agriculture, ensuring healthier
            crops and higher yields while minimizing environmental impact.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
          <img
            class="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            class="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
