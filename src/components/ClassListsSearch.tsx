import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ClassEach from './ClassEach';
import API from '../API/API';

export type ClassInfo = {
  lessonId: number;
  title: string;
  userName: string;
  likeCount: number;
};

const ClassListsSearch = () => {
  const [classInfo, setClassInfo] = useState<ClassInfo[] | null>(null);
  // const [lessonId, setLessonId] = useState();
  // const [title, setTitle] = useState();
  // const [userName, setUserName] = useState();
  // const [likeCount, setLikeCount] = useState();
  useEffect(() => {
    const asynData = async () => {
      const response = await API.getLessons();
      console.log(response.data);
      setClassInfo(response.data);
      // setLessonId(response.data.lessonId);
      // setTitle(response.data.title);
      // setUserName(response.data.userName);
      // setLikeCount(response.data.likeCount);
    };
    asynData().catch(console.error);
  }, []);

  return (
    <StyledContainer>
      <StyledTitleDiv>검색 결과</StyledTitleDiv>
      <StyledSubDiv>00개의 강의를 찾았어요!</StyledSubDiv>
      <hr />
      <StyledClassLists>
        <div>
          {classInfo
            ? classInfo.map((classInfo) => {
                return (
                  <ClassEach
                    lessonId={classInfo.lessonId}
                    title={classInfo.title}
                    userName={classInfo.userName}
                    likeCount={classInfo.likeCount}
                  />
                );
              })
            : null}
        </div>
      </StyledClassLists>
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
  margin: 0 0 80px;
`;
const StyledClassLists = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const StyledTitleDiv = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin: 30px 0 10px;
`;
const StyledSubDiv = styled.div`
  font-size: 14px;
  margin: 8px 0 10px;
  color: gray;
`;
export default ClassListsSearch;

// <ClassEach
//   lessonId={3}
//   title="두시수업"
//   userName="김다정"
//   likeCount={10}
// />
// <ClassEach
//   lessonId={3}
//   title="두시수업"
//   userName="김다정"
//   likeCount={10}
// />
// <ClassEach
//   lessonId={3}
//   title="두시수업"
//   userName="김다정"
//   likeCount={10}
// />
// <ClassEach
//   lessonId={3}
//   title="두시수업"
//   userName="김다정"
//   likeCount={10}
// />
