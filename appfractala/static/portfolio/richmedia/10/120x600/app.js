
var preloader;

window.onload = function() {
    fontLoader.loadFonts();
    preloader = new PreloaderAnimation();
};

var fontLoader = new FontLoader(["SkyTextRegular", "SkyTextMedium"], {
    fontsLoaded: function(error) {
        if (error === null) {
            if (Enabler.isInitialized()) {
                enablerInitHandler();
            } else {
                Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
            }
        }
    }
});


function PreloaderAnimation() {

	var stage = new createjs.Stage("preloader"),
		container = new createjs.Container();

	stage.autoClear = true;

	for (var i = 0; i < 12; i++) {
		var circle = new PreloaderAsset((1/12) * i, "#999999", 5),
			degrees = (360 / 12) * i + (135),
			radians = degrees * (Math.PI / 180);

		circle.x = Math.sin(radians) * 35;
		circle.y = Math.cos(radians) * 35;
		container.addChild(circle);
	}

	container.x = stage.canvas.width * 0.5;
	container.y = stage.canvas.height * 0.5;
	container.scaleX = 0.8;
	container.scaleY = 0.8;
	container.scaleX *= -1;
	stage.addChild(container);
	stage.update();

	TweenLite.ticker.addEventListener("tick", stage.update, stage);

	this.getStage = function(){ return stage }
	this.getContainer = function(){ return container }
}

PreloaderAnimation.prototype.fadeOut = function(callback) {
	var stage = this.getStage();
	TweenLite.to(this.getContainer(), 0.5, { alpha: 0, ease:Quad.easeOut, onComplete:function(){
		TweenLite.ticker.removeEventListener("tick", stage.update, stage);
		stage.removeAllChildren();
		stage.update();
		stage = null;
		document.getElementById("container").removeChild( document.getElementById("preloader"));
		callback();
	}});
}

function PreloaderAsset(delay, colour, radius) {

	var container = new createjs.Container(),
		circle = new createjs.Shape(),
		xy = 0 - (radius * 0.5);

	circle.graphics.beginFill(colour).drawCircle(xy, xy, radius);
	circle.scaleX = 0.4;
	circle.scaleY = 0.4;
	circle.alpha = 0;
	container.addChild(circle);

	TweenMax.to(circle, 0.5, { onStart: function(){ circle.alpha = 0.8}, delay: delay, scaleX: 1, scaleY: 1, repeat: -1, yoyo:true, ease:Quad.easeOut  } );

	return container;
}

function ImageLoader(obj, callback) {
	/*Creates a new HTML Image element*/
	var img = new Image();
	/*Creates an EventListener*/
	img.addEventListener("load", loadComplete, false);
	/*Sets URL initializing load*/
	img.src = obj.url;

	/*Handler for EventListener*/
	function loadComplete(e) {
		obj.img = img;
		callback();
	}
}

function BatchImageLoader(profile, callback) {

	var loadQueue = 0;

	/*Loops through the profile checking of what needs to be loaded*/
	for (var p in profile) {
		if( profile.hasOwnProperty(p) ) {
			if(profile[p].hasOwnProperty('url')) {
				/*If an object has the paramter of url a loader is created and the load queue increased*/
				loadQueue++;
				var loader = new ImageLoader(profile[p], checkLoaded);
			}
		}
	}

	/*The callback from the loaders*/
	function checkLoaded(obj) {
		loadQueue--;

		/*If the load queue is empty all loading is complete*/
		if(loadQueue === 0) {
			callback();
		}
	}
}

/*Standard PageLoad Handler*/
function pageLoadedHandler() {
    if (Enabler.isVisible()) {
        adVisibilityHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, adVisibilityHandler);
    }
}

