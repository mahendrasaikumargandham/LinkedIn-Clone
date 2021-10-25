import styled from "styled-components";

const HomePageThree = (props) => {
    return (
        <Component>
            <PageLeft>
                <img src="/images/page4.svg" alt="" />
                <Height>Connect with people who can help</Height>
                <ButtonTop>Find people you know</ButtonTop>
            </PageLeft>
            <PageRight>
                <img src="/images/page5.svg" alt="" />
                <Height>Learn the skills you need to succeed</Height>
                <ButtonBottom>Choose a topic to learn about</ButtonBottom>
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
`;

const Height = styled.div`
    visibility: hidden;
    @media(max-width: 768px) {
        font-size: 30px;
        margin-left: 20px;
        margin-top: 5%;
        visibility: visible;
    }
`;

const ButtonTop = styled.button`
    visibility: hidden;
    @media(max-width: 768px) {
        border: 2px solid rgba(0,0,0,0.6);
        margin-left: 10%;
        padding: 15px 20px;
        border-radius: 999px;
        margin-top: 5%;
        font-size: 20px;
        color: rgba(0,0,0,0.6);
        font-weight: 700;
        cursor: pointer;
        visibility: visible;
    }
`;

const ButtonBottom = styled.button`
    visibility: hidden;
    @media(max-width: 768px) {
        border: 2px solid rgba(0,0,0,0.6);
        margin-left: 5%;
        padding: 15px 20px;
        border-radius: 999px;
        margin-top: 5%;
        font-size: 20px;
        color: rgba(0,0,0,0.6);
        font-weight: 700;
        cursor: pointer;
        width: 90%;
        visibility: visible;
    }
`;

const PageBottom = styled.div`
    visibility: hidden;
    @media(max-width: 768px) {
        visibility: visible;
    }
`;

export default HomePageThree;