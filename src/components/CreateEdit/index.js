import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

function CreateEdit({postinfo, editFunc}) {
  let navigate = useNavigate();
  const [text, setText] = useState('');

  let isEdit = postinfo?.id !== undefined;

  useEffect(() => {
    if (isEdit) setText(postinfo.content)
  }, [])


  const onChangeTextarea = (e) => {
    setText(e.target.value)
  }

  const onSubmitForm = async (e) => {
    e.preventDefault();

    await fetch('http://localhost:7777/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: isEdit ? postinfo.id : 0,
        content: text
      })
    })

    // go to main page after POST
    if (isEdit) {
      editFunc(false)
    } else {
      navigate('/');
    }
  }

  return (
    <div className="createPostForm">
      <form onSubmit={(e) => onSubmitForm(e)}>
        <textarea
          value={text}
          onChange={(e) => onChangeTextarea(e)}
          required
        />

        <input
          type="submit"
          value={isEdit ? 'Редактировать' : 'Опубликовать'}
          className="btn submitBtn"
        />
      </form>
    </div>
  )
}

CreateEdit.propTypes = {
  postinfo: PropTypes.object,
  editFunc: PropTypes.func
}

export default CreateEdit;