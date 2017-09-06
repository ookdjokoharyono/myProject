var config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
	
	'Go to Sign In Page' : function (browser) {
		/*browser
			.url ('https://www.ilotte.com')
			.maximizeWindow()
			.useCss()
			.waitForElementVisible ('a.i_mypage', 50000)
			.click ('a.i_mypage')
			.waitForElementVisible ('button#btnLogin.btn_type1.large', 50000)
			//.pause (50000)
			//.assert.elementPresent('button[id=btnLogin]')
			//.end()*/
		var myObjectPage = browser.page.myObjectPage();

		myObjectPage.navigate ()
			.url ('https://www.ilotte.com')
			.maximizeWindow()
			.useCss()
			.waitForElementVisible ('@loginButton', 50000)
			.click ('@loginButton')
			.waitForElementVisible ('@signInButton', 50000)	

	},
	'Sign in Using Correct Password' : function (browser) {
		browser
			.end()
	}
}