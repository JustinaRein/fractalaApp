
var preloader;

window.onload = function() {
    preloader = new PreloaderAnimation();
	
	if (Enabler.isInitialized()) {
		enablerInitHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}
};

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


function enablerInitHandler() {

    Enabler.setProfileId(1110756);
    var devDynamicContent = {};

    devDynamicContent.Feed_728x90= [{}];
    devDynamicContent.Feed_728x90[0]._id = 0;
    devDynamicContent.Feed_728x90[0].id = 1;
    devDynamicContent.Feed_728x90[0].Default = true;
    devDynamicContent.Feed_728x90[0].ReportingLabel = "ReportingLabel";
    devDynamicContent.Feed_728x90[0].Clicktag = {};
    devDynamicContent.Feed_728x90[0].Clicktag.Url = "https://www.sky.com/";
    devDynamicContent.Feed_728x90[0].StartDate = {};
    devDynamicContent.Feed_728x90[0].StartDate.RawValue = "";
    devDynamicContent.Feed_728x90[0].StartDate.UtcValue = 0;
    devDynamicContent.Feed_728x90[0].EndDate = {};
    devDynamicContent.Feed_728x90[0].EndDate.RawValue = "";
    devDynamicContent.Feed_728x90[0].EndDate.UtcValue = 0;
    
	devDynamicContent.Feed_728x90[0].content = {
		
		"background.jpg":{"Type":"file","Url":"dynamic_assets/background.jpg"},
		
		"bundle_full_a.png":{"Type":"file","Url":"dynamic_assets/bundle_full_a.png"},
		"bundle_full_b.png":{"Type":"file","Url":"dynamic_assets/bundle_full_b.png"},
		"bundle_full_a_shadow.jpg":{"Type":"file","Url":"dynamic_assets/bundle_full_a_shadow.jpg"},
		"bundle_full_b_shadow.jpg":{"Type":"file","Url":"dynamic_assets/bundle_full_b_shadow.jpg"},
		
		"bundle_full.jpg":{"Type":"file","Url":"dynamic_assets/bundle_full.jpg"},
		
		"bundle.png":{"Type":"file","Url":"dynamic_assets/bundle.png"},
		
		"cta.png":{"Type":"file","Url":"dynamic_assets/cta.png"},
		"sky_logo.png":{"Type":"file","Url":"dynamic_assets/sky_logo.png"},
		
		"headline_1.png":{"Type":"file","Url":"dynamic_assets/headline_1.png"},
		"headline_2.png":{"Type":"file","Url":"dynamic_assets/headline_2.png"},
		"headline_3.png":{"Type":"file","Url":"dynamic_assets/headline_3.png"},
		"headline_4.png":{"Type":"file","Url":"dynamic_assets/headline_4.png"},
		"headline_5.png":{"Type":"file","Url":"dynamic_assets/headline_5.png"},
		"headline_5_legal.png":{"Type":"file","Url":"dynamic_assets/headline_5_legal.png"}};
	
    devDynamicContent.Feed_728x90[0].LegalButton = "Click for legals";
    devDynamicContent.Feed_728x90[0].LegalCopy = "Lucky Man Steffan Hill / 2015 Carnival Films. The Blacklist Season 3 © 2015 Sony Pictures Television Inc and Open 4 Business Productions LLC. All Rights Reserved.Lucky Man Steffan Hill / 2015 Carnival Films. The Blacklist Season 3 © 2015 Sony Pictures Television Inc and Open 4 Business Productions LLC. All Rights Reserved.Lucky Man Steffan Hill / 2015 Carnival Films. The Blacklist Season 3 © 2015 Sony Pictures Television Inc and Open 4 Business Productions LLC. All Rights Reserved.Lucky Man Steffan Hill / 2015 Carnival Films. The Blacklist Season 3 © 2015 Sony Pictures Television Inc and Open 4 Business Productions LLC. All Rights Reserved.Lucky Man Steffan Hill / 2015 Carnival Films. The Blacklist Season 3 © 2015 Sony Pictures Television Inc and Open 4 Business Productions LLC. All Rights Reserved.Lucky Man Steffan Hill / 2015 Carnival Films. The Blacklist Season 3 © 2015 Sony Pictures Television Inc and Open 4 Business Productions LLC. All Rights Reserved.Lucky Man Steffan Hill / 2015 Carnival Films. The Blacklist Season 3 © 2015 Sony Pictures Television Inc and Open 4 Business Productions LLC. All Rights Reserved.Lucky Man Steffan Hill / 2015 Carnival Films. The Blacklist Season 3 © 2015 Sony Pictures Television Inc and Open 4 Business Productions LLC. All Rights Reserved.Lucky Man Steffan Hill / 2015 Carnival Films. The Blacklist Season 3 © 2015 Sony Pictures Television Inc and Open 4 Business Productions LLC. All Rights Reserved.";
    Enabler.setDevDynamicContent(devDynamicContent);

    if (Enabler.isPageLoaded()) {
        pageLoadedHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
    }
}


