import styled from "styled-components";

const Rightside = (props) => {
    return (
        <Container><h2>Right side</h2></Container>
    );
}

const Container = styled.div`
    grid-area: rightside;
`;

export default Rightside;