import React from "react";
import "./css/gameblog.css";
import banner1 from "./resources/images/banner-img-1.jpg";

import banner2 from "./resources/images/banner-img-2.jpg";
import banner3 from "./resources/images/banner-img-3.jpg";
import poster1 from "./resources/videos/video-1-poster.webp";

import poster2 from "./resources/videos/video-2-poster.webp";
import poster3 from "./resources/videos/video-3-poster.webp";

import poster4 from "./resources/videos/video-4-poster.webp";

import news1 from "./resources/images/news-1.jpg";
import news2 from "./resources/images/news-2.jpg";
import news3 from "./resources/images/news-3.jpg";
import news4 from "./resources/images/news-4.jpg";

import news5 from "./resources/images/news-5.jpg";
import news6 from "./resources/images/news-6.jpg";
import news7 from "./resources/images/news-7.jpg";

import news8 from "./resources/images/news-8.jpg";

import news9 from "./resources/images/news-9.jpg";
import news10 from "./resources/images/news-10.jpg";
import review1 from "./resources/images/review-1.jpg";

import review2 from "./resources/images/review-2.jpg";
import review3 from "./resources/images/review-3.jpg";
import review4 from "./resources/images/review-4.jpg";
import review5 from "./resources/images/review-5.jpg";
import video1 from "./resources/videos/video-1.mp4";

import video2 from "./resources/videos/video-2.mp4";
import video3 from "./resources/videos/video-3.mp4";
import video4 from "./resources/videos/video-4.mp4";

