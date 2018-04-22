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
        
    /*---------------------------------
    ---------------------------------
    ---------------------------------
    
        Dynamic Content Here
    
    ---------------------------------
    ---------------------------------
    ---------------------------------
    */
    
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
    
     /*---------------------------------
    ---------------------------------
    ---------------------------------
    
        Set profile Variables here
    
    ---------------------------------
    ---------------------------------
    ---------------------------------
    */
        
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
            
        var glassframe = new createjs.Bitmap(profile.glassFrame.img);
        stage.addChild(glassframe);
        
        glassframe.scaleX = 1.5;
        glassframe.scaleY = 1.5;
        glassframe.x = stage.canvas.width * 0.5 - (glassframe.image.width * 1.5) * 0.5;
        glassframe.y = stage.canvas.height * 0.5 - (glassframe.image.height * 1.5) * 0.5;
                
        TweenLite.to(glassframe, 0.5, { x: 0, y: 0, scaleX: 1, scaleY:1, ease:Quad.easeOut});
                
        var channelLogo = new createjs.Bitmap(profile.channelLogo.img);
        channelLogo.x = stage.canvas.width * 0.5 - channelLogo.image.width * 0.5;
        channelLogo.y = 210;
        channelLogo.cache(0,0, channelLogo.image.width, channelLogo.image.height);
        
        var smokeAnimation = new SmokeAnimation(stage, profile);
                        
        var startFrame = new StartFrame(stage, profile, smokeAnimation);
        framesArray.push(startFrame);
            
        var messageFrame = new MessageFrame(stage, profile, channelLogo);
        framesArray.push(messageFrame);
        
        var textFrame = new TextFrame(stage, profile, glassframe, channelLogo);
        framesArray.push(textFrame);
        
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

        /*Previously Dynamic Content*/
        profile.startFrameText1 = "Upgrade to";
        profile.startFrameText2 = "The home of the\\nBarclays Premier League";
        profile.messageFrameText1 = "116 exclusive live matches";
        profile.messageFrameText2 = " ";
        profile.messageFrameLockup = {};
        profile.messageFrameLockup.url = "https://s0.2mdn.net/ads/richmedia/studio/37298155/36187302_20150707030521292_messageFrameLockup.png";
        profile.endFrameText1 = "€20 sports";
        profile.endFrameText2 = "for 1 year";
        profile.ctaImage = {};
        profile.ctaImage.url = "https://s0.2mdn.net/ads/richmedia/studio/37298515/36187302_20150707030306996_cta.png";
        profile.legals = "Available to Sky TV customers joining with or upgrading to Sky Sports. Replaces existing Sky TV offers. After 12 months you’ll continue to pay standard price for Sky Sports (\u20AC36 extra pm) unless you cancel giving at least 31 days’ notice. Offer ends 1 October 2015.<br>Further terms apply.";
        
        
        
        /*Add Content*/
        profile.textFrameText1 = "€20 sports";
        profile.textFrameText2 = "for 1 year";
            
        /*Images*/
        profile.glassFrame = {};
        profile.glassFrame.url = basePath + "glassFrame.jpg";
        profile.channelLogo = {};
        profile.channelLogo.url = basePath + "channelLogo.png";
        profile.trophy = {};
        profile.trophy.url = basePath + "trophy.png";
        profile.glassmark = {};
        profile.glassmark.url = basePath + "glassmark.png";  
        profile.smoke = {};
        profile.smoke.url = basePath + "smoke.png";
        
        /*Legals*/
        profile.legalShow = "Click for legals";
        profile.legalHide = "Click to hide legals";
  
        return profile;
    }
    
    window.Profile = Profile;

})(window);

(function (window) {
        
    function EndFrame(stage, profile) {    
        
        var channelLogo2 = new createjs.Bitmap(profile.channelLogo.img);
        
        var gradient = new SkyGradient(["#0a3075", "#0a3075", "#ed1b36", "#ed1b36"], [0, 0.1, 0.88, 1], [[0,0], [1,0]]);
        var txt1 = new SkyText(profile.endFrameText1, "22px skyTextMedium", 300, 22, "center");
        var txt2 = new SkyText(profile.endFrameText2, "22px skyTextRegular", 300, 22, "center");
        
        var cta = new BitmapCta(profile.ctaImage);
        var glassmark = new createjs.Bitmap(profile.glassmark.img);
        var trophy = new TrophyAsset(profile);
          
        channelLogo2.x = stage.canvas.width * 0.5 - channelLogo2.image.width * 0.5;
        channelLogo2.y = 19;
        channelLogo2.cache(0,0, channelLogo2.image.width, channelLogo2.image.height);
        channelLogo2.alpha = 0;
        
        txt1.y = 59;
        txt1.alpha = 0;
        
        txt2.y = 85;
        txt2.alpha = 0;
        
        cta.x = stage.canvas.width * 0.5;
        cta.y = 142;
        cta.alpha = 0;
        
        glassmark.x = 110;
        glassmark.y = 176;
        glassmark.alpha = 0;
        
        trophy.x = stage.canvas.width - trophy.width;
        trophy.y = stage.canvas.height - (trophy.height - 11);
        trophy.alpha = 0;
                
        this.animate = function(animationComplete) {
          
            stage.addChild(channelLogo2, txt1, txt2, cta, glassmark, trophy);
            trophy.animate();
                            
            TweenLite.to(channelLogo2, 0.5, { alpha:1, ease:Quad.easeOut });
            TweenLite.to(txt1, 0.5, { alpha:1, ease:Quad.easeOut });
            TweenLite.to(txt2, 0.5, { alpha:1, ease:Quad.easeOut });
            TweenLite.to(cta, 0.5, { alpha:1, ease:Quad.easeOut, onComplete:function(){cta.playGlint();}});
            TweenLite.to(glassmark, 0.5, { alpha:1, ease:Quad.easeOut });
            TweenLite.to(trophy, 0.5, { alpha:1, ease:Quad.easeOut });
            
            TweenLite.delayedCall(2.5, function(){
                animationComplete();
            })
            
        }
    }
 
    window.EndFrame = EndFrame;

})(window);

