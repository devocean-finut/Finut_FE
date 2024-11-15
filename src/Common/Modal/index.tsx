import React, { useEffect } from "react";

interface ModalProps {
  show: boolean; // 모달을 보여줄지 여부
  onClose: () => void; // 모달 닫기 함수
  title?: string; // 모달의 제목
  children: React.ReactNode; // 모달 내용
  footer?: React.ReactNode; // 모달 하단의 버튼
}

function Modal({ show, onClose, title, children, footer }: ModalProps) {
  // ESC 키로 모달 닫기 기능 추가
  useEffect(() => {
    const handleEscClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscClose);
    return () => window.removeEventListener("keydown", handleEscClose);
  }, [onClose]);

  // 모달이 표시되지 않을 경우 아무것도 렌더링하지 않음
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 "
      onClick={onClose}
    >
      <div
        className="max-h-[60%] overflow-scroll bg-white rounded-lg shadow-lg max-w-md w-5/6 p-6 relative fadeIn"
        onClick={(e) => e.stopPropagation()} // 모달 외부 클릭으로 닫기 방지
      >
        {title && (
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
              onClick={onClose}
            >
              ✕
            </button>
          </div>
        )}

        <div className="mb-4 ">{children}</div>

        {footer && <div className="flex justify-end space-x-2">{footer}</div>}
      </div>
    </div>
  );
}

export default Modal;
