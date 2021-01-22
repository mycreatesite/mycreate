let captchaLoaded = false;

$(() => {

	//Load reCAPTCHA script when CF7 form field is focused
	$('.wpcf7-form input').on('focus', () => {
		// If we have loaded script once already, exit.
		if (captchaLoaded) {
			return;
		}

		// Variable Intialization
		const head = document.getElementsByTagName('head')[0];
		const recaptchaScript = document.createElement('script');
		const cf7script = document.createElement('script');

		// Add the recaptcha site key here.
		const recaptchaKey = '6LeHY6sZAAAAABPPGXISZkohcLbptuQhaFHxdc_x';

		// Dynamically add Recaptcha Script
		recaptchaScript.type = 'text/javascript';
		recaptchaScript.src = `https://www.google.com/recaptcha/api.js?render=${recaptchaKey}&#038;ver=3.0`;

		// Dynamically add CF7 script 
		cf7script.type = 'text/javascript';
		cf7script.text = `!function(t,e){var n={execute:function(e){t.execute("${recaptchaKey}",{action:e}).then(function(e){for(var t=document.getElementsByTagName("form"),n=0;n<t.length;n++)for(var c=t[n].getElementsByTagName("input"),a=0;a<c.length;a++){var o=c[a];if("g-recaptcha-response"===o.getAttribute("name")){o.setAttribute("value",e);break}}})},executeOnHomepage:function(){n.execute(e.homepage)},executeOnContactform:function(){n.execute(e.contactform)}};t.ready(n.executeOnHomepage),document.addEventListener("change",n.executeOnContactform,!1),document.addEventListener("wpcf7submit",n.executeOnHomepage,!1)}(grecaptcha,{homepage:"homepage",contactform:"contactform"});`;

		// Add Recaptcha Script
		head.appendChild(recaptchaScript);

		// Add CF7 Script AFTER Recaptcha. Timeout ensures the loading sequence.
		setTimeout(() => {
			head.appendChild(cf7script);
		}, 200);

		//Set flag to only load once
		captchaLoaded = true;
	});
});