(function (window) {
        
    function MessageFrame(stage, profile, channelLogo) {    
        
        var txt1 = new SkyText(profile.messageFrameText1, "18px skyTextMedium", 300, 20, "center"); 
        var txt2 = new SkyText(profile.messageFrameText2, "18px skyTextRegular", 300, 20, "center"); 
        var messageFrame = new createjs.Bitmap(profile.messageFrameLockup.img);
        
        txt1.y = 40;
        txt1.alpha = 0;
        
        txt2.y = 50;
        txt2.alpha = 0;
        
        messageFrame.alpha = 0;
        
        this.animate = function(animationComplete) {
            stage.addChildAt(messageFrame, txt1, txt2, channelLogo, stage.getNumChildren() - 1);
            
            TweenLite.to(channelLogo, 1, { alpha: 1, ease:Quad.easeOut});
            TweenLite.to(txt1, 1, { alpha: 1, ease:Quad.easeOut});
            TweenLite.to(txt2, 1, { alpha: 1, ease:Quad.easeOut});
            TweenLite.to(messageFrame, 1, { alpha: 1, ease:Quad.easeOut});
            
            TweenLite.to(txt1, 0.5, { delay: 3.8, x: 0 - stage.canvas.width, ease:Quad.easeIn});
            TweenLite.to(txt2, 0.5, { delay: 3.8, x: 0 - stage.canvas.width, ease:Quad.easeIn});
            TweenLite.to(messageFrame, 0.5, { delay: 3.8, x: 0 - stage.canvas.width, ease:Quad.easeIn});
            
            TweenLite.delayedCall(4.3, function(){
                stage.removeChild(txt1, txt2, messageFrame); 
                animationComplete();
            })
        }
    }
 
    window.MessageFrame = MessageFrame;

})(window);