function pageLoadedHandler() {
    if (Enabler.isVisible()) {
        adVisibilityHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, adVisibilityHandler);
    }
}


function adVisibilityHandler() {

	var queue = new createjs.LoadQueue(true);
	
	queue.on('complete', handleAllImagesLoaded, this);
	
	queue.loadFile({id:"background", src: dynamicContent.Feed_728x90[0].content['background.jpg'].Url});
	queue.loadFile({id:"bundle_full_a", src: dynamicContent.Feed_728x90[0].content['bundle_full_a.png'].Url});
	queue.loadFile({id:"bundle_full_b", src: dynamicContent.Feed_728x90[0].content['bundle_full_b.png'].Url});
	queue.loadFile({id:"bundle_full_a_shadow", src: dynamicContent.Feed_728x90[0].content['bundle_full_a_shadow.jpg'].Url});
	queue.loadFile({id:"bundle_full_b_shadow", src: dynamicContent.Feed_728x90[0].content['bundle_full_b_shadow.jpg'].Url});
	queue.loadFile({id:"bundle_full", src: dynamicContent.Feed_728x90[0].content['bundle_full.jpg'].Url});
	
	queue.loadFile({id:"bundle", src: dynamicContent.Feed_728x90[0].content['bundle.png'].Url});
	
	queue.loadFile({id:"cta", src: dynamicContent.Feed_728x90[0].content['cta.png'].Url});
	queue.loadFile({id:"sky_logo", src: dynamicContent.Feed_728x90[0].content['sky_logo.png'].Url});
	
	queue.loadFile({id:"headline_1", src: dynamicContent.Feed_728x90[0].content['headline_1.png'].Url});
	queue.loadFile({id:"headline_2", src: dynamicContent.Feed_728x90[0].content['headline_2.png'].Url});
	queue.loadFile({id:"headline_3", src: dynamicContent.Feed_728x90[0].content['headline_3.png'].Url});
	queue.loadFile({id:"headline_4", src: dynamicContent.Feed_728x90[0].content['headline_4.png'].Url});
	queue.loadFile({id:"headline_5", src: dynamicContent.Feed_728x90[0].content['headline_5.png'].Url});
	queue.loadFile({id:"headline_5_legal", src: dynamicContent.Feed_728x90[0].content['headline_5_legal.png'].Url});
	
	function handleAllImagesLoaded() {
		//console.log('All images loaded');
		preloader.fadeOut(function() {
			var assets = new Assets(queue);
            var main = new Main(assets);
        });
		document.getElementById('bg-exit').addEventListener('click', bgExitHandler, false);
	}

}

function bgExitHandler() {
    var exitId = 'Primary Exit';
    var dynamicExitUrl = dynamicContent.Feed_728x90[0].Clicktag.Url;

    if (dynamicExitUrl) {
        Enabler.exitOverride(exitId, dynamicExitUrl);
    } else {
        Enabler.exit(exitId);
    }
}

