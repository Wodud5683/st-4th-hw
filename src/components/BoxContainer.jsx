import { useState } from "react";
import styled from "styled-components";
import Box from "./Box";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

function BoxContainer() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Container>
      {[0, 1, 2, 3, 4].map((index) => (
        <Box
          key={index}
          active={activeIndex === index} // 클릭된 박스의 인덱스와 비교
          onClick={() => handleClick(index)}
        />
      ))}
    </Container>
  );
}

export default BoxContainer;
