import React from "react";
import { Avatar } from "@material-ui/core";
import { useForm } from "react-hook-form";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "../CustomCSS/MessageSender.css";
import { useStateValue } from "../HOC";
import db from "../firebase";
import firebase from "firebase";

const MessageSender = () => {
  const [{ user }, dispatch] = useStateValue();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    db.collection("posts").add({
      message: data.input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      ProfilePic: user.photoURL,
      image: data.imageUrl,
    });
    e.target.reset();
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="messageSender__input"
            placeholder={`what's on your mind, ${user.displayName} ?`}
            name="input"
            ref={register({
              required: "INPUT REQUIRED",
              minLength: {
                value: 8,
                message: "THIS FIELD SHOULD NOT BE EMPTY!",
              },
            })}
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="image URL (Optional)
          "
            ref={register}
          />
          {errors.input && (
            <p
              style={{
                color: "red",
                display: "flex",
                padding: "5px",
                alignItems: "center",
                fontSize: "18px",
              }}
            >
              {errors.input.message}
            </p>
          )}
          <button type="submit">Hidden Submit</button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
