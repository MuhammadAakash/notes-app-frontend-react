import React, { useEffect, useState } from "react";
import {
  Link,
  useParams,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    getSingleNote();
  }, []);
  const navigate = useNavigate();

  const getSingleNote = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/notes/${id}`);
    const data = await response.json();

    setData(data);
    console.log("DATA IS:", data);
  };
  const updateData = async (e) => {
    setData({ ...data, body: e.target.value });
  };

  const updateNote = async () => {
    await fetch(`http://127.0.0.1:8000/api/notes/${id}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const deleteNote = async () => {
    await fetch(`http://127.0.0.1:8000/api/notes/${id}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/", { replace: true });
  };

  const handleSubmit = () => {
    updateNote();
    navigate("/", { replace: true });
  };
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        <button onClick={deleteNote}>Delete</button>
      </div>
      <textarea onChange={updateData} defaultValue={data?.body} />
    </div>
  );
};

export default NotePage;
