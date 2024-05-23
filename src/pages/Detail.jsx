import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  console.log(`Detail component, ID: ${id}`);

  return (
    <div>
      <h2>지출 상세 화면</h2>
      <p>지출 항목 ID: {id}</p>
    </div>
  );
};

export default Detail;
