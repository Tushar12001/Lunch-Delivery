import React from 'react';
import './signup.css';


const Signup = () => {
  return (
    <>
     
     <div className="tushar">
	<div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true" />

			<div className="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required="" />
					<input type="email" name="email" placeholder="Email" required="" />
					<input type="password" name="pswd" placeholder="Password" required="" />
					<button>Sign up</button>
				</form>
			</div>

	</div>
  </div>

    
    </>
  )
}


export default Signup