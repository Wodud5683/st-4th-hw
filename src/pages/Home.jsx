import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>홈 화면</h2>
      <ul>
        <li><Link to="/detail/1">지출 항목 1</Link></li>
        <li><Link to="/detail/2">지출 항목 2</Link></li>
        {/* 추가 지출 항목 */}
      </ul>
    </div>
  );
};

export default Home;
