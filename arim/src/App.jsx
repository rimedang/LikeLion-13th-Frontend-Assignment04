import React, { useState, useEffect } from 'react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);

  // 모달 열기 버튼 클릭 시
  const handleOpenModal = () => {
    setIsModalOpen(true);
    setTimeLeft(5); // 카운트다운 초기화
  };

  // 모달 타이머
  useEffect(() => {
    if (isModalOpen && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }

    if (timeLeft === 0) {
      setIsModalOpen(false); // 타이머 끝나면 모달 닫기
    }
  }, [isModalOpen, timeLeft]);

  return (
    <div>
      <button onClick={handleOpenModal}>모달 보기</button>

      {isModalOpen && (
        <div id="modal">
          <h3>멋사 4주차 과제</h3>
          <p>⏳ {timeLeft}초 후에 폭파됩니다</p>
        </div>
      )}
    </div>
  );
}

export default App;
