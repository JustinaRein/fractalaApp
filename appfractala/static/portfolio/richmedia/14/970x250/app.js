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

	devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250= [{}];
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0]._id = 0;
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].id = 1;
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].reportingLabel = "TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].defaultValue = true;
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].startDate = {};
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].startDate.RawValue = "";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].startDate.UtcValue = 0;
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].endDate = {};
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].endDate.RawValue = "";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].endDate.UtcValue = 0;
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].startFrameText1 = {};
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].startFrameText1.Type = "file";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].startFrameText1.Url = "https://s0.2mdn.net/ads/richmedia/studio/37818510/36187302_20150812092932760_970x250_startFrameText1.png";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].startFrameText2 = {};
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].startFrameText2.Type = "file";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].startFrameText2.Url = "https://s0.2mdn.net/ads/richmedia/studio/37817379/36187302_20150812092941105_970x250_startFrameText2.png";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].messageFrameText = {};
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].messageFrameText.Type = "file";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].messageFrameText.Url = "https://s0.2mdn.net/ads/richmedia/studio/37817377/36187302_20150812092927602_970x250_messageFrameText.png";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].messageFrameLockup = {};
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].messageFrameLockup.Type = "file";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].messageFrameLockup.Url = "https://s0.2mdn.net/ads/richmedia/studio/37830839/36187302_20150813022335095_970x250_messageFrameLockup.png";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].fixtureFrameText = {};
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].fixtureFrameText.Type = "file";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].fixtureFrameText.Url = "https://s0.2mdn.net/ads/richmedia/studio/37817567/36187302_20150812092917083_970x250_fixtureFrameText.png";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].endFrameText = {};
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].endFrameText.Type = "file";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].endFrameText.Url = "https://s0.2mdn.net/ads/richmedia/studio/37817566/36187302_20150812092911439_970x250_endFrameText.png";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].ctaImage = {};
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].ctaImage.Type = "file";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].ctaImage.Url = "https://s0.2mdn.net/ads/richmedia/studio/37818506/36187302_20150812092905729_970x250_cta.png";
    devDynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].legals = "Available to Sky TV customers joining with or upgrading to Sky Sports. Replaces existing Sky TV offers. After 12 months you’ll continue to pay standard price for Sky Sports (€36 extra pm) unless you cancel giving at least 31 days’ notice. Offer ends 1 October 2015.";
    
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
    profile.startFrameText1.url = dynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].startFrameText1.Url;
    profile.startFrameText2.url = dynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].startFrameText2.Url;
    profile.messageFrameText.url = dynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].messageFrameText.Url;
    profile.messageFrameLockup.url = dynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].messageFrameLockup.Url;
    profile.fixtureFrameText.url = dynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].fixtureFrameText.Url;
    profile.endFrameText.url = dynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].endFrameText.Url;
    profile.ctaImage.url = dynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].ctaImage.Url;
    profile.legals = dynamicContent.TRADING_ROI_SOS_CUSTOMER_EURO20_SPORTS_970x250[0].legals;
        
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
		
		//----------------------------------------------------
		
		var channelLogo = new createjs.Bitmap(profile.channelLogo.img);
		channelLogo.alpha = 0;
		
		//-------------------------------------------------------
             
        var startFrame = new StartFrame(stage, profile, channelLogo);
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
		profile.bg = {};
		profile.bg.url = basePath + "bg.jpg";
        profile.glassFrameTop = {};
		profile.glassFrameTop.url = basePath + "glassFrameTop.jpg";
        profile.glassFrameBottom = {};
		profile.glassFrameBottom.url = basePath + "glassFrameBottom.jpg";
        profile.channelLogo = {};
        profile.channelLogo.url = basePath + "channelLogo.png";
        profile.trophy = {};
        profile.trophy.url = basePath + "trophy.png";
        profile.glassmark = {};
        profile.glassmark.url = basePath + "glassmark.png";  
        profile.smoke = {};
        profile.smoke.url = basePath + "smoke.png";
        
		profile.startFrameText1 = {};
		profile.startFrameText2 = {};
		profile.messageFrameText = {};
        profile.messageFrameLockup = {};
		profile.fixtureFrameText = {};
 		profile.endFrameText = {};
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
            smoke1.x = -300;
            smoke1.y = 400;
            smoke1.scaleX = 0.31;
            smoke1.scaleY = 0.31;
            smoke1.rotation = 26.7;
            smoke1.alpha = 0;

            smoke2.x = -300;
            smoke2.y = 400;
            smoke2.scaleX = 0.40;
            smoke2.scaleY = 0.40;
            smoke2.rotation = 71.7;
            smoke2.alpha = 0;

            smoke3.x = -300;
            smoke3.y = 400;
            smoke3.scaleX = 0.13;
            smoke3.scaleY = 0.13;
            smoke3.rotation = 141.4;
            smoke3.alpha = 0;

            smoke4.x = -300;
            smoke4.y = 400;
            smoke4.scaleX = 0.40;
            smoke4.scaleY = 0.40;
            smoke4.rotation = 6.4;
            smoke4.alpha = 0;
        }
        
        this.animate = function() {
            
            var speed = 0.75;
            smoke1.alpha = 0.68;
			smoke2.alpha = 0.68;
			
            TweenMax.to(smoke1, 4.4 * speed, { delay:0.5 * speed, scaleX: 0.40, scaleY: 0.50, x: stage.canvas.width, y: 0, rotation:51.9, ease: Linear.easeNone });
            TweenMax.to(smoke1, 2.5 * speed, { delay:0.5 * speed, alpha: 1, ease: Quad.easeOut });
            TweenMax.to(smoke1, 1.9 * speed, { delay:3 * speed, alpha: 0, ease: Quad.easeIn });

            TweenMax.to(smoke2, 4.7 * speed, { delay:0.2 * speed, scaleX: 0.82, scaleY: 0.97, x: stage.canvas.width - 50, y: -100, rotation:93.1, ease: Linear.easeNone });
            TweenMax.to(smoke2, 3.2 * speed, { delay:0.2 * speed, alpha: 1, ease: Quad.easeOut });
            TweenMax.to(smoke2, 1.5 * speed, { delay:3.4 * speed, alpha: 0, ease: Quad.easeIn });

            TweenMax.to(smoke3, 4.7 * speed, { delay:0.4 * speed, scaleX: 0.87, scaleY: 0.96, x: stage.canvas.width + 158, y: 171, rotation:163, ease: Linear.easeNone });
            TweenMax.to(smoke3, 3.1 * speed, { delay:0.4 * speed, alpha: 1, ease: Quad.easeOut });
            TweenMax.to(smoke3, 1.6 * speed, { delay:3.5 * speed, alpha: 0, ease: Quad.easeIn });

            TweenMax.to(smoke4, 4.7 * speed, { delay:0 * speed, scaleX: 0.82, scaleY: 0.73, x: stage.canvas.width + 152, y: 166, rotation:28.5, ease: Linear.easeNone });
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
        
        var endFrameText = new createjs.Bitmap(profile.endFrameText.img);
        var cta = new BitmapCta(profile.ctaImage);
        
        endFrameText.alpha = 0;
        
        cta.x = 670;
        cta.y = stage.canvas.height * 0.5 - 17;
        cta.alpha = 0;
                
        this.animate = function(animationComplete) {
            stage.addChild(endFrameText, cta);
                            
            TweenLite.to(endFrameText, 0.5, { alpha:1, ease:Quad.easeIn });
            TweenLite.to(cta, 0.5, { alpha: 1, ease:Quad.easeIn, onComplete:function(){ cta.playGlint(); }});
			
            TweenLite.delayedCall(5, function(){
                animationComplete();
            });
        }
    }
 
    window.EndFrame = EndFrame;

})(window);

