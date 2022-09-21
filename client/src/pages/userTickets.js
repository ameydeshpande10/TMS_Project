import React, { useEffect, useState } from "react";
import axios from "axios";
import "../pages/UserTickets.css";

export const UserTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  //const [tickets, setTickets] = useState();
  useEffect(() => {
    async function getTickets(e) {
      try {
        await axios
          .get("http://localhost:3001/user/get-tickets")
          .then((res) => {
            console.log(res.data);
            //console.log(res.data.tickets.length);
            for (let index = 0; index < res.data.length; index++) {
              tickets[index] = res.data[index];
            }
            setHasLoaded(true);
            //setTickets(res.data.tickets);
          });
      } catch (error) {
        console.log(error);
      }
    }

    getTickets();
  }, []);

  const RenderTicket = () => {
    return tickets.map((ticket) => (
      <div className="container">
        <div className="row">
          <article className="card fl-left">
            <section className="date">
              <time dateTime="23th feb">
                <span key={ticket.date}>{ticket.date}</span>
              </time>
            </section>
            <section className="card-cont">
              <h2 key={ticket.movie}>{ticket.movie}</h2>
              <div className="even-date">
                <i className="fa fa-calendar"></i>
                <time>
                  <span key={ticket.date}>{ticket.date}</span>
                  <br></br>
                  <span key={ticket.time_slot}> {ticket.time_slot}</span>
                </time>
              </div>
              <div className="even-info">
                <i className="fa fa-map-marker"></i>
              </div>
            </section>
          </article>
        </div>
      </div>
    ));
  };

  // const ListTickets = () => {
  //   return tickets.map((ticket) => (
  //     <div className="card">
  //       <h1>{ticket.movie}</h1>
  //       <h1>{ticket.date}</h1>
  //       <h1>{ticket.time_slot}</h1>
  //     </div>
  //   ));
  // };
  // console.log(ListTickets());
  if (hasLoaded === true) {
    return (
      <div className="container">
        <section className="container" />
        <h1>Tickets</h1>
        <div>
          <RenderTicket />
        </div>
      </div>
    );
  }
};

/*

<article className="card fl-left">
          <section className="date">
            <time datetime="23th feb">
              <span>23</span>
              <span>feb</span>
            </time>
          </section>
          <section className="card-cont">
            <small>dj khaled</small>
            <h3>live in sydney</h3>
            <div className="even-date">
              <i className="fa fa-calendar"></i>
              <time>
                <span>wednesday 28 december 2014</span>
                <span>08:55pm to 12:00 am</span>
              </time>
            </div>
            <div className="even-info">
              <i className="fa fa-map-marker"></i>
              <p>nexen square for people australia, sydney</p>
            </div>
          </section>
        </article>
        <article className="card fl-left">
          <section className="date">
            <time datetime="23th feb">
              <span>23</span>
              <span>feb</span>
            </time>
          </section>
          <section className="card-cont">
            <small>dj khaled</small>
            <h3>corner obsest program</h3>
            <div className="even-date">
              <i className="fa fa-calendar"></i>
              <time>
                <span>wednesday 28 december 2014</span>
                <span>08:55pm to 12:00 am</span>
              </time>
            </div>
            <div className="even-info">
              <i className="fa fa-map-marker"></i>
              <p>nexen square for people australia, sydney</p>
            </div>
          </section>
        </article>
      </div>
      <div className="row">
        <article className="card fl-left">
          <section className="date">
            <time datetime="23th feb">
              <span>23</span>
              <span>feb</span>
            </time>
          </section>
          <section className="card-cont">
            <small>dj khaled</small>
            <h3>music kaboom festivel</h3>
            <div className="even-date">
              <i className="fa fa-calendar"></i>
              <time>
                <span>wednesday 28 december 2014</span>
                <span>08:55pm to 12:00 am</span>
              </time>
            </div>
            <div className="even-info">
              <i className="fa fa-map-marker"></i>
              <p>nexen square for people australia, sydney</p>
            </div>
          </section>
        </article>
        <article className="card fl-left">
          <section className="date">
            <time datetime="23th feb">
              <span>23</span>
              <span>feb</span>
            </time>
          </section>
          <section className="card-cont">
            <small>dj khaled</small>
            <h3>hello dubai festivel</h3>
            <div className="even-date">
              <i className="fa fa-calendar"></i>
              <time>
                <span>wednesday 28 december 2014</span>
                <span>08:55pm to 12:00 am</span>
              </time>
            </div>
            <div className="even-info">
              <i className="fa fa-map-marker"></i>
              <p>nexen square for people australia, sydney</p>
            </div>
          </section>
        </article>
*/
