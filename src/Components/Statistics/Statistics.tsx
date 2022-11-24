import React from "react";
import { HeadingSecondary, HeadingTertiary } from "../Layouts";
import { StatisticsBox, StatisticsItem } from "./Statistics.styled";

const list = [
  {
    id: "statistics-item--1",
    img: "/assets/icon-brand-recognition.svg",
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    id: "statistics-item--2",
    img: "/assets/icon-detailed-records.svg",
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    id: "statistics-item--3",
    img: "/assets/icon-fully-customizable.svg",
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

const Statistics: React.FC = () => {
  return (
    <StatisticsBox>
      <div className="statistics-container">
        <HeadingSecondary value="Advanced Statistics" />
        <p className="statistics-description">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="statistics-list">
          {list.map((item, i) => (
            <StatisticsItem i={i} key={item.id}>
              <figure className="statistics-list--item__fig">
                <img src={item.img} alt={item.title} />
              </figure>
              <HeadingTertiary value={item.title} />
              <p className="statistics-list--item__description">
                {item.description}
              </p>
            </StatisticsItem>
          ))}
        </div>
      </div>
    </StatisticsBox>
  );
};

export default Statistics;