(function (window) {
        
    function FixtureFrame(stage, profile) {    
         
        var fixtureFrameText = new createjs.Bitmap(profile.fixtureFrameText.img);
		
		fixtureFrameText.y = 0 - fixtureFrameText.image.height;
        
        this.animate = function(animationComplete) {
			
			stage.addChildAt(fixtureFrameText, stage.getNumChildren() - 5);
			
            TweenLite.to(fixtureFrameText, 0.5, { y: 0, ease:Linear.easeNone });
            
            TweenLite.to(fixtureFrameText, 0.8, { delay: 3.5, alpha: 0,  ease:Quad.easeOut });
            
            TweenLite.delayedCall(4.5, function(){
                stage.removeChild(fixtureFrameText); 
                animationComplete();
            })
        }
    }
 
    window.FixtureFrame = FixtureFrame;

})(window);

(function (window) {
        
    function MessageFrame(stage, profile, channelLogo) {    
        
        var messageFrameText = new createjs.Bitmap(profile.messageFrameText.img);
		var messageFrameLockup = new createjs.Bitmap(profile.messageFrameLockup.img);
        
		messageFrameLockup.alpha = 0; 
        messageFrameText.alpha = 0;
		
        this.animate = function(animationComplete) {
			
			channelLogo.alpha = 0;
			channelLogo.regX = channelLogo.image.width * 0.5;
			channelLogo.regY = channelLogo.image.height * 0.5;
			channelLogo.scaleX = 0.8;
			channelLogo.scaleY = 0.8;
			channelLogo.x = stage.canvas.width * 0.5;
            channelLogo.y = 227;
			
			stage.addChildAt(messageFrameLockup, messageFrameText, stage.getNumChildren() - 3);
			
            TweenLite.to(channelLogo, 1, { alpha: 1 });
            TweenLite.to(messageFrameText, 1, { alpha: 1 });
            TweenLite.to(messageFrameLockup, 1, { alpha: 1 });
            
            TweenLite.to(messageFrameText, 1, { delay: 3.8, y: stage.canvas.height + messageFrameText.image.height, ease:Quad.easeIn});
            
            TweenLite.delayedCall(4.3, function(){
                stage.removeChild(messageFrameText); 
                animationComplete();
            })
        }
    }
 
    window.MessageFrame = MessageFrame;

})(window);

