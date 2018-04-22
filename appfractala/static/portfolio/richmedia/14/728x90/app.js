var preloader;

window.onload = function() {
    
    fontLoader.loadFonts();
        
    preloader = new PreloaderAnimation();
}

var fontLoader = new FontLoader(["SkyTextRegular", "SkyTextMedium", "SkyTextBold"], {
    "fontsLoaded": function(error) {
        if (error === null) {
            if (Enabler.isInitialized()) {
                enablerInitHandler();
            } else {
                Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
            }
        }
    }
});

/*Standard Enabler Init Handler*/
function enablerInitHandler() {
        
    Enabler.setProfileId(1053294);
    var devDynamicContent = {};

	devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90= [{}];
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0]._id = 0;
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].id = 1;
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].reportingLabel = "TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].defaultValue = true;
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].startDate = {};
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].startDate.RawValue = "";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].startDate.UtcValue = 0;
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].endDate = {};
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].endDate.RawValue = "";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].endDate.UtcValue = 0;
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].startFrameText1 = "Upgrade to";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].startFrameText2 = "The home of the$Barclays Premier League";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].messageFrameText1 = "116 exclusive live matches";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].messageFrameLockup = {};
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].messageFrameLockup.Type = "file";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].messageFrameLockup.Url = "https://s0.2mdn.net/ads/richmedia/studio/37453903/36187302_20150720025920646_728x90_messageFrameLockup.png";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].fixtureFrameLockup = {};
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].fixtureFrameLockup.Type = "file";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].fixtureFrameLockup.Url = "https://s0.2mdn.net/ads/richmedia/studio/37669849/36187302_20150804042734880_728x90_fixtureFrameLockup.png";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].endFrameText = "\u20AC20 sports$for 1 year";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].ctaImage = {};
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].ctaImage.Type = "file";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].ctaImage.Url = "https://s0.2mdn.net/ads/richmedia/studio/37670011/36187302_20150804034308532_728x90_cta.png";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].legals = "<strong>Sky Fibre areas only. \\u00A36.95 router delivery charge.<\/strong>Set-up fees may apply. After 12 months, the then standard price will apply, currently \\u00A310pm plus line rental (\\u00A316.40pm). 25GB monthly usage allowance. Free TV offer: Free Samsung 32\\u201D TV for new Sky TV customers joining with any Bundle (from \\u00A320pm).One reward per household, subject to stock availability. Offer ends 13th August 2015. 12 month min & further terms apply.";
    
	Enabler.setDevDynamicContent(devDynamicContent);
    
    if (Enabler.isPageLoaded()) {
        pageLoadedHandler();
    } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
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

function adVisibilityHandler() {
            
    /*Get the profile for the banner*/
    var profile = new Profile();
    profile.startFrameText1 = dynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].startFrameText1;
    profile.startFrameText2 = dynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].startFrameText2;
    profile.messageFrameText1 = dynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].messageFrameText1;
	
    profile.messageFrameLockup.url = dynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].messageFrameLockup.Url;
    profile.fixtureFrameLockup.url = dynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].fixtureFrameLockup.Url;
    
    profile.endFrameText = dynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].endFrameText;
    profile.ctaImage.url = dynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].ctaImage.Url;
    profile.legals = dynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_728x90[0].legals;
        
    /*Polite load allt he required images*/
    var batchImageLoader = new BatchImageLoader(profile, function() {
        preloader.fadeOut(function() {
            /*Once the polite load is complete start the setup of the main banner*/
            var main = new Main(profile);
        });
    });
    
    document.getElementById('bg-exit').addEventListener('click', bgExitHandler, false);
}

