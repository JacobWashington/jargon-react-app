import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="landing-welcome">
        Welcome to <span className="welcome-brand">jargon</span>,
        <br />
        the networking app
        <br />
        made for veterans!
      </h1>
      <img
        className="landing-img"
        src="https://blush.design/api/download?shareUri=hW2qKWvIC&c=Bottom_0%7E2b44ff_Hair_0%7E4a312c_Skin_0%7Eb28b67_Top_0%7Effa434&w=800&h=800&fm=png"
      />
    </div>
  );
};

export default Home;
