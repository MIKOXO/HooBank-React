import React from "react";
import styles from "../Style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../Constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} flex-col mb-8 w-full md:flex-row`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={logo} className="w-[266px] h-[72px] object-contain" />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, realize and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap mt-10 md:mt-0">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col my-4 min-w-[150px] ss:my-0"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col justify-between items-center pt-6 border-t-[1px] border-t-[#3F3E45] md:flex-row">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          {new Date().getFullYear()} HooBank. All rights Reserved
        </p>
        <div className="flex flex-row mt-6 md:mt-0">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              } `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
