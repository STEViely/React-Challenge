const root = ReactDOM.createRoot(document.getElementById('root'));

// function StoryItem(props) {
//     const { place, src } = props;
//     return (
//       <div className='stories__list--item'>
//         <h4>{place}</h4>
//         <img src={src} atl={place} />
//       </div>
//     );
//   }

//   function Properties() {
//     return (
//       <section className='properties'>
//         <div>Title</div>
//         <div className='grid__container'>
//           <div className='grid__item item-1'>1</div>
//           <div className='grid__item item-2'>2</div>
//           <div className='grid__item item-3'>3</div>
//           <div className='grid__item item-4'>4</div>
//           <div className='grid__item item-5'>5</div>
//           <div className='grid__item item-6'>6</div>
//         </div>
//       </section>
//     );
//   }

function Navbar() {
    return (
        <nav className="container-nav">
            <Logo />

            <div className="menu">
                <a href="#">HOME</a>
                <a href="#">PROPERTIES</a>
                <a href="#">AGENTS</a>
                <a href="#">BLOG</a>
                <button>LOG IN</button>
            </div>
        </nav>
    )
}

function ContentCountries() {
    return (
        <div className="content-countries">
            <h1>We are available in many<br />well-know countries</h1>

            <div className="container-img-countries">
                
                <div className="card-countries">
                    <div className="img-countries">
                        <img src="./images/america.png" alt="america" />
                    </div>
                    <h2>AMERIC</h2>
                </div>

                <div className="card-countries">
                    <div className="img-countries">
                        <img src="./images/spain.png" alt="spain" />
                    </div>
                    <h2>SPAIN</h2>
                </div>

                <div className="card-countries">
                    <div className="img-countries">
                        <img src="./images/london.png" alt="london" />
                    </div>
                    <h2>LONDON</h2>
                </div>

                <div className="card-countries">
                    <div className="img-countries">
                        <img src="./images/france.png" alt="france" />
                    </div>
                    <h2>FRANCE</h2>
                </div>
            </div>
        </div>
    )
}


// //   function Footerr() {
// //     return <footer className='footer'>Footer</footer>;
// //   }
//   function Main() {
//     return (
//       <main className='main'>
//         <Banner
//           title='Easy way to find a perfect property'
//           src='./images/banner.png'
//           withTab={false}
//         />
//         <StoryList />
//         {/* <Properties /> */}
//         {/* <Banner title='Find your best Real Estate' src='./images/building.png' withTab={false} /> */}
//       </main>
//     );
//   }

