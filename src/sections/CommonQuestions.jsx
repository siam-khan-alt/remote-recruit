import { motion } from "framer-motion";
import { faqData } from "../data/faqs";

export default function CommonQuestions() {

  return (
    <section className=" bg-white py-20 md:pt-37 md:pb-[213px] flex justify-center items-center">
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
          className="px-5 md:px-[29px] py-3 md:py-[22px] border-2 border-[#53B4DA]/69 text-[#1E3E85] font-semibold text-[16px] rounded-2xl bg-transparent transition-colors shadow-sm cursor-pointer"
        >
          More Questions
        </motion.button>

      </div>
    </section>
  );
}