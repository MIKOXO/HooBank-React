import React from "react";
import { stats } from "../Constants";
import styles from "../Style";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap mb-6 sm:mb-20`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold text-white leading-[43px] text-[30px] xs:leading-[53px]">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal uppercase text-gradient ml-3 leading-[21px] text-[20px] xs:leading-[26px]">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
