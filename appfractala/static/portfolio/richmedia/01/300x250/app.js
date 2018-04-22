
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

    Enabler.setProfileId(10004376);
    var devDynamicContent = {};

    devDynamicContent.Feed_300x250= [{}];
    devDynamicContent.Feed_300x250[0]._id = 0;
    devDynamicContent.Feed_300x250[0].id = 1;
    devDynamicContent.Feed_300x250[0].Default = true;
    devDynamicContent.Feed_300x250[0].ReportingLabel = "ReportingLabel";
    devDynamicContent.Feed_300x250[0].Clicktag = {};
    devDynamicContent.Feed_300x250[0].Clicktag.Url = "https://www.sky.com/";
    devDynamicContent.Feed_300x250[0].StartDate = {};
    devDynamicContent.Feed_300x250[0].StartDate.RawValue = "";
    devDynamicContent.Feed_300x250[0].StartDate.UtcValue = 0;
    devDynamicContent.Feed_300x250[0].EndDate = {};
    devDynamicContent.Feed_300x250[0].EndDate.RawValue = "";
    devDynamicContent.Feed_300x250[0].EndDate.UtcValue = 0;
    
	devDynamicContent.Feed_300x250[0].content = {
		
		"background.jpg":{"Type":"file","Url":"dynamic_assets/background.jpg"},
		"background_sky.jpg":{"Type":"file","Url":"dynamic_assets/background_sky.jpg"},
		
		"bundle.png":{"Type":"file","Url":"dynamic_assets/bundle.png"},
		
		"air_balloon_bridget_jones.png":{"Type":"file","Url":"dynamic_assets/air_balloon_bridget_jones.png"},
		"air_balloon_dory.png":{"Type":"file","Url":"dynamic_assets/air_balloon_dory.png"},
		"air_balloon_fantastic_beasts.png":{"Type":"file","Url":"dynamic_assets/air_balloon_fantastic_beasts.png"},
		"air_balloon_offer.png":{"Type":"file","Url":"dynamic_assets/air_balloon_offer.png"},
		"air_balloon_red_blue.png":{"Type":"file","Url":"dynamic_assets/air_balloon_red_blue.png"},
		"air_balloon_pet.png":{"Type":"file","Url":"dynamic_assets/air_balloon_pet.png"},
		
		"sky_logo_middle.png":{"Type":"file","Url":"dynamic_assets/sky_logo_middle.png"},
		"sky_logo.png":{"Type":"file","Url":"dynamic_assets/sky_logo.png"},
		"cta.png":{"Type":"file","Url":"dynamic_assets/cta.png"},
		
		"headline_1.png":{"Type":"file","Url":"dynamic_assets/headline_1.png"},
		"headline_4.png":{"Type":"file","Url":"dynamic_assets/headline_4.png"},
		"headline_5_legal.png":{"Type":"file","Url":"dynamic_assets/headline_5_legal.png"},
		"headline_5.png":{"Type":"file","Url":"dynamic_assets/headline_5.png"},
		"headline_6_1.png":{"Type":"file","Url":"dynamic_assets/headline_6_1.png"},
		"headline_6_2.png":{"Type":"file","Url":"dynamic_assets/headline_6_2.png"}};
	
    devDynamicContent.Feed_300x250[0].LegalButton = "Click for legals";
    devDynamicContent.Feed_300x250[0].LegalCopy = "TBC";
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
	
	queue.loadFile({id:"background", src: dynamicContent.Feed_300x250[0].content['background_sky.jpg'].Url});
	
	queue.loadFile({id:"bundle", src: dynamicContent.Feed_300x250[0].content['bundle.png'].Url});
	
	queue.loadFile({id:"air_balloon_bridget_jones", src: dynamicContent.Feed_300x250[0].content['air_balloon_bridget_jones.png'].Url});
	queue.loadFile({id:"air_balloon_dory", src: dynamicContent.Feed_300x250[0].content['air_balloon_dory.png'].Url});
	queue.loadFile({id:"air_balloon_fantastic_beasts", src: dynamicContent.Feed_300x250[0].content['air_balloon_fantastic_beasts.png'].Url});
	queue.loadFile({id:"air_balloon_offer", src: dynamicContent.Feed_300x250[0].content['air_balloon_offer.png'].Url});
	queue.loadFile({id:"air_balloon_red_blue", src: dynamicContent.Feed_300x250[0].content['air_balloon_red_blue.png'].Url});
	queue.loadFile({id:"air_balloon_pet", src: dynamicContent.Feed_300x250[0].content['air_balloon_pet.png'].Url});
	
	queue.loadFile({id:"sky_logo_middle", src: dynamicContent.Feed_300x250[0].content['sky_logo_middle.png'].Url});
	queue.loadFile({id:"sky_logo", src: dynamicContent.Feed_300x250[0].content['sky_logo.png'].Url});
	queue.loadFile({id:"cta", src: dynamicContent.Feed_300x250[0].content['cta.png'].Url});
	
	queue.loadFile({id:"headline_1", src: dynamicContent.Feed_300x250[0].content['headline_1.png'].Url});
	queue.loadFile({id:"headline_4", src: dynamicContent.Feed_300x250[0].content['headline_4.png'].Url});
	queue.loadFile({id:"headline_5", src: dynamicContent.Feed_300x250[0].content['headline_5.png'].Url});
	queue.loadFile({id:"headline_5_legal", src: dynamicContent.Feed_300x250[0].content['headline_5_legal.png'].Url});
	queue.loadFile({id:"headline_6_1", src: dynamicContent.Feed_300x250[0].content['headline_6_1.png'].Url});
	queue.loadFile({id:"headline_6_2", src: dynamicContent.Feed_300x250[0].content['headline_6_2.png'].Url});
	
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
    var dynamicExitUrl = dynamicContent.Feed_300x250[0].Clicktag.Url;

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
	
	assets.bundle = {};
	assets.bundle.img = queue.getResult("bundle");
	
	assets.air_balloon_bridget_jones = {};
	assets.air_balloon_bridget_jones.img = queue.getResult("air_balloon_bridget_jones");
	
	assets.air_balloon_dory = {};
	assets.air_balloon_dory.img = queue.getResult("air_balloon_dory");
	
	assets.air_balloon_fantastic_beasts = {};
	assets.air_balloon_fantastic_beasts.img = queue.getResult("air_balloon_fantastic_beasts");
	
	assets.air_balloon_offer = {};
	assets.air_balloon_offer.img = queue.getResult("air_balloon_offer");
	
	assets.air_balloon_red_blue = {};
	assets.air_balloon_red_blue.img = queue.getResult("air_balloon_red_blue");
	
	assets.air_balloon_pet = {};
	assets.air_balloon_pet.img = queue.getResult("air_balloon_pet");
	
	assets.sky_logo_middle = {};
	assets.sky_logo_middle.img = queue.getResult("sky_logo_middle");
	
	assets.sky_logo = {};
	assets.sky_logo.img = queue.getResult("sky_logo");
	
	assets.cta = {};
	assets.cta.img = queue.getResult("cta");
	
	assets.headline_1 = {};
	assets.headline_1.img = queue.getResult("headline_1");
	
	assets.headline_4 = {};
	assets.headline_4.img = queue.getResult("headline_4");
	
	assets.headline_5 = {};
	assets.headline_5.img = queue.getResult("headline_5");
	
	assets.headline_5_legal = {};
	assets.headline_5_legal.img = queue.getResult("headline_5_legal");
	
	assets.headline_6_1 = {};
	assets.headline_6_1.img = queue.getResult("headline_6_1");
	
	assets.headline_6_2 = {};
	assets.headline_6_2.img = queue.getResult("headline_6_2");
	
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
	background.name = 'background';
	background.scaleX = 0.8;
	background.scaleY = 0.8;
	background.y = -30;
	background.x = -50;
	
	var backgroundContainer = new createjs.Container();
	backgroundContainer.name = 'backgroundContainer';
	//backgroundContainer.x = 0;
	//backgroundContainer.y = -20;
	
	backgroundContainer.setBounds(0, 0, background.image.width * 0.8, background.image.height * 0.8);
	
	backgroundContainer.addChild(background);
	
	var balloonContainer = new createjs.Container();
	balloonContainer.name = 'balloonContainer';
	balloonContainer.setBounds(0, 0, stage.canvas.width, stage.canvas.height);
	
	var skyLogo = new createjs.Bitmap(assets.sky_logo.img);
	var logoContainer = new createjs.Container();
	
	logoContainer.setBounds(0, 0, stage.canvas.width, stage.canvas.height);
	logoContainer.name = 'logoContainer';
	logoContainer.alpha = 0;
	logoContainer.addChild(skyLogo);
	
	stage.addChild(backgroundContainer, balloonContainer, logoContainer);
	
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
	
	var frame_06 = new Frame06(stage, assets);
	framesArray.push(frame_06);
	
	createjs.Ticker.addEventListener("tick", stage);
	createjs.MotionGuidePlugin.install();
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
			createjs.Ticker.removeEventListener("tick", stage);
			return;
		}
		currentFrame = framesArray[framePointer];
		currentFrame.animate(handleNextFrame);
	}
}

