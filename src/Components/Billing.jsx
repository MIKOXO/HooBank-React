import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../Style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} className="w-[100%] h-[100%] relative z-[5]" />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily controll your <br className="hidden sm:block" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[]470px mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          quidem necessitatibus! Labore odit blanditiis veritatis voluptas
          voluptate unde natus, illo quam similique! Animi similique voluptatem
          esse vitae nisi ut tempore?
        </p>

        <div className="flex flex-row flex-wrap mt-6 sm:mt-10">
          <img
            src={apple}
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            className="w-[128px] h-[42px] object-contain  cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
