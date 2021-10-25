import styled from "styled-components";

const Main = (props) => {
    return (
        <Container><h2>Main</h2></Container>
    );
}

const Container = styled.div`
    grid-area: main;
`;

export default Main;