/*Standard Exit Handler*/
function bgExitHandler(e) {
    Enabler.exit('Primary Exit');
}
(function (window) {
        
    function Main(profile) {    
           
        /*Declaration Of Variables*/
        var stage = new createjs.Stage("main"),
            updateStage = true;
                
        if(profile.legals !== "") {
            var legals = new SkyLegals(profile);  
        }
        
        var currentFrame = null,
            framePointer = null,
            framesArray = [];
                
        var channelLogo = new createjs.Bitmap(profile.channelLogo.img);
		channelLogo.y = 33;
		channelLogo.alpha = 0;
		
        var smokeAnimation = new SmokeAnimation(stage, profile);
		                
        var startFrame = new StartFrame(stage, profile, channelLogo, smokeAnimation);
        framesArray.push(startFrame);
            
        var messageFrame = new MessageFrame(stage, profile, channelLogo);
        framesArray.push(messageFrame);
        
        var fixtureFrame = new FixtureFrame(stage, profile);
        framesArray.push(fixtureFrame);
        
        var endFrame = new EndFrame(stage, profile);
        framesArray.push(endFrame);
        
        /*Setup Animation Ticker to only run when required*/
        TweenLite.ticker.addEventListener("tick", tick, stage);
        
        function tick() {
           if(updateStage) {
                stage.update();  
           }
        }
        
        /*Start Banner*/
        var startTime = new Date().getTime();
        handleNextFrame();  
        
        function handleNextFrame(){
            if (currentFrame == null) {
                framePointer = 0;
            } else if (framePointer !== framesArray.length -1) {
                framePointer++;
            }else {
                TweenLite.ticker.removeEventListener("tick", tick);
                console.log((new Date().getTime() - startTime) / 1000);
                return;
            }
        
            currentFrame = framesArray[framePointer];
            currentFrame.animate(handleNextFrame);
        }
        
    }
    
    window.Main = Main;

})(window);

(function (window) {
        
    function Profile() {    
        
        var basePath = "assets/",
            profile = {};
            
        /*Images*/
        profile.background = {};
		profile.background.url = basePath + "background.jpg";
        profile.channelLogo = {};
        profile.channelLogo.url = basePath + "channelLogo.png";
        profile.trophy = {};
        profile.trophy.url = basePath + "trophy.png";
        profile.glassmark = {};
        profile.glassmark.url = basePath + "glassmark.png";  
        profile.smoke = {};
        profile.smoke.url = basePath + "smoke.png";
        
        profile.messageFrameLockup = {};
        profile.fixtureFrameLockup = {};
        
        profile.ctaImage = {};

        profile.legals = "";
        profile.legalShow = "Click for Legals";
        profile.legalHide = "Click to hide Legals";
  
        return profile;
    }
    
    window.Profile = Profile;

})(window);

(function (window) {
        
    function BitmapCta(image) {    
        var container = new createjs.Container(),
            glint = new createjs.Shape(),
            ctaImage = new createjs.Bitmap(image.img),
            maskArea = new createjs.Shape();
                
        ctaImage.x -= Math.floor(ctaImage.image.width * 0.5);
        ctaImage.y -= Math.floor(ctaImage.image.height * 0.5);
        ctaImage.cache(0,0, ctaImage.image.width, ctaImage.image.height);
        
        maskArea.graphics.beginFill('#000000').drawRoundRect(0,0,ctaImage.image.width,ctaImage.image.height,5,5,5,5);
        maskArea.x -= Math.floor(ctaImage.image.width * 0.5);
        maskArea.y -= Math.floor(ctaImage.image.height * 0.5);
            
        glint.graphics.beginLinearGradientFill(["rgba(255,220,252,0)", "rgba(255,255,255,0.6)", "rgba(255,220,252,0)"], [0, 0.9, 1], -50, 0, 15, 30).drawRect(-75,-50,150,100);  
        glint.x = 0 - ctaImage.image.width * 0.5 - 50;
        glint.mask = maskArea;
        
        container.addChild(ctaImage, glint);

        container.playGlint = function() {
            TweenLite.to(glint, 1, { x: ctaImage.image.width * 0.5 + 75, ease:Quad.easeOut } );
            TweenLite.delayedCall(1, function() {
                glint.x = 0 - ctaImage.image.width * 0.5 - 50;
            });
        }
        
        return container;
    }
    
    window.BitmapCta = BitmapCta;

})(window);

