import React from "react";
import firstPageStyles from "./FirstPage.module.css";
import Image from "next/image";
import ButtonComp from "../Button/Button";

const FirstPage = () => {
  type FormulaArray = string[];

  const formulaArray: FormulaArray = [
    "Natural Formula",
    "Plant Ingredients",
    "Non-GMO",
    "Easy To Swallow",
    "Non-Habit Forming",
    "Natural Formula",
  ];

  return (
    <div className={firstPageStyles.firstPage}>
      <div className={firstPageStyles.firstDiv}>
        <Image
          src="/Java Burn img 05.png"
          alt="Java Burn img 05"
          height={700}
          width={700}
          className={firstPageStyles.imgOne}
        />
      </div>
      <div className={firstPageStyles.secondDiv}>
        <div className={firstPageStyles.secondDivContentOne}>
          <h2 className={firstPageStyles.secondDivHeadingOne}>
            It has no added fillers, preservatives, artificial colors or
            stimulants of any kind.
          </h2>
          <h2 className={firstPageStyles.secondDivHeadingTwo}>
            Every packet of Java Burn is manufactured right here in the USA in
            our state of the art FDA approved and GMP (good manufacturing
            practices) certified facility under the most sterile, strict and
            precise standards.
          </h2>
          <h2 className={firstPageStyles.secondDivHeadingTwo}>
            Plus, we also pay to have every single batch tested by 3rd party
            labs, to ensure the formula in every packet meets our
            industry-leading standards for the highest-quality, purity and
            potency available.
          </h2>
          <h2 className={firstPageStyles.secondDivHeadingTwo}>
            Java Burn totally tasteless and dissolves instantly into your
            coffee…
          </h2>
          <h2 className={firstPageStyles.secondDivHeadingTwo}>
            And it works just as well regardless of what kind of coffee you
            drink or what you like to put in it...
          </h2>
          <Image
            src="/javaburn-badges 1.png"
            alt="javaburn-badges 1"
            height={700}
            width={700}
            className={firstPageStyles.imgThree}
          />
          <ButtonComp />
        </div>
        <div className={firstPageStyles.secondDivContentTwo}>
          <Image
            src="/Java Burn img 03.png"
            alt="Java Burn img 03"
            height={700}
            width={700}
            className={firstPageStyles.imgTwo}
          />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