function Frame01(stage, assets) {
	
	var headline_1 = new Glintable(new createjs.Bitmap(assets.headline_1.img), 0.6, 2);
	var skyLogoMiddle = new createjs.Bitmap(assets.sky_logo_middle.img);
	var airBalloon = new createjs.Bitmap(assets.air_balloon_dory.img);
	
	airBalloon.regX = airBalloon.image.width * 0.5;
	airBalloon.regY = airBalloon.image.height * 0.5;
	airBalloon.x = airBalloon.image.width * 0.5;
	airBalloon.y = airBalloon.image.height * 0.5;
	airBalloon.alpha = 0;
	
	var airBalloonContainer = new createjs.Container();
	airBalloonContainer.setBounds(0, 0, airBalloon.image.width, airBalloon.image.height);
	airBalloonContainer.addChild(airBalloon);
	airBalloonContainer.regX = airBalloon.image.width * 0.5 + 10;
	airBalloonContainer.regY = airBalloon.image.height * 0.5 - 30;
	airBalloonContainer.x = 400;
	airBalloonContainer.y = 100;
	
	var balloonContainer = new createjs.Container();
	balloonContainer.addChild(airBalloonContainer);
	balloonContainer.setBounds(0, 0, stage.canvas.width, stage.canvas.height);
	
	headline_1.alpha = 0;
	skyLogoMiddle.alpha = 0;
	//var path = new createjs.Shape();
	//path.graphics.beginStroke("#ff00ff").moveTo(stage.canvas.width, 100).quadraticCurveTo(280,70,150,70).quadraticCurveTo(150,70,-airBalloon.image.width * 0.5,70);
	//balloonContainer.addChild(path);
	
	this.animate = function(animationComplete) { 
		stage.getChildByName('balloonContainer').addChild(balloonContainer);
		stage.addChild(headline_1, skyLogoMiddle);
		
		createjs.Tween.get(headline_1).wait(1500).to({alpha: 1}, 500).call(function(){headline_1.playGlint();}).wait(1250).to({alpha: 0}, 750);
		createjs.Tween.get(skyLogoMiddle).to({alpha: 1}, 500).wait(2750).to({alpha: 0}, 750);
		
		//createjs.Tween.get(balloonContainer).wait(3000).to({alpha: 0, x: 0 - stage.canvas.width}, 750);
		
		createjs.Tween.get(airBalloon)
			.to({alpha: 1},500)
			.to({rotation: -2, y: airBalloon.image.height * 0.5 + 5},1000)
			.to({rotation: 2, y: airBalloon.image.height * 0.5 - 5},1000)
			.to({rotation: -2, y: airBalloon.image.height * 0.5 + 5},1000)
			.to({rotation: 2, y: airBalloon.image.height * 0.5 - 5},1000)
			.to({rotation: -2, y: airBalloon.image.height * 0.5 + 5, x: airBalloon.image.width * 0.5 - 5},1000)
			.to({rotation: 2, y: airBalloon.image.height * 0.5 - 5},1000)
			.to({rotation: -2},1000)
			.to({rotation: 2},1000);
			
		createjs.Tween.get(airBalloonContainer).wait(100).to({scaleX: 0.7, scaleY: 0.7, guide:{ path:[400, 100, 280,70,150,70, 150,70,-airBalloon.image.width * 0.5,70] }}, 2500);
		
		createjs.Tween.get(stage.getChildByName('backgroundContainer')).to({x: - stage.canvas.width * 0.7}, 18750, createjs.Ease.linear).to({x: - stage.canvas.width * 0.8}, 10000, createjs.Ease.linear);
		//3000 + 3500 + 4000 + 5000 + 3250 + 2750 = 
		createjs.Tween.get(stage.getChildByName('backgroundContainer').getChildByName('background'))
			.wait(15000).to({x: -200}, 3500, createjs.Ease.sineIn) // frame 3 - frame 4 - 3500
			.wait(2500).to({y: -150}, 750, createjs.Ease.linear) //frame 4 - frame 5 - 3500
			.wait(3000).to({y: -20}, 750, createjs.Ease.linear); // frame 5 - frame 6 - 4000
		
		createjs.Tween.get().wait(3000).call(function(){
			animationComplete();
		});
	};
}