/*Standard Enabler Init Handler*/
function enablerInitHandler() {

    Enabler.setProfileId(1069017);
    var devDynamicContent = {};

    devDynamicContent.Feed_120x600= [{}];
    devDynamicContent.Feed_120x600[0]._id = 0;
    devDynamicContent.Feed_120x600[0].id = 1;
    devDynamicContent.Feed_120x600[0].Default = true;
    devDynamicContent.Feed_120x600[0].ReportingLabel = "OSM_AQ_DTH_POWERFORTNIGHT-Q2_FREETABEORVOUCHER_SKYTV_100ROUNDEL_HTML5_294535";
    devDynamicContent.Feed_120x600[0].Clicktag = {};
    devDynamicContent.Feed_120x600[0].Clicktag.Url = "https://secure.sky.com/";
    devDynamicContent.Feed_120x600[0].StartDate = {};
    devDynamicContent.Feed_120x600[0].StartDate.RawValue = "";
    devDynamicContent.Feed_120x600[0].StartDate.UtcValue = 0;
    devDynamicContent.Feed_120x600[0].EndDate = {};
    devDynamicContent.Feed_120x600[0].EndDate.RawValue = "";
    devDynamicContent.Feed_120x600[0].EndDate.UtcValue = 0;
    
	devDynamicContent.Feed_120x600[0].content = {
		"120x600_opening_image.jpg":{"Type":"file","Url":"dynamic_assets/120x600_opening_image.jpg"},
		"120x600_opening_copy_01.png":{"Type":"file","Url":"dynamic_assets/120x600_opening_copy_01.png"},
		"120x600_opening_copy_02.png":{"Type":"file","Url":"dynamic_assets/120x600_opening_copy_02.png"},
		
		"120x600_f1_headline.png":{"Type":"file","Url":"dynamic_assets/120x600_f1_headline.png"},
		"120x600_f1_image_left.png":{"Type":"file","Url":"dynamic_assets/120x600_f1_image_left.png"},
		"120x600_f1_image_right.png":{"Type":"file","Url":"dynamic_assets/120x600_f1_image_right.png"},
		
		"120x600_f2_headline.png":{"Type":"file","Url":"dynamic_assets/120x600_f2_headline.png"},
		"120x600_f2_image_left.png":{"Type":"file","Url":"dynamic_assets/120x600_f2_image_left.png"},
		"120x600_f2_image_middle.png":{"Type":"file","Url":"dynamic_assets/120x600_f2_image_middle.png"},
		"120x600_f2_image_right.png":{"Type":"file","Url":"dynamic_assets/120x600_f2_image_right.png"},
		
		"120x600_f3_headline.png":{"Type":"file","Url":"dynamic_assets/120x600_f3_headline.png"},
		"120x600_f3_image.png":{"Type":"file","Url":"dynamic_assets/120x600_f3_image.png"},
		"120x600_f3_headline_legals.png":{"Type":"file","Url":"dynamic_assets/120x600_f3_headline_legals.png"},
		
		"120x600_cta.png":{"Type":"file","Url":"dynamic_assets/120x600_cta.png"},
		"120x600_background.jpg":{"Type":"file","Url":"dynamic_assets/120x600_background.jpg"},
		"120x600_sky_logo.png":{"Type":"file","Url":"dynamic_assets/120x600_sky_logo.png"}};
	
    devDynamicContent.Feed_120x600[0].LegalButton = "Click for legals";
    devDynamicContent.Feed_120x600[0].LegalCopy = "Lucky Man Steffan Hill / 2015 Carnival Films. The Blacklist Season 3 © 2015 Sony Pictures Television Inc and Open 4 Business Productions LLC. All Rights Reserved.";
    Enabler.setDevDynamicContent(devDynamicContent);

    if (Enabler.isPageLoaded()) {
        pageLoadedHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
    }
}

(function (window) {

    function Profile() {
        var profile = {};

        /*Dynamic Images init - prepare preloader to keep tabs on loading of these*/
        profile.background = {};
        profile.glassmark = {};
        profile.cta = {};
		
		profile.opening_image = {};
		profile.opening_copy_01 = {};
		profile.opening_copy_02 = {};
		
		profile.f1_headline = {};
		profile.f1_image_left = {};
		profile.f1_image_right = {};
		
		profile.f2_headline = {};
		profile.f2_image_left = {};
		profile.f2_image_middle = {};
		profile.f2_image_right = {};
		
		profile.f3_headline = {};
		profile.f3_image = {};
		profile.f3_headline_legals = {};

        return profile;
    }

    window.Profile = Profile;

})(window);

