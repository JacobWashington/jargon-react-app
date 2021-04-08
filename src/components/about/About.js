import "./About.css"

const About = (props) => {
    return (
        <>
            <div className="about-container">
                <h2>About</h2>
                <p>{props.about || 'This is just some filler content!!!!!'}</p>
            </div>
        </>
    );
}

export default About;