const GameBlog = () => {
  return (
    <div id="Blogbody">
      <header id="blogheader">
        <div class="blogcontainer">
          <div class="header-content">
            <div class="header-item">
              <img src={banner1} />
              <div class="header-item-text">
                <h2>PLAY THE ULTIMATE EDITION NOW!</h2>
                <p class="text">
                  Experience the complete story from the beginning to the End!
                  Minecraft Dungeons: Ultimate Edition includes the base game
                  and all six DLCs.
                </p>
                <div>
                  <small>By John Doe</small>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>

            <div class="header-item">
              <img src={banner2} />
              <div class="header-item-text">
                <h2>
                  PUBG: New State (Mobile) crosses 40 million pre-registrations
                </h2>
                <p class="text">
                  Kraftson is gearing up to launch its second battle royale
                  mobile game after Battlegrounds Mobile India called PUBG: New
                  State. The game will follow the same battle royale blueprints
                  as previous titles.
                </p>
                <div>
                  <small>By John Doe</small>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>

            <div class="header-item">
              <img src={banner3} />
              <div class="header-item-text">
                <h2>Apex Legends Evolution Collection Events</h2>
                <p class="text">
                  Learn what a Legend can become in the Apex Legends Evolution
                  Collection Event.
                </p>
                <div>
                  <small>By John Doe</small>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="news">
        <div class="title">
          <div class="blogcontainer">
            <h2>
              <i class="fas fa-rss"></i> News
            </h2>
          </div>
        </div>

        <div class="blogcontainer">
          <div class="news-latest">
            <h3>Latest News</h3>
            <article>
              <div class="item-img">
                <img id="img" src={news1} />
                <span>
                  <i class="fas fa-comment"></i> 10
                </span>
              </div>
              <div class="item-text">
                <a href="#">
                  <button
                    type="button"
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    LATEST
                  </button>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </a>

                <p class="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, facilis quia. Officia similique omnis optio!
                </p>
                <div class="date">News | Latest | 11:00 AM</div>
              </div>
            </article>

            <article>
              <div class="item-img">
                <img id="img" src={news2} />
                <span>
                  <i class="fas fa-comment"></i> 10
                </span>
              </div>
              <div class="item-text">
                <a href="#">
                  <button
                    type="button"
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    LATEST
                  </button>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </a>
                <p class="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, facilis quia. Officia similique omnis optio!
                </p>
                <div class="date">News | Latest | 11:00 AM</div>
              </div>
            </article>

            <article>
              <div class="item-img">
                <img id="img" src={news3} />
                <span>
                  <i class="fas fa-comment"></i> 10
                </span>
              </div>
              <div class="item-text">
                <a href="#">
                  <button
                    type="button"
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    LATEST
                  </button>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </a>

                <p class="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, facilis quia. Officia similique omnis optio!
                </p>
                <div class="date">News | Latest | 11:00 AM</div>
              </div>
            </article>

            <article>
              <div class="item-img">
                <img src={news4} id="img" />
                <span>
                  <i class="fas fa-comment"></i> 10
                </span>
              </div>
              <div class="item-text">
                <a href="#">
                  <button
                    type="button"
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    LATEST
                  </button>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </a>

                <p class="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, facilis quia. Officia similique omnis optio!
                </p>
                <div class="date">News | Latest | 11:00 AM</div>
              </div>
            </article>

            <article>
              <div class="item-img">
                <img src={news5} id="img" />
                <span>
                  <i class="fas fa-comment"></i> 10
                </span>
              </div>
              <div class="item-text">
                <a href="#">
                  <button
                    type="button"
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    LATEST
                  </button>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </a>

                <p class="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, facilis quia. Officia similique omnis optio!
                </p>
                <div class="date">News | Latest | 11:00 AM</div>
              </div>
            </article>
          </div>

          <div class="news-popular">
            <h3>Popular News</h3>
            <div class="popular-list">
              <article>
                <div class="item-img">
                  <img src={news6} id="img" />
                </div>
                <div class="item-text">
                  <a href="#">
                    <button
                      type="button"
                      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      POPULAR
                    </button>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </a>
                </div>
              </article>

              <article>
                <div class="item-img">
                  <img src={news7} id="img" />
                </div>
                <div class="item-text">
                  <a href="#">
                    <button
                      type="button"
                      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      POPULAR
                    </button>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </a>
                </div>
              </article>

              <article>
                <div class="item-img">
                  <img src={news8} id="img" />
                </div>
                <div class="item-text">
                  <a href="#">
                    <button
                      type="button"
                      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      POPULAR
                    </button>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </a>
                </div>
              </article>

              <article>
                <div class="item-img">
                  <img src={news9} id="img" />
                </div>
                <div class="item-text">
                  <a href="#">
                    <button
                      type="button"
                      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      POPULAR
                    </button>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </a>{" "}
                </div>
              </article>

              <article>
                <div class="item-img">
                  <img src={news10} id="img" />
                </div>
                <div class="item-text">
                  <a href="#">
                    <button
                      type="button"
                      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      POPULAR
                    </button>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="videos">
        <div class="title">
          <div class="blogcontainer">
            <h2>
              <i class="fas fa-video"></i> Videos & Trailers
            </h2>
          </div>
        </div>
        <div className="flex flex-col lg:flex lg:flex-row">
          <article>
            <div className="item-video">
              <video controls poster={poster1}>
                <source src={video1} type="video/mp4" />
              </video>
            </div>
            <div class="item-text">
              <a href="#">
                <button
                  type="button"
                  class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Trailer
                </button>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </a>
              <p class="text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                reprehenderit facere laborum laudantium, modi quos.
              </p>
            </div>
          </article>

          <article>
            <div class="item-video">
              <video controls poster={poster2}>
                <source src={video2} type="video/mp4" />
              </video>
            </div>
            <div class="item-text">
              <a href="#">
                <button
                  type="button"
                  class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Trailer
                </button>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </a>
              <p class="text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                reprehenderit facere laborum laudantium, modi quos.
              </p>
            </div>
          </article>

          <article>
            <div class="item-video">
              <video controls poster={poster3}>
                <source src={video3} type="video/mp4" />
              </video>
            </div>
            <div class="item-text">
              <a href="#">
                <button
                  type="button"
                  class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Trailer
                </button>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </a>
              <p class="text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                reprehenderit facere laborum laudantium, modi quos.
              </p>
            </div>
          </article>

          <article>
            <div class="item-video">
              <video controls poster={poster4}>
                <source src={video4} type="video/mp4" />
              </video>
            </div>
            <div class="item-text">
              <a href="#">
                <button
                  type="button"
                  class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Trailer
                </button>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </a>
              <p class="text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
                reprehenderit facere laborum laudantium, modi quos.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section id="promo" class="flex">
        <div id="container">
          <span>join the battle</span>
          <h2>Fortnight Battle Royale</h2>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            cupiditate molestias ad quia accusantium cumque.
          </p>
          <div class="btn-groups flex">
            <a href="#">
              <i class="fas fa-play"></i> watch trailer
            </a>
            <a href="#">
              <i class="fas fa-gamepad"></i> play free now
            </a>
          </div>
        </div>
      </section>

      <section id="reviews">
        <div class="title">
          <div class="blogcontainer">
            <h2>
              <i class="fas fa-comments"></i> Featured Reviews
            </h2>
          </div>
        </div>
        <div id="reviewcontainer">
          <article>
            <div class="item-img">
              <img src={review1} />
              <span>
                <i class="fas fa-star"></i> 10
              </span>
            </div>
            <div class="item-text">
              <a href="#">
                <button
                  type="button"
                  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  REVIEW
                </button>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </a>
              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                facilis quia. Officia similique omnis optio!
              </p>
              <div class="date">Reviews | Trending | 11:00 AM</div>
            </div>
          </article>

          <article>
            <div class="item-img">
              <img src={review2} />
              <span>
                <i class="fas fa-star"></i> 10
              </span>
            </div>
            <div class="item-text">
              <a href="#">
                <button
                  type="button"
                  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  REVIEW
                </button>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </a>

              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                facilis quia. Officia similique omnis optio!
              </p>
              <div class="date">Reviews | Trending | 11:00 AM</div>
            </div>
          </article>

          <article>
            <div class="item-img">
              <img src={review3} />
              <span>
                <i class="fas fa-star"></i> 10
              </span>
            </div>
            <div class="item-text">
              <a href="#">
                <button
                  type="button"
                  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  REVIEW
                </button>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </a>

              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                facilis quia. Officia similique omnis optio!
              </p>
              <div class="date">Reviews | Trending | 11:00 AM</div>
            </div>
          </article>

          <article>
            <div class="item-img">
              <img src={review4} />
              <span>
                <i class="fas fa-star"></i> 10
              </span>
            </div>
            <div class="item-text">
              <a href="#">
                <button
                  type="button"
                  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  REVIEW
                </button>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </a>

              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                facilis quia. Officia similique omnis optio!
              </p>
              <div class="date">Reviews | Trending | 11:00 AM</div>
            </div>
          </article>

          <article>
            <div class="item-img">
              <img src={review5} />
              <span>
                <i class="fas fa-star"></i> 10
              </span>
            </div>
            <div class="item-text">
              <a href="#">
                <button
                  type="button"
                  class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  REVIEW
                </button>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </a>

              <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                facilis quia. Officia similique omnis optio!
              </p>
              <div class="date">Reviews | Trending | 11:00 AM</div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default GameBlog;
