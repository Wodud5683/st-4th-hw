import styled from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.active ? "blue" : "gray")};
  cursor: pointer;
`;

const Box = ({ active, onClick }) => {
  return <StyledBox active={active} onClick={onClick} />;
};

export default Box;