(function (window) {
        
    function SmokeAnimation(stage, profile) {    
        var container = new createjs.Container(),    
            smoke1 = new SmokeAsset(profile),
            smoke2 = new SmokeAsset(profile),
            smoke3 = new SmokeAsset(profile),
            smoke4 = new SmokeAsset(profile);
                
        container.addChild(smoke4, smoke3, smoke2, smoke1);
        
        this.setInitialValues = function() {
            smoke1.x = -200;
            smoke1.y = 90;
            smoke1.scaleX = 0.31;
            smoke1.scaleY = 0.31;
            smoke1.rotation = 26.7;
            smoke1.alpha = 0;

            smoke2.x = -200;
            smoke2.y = 90;
            smoke2.scaleX = 0.40;
            smoke2.scaleY = 0.40;
            smoke2.rotation = 71.7;
            smoke2.alpha = 0;

            smoke3.x = -200;
            smoke3.y = 90;
            smoke3.scaleX = 0.13;
            smoke3.scaleY = 0.13;
            smoke3.rotation = 141.4;
            smoke3.alpha = 0;

            smoke4.x = -200;
            smoke4.y = 90;
            smoke4.scaleX = 0.40;
            smoke4.scaleY = 0.40;
            smoke4.rotation = 6.4;
            smoke4.alpha = 0;
        }
        
        this.animate = function() {
            
            var speed = 0.75;
            smoke1.alpha = 0.68;
			smoke2.alpha = 0.68;
			
            TweenMax.to(smoke1, 4.4 * speed, { delay:0.5 * speed, scaleX: 0.40, scaleY: 0.50, x:800, y: -100, rotation:51.9, ease: Linear.easeNone });
            TweenMax.to(smoke1, 2.5 * speed, { delay:0.5 * speed, alpha: 1, ease: Quad.easeOut });
            TweenMax.to(smoke1, 1.9 * speed, { delay:3 * speed, alpha: 0, ease: Quad.easeIn });

            TweenMax.to(smoke2, 4.7 * speed, { delay:0.2 * speed, scaleX: 0.62, scaleY: 0.77, x: 750, y: -200, rotation:93.1, ease: Linear.easeNone });
            TweenMax.to(smoke2, 3.2 * speed, { delay:0.2 * speed, alpha: 1, ease: Quad.easeOut });
            TweenMax.to(smoke2, 1.5 * speed, { delay:3.4 * speed, alpha: 0, ease: Quad.easeIn });

            TweenMax.to(smoke3, 4.7 * speed, { delay:0.4 * speed, scaleX: 0.57, scaleY: 0.66, x:958, y: 71, rotation:163, ease: Linear.easeNone });
            TweenMax.to(smoke3, 3.1 * speed, { delay:0.4 * speed, alpha: 1, ease: Quad.easeOut });
            TweenMax.to(smoke3, 1.6 * speed, { delay:3.5 * speed, alpha: 0, ease: Quad.easeIn });

            TweenMax.to(smoke4, 4.7 * speed, { delay:0 * speed, scaleX: 0.72, scaleY: 0.63, x:952, y: 66, rotation:28.5, ease: Linear.easeNone });
            TweenMax.to(smoke4, 2.8 * speed, { delay:0 * speed, alpha: 1, ease: Quad.easeOut });
            TweenMax.to(smoke4, 1.9 * speed, { delay:2.8 * speed, alpha: 0, ease: Quad.easeIn });
        }
        
        this.setInitialValues();
        
        stage.addChild(container); 
    }
    
    window.SmokeAnimation = SmokeAnimation;

})(window);
(function (window) {
        
    function SmokeAsset(profile) {    
        var container = new createjs.Container(),
            asset = new createjs.Bitmap(profile.smoke.img);
        
        asset.x = 0 - asset.image.width;
        asset.y = 0 - asset.image.height;
        asset.scaleX = 2;
        asset.scaleY = 2;
        container.addChild(asset);
        
        return container;
    }
    
    window.SmokeAsset = SmokeAsset;

})(window);
(function (window) {
        
    function TrophyAsset(profile) {    
        var container = new createjs.Container(),
            asset = new createjs.Bitmap(profile.trophy.img),
            smoke1 = new SmokeAsset(profile),
            smoke2 = new SmokeAsset(profile),
            shapeMask = new createjs.Shape();
        
        shapeMask.graphics.dr(0-asset.image.width, 0-asset.image.height, asset.image.width*2, asset.image.height*2);
        
        smoke1.scaleX = 0.20;
        smoke1.scaleY = 0.20;
        smoke1.x = asset.image.width + 10;
        smoke1.y = asset.image.height - 20;
        smoke1.alpha = 0.37;
        //smoke1.rotation = 45;
        smoke1.mask = shapeMask;
        
        smoke2.scaleX = 0.18;
        smoke2.scaleY = 0.18;
        smoke2.x = 150;
        smoke2.y = 150;
        //smoke2.rotation = 180;
        smoke2.mask = shapeMask;
        
        container.addChild(smoke1, smoke2, asset);
        
        
        container.animate = function() {
            TweenMax.to(smoke2, 40, { rotation: 360, repeat: -1, ease:Linear.easeNone });
            TweenMax.to(smoke1, 10, { scaleX: 0.22, scaleY: 0.22, yoyo: true, repeat: -1,  ease:Linear.easeNone });
            TweenMax.to(smoke1, 50, { rotation: 360, repeat: -1, ease:Linear.easeNone });
        }
        
        container.width = asset.image.width;
        container.height = asset.image.height;
        
        return container;
    }
    
    window.TrophyAsset = TrophyAsset;

})(window);

