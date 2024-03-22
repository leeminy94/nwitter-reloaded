import styled from "styled-components";
import PostTweetForm from "../components/poset-tweet-form";

const Wrapper = styled.div``;

export default function Home(){
  return (
    <Wrapper>
        <PostTweetForm />
    </Wrapper>
  );
}