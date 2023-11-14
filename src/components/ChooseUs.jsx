import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import imageOne from "../assets/choose-us/best-deals.png";
import imageTwo from "../assets/choose-us/best-sales.png";
import imageThree from "../assets/choose-us/customer.png";
import imageFour from "../assets/choose-us/good-quality.gif";
import imageFive from "../assets/choose-us/expert.png";
import imageSix from "../assets/choose-us/satisfaction.png";
import SectionTitle from "./SectionTitle";

const ChooseUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const chooseUs = [
    {
      title: "Unmatched Selection",
      description:
        "Discover a diverse range of top-quality vehicles, ensuring you find the perfect fit for your lifestyle.",
      image: imageFour,
    },
    {
      title: "Customer-Centric Approach",
      description:
        "Experience exceptional service from our dedicated team, committed to your satisfaction.",
      image: imageSix,
    },
    {
      title: "Best Deals and Savings",
      description:
        "Enjoy competitive pricing, exclusive discounts, and special offers on your dream car.",
      image: imageOne,
    },
    {
      title: "Seamless Financing",
      description:
        "Benefit from hassle-free financing options tailored to your budget and needs.",
      image: imageTwo,
    },
    {
      title: "Transparent Transactions",
      description:
        "Trust in our upfront pricing and clear documentation for a stress-free buying process.",
      image: imageThree,
    },
    {
      title: "Expert Guidance",
      description:
        "Rely on our knowledgeable staff for expert advice on models, features, and more.",
      image: imageFive,
    },
  ];

  return (
    <section className="flex items-center justify-center flex-col my-10 lg:my-20">
      <div data-aos="fade-down">
        <SectionTitle
          title="Why Car Craze?"
          description="At Car Craze, we stand out as the ideal choice for all your car needs.Our dedication to excellence, combined with our customer-centric approach, ensures an unparalleled experience for our valued clients."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {chooseUs.map((item, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            className="rounded-md p-5 shadow-xl text-center space-y-2 w-full h-full"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-[50px] mx-auto"
            />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