function Assets(queue) {
	
	var assets = {};
	
	assets.background = {};
	assets.background.img = queue.getResult("background");
	
	assets.bundle_full_a = {};
	assets.bundle_full_a.img = queue.getResult("bundle_full_a");
	
	assets.bundle_full_a_shadow = {};
	assets.bundle_full_a_shadow.img = queue.getResult("bundle_full_a_shadow");
	
	assets.bundle_full_b = {};
	assets.bundle_full_b.img = queue.getResult("bundle_full_b");
	
	assets.bundle_full_b_shadow = {};
	assets.bundle_full_b_shadow.img = queue.getResult("bundle_full_b_shadow");
	
	assets.bundle_full = {};
	assets.bundle_full.img = queue.getResult("bundle_full");
	
	assets.bundle = {};
	assets.bundle.img = queue.getResult("bundle");
	
	assets.cta = {};
	assets.cta.img = queue.getResult("cta");
	
	assets.sky_logo = {};
	assets.sky_logo.img = queue.getResult("sky_logo");
	
	assets.headline_1 = {};
	assets.headline_1.img = queue.getResult("headline_1");
	
	assets.headline_2 = {};
	assets.headline_2.img = queue.getResult("headline_2");
	
	assets.headline_3 = {};
	assets.headline_3.img = queue.getResult("headline_3");
	
	assets.headline_4 = {};
	assets.headline_4.img = queue.getResult("headline_4");
	
	assets.headline_5 = {};
	assets.headline_5.img = queue.getResult("headline_5");
	
	assets.headline_5_legal = {};
	assets.headline_5_legal.img = queue.getResult("headline_5_legal");
	
	return assets;
}

function Main(assets) {

	var stage = new createjs.Stage("main");
	
	//if(assets.legals !== "") {
	//	var legals = new SkyLegals(profile);  
	//}
	
	var legals = new SkyLegals();
	
	var currentFrame = null,
		framePointer = null,
		framesArray = [];
		
	var background = new createjs.Bitmap(assets.background.img);
	
	var bundleContainer = new createjs.Container();
	bundleContainer.name = 'bundleContainer';
	bundleContainer.setBounds(0, 0, stage.canvas.width, stage.canvas.height);
	
	var skyLogo = new createjs.Bitmap(assets.sky_logo.img);
	var logoContainer = new createjs.Container();
	
	logoContainer.setBounds(0, 0, stage.canvas.width, stage.canvas.height);
	logoContainer.name = 'logoContainer';
	logoContainer.addChild(skyLogo);
	
	stage.addChild(background, bundleContainer, logoContainer);
	
	var frame_01 = new Frame01(stage, assets);
	framesArray.push(frame_01);
	
	var frame_02 = new Frame02(stage, assets);
	framesArray.push(frame_02);
	
	var frame_03 = new Frame03(stage, assets);
	framesArray.push(frame_03);
	
	var frame_04 = new Frame04(stage, assets);
	framesArray.push(frame_04);
	
	var frame_05 = new Frame05(stage, assets);
	framesArray.push(frame_05);
	
	createjs.Ticker.addEventListener("tick", stage);
	createjs.Ticker.setInterval(25);
	createjs.Ticker.setFPS(40);
	stage.update();
	
	/*Start Banner*/
	handleNextFrame();  
	
	function handleNextFrame(){
		if (currentFrame === null) {
			framePointer = 0;
		} else if (framePointer !== framesArray.length -1) {
			framePointer++;
		}else {
			createjs.Ticker.removeEventListener("tick");
			return;
		}
		currentFrame = framesArray[framePointer];
		currentFrame.animate(handleNextFrame);
	}
}