function adVisibilityHandler() {

    /*Get the profile for the banner*/
    var profile = new Profile();
	
	profile.background.url = dynamicContent.Feed_120x600[0].content['120x600_background.jpg']['Url'];
    profile.glassmark.url = dynamicContent.Feed_120x600[0].content['120x600_sky_logo.png']['Url'];
    profile.cta.url = dynamicContent.Feed_120x600[0].content['120x600_cta.png']['Url'];
	
    profile.opening_image.url = dynamicContent.Feed_120x600[0].content['120x600_opening_image.jpg']['Url'];
	profile.opening_copy_01.url = dynamicContent.Feed_120x600[0].content['120x600_opening_copy_01.png']['Url'];
	profile.opening_copy_02.url = dynamicContent.Feed_120x600[0].content['120x600_opening_copy_02.png']['Url'];
	
	profile.f1_headline.url = dynamicContent.Feed_120x600[0].content['120x600_f1_headline.png']['Url'];
	profile.f1_image_left.url = dynamicContent.Feed_120x600[0].content['120x600_f1_image_left.png']['Url'];
	profile.f1_image_right.url = dynamicContent.Feed_120x600[0].content['120x600_f1_image_right.png']['Url'];
	
	profile.f2_headline.url = dynamicContent.Feed_120x600[0].content['120x600_f2_headline.png']['Url'];
	profile.f2_image_left.url = dynamicContent.Feed_120x600[0].content['120x600_f2_image_left.png']['Url'];
	profile.f2_image_middle.url = dynamicContent.Feed_120x600[0].content['120x600_f2_image_middle.png']['Url'];
	profile.f2_image_right.url = dynamicContent.Feed_120x600[0].content['120x600_f2_image_right.png']['Url'];
	
	profile.f3_headline.url = dynamicContent.Feed_120x600[0].content['120x600_f3_headline.png']['Url'];
	profile.f3_image.url = dynamicContent.Feed_120x600[0].content['120x600_f3_image.png']['Url'];
	profile.f3_headline_legals.url = dynamicContent.Feed_120x600[0].content['120x600_f3_headline_legals.png']['Url'];

    profile.legalShow = dynamicContent.Feed_120x600[0].LegalButton;
    profile.legals =  dynamicContent.Feed_120x600[0].LegalCopy;

    /*Polite load all the required images*/
    var batchImageLoader = new BatchImageLoader(profile, function() {
        preloader.fadeOut(function() {
            /*Once the polite load is complete start the setup of the main banner*/
            var main = new Main(profile);
        });
    });

    document.getElementById('bg-exit').addEventListener('click', bgExitHandler, false);
}

function bgExitHandler() {
    var exitId = 'Primary Exit';
    var dynamicExitUrl = dynamicContent.Feed_120x600[0].Clicktag.Url;

    if (dynamicExitUrl) {
        Enabler.exitOverride(exitId, dynamicExitUrl);
    } else {
        Enabler.exit(exitId);
    }
}

var largeImage, glassmark, f2Text, f5Copy;
var stage;

