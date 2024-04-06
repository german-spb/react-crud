import React from 'react';
import {Link} from "react-router-dom";
import CreateEdit from "../../components/CreateEdit";

function CreatePostPage() {
  return (
    <>
      <div className="btnsContainer">
        <Link to='/' className="btn backBtn">Назад</Link>
      </div>
      <CreateEdit />
    </>
  );
}

export default CreatePostPage;