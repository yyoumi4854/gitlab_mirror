import React, { useState } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import * as Api from "../../apis/api";

const ProjectEditForm = ({
  setProjects,
  project,
  dateFormat,
  handleEditClick,
}) => {
  const [editStr, setEditStr] = useState({
    name: project.name,
    description: project.description,
  });
  const [editStartDate, seteditStartDate] = useState(new Date(project.start));
  const [editEndDate, setEditEndDate] = useState(new Date(project.end));

  const handleEditStrChange = (e) => {
    const { name, value } = e.target;
    const newEditStr = { ...editStr };
    newEditStr[name] = value;
    setEditStr(newEditStr);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    if (!editStr.name || !editStr.description) return;
    const newList = {
      projectId: project._id,
      ...editStr,
      start: dateFormat(editStartDate),
      end: dateFormat(editEndDate),
    };

    const res = await Api.patch("project", newList);
    setProjects([...res.data.projects]);
    handleEditClick();
  };

  return (
    <>
      <Form onSubmit={handleEditSubmit}>
        <div className="mt-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="프로젝트 제목"
            value={editStr.name}
            onChange={handleEditStrChange}
          />
        </div>
        <div className="mt-3">
          <Form.Control
            type="text"
            name="description"
            placeholder="상세내역"
            value={editStr.description}
            onChange={handleEditStrChange}
          />
        </div>

        <div className="calendars mt-3" style={{ display: "flex" }}>
          <div>
            <DatePicker
              className="me-3"
              selected={editStartDate}
              onChange={(data) => seteditStartDate(data)}
            />
          </div>

          <div>
            <DatePicker
              selected={editEndDate}
              onChange={(data) => setEditEndDate(data)}
            />
          </div>
        </div>

        <div className="col-sm-20 mt-3 text-center">
          <button type="submit" className="me-3 btn btn-primary">
            확인
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleEditClick}
          >
            취소
          </button>
        </div>
      </Form>
    </>
  );
};

export default ProjectEditForm;