(function (window) {
        
    function EndFrame(stage, profile) {    
        
        var gradient = new SkyGradient(["#0a3075", "#0a3075", "#ed1b36", "#ed1b36"], [0, 0.1, 0.88, 1], [[0,0], [1,0]]);
        var txt = new SkyText(profile.endFrameText, "20px skyTextBold", 300, 22, "center", gradient);
        var cta = new BitmapCta(profile.ctaImage);
        
		txt.x = 130;
        txt.y = 20;
        txt.alpha = 0;
        
        cta.x = 490;
        cta.y = stage.canvas.height * 0.5;
        cta.alpha = 0;
                
        this.animate = function(animationComplete) {
            stage.addChild(txt, cta);
                            
            TweenLite.to(txt, 0.5, { alpha:1, ease:Quad.easeOut });
            TweenLite.to(cta, 0.5, { alpha:1, ease:Quad.easeOut, onComplete:function(){cta.playGlint();}});
            
            TweenLite.delayedCall(2.5, function(){
                animationComplete();
            });
        }
    }
 
    window.EndFrame = EndFrame;

})(window);

(function (window) {
        
    function FixtureFrame(stage, profile) {    
         
        var fixtureFrame = new createjs.Bitmap(profile.fixtureFrameLockup.img);
        
		fixtureFrame.y = stage.canvas.height + fixtureFrame.image.height;
        
        this.animate = function(animationComplete) {
			stage.addChild(fixtureFrame);
			
            TweenLite.to(fixtureFrame, 0.8, { y: 0,  ease:Quad.easeIn });
            
            TweenLite.to(fixtureFrame, 0.5, { delay: 3.5, alpha: 0,  ease:Quad.easeOut});
            
            TweenLite.delayedCall(4, function(){
                stage.removeChild(fixtureFrame); 
                animationComplete();
            })
        }
    }
 
    window.FixtureFrame = FixtureFrame;

})(window);

