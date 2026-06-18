import { motion } from "framer-motion";

export default function CommonQuestions() {
  const faqData = [
    {
      question: "Do I have to sign a long-term contract?",
      answer: "ually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party "
    },
    {
      question: "Can I pay for a whole year?",
      answer: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage"
    },
    {
      question: "What if I need help?",
      answer: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party "
    }
  ];

  return (
    <section className="w-full bg-white py-20 md:pt-37 md:pb- flex justify-center items-center">
      <div className="w-full max-w-260 mx-auto px-6 md:px-12 lg:px-0 flex flex-col items-start">
        
        {/* title */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#11142D] text-3xl md:text-4xl lg:text-[40px] font-medium tracking-tight mb-12"
        >
          Common Questions
        </motion.h2>

        {/* Q and A list*/}
        <div className="w-full flex flex-col gap-10 mb-12">
          {faqData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full flex flex-col items-start"
            >
              {/* Q */}
              <h3 className="text-[#11142D] text-base md:text-[19px] font-medium mb-3">
                {item.question}
              </h3>
              {/* A */}
              <p className="text-[#6D6E7A] text-[19px]   ">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03, backgroundColor: "#EBF5FA" }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="px-5 md:px-7.25 py-3 md:py-5.5 border-2 border-[#53B4DA]/69 text-[#1E3E85] font-semibold text-[16px] rounded-2xl bg-transparent transition-colors shadow-sm cursor-pointer"
        >
          More Questions
        </motion.button>

      </div>
    </section>
  );
}