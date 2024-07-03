import ToggleSwitch from "../../components/ui/dashboard/toggleswitch";
import FAQAccordion from "../../components/ui/dashboard/FAQAccordion";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();

  return (
    <div className="selection:select-none">
      <Header />
      <div className="bg-[#fbf7f2] w-full relative h-[200vh]">
        <div className="justify-center items-center absolute z-10 w-full">
          <div className="flex flex-col items-center justify-center">
            <span className="text-[80px] mt-20 font-medium">CREATE YOUR OWN</span>
            <span className="text-[80px] font-medium">CUSTOM-DESIGNED PRODUCTS</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-[16px] mt-10">
              Lorem ipsum dolor sit amet consectetur. Aliquam varius viverra
              tellus aliquam
            </span>
            <span className="text-[16px]">
              mauris. Justo neque diam tincidunt posuere pretium justo sapien.
            </span>
          </div>
          <div className="items-center mt-12 z-10" onClick={() => navigate("/generate_image")}>
            <span className="px-4 py-3 bg-[#276E70] text-white cursor-pointer">
              Create my product
            </span>
          </div>
        </div>
        <div className="flex w-full justify-center items-center top-48 px-10 absolute">
          <img src="images/main_dash.png" alt="main_dash" />
        </div>
      </div>
      <div className="flex flex-row bg-[#fbf7f2] justify-center px-20">
        <div className="flex flex-col justify-center items-center gap-5 border-r-2 px-10">
          <img src="images/originality.png" className="size-8" alt="originality" />
          <span className="text-[24px] font-semibold text-[#053536]">
            CULTIVATE ORIGINALITY
          </span>
          <span className="text-center text-[16px] text-[#485D5E]">
            Lorem ipsum dolor sit amet consectetur. Vehicula blandit vulputate
            et amet gravida eu ultricies. Porttitor augue nec felis tortor
            mauris. Nulla auctor mi odio sit.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 border-r-2 px-10">
          <img src="images/quality.png" className="size-8" alt="quality" />
          <span className="text-[24px] font-semibold text-[#053536]">
            SUPERIOR QUALITY
          </span>
          <span className="text-center text-[16px] text-[#485D5E]">
            Lorem ipsum dolor sit amet consectetur. Vehicula blandit vulputate
            et amet gravida eu ultricies. Porttitor augue nec felis tortor
            mauris. Nulla auctor mi odio sit.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 px-10">
          <img src="images/delivery.png" className="size-8" alt="delivery" />
          <span className="text-[24px] font-semibold text-[#053536]">
            GLOBAL DELIVERY
          </span>
          <span className="text-center text-[16px] text-[#485D5E]">
            Lorem ipsum dolor sit amet consectetur. Vehicula blandit vulputate
            et amet gravida eu ultricies. Porttitor augue nec felis tortor
            mauris. Nulla auctor mi odio sit.
          </span>
        </div>
      </div>
      <div className="flex flex-col pt-32 bg-[#fbf7f2] justify-center items-center gap-4">
        <span className="text-[56px]">AI IMAGE GENERATOR</span>
        <span className="w-1/2 text-center">
          Lorem ipsum dolor sit amet consectetur. Aliquam varius viverra tellus
          aliquam mauris. Justo neque diam tincidunt posuere pretium justo
          sapien.
        </span>
        <img className="px-32 mt-4" src="images/ai_image_generator.png" alt="ai_image_generator" />
      </div>
      <div className="flex flex-col pt-32 bg-[#f4ede3] justify-center items-center gap-4 pb-20">
        <span className="text-[56px]">WIDE RANGE OF PRODUCTS</span>
        <span className="w-1/2 text-center">
          Lorem ipsum dolor sit amet consectetur. Aliquam varius viverra tellus
          aliquam mauris. Justo neque diam tincidunt posuere pretium justo
          sapien.
        </span>
        <img className="px-32 mt-4" src="images/cards.png" alt="cards" />
        <div className="items-center">
          <span className="px-4 py-3 bg-[#276E70] text-white cursor-pointer" onClick={() => navigate("/generate_image")}>
            Create my product
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-[#fbf7f2] justify-center items-center pt-20 pb-20">
        <span className="text-[56px]">HOW IT WORKS?</span>
        <span className="w-1/2 text-center">
          Lorem ipsum dolor sit amet consectetur. Aliquam varius viverra tellus
          aliquam mauris. Justo neque diam tincidunt posuere pretium justo
          sapien.
        </span>
        <div className="flex flex-row justify-center px-32 mt-10">
          <div className="flex flex-col justify-center items-center gap-5 px-3">
            <img src="images/first.png" className="" alt="first" />
            <span className="text-[16px] font-semibold text-[#053536]">
              GENERATE YOUR IMAGE
            </span>
            <span className="text-center text-[14px] text-[#485D5E]">
              Aliquam varius viverra tellus aliquam mauris. Justo neque diam
              tincidunt posuere.
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 px-3">
            <img src="images/second.png" className="" alt="second" />
            <span className="text-[16px] font-semibold text-[#053536]">
              GENERATE YOUR IMAGE
            </span>
            <span className="text-center text-[14px] text-[#485D5E]">
              Aliquam varius viverra tellus aliquam mauris. Justo neque diam
              tincidunt posuere.
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 px-3">
            <img src="images/third.png" className="" alt="third" />
            <span className="text-[16px] font-semibold text-[#053536]">
              GENERATE YOUR IMAGE
            </span>
            <span className="text-center text-[14px] text-[#485D5E]">
              Aliquam varius viverra tellus aliquam mauris. Justo neque diam
              tincidunt posuere.
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 px-3">
            <img src="images/fourth.png" className="" alt="fourth" />
            <span className="text-[16px] font-semibold text-[#053536]">
              GENERATE YOUR IMAGE
            </span>
            <span className="text-center text-[14px] text-[#485D5E]">
              Aliquam varius viverra tellus aliquam mauris. Justo neque diam
              tincidunt posuere.
            </span>
          </div>
        </div>
        <div className="mt-10">
          <span className="px-4 py-3 bg-[#276E70] text-white cursor-pointer" onClick={() => navigate("/generate_image")}>
            Start now
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-8 bg-[#fbf7f2] justify-center items-center pt-20 pb-20">
        <span className="text-[56px]">PLATFORM GALLERY</span>
        <img className="px-32" src="images/gallery.png" alt="gallery" />
        <div className="mt-10">
          <span className="px-4 py-3 bg-[#276E70] text-white cursor-pointer" onClick={() => navigate("/generate_image")}>
            Create my product
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-8 bg-[#fbf7f2] justify-center items-center pt-20">
        <span className="text-[56px]">TARIFF PLANS</span>
        <span className="w-1/2">
          Lorem ipsum dolor sit amet consectetur. Aliquam varius viverra tellus
          aliquam mauris. Justo neque diam tincidunt posuere pretium justo
          sapien.
        </span>
        <ToggleSwitch />
        <div className="flex flex-row px-32 gap-4 h-auto my-auto">
          <div className="flex flex-col items-center gap-5 border-2 px-4 pb-6">
            <span className="text-[24px] font-semibold text-[#053536] text-left w-full mt-5">
              PERSONALS
            </span>
            <span className="text-[16px] text-[#485D5E] text-left">
              Aliquam varius viverra tellus aliquam mauris. Justo posuere
              pretium justo sapien.
            </span>
            <div className="flex flex-row gap-2 w-full items-start">
              <span className="text-[40px] text-[#053536]">$12</span>
              <span className="mt-2">/month</span>
            </div>
            <div className="w-full bg-[#276E70] py-3 cursor-pointer">
              <span className="w-full text-white">Start now</span>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <div className="flex flex-row gap-2 items-left w-full">
                <img className="w-5 h-5" src="images/checkmark.png" alt="checkmark" />
                <span className="w-full text-left text-[#485D5E]">
                  Aliquam varius viverra tellus aliquam mauris.{" "}
                </span>
              </div>
              <div className="flex flex-row gap-2 items-left w-full">
                <img className="w-5 h-5" src="images/checkmark.png" alt="checkmark" />
                <span className="w-full text-left text-[#485D5E]">
                  Aliquam tellus aliquam mauris.{" "}
                </span>
              </div>
              <div className="flex flex-row gap-2 items-left w-full">
                <img className="w-5 h-5" src="images/checkmark.png" alt="checkmark" />
                <span className="w-full text-left text-[#485D5E]">
                  Varius viverra tellus.{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 border-2 px-4 pb-6 bg-[#F9F2E9] shadow-md">
            <span className="text-[24px] font-semibold text-[#053536] text-left w-full mt-5">
              PROFESSIONAL
            </span>
            <span className="text-[16px] text-[#485D5E] text-left">
              Aliquam varius viverra tellus aliquam mauris. Justo posuere
              pretium justo sapien.
            </span>
            <div className="flex flex-row gap-2 w-full items-start">
              <span className="text-[40px] text-[#053536]">$26</span>
              <span className="mt-2">/month</span>
            </div>
            <div className="w-full bg-[#276E70] py-2 cursor-pointer">
              <span className="w-full text-white">Start now</span>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <div className="flex flex-row gap-2 items-left w-full">
                <img className="w-5 h-5" src="images/checkmark.png" alt="checkmark" />
                <span className="w-full text-left text-[#485D5E]">
                  Aliquam varius viverra tellus aliquam mauris.{" "}
                </span>
              </div>
              <div className="flex flex-row gap-2 items-left w-full">
                <img className="w-5 h-5" src="images/checkmark.png" alt="checkmark" />
                <span className="w-full text-left text-[#485D5E]">
                  Aliquam tellus aliquam mauris.{" "}
                </span>
              </div>
              <div className="flex flex-row gap-2 items-left w-full">
                <img className="w-5 h-5" src="images/checkmark.png" alt="checkmark" />
                <span className="w-full text-left text-[#485D5E]">
                  Varius viverra tellus.{" "}
                </span>
              </div>
              <div className="flex flex-row gap-2 items-left w-full">
                <img className="w-5 h-5" src="images/checkmark.png" alt="checkmark" />
                <span className="w-full text-left text-[#485D5E]">
                  Varius viverra tellus.{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 border-2 px-4 pb-6">
            <span className="text-[24px] font-semibold text-[#053536] text-left w-full mt-5">
              CORPORATE
            </span>
            <span className="text-[16px] text-[#485D5E] text-left">
              Aliquam varius viverra tellus aliquam mauris. Justo posuere
              pretium justo sapien.
            </span>
            <div className="flex flex-row gap-2 w-full items-start">
              <span className="text-[40px] text-[#053536]">$42</span>
              <span className="mt-2">/month</span>
            </div>
            <div className="w-full bg-[#276E70] py-2 cursor-pointer">
              <span className="w-full text-white">Start now</span>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <div className="flex flex-row gap-2">
                <img className="w-5 h-5" src="images/checkmark.png" alt="checkmark" />
                <span className="w-full text-left text-[#485D5E]">
                  Aliquam varius viverra tellus aliquam mauris.
                </span>
              </div>
              <div className="flex flex-row gap-2 items-left">
                <img className="w-5 h-5" src="images/checkmark.png" alt="checkmark" />
                <span className="w-full text-left text-[#485D5E]">
                  Aliquam tellus aliquam mauris.
                </span>
              </div>
              <div className="flex flex-row gap-2 items-left">
                <img className="w-5 h-5" src="images/checkmark.png" alt="checkmark" />
                <span className="w-full text-left text-[#485D5E]">
                  Varius viverra tellus.
                </span>
              </div>
              <div className="flex flex-row gap-2 items-left">
                <img className="w-5 h-5" src="images/checkmark.png" alt="checkmark" />
                <span className="w-full text-left text-[#485D5E]">
                  Varius viverra tellus.
                </span>
              </div>
              <div className="flex flex-row gap-2 items-left">
                <img className="w-5 h-5" src="images/checkmark.png" alt="checkmark" />
                <span className="w-full text-left text-[#485D5E]">
                  Aliquam varius viverra tellus aliquam mauris.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-8 cursor-pointer">
          <span className="w-full text-[#276E70] border border-[#276E70] px-3 py-2">
            More about pricing
          </span>
        </div>
        <div className="flex flex-col w-full pt-32 bg-[#f4ede3] justify-center items-center gap-4 pb-20">
          <span className="text-[56px] text-[#053536]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <div className="w-2/3 gap-2">
            <FAQAccordion title="AN IMPORTANT AND PRESSING QUESTION ABOUT THE OPERATION OF THE PORTAL?">
              Lorem ipsum dolor sit amet consectetur. Biberendum laoreet lorem
              nam feugiat tellus fermentum est mauris urna. Erat libero ultrices
              ipsum libero nibh viverra neque. Turpis pretium feugiat ac
              sagittis pretium id ornare meacenas et. Lacus sed egestas porta
              sodales.
            </FAQAccordion>
            <FAQAccordion title="AN IMPORTANT QUESTION ABOUT THE OPERATION OF THE PORTAL?">
              Lorem ipsum dolor sit amet consectetur. Biberendum laoreet lorem
              nam feugiat tellus fermentum est mauris urna. Erat libero ultrices
              ipsum libero nibh viverra neque. Turpis pretium feugiat ac
              sagittis pretium id ornare meacenas et. Lacus sed egestas porta
              sodales.
            </FAQAccordion>
            <FAQAccordion title="PRESSING QUESTION ABOUT THE OPERATION OF THE PORTAL?">
              Lorem ipsum dolor sit amet consectetur. Biberendum laoreet lorem
              nam feugiat tellus fermentum est mauris urna. Erat libero ultrices
              ipsum libero nibh viverra neque. Turpis pretium feugiat ac
              sagittis pretium id ornare meacenas et. Lacus sed egestas porta
              sodales.
            </FAQAccordion>
            <FAQAccordion title="AN IMPORTANT AND PRESSING QUESTION ABOUT THE OPERATION OF THE PORTAL?">
              Lorem ipsum dolor sit amet consectetur. Biberendum laoreet lorem
              nam feugiat tellus fermentum est mauris urna. Erat libero ultrices
              ipsum libero nibh viverra neque. Turpis pretium feugiat ac
              sagittis pretium id ornare meacenas et. Lacus sed egestas porta
              sodales.
            </FAQAccordion>
            <FAQAccordion title="AN IMPORTANT QUESTION ABOUT THE OPERATION OF THE PORTAL?">
              Lorem ipsum dolor sit amet consectetur. Biberendum laoreet lorem
              nam feugiat tellus fermentum est mauris urna. Erat libero ultrices
              ipsum libero nibh viverra neque. Turpis pretium feugiat ac
              sagittis pretium id ornare meacenas et. Lacus sed egestas porta
              sodales.
            </FAQAccordion>
          </div>
          <span className="w-1/2 text-center mt-8 text-gray-600">
            Didn't find the answer to your question?
          </span>
          <span className="w-1/2 text-center text-gray-600">
            Ask us! We will respond as soon as possible!
          </span>
          <div className="mt-4">
            <span className="px-4 py-3 bg-[#276E70] text-white cursor-pointer">
              Contact us
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap bg-[#276E70] relative py-20 justify-center items-center z-0">
        <img className="absolute right-0 -z-10 top-[-200px]" src="images/right_bag.png" alt="right_bag" />
        <img className="absolute left-0 -z-10" src="images/left_bag.png" alt="left_bag" />
        <span className="text-[56px] text-white">CREATE YOUR OWN</span>
        <span className="text-[56px] text-white">CUSTOM-DESIGNED PRODUCTS</span>
        <span className="text-white w-2/5 mt-8">
          Lorem ipsum dolor sit amet consectetur. Aliquam varius viverra tellus
          aliquam mauris. Justo neque diam tincidunt posuere pretium justo
          sapien.
        </span>
        <div className="mt-10">
          <span className="px-3 py-2 bg-white borde border-[#276E70] text-[#276E70] cursor-pointer font-bold" onClick={() => navigate("/generate_image")}>
            Create my product
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-8 bg-[#fbf7f2] justify-center items-center pt-20 pb-20">
        <span className="text-[56px] text-[#053536]">PAGHEERA</span>
        <div className="flex flex-row w-1/3 justify-between">
          <span>Home</span>
          <span>Benefits</span>
          <span>Pricing</span>
          <span>Contact</span>
        </div>
        <div className="flex flex-row w-1/6 justify-between">
          <img src="images/facebook.png" alt="facebook" />
          <img src="images/instagram.png" alt="instagram" />
          <img src="images/github.png" alt="github" />
          <img src="images/discord.png" alt="discord" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashBoard;