(function (window) {
        
    function StartFrame(stage, profile, smokeAnimation) {    
        
        var txt1 = new SkyText(profile.startFrameText1, "20px skyTextRegular", 300, null, "center"); 
        var channelLogo = new createjs.Bitmap(profile.channelLogo.img);
        var gradient = new SkyGradient(["#0a3075", "#0a3075", "#ed1b36", "#ed1b36"], [0, 0.1, 0.88, 1], [[0,0], [1,0]]);
        var txt2 = new SkyText(profile.startFrameText2, "20px skyTextBold", 300, 22, "center", gradient);     
                               
        txt1.y = 50;
        txt1.alpha = 0;
        
        channelLogo.x = stage.canvas.width * 0.5 - channelLogo.image.width * 0.5;
        channelLogo.y = 86;
        channelLogo.cache(0,0, channelLogo.image.width, channelLogo.image.height);
        channelLogo.alpha = 0;
        
        txt2.y = 127;
        txt2.alpha = 0;
        
        this.animate = function(animationComplete) { 
            stage.addChildAt(channelLogo, txt1, txt2, stage.getNumChildren() - 1);
            
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
        
    function TextFrame(stage, profile, glassFrame, channelLogo) {    
        
        var gradient = new SkyGradient(["#0a3075", "#0a3075", "#ed1b36", "#ed1b36"], [0, 0.1, 0.88, 1], [[0,0], [1,0]]);
        var txt1 = new SkyText(profile.textFrameText1, "48px skyTextBold", 300, 44, "center", gradient); 
        var txt2 = new SkyText(profile.textFrameText2, "30px skyTextBold", 300, 20, "center", gradient); 
        
        txt1.y = 67;
        txt1.x = 0 + stage.canvas.width;
        
        txt2.y = 114;
        txt2.x = 0 + stage.canvas.width;
        
        this.animate = function(animationComplete) {
          
            stage.addChildAt(txt1, txt2, stage.getNumChildren() - 1);
            
            TweenLite.to(txt1, 0.5, { x: 0, ease:Quad.easeOut});
            TweenLite.to(txt2, 0.5, { x: 0, ease:Quad.easeOut});
            
            TweenLite.to(txt1, 0.5, { delay: 3.8, alpha: 0, ease:Quad.easeOut});
            TweenLite.to(txt2, 0.5, { delay: 3.8, alpha: 0, ease:Quad.easeOut});
                        
            var glassFramePosX = stage.canvas.width * 0.5 - (glassFrame.image.width * 1.5) * 0.5;
            var glassFramePosY = stage.canvas.height * 0.5 - (glassFrame.image.height * 1.5) * 0.5;

            var channelLogoPosX = stage.canvas.width * 0.5 - (channelLogo.image.width * 1.5) * 0.5;
            var channelLogoPosY = 210 * 1.25;
            
            TweenLite.to(glassFrame, 0.5, { delay: 3.8, x: glassFramePosX, y: glassFramePosY, scaleX: 1.5, scaleY:1.5, ease:Quad.easeInOut});
            TweenLite.to(channelLogo, 0.5, { delay: 3.8, x: channelLogoPosX, y: channelLogoPosY, scaleX: 1.5, scaleY:1.5, ease:Quad.easeInOut});
            
            TweenLite.delayedCall(4.8, function(){
                animationComplete();
            })
            
        }
    }
 
    window.TextFrame = TextFrame;

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
        
        createjsText = createjsText.replace("\\n", "\n");
        
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
            smoke1.x = -95;
            smoke1.y = 300;
            smoke1.scaleX = 0.31;
            smoke1.scaleY = 0.31;
            smoke1.rotation = 26.7;
            smoke1.alpha = 0.68;

            smoke2.x = -142;
            smoke2.y = 323;
            smoke2.scaleX = 0.40;
            smoke2.scaleY = 0.40;
            smoke2.rotation = 71.7;
            smoke2.alpha = 0.68;

            smoke3.x = -1;
            smoke3.y = 222;
            smoke3.scaleX = 0.13;
            smoke3.scaleY = 0.13;
            smoke3.rotation = 141.4;
            smoke3.alpha = 0;

            smoke4.x = 45;
            smoke4.y = 177;
            smoke4.scaleX = 0.40;
            smoke4.scaleY = 0.40;
            smoke4.rotation = 6.4;
            smoke4.alpha = 0;
        }
        
        this.animate = function() {
            
            var speed = 0.75;
            
            TweenMax.to(smoke1, 4.4 * speed, { delay:0.5 * speed, scaleX: 0.40, scaleY: 0.50, x:22, y: 236, rotation:51.9, ease: Linear.easeNone });
            TweenMax.to(smoke1, 2.5 * speed, { delay:0.5 * speed, alpha: 1, ease: Quad.easeOut });
            TweenMax.to(smoke1, 1.9 * speed, { delay:3 * speed, alpha: 0, ease: Quad.easeIn });

            TweenMax.to(smoke2, 4.7 * speed, { delay:0.2 * speed, scaleX: 0.62, scaleY: 0.77, x:5, y: 239, rotation:93.1, ease: Linear.easeNone });
            TweenMax.to(smoke2, 3.2 * speed, { delay:0.2 * speed, alpha: 1, ease: Quad.easeOut });
            TweenMax.to(smoke2, 1.5 * speed, { delay:3.4 * speed, alpha: 0, ease: Quad.easeIn });

            TweenMax.to(smoke3, 4.7 * speed, { delay:0.4 * speed, scaleX: 0.57, scaleY: 0.66, x:158, y: 171, rotation:163, ease: Linear.easeNone });
            TweenMax.to(smoke3, 3.1 * speed, { delay:0.4 * speed, alpha: 1, ease: Quad.easeOut });
            TweenMax.to(smoke3, 1.6 * speed, { delay:3.5 * speed, alpha: 0, ease: Quad.easeIn });

            TweenMax.to(smoke4, 4.7 * speed, { delay:0 * speed, scaleX: 0.72, scaleY: 0.63, x:152, y: 166, rotation:28.5, ease: Linear.easeNone });
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
        
        smoke1.scaleX = 0.3;
        smoke1.scaleY = 0.3;
        smoke1.x = asset.image.width;
        smoke1.y = asset.image.height;
        smoke1.alpha = 0.37;
        smoke1.rotation = 45;
        smoke1.mask = shapeMask;
        
        smoke2.scaleX = 0.20;
        smoke2.scaleY = 0.20;
        smoke2.x = 120;
        smoke2.y = 117;
        smoke2.rotation = 180;
        smoke2.mask = shapeMask;
        
        container.addChild(smoke1, smoke2, asset);
        
        container.animate = function() {
            TweenMax.to(smoke2, 20, { rotation: 270, repeat: -1,  ease:Linear.easeNone });
            TweenMax.to(smoke2, 10, { scaleX: 0.25, scaleY: 0.25, yoyo: true, repeat: -1,  ease:Linear.easeNone });
            TweenMax.to(smoke1, 20, { rotation: 135, repeat: -1,  ease:Linear.easeNone });
        }
        
        container.width = asset.image.width;
        container.height = asset.image.height;
        
        return container;
    }
    
    window.TrophyAsset = TrophyAsset;

})(window);