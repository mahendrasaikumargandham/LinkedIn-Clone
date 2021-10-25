import styled from "styled-components";

const HomeSearch = (props) => {
    return (
        <Container>
            <Heading>
                <h1>Find the right job or internship for you</h1>
                <p>Suggested Seaches</p>
                <span>Engineering</span>
                <span>Bussiness Development</span>
                <span>Finance</span>
                <span>Administrative Assistant</span>
                <span>Retail Associate</span>
                <span>Customer Service</span>
                <span>Operations</span>
                <span>Information Technology</span>
                <span>Marketing</span>
                <span>Human Resources</span>
                <span>Healthcare Services</span>
                <span>Sales</span>
                <span>Program and Project Management</span>
                <span>Accounting</span>
                <span>Arts and Design</span>
                <span>Community and Social Services</span>
                <span>Consulting</span>
                <span>Education</span>
                <span>Administrative</span>
            </Heading>
        </Container>
    );
}

const Container = styled.div`
    padding: 0;
    margin: 0;
    margin-left: 15px;
    width: 90%;
`;

const Heading = styled.div`
    h1 {
        font-size: 50px;
        font-weight: 400;
        color: rgba(0,0,0,0.8);
        margin: 15px;
        width: 90%;
        @media(max-width: 768px) {
            font-size: 30px;
            font-weight: 700;
        }
    }
    p {
        text-transform: uppercase;
        margin-top: 20px;
        margin-left: 15px;
        color: rgba(0,0,0,0.6);
        font-size: 18px;
        font-weight: 700;
    }
    span {
        position: relative;
        display: inline-block;
        background-color: lightgray;
        margin: 10px;
        padding: 15px 25px;
        font-size: 20px;
        font-weight: 700;
        border-radius: 999px;
        color: rgba(0,0,0,0.6);
        @media (max-width: 768px) {
            padding: 14px 20px; 
            margin: 5px;
        }
        &:hover {
            text-decoration: underline;
            background: rgba(0,0,0,0.3);
        }
    }
`;

export default HomeSearch;