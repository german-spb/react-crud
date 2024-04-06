import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Time from "../../components/Time";
import CreateEdit from "../../components/CreateEdit";
import {Link} from "react-router-dom";

function PostPage() {
  const [post, setPost] = useState(null);
  const [edit, setEdit] = useState(false);
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:7777/posts')
      .then(res => res.json())
      .then(data => {
        let postInner = data.filter(i => Number(i.id) === Number(id))[0];
        setPost(postInner === undefined ? {} : postInner)
      });
  },[edit])

  const onRemovePost = async (id) => {
    await fetch(`http://localhost:7777/posts/${id}`, {
      method: 'DELETE'
    });

    navigate('/');
  }

  const onClickEdit = () => setEdit(!edit);
  const onDoneEdit = (status) => setEdit(status);

  if (post === null) {
    return 'Loading...'
  }

  if (Object.keys(post).length === 0) {
    return `No element with id == ${id}`
  }

  if (edit === true) {
    return(
      <>
        <div className="btnsContainer">
          <div className="btn backBtn" onClick={() => onClickEdit()}>Назад</div>
        </div>
        <CreateEdit postinfo={post} editFunc={(status) => onDoneEdit(status)} />
      </>
    )
  }

  return (
    <>
      <div className="btnsContainer">
        <Link to="/" className="btn btnBackToList">К списку</Link>
        <div className="btn backBtn" onClick={() => onRemovePost(id)}>Удалить</div>
        <div className="btn editBtn" onClick={() => onClickEdit()}>Редактировать</div>
      </div>

      <div className="innerPageContent">
        <div>{post.content}</div>
        <br />
        <div><Time time={post.created} /></div>
      </div>
    </>
  );
}

export default PostPage;