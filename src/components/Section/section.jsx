import React, { useState } from "react";
import styles from "./section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/card";
import Carousel from "../Carousel/Carousel";
const Section = ({ title, data, type }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Collapse"}
        </h4>
      </div>
      {data?.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardwrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((ele) => (
                <Card type={type} data={ele} key={ele.id} />
              ))}
            </div>
          ) : (
            <Carousel data={data} renderCardComponent={(item)=><Card type={type} data={item} /> }/>
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