function Frame02(stage, assets) {
	
	var airBalloon = new createjs.Bitmap(assets.air_balloon_bridget_jones.img);
	
	var balloonContainer = new createjs.Container();
	balloonContainer.addChild(airBalloon);
	balloonContainer.setBounds(0, 0, stage.canvas.width, stage.canvas.height);
	
	airBalloon.regX = airBalloon.image.width * 0.5;
	airBalloon.regY = airBalloon.image.height * 0.5;
	airBalloon.scaleX = 0.75;
	airBalloon.scaleY = 0.75;
	airBalloon.x = balloonContainer.getBounds().width + airBalloon.image.width * 0.5;
	airBalloon.y = balloonContainer.getBounds().height * 0.5;
	airBalloon.rotation = 10;
	
	this.animate = function(animationComplete) { 
		stage.getChildByName('balloonContainer').addChild(balloonContainer);
		
		createjs.Tween.get(airBalloon).to({rotation: -10, scaleX: 0.5, scaleY: 0.5, x: 0 - airBalloon.image.width * 0.5}, 6000, createjs.Ease.linear);
		
		createjs.Tween.get(stage.getChildByName('logoContainer')).wait(250).to({alpha: 1}, 750);
		
		createjs.Tween.get().wait(3500).call(function(){
			animationComplete();
		});
	};
}

