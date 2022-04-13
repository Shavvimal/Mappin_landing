import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import mySvg from "./assets/bg.svg";
import LogoColor from "./assets/logocolor.svg";
import LogoOutline from "./assets/logooutline.svg";
import { EmojiProvider, Emoji } from "react-apple-emojis";
import emojiData from "react-apple-emojis/lib/data.json";
import "./assets/css/home.css";
import jwt from "jwt-decode";

const Home = () => {
  const location = useLocation();
  const [email, setEmail] = useState(null);
  useEffect(() => {
    decodeAccess();
  }, []);

  function titleCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }

  const decodeAccess = () => {
    const params = new URLSearchParams(location.hash);
    if ([...params.entries()].length == 5)
      setEmail(titleCase(jwt([...params.entries()][0][1]).email));
  };

  return (
    <>
      <section
        class=" bg-center bg-cover h-full overflow-scroll"
        style={{
          backgroundImage: `url(${mySvg})`,
        }}
      >
        <div class=" flex justify-center items-center h-screen py-12">

          <div class="container  mx-auto my-auto">
            <div class="items-center flex flex-wrap">
              <div class="w-full lg:w-6/12 px-4 mx-auto mb-8 lg:mb-0  text-center ">
                <img
                  src={LogoColor}
                  alt="Logo"
                  className="mx-auto mb-14 lg:mb-8 w-6/12 lg:w-1/3"
                />

                {email ? (
                  <>
                    <h1 className="text-white font-semibold pt-3 text-8xl lg:text-5xl">
                      Welcome to Mappin!
                    </h1>
                    <br />
                    <EmojiProvider data={emojiData}>
 
                      <div className="flex flex-row justify-center mx-auto mt-6">
          

                        <Emoji name="party-popper" className="" />
                        <Emoji name="party-popper" className="" />
                        <Emoji name="party-popper" className="" />
                      </div>
                    </EmojiProvider>
                    <br />
                    <p className="text-white mt-12 lg:mt-3 mb-8 text-5xl lg:text-3xl leading-snug">
  
                      <span className="font-bold text-6xl lg:text-4xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-3xl px-8 py-2 shadow-lg">{email} </span>{" "}
                      <br />  <br />  has been authenticated! <br /> <br /> Woop Woop,
                      Glad to have you on board! Make your way back to the app
                      to finish setting up your profile.
                    </p>
                  </>
                ) : (
                  <>
                    <h1 className="text-white font-semibold pt-3 text-8xl lg:text-5xl">
                      Welcome to Mappin!
                    </h1>
                    <p className="text-white mt-12 lg:mt-3 mb-8 text-5xl lg:text-3xl leading-snug ">
                      {" "}
                      Welcome to the first at-hand social platform to jot down,
                      organise & share places you want to visit with friends.
                    </p>
                  </>
                )}
              </div>
              {email ? ( <></> ) : (
              <div class="container mx-auto mb-12">
                <div class="flex justify-center">

                  <div class="flex flex-col lg:flex-row bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-3xl lg:rounded-xl overflow-hidden w-full lg:max-w-5xl shadow-lg m-4 lg:m-6">
                    <div class="flex-1 p-12 lg:p-4 lg:p-6 text-5xl lg:text-lg leading-snug ">
                      <div class=" text-white mb-8 flex items-center mx-auto justify-center">
          
                        {/* <svg
                          className="lg:w-8 lg:h-8 w-16 h-16"
                          fill="none"
                          stroke="white"
                          stroke-width="20"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          viewBox="0 0 427.81 557.19"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M314.6,276.57V474.69a70,70,0,0,0,70,70h30.6V12.52"/><path class="cls-1" d="M113.1,276.57V474.69a70,70,0,0,1-70,70H12.5V12.52"/><g id="Layer_2_copy" data-name="Layer 2 copy"><polygon class="cls-2" points="415.31 12.52 358.01 98.38 213.88 314.32 213.88 540.6 213.9 540.65 294 330.63 366.15 141.49 378.14 110.03 415.31 12.52"/><path class="cls-2" d="M12.55,12.5h0s0,0,0,0h0L69.79,98.4h0L213.88,314.32,358,98.38l57.3-85.86h-.11L321.24,82,304.69,94.19l-90.81,67.09L129.62,99,106.56,82Z"/><polygon class="cls-2" points="12.5 12.53 49.68 110.03 70.42 164.44 155.72 388.12 213.88 540.6 213.88 314.32 69.81 98.4 69.79 98.4 12.5 12.53"/></g></g></g>

                        </svg> */}
                        <div class="font-bold text-6xl lg:text-3xl py-6 lg:py-0 ">Why Get Mappin?</div>
                      </div>
                      <div class=" grid grid-rows-4 grid-cols-1 gap-4 lg:grid-rows-2 lg:grid-cols-2">

                        <div class="rounded-3xl lg:rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-12 lg:p-4 flex flex-col relative undefined my-3 lg:mb-0">
                          <div className=" flex flex-row justify-between items-center">
                          <div class="text-white font-medium text-6xl lg:text-2xl">
                          Pins
                          </div>
                          <div class="text-white ight-2">
                            <svg
                              className="lg:w-8 lg:h-8 w-16 h-16"
                              fill="currentColor"
                              fill-rule="evenodd"
                              viewBox="0 0 92.25 122.88"
                              xmlns="http://www.w3.org/2000/svg"
                            >
<path class="cls-1" d="M49.1,122.34a2.75,2.75,0,0,1-3.12.1A109.7,109.7,0,0,1,19,98.35C9.15,86,3,72.33.83,59.16-1.33,45.79.69,32.94,7.34,22.49A45.14,45.14,0,0,1,17.39,11.35C26.77,3.87,37.49-.08,48.16,0c10.29.08,20.43,3.92,29.2,11.91a43,43,0,0,1,7.79,9.49c7.15,11.77,8.69,26.8,5.55,42a92.52,92.52,0,0,1-41.6,58.92Zm-3-98.58a23,23,0,1,1-22.94,23A23,23,0,0,1,46.13,23.76Z"/>
                            </svg>
                          </div>

                          </div>
                          <div class="text-white font-normal p-1 mt-6 lg:mt-0">
                          Made for Speed: Quickly add locations you want to visit! It is as quick as jotting to your notes section.
                          </div>
                        </div>

                        <div class="rounded-3xl lg:rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-12 lg:p-4 flex flex-col relative undefined my-3 lg:mb-0">
                          <div className=" flex flex-row justify-between items-center">
                          <div class="text-white font-medium text-6xl lg:text-2xl">
                          Lists
                          </div>
                          <div class="text-white ight-2">
                            <svg
                              className="lg:w-8 lg:h-8 w-16 h-16"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                            </svg>
                          </div>

                          </div>
                          <div class="text-white font-normal p-1 mt-6 lg:mt-0">
                          Prime Time Organisation: Organise your Pins! Use lists and labels to sort, filter and curate to your heart's content.
                          </div>
                        </div>

                        <div class="rounded-3xl lg:rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-12 lg:p-4 flex flex-col relative undefined my-3 lg:mb-0">
                          <div className=" flex flex-row justify-between items-center">
                          <div class="text-white font-medium text-6xl lg:text-2xl">
                          Map
                          </div>
                          <div class="text-white ight-2">
                            <svg
                              className="lg:w-8 lg:h-8 w-16 h-16"
                              fill="currentColor"
                              fill-rule="evenodd"
                              viewBox="0 0 105.93 122.88"
                              xmlns="http://www.w3.org/2000/svg"
                            >
            <path class="cls-1" d="M56.92,73.14a1.62,1.62,0,0,1-1.86.06A65.25,65.25,0,0,1,38.92,58.8,51.29,51.29,0,0,1,28.06,35.37C26.77,27.38,28,19.7,32,13.45a27,27,0,0,1,6-6.66A29.23,29.23,0,0,1,56.36,0,26,26,0,0,1,73.82,7.12a26,26,0,0,1,4.66,5.68c4.27,7,5.19,16,3.31,25.12A55.29,55.29,0,0,1,56.92,73.14Zm-19,.74V101.7l30.15,13V78.87a65.17,65.17,0,0,0,6.45-5.63v41.18l25-12.59v-56l-9.61,3.7a61.61,61.61,0,0,0,2.38-7.81l9.3-3.59A3.22,3.22,0,0,1,105.7,40a3.18,3.18,0,0,1,.22,1.16v62.7a3.23,3.23,0,0,1-2,3L72.72,122.53a3.23,3.23,0,0,1-2.92,0l-35-15.17L4.68,122.53a3.22,3.22,0,0,1-4.33-1.42A3.28,3.28,0,0,1,0,119.66V53.24a3.23,3.23,0,0,1,2.32-3.1L18.7,43.82a58.63,58.63,0,0,0,2.16,6.07L6.46,55.44v59l25-12.59V67.09a76.28,76.28,0,0,0,6.46,6.79ZM55.15,14.21A13.72,13.72,0,1,1,41.43,27.93,13.72,13.72,0,0,1,55.15,14.21Z"/>
                            </svg>
                          </div>

                          </div>
                          <div class="text-white font-normal p-1 mt-6 lg:mt-0">
                          View nearby Pins on a Map! Never again miss a nearby place you'd always wanted to visit just becasue it was buried in a notes section somewhere.
                          </div>
                        </div>

                        <div class="rounded-3xl lg:rounded-2xl bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 p-12 lg:p-4 flex flex-col relative undefined my-3 lg:mb-0">
                          <div className=" flex flex-row justify-between items-center lg:mb-4">
                          <div class="text-white font-medium text-6xl lg:text-2xl">
                            Community
                          </div>
                          <div class="text-white ight-2">
                            <svg
                              className="lg:w-8 lg:h-8 w-16 h-16"
                              fill="currentColor"
                              viewBox="0 0 122.88 91.99"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              xmlns="http://www.w3.org/2000/svg"
                            >
       <path class="st0" d="M45.13,35.29h-0.04c-7.01-0.79-16.42,0.01-20.78,0C17.04,35.6,9.47,41.91,5.02,51.3 c-2.61,5.51-3.3,9.66-3.73,15.55C0.42,72.79-0.03,78.67,0,84.47c1.43,9.03,12.88,6.35,13.85,0l1.39-18.2 c0.21-2.75,0.4-4.61,1.51-7.23c0.52-1.23,1.15-2.28,1.89-3.15l0.69,33.25l-0.39,2.78h31.49l-0.42-3.1l0.61-36.67 c3.2-1.29,5.96-1.89,8.39-1.99c-0.12,0.25-0.25,0.5-0.37,0.75c-2.61,5.51-3.3,9.66-3.73,15.55c-0.86,5.93-1.32,11.81-1.29,17.61 c1.43,9.03,12.88,6.35,13.85,0l1.39-18.2c0.21-2.75,0.4-4.61,1.51-7.23c0.52-1.23,1.15-2.28,1.89-3.15l0.69,33.25l-0.46,3.24h31.62 l-0.48-3.55l0.49-28.62v0.56l0.1-4.87c0.74,0.87,1.36,1.92,1.89,3.15c1.12,2.62,1.3,4.48,1.51,7.23l1.39,18.2 c1.34,8.68,13.85,8.85,13.85,0c0.03-5.81-0.42-11.68-1.29-17.61c-0.43-5.89-1.12-10.04-3.73-15.55 c-4.57-9.65-10.48-14.76-19.45-15.81c-5.53-0.45-14.82,0.06-20.36-0.1c-1.38,0.19-2.74,0.47-4.06,0.87 c-3.45-0.48-8.01-1.07-12.56-1.09C54.76,34.77,48.15,35.91,45.13,35.29L45.13,35.29z M88.3,0c9.01,0,16.32,7.31,16.32,16.32 c0,9.01-7.31,16.32-16.32,16.32c-9.01,0-16.32-7.31-16.32-16.32C71.98,7.31,79.29,0,88.3,0L88.3,0z M34.56,0 c9.01,0,16.32,7.31,16.32,16.32c0,9.01-7.31,16.32-16.32,16.32s-16.32-7.31-16.32-16.32C18.24,7.31,25.55,0,34.56,0L34.56,0z"/>
                            </svg>
                          </div>

                          </div>
                          <div class="text-white font-normal p-1 mt-6 lg:mt-0">
                          Mappin is as much about organisation as it is about sharing & discovering new places! So pin and share the things you really love. 
                          </div>
                        </div>




   

                      </div>
                    </div>
                  </div>


                </div>
              </div> )}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;
