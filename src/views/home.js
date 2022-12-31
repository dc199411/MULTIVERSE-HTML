import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import OutlineBlackButton from '../components/outline-black-button'
import Component5 from '../components/component5'
import Component4 from '../components/component4'
import Component3 from '../components/component3'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>MULTIVERSE SITE</title>
        <meta
          name="description"
          content="MULTIVERSE SITE IS THE MAIN WEBSITE FOR ALL INFORMATION ON THE multiverseC2C team and all accompanying projects"
        />
        <meta property="og:title" content="MULTIVERSE SITE" />
        <meta
          property="og:description"
          content="MULTIVERSE SITE IS THE MAIN WEBSITE FOR ALL INFORMATION ON THE multiverseC2C team and all accompanying projects"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/51016500-9357-4cb7-a867-56e7e040c3f5/75443214-f032-4a29-bf03-b8231f7d2620?org_if_sml=1"
        />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text HeadingOne">Welcome to MULTIVERSE</h1>
            <h1 className="home-text01 HeadingOne">The Future of Crypto</h1>
            <span className="home-text02">
              MULTIVERSE is a combination of Defi, NFT, and metaverse projects
              creating a united decentralized MULTIVERSE
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <a
                  href="https://fntokens.xyz"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  <PrimaryPinkButton
                    button="Trade Futures"
                    className="home-component1"
                  ></PrimaryPinkButton>
                </a>
              </div>
              <a
                href="https://medium.com/@FN_TOKENS"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <OutlineGrayButton
                  button="read more"
                  className="home-component2"
                ></OutlineGrayButton>
              </a>
            </div>
            <div className="home-container04">
              <img
                alt="image"
                src="/playground_assets/download-%5B4%5D-transformed-200h.png"
                className="home-image"
              />
              <img
                alt="image"
                src="/playground_assets/download-%5B1%5D-%5B1%5D-transformed-1500h.png"
                className="home-image01"
              />
              <img
                alt="image"
                src="/playground_assets/download-%5B1%5D-transformed-600w.png"
                className="home-image02"
              />
              <img
                alt="image"
                src="/playground_assets/download-%5B6%5D-transformed-200h.png"
                className="home-image03"
              />
              <img
                alt="image"
                src="/playground_assets/download-removebg-preview-1500h.png"
                className="home-image04"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="home-container05">
        <div className="home-container06">
          <h1 className="home-text03 HeadingOne">
            <span className="home-text04">From nothing to something</span>
          </h1>
          <span className="home-text05">
            multiverseC2C started from 1 desk and chromebook and is now one of
            the fastest growing blockchain and cryptocurrency development
            company&apos;s having partnered with some of the biggest names in
            crypto. Our latest partnership with ApolloX has allowed us to launch
            the MULTIVERSE FUTURES Dex. With this development we further our
            vision to create a one stop shop for all crypto Defi and NFT product
            needs.
          </span>
        </div>
        <div className="home-container07">
          <div className="home-container08">
            <img
              alt="image"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/laptop.jpg"
              className="home-image05"
            />
            <span className="home-text06 Small">
              <span>&quot;The Future is Decentralized&quot;</span>
              <br></br>
              <br></br>
              <span>-</span>
              <span>FN_TOKENS</span>
            </span>
            <div className="home-container09">
              <img
                alt="image"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coding.jpg"
                className="home-image06"
              />
            </div>
          </div>
          <div className="home-container10">
            <img
              alt="image"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/tasks.jpg"
              className="home-image07"
            />
            <div className="home-container11">
              <h3 className="HeadingTwo">Who we are?</h3>
              <p>
                <br></br>
                <span>
                  multiverseC2C is a blockchain and cryptocurrency development
                  company that was born after the company&apos;s C2C and
                  MULTIVERSE joined forces to combine efforts to build the next
                  generation of the internet of Play2Earn gaming and finance. we
                  believe the future is decentralized giving users around the
                  globe complete control over there data and how its used gone
                  are the times were company&apos;s make a profit off of selling
                  users data and information to spam company&apos;s. Now users
                  will decide what to do with there information. Gone are the
                  days of traditional gaming in which the only people that
                  profit are the mega game company&apos;s. Now anyone can profit
                  with Play2Earn games we at multiverseC2C are helping create a
                  better future.
                </span>
                <br></br>
                <br></br>
                <span>&quot;Building Tommorow&apos;s Future&quot;</span>
                <br></br>
                <span>                            -multiverseC2C</span>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-features">
        <div className="home-container12">
          <img
            alt="image"
            src="/playground_assets/person1.svg"
            className="home-image08"
          />
          <h5 className="home-text22 HeadingThree">Users</h5>
          <span className="home-text23">
            We have a fast growing user base and are building more products to
            support and encourage user growth.
          </span>
        </div>
        <div className="home-container13">
          <img
            alt="image"
            src="/playground_assets/rocket1.svg"
            className="home-image09"
          />
          <h5 className="home-text24 HeadingThree">MULTIVERSE</h5>
          <span className="home-text25">
            MULTIVERSE Token is the Multi-chain token fueling the entire
            MULTIVERSE Ecosystem.
          </span>
        </div>
        <div className="home-container14">
          <img
            alt="image"
            src="/playground_assets/credit%20card1.svg"
            className="home-image10"
          />
          <h5 className="home-text26 HeadingThree">
            <span>FUTURES</span>
            <br></br>
            <span>MULTIVERSE</span>
          </h5>
          <span className="home-text30">
            <span>
              Our FUTURES Dex was launched in partnership with ApolloX the
              leading derivatives platform.
            </span>
            <span>.</span>
          </span>
        </div>
        <div className="home-container15">
          <img
            alt="image"
            src="/playground_assets/cube1.svg"
            className="home-image11"
          />
          <h5 className="home-text33 HeadingThree">Metaverse</h5>
          <span className="home-text34">
            <span>
              Our metaverse is a massive undertaking and will be built to
              encompass many universes each with there own planets land and
              more.
            </span>
            <br></br>
          </span>
        </div>
      </section>
      <section className="home-testimonials">
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image"
        />
        <div className="home-container16">
          <div className="home-container17">
            <div className="home-container18">
              <h2 className="home-text37 HeadingOne">Work with us</h2>
              <p className="home-text38 Lead">Open Call To Developers</p>
              <p className="home-text39 Body">
                We are always looking to expand out staff with all manner of
                developer looking to help create the next generation of the
                internet
              </p>
              <p className="home-text40">Davin Corbett</p>
              <p className="home-text41">Founder</p>
              <div className="home-container19">
                <img
                  alt="image"
                  src="/playground_assets/readyplayerme-avatar2-200h.jpeg"
                  className="home-image12"
                />
                <div className="home-container20"></div>
                <img
                  alt="image"
                  src="/playground_assets/readyplayerme-avatar%20%5B1%5D-200w.jpg"
                  className="home-image13"
                />
                <div className="home-container21"></div>
              </div>
            </div>
          </div>
          <div className="home-container22">
            <div className="home-container23">
              <div className="home-container24">
                <img
                  alt="image"
                  src="/playground_assets/logo-asana.svg"
                  className="home-image14"
                />
              </div>
              <div className="home-container25">
                <img
                  alt="image"
                  src="/playground_assets/logo-slack.svg"
                  className="home-image15"
                />
              </div>
              <div className="home-container26">
                <img
                  alt="image"
                  src="/playground_assets/logo-google-drive.svg"
                  className="home-image16"
                />
              </div>
            </div>
            <div className="home-container27">
              <div className="home-container28">
                <svg viewBox="0 0 877.7142857142857 1024" className="home-icon">
                  <path d="M731.429 348.571c-21.714 9.714-44.571 16-69.143 19.429 25.143-14.857 44-38.857 53.143-66.857-23.429 13.714-49.143 24-76.571 29.143-21.714-23.429-53.143-37.714-87.429-37.714-66.286 0-120 53.714-120 120 0 9.143 0.571 18.857 2.857 27.429-100-5.143-188.571-52.571-248-125.714-10.286 17.714-16.571 38.857-16.571 60.571 0 41.714 19.429 78.286 52 100-20-0.571-38.857-6.286-57.143-14.857v1.143c0 58.286 44 106.857 98.857 117.714-10.286 2.857-18.286 4.571-29.143 4.571-7.429 0-14.857-1.143-22.286-2.286 15.429 47.429 59.429 82.286 112 83.429-41.143 32-92.571 51.429-149.143 51.429-9.714 0-19.429-0.571-28.571-1.714 53.143 33.714 116 53.714 184 53.714 220.571 0 341.714-182.857 341.714-341.714 0-5.143 0-10.286-0.571-15.429 23.429-16.571 44-37.714 60-62.286zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                </svg>
              </div>
              <div className="home-container29">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M725.333 128v85.333h-85.333c-23.552 0-44.928 9.6-60.331 25.003s-25.003 36.779-25.003 60.331v128c0 23.552 19.115 42.667 42.667 42.667h116.011l-21.333 85.333h-94.677c-23.552 0-42.667 19.115-42.667 42.667v298.667h-85.333v-298.667c0-23.552-19.115-42.667-42.667-42.667h-85.333v-85.333h85.333c23.552 0 42.667-19.115 42.667-42.667v-128c0-47.147 19.072-89.728 50.005-120.661s73.515-50.005 120.661-50.005zM768 42.667h-128c-70.699 0-134.741 28.715-181.035 74.965s-74.965 110.336-74.965 181.035v85.333h-85.333c-23.552 0-42.667 19.115-42.667 42.667v170.667c0 23.552 19.115 42.667 42.667 42.667h85.333v298.667c0 23.552 19.115 42.667 42.667 42.667h170.667c23.552 0 42.667-19.115 42.667-42.667v-298.667h85.333c19.883 0 36.608-13.611 41.387-32.299l42.667-170.667c5.717-22.869-8.192-46.037-31.061-51.755-3.541-0.896-7.125-1.323-10.325-1.28h-128v-85.333h128c23.552 0 42.667-19.115 42.667-42.667v-170.667c0-23.552-19.115-42.667-42.667-42.667z"></path>
                </svg>
              </div>
              <div className="home-container30">
                <img
                  alt="image"
                  src="/playground_assets/logo-invision.svg"
                  className="home-image17"
                />
              </div>
            </div>
            <div className="home-container31">
              <div className="home-container32">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon04"
                >
                  <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                </svg>
              </div>
              <div className="home-container33">
                <img
                  alt="image"
                  src="/playground_assets/logo-weave.svg"
                  className="home-image18"
                />
              </div>
            </div>
          </div>
          <div className="home-container34">
            <div className="home-logos"></div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image19"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="home-top-wave-image"
        />
      </section>
      <img
        alt="image"
        src="/playground_assets/curved6-1500h.jpg"
        className="home-image20"
      />
      <section className="home-contaier">
        <div className="home-container35">
          <div className="home-container36">
            <svg viewBox="0 0 1024 1024" className="home-icon06">
              <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
            </svg>
          </div>
          <h2 className="home-text42">MULTIVERSE TOKEN</h2>
          <h3 className="home-text43 HeadingTwo">
            <span className="home-text44">WERE TO TRADE?</span>
            <br></br>
          </h3>
          <span className="home-text46">
            <span className="home-text47">
              We are launching new use cases for the MULTIVERSE Token
              frequentley
            </span>
            <br></br>
          </span>
        </div>
        <div className="home-container37">
          <div className="home-container38">
            <div className="home-container39">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxjcnlwdG98ZW58MHx8fHwxNjY3MTcxODk4&amp;ixlib=rb-4.0.3&amp;w=500"
                className="home-image21"
              />
            </div>
            <div className="home-container40">
              <svg viewBox="0 0 987.4285714285713 1024" className="home-icon08">
                <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <h1 className="home-text49">
                <span className="HeadingOne">Trade MV TOKEN</span>
                <br></br>
                <span>Polygon</span>
                <br></br>
              </h1>
              <a
                href="https://app.sushi.com/swap?tokens=0xFFec5b0Ec59a5760a3273764a9d100F782d8e221&amp;tokens=MATIC&amp;chainId=137"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                <OutlineBlackButton
                  button="Trade MULTIVERSE"
                  className="home-component3"
                ></OutlineBlackButton>
              </a>
            </div>
          </div>
          <div className="home-container41">
            <Component5></Component5>
            <Component4></Component4>
            <Component3></Component3>
          </div>
        </div>
        <div className="home-divider"></div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
