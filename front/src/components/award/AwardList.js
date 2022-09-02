import React from "react";

const AwardList = ({
  index,
  award,
  changeEditMode,
  deleteAward,
  isEditable,
}) => {
  const { name, description } = award;

  // 삭제
  const handleDeleteClick = async (e) => {
    deleteAward(award._id);
  };

  // 편집모드
  const handleEditClick = async (e) => {
    changeEditMode(index);
  };

  return (
    <div className="align-items-center mt-4 row">
      <div className="col list">
        <span className="name">{name}</span>
        <span className="description">{description}</span>
      </div>
      {isEditable && (
        <div className="d-flex justify-content-center col-md-2 mt-3">
          <button
            type="button"
            className="me-2 btn btn-outline-primary btn-sm"
            onClick={handleEditClick}
          >
            편집
          </button>

          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={handleDeleteClick}
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default AwardList;
