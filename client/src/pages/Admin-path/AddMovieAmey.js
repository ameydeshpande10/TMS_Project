import React, { useState, useRef, useCustomFetchHook } from "react";
import axios from "axios";

export const AddMovie = () => {
  const [name, setName] = useState("");
  const [actors, setActors] = useState("");
  const [director, setDirector] = useState("");
  const [certification, setCertification] = useState("");
  const [genre, setGenre] = useState("");
  const [movie_length, setMovie_length] = useState();
  const [release_date, setRelease_date] = useState();
  const [start_date, setStart_date] = useState();
  const [end_date, setEnd_date] = useState();
  const [first_show, setFirst_show] = useState("");
  const [second_show, setSecond_show] = useState("");
  const [testImage, setTestImage] = useState(null);

  const [message, setMessage] = useState("");

  async function AddMovie(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("testImage", testImage);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    try {
      await axios
        .post(
          "http://localhost:3001/movie/add-movie",
          {
            name,
            actors,
            director,
            certification,
            genre,
            movie_length,
            release_date,
            start_date,
            end_date,
            first_show,
            second_show,
            testImage: testImage,
          },
          config
        )
        .then((res) => {
          console.log(res.data.message);
          setMessage(res.data.message);
        });
    } catch (error) {
      setMessage(Response.data.message);
      console.log(error);
    }
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "2% auto",
        boxShadow: "0px 0px 10px black",
        width: "50vw",
        padding: "10px",
      }}
      className="container d-flex justify-content-center "
    >
      <div className="banner ">Add Movie</div>
      <form className="form-control" onSubmit={AddMovie}>
        {/*onSubmit={signup}*/}
        <div className="form-group">
          <label>Movie Name</label>
          <input
            type="name"
            className="form-control"
            placeholder="Andaz Apna Apna"
            onChange={(e) => setName(e.target.value)}
          />
          {/* onChange={(e) => setName(e.target.value)}*/}
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Actors</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setActors(e.target.value)}
            />
            {/* onChange={(e) => setCpassword(e.target.value)}*/}
          </div>
          <div className="form-group col-md-6">
            <label>Director</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setDirector(e.target.value)}
            />
            {/* onChange={(e) => setPassword(e.target.value)} */}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Certification</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setCertification(e.target.value)}
            />
            {/* onChange={(e) => setCpassword(e.target.value)}*/}
          </div>
          <div className="form-group col-md-6">
            <label>genre</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setGenre(e.target.value)}
            />
            {/* onChange={(e) => setPassword(e.target.value)} */}
          </div>
          <div className="form-group col-md-6">
            <label>Movie Length</label>
            <input
              type="Number"
              className="form-control"
              onChange={(e) => setMovie_length(e.target.value)}
            />
            {/* onChange={(e) => setPassword(e.target.value)} */}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Release Date</label>
            <input
              type="Date"
              className="form-control"
              onChange={(e) => setRelease_date(e.target.value)}
            />
            {/* onChange={(e) => setCpassword(e.target.value)}*/}
          </div>
          <div className="form-group col-md-6">
            <label>Start Date</label>
            <input
              type="Date"
              className="form-control"
              onChange={(e) => setStart_date(e.target.value)}
            />
            {/* onChange={(e) => setPassword(e.target.value)} */}
          </div>
          <div className="form-group col-md-6">
            <label>End Date</label>
            <input
              type="Date"
              className="form-control"
              onChange={(e) => setEnd_date(e.target.value)}
            />
            {/* onChange={(e) => setPassword(e.target.value)} */}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>First Show</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setFirst_show(e.target.value)}
            />
            {/* onChange={(e) => setCpassword(e.target.value)}*/}
          </div>
          <div className="form-group col-md-6">
            <label>Second Show</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setSecond_show(e.target.value)}
            />
            {/* onChange={(e) => setPassword(e.target.value)} */}
          </div>
        </div>
        <div className="form-group">
          <label>Poster</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => setTestImage(e.target.files[0])}
          />
          {/* onChange={(e) => setDate_of_birth(e.target.value.toString())} */}
        </div>
        <button type="submit" className="btn btn-primary">
          Add Movie
        </button>
        <div className="alert " role="alert"></div>
      </form>
    </div>
  );
};
