import "./style.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

const UC = () => {
  return (
    <>
      <Nav />
      <div className="uc">
        <h1>Désolé, this site is under construction</h1>
        <img src="assets/UCpic.png"></img>
      </div>
      <Footer />
    </>
  );
};

export default UC;