function Frame01(stage, assets) {
	
	var headline_1 = new createjs.Bitmap(assets.headline_1.img);
	var bundle_side_a = new createjs.Bitmap(assets.bundle_full_a.img);
	var bundle_side_b = new createjs.Bitmap(assets.bundle_full_b.img);
	var bundle_side_a_shadow = new createjs.Bitmap(assets.bundle_full_a_shadow.img);
	var bundle_side_b_shadow = new createjs.Bitmap(assets.bundle_full_b_shadow.img);
	
	var bundle = new createjs.Container();
	bundle.setBounds(0, 0, bundle_side_a.image.width + bundle_side_b.image.width, bundle_side_a.image.height);
	bundle.regX = bundle.getBounds().width * 0.5;
	bundle.regY = bundle.getBounds().height * 0.5;
	bundle.scaleX = 0.55;
	bundle.scaleY = 0.55;
	bundle.alpha = 1;
	bundle.x = 555;
	bundle.y = -100;
	
	bundle.addChild(bundle_side_a_shadow, bundle_side_b_shadow, bundle_side_a, bundle_side_b);
	bundle_side_a.regX = bundle_side_a.image.width;
	bundle_side_a_shadow.regX = bundle_side_a_shadow.image.width;
	bundle_side_a.x = bundle_side_a.image.width;
	bundle_side_a_shadow.x = bundle_side_a_shadow.image.width;
	bundle_side_b.x = bundle_side_a.image.width;
	bundle_side_b_shadow.x = bundle_side_a.image.width;
	
	bundle_side_a_shadow.alpha = 0;
	bundle_side_b_shadow.alpha = 0;
	
	headline_1.alpha = 0;
	
	this.animate = function(animationComplete) { 
		stage.getChildByName('bundleContainer').addChild(bundle);
		stage.addChild(headline_1);
		
		TweenMax.to(headline_1, 0.5, {delay: 0.2, force3D: true, alpha: 1});
		TweenMax.to(headline_1, 0.3, {delay: 3, force3D: true, alpha: 0});
		
		CustomEase.create("hop", "M0,0 C0.14,0 0.603,0.981 0.61,0.998 0.72,0.81 0.84,0.926 0.859,0.94 0.878,0.954 0.897,0.985 0.911,0.998 0.922,0.994 0.939,0.984 0.954,0.984 0.969,0.984 1,1 1,1");
		
		TweenMax.to(bundle, 0.5, {force3D: true, y: 45, ease:"hop"});
		
		TweenLite.to(bundle_side_a, 3, {delay: 0.2, force3D:true, scaleX:0.5, ease:Linear.easeNone, overwrite: 0 });
    	TweenLite.to(bundle_side_b, 3, {delay: 0.2, force3D:true, scaleX:1.4, ease:Linear.easeNone, overwrite: 0 });
		
		TweenLite.to(bundle_side_a_shadow, 0.5, { force3D:true, alpha: 1, ease:"hop"});
    	TweenLite.to(bundle_side_b_shadow, 0.5, { force3D:true, alpha: 1, ease:"hop"});
		
		TweenLite.to(bundle_side_a_shadow, 3, {delay: 0.2, force3D:true, scaleX:0.5, ease:Linear.easeNone});
    	TweenLite.to(bundle_side_b_shadow, 3, {delay: 0.2, force3D:true, scaleX:1.4, ease:Linear.easeNone});
		
		TweenMax.to(bundle, 3, {delay: 0.2, force3D: true, x: 535, ease:Linear.easeNone});
		
		TweenMax.to(bundle, 0.3, {delay: 3, force3D: true, x: 300, y: 230, scaleX: 2, scaleY: 2.3, ease:Linear.easeNone});
		TweenLite.to(bundle_side_a, 0.3, {delay: 3, force3D:true, scaleX:0, ease:Linear.easeNone, overwrite: 0 });
    	TweenLite.to(bundle_side_b, 0.3, {delay: 3, force3D:true, scaleX:1.7, skewY: -7, ease:Linear.easeNone, overwrite: 0 });
		TweenMax.to(bundle, 0.3, {delay: 3.2, force3D: true, alpha: 0});
		
		TweenLite.delayedCall(3, function(){
			stage.removeChild(headline_1);
			animationComplete();
		});
	};
}

function Frame02(stage, assets) {
	
	var headline_2 = new createjs.Bitmap(assets.headline_2.img);
	var bundle = new createjs.Bitmap(assets.bundle.img);
	
	bundle.regX = bundle.image.width * 0.5;
	bundle.x = 450;
	bundle.alpha = 0;
	
	headline_2.alpha = 0;
	
	this.animate = function(animationComplete) { 
		stage.getChildByName('bundleContainer').addChild(bundle);
		stage.addChild(headline_2);
		
		TweenMax.to(headline_2, 0.3, {delay: 0.2, force3D: true, alpha: 1});
		TweenMax.to(headline_2, 0.3, {delay: 3, force3D: true, alpha: 0});
		
		TweenMax.to(bundle, 0.3, {delay: 0.2, force3D: true, alpha: 1});
		
		TweenLite.delayedCall(3.3, function(){
			stage.removeChild(headline_2);
			animationComplete();
		});
	};
}

