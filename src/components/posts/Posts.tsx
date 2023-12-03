import * as React from "react";
import Post from "./post";
import * as St from "./posts.styled";

const Posts = () => {
  const mockUpData = [
    {
      postCategory: "react",
      createAt: "12-03",
      title: "React 18 새로운 Hook 알아보기",
      content:
        "React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보낸다.React 18이 나온지는 꽤 되었지만, 새로 나온 Hook에 대해서는 학기가 바빠서 알아보지 않았었다. 근데 지난주에 Redux 내부 구조를 보낸다.",
      postImagePath: "../../../images/image 1.png",
    },
    {
      postCategory: "Typescript",
      createAt: "12-03",
      title: "TypeScript 새로운 키워드 using",
      content:
        "2023년 8월 22일 최종 릴리즈 예정인 타입스크립트 5.2 버전에서 새로운 키워드인 'using'이 추가될 예정입니다.using 은 최근 3단계에 돌입 2023년 8월 22일 최종 릴리즈 예정인 타입스크립트 5.2 버전에서 새로운 키워드인 'using'이 추가될 예정입니다.using 은 최근 3단계에 돌입",
      postImagePath: "../../../images/image 1.png",
    },
  ];

  return (
    <St.PostsContainer>
      {mockUpData.map((data, index) => (
        <Post
          key={data.title + index}
          postCategory={data.postCategory}
          createAt={data.createAt}
          title={data.title}
          content={data.content}
          postImagePath={data.postImagePath}
        />
      ))}
    </St.PostsContainer>
  );
};

export default Posts;