(function (window) {
        
    function MessageFrame(stage, profile, channelLogo) {    
        
        var txt1 = new SkyText(profile.messageFrameText1, "20px skyTextRegular", 300, 22, "center"); 
        var messageFrame = new createjs.Bitmap(profile.messageFrameLockup.img);
        
        txt1.x = 130;
		txt1.y = stage.canvas.height * 0.5 - 12;
        txt1.alpha = 0;
        
		messageFrame.x = 430;
		messageFrame.y = 7;
        messageFrame.alpha = 0;
        
        this.animate = function(animationComplete) {
			
			channelLogo.alpha = 0;
			channelLogo.x = 6;
			
            stage.addChildAt(messageFrame, txt1, channelLogo, stage.getNumChildren() - 1);
			
            TweenLite.to(channelLogo, 1, { alpha: 1, ease:Quad.easeOut});
            TweenLite.to(txt1, 1, { alpha: 1, ease:Quad.easeOut});
            TweenLite.to(messageFrame, 1, { alpha: 1, ease:Quad.easeOut});
            
            TweenLite.to(txt1, 0.5, { delay: 3.8, y: 0 - stage.canvas.height, ease:Quad.easeIn});
            TweenLite.to(messageFrame, 0.5, { delay: 3.8, y: 0 - messageFrame.image.height, ease:Quad.easeIn});
            
            TweenLite.delayedCall(4.3, function(){
                stage.removeChild(txt1, messageFrame); 
                animationComplete();
            })
        }
    }
 
    window.MessageFrame = MessageFrame;

})(window);

(function (window) {
        
    function StartFrame(stage, profile, channelLogo, smokeAnimation) {    
        
        var txt1 = new SkyText(profile.startFrameText1, "20px skyTextRegular", null, null, "left"); 
        var gradient = new SkyGradient(["#0a3075", "#0a3075", "#ed1b36", "#ed1b36"], [0, 0.1, 0.88, 1], [[0,0], [1,0]]);
        var txt2 = new SkyText(profile.startFrameText2, "20px skyTextBold", 280, 22, "center", gradient);
		
		var background = new createjs.Bitmap(profile.background.img);
		var trophy = new TrophyAsset(profile);
		
		background.alpha = 0;
			
		trophy.x = stage.canvas.width - 5;
          
		txt1.x = 33;             
        txt1.y = 32;
        txt1.alpha = 0;
        
		txt2.x = 260;
        txt2.y = 20;
        txt2.alpha = 0;
		
        this.animate = function(animationComplete) {
			
			channelLogo.alpha = 0;
			channelLogo.x = 140;
			 
            stage.addChildAt(background, trophy, channelLogo, txt1, txt2, stage.getNumChildren() - 1);
			
			trophy.animate();
			
			TweenLite.to(trophy, 0.8, { x: stage.canvas.width - trophy.width, ease:Quad.easeOut });
			TweenLite.to(background, 0.5, { alpha: 1, ease:Quad.easeOut}); 
			
            TweenLite.to(txt1, 1, { delay:0.5, alpha: 1, ease:Quad.easeOut});
            TweenLite.to(channelLogo, 1, { delay: 0.9, alpha: 1, ease:Quad.easeOut});
            TweenLite.to(txt2, 1, { delay: 1.3, alpha: 1, ease:Quad.easeOut});
            TweenLite.delayedCall(2.7, function(){
                smokeAnimation.animate();
            });
            
            TweenLite.to(txt1, 0.5, { delay: 4, alpha: 0, ease:Quad.easeIn});
            TweenLite.to(txt2, 0.5, { delay: 4, alpha: 0, ease:Quad.easeIn});
            TweenLite.to(channelLogo, 0.5, { delay: 4, alpha: 0, ease:Quad.easeIn});
            
            TweenLite.delayedCall(5.1, function(){
                stage.removeChild(channelLogo, txt1, txt2); 
                animationComplete();
            })
        }
    }
 
    window.StartFrame = StartFrame;

})(window);

(function (window) {
        
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
    
    window.BatchImageLoader = BatchImageLoader;

})(window);

(function (window) {
        
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
    
    window.ImageLoader = ImageLoader;

})(window);

(function (window) {
        
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
    
    window.PreloaderAnimation = PreloaderAnimation;

})(window);

(function (window) {
        
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
    
    window.PreloaderAsset = PreloaderAsset;

})(window);

(function (window) {
        
    function SkyGradient(gradColourArray, gradRatioArray, gradRotationMatrix) {    
        this.colours = gradColourArray;
        this.ratios = gradRatioArray;
        this.matrix = gradRotationMatrix;
    }
    
    window.SkyGradient = SkyGradient;

})(window);