(function (window) {
        
    function StartFrame(stage, profile, channelLogo, smokeAnimation) { 
	
		var bg = new createjs.Bitmap(profile.bg.img),
			glassFrameTop = new createjs.Bitmap(profile.glassFrameTop.img),
			trophy = new TrophyAsset(profile),
			glassFrameBottom = new createjs.Bitmap(profile.glassFrameBottom.img),
			startFrameText1 = new createjs.Bitmap(profile.startFrameText1.img),
			startFrameText2 = new createjs.Bitmap(profile.startFrameText2.img);
		
		var smokeAnimation = new SmokeAnimation(stage, profile);
		glassFrameBottom.y = stage.canvas.height - glassFrameBottom.image.height;
		
		trophy.x = stage.canvas.width - trophy.width;
        trophy.y = 22;
		trophy.alpha = 0;
        
        startFrameText1.alpha = 0;
        startFrameText2.alpha = 0;
		
        this.animate = function(animationComplete) {
			
			channelLogo.alpha = 0;
			channelLogo.x = 255;
			channelLogo.y = 84;
			
            stage.addChildAt(bg, startFrameText1, startFrameText2, trophy, glassFrameTop, glassFrameBottom, channelLogo, stage.getNumChildren() - 1);
			
			trophy.animate();
			TweenLite.to(trophy, 1, { alpha: 1, ease:Quad.easeOut });
			
            TweenLite.to(startFrameText1, 1, { delay:0.5, alpha: 1, ease:Quad.easeOut});
            TweenLite.to(channelLogo, 1, { delay: 0.9, alpha: 1, ease:Quad.easeOut});
            TweenLite.to(startFrameText2, 1, { delay: 1.3, alpha: 1, ease:Quad.easeOut});
            TweenLite.delayedCall(2.7, function(){
                smokeAnimation.animate();
            });
            
            TweenLite.to(startFrameText1, 0.5, { delay: 4, alpha: 0, ease:Quad.easeIn});
            TweenLite.to(startFrameText2, 0.5, { delay: 4, alpha: 0, ease:Quad.easeIn});
            TweenLite.to(channelLogo, 0.5, { delay: 4, alpha: 0, ease:Quad.easeIn});
            
            TweenLite.delayedCall(5.1, function(){
                stage.removeChild(startFrameText1, startFrameText2); 
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
