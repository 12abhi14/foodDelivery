import React from 'react'

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#" class="logo">
                        <img src="./apimg/logo.jpg" alt="">
                            <span class="nav-item">Food Delivery</span>
                        </></a>
                </li>
                <li><a href="#">
                    <i class="fas fa-home"></i>
                    <span class="nav-item">Home</span>
                </a></li>
                <li><a href="about.html">
                    <i class="fas fa-address-book"></i>
                    <span class="nav-item">About us</span>

                </a></li>
                <li><a href="contact.html">
                    <i class="fas fa-phone"></i>
                    <span class="nav-item">Contact us</span>
                </a></li>
                <li><a href="menu.html">
                    <i class="fas fa-hand-holding"></i>
                    <span class="nav-item">Menu</span>

                </a></li>
                <li><a href="#divOne">
                    <i class="fas fa-sign-in-alt"></i>
                    <span class="nav-item">Login</span>

                </a></li>

                <a href="#divOne" class="Logout"><span>Logout</span></a>
                

           </ul>
        </nav>  )}
        

	/* <div class="overlay" id="divOne">
		<div class="wrapper">
			<h2>Food delivery login</h2><a class="close" href="#">&times;</a>
			<div class="content">
				<div class="popup-content">
					<form>
            <label>Email or Phone</label>
            <input type="text">
            <label>Password</label>
            <input type="password">
            <a href="#">Forgot Password?</a>
            <button>Submit</button>
            <div class="link">Not a member? <a href="#">Sigup here</a></div>
            
         <closeform></closeform> 
					 </form>
				</div>
			</div>
		</div>
	</div>  

  </nav>
    )
}

export default  */
