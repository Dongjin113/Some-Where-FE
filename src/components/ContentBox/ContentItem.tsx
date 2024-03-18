import React from "react";
import {
  Area,
  ContentImage,
  ContentIt,
  ContentName,
  CoverContents,
  CoverFooter,
  CoverIntroduce,
  CoverMidline,
  CoverSubtitle,
  CoverTitle,
  HeartIcon,
  IntroduceCover,
  Likes,
  Menu,
  Score,
  StarCover,
  StarIcon,
  Stars,
} from "./ContentItem.style";

function ContentItem(props: { index: number }) {
  const { index } = props;

  const truncateCoverIntroduce = (text: string) => {
    if (text.length <= 24) return text;
    return text.substring(0, 24) + "...";
  };

  return (
    <ContentIt>
      <ContentImage>
        <img src="/images/cafe-image.jpg" />
        <StarCover>
          <StarIcon />
          4.3
        </StarCover>
        <IntroduceCover>
          <CoverContents>
            <CoverTitle> 카페임요</CoverTitle>
            <CoverSubtitle>
              <Area> 지역</Area>
              <Menu> 메뉴</Menu>
            </CoverSubtitle>
            <CoverMidline />
            <CoverIntroduce>
              {truncateCoverIntroduce(
                "하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가하이요방가방가"
              )}
            </CoverIntroduce>
            <CoverFooter>
              <Score>90</Score>
              <Stars>
                <StarIcon />
                4.3
              </Stars>
              <Likes>
                <HeartIcon />
                130
              </Likes>
            </CoverFooter>
          </CoverContents>
        </IntroduceCover>
      </ContentImage>
      <ContentName>{"컨텐츠이름" + index}</ContentName>
    </ContentIt>
  );
}

export default ContentItem;
