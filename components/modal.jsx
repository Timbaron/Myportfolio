import { useState } from "react";

const Modal = ({ isOpen, closeModal, children }) => {
  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-auto bg-opacity-50 ${
        isOpen ? "" : "hidden"
      }`}
      onClick={handleBackgroundClick}
    >
      <div className="fixed inset-0 flex items-center justify-center ">
        <div className="relative bg-black dark:bg-white w-96 max-h-96 overflow-y-auto rounded-md shadow-lg p-6">
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
            onClick={closeModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {children}
        </div>
      </div>
    </div>
  );
};

const ModalPage = ({ project, isModalOpen, setIsModalOpen }) => {
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} closeModal={handleCloseModal}>
        <h2 className="text-lg font-medium mb-4 text-blue-600">
          {project.title}
        </h2>
        <p className="text-gray-700">{project.description}</p>
        <h2 className="text-md font-medium m-4 text-blue-600">
          Tech Stacks
        </h2>
        <div class="flex flex-wrap gap-4 m-4">
          {project.stacks.map((item) => (
            <kbd
              key={item}
              className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
            >
              {item}
            </kbd>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default ModalPage;