function Frame03(stage, assets) {
	
	var airBalloon = new createjs.Bitmap(assets.air_balloon_offer.img);
	
	var balloonContainer = new createjs.Container();
	balloonContainer.addChild(airBalloon);
	balloonContainer.setBounds(0, 0, stage.canvas.width, stage.canvas.height);
	
	balloonContainer.regX = balloonContainer.getBounds().width * 0.5;
	balloonContainer.regY = balloonContainer.getBounds().height * 0.5;
	
	balloonContainer.x = balloonContainer.getBounds().width + airBalloon.image.width * 1.5 * 0.5;
	balloonContainer.y = balloonContainer.getBounds().height * 0.5 + 50;
	
	airBalloon.regX = airBalloon.image.width * 0.5;
	airBalloon.regY = airBalloon.image.height * 0.5;
	airBalloon.scaleX = 1.5;
	airBalloon.scaleY = 1.5;
	airBalloon.x = balloonContainer.getBounds().width * 0.5;
	airBalloon.y = balloonContainer.getBounds().height * 0.5;
	//airBalloon.x = balloonContainer.getBounds().width + airBalloon.image.width * 1.5 * 0.5;
	//airBalloon.y = balloonContainer.getBounds().height * 0.5 + 50;
	airBalloon.rotation = 0;
	
	this.animate = function(animationComplete) { 
		stage.getChildByName('balloonContainer').addChild(balloonContainer);
		
		createjs.Tween.get(balloonContainer).to({x: balloonContainer.getBounds().width * 0.5 + 50, y: balloonContainer.getBounds().height * 0.5 + 30}, 4000, createjs.Ease.sineOut).to({x: balloonContainer.getBounds().width * 0.5 - 50, y: balloonContainer.getBounds().height * 0.5}, 4000, createjs.Ease.sineInOut).to({x: 0 - balloonContainer.getBounds().width * 0.5 - 50, y: balloonContainer.getBounds().height * 0.5 - 30}, 4000, createjs.Ease.sineIn)
		
		createjs.Tween.get(airBalloon).to({rotation: -3, scaleX: 1.1, scaleY: 1.1}, 4000, createjs.Ease.linear).to({rotation: 2, scaleX: 0.7, scaleY: 0.7}, 4000, createjs.Ease.linear).to({rotation: -2, scaleX: 0.3, scaleY: 0.3}, 4000, createjs.Ease.linear);
		
		createjs.Tween.get().wait(9000).call(function(){
			animationComplete();
		});
	};
}

