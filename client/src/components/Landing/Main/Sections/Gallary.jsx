import React from "react";
import Image01 from "../../../../assets/images/gallary/image_01.jpg";
import Image02 from "../../../../assets/images/gallary/image_02.jpg";
import Image03 from "../../../../assets/images/gallary/image_03.jpg";
import Image04 from "../../../../assets/images/gallary/image_04.jpg";
import Image05 from "../../../../assets/images/gallary/image_05.jpg";
import Image06 from "../../../../assets/images/gallary/image_06.jpg";

const Gallary = () => {
  return (
    <section className="gallary">
      <div className="gallary--container">
        <img src={Image01} alt="image01" />
        <img src={Image02} alt="image02" />
        <img src={Image03} alt="image03" />
        <img src={Image04} alt="image04" />
        <img src={Image05} alt="image05" />
        <img src={Image06} alt="image06" />
      </div>
    </section>
  );
};

export default Gallary;
