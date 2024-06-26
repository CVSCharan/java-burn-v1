import React from "react";
import mainPageStyles from "./MainPage.module.css";
import Image from "next/image";

const MainPage = () => {
  return (
    <div className={mainPageStyles.mainPage}>
      <div className={mainPageStyles.firstDiv}>
        <Image
          src="/Java Burn 01.png"
          alt="Java Burn img 01"
          height={1000}
          width={1000}
          className={mainPageStyles.imgOne}
        />
      </div>
      <div className={mainPageStyles.secondDiv}>
        <div className={mainPageStyles.secondDivContentOne}>
          <div className={mainPageStyles.secondDivContentOneSubDivOne}>
            <h2 className={mainPageStyles.secondDivFirstHeading}>
              The world’s first and only natural proprietary, patent-pending
              formula, that when combined with coffee, can increase both the
              speed and efficiency of metabolism.
            </h2>
            <h2 className={mainPageStyles.secondDivSecondHeading}>
              While instantly boosting your health, energy and well-being at the
              same time.
            </h2>
          </div>
          <div className={mainPageStyles.secondDivContentOneSubDivTwo}>
            <div
              className={mainPageStyles.secondDivContentOneSubDivTwoContentOne}
            >
              <Image
                src="/javaburn-money-back.png"
                alt="Javaburn-money-back"
                height={600}
                width={600}
                className={mainPageStyles.imgMoneyBack}
              />
            </div>
            <div
              className={mainPageStyles.secondDivContentOneSubDivTwoContentTwo}
            >
              <h2 className={mainPageStyles.secondDivThirdHeading}>
                Java Burn is backed by a 60 day, no questions asked, 100% money
                back guarantee.
              </h2>
              <h2 className={mainPageStyles.secondDivThirdHeading}>
                If trying Java Burn doesn’t turn out to be the best decision
                you’ve ever made, or if you change your mind for any reason
                whatsoever, just let us know anytime in the next 60 days and
                we’ll issue you a prompt and courteous refund right away.
              </h2>
              <h2 className={mainPageStyles.secondDivThirdHeading}>
                Our industry-leading customer care team and myself are extremely
                easy to get a hold of and will always be here to support you no
                matter what.
              </h2>
            </div>
          </div>
        </div>
        <div className={mainPageStyles.secondDivContentTwo}>
          <Image
            src="/Java Burn img 02.png"
            alt="Java Burn img 02"
            height={1000}
            width={1000}
            className={mainPageStyles.imgTwo}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