function Frame03(stage, assets) {
	
	var headline_3 = new createjs.Bitmap(assets.headline_3.img);
	
	headline_3.alpha = 0;
	
	this.animate = function(animationComplete) { 
		stage.addChild(headline_3);
		
		TweenMax.to(headline_3, 0.3, {force3D: true, alpha: 1});
		TweenMax.to(headline_3, 0.3, {delay: 3, force3D: true, alpha: 0});
		
		TweenMax.to(stage.getChildByName('bundleContainer').getChildAt(1), 0.3, {force3D: true, y : -130, ease:Linear.easeNone});
		
		TweenLite.delayedCall(3.3, function(){
			stage.removeChild(headline_3);
			animationComplete();
		});
	};
}

function Frame04(stage, assets) {
	
	var headline_4 = new createjs.Bitmap(assets.headline_4.img);
	
	headline_4.alpha = 0;
	
	this.animate = function(animationComplete) { 
		stage.addChild(headline_4);
		
		TweenMax.to(headline_4, 0.3, {delay: 0.2, force3D: true, alpha: 1});
		TweenMax.to(headline_4, 0.3, {delay: 3, force3D: true, alpha: 0});
		
		TweenMax.to(stage.getChildByName('bundleContainer').getChildAt(1), 0.3, {force3D: true, y : -238, ease:Linear.easeNone});
		
		TweenLite.delayedCall(3.3, function(){
			stage.removeChild(headline_4);
			stage.getChildByName('bundleContainer').removeAllChildren();
			animationComplete();
		});
	};
}


function Frame05(stage, assets) {
	
	var headline_5 = new Glintable(new createjs.Bitmap(assets.headline_5.img), 0.8, 2);
	var headline_5_legal = new Glintable(new createjs.Bitmap(assets.headline_5_legal.img), 0.8, 2);
	var cta = new Glintable(new createjs.Bitmap(assets.cta.img), 0.8, 2);
	var bundle = new createjs.Bitmap(assets.bundle_full.img);
	
	bundle.alpha = 0;
	
	cta.alpha = 0;
	
	headline_5.alpha = 0;
	headline_5_legal.alpha = 0;
	
	this.animate = function(animationComplete) { 
		stage.getChildByName('bundleContainer').addChild(bundle);
		stage.addChild(headline_5, headline_5_legal, cta);
		
		TweenMax.to(headline_5, 0.3, {delay: 0.2, force3D: true, alpha: 1});
		TweenMax.to(headline_5_legal, 0.3, {delay: 0.2, force3D: true, alpha: 1});
		
		TweenMax.to(bundle, 0.3, {delay: 0.2, force3D: true, alpha: 1});
		
		TweenMax.to(cta, 0.3, {delay: 0.2, force3D: true, alpha: 1});
		
		TweenLite.delayedCall(0.5, function(){
			headline_5.playGlint();
		});
		
		TweenLite.delayedCall(1, function(){
			cta.playGlint();
		});
		
		TweenLite.delayedCall(2, function(){
			animationComplete();
		});
	};
}



function SkyLegals() {
	var legalsContainer = document.getElementById('legalsContainer'),
	legalsButton = document.getElementById('legalsButton'),
	legalsCopy = document.getElementById('legalsCopy'),
	legalsClose = document.getElementById('legalsClose');

	legalsCopy.innerHTML = dynamicContent.Feed_728x90[0].LegalCopy;
	legalsButton.innerHTML = dynamicContent.Feed_728x90[0].LegalButton;

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
	sheenArea.graphics.beginFill("#fff").drawRect(0, 0, 728, 90);
	textField.cache(0,0,728,90);
	sheenArea.filters = [new createjs.AlphaMaskFilter(textField.cacheCanvas)];
	sheenArea.cache(0,0,728,90);
	sheenArea.alpha = sheenAlpha;
					
	var sheenLine = new createjs.Shape();
	sheenLine.graphics.beginLinearGradientFill(['rgba(255,255,255,.4)','rgba(255,255,255,.7)','rgba(255,255,255,.4)'], [0,.5,0], 0, 0 , 15, 0).drawRect(0,0,15,90);
	sheenLine.rotation = 10;
	sheenLine.x = -15;
	sheenLine.y = 0;
	sheenArea.mask = sheenLine;

    container.addChild(textField, sheenArea);

    container.playGlint = function () {
        TweenLite.to(sheenLine, sheenSpeed, {x: 728});
    };

    return container;
}

