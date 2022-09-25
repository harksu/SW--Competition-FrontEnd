import React from 'react';
import styled from 'styled-components';

import { ReactComponent as HeartBtn } from '../../assests/HeartBtn.svg';
import { ReactComponent as blueCheck } from '../../assests/blueCheck.svg';
import ListDemoData from './ListDemoData';

function ContentList() {
  return (
    <ListContainer>
      <Contents>
        {ListDemoData.map((data) => (
          <ContentContainer key={data.boardId}>
            <ContentNum>{data.boardId}</ContentNum>
            <TitleBox>
              <ContentTag>
                {data.tag === 'none' ? '' : `[${data.tag}]`}
              </ContentTag>
              <ContentTitle>&nbsp;{data.title}</ContentTitle>
            </TitleBox>
            <ContentWriter>{data.writer_name}</ContentWriter>
            <ContentSympathy>
              <SympathyContainer>
                <HeartBtnStyle />
                {data.likesCount}
              </SympathyContainer>
            </ContentSympathy>
            <ContentAnswer>
              {data.isReplied ? <BlueCheckStyle /> : ''}
            </ContentAnswer>
          </ContentContainer>
        ))}
      </Contents>
    </ListContainer>
  );
}

const ListContainer = styled.div`
  width: 100%;
  height: 80%;
`;

// 한 페이지 당 10개 행
const Contents = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  width: 100%;
  height: 100%;
  border: 2px 2px 0 2px solid #ededed;
`;

// 행 당 5개의 목록
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 11% 51% 13% 13% 13%;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid #ededed;
  text-align: center;
`;

const ContentNum = styled.div`
  padding-top: 20px;
  border-right: 2px solid #ededed;
  font-size: 25px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  border-right: 2px solid #ededed;
  cursor: pointer;
`;

const ContentTag = styled.div`
  font-weight: 700;
  font-size: 25px;
`;

const ContentTitle = styled.div`
  font-size: 25px;
`;

const ContentWriter = styled.div`
  padding-top: 20px;
  border-right: 2px solid #ededed;
  font-size: 25px;
`;

const ContentSympathy = styled.div`
  display: flex;
  align-items: center;
  border-right: 2px solid #ededed;
`;

const SympathyContainer = styled.div`
  display: flex;
  margin-left: 35%;
  font-size: 20px;
`;

const HeartBtnStyle = styled(HeartBtn)`
  margin-right: 14px;
  cursor: pointer;
`;

const BlueCheckStyle = styled(blueCheck)``;

const ContentAnswer = styled.div`
  padding-top: 18px;
`;

export default ContentList;
