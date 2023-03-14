import "./HomePage.css";

function HomePage() {
  return (
    <div>
			<img className="avatar" src="images/guiño.gif" alt="" />
      <h1>Hello, My name is Rodrigo</h1>
			<p>Fullstack web developer, passionate about technology</p>		
			<div className="info">
				<div className="one">
				 <img className="png" src="images/info.png" alt="" />
				 <h1>About Me</h1>
				</div>
				<div className="two">
				 <img className="png" src="images/portfolio.png" alt="" />
				 <h1>Work</h1>
				</div>
				<div className="three">
				 <img className="png" src="images/contact.png" alt="" />
				 <h1>Contact</h1>
				</div>
				<div className="four">
				 <img className="png" src="images/contact.png" alt="" />
				 <h1>Contact</h1>
				</div>
			</div>
				<footer className="footer">
				</footer>
    </div>
  );
}

export default HomePage;