function Frame04(stage, assets) {
	
	var headline_4 = new Glintable(new createjs.Bitmap(assets.headline_4.img), 0.8, 2);
	var airBalloon_1 = new createjs.Bitmap(assets.air_balloon_red_blue.img);
	var airBalloon_2 = new createjs.Bitmap(assets.air_balloon_fantastic_beasts.img);
	
	var balloonContainer = new createjs.Container();
	balloonContainer.addChild(airBalloon_1, airBalloon_2);
	balloonContainer.setBounds(0, 0, stage.canvas.width, stage.canvas.height);
	
	airBalloon_2.regX = airBalloon_2.image.width * 0.5;
	airBalloon_2.regY = airBalloon_2.image.height * 0.5;
	airBalloon_2.scaleX = 0.8;
	airBalloon_2.scaleY = 0.8;
	airBalloon_2.x = 130;
	airBalloon_2.y = 160;
	
	airBalloon_1.regX = airBalloon_1.image.width * 0.5;
	airBalloon_1.regY = airBalloon_1.image.height * 0.5;
	airBalloon_1.scaleX = 0.55;
	airBalloon_1.scaleY = 0.55;
	airBalloon_1.x = 270;
	airBalloon_1.y = 90;
	
	headline_4.alpha = 0;
	
	balloonContainer.x = stage.canvas.width;
	balloonContainer.y = 0;
	
	this.animate = function(animationComplete) { 
		stage.getChildByName('balloonContainer').addChild(balloonContainer);
		stage.addChild(headline_4);
		
		createjs.Tween.get(balloonContainer).to({x: 0}, 3000, createjs.Ease.linear).to({x: -10}, 2500).to({y: 0 - stage.canvas.height}, 750);
	
		createjs.Tween.get(airBalloon_2).to({rotation: 1}, 2000).to({rotation: -1}, 2000).to({rotation: 1}, 2000).to({rotation: -1}, 2000).to({rotation: 1}, 2000);
		
		createjs.Tween.get(airBalloon_1).to({rotation: 1, scaleX: 0.6, scaleY: 0.6, x: 255}, 6000);
		
		createjs.Tween.get(headline_4).wait(3000).to({alpha: 1}, 500).call(function(){headline_4.playGlint();}).wait(2000).to({y: 0 - stage.canvas.height}, 750);
		
		createjs.Tween.get().wait(6000).call(function(){
			//stage.removeChild(headline_4);
			animationComplete();
		});
	};
}


function Frame05(stage, assets) {
	
	var headline_5 = new Glintable(new createjs.Bitmap(assets.headline_5.img), 0.8, 2);
	var headline_5_legal = new createjs.Bitmap(assets.headline_5_legal.img);
	var bundle = new createjs.Bitmap(assets.bundle.img);
	
	headline_5.alpha = 0;
	headline_5_legal.alpha = 0;
	
	bundle.alpha = 0;
	bundle.y = stage.canvas.height;
	
	this.animate = function(animationComplete) { 
		stage.addChild(headline_5, headline_5_legal, bundle);
		
		createjs.Tween.get(bundle).to({alpha: 1, y: 0}, 750, createjs.Ease.cubicOut).wait(2500).to({alpha: 0, y: stage.canvas.height}, 750);
		
		createjs.Tween.get(headline_5).wait(750).to({alpha: 1}, 500).call(function(){headline_5.playGlint();}).wait(2000).to({alpha: 0, y: stage.canvas.height}, 750);
		createjs.Tween.get(headline_5_legal).wait(750).to({alpha: 1}, 500).wait(2000).to({alpha: 0, y: stage.canvas.height}, 750);
		
		createjs.Tween.get().wait(3250).call(function(){
			animationComplete();
		});
	};
}

