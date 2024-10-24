import React from "react";
import { clients } from "../Constants";
import styles from "../Style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} min-w-[120px] sm:min-w-[192px]`}
          >
            <img
              src={client.logo}
              className="w-[100px] object-contain sm:w-[192px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
