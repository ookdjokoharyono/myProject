module.exports = {
  // can contain anything you want;
  // this is the object you get back when
  // calling the page object factory function
 // can be string or function
  url: function () {
    return this.api.launchUrl;
  },
  
  elements: {
    // Login button at homepage
    loginButton : {
      selector: 'a.i_mypage',
      locateStrategy: 'css selector'
  	},
  	signInButton : {
  		selector: 'button#btnLogin.btn_type1.large',
  		locateStrategy: 'css selector'
  	}
  }
};	