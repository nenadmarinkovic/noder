import React, { Fragment, useState } from "react";
import Modal from "react-bootstrap/Modal";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //edit description function

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:4000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        variant="primary"
        onClick={handleShow}
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>
      <Modal
      show={show} onHide={handleClose}
        className="modal"
        id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default EditTodo;