function Frame06(stage, assets) {
	
	var headline_6_1 = new Glintable(new createjs.Bitmap(assets.headline_6_1.img), 0.6, 3);
	var headline_6_2 = new Glintable(new createjs.Bitmap(assets.headline_6_2.img), 0.8, 3);
	var cta = new Glintable(new createjs.Bitmap(assets.cta.img), 0.5, 3);
	
	var airBalloon_1 = new createjs.Bitmap(assets.air_balloon_red_blue.img);
	var airBalloon_2 = new createjs.Bitmap(assets.air_balloon_pet.img);
	
	var balloonContainer = new createjs.Container();
	balloonContainer.addChild(airBalloon_1, airBalloon_2);
	balloonContainer.setBounds(0, 0, stage.canvas.width, stage.canvas.height);
	
	airBalloon_1.regX = airBalloon_1.image.width * 0.5;
	airBalloon_1.regY = airBalloon_1.image.height * 0.5;
	airBalloon_1.scaleX = 0.4;
	airBalloon_1.scaleY = 0.4;
	airBalloon_1.x = 265;
	airBalloon_1.y = 15;
	
	airBalloon_2.regX = airBalloon_2.image.width * 0.5;
	airBalloon_2.regY = airBalloon_2.image.height * 0.5;
	airBalloon_2.scaleX = 0.90;
	airBalloon_2.scaleY = 0.90;
	airBalloon_2.x = 220;
	airBalloon_2.y = 115;
	
	headline_6_1.alpha = 0;
	headline_6_2.alpha = 0;
	cta.alpha = 0;
	
	balloonContainer.y = 0 - stage.canvas.height;
	
	
	this.animate = function(animationComplete) { 
		stage.getChildByName('balloonContainer').addChild(balloonContainer);
		stage.addChild(headline_6_1, headline_6_2, cta);
		
		createjs.Tween.get(airBalloon_1).to({rotation: 1, scaleX: 0.45, scaleY: 0.45, x: 275}, 4000);
		
		createjs.Tween.get(airBalloon_2).to({rotation: 2, scaleX: 1, scaleY: 1}, 2750);
		
		createjs.Tween.get(balloonContainer).to({y: 0}, 750);
		
		createjs.Tween.get(headline_6_1).wait(750).to({alpha: 1}, 500).wait(250).call(function() { headline_6_1.playGlint(); });
		createjs.Tween.get(headline_6_2).wait(1000).to({alpha: 1}, 500).call(function() { headline_6_2.playGlint(); });
		createjs.Tween.get(cta).wait(1250).to({alpha: 1}, 500).call(function() { cta.playGlint(); });
		
		createjs.Tween.get().wait(2750).call(function(){
			animationComplete();
		});
	};
}



function SkyLegals() {
	var legalsContainer = document.getElementById('legalsContainer'),
	legalsButton = document.getElementById('legalsButton'),
	legalsCopy = document.getElementById('legalsCopy'),
	legalsClose = document.getElementById('legalsClose');

	legalsCopy.innerHTML = dynamicContent.Feed_300x250[0].LegalCopy;
	legalsButton.innerHTML = dynamicContent.Feed_300x250[0].LegalButton;

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
	sheenArea.graphics.beginFill("#fff").drawRect(0, 0, 300, 250);
	textField.cache(0,0,300,250);
	sheenArea.filters = [new createjs.AlphaMaskFilter(textField.cacheCanvas)];
	sheenArea.cache(0,0,300,250);
	sheenArea.alpha = sheenAlpha;
					
	var sheenLine = new createjs.Shape();
	sheenLine.graphics.beginLinearGradientFill(['rgba(255,255,255,.4)','rgba(255,255,255,.7)','rgba(255,255,255,.4)'], [0,.5,0], 0, 0 , 15, 0).drawRect(0,0,15,250);
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

