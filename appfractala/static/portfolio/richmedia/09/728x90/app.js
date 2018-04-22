
    function SkyGradient(gradColourArray, gradRatioArray, gradRotationMatrix) {
        this.colours = gradColourArray;
        this.ratios = gradRatioArray;
        this.matrix = gradRotationMatrix;
    }

    function SkyCta(createjsText, font, double, gradient, glintColour) {
        var container = new createjs.Container(),
            backgroundGrad = new createjs.Shape(),
            highlightGrad = new createjs.Shape(),
            glint = new createjs.Shape(),
            textField = new createjs.Text(),
            star = new createjs.Shape(),
            styleIndex = 0;

        createjsText = createjsText.replace(/\\n/g, "\n");

        if(double) {
            styleIndex = 1;
        }

        if(gradient === null || gradient === undefined) {
            gradient = new SkyGradient(["#f92653", "#fd8d43"], [0, 1], [[0,0],[1,1]]);
        }

        if(glintColour === null || glintColour === undefined) {
            glintColour = "rgba(255,255,255,0.6)"
        }

        var backgroundGradPath = ["Ap/ipIT/AAYAeAAAeAoAAAoIAACzYAAAogeAogeAAIz/AAYgeAAgUgoAAgoIAAizYAAgoAUgoAeAA",
                                  "AmjkNINHAAYAoAAAUAoAAAyIAAFnYAAAygUAogoAAItHAAYgoAAgUgoAAgyIAAlnYAAgyAUgoAoAA"];
        var highlightGradPath = ["AKAipIz/AAYgeAAgUAegKAoYCMAoEEAeErAAYEsAAEEgeCCgyYAAgegUgegeAA",
                             "AGkkNItHAAYgoAAgeAoAAAyIAABaYCMAeCqAUCzAAYC0AACqgUCMgeIAAhaYAAgygegogoAA"];

        var styling = [ {
                            width:140,
                            height:34,
                            gradHeight: 14
                        },
                        {
                            width:98,
                            height:55,
                            gradHeight: 23
                        }];

        var x1 = gradient.matrix[0][0] * styling[styleIndex].width - (styling[styleIndex].width * 0.5),
            y1 = gradient.matrix[0][1] * styling[styleIndex].height - (styling[styleIndex].height * 0.5),
            x2 = gradient.matrix[1][0] * styling[styleIndex].width - (styling[styleIndex].width * 0.5),
            y2 = gradient.matrix[1][1] * styling[styleIndex].height - (styling[styleIndex].height * 0.5);

        backgroundGrad.graphics.lf(gradient.colours, gradient.ratios, x1, y1, x2, y2).ss(2).s("#ffffff")
        .p(backgroundGradPath[styleIndex]).cp().es().ef();
        backgroundGrad.setBounds(0,0, styling[styleIndex].width, styling[styleIndex].height);
        backgroundGrad.shadow = new createjs.Shadow("rgba(0,0,0,0.4)", 0, 0, 8);

        highlightGrad.graphics.lf(["rgba(255,255,255,0.2)", "rgba(255,255,255,0.1)"], [0.7,1], 0, -17, 0, -3)
        .p(highlightGradPath[styleIndex]).cp().ef();
        highlightGrad.setBounds(0,0, styling[styleIndex].width, styling[styleIndex].gradHeight);

        textField.text = createjsText;
        textField.font = font;
        textField.color = "#ffffff";
        textField.textAlign = "center";
        textField.shadow = new createjs.Shadow("rgba(0,0,0,0.4)", 0, 0, 5);
        textField.y -= 2 + textField.getBounds().height * 0.5

        star.graphics.f("rgba(255,255,255,0.8)").p("ADICqIC0AUIi0AKIgKC0IgUi0IiqgKICqgUIAUiqIAKCq").cp().ef();
        star.regX = 19;
        star.regY = 19;
        star.x = (styling[styleIndex].width * 0.5) - 45;
        star.y = 0 - styling[styleIndex].gradHeight;
        star.scaleX = 0.3;
        star.scaleY = 0.3;
        star.alpha = 0;

        glint.graphics.beginLinearGradientFill(["rgba(255,220,252,0)", glintColour, "rgba(255,220,252,0)"], [0, 0.9, 1], -50, 0, 15, 30).drawRect(-75,-50,150,100);
        glint.x = 0 - styling[styleIndex].width * 0.5 - 50;
        glint.mask = backgroundGrad;

        container.addChild(backgroundGrad, highlightGrad, textField, glint, star);

        container.playGlint = function() {
            TweenLite.to(glint, 1, { x: styling[styleIndex].width * 0.5 + 75, ease:Quad.easeOut } );
            TweenLite.to(star, 0.5, { alpha: 1, scaleX: 1, scaleY: 1, ease:Quad.easeOut} );
            TweenLite.to(star, 0.5, { delay: 0.5, alpha: 0, scaleX: 0.3, scaleY: 0.3, ease:Quad.easeOut} );
            TweenLite.to(star, 1, { alpha: 1, x: (styling[styleIndex].width * 0.5) - 5, rotation: 360, ease:Quad.easeOut} );
            TweenLite.delayedCall(1, function() {
                glint.x = 0 - styling[styleIndex].width * 0.5 - 50;
                star.x = (styling[styleIndex].width * 0.5) - 45;
                star.rotation = 0;
            });
        }

        return container;
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

function Glintable(styling, imagePath, imageHighlightPath) {
    var container = new createjs.Container(),
        glint = new createjs.Shape(),
        textField = new createjs.Bitmap(imagePath),
        highlight = new createjs.Bitmap(imageHighlightPath);

    glint.graphics.beginFill("white").drawRect(0,0,10,300);
    glint.rotation = 15;

    highlight.mask = glint;

    container.addChild(textField, highlight);

    container.playGlint = function () {
        TweenLite.to(glint, 1.2, {x: styling.width * 0.5 + 75, ease: Quad.easeOut});
        TweenLite.delayedCall(1.2, function () {
            glint.x = 0 - styling.width * 0.5 - 50;
        });
    };

    return container;
}


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

/*Standard Enabler Init Handler*/
function enablerInitHandler() {

    Enabler.setProfileId(1068800);
    var devDynamicContent = {};

    devDynamicContent.Feed_728x90= [{}];
    devDynamicContent.Feed_728x90[0]._id = 0;
    devDynamicContent.Feed_728x90[0].ID = 1;
    devDynamicContent.Feed_728x90[0].Default = true;
    devDynamicContent.Feed_728x90[0].Active = true;
    devDynamicContent.Feed_728x90[0].ReportingLabel = "OSM_AQ_DTH_POWERFORTNIGHT-Q2_FREETABEORVOUCHER_SKYTV_100ROUNDEL_HTML5_294535";
    devDynamicContent.Feed_728x90[0].Clicktag = {};
    devDynamicContent.Feed_728x90[0].Clicktag.Url = "https://secure.sky.com/";
    devDynamicContent.Feed_728x90[0].StartDate = {};
    devDynamicContent.Feed_728x90[0].StartDate.RawValue = "";
    devDynamicContent.Feed_728x90[0].StartDate.UtcValue = 0;
    devDynamicContent.Feed_728x90[0].EndDate = {};
    devDynamicContent.Feed_728x90[0].EndDate.RawValue = "";
    devDynamicContent.Feed_728x90[0].EndDate.UtcValue = 0;
	
    devDynamicContent.Feed_728x90[0].content = {
		"728x90_f2_image.png":{"Type":"file","Url":"dynamic_assets/728x90_f2_image.png"},
		"728x90_opening.png":{"Type":"file","Url":"dynamic_assets/728x90_opening.png"},
		"728x90_f2_copy.png":{"Type":"file","Url":"dynamic_assets/728x90_f2_copy.png"},
		"728x90_f2_copy_highlight.png":{"Type":"file","Url":"dynamic_assets/728x90_f2_copy_highlight.png"},
		"728x90_f3_copy.png":{"Type":"file","Url":"dynamic_assets/728x90_f3_copy.png"},
		"728x90_f3_copy_highlight.png":{"Type":"file","Url":"dynamic_assets/728x90_f3_copy_highlight.png"},
		"728x90_background.jpg":{"Type":"file","Url":"dynamic_assets/728x90_background.jpg"},
		"728x90_sky_logo.png":{"Type":"file","Url":"dynamic_assets/728x90_sky_logo.png"}};
	
    devDynamicContent.Feed_728x90[0].CtaCopy = "Find out\nmore";
    devDynamicContent.Feed_728x90[0].CtaXPos = 540;
    devDynamicContent.Feed_728x90[0].CtaYPos = 45;
    
    devDynamicContent.Feed_728x90[0].LegalButton = "Click for Legals";
    devDynamicContent.Feed_728x90[0].LegalCopy = "Subject to status. Upfront payment may be required. 50% off your monthly Sky TV subscription for 12 months when you come back to Sky TV on any package. Sky TV with this offer from £10 per month (pm) for 12 months. After your 12 month Sky TV offer ends you will pay the full price for your Sky TV package (currently £20 – £75.75 pm). Sky Sports (£12.75 extra pm). Sky Movies (£8 extra pm). Please note you need to give us 31 days notice to change your package. Discount does not apply to stand-alone Premium Channels, Sky Box Office, Sky Store, pay-per-view services, Multiscreen (£11.25 pm extra) or Sky Go Extra (£5 pm extra or no extra cost with Multiscreen). <strong>Sky+HD<\/strong>: The HD channels you get are dependent on your Sky TV/HD package. Some HD channels are available without a subscription. <strong>Box Sets<\/strong>: Selection of shows/series available & varies each month. Monthly comparison against online and Pay TV UK subscription services based on shows for which the latest series is showing now or in the last 12 months or in the next 12 months from February 2015. See sky.com/moreboxsets. <strong>On Demand/Catch Up<\/strong>: Downloading content require broadband connection (minimum recommended speed 2Mbps), on demand self-set-up using built-in WiFi/own cable. Downloads count towards usage cap and may expire from your planner. Content depends on your Sky TV/HD subscription. Selected Sky channels on Catch Up. Sky Movies Pack or Sky Sports Pack required for Sky Movies or Sky Sports. Sky+ subscribers without Sky TV can access BBC iPlayer only. <strong>Sky Go<\/strong>: UK and Ireland only. Streamed via broadband/3G/4G (charges may apply). Available on two registered compatible devices (content may vary). Some live TV programmes will be unavailable. Compatible device and software requirements at sky.com/skygodevices. Sky Go is not currently supported on PCs with Windows 8 or Macs with OS X Mountain Lion. Selected live channels available at no extra cost depending on your Sky TV subscription. <strong>General<\/strong>: Prices may go up during your subscription. UK residential customers only. Further terms apply. Correct at 12/01/2016. Limitless © 2015 CBS Broadcasting Inc. All Rights Reserved.";
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

(function (window) {

    function Profile() {
        var profile = {};

        /*Dynamic Images init - prepare preloader to keep tabs on loading of these*/
        profile.background = {};
        profile.glassmark = {};
        profile.f1LargeImage = {};
        profile.f1StartOverlay = {};

        return profile;
    }

    window.Profile = Profile;

})(window);

function adVisibilityHandler() {

    /*Get the profile for the banner*/
    var profile = new Profile();

    profile.background.url = dynamicContent.Feed_728x90[0].content['728x90_background.jpg']['Url'];
    profile.glassmark.url = dynamicContent.Feed_728x90[0].content['728x90_sky_logo.png']['Url'];
    profile.f1StartOverlay.url = dynamicContent.Feed_728x90[0].content['728x90_opening.png']['Url'];
    profile.f1LargeImage.url = dynamicContent.Feed_728x90[0].content['728x90_f2_image.png']['Url'];
	
    profile.cta = dynamicContent.Feed_728x90[0].CtaCopy;
    profile.ctaX = dynamicContent.Feed_728x90[0].CtaXPos;
    profile.ctaY = dynamicContent.Feed_728x90[0].CtaYPos;
    profile.legalShow = dynamicContent.Feed_728x90[0].LegalButton;
    profile.legals =  dynamicContent.Feed_728x90[0].LegalCopy;

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
    var dynamicExitUrl = dynamicContent.Feed_728x90[0].Clicktag.Url;

    if (dynamicExitUrl) {
        Enabler.exitOverride(exitId, dynamicExitUrl);
    } else {
        Enabler.exit(exitId);
    }
}


(function (window) {
    var largeImage, glassmark, f2Text, f5Copy, F1StartOverlay;
    var stage;
    var fadeTime = 0.7;
    var fadeInAnim = Quad.easeIn;
    var fadeOutAnim = Quad.easeOut;

    function Main(profile) {

        if (profile.legals !== "") {
            var legals = new SkyLegals(profile);
        }

        stage = new createjs.Stage("main");
        var background = new createjs.Bitmap(profile.background.img);
        glassmark = new createjs.Bitmap(profile.glassmark.img);

        glassmark.alpha = 0;

        stage.addChild(background);
        stage.addChild(glassmark);
        TweenMax.ticker.addEventListener("tick", stage.update, stage);

		F1StartOverlay = new createjs.Bitmap(profile.f1StartOverlay.url);

        var styling = {xStart: -20, yStart: -10, width: 500, height: 110};

        f2Text = new Glintable(styling, dynamicContent.Feed_728x90[0].content['728x90_f2_copy.png']['Url'], dynamicContent.Feed_728x90[0].content['728x90_f2_copy_highlight.png']['Url']);
        f2Text.alpha = 0;

        f5Copy = new Glintable(styling, dynamicContent.Feed_728x90[0].content['728x90_f3_copy.png']['Url'], dynamicContent.Feed_728x90[0].content['728x90_f3_copy_highlight.png']['Url']);
        f5Copy.alpha = 0;

        largeImage = new createjs.Bitmap(profile.f1LargeImage.url);
        largeImage.x = 271;
        largeImage.y = 145;
		largeImage.scaleX = 2.3;
		largeImage.scaleY = 2.3;
        largeImage.regX = largeImage.image.width * 0.5;
        largeImage.regY = largeImage.image.height * 0.5;

        stage.addChild(largeImage, F1StartOverlay);

        stage.update();

        f1(profile);
    }

    function f1(profile) {
        TweenMax.to(glassmark, 0.5, {delay: 1.4, alpha: 1});

        TweenMax.to(F1StartOverlay, 0.2, {delay: 1.25, alpha: 0});
        TweenMax.to(largeImage, 0.7, {delay: 1.15, x: 395, y: 48, scaleX: 0.6, scaleY: 0.6});

        TweenMax.delayedCall(1.15, function() {
            f2(profile);
        });
    }

    function f2(profile) {
        stage.addChild(f2Text);
        TweenMax.to(f2Text, fadeTime, {delay: 0.5, alpha: 1, ease: fadeInAnim});

        TweenMax.delayedCall(1.5, f2Text.playGlint);

        TweenMax.delayedCall(2.8, function() {
            f5(profile);
        });
    }

    function f5(profile) {
        TweenMax.to(f2Text, fadeTime, {alpha: 0, ease: fadeOutAnim});

        var ctaCopy = profile.cta.replace(/\\n/, "\n");
        var ctaDouble = (ctaCopy.indexOf("\n") !== -1);
        var ctaGradient = new SkyGradient(["#a13383", "#0850a3"], [0, 1], [[0, 0], [1,0]]);
        var cta = new SkyCta(profile.cta, '17px SkyTextRegular', ctaDouble, ctaGradient);
        cta.x = profile.ctaX;
        cta.y = profile.ctaY;
        cta.alpha = 0;
        stage.addChild(cta);

        stage.addChild(f5Copy);
        TweenMax.to(f5Copy, fadeTime, {delay: fadeTime, alpha: 1, ease: fadeInAnim});
        
        TweenMax.to(cta, fadeTime, {delay: 0.9 + fadeTime, alpha: 1, ease: Quad.easeOut});

        TweenMax.delayedCall(2, f5Copy.playGlint);
        TweenMax.delayedCall(2.9, cta.playGlint);
    }

    window.Main = Main;

})(window);