//   function Banner(props) {
//     return (
//       <section className='hero'>
//         {/* Image */}
//         <div className='hero__image__container'>
//           <img
//             className={`hero__image ${!props.withTab && 'border-custom'}`}
//             alt='hero'
//             src={props.src}
//           />
//           <div className='hero__text'>
//             <h1>{props.title}</h1>
//             <p>We provide a complete service for the sale, purchase or rental of real estate.</p>
//             {/* {props.withTab && <div className='hero__tab'></div>} */}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   function StoryList() {
//     const places = [
//       { id: 1, placeName: 'America', image: './images/america.png' },
//       { id: 2, placeName: 'Spain', image: './images/spain.png' },
//       { id: 3, placeName: 'London', image: './images/london.png' },
//       { id: 4, placeName: 'France', image: './images/france.png' },
//     ];
//     return (
//       <section className='stories'>
//         <div className='stories__title'>
//           <h1>We are available in many well know countries</h1>
//         </div>
//         <div className='stories__list'>
//           {places.map((item) => (
//             <StoryItem key={item.id} place={item.placeName.toUpperCase()} src={item.image} />
//           ))}
//         </div>
//       </section>
//     );
//   }
// ++++++++++++++++++++++++++++++++++++++++++
function Header() {
    return (
        <div className="container-head">
            <div className="head-img">
                <img src="./images/Banner.png" alt="Banner" />
            </div>
            <div className="text-detail-head">
                <h1>Easy way to find a<br />perfect property</h1>
                <p className="detail-head-p">We provide a complete aervice for the sale, <br />purchase or rental of real estate</p>
                <div className="container-rent-but-sale">
                    <div className="con-rent">
                        <p>RENT</p>
                        <p>BUY</p>
                        <p>SELL</p>
                    </div>

                    <div className="container-location">
                        <div className="group-location">
                            <div className="location">
                                <h2>Location</h2>
                                <div className="item-location">
                                    <p>Select Your City</p>
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                            </div>

                            <div className="linee"></div>

                            <div className="location">
                                <h2>Property Type</h2>
                                <div className="item-location">
                                    <p>Choose Property Type</p>
                                    {/* <i className="fa-solid fa-chevron-down"></i> */}
                                </div>
                            </div>

                            <div className="linee"></div>

                            <div className="location">
                                <h2>Price Range</h2>
                                <div className="item-location">
                                    <p>Choose Price Range</p>
                                </div>
                            </div>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}



// ++++++++++++++++++++++++++++++++++++++++++

function Logo() {
    return (
        <>
            <div className="logoContainer">
                <div className="logoImg">
                    <img src="./images/icon.png" alt="" />
                </div>
                <div className="textlogo">
                    <h1>logoipsum</h1>
                    <p>.com</p>
                </div >
            </div >
        </>
    );
}

function RecentlyAdded() {
    return (
        <>
            <div className="recently">
                <h2>Recently Added</h2>
                <p>See all</p>
            </div>
            <div className="recentlyContainer">
                <div className="recentlyCard">
                    <img src="./images/small-1.png" alt="" />
                    <div className="contentTown">
                        <div className="townAdds">103/143 West Street,<br />Crows Nest </div>
                        <div className="option">
                            <p>10 Bedroom</p>
                            <p>150 M</p>
                            <p>2 Garage</p>
                        </div>
                        <div className="lastLine">
                            <p>Posted by X Builder</p>
                            <div className="price">$45,545</div>
                        </div>
                    </div>
                </div>
                <div className="recentlyCard">
                    <img src="./images/small-2.png" alt="" />
                    <div className="contentTown">
                        <div className="townAdds">103/143 West Street,<br />Crows Nest</div>
                        <div className="option">
                            <p>10 Bedroom</p>
                            <p>150 M</p>
                            <p>2 Garage</p>
                        </div>
                        <div className="lastLine">
                            <p>Posted by X Builder</p>
                            <div className="price">$45,545</div>
                        </div>
                    </div>
                </div>
                <div className="recentlyCard">
                    <img src="./images/small-3.png" alt="" />
                    <div className="contentTown">
                        <div className="townAdds">103/143 West Street,<br />Crows Nest</div>
                        <div className="option">
                            <p>10 Bedroom</p>
                            <p>150 M</p>
                            <p>2 Garage</p>
                        </div>
                        <div className="lastLine">
                            <p>Posted by X Builder</p>
                            <div className="price">$45,545</div>
                        </div>
                    </div>
                </div>
                <div className="recentlyCard">
                    <img src="./images/small-4.png" alt="" />
                    <div className="contentTown">
                        <div className="townAdds">103/143 West Street,<br />Crows Nest</div>
                        <div className="option">
                            <p>10 Bedroom</p>
                            <p>150 M</p>
                            <p>2 Garage</p>
                        </div>
                        <div className="lastLine">
                            <p>Posted by X Builder</p>
                            <div className="price">$45,545</div>
                        </div>
                    </div>
                </div>
                <div className="recentlyCard">
                    <img src="./images/small-5.png" alt="" />
                    <div className="contentTown">
                        <div className="townAdds">103/143 West Street,<br />Crows Nest</div>
                        <div className="option">
                            <p>10 Bedroom</p>
                            <p>150 M</p>
                            <p>2 Garage</p>
                        </div>
                        <div className="lastLine">
                            <p>Posted by X Builder</p>
                            <div className="price">$45,545</div>
                        </div>
                    </div>
                </div>
                <div className="recentlyCard">
                    <img src="./images/small-6.png" alt="" />
                    <div className="contentTown">
                        <div className="townAdds">103/143 West Street,<br />Crows Nest</div>
                        <div className="option">
                            <p>10 Bedroom</p>
                            <p>150 M</p>
                            <p>2 Garage</p>
                        </div>
                        <div className="lastLine">
                            <p>Posted by X Builder</p>
                            <div className="price">$45,545</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function FindYourBest() {
    return (
        <>
            <div className="findTYourBestContainer">
                <div className="content">
                    <h1>
                        Find your best <br />
                        Real Estate
                    </h1>
                    <p>
                        We provide a complete service for the sale,
                        purchase or rental of real estate
                    </p>
                    <button>
                        CONTACT US
                    </button>
                </div>
                <div className="imgContainer">
                    <img src="./images/building.png" alt="" />
                </div>
            </div>
        </>
    );
}

function Footerlogo() {
    return (
        <footer>
            <div className="footer-rigth">
                <Logo />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil illo dignissimos quo praesentium rem quas quia maiores amet. Non rem odio est consequatur saepe molestias fugit eaque accusamus magnam.</p>
                
                <div className="icon-social">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>

                <div className="allrights">
                    <span>&#169;2021 All rights reserved</span>
                </div>
            </div>

            
            <div className="footer-menu-1">
                <div className="footer-menu-take">
                    <h3>Take a tour</h3>
                    <a href="#">Features</a>
                    <a href="#">Partners</a>
                    <a href="#">Pricing</a>
                    <a href="#">Product</a>
                    <a href="#">Support</a>
                </div>

                <div className="footer-menu-take">
                    <h3>Our Company</h3>
                    <a href="#">About Us</a>
                    <a href="#">Agents</a>
                    <a href="#">Blog</a>
                    <a href="#">Media</a>
                    <a href="#">Contact Us</a>
                </div>

                <div className="footer-subs">
                    <h3>Subscribe</h3>
                    <p>Subscribe to get lastest property,<br />blog news from us</p>
                    <div className="footer-btn">
                        <input type="text" placeholder="Email Address" />
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </div>
                </div>
            
            </div>
        </footer>
    )
}


function App() {
    return (
        <>
            <div className="all">
                <Navbar />
                <Header />
                <ContentCountries />
                <RecentlyAdded />
                <FindYourBest />
                <Footerlogo />
            </div>
        </>
    )
}

root.render(<App />)


