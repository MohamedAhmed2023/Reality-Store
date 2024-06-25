import React, { useEffect } from "react";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
import bg from "../../Assets/icons/pexels-karolina-grabowska-5632371.jpg";
import bg2 from "../../Assets/icons/laptop-shopping-bags-online-shopping-concept.jpg";
import ProductCard from "../Products/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../actions/ProductActions";
import Header from "./Header";
import MetaData from "../../more/Metadata";
import Footer from "../../Footer";
import BottomTab from "../../more/BottomTab";
import Loading from "../../more/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import Boxs from "./Boxs/Boxs";
import Box2 from "./Boxs2/Box2";
import Category from "./Category/Category";
import News from "./News/News";
import Newletter from "./newletter/Newletter";
import HeadingText from "./HeadingText/HeadingText";
const Home = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="Home" />
          <Header />
          {/* Carousel */}
          <div className="banner">
            <Carousel>
              <img src={bg} className="bgImg" alt="bgImages" />
              <img src={bg2} className="bgImg" alt="bgImages" />
            </Carousel>
            <div className="home__content">
              {/* <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h2
                  style={{
                    fontFamily: "Segoe Script",
                    fontSize: "3em",
                    fontWeight: "500",
                  }}
                >
                  Buy 2 Get
                </h2>
                <span
                  style={{
                    padding: "10px",
                    backgroundColor: "#fff",
                    margin: "0px 10px",
                    textAlign: "center",
                    width: "150px",
                    height: "40px",
                    color: "#F83758",
                    fontFamily: "Segoe Script",
                    fontSize: "2.4em",
                    display: "flex",
                    justifyContent: "center",
                    lineHeight: ".7",
                    alignItems: "center",
                  }}
                >
                  1 Free
                </span>
              </div> */}
              <div>
                <h2
                  style={{
                    fontSize: "4em",
                    fontFamily: "Poppins,sans-serif",
                    color: "#fff",
                  }}
                >
                  RealityStore
                </h2>
              </div>
              <div>
                <h2
                  style={{
                    fontSize: "3em",
                    fontWeight: "400",
                    fontFamily: "Poppins,sans-serif",
                    color: "#fff",
                    lineHeight: ".7",
                  }}
                >
                  e-commerce
                </h2>
              </div>
              <div>
                <h2
                  style={{
                    fontWeight: "400",
                    fontFamily: "Poppins,sans-serif",
                    color: "#fff",
                    fontSize: "1em",
                    paddingTop: "10px",
                  }}
                >
                  Get Up To 50% Off Select Styles.
                </h2>
              </div>
              <div>
                <a href="#container">
                  <Button
                    variant="contained"
                    color="error"
                    size="medium"
                    id="btn"
                    type="submit"
                    style={{
                      width: "180px",
                      height: "50px",
                      border: "none",
                      background: "#e94560",
                      margin: "10px 0",
                      fontSize: "1.2vmax",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                    className="Home__button"
                  >
                    SHOP NOW
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <Boxs />
          <div class="container">
            {/* <div class="animate-heading">
              <h3 class="animate-charcter"> Featured Products</h3>
            </div> */}
            <HeadingText title="Featured Products" />
          </div>
          <div className="Featured-Products">
            {/* <div className="Parent-discount">
              <div className="discount-content">
                <h5>COMPUTER & ACCESSORIES</h5>
                <span>32% Discount</span>
                <p>For all ellectronics products</p>
                <button>Shop now</button>
              </div>
              <div className="discount-image">
                <img src={discountImage}></img>
              </div>
            </div> */}
            <div className="container-Products" id="container">
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
          <Box2 />
          <News />
          <Category />
          <Newletter />
          <Footer />
          <BottomTab />
        </>
      )}
    </>
  );
};

export default Home;
