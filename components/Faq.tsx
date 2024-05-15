"use client";
import * as Accordion from "@radix-ui/react-accordion";
import Plus from "@/public/assets/Plus.svg";
import Image from "next/image";
const items = [
  {
    question: "How does the platform match students with internships?",
    answer:
      "Our platform uses advanced psychometrics and user input to match students with internships that align with their skills, interests, and personality traits",
  },
  {
    question: "What types of internships are available on the platform?",
    answer:
      "Our platform offers a wide range of internships across various industries, including technology, healthcare, business, and more.",
  },
  {
    question: "Is there a fee to use the platform?",
    answer:
      "No, our platform is free for students to use. There are no hidden fees or charges",
  },
  {
    question: "Can students receive academic credit for their internships?",
    answer:
      "Yes, students have the option to receive academic credit for their internships. Our platform facilitates the process and works with educational institutions to ensure compliance.",
  },
  {
    question: "How do I apply for an internship through the platform?",
    answer:
      "To apply for an internship, simply create an account on our platform, complete your profile, and browse available internship opportunities. Once you find a suitable internship, submit your application directly through the platform.",
  },
  {
    question: "Are internships offered internationally?",
    answer:
      "Yes, our platform provides opportunities for international internships. Students can explore internships in different countries and gain valuable global experience",
  },
];
const Faq = () => {
  return (
    <div
      id="faqs"
      className="flex flex-col w-full py-48px lg:py-[60px] lg:flex-row lg:gap-x-6"
    >
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="font-medium text-[#EB2891] text-[14px] lg:text-base">
          Frequently Asked Questions
        </h3>
        <h1 className="font-medium text-2xl py-4 text-[#172026] text-[24px] lg:text-[42px] lg:leading-[58px]">
          Let’s clarify some of your questions
        </h1>
        <div className="text-[#36485C] text-[16px] pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </div>
      </div>
      <div className="lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                value={`item-${index + 1}`}
                className="bg-[#E3F1FF] p-[16px] rounded-[8px]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between">
                    <p className="text-left text-[#172026] text-[16px] font-medium leading-[24px] lg:text-[18px]">
                      {item.question}
                    </p>
                    <span className="text-left text-[#172026] text-[16px] font-medium leading-[24px]">
                      <Image
                        src={Plus}
                        alt="See More"
                        className="sm:w-3 sm:h-2 lg:w-6 lg:h-6"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <p className="pt-2 text-[#36485C]">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
};

export default Faq;
