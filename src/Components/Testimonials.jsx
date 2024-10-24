import React from "react";
import styles from "../Style";
import { feedback } from "../Constants";
import Feedback from "./Feedback";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <div className="w-full flex justify-between items-center flex-col relative mb-6 z-[1] sm:mb-16 md:flex-row">
        <h1 className={styles.heading2}>
          What people are <br className="hidden sm:block" /> saying about us
        </h1>
        <div className="w-full mt-6 md:mt-0">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet
          </p>
        </div>
      </div>

      <div className="flex flex-wrap relative z-[1] justify-center w-full feedback-container sm:justify-start">
        {feedback.map((card) => (
          <Feedback key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