function Main(profile) {

	if (profile.legals !== "") {
		var legals = new SkyLegals(profile);
	}

	stage = new createjs.Stage("main");
	
	background = new createjs.Bitmap(profile.background.img);
	glassmark = new createjs.Bitmap(profile.glassmark.img);
	cta = new createjs.Bitmap(profile.cta.img);
	
	opening_image = new createjs.Bitmap(profile.opening_image.img);
	opening_copy_01 = new createjs.Bitmap(profile.opening_copy_01.img);
	opening_copy_02 = new createjs.Bitmap(profile.opening_copy_02.img);
	
	f1_headline = new createjs.Bitmap(profile.f1_headline.img);
	f1_image_left = new createjs.Bitmap(profile.f1_image_left.img);
	f1_image_right = new createjs.Bitmap(profile.f1_image_right.img);
	
	f2_headline = new createjs.Bitmap(profile.f2_headline.img);
	f2_image_left = new createjs.Bitmap(profile.f2_image_left.img);
	f2_image_middle = new createjs.Bitmap(profile.f2_image_middle.img);
	f2_image_right = new createjs.Bitmap(profile.f2_image_right.img);
	
	f3_headline = new createjs.Bitmap(profile.f3_headline.img);
	f3_image = new createjs.Bitmap(profile.f3_image.img);
	f3_headline_legals = new createjs.Bitmap(profile.f3_headline_legals.img);

	opening_image.regX = opening_image.image.width * 0.5;
	opening_image.regY = opening_image.image.height * 0.5;
	opening_image.x = 60;
	opening_image.y = 300;
	opening_image.scaleX = 1.2;
	opening_image.scaleY = 1.2;
	
	openingCopy = new Glintable(opening_copy_02, 1, 1.8);
	
	f1_image_left.regX = f1_image_left.image.width * 0.5;
	f1_image_left.regY = f1_image_left.image.height * 0.5;
	f1_image_left.x = 10;
	f1_image_left.y = 220;
	f1_image_left.scaleX = 1.8;
	f1_image_left.scaleY = 1.8;
	
	f1_image_right.x = 120;
	
	f1Text = new Glintable(f1_headline, 0.7, 1.5);
	f1Text.alpha = 0;
	
	stage.addChild(background, glassmark, f1_image_left, f1_image_right, f1Text, opening_image, opening_copy_01, openingCopy);
	
	TweenMax.ticker.addEventListener("tick", stage.update, stage);
	stage.update();

	f1();
}

function f1() {
	
	TweenMax.delayedCall(0.5, openingCopy.playGlint);
	TweenMax.to(opening_image, 3, {scaleX: 1, scaleY: 1});
	
	TweenMax.to(opening_image, 0.3, {delay: 2, alpha: 0});
	TweenMax.to(opening_copy_01, 0.3, {delay: 2, alpha: 0});
	TweenMax.to(opening_copy_02, 0.3, {delay: 2, alpha: 0});
	TweenMax.to(f1_image_left, 0.5, {delay: 2, scaleX: 1, scaleY: 1, x: 0, y: 300});
	
	TweenMax.to(f1_image_right, 0.5, {delay: 2.6, x: 0});
	TweenMax.to(f1Text, 0.7, {delay: 2.8, alpha: 1, ease: Quad.easeIn});
	TweenMax.delayedCall(3.5, f1Text.playGlint);

	TweenMax.delayedCall(5.5, function() {
		stage.removeChild(opening_image, opening_copy_01, opening_copy_02);
		f2();
	});
}

function f2() {
	TweenMax.to(f1Text, 0.5, {alpha: 0, ease: Quad.easeOut});
	TweenMax.to(f1_image_left, 0.7, {x: -160, ease: Quad.easeOut});
	TweenMax.to(f1_image_right, 0.7, {x: -160, ease: Quad.easeOut});
	
	f2Text = new Glintable(f2_headline, 0.7, 2);
	f2Text.alpha = 0;
	f2_image_left.y = -600;
	f2_image_middle.y = -600;
	f2_image_right.y = -600;
	
	stage.addChild(f2Text, f2_image_left, f2_image_middle, f2_image_right);
	
	TweenMax.to(f2_image_left, 0.5, {delay: 0.5, y: 0, ease: Bounce.easeOut});
	TweenMax.to(f2_image_right, 0.5, {delay: 1, y: 0, ease: Bounce.easeOut});
	TweenMax.to(f2_image_middle, 0.5, {delay: 1.5, y: 0, ease: Bounce.easeOut});
	
	TweenMax.to(f2Text, 0.5, {delay: 1.8, alpha: 1, ease: Quad.easeIn});
	TweenMax.delayedCall(2.7, f2Text.playGlint);
	
	TweenMax.delayedCall(4.5, function() {
		stage.removeChild(f1_image_left, f1_image_right, f1Text);
		f3();
	});
}

