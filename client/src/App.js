import './App.css';

function App() {
  return (
	<div id="colorlib-page">
		<a href="/" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
		<aside id="colorlib-aside" className="js-fullheight text-center">
			<h1 id="colorlib-logo"><a href="index.html"><span className="img" style={{backgroundImage:'images/author.jpg'}}></span>Louie Smith</a></h1>
			<nav id="colorlib-main-menu" role="navigation">
				<ul>
					<li className="colorlib-active"><a href="index.html">Home</a></li>
					<li><a href="collection.html">Collection</a></li>
					<li><a href="about.html">About Me</a></li>
					<li><a href="services.html">My Services</a></li>
					<li><a href="blog.html">Blog</a></li>
					<li><a href="contact.html">Contact</a></li>
				</ul>
			</nav>

			<div className="colorlib-footer">
				<h3>Newsletter</h3>
				<div className="d-flex justify-content-center">
					<form action="#" className="colorlib-subscribe-form">
            <div className="form-group d-flex">
            	<div className="icon"><span className="icon-paper-plane"></span></div>
              <input type="text" className="form-control" placeholder="Enter Email Address"/>
            </div>
          </form>
				</div>
			</div>
		</aside> 
		<div id="colorlib-main">
			<section className="ftco-section-no-padding bg-light">
				<div className="hero-wrap">
					<div className="overlay"></div>
					<div className="d-flex align-items-center js-fullheight">
						<div className="author-image text img d-flex">
							<section className="home-slider js-fullheight owl-carousel">
					      <div className="slider-item js-fullheight" style={{backgroundImage:'images/author.jpg'}}>
					      </div>

					      <div className="slider-item js-fullheight" style={{backgroundImage:'images/author-2.jpg'}}>
					      </div>
					    </section>
						</div>
						<div className="author-info text p-3 p-md-5">
							<div className="desc">
								<span className="subheading">Hello! I'm</span>
								<h1 className="big-letter">Louie Smith</h1>
								<h1 className="mb-4"><span>Louie Smith</span> A Photographer. <span>I Capture Life</span></h1>
								<p className="mb-4">I am A Photographer from America Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
								<h3 className="signature h1">Louie Smith</h3>
								<ul className="ftco-social mt-3">
		              <li className="ftco-animate"><a href="/"><span className="icon-twitter"></span></a></li>
		              <li className="ftco-animate"><a href="/"><span className="icon-facebook"></span></a></li>
		              <li className="ftco-animate"><a href="/"><span className="icon-instagram"></span></a></li>
		            </ul>
	            </div>
						</div>
					</div>
				</div>
			</section>
			<section className="ftco-section instagram">
				<div className="container">
					<div className="row justify-content-center mb-2 pb-3">
	          <div className="col-md-7 heading-section heading-section-2 text-center ftco-animate">
	            <h2 className="mb-4">Follow me on Instagram</h2>
	          </div>
	        </div>  
					<div className="row no-gutters">
		        <div className="col-sm-12 col-md ftco-animate">
		          <a href="images/image_1.jpg" className="insta-img image-popup" style={{backgroundImage:'images/images-1.jpg'}}>
		            <div className="icon d-flex justify-content-center">
		              <span className="icon-instagram align-self-center"></span>
		            </div>
		          </a>
		        </div>
		        <div className="col-sm-12 col-md ftco-animate">
		          <a href="images/image_2.jpg" className="insta-img image-popup" style={{backgroundImage:'images/images-2.jpg'}}>
		            <div className="icon d-flex justify-content-center">
		              <span className="icon-instagram align-self-center"></span>
		            </div>
		          </a>
		        </div>
		        <div className="col-sm-12 col-md ftco-animate">
		          <a href="images/image_3.jpg" className="insta-img image-popup" style={{backgroundImage:'images/images-3.jpg'}}>
		            <div className="icon d-flex justify-content-center">
		              <span className="icon-instagram align-self-center"></span>
		            </div>
		          </a>
		        </div>
		        <div className="col-sm-12 col-md ftco-animate">
		          <a href="images/image_4.jpg" className="insta-img image-popup" style={{backgroundImage:'images/images-4.jpg'}}>
		            <div className="icon d-flex justify-content-center">
		              <span className="icon-instagram align-self-center"></span>
		            </div>
		          </a>
		        </div>
		        <div className="col-sm-12 col-md ftco-animate">
		          <a href="images/image_5.jpg" className="insta-img image-popup" style={{backgroundImage:'images/images-5.jpg'}}>
		            <div className="icon d-flex justify-content-center">
		              <span className="icon-instagram align-self-center"></span>
		            </div>
		          </a>
		        </div>
		      </div>
				</div>
			</section>
	    <footer className="ftco-footer ftco-bg-dark ftco-section">
	      <div className="container px-md-5">
	        <div className="row mb-5">
	          <div className="col-md">
	            <div className="ftco-footer-widget mb-4 ml-md-4">
	              <h2 className="ftco-heading-2">Recent Photos</h2>
	              <ul className="list-unstyled photo">
	                <li><a href="/" className="img" style={{backgroundImage:'images/image_1.jpg'}}></a></li>
	                <li><a href="/" className="img" style={{backgroundImage:'images/image_2.jpg'}}></a></li>
	                <li><a href="/" className="img" style={{backgroundImage:'images/image_3.jpg'}}></a></li>
	                <li><a href="/" className="img" style={{backgroundImage:'images/image_4.jpg'}}></a></li>
	                <li><a href="/" className="img" style={{backgroundImage:'images/image_5.jpg'}}></a></li>
	                <li><a href="/" className="img" style={{backgroundImage:'images/image_6.jpg'}}></a></li>
	              </ul>
	            </div>
	          </div>
	          <div className="col-md">
	             <div className="ftco-footer-widget mb-4">
	              <h2 className="ftco-heading-2">Archives</h2>
	              <ul className="list-unstyled categories">
	              	<li><a href="/">November 2018 <span>(105)</span></a></li>
	              	<li><a href="/">October 2018 <span>(212)</span></a></li>
	                <li><a href="/">September 2018 <span>(150)</span></a></li>
	                <li><a href="/">August 2018 <span>(100)</span></a></li>
	                <li><a href="/">July 2018 <span>(200)</span></a></li>
	              </ul>
	            </div>
	          </div>
	          <div className="col-md">
	            <div className="ftco-footer-widget mb-4">
	            	<h2 className="ftco-heading-2">Have a Questions?</h2>
	            	<div className="block-23 mb-3">
		              <ul>
		                <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
		                <li><a href="/"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
		                <li><a href="/"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
		              </ul>
		            </div>
	            </div>
	          </div>
	        </div>
	        <div className="row">
	          <div className="col-md-12">

	            <p>-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --
	  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
	  -- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --</p>
	          </div>
	        </div>
	      </div>
	    </footer>
		</div>
	</div>

  );
}

export default App;
