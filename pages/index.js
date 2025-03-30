import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    function PlayMusic() {
      let play = document.getElementById("music");
      if (play) play.play();
    }
    setTimeout(PlayMusic, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Allyssa, Cantikku</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="shortcut icon" type="image/png" href="/img/moon.png" />
        <link rel="stylesheet" href="/style/style.css" />
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
      </Head>

      <div className="container">
        <div className="one">
          <h1 className="one">Dear De IcHaaa🍦😼</h1>
          <p className="two" id="greetingText">My lovely Sunflower💗🌻!</p>
        </div>
        <div className="three">
          <p>mmm, jadi di hari kemenangan ini aku mau bilang 👉👈</p>
        </div>
        <div className="four">
          <div className="text-box">
            <p className="hbd-chatbox">
              template ucapan lebaran untuk orang tersayang 2025
            </p>
            <p className="fake-btn">Send</p>
          </div>
        </div>
        <div className="five">
          <p className="idea-1">That a common thing someone could've done</p>
          <p className="idea-2">But I tried to make you something special hehe.</p>
          <p className="idea-3">
            yaa coba-coba buat ini karna aku kan cowomu yang <strong>(lucu) ;)</strong>.
          </p>
          <p className="idea-4">So thats why,</p>
          <p className="idea-5">
            For a special n beautiful girl deserves a special greeting cards
            <span>:)</span>
          </p>
          <p className="idea-6">
            <span>S</span>
            <span>O</span>
          </p>
        </div>
        <div className="six">
          <img src="/img/lebaran.jpg" alt="" className="girl-dp" id="imagePath" />
          <div className="wish">
            <h3 className="wish-hbd">
              FORMYKINDBEAUTIFULSMARTCLINGYANDCARINGSWEETYCHOCOLATECAKE
            </h3>
            <h5 id="wishText">
              Minal aidzin wal faidzin, mohon maaf lahir dan batin YAA CANTIKKU💗🙋🏻.
              Semoga di hari kemenangan ini kamu sehat selalu dan enjoy ur dayy💗.
              Salam ya buat Mama, Papa, Mas Asad dan bocil kucing. Love U💗🙋🏻
            </h5>
          </div>
        </div>

        <div className="seven">
          <div className="baloons">
            <img src="/img/drum.png" alt="" />
            <img src="/img/lantern.png" alt="" />
            <img src="/img/hijab.png" alt="" />
            <img src="/img/moon.png" alt="" />
            <img src="/img/crescent-moon.png" alt="" />
          </div>
        </div>

        <div className="eight">
          {[...Array(9)].map((_, i) => (
            <svg key={i} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" />
            </svg>
          ))}
        </div>

        <div className="nine">
          <p>Okay, if u have a time call me back and tell me if you liked it sayangg.</p>
          <p id="replay">Or click, if you want to watch it again.</p>
          <p className="last-smile">:)</p>
        </div>
      </div>

      <audio controls id="music">
        <source src="/img/lebaransong.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
}
