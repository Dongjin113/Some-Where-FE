import React, { useEffect, useState } from "react";
import NavBar from "../Nav/Nav";
import ContentBox from "../../components/ContentBox/ContentBox";
import {
  ContentBoxContainer,
  MainPageContainer,
  MapContainer,
} from "./MainPage.style";
import Footer from "../Footer/Footer";
import SelectTag from "../../components/SelectTag/SelectTag";
import MainPageMap from "../../components/Map/MainPageMap";

function MainPage() {
  const [isMenuFixed, setMenuFixed] = useState(false);

  const city = [
    "서울",
    "경기도",
    "강원도",
    "전라남도",
    "전라북도",
    "경상남도",
    "경상북도",
    "충청남도",
    "충청북도",
    "광주",
    "대구",
    "대전",
    "부산",
    "울산",
    "세종",
    "인천",
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 130) {
      setMenuFixed(true);
    } else {
      setMenuFixed(false);
    }
  };

  const cityRows = [];
  const maxCitiesPerRow = 8;

  // city 배열을 7개씩 나누어서 cityRows에 추가
  for (let i = 0; i < city.length; i += maxCitiesPerRow) {
    cityRows.push(city.slice(i, i + maxCitiesPerRow));
  }

  return (
    <MainPageContainer>
      <NavBar />
      <SelectTag cityRows={cityRows} isMenuFixed={isMenuFixed} />
      <MapContainer isMenuFixed={isMenuFixed}>
        <MainPageMap></MainPageMap>
      </MapContainer>
      <ContentBoxContainer isMenuFixed={isMenuFixed}>
        {Array.from({ length: 5 }).map((_, index) => (
          <ContentBox key={index} />
        ))}
      </ContentBoxContainer>
      <Footer />
    </MainPageContainer>
  );
}

export default MainPage;