(function (window) {
        
    function SkyLegals(profile) {   
        
        var showing = false,
        legals = document.getElementById("legals-text"),
        legalsButton = document.getElementById("legals-button");
        
        legals.innerHTML = profile.legals;
    
        legalsButton.innerHTML = profile.legalShow;
        legalsButton.addEventListener("click", handleClick);
        
        this.getLegalsButton = function() { return legalsButton };
        
        function handleClick(){
            if(showing) {
                showing = false;
                legals.style.display = "none";
                legalsButton.innerHTML = profile.legalShow;
            } else {
                showing = true;
                legals.style.display = "inherit";
                legalsButton.innerHTML = profile.legalHide;
            }
        }
    }
    
    window.SkyLegals = SkyLegals;

})(window);

(function (window) {
        
    function SkyText(createjsText, font, lineWidth, lineHeight, align, gradient) {    
        var canvas = document.getElementById("main"),
            container = new createjs.Container(),
            text1 = new createjs.Text(),
            gradientRect = new createjs.Shape(),
            text2 = new createjs.Text(),
            glint = new createjs.Shape();
        
        var x, y, width, height;  
        
		var regularExpression = /\$/g;
        createjsText = createjsText.replace(regularExpression, "\n");
        
        if(lineWidth === null || lineWidth === undefined) {
            lineWidth = canvas.width;
        }
        
        if(align === null || align === undefined) {
            align = "center";
        }
        
        if(gradient === null || gradient === undefined) {
            gradient = new SkyGradient(["#132c6c", "#132c6c"], [0,1], [[0,0],[1,0]]);
        }
        
        container.playGlint = function() {
            TweenLite.to(glint, 0.6, { x: glint.x + 80 + width, ease:Linear.easeNone });
        };
        
        container.updateText = function(newText) {
            text1.uncache();
            text1.text = newText;
                        
            if(align === "center")
                text1.x = lineWidth * 0.5;  
            
            x = text1.getBounds().x;
            y = text1.getBounds().y;
            width = text1.getBounds().width;
            height = text1.getBounds().height + 10;
                            
            text1.cache(x, y, width, height);
            
            if(align === "center")
                gradientRect.x = text1.x - width * 0.5;
            
            var x1 = gradient.matrix[0][0] * width,
                y1 = gradient.matrix[0][1] * height,
                x2 = gradient.matrix[1][0] * width,
                y2 = gradient.matrix[1][1] * height;
            
            gradientRect.uncache();
            gradientRect.graphics.clear().lf(gradient.colours, gradient.ratios , x1, y1, x2, y2).dr(0,0,width,height);
            gradientRect.filters = [ new createjs.AlphaMaskFilter(text1.cacheCanvas) ];
            gradientRect.cache(0,0,width,height);  
            
            glint.x = text1.x + x - 40;
            glint.y = height * 0.5;
            
            text2.uncache();
            text2.text = newText;
            text2.x = text1.x;   
            text2.cache(x, y, width, height);
        }
        
        text1.font = font;
        text1.color = "#0452a5";
        text1.textAlign = align;
        text1.lineWidth = lineWidth;
        if(lineWidth !== null && lineWidth !== undefined) {
            text1.lineHeight = lineHeight;
        }

        text2.font = font;
        text2.color = "#ffffff";
        text2.textAlign = align;
        text2.lineWidth = lineWidth;
        if(lineWidth !== null && lineWidth !== undefined) {
            text1.lineHeight = lineHeight;
        }
        //text2.outline = 2;
        text2.shadow = new createjs.Shadow("#ffffff", 0, 0, 1);
        text2.alpha = 0.4;
        text2.mask = glint;
        
        container.updateText(createjsText);
        
        glint.graphics.f("#ffffff").de(-12, -height, 24, height * 2);
        glint.cache(-12, -height, 24, height * 2);
        glint.rotation = 30;       
   
        container.addChild(gradientRect, text2);
        
        return container;
    }
    
    window.SkyText = SkyText;

})(window);
