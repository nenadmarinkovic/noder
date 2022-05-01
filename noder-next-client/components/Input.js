import React, { useState } from "react";

function Input() {
  const [description, setDescription] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    } finally {
      window.location = "/";
      setDescription("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          <br />
          <input
          className="form-control"
            type="text"
            placeholder="Enter your input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
 
        </label>
        <br/>
        <br/>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Input;
