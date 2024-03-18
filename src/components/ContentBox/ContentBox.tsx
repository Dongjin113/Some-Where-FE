import React, { useState } from "react";
import ContentItem from "./ContentItem";

import {
  Content,
  ContentBx,
  ContentContainer,
  ContentDetail,
  ContentItems,
  ContentMidline,
  ContentNav,
  NextIcon,
  PreIcon,
  SlideButton,
} from "./ContentBox.style";

function ContentBox() {
  const [startIdx, setStartIdx] = useState(0);
  const itemsPerPage = 4;
  const contentCounts = 15;

  const handleNextButtonClick = () => {
    const maxPage = Math.ceil(contentCounts / itemsPerPage);
    if (startIdx >= (maxPage - 1) * itemsPerPage - (itemsPerPage - 1)) return;

    startIdx === (maxPage - 2) * itemsPerPage
      ? contentCounts % itemsPerPage === 0
        ? setStartIdx((prevStartIdx) => prevStartIdx + itemsPerPage)
        : setStartIdx(
            (prevStartIdx) => prevStartIdx + (contentCounts % itemsPerPage)
          )
      : setStartIdx((prevStartIdx) => prevStartIdx + itemsPerPage);
  };

  const handlePreButtonClick = () => {
    setStartIdx((prevStartIdx) => Math.max(prevStartIdx - itemsPerPage, 0));
  };

  return (
    <ContentBx>
      <SlideButton onClick={handlePreButtonClick}>
        <PreIcon />
      </SlideButton>
      <Content>
        <ContentNav>
          #서울
          <ContentDetail>보러가기</ContentDetail>
        </ContentNav>
        <ContentMidline />
        <ContentContainer>
          <ContentItems start={startIdx}>
            {Array.from({ length: contentCounts }).map((_, index) => (
              <ContentItem key={index} index={index} />
            ))}
          </ContentItems>
        </ContentContainer>
      </Content>
      <SlideButton onClick={handleNextButtonClick}>
        <NextIcon />
      </SlideButton>
    </ContentBx>
  );
}

export default ContentBox;
