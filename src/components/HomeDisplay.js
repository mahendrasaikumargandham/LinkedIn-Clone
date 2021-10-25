import styled from "styled-components";

const HomeDisplay = (props) => {
    return (
        <Component>
            <DisplayRight>
                <img src="/images/page3.png" alt="" />
            </DisplayRight>
            <DisplayLeft>
                <h1>Let the right people know you’re open to work</h1>
                <p>With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities</p>
             </DisplayLeft>
        </Component>
    );
}

const Component = styled.div`
    margin-top: 10%;
    margin-left: 3%;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
    justify-content: space-between;
    display: inline-block;
`;

const DisplayLeft = styled.div`
    display: inline-block;
    justify-content: space-between;
    width: 60%;
    visibility: hidden;
    h1 {
        font-size: 50px;
        font-weight: 500;
        color: #2977c9;
    }
    p {
        margin-top: 10px;
        font-size: 30px;
        font-weight: 300;
    }
    @media (max-width: 768px) {
        margin-top: 15%;
        width: 95%;
        margin-left: 10px;
        h1 {
            font-size: 30px;
        }
        p {
            font-size: 20px;
        }
        visibility: visible;
    }
`;

const DisplayRight = styled.div`
    img {
        top: -300px;
        width: 400px;
        height: 400px;
        position: relative;
        bottom: -2px;
        right: -800px;
        visibility: hidden;
        @media (max-width: 768px) {
        top: 60px;
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

export default HomeDisplay;