import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import hero from "./assets/hero.png";
import connect from "./assets/connect.png";
import update from "./assets/update.png";
import share from "./assets/share.png";
import engage from "./assets/engage.png";
import sample from "./assets/sample.png";
import last from "./assets/last.png";
import "./css/home.css";
function Home() {
  const cards = [
    {
      title: "Connect with Your Community",
      desc: "Ihioma brings the indegens of our community together on a single platform. Make new friends, find like-minded individuals, and strengthen the bonds that tie us all.",
      image: connect,
    },
    {
      title: "Stay Updated with Village Events",
      desc: "Don't miss out on any cultural celebrations, festivals, or community gatherings. Ihioma keeps you informed about all the exciting happenings in our community.",
      image: update,
    },
    {
      title: "Share Your Journey",
      desc: "Showcase your talents, creativity, and experiences with photo and video sharing. Inspire others and be inspired by the richness of our community culture.",
      image: share,
    },
    {
      title: "Engage in Group Discussions",
      desc: "Participate in lively discussions and group chats with your peers. Exchange ideas, share experiences, and make memories together.",
      image: engage,
    },
  ];
  return (
    <>
      <section className="hero">
        <header>
          <Link>
            <img src={logo} alt="" />
          </Link>
          <button>Join waitlist</button>
        </header>
        <div className="hero-body">
          <h1>Experience the Vibrant Spirit of Our Community</h1>
          <p>
            Connect, Share, and Thrive with <span>Ihioma</span> - Your Community
            Social Network.
          </p>
          <Link>Join waitlist</Link>
          <img src={hero} alt="" />
        </div>
      </section>
      <section className="attributes">
        <h2>
          Join <span>Ihioma</span> and Discover
        </h2>
        <div className="cards">
          {cards.map((card, index) => (
            <div className="card">
              <img src={card.image} alt="" />
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="sample">
        <img src={sample} alt="" />
        <div>
          <p>
            At <span>Ihioma</span>, we value respect, inclusivity, and
            positivity. Let's build a supportive community where everyone feels
            welcome and appreciated. Join <span>Ihioma</span> now and become a
            part of an exciting journey that celebrates the youth and culture of
            our community.
          </p>
          <Link>Join waitlist</Link>
        </div>
      </section>
      <section className="last">
        <div>
          <p>
            Ihioma was born out of a vision to empower the youth of our village
            and provide a platform for connections, creativity, and
            collaboration. Our team is dedicated to creating a positive and
            enjoyable experience for every user.
          </p>
          <img src={last} alt="" />
        </div>
      </section>
    </>
  );
}

export default Home;