function f3() {
	TweenMax.to(f2Text, 0.5, {alpha: 0, ease: Quad.easeOut});
	TweenMax.to(f2_image_left, 0.5, {x: -120, ease: Quad.easeOut});
	TweenMax.to(f2_image_middle, 0.5, {x: -120, ease: Quad.easeOut});
	TweenMax.to(f2_image_right, 0.5, {x: -120, ease: Quad.easeOut});
	
	f3Text = new Glintable(f3_headline, 0.7, 1.8);
	f3Text.alpha = 0;

	ctaImage = new Glintable(cta, 0.3, 1.8);
	ctaImage.alpha = 0;
	
	f3_image.x = 120;
	
	f3_headline_legals.alpha = 0;
	
	stage.addChild(f3_image, f3Text, ctaImage, glassmark, f3_headline_legals);
	
	TweenMax.to(f3_image, 0.5, {delay: 0.5, x: 0, ease: Quad.easeOut});
	TweenMax.to(f3Text, 0.5, {delay: 1.3, alpha: 1, ease: Quad.easeOut});
	TweenMax.to(f3_headline_legals, 0.7, {delay: 1.3, alpha: 1, ease: Quad.easeOut});
	TweenMax.delayedCall(2, f3Text.playGlint);
	TweenMax.to(ctaImage, 0.5, {delay: 1.3, alpha: 1, ease: Quad.easeOut});
	TweenMax.delayedCall(2.5, ctaImage.playGlint);

	TweenMax.delayedCall(3.5, function() {
		stage.removeChild(f2Text, f2_image_left, f2_image_middle, f2_image_right);
	});
}

function SkyLegals(profile) {
	var legalsContainer = document.getElementById('legalsContainer'),
	legalsButton = document.getElementById('legalsButton'),
	legalsCopy = document.getElementById('legalsCopy'),
	legalsClose = document.getElementById('legalsClose');

	legalsCopy.innerHTML = profile.legals;
	legalsButton.innerHTML = profile.legalShow;

	var outerWidth = document.getElementById('main').offsetWidth;
	var outerHeight = document.getElementById('main').offsetHeight;

	legalsContainer.style.top = outerHeight + 'px';
	legalsCopy.style['max-height'] = (outerHeight - 30) + 'px';
	legalsClose.style.left = (outerWidth - 21) + 'px';

	legalsButton.addEventListener('click', handleClick);
	legalsClose.addEventListener('click', handleClose);

	function handleClick() {
		TweenMax.to(legalsContainer, 0.5, {
			ease: Cubic.easeInOut,
			top: outerHeight - document.getElementById('legalsCopy').offsetHeight
		});

		legalsButton.style.visibility = 'hidden';
	}

	function handleClose() {
		TweenMax.to(legalsContainer, 0.5, {
			ease: Cubic.easeInOut,
			top: outerHeight
		});

		legalsButton.style.visibility = 'visible';
	}
}

function Glintable(imagePath, sheenAlpha, sheenSpeed) {
    var container = new createjs.Container(),
        glint = new createjs.Shape(),
        textField = imagePath,
        highlight = imagePath;
		
	
	var sheenArea = new createjs.Shape();
	sheenArea.graphics.beginFill("#fff").drawRect(0, 0, 120, 600);
	textField.cache(0,0,120,600);
	sheenArea.filters = [new createjs.AlphaMaskFilter(textField.cacheCanvas)];
	sheenArea.cache(0,0,120,600);
	sheenArea.alpha = sheenAlpha;
					
	var sheenLine = new createjs.Shape();
	sheenLine.graphics.beginLinearGradientFill(['rgba(255,255,255,.4)','rgba(255,255,255,.7)','rgba(255,255,255,.4)'], [0,.5,0], 0, 0 , 15, 0).drawRect(0,0,15,600);
	sheenLine.rotation = 10;
	sheenLine.x = -15;
	sheenLine.y = 0;
	sheenArea.mask = sheenLine;

    container.addChild(textField, sheenArea);

    container.playGlint = function () {
        TweenLite.to(sheenLine, sheenSpeed, {x: 350});
    };

    return container;
}

