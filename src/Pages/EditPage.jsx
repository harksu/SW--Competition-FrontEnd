import styled from 'styled-components';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import WritingDropdownMenu from '../Components/WritingDropdownMenu';
import instance from '../lib/Request';
import { WritingAtom } from '../Atoms/WritingAtom';

function EditPage() {
  const [isInfoChecked, setIsInfoChecked] = useState(false);
  const { board_id } = useParams();
  const [contents, setContents] = useState('');
  const [title, setTitle] = useState('');

  const tag = useRecoilValue(WritingAtom);

  const handleSendPost = async () => {
    if (isInfoChecked) {
      try {
        await instance.put('/api/boards/{boardId}', {
          content: contents,
          tag,
          title,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('정보 동의가 체크되지 않았습니다.');
    }
  };

  console.log(isInfoChecked);

  const handleChecked = (e) => {
    if (e.target.checked) {
      setIsInfoChecked(true);
      console.log('체크됨');
    } else {
      setIsInfoChecked(false);
      console.log('체크안됨');
      console.log(tag);
    }
  };

  const onChangeContents = (e) => {
    setContents(e.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  //   useEffect(() => {
  //     const getBoard = async () => {
  //       const {data} = await axios.get(`/api/board/${board_id}`);
  //       return data;
  //     }

  return (
    <WritingWrapper>
      <Title>명지 의견 글 수정</Title>
      <WritingBox>
        <SubTitleBox>
          <SubTitleText>제목</SubTitleText>
          <SubTitle>
            <WritingDropdownMenu />
            <SubTitleInput
              maxLength={100}
              value={title}
              onChange={onChangeTitle}
            />
          </SubTitle>
        </SubTitleBox>
        <ContentsBox>
          <SubTitleText>내용</SubTitleText>
          <ContentsTextArea
            name="contents"
            value={contents}
            onChange={onChangeContents}
          />
        </ContentsBox>
        <AgreeAndPostBox>
          <p>
            폭력적인 글이나 명예훼손성 발언의 글을 작성하실 경우 학교 측으로
            사용자 정보를 제공하는 것에 동의하십니까?
          </p>
          <CheckButton
            type="checkbox"
            checked={isInfoChecked}
            onChange={handleChecked}
          />
          <WritingButton onClick={handleSendPost}>작성하기</WritingButton>
        </AgreeAndPostBox>
      </WritingBox>
      <NoneBox />
    </WritingWrapper>
  );
}

const WritingWrapper = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 128px;
`;

const Title = styled.p`
  margin-top: 128px;
  margin-left: 268px;

  font-weight: bold;
  font-size: 50px;

  user-select: none;
`;

const WritingBox = styled.div`
  width: 100%;
  height: 850px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 40px;
  border-radius: 10px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`;

// 제목 박스
const SubTitleBox = styled.div`
  display: flex;

  margin-bottom: 54px;
  margin-top: 28px;
`;

const SubTitleText = styled.p`
  font-size: 25px;
  font-weight: bold;
  user-select: none;
`;

const SubTitle = styled.div`
  width: 800px;
  height: 58px;

  display: flex;
  margin-left: 52px;
  background: #ffffff;

  border: 2px solid #ededed;
  border-radius: 10px;
`;

const SubTitleInput = styled.input`
  width: 660px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 25px;
  font-size: 22px;
  border: none;

  :focus {
    outline: none;
  }
`;

// 내용 박스
const ContentsBox = styled.div`
  display: flex;
`;

const ContentsTextArea = styled.textarea`
  width: 740px;
  height: 540px;

  background: #ffffff;
  border: 2px solid #ededed;
  border-radius: 10px;

  margin-left: 52px;
  margin-bottom: 25px;
  padding: 30px;

  resize: none;
  overflow: hidden;
  font-size: 20px;
`;

const NoneBox = styled.div`
  height: 148px;
`;

// 동의 & 작성버튼
const AgreeAndPostBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 37px;
  margin-left: 100px;

  p {
    font-size: 13px;
    user-select: none;
  }
`;

const CheckButton = styled.input`
  width: 20px;
  height: 20px;

  margin-left: 18px;
  cursor: pointer;
`;

const WritingButton = styled.button`
  width: 130px;
  height: 40px;

  background: #ffffff;
  border: 1px solid #b5b5b5;
  border-radius: 5px;
  margin: 10px 0 10px 38px;
`;

export default EditPage;