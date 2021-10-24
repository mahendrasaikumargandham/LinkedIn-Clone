import styled from "styled-components";

const HomePageThree = (props) => {
    return (
        <Component>
            <PageLeft>
                <img src="/images/page4.svg" alt="" />
                <h1>Connect with people who can help</h1>
                <p>Find people you know</p>
            </PageLeft>
            <PageRight>
                <img src="/images/page5.svg" alt="" />
                <h1>Learn the skills you need to succeed</h1>
                <p>Choose a topic to learn about</p>
            </PageRight>
            <PageBottom>
                <img src="/images/page6.jpeg" alt="" />
            </PageBottom>
        </Component>
    );
}

const Component = styled.div`
    padding: 0;
    margin-top: 10%;
    justify-content: space-between;
`;
const PageLeft = styled.div`
    img {
    width: 300px;
    height: 300px;
    position: relative;
    visibility: hidden;
    @media (max-width: 768px) {
      top: 260px;
      margin-top: 10%;
      margin-left: 15px;
      width: 90%;
      position: initial;
      height: initial;
      margin-bottom: 0;
      visibility: visible;
      h1 {
        position: relative;
      margin-left: 15%;
      width: 100%;
      font-size: 50px;
      font-weight: 300;
    }
    }
    
  }
  
`;
const PageRight = styled.div`
    img {
    visibility: hidden;
    @media (max-width: 768px) {
      top: 260px;
      margin-top: 10%;
      margin-left: 15px;
      width: 90%;
      position: initial;
      height: initial;
      margin-bottom: 0;
      visibility: visible;
    }
  }
  h1 {
      position: relative;
      top: -620px;
      right: -700px;
      margin-right: 10%;
      width: 35%;
      font-size: 50px;
      font-weight: 300;
  }
`;

const Button = styled.button`

`;

const PageBottom = styled.div`
    img {
        width: 400px;
        height: 400px;
        position: relative;
        visibility: hidden;
    }
    @media (max-width: 768px) {
        img {
            position: relative;
            right: -50px;
            visibility: visible;
    }
    }
`;
export default HomePageThree;