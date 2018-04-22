var preloader;
var exitURL = {};

window.onload = function() {
	if (Enabler.isInitialized()) {
		enablerInitHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}
	preloader = new PreloaderAnimation();
}

/*Standard Enabler Init Handler*/
function enablerInitHandler() {
    
	Enabler.setProfileId(1057023);
    var devDynamicContent = {};

        devDynamicContent.Feed_970x250= [{}];
    devDynamicContent.Feed_970x250[0]._id = 0;
    devDynamicContent.Feed_970x250[0].id = 1;
    devDynamicContent.Feed_970x250[0].reporting_label = "294306A_NOW_TV_Brand_Q1_Banner_970X250_MOVIES";
    devDynamicContent.Feed_970x250[0].start_date = {};
    devDynamicContent.Feed_970x250[0].start_date.RawValue = "";
    devDynamicContent.Feed_970x250[0].start_date.UtcValue = 0;
    devDynamicContent.Feed_970x250[0].end_date = {};
    devDynamicContent.Feed_970x250[0].end_date.RawValue = "";
    devDynamicContent.Feed_970x250[0].end_date.UtcValue = 0;
    devDynamicContent.Feed_970x250[0].exit_URL = {};
    devDynamicContent.Feed_970x250[0].exit_URL.Url = "http://www.sky.com/";
    devDynamicContent.Feed_970x250[0].theme_assets = {"970x250_video_play_button_hover.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38470023/36187302_20150911011939836_970x250_video_play_button_hover.png"},"970x250_ticket_list.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38470114/36187302_20150911011932616_970x250_ticket_list.png"},"970x250_ticket_intro.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38466054/36187302_20150911011922659_970x250_ticket_intro.png"},"970x250_intro_now_tv_logo.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38466053/36187302_20150911011914225_970x250_intro_now_tv_logo.png"},"970x250_background.jpg":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38469033/36187302_20150911011907920_970x250_background.jpg"},"970x250_arrow_right.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38464870/36187302_20150911011902129_970x250_arrow_right.png"},"970x250_arrow_left.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38469032/36187302_20150911011856463_970x250_arrow_left.png"}};
    devDynamicContent.Feed_970x250[0].general_assets = {"970x250_video_sound_on.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38464883/36187302_20150911013440617_970x250_video_sound_on.png"},"970x250_video_sound_off.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38464882/36187302_20150911013434272_970x250_video_sound_off.png"},"970x250_video_play.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38468144/36187302_20150911013428043_970x250_video_play.png"},"970x250_video_play_button_white.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38469050/36187302_20150911013420423_970x250_video_play_button_white.png"},"970x250_video_pause.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38468143/36187302_20150911013411035_970x250_video_pause.png"},"970x250_ticket_mask.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38469049/36187302_20150911013401080_970x250_ticket_mask.png"},"970x250_ticket_mask_shadow.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38470138/36187302_20150911013352207_970x250_ticket_mask_shadow.png"}};
    devDynamicContent.Feed_970x250[0].content_assets = {"970x250_video_txt_04.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38470110/36187302_20150911011714210_970x250_video_txt_04.png"},"970x250_video_txt_03.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38464866/36187302_20150911011707719_970x250_video_txt_03.png"},"970x250_video_txt_02.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38470017/36187302_20150911011700036_970x250_video_txt_02.png"},"970x250_video_txt_01.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38469029/36187302_20150911011651404_970x250_video_txt_01.png"},"970x250_video_img_04.jpg":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38469028/36187302_20150911011643684_970x250_video_img_04.jpg"},"970x250_video_img_03.jpg":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38464864/36187302_20150911011634245_970x250_video_img_03.jpg"},"970x250_video_img_02.jpg":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38466042/36187302_20150911011625165_970x250_video_img_02.jpg"},"970x250_video_img_01.jpg":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38466041/36187302_20150911011617491_970x250_video_img_01.jpg"},"970x250_list_right_btn.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38470014/36187302_20150911011610254_970x250_list_right_btn.png"},"970x250_list_right_btn_hover.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38469027/36187302_20150911011601440_970x250_list_right_btn_hover.png"},"970x250_list_logo_small.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38466157/36187302_20150911011552115_970x250_list_logo_small.png"},"970x250_list_left_btn.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38464863/36187302_20150911011545642_970x250_list_left_btn.png"},"970x250_list_left_btn_hover.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38466040/36187302_20150911011536760_970x250_list_left_btn_hover.png"},"970x250_intro_logo_small.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38469025/36187302_20150911011527055_970x250_intro_logo_small.png"},"970x250_intro_logo_big.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38466039/36187302_20150911011521354_970x250_intro_logo_big.png"},"970x250_intro_legals.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38468130/36187302_20150911011515817_970x250_intro_legals.png"},"970x250_intro_legals_btn.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38469024/36187302_20150911011506821_970x250_intro_legals_btn.png"},"970x250_intro_headline.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38464862/36187302_20150911011454639_970x250_intro_headline.png"},"970x250_intro_btn.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38466038/36187302_20150911011445922_970x250_intro_btn.png"},"970x250_intro_btn_hover.png":{"Type":"file","Url":"https://s0.2mdn.net/ads/richmedia/studio/38469023/36187302_20150911011435406_970x250_intro_btn_hover.png"}};
	
    devDynamicContent.Feed_970x250[0].video_assets = {
		"video_04.webm":{"Type":"video","Progressive_Url":"https://gcdn.2mdn.net/videoplayback/id/7c7744a69027a0c5/itag/43/source/doubleclick/ratebypass/yes/acao/yes/ip/0.0.0.0/ipbits/0/expire/3586434812/sparams/id,itag,source,ratebypass,acao,ip,ipbits,expire/signature/54A3071810C01C75C9095F5D7C7B686082D00350.3A192FBF5BF46B9CCDE28DCED5F21B845D30DE8E/key/ck2/file/file.webm","Stream_Url":""},
		"video_04.mp4":{"Type":"video","Progressive_Url":"https://gcdn.2mdn.net/videoplayback/id/4bc9b0b9f132e31c/itag/59/source/doubleclick/ratebypass/yes/acao/yes/ip/0.0.0.0/ipbits/0/expire/3586434812/sparams/id,itag,source,ratebypass,acao,ip,ipbits,expire/signature/919BD4B32CA1CDE0FFAC3B893420923A0C34760E.6709F8D61BB63A55744C0BEB89A6BB89177B9E91/key/ck2/file/file.mp4","Stream_Url":""},"video_03.webm":{"Type":"video","Progressive_Url":"https://gcdn.2mdn.net/videoplayback/id/31dc70321e0258ef/itag/43/source/doubleclick/ratebypass/yes/acao/yes/ip/0.0.0.0/ipbits/0/expire/3586434812/sparams/id,itag,source,ratebypass,acao,ip,ipbits,expire/signature/3A41C9AF25FF14F7A5B65BF6A31C565FA5711F56.7E5519A8D045250D034BC37EDF0AC600C80CD5F3/key/ck2/file/file.webm","Stream_Url":""},"video_03.mp4":{"Type":"video","Progressive_Url":"https://gcdn.2mdn.net/videoplayback/id/7526c05f2f3a45a6/itag/59/source/doubleclick/ratebypass/yes/acao/yes/ip/0.0.0.0/ipbits/0/expire/3586434812/sparams/id,itag,source,ratebypass,acao,ip,ipbits,expire/signature/9F3941791501CF7D5AF5A81D92D04271E2511C98.7C954968A6A66763666D9BB4BD8CE6D36CD6B849/key/ck2/file/file.mp4","Stream_Url":""},"video_02.webm":{"Type":"video","Progressive_Url":"https://gcdn.2mdn.net/videoplayback/id/94e8b29b5c148cfb/itag/43/source/doubleclick/ratebypass/yes/acao/yes/ip/0.0.0.0/ipbits/0/expire/3586434812/sparams/id,itag,source,ratebypass,acao,ip,ipbits,expire/signature/7B9009ACF0CC148E685CD70A8F873A3B1D180537.BBC2C769CD19B38B61FCF01850C2AB1CACC1A270/key/ck2/file/file.webm","Stream_Url":""},"video_04.ogv":{"Type":"video","Progressive_Url":"https://s0.2mdn.net/ads/richmedia/studio/38478520/36187302_20150911070237162_video_04.ogv","Stream_Url":""},"video_02.mp4":{"Type":"video","Progressive_Url":"https://gcdn.2mdn.net/videoplayback/id/09d8a12dcd139829/itag/59/source/doubleclick/ratebypass/yes/acao/yes/ip/0.0.0.0/ipbits/0/expire/3586434812/sparams/id,itag,source,ratebypass,acao,ip,ipbits,expire/signature/9FCE1FF83D79020B21A41DB263F919FE9D329A9A.9DF83980934991C45EE556B219151D32D3E88C75/key/ck2/file/file.mp4","Stream_Url":""},"video_01.webm":{"Type":"video","Progressive_Url":"https://gcdn.2mdn.net/videoplayback/id/76b5557725cdda7a/itag/43/source/doubleclick/ratebypass/yes/acao/yes/ip/0.0.0.0/ipbits/0/expire/3586434812/sparams/id,itag,source,ratebypass,acao,ip,ipbits,expire/signature/3B354FFF05383F6DA0B6D9759BD203937645FB56.9DFEF5E7552B1F998E7536E7E2938260D2E9D8A7/key/ck2/file/file.webm","Stream_Url":""},"video_01.mp4":{"Type":"video","Progressive_Url":"https://gcdn.2mdn.net/videoplayback/id/7fc12164ada223b4/itag/59/source/doubleclick/ratebypass/yes/acao/yes/ip/0.0.0.0/ipbits/0/expire/3586434812/sparams/id,itag,source,ratebypass,acao,ip,ipbits,expire/signature/5F797B747D5EE750994E10AAE454E62C7EE0FB1F.53E12CB0472980DF007F49D33AB39331B05345B9/key/ck2/file/file.mp4","Stream_Url":""},"video_03.ogv":{"Type":"video","Progressive_Url":"https://s0.2mdn.net/ads/richmedia/studio/38477698/36187302_20150911070158446_video_03.ogv","Stream_Url":""},"video_02.ogv":{"Type":"video","Progressive_Url":"https://s0.2mdn.net/ads/richmedia/studio/38478415/36187302_20150911070126689_video_02.ogv","Stream_Url":""},"video_01.ogv":{"Type":"video","Progressive_Url":"https://s0.2mdn.net/ads/richmedia/studio/38478414/36187302_20150911070051391_video_01.ogv","Stream_Url":""},"video_intro.webm":{"Type":"video","Progressive_Url":"https://gcdn.2mdn.net/videoplayback/id/5509afbfdfad7c5f/itag/43/source/doubleclick/ratebypass/yes/acao/yes/ip/0.0.0.0/ipbits/0/expire/3586434812/sparams/id,itag,source,ratebypass,acao,ip,ipbits,expire/signature/240A4327B74ECD912FF84A8461735698CE7BED9B.4115B04A29E26C835EA20769BBF87D6D8558AF19/key/ck2/file/file.webm","Stream_Url":""},"video_intro.ogv":{"Type":"video","Progressive_Url":"https://s0.2mdn.net/ads/richmedia/studio/38469072/36187302_20150911014630868_video_intro.ogv","Stream_Url":""},"video_intro.mp4":{"Type":"video","Progressive_Url":"https://gcdn.2mdn.net/videoplayback/id/041cf678a7ca8c97/itag/59/source/doubleclick/ratebypass/yes/acao/yes/ip/0.0.0.0/ipbits/0/expire/3586434812/sparams/id,itag,source,ratebypass,acao,ip,ipbits,expire/signature/B55D7F15558489701EAC352CB6E8DB080AF1804C.35CE25669536542A6A2E80D69C69836FE8B60A9A/key/ck2/file/file.mp4","Stream_Url":""}};
	
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
	Enabler.loadModule(studio.module.ModuleId.RAD_VIDEO, function() {
		preloadVideoIntro();
	});
	//console.log('Images will load after videos');
}

function setMainProfile() {
            
    /*Get the profile for the banner*/
    var profile = new Profile();
	
	profile.background.url = dynamicContent.Feed_970x250[0].theme_assets['970x250_background.jpg']['Url'];
	profile.intro_logo.url = dynamicContent.Feed_970x250[0].theme_assets['970x250_intro_now_tv_logo.png']['Url'];
	profile.ticket_intro.url = dynamicContent.Feed_970x250[0].theme_assets['970x250_ticket_intro.png']['Url'];
	profile.ticket_list.url = dynamicContent.Feed_970x250[0].theme_assets['970x250_ticket_list.png']['Url'];
	profile.play_button_hover.url = dynamicContent.Feed_970x250[0].theme_assets['970x250_video_play_button_hover.png']['Url'];
	profile.arrow_right.url = dynamicContent.Feed_970x250[0].theme_assets['970x250_arrow_right.png']['Url'];
	profile.arrow_left.url = dynamicContent.Feed_970x250[0].theme_assets['970x250_arrow_left.png']['Url'];
	
	profile.ticket_mask.url = dynamicContent.Feed_970x250[0].general_assets['970x250_ticket_mask.png']['Url'];
	profile.ticket_mask_shadow.url = dynamicContent.Feed_970x250[0].general_assets['970x250_ticket_mask_shadow.png']['Url'];
	profile.play_button_white.url = dynamicContent.Feed_970x250[0].general_assets['970x250_video_play_button_white.png']['Url'];
	profile.video_play.url = dynamicContent.Feed_970x250[0].general_assets['970x250_video_play.png']['Url'];
	profile.video_pause.url = dynamicContent.Feed_970x250[0].general_assets['970x250_video_pause.png']['Url'];
	profile.video_sound_off.url = dynamicContent.Feed_970x250[0].general_assets['970x250_video_sound_off.png']['Url'];
	profile.video_sound_on.url = dynamicContent.Feed_970x250[0].general_assets['970x250_video_sound_on.png']['Url'];
	
	profile.intro_headline.url = dynamicContent.Feed_970x250[0].content_assets['970x250_intro_headline.png']['Url'];
	profile.intro_logo_big.url = dynamicContent.Feed_970x250[0].content_assets['970x250_intro_logo_big.png']['Url'];
	profile.intro_logo_small.url = dynamicContent.Feed_970x250[0].content_assets['970x250_intro_logo_small.png']['Url'];
	profile.intro_legals.url = dynamicContent.Feed_970x250[0].content_assets['970x250_intro_legals.png']['Url'];
	profile.intro_legals_btn.url = dynamicContent.Feed_970x250[0].content_assets['970x250_intro_legals_btn.png']['Url'];
	profile.intro_btn.url = dynamicContent.Feed_970x250[0].content_assets['970x250_intro_btn.png']['Url'];
	profile.intro_btn_hover.url = dynamicContent.Feed_970x250[0].content_assets['970x250_intro_btn_hover.png']['Url'];
	
	profile.list_left_btn_hover.url = dynamicContent.Feed_970x250[0].content_assets['970x250_list_left_btn_hover.png']['Url'];
	profile.list_left_btn.url = dynamicContent.Feed_970x250[0].content_assets['970x250_list_left_btn.png']['Url'];
	profile.list_logo_small.url = dynamicContent.Feed_970x250[0].content_assets['970x250_list_logo_small.png']['Url'];
	profile.list_right_btn_hover.url = dynamicContent.Feed_970x250[0].content_assets['970x250_list_right_btn_hover.png']['Url'];
	profile.list_right_btn.url = dynamicContent.Feed_970x250[0].content_assets['970x250_list_right_btn.png']['Url'];	
		
	profile.video_01_txt.url = dynamicContent.Feed_970x250[0].content_assets['970x250_video_txt_01.png']['Url'];
	profile.video_01_img.url = dynamicContent.Feed_970x250[0].content_assets['970x250_video_img_01.jpg']['Url'];
	profile.video_02_txt.url = dynamicContent.Feed_970x250[0].content_assets['970x250_video_txt_02.png']['Url'];
	profile.video_02_img.url = dynamicContent.Feed_970x250[0].content_assets['970x250_video_img_02.jpg']['Url'];
	profile.video_03_txt.url = dynamicContent.Feed_970x250[0].content_assets['970x250_video_txt_03.png']['Url'];
	profile.video_03_img.url = dynamicContent.Feed_970x250[0].content_assets['970x250_video_img_03.jpg']['Url'];
	profile.video_04_txt.url = dynamicContent.Feed_970x250[0].content_assets['970x250_video_txt_04.png']['Url'];
	profile.video_04_img.url = dynamicContent.Feed_970x250[0].content_assets['970x250_video_img_04.jpg']['Url'];
	
	exitURL.url = dynamicContent.Feed_970x250[0].exit_URL.Url;
    
    /*Polite load allt he required images*/
    var batchImageLoader = new BatchImageLoader(profile, function() {
        preloader.fadeOut(function() {
            /*Once the polite load is complete start the setup of the main banner*/
            var main = new Main(profile);
        });
    });
    
}


function Profile() {    
	
	var profile = {};
	  
	/*Dynamic Images*/ 
	profile.background = {};
	profile.intro_logo = {};
	profile.ticket_intro = {};
	profile.ticket_list = {};
	profile.ticket_mask = {};
	profile.ticket_mask_shadow = {};
	profile.play_button_white = {};
	profile.play_button_hover = {};
	
	profile.video_play = {};
	profile.video_pause = {};
	profile.video_sound_off = {};
	profile.video_sound_on = {};
	
	profile.arrow_right = {};
	profile.arrow_left = {};
	
	profile.intro_headline = {};
	profile.intro_logo_big = {};
	profile.intro_logo_small = {};
	profile.intro_legals = {};
	profile.intro_legals_btn = {};
	profile.intro_btn = {};
	profile.intro_btn_hover = {};
	
	profile.list_left_btn_hover = {};
	profile.list_left_btn = {};
	profile.list_logo_small = {};
	profile.list_right_btn_hover = {};
	profile.list_right_btn = {};
	
	profile.video_01_txt = {};
	profile.video_01_img = {};
	profile.video_02_txt = {};
	profile.video_02_img = {};
	profile.video_03_txt = {};
	profile.video_03_img = {};
	profile.video_04_txt = {};
	profile.video_04_img = {};
	
	return profile;
}

    
function Main(profile) {    
	   
	/*Declaration Of Variables*/
	var stage = new createjs.Stage("main");
	stage.enableMouseOver(10);
	
	var background = new createjs.Bitmap(profile.background.img);
	stage.addChild(background);
	
	var introFrame = new IntroFrame(stage, profile);	
	introFrame.startFrame();
	
	var stageContainer = new StageContainer(stage, profile);
	stageContainer.startFrame();

	/*Setup Animation Ticker to only run when required*/
	TweenLite.ticker.addEventListener("tick", tick, stage);
	
	function tick() {
		stage.update(); 
		stageContainer.updateVideoCache(); 
	}
}

function IntroFrame(stage, profile) {
	
	var intro_logo = new createjs.Bitmap(profile.intro_logo.img);
	
	this.startFrame = function () {
		stage.addChild(intro_logo);
		
		TweenLite.delayedCall(2.0, function(){
        	TweenLite.to(intro_logo, 2.5, { x: (430 * 2) - 55 + stage.canvas.width, ease:Linear.easeNone });
        });
	};
}

function StageContainer(stage, profile) { 

	var ticketArray = [];
	var arrowArray = [];
	
	var stage_section; // First, the middle section to be displayed
	
	ticketArray[0] = new VideoContainer(stage, profile, 0,1, disablePlayingVideoStage);
	ticketArray[1] = new VideoContainer(stage, profile, 1,2, disablePlayingVideoStage);
	ticketArray[2] = new ListContainer(stage, profile, 2, updateStageContainerCoor, updateArrowLeft, updateArrowLeftHover, updateArrowRight, updateArrowRightHover, startFrameVisibility);
	ticketArray[3] = new IntroContainer(stage, profile, 3, pauseIntroVideo);
	ticketArray[4] = new VideoContainer(stage, profile, 4,3, disablePlayingVideoStage);
	ticketArray[5] = new VideoContainer(stage, profile, 5,4, disablePlayingVideoStage);
	
	arrowArray[0] = new ArrowContainer(stage, profile, 0, updateStageContainerCoor, updateListLeft, updateListLeftHover, updateListRight, updateListRightHover, disablePlayingVideoStageArrow);
	arrowArray[1] = new ArrowContainer(stage, profile, 1, updateStageContainerCoor, updateListLeft, updateListLeftHover, updateListRight, updateListRightHover,disablePlayingVideoStageArrow);
	arrowArray[2] = new ArrowContainer(stage, profile, 2, updateStageContainerCoor, updateListLeft, updateListLeftHover, updateListRight, updateListRightHover,disablePlayingVideoStageArrow);
	
	this.startFrame = function () {
		stage_section = 2; // First, the middle section to be displayed
		arrowArray[0].updateArrowVisibilityFalse();
		arrowArray[0].updateArrowDirectionLeft();
		arrowArray[1].updateArrowVisibilityFalse();
		arrowArray[1].updateArrowDirectionRight();
		arrowArray[2].updateArrowVisibilityFalse();
		
		ticketArray[3].removeContainerIntroLegalsBtnMoveoverEventHandler();
			
		TweenLite.delayedCall(2.0, function(){
			for (var i = 0; i < ticketArray.length; i++) {
				ticketArray[i].startFrame(stage_section);
			}
			for (var i = 0; i < arrowArray.length; i++) {
				arrowArray[i].startFrame(stage_section);
			}
        });
		TweenLite.delayedCall(4.2, function(){
			ticketArray[4].hideVideoTxt();
        });
		
	};
	
	this.updateVideoCache = function () {
		ticketArray[0].updateTicketVideoCache();
		ticketArray[1].updateTicketVideoCache();
		ticketArray[2].updateListVideoCache();
		//ticketArray[3] - no video
		ticketArray[4].updateTicketVideoCache();
		ticketArray[5].updateTicketVideoCache();
	};
	
	function pauseIntroVideo() {
		ticketArray[2].pauseListVideo();
	}
	
	function startFrameVisibility() {
		arrowArray[0].updateArrowVisibilityTrue();
		arrowArray[1].updateArrowVisibilityTrue();
		ticketArray[3].updateContentStartFrame();
		ticketArray[3].setContainerIntroLegalsBtnMoveoverEventHandler();
	}
	
	function disablePlayingVideoStage(video_index) {
		ticketArray[video_index].disablePlayingVideo();
	}
	
	function disablePlayingVideoStageArrow(video_index) {
		ticketArray[video_index].disablePlayingVideoArrow();
	}
	
	function updateArrowLeft() {
		arrowArray[0].moveOutLeft();
	}
	
	function updateArrowLeftHover() {
		arrowArray[0].moveOverLeft();
	}
	
	function updateListLeft() {
		ticketArray[2].moveOutLeft();
	}
	
	function updateListLeftHover() {
		ticketArray[2].moveOverLeft();
	}
	//----------------------------------
	function updateArrowRight() {
		arrowArray[1].moveOutRight();
	}
	
	function updateArrowRightHover() {
		arrowArray[1].moveOverRight();
	}
	
	function updateListRight() {
		ticketArray[2].moveOutRight();
	}
	
	function updateListRightHover() {
		ticketArray[2].moveOverRight();
	}
	
	function updateStageContainerCoor(move_direction) {
		var move_to_stage_section = 0;
		var current_stage_section = stage_section;
		
		if (move_direction) {
			move_to_stage_section = stage_section + 1;
		} else {
			move_to_stage_section = stage_section - 1;
		}
		
		if (move_to_stage_section === 1) {
			ticketArray[0].setContainerControlsEventHandler();
			ticketArray[1].setContainerControlsEventHandler();
			arrowArray[0].updateArrowVisibilityTrue();
			arrowArray[0].updateArrowDirectionRight();
			arrowArray[1].updateArrowVisibilityFalse();
			arrowArray[2].updateArrowVisibilityFalse();
			ticketArray[2].updateContentStageSection1();
			ticketArray[2].removeContainerLeftButtonClickEventHandler();
		} else if (move_to_stage_section === 2) {
			ticketArray[1].removeContainerControlsEventHandler();
			ticketArray[4].removeContainerControlsEventHandler();
			arrowArray[0].updateArrowVisibilityTrue();
			arrowArray[0].updateArrowDirectionLeft();
			arrowArray[1].updateArrowVisibilityTrue();
			arrowArray[1].updateArrowDirectionRight();
			arrowArray[2].updateArrowVisibilityFalse();
			ticketArray[2].setContainerLeftButtonClickEventHandler();
			ticketArray[2].updateContentStageSection2();
			ticketArray[3].updateContentStageSection2();
			ticketArray[3].setContainerIntroLegalsBtnMoveoverEventHandler();
			ticketArray[4].hideVideoTxt();
		} else if (move_to_stage_section === 3) { 
			ticketArray[4].setContainerControlsEventHandler();
			ticketArray[5].setContainerControlsEventHandler();
			arrowArray[0].updateArrowVisibilityFalse();
			arrowArray[1].updateArrowVisibilityFalse();
			arrowArray[2].updateArrowVisibilityTrue();
			arrowArray[2].updateArrowDirectionLeft();
			ticketArray[3].updateContentStageSection3();
			ticketArray[3].removeContainerIntroLegalsBtnMoveoverEventHandler();
			ticketArray[4].showVideoTxt();
			
		}
		
		for (var i = 0; i < ticketArray.length; i++) {
			ticketArray[i].updateContainerCoor(move_to_stage_section, current_stage_section);
		}
		
		for (var i = 0; i < arrowArray.length; i++) {
			arrowArray[i].updateContainerCoor(move_to_stage_section, current_stage_section);
		}
		
		stage_section = move_to_stage_section;
		//console.log('stage_section=' + stage_section);
	}
}

function ArrowContainer(stage, profile, index, updateStageContainerCoor, updateListLeft, updateListLeftHover, updateListRight, updateListRightHover, disablePlayingVideoStageArrow) { 

	var x_position = (index + 2) * 430 - (430 * 6); //430 - ticket width; 6 - number of tickets
	var arrow_direction_right = true;

	var containerArrow = new createjs.Container(),
		arrow_left = new createjs.Bitmap(profile.arrow_left.img),
		arrow_right = new createjs.Bitmap(profile.arrow_right.img),
		hit_area = new createjs.Shape();
	
	hit_area.graphics.beginFill("#000").drawRect(0, 0, 50, 50);
	containerArrow.addChild(arrow_left, arrow_right);
	containerArrow.regX = arrow_left.image.width * 0.5;
	containerArrow.regY = arrow_left.image.height * 0.5;
	containerArrow.x = x_position;
	containerArrow.y = stage.canvas.height * 0.5;
	containerArrow.hitArea = hit_area;
	
	containerArrow.addEventListener("click", containerArrowClickHandler, false);
	
	function containerArrowClickHandler(event) {
		var target = event.target;
		
	  	if (arrow_direction_right) {
			updateStageContainerCoor(arrow_direction_right);
		} else {
			updateStageContainerCoor(arrow_direction_right);
		}
		
		if (currentVideoPlaying) {
			disablePlayingVideoStageArrow(currentVideo);
			currentVideoPlaying = false;
			//console.log("mamamam");
			//videoCompElement.load();
		}
	}
	
	function removeContainerArrowClickHandler() {
		containerArrow.removeEventListener("click", containerArrowClickHandler);
	}
	
	function setContainerArrowClickHandler() {
		containerArrow.addEventListener("click", containerArrowClickHandler);
	}
	
	containerArrow.addEventListener("mouseover", function(event) {
		var target = event.target;
		
		TweenLite.to(target, 0.3, { scaleX: 1.1, scaleY: 1.1, ease: Quad.easeIn});
		
		if (index === 0) {
			updateListLeftHover();
		}
		if (index === 1) {
			updateListRightHover();
		}
		//console.log('arrow mouse over');
	});
	
	containerArrow.addEventListener("mouseout", function(event) {
		var target = event.target;
		
		TweenLite.to(target, 0.3, { scaleX: 1, scaleY: 1, ease: Quad.easeIn});
		
		if (index === 0) {
			updateListLeft();
		}
		if (index === 1) {
			updateListRight();
		}  
		//console.log('arrow mouse out');
	});
	
	stage.addChild(containerArrow);
	
	// -------------------------------------------
	this.startFrame = function (stage_section) {
		TweenLite.to(containerArrow, 2.5, { x: containerArrow.x + (430 * stage_section) - 55 + stage.canvas.width, ease:Linear.easeNone });
	};
	
	// -------------------------------------------
	this.updateArrowDirectionRight = function () {
		arrow_direction_right = true;
		arrow_left.alpha = 0;
		arrow_right.alpha = 1;
	};
	// -------------------------------------------
	this.updateArrowDirectionLeft = function () {
		arrow_direction_right = false;
		arrow_left.alpha = 1;
		arrow_right.alpha = 0;
	};
	// -------------------------------------------
	this.updateArrowVisibilityTrue = function () {
		containerArrow.alpha = 1;
		setContainerArrowClickHandler();
	};
	// -------------------------------------------
	this.updateArrowVisibilityFalse = function () {
		containerArrow.alpha = 0;
		removeContainerArrowClickHandler();
	};
	// -------------------------------------------
	this.moveOutLeft = function () {
		TweenLite.to(containerArrow, 0.3, { scaleX: 1, scaleY: 1, ease: Quad.easeIn});
	};
	this.moveOverLeft = function () {
		TweenLite.to(containerArrow, 0.3, { scaleX: 1.1, scaleY: 1.1, ease: Quad.easeIn});
	};
	this.moveOutRight = function () {
		TweenLite.to(containerArrow, 0.3, { scaleX: 1, scaleY: 1, ease: Quad.easeIn});
	};
	this.moveOverRight = function () {
		TweenLite.to(containerArrow, 0.3, { scaleX: 1.1, scaleY: 1.1, ease: Quad.easeIn});
	};
	
	// -------------------------------------------
	this.updateContainerCoor = function (move_to_stage_section, current_stage_section) {
		if (move_to_stage_section === 1) {
			TweenLite.to(containerArrow, 0.5, { x: containerArrow.x + (430 * 2) - 55, ease:Linear.easeNone });
		} else if (move_to_stage_section === 2) {
			if (current_stage_section === 1) {
				TweenLite.to(containerArrow, 0.5, { x: containerArrow.x - (430 * 2) + 55, ease:Linear.easeNone });
			} else if (current_stage_section === 3) {
				TweenLite.to(containerArrow, 0.5, { x: containerArrow.x + (430 * 2) - 55, ease:Linear.easeNone });
			}
		} else if (move_to_stage_section === 3) {
			TweenLite.to(containerArrow, 0.5, { x: containerArrow.x - (430 * 2) + 55, ease:Linear.easeNone });
		}
	};
}

var currentVideo;
var currentVideoPlaying = false;

function VideoContainer(stage, profile, index, video_index, disablePlayingVideoStage) {  

	var x_position = (index * 430) - (430 * 6); //430 - ticket width; 6 - number of tickets
	
	var containerImage = new createjs.Container(),
	
		video_txt = new createjs.Bitmap(eval("profile.video_0" + video_index + "_txt.img")),
		video_img = new createjs.Bitmap(eval("profile.video_0" + video_index + "_img.img")),
		ticket_mask = new createjs.Bitmap(profile.ticket_mask.img),
		ticket_mask_shadow = new createjs.Bitmap(profile.ticket_mask_shadow.img);
	
	var containerControls = new createjs.Container(),
		play_button_white = new createjs.Bitmap(profile.play_button_white.img),
		play_button_hover = new createjs.Bitmap(profile.play_button_hover.img),
		hit_area = new createjs.Shape();
		
	var containerVideo = new createjs.Container(),
		containerVideoPlay = new createjs.Container(),
		video_play = new createjs.Bitmap(profile.video_play.img),
		hit_area_play = new createjs.Shape(),
		containerVideoPause = new createjs.Container(),
		video_pause = new createjs.Bitmap(profile.video_pause.img),
		hit_area_pause = new createjs.Shape(),
		containerVideoSoundOn = new createjs.Container(),
		video_sound_on = new createjs.Bitmap(profile.video_sound_on.img),
		hit_area_sound_on = new createjs.Shape(),
		containerVideoSoundOff = new createjs.Container(),
		video_sound_off = new createjs.Bitmap(profile.video_sound_off.img),
		hit_area_sound_off = new createjs.Shape();
		var videoCompElement;
		var videoBitmap;
		
		if (video_index === 4) {
			videoCompElement = videoCompElement04;
			videoBitmap = new createjs.Bitmap(videoCompElement04);
			console.log(video_index);
		}
		
		if (video_index === 1) {
			videoCompElement = videoCompElement01;
			videoBitmap = new createjs.Bitmap(videoCompElement01);
			console.log(video_index);
		} 
		
		if (video_index === 2) {
			videoCompElement = videoCompElement02;
			videoBitmap = new createjs.Bitmap(videoCompElement02);
			console.log(video_index);
		} 
		
		if (video_index === 3) {
			videoCompElement = videoCompElement03;
			videoBitmap = new createjs.Bitmap(videoCompElement03);
			console.log(video_index);
		} 
		
		
		//video = eval("videoCompElement0" + video_index + ""),
		
		//console.log("videoCompElement0" + video_index);
	ticket_mask_shadow.x = x_position;
	ticket_mask_shadow.y = 6;
		
	containerImage.addChild(video_img);
	ticket_mask.cache(0,0,430,230);
	containerImage.filters = [new createjs.AlphaMaskFilter(ticket_mask.cacheCanvas)];
	containerImage.cache(0, 0, 430, 230);
	containerImage.x = x_position;
	containerImage.y = 9;	
	   
	play_button_white.alpha = 1;
	play_button_hover.alpha = 0;
	hit_area.graphics.beginFill("#000").drawRect(0, 0, 430, 230);
	containerControls.addChild(video_txt, play_button_white, play_button_hover);
	containerControls.x = x_position;
	containerControls.y = 9;
	containerControls.hitArea = hit_area;
	
	//containerControls.addEventListener("click", handleContainerControls);
	
	function handleContainerControls(event) {
		if (currentVideoPlaying) {
			disablePlayingVideoStage(currentVideo);
		}
		currentVideoPlaying = true;
		currentVideo = index;
		videoCompElement.muted= true;
		videoCompElement.load();
		videoCompElement.play();
		containerControls.alpha = 0;
		containerVideo.alpha = 1;
		containerVideoPause.alpha = 1;
		containerVideoSoundOn.alpha = 1;
		removeContainerControlsEventHandler();
		setContainerVideoPauseEventHandler();
		setContainerVideoSoundOnEventHandler();
		//containerVideoPause.addEventListener("click", handleContainerVideoPause);
	}
	
	function removeContainerControlsEventHandler() {
		containerControls.removeEventListener("click", handleContainerControls);
	}
	
	function setContainerControlsEventHandler() {
		containerControls.addEventListener("click", handleContainerControls);
	}
	
	this.removeContainerControlsEventHandler = function() {
		containerControls.removeEventListener("click", handleContainerControls);
	}
	
	this.setContainerControlsEventHandler = function() {
		containerControls.addEventListener("click", handleContainerControls);
	}
	
	containerControls.addEventListener("mouseover", function(event) {
		var target = event.target;
		
		target.getChildAt(1).alpha = 0;
		target.getChildAt(2).alpha = 1;
		//console.log('mouse over');
	});
	
	containerControls.addEventListener("mouseout", function(event) {
		var target = event.target;
		
		target.getChildAt(1).alpha = 1;
		target.getChildAt(2).alpha = 0;
	});
	
	
	hit_area_play.graphics.beginFill("#000").drawRect(0, 0, 28, 28);
	containerVideoPlay.addChild(video_play);
	containerVideoPlay.x = x_position + 387;
	containerVideoPlay.y = 24;
	containerVideoPlay.hitArea = hit_area_play;
	containerVideoPlay.alpha = 0;
	
	//containerVideoPlay.addEventListener("click", handleContainerVideoPlay);
	
	function handleContainerVideoPlay(event) {
		videoCompElement.play();
		containerVideoPlay.alpha = 0;
		containerVideoPause.alpha = 1;
		containerVideoPlay.removeEventListener("click", handleContainerVideoPlay);
		containerVideoPause.addEventListener("click", handleContainerVideoPause);
	}
	
	function removeContainerVideoPlayEventHandler() {
		containerVideoPlay.removeEventListener("click", handleContainerVideoPlay);
	}
	
	function setContainerVideoPlayEventHandler() {
		containerVideoPlay.addEventListener("click", handleContainerVideoPlay);
	}
	
	hit_area_pause.graphics.beginFill("#000").drawRect(0, 0, 28, 28);
	containerVideoPause.addChild(video_pause);
	containerVideoPause.x = x_position + 387;
	containerVideoPause.y = 24;
	containerVideoPause.hitArea = hit_area_pause;
    containerVideoPause.alpha = 0;
	
	//containerVideoPause.addEventListener("click", handleContainerVideoPause);
	
	function handleContainerVideoPause(event) {
		videoCompElement.pause();
		containerVideoPlay.alpha = 1;
		containerVideoPause.alpha = 0;
		removeContainerVideoPauseEventHandler();
		setContainerVideoPlayEventHandler();
	}
	
	function removeContainerVideoPauseEventHandler() {
		containerVideoPause.removeEventListener("click", handleContainerVideoPause);
	}
	
	function setContainerVideoPauseEventHandler() {
		containerVideoPause.addEventListener("click", handleContainerVideoPause);
	}
	
	hit_area_sound_on.graphics.beginFill("#000").drawRect(0, 0, 28, 28);
	containerVideoSoundOn.addChild(video_sound_on);
	containerVideoSoundOn.x = x_position + 353;
	containerVideoSoundOn.y = 24;
	containerVideoSoundOn.hitArea = hit_area_sound_on;
	containerVideoSoundOn.alpha = 0;
	
	//containerVideoPlay.addEventListener("click", handleContainerVideoSoundOn);
	
	function handleContainerVideoSoundOn(event) {
        videoCompElement.muted= false;
		containerVideoSoundOn.alpha = 0;
		containerVideoSoundOff.alpha = 1;
		removeContainerVideoSoundOnEventHandler();
		setContainerVideoSoundOffEventHandler();
	}
	
	function removeContainerVideoSoundOnEventHandler() {
		containerVideoSoundOn.removeEventListener("click", handleContainerVideoSoundOn);
	}
	
	function setContainerVideoSoundOnEventHandler() {
		containerVideoSoundOn.addEventListener("click", handleContainerVideoSoundOn);
	}
    
    hit_area_sound_off.graphics.beginFill("#000").drawRect(0, 0, 28, 28);
	containerVideoSoundOff.addChild(video_sound_off);
	containerVideoSoundOff.x = x_position + 353;
	containerVideoSoundOff.y = 24;
	containerVideoSoundOff.hitArea = hit_area_sound_off;
	containerVideoSoundOff.alpha = 0;
	
	//containerVideoSoundOff.addEventListener("click", handleContainerVideoSoundOff);
	
	function handleContainerVideoSoundOff(event) {
        videoCompElement.muted= true;
		containerVideoSoundOn.alpha = 1;
		containerVideoSoundOff.alpha = 0;
		removeContainerVideoSoundOffEventHandler();
		setContainerVideoSoundOnEventHandler();
	}
	
	function removeContainerVideoSoundOffEventHandler() {
		containerVideoSoundOn.removeEventListener("click", handleContainerVideoSoundOff);
	}
	
	function setContainerVideoSoundOffEventHandler() {
		containerVideoSoundOn.addEventListener("click", handleContainerVideoSoundOff);
	}
    
    containerVideo.addChild(videoBitmap);
	containerVideo.filters = [new createjs.AlphaMaskFilter(ticket_mask.cacheCanvas)];
	containerVideo.cache(0, 0, 430, 230);
	containerVideo.x = x_position;
	containerVideo.y = 9;
	containerVideo.alpha = 0;
    
    this.updateTicketVideoCache = function () {
		if (containerVideo) {
			containerVideo.updateCache();
		}
	}
	
	videoCompElement.addEventListener("ended",function(){
		TweenLite.to(containerVideo,0.3,{alpha:0});
		TweenLite.to(containerVideoPlay,0.3,{alpha:0});
		TweenLite.to(containerVideoPause,0.3,{alpha:0});
		TweenLite.to(containerVideoSoundOn,0.3,{alpha:0});
		TweenLite.to(containerVideoSoundOff,0.3,{alpha:0});
		TweenLite.to(containerControls,0.3,{alpha:1});
		
		setContainerControlsEventHandler();
		removeContainerVideoPlayEventHandler();
		removeContainerVideoPauseEventHandler();
		removeContainerVideoSoundOnEventHandler();
		removeContainerVideoSoundOffEventHandler();
		currentVideoPlaying = false;
	},false);
	
	stage.addChild(ticket_mask_shadow,containerImage, containerControls, containerVideo, containerVideoPlay, containerVideoPause, containerVideoSoundOn, containerVideoSoundOff);
	
	this.startFrame = function (stage_section) {
		TweenLite.to(ticket_mask_shadow, 2.5, { x: ticket_mask_shadow.x + (430 * stage_section) - 55 + stage.canvas.width, ease:Linear.easeNone });
		TweenLite.to(containerImage, 2.5, { x: containerImage.x + (430 * stage_section) - 55 + stage.canvas.width, ease:Linear.easeNone });
		TweenLite.to(containerControls, 2.5, { x: containerControls.x + (430 * stage_section) - 55 + stage.canvas.width, ease:Linear.easeNone });
		TweenLite.to(containerVideo, 2.5, { x: containerVideo.x + (430 * stage_section) - 55 + stage.canvas.width, ease:Linear.easeNone });
		
		TweenLite.to(containerVideoPlay, 2.5, { x: containerVideoPlay.x + (430 * stage_section) - 55 + stage.canvas.width, ease:Linear.easeNone });
		TweenLite.to(containerVideoPause, 2.5, { x: containerVideoPause.x + (430 * stage_section) - 55 + stage.canvas.width, ease:Linear.easeNone });
		TweenLite.to(containerVideoSoundOn, 2.5, { x: containerVideoSoundOn.x + (430 * stage_section) - 55 + stage.canvas.width, ease:Linear.easeNone });
		TweenLite.to(containerVideoSoundOff, 2.5, { x: containerVideoSoundOff.x + (430 * stage_section) - 55 + stage.canvas.width, ease:Linear.easeNone });
		//TweenLite.to(video_txt, 0.5, { delay: 2, alpha: 0, ease:Quad.easeIn });
	}
	
	this.disablePlayingVideo = function() {
		TweenLite.to(containerVideo,0.3,{alpha:0});
		TweenLite.to(containerVideoPlay,0.3,{alpha:0});
		TweenLite.to(containerVideoPause,0.3,{alpha:0});
		TweenLite.to(containerVideoSoundOn,0.3,{alpha:0});
		TweenLite.to(containerVideoSoundOff,0.3,{alpha:0});
		TweenLite.to(containerControls,0.3,{alpha:1});
		
		setContainerControlsEventHandler();
		removeContainerVideoPlayEventHandler();
		removeContainerVideoPauseEventHandler();
		removeContainerVideoSoundOnEventHandler();
		removeContainerVideoSoundOffEventHandler();
		
		videoCompElement.pause();
		//videoCompElement.muted= true;
	}
	
	this.disablePlayingVideoArrow = function() {
		TweenLite.to(containerVideo,0.3,{alpha:0});
		TweenLite.to(containerVideoPlay,0.3,{alpha:0});
		TweenLite.to(containerVideoPause,0.3,{alpha:0});
		TweenLite.to(containerVideoSoundOn,0.3,{alpha:0});
		TweenLite.to(containerVideoSoundOff,0.3,{alpha:0});
		TweenLite.to(containerControls,0.3,{alpha:1});
		
		//setContainerControlsEventHandler();
		removeContainerVideoPlayEventHandler();
		removeContainerVideoPauseEventHandler();
		removeContainerVideoSoundOnEventHandler();
		removeContainerVideoSoundOffEventHandler();
		
		videoCompElement.pause();
		//videoCompElement.muted= true;
	}
	
	this.showVideoTxt = function () {
		TweenLite.to(video_txt, 0.3, { alpha: 1, ease: Quad.easeIn});
	}
	
	this.hideVideoTxt = function () {
		TweenLite.to(video_txt, 0.3, { alpha: 0, ease: Quad.easeIn});
	}
	
	this.updateContainerCoor = function (move_to_stage, current_stage_section) {
		if (move_to_stage === 1) {
			TweenLite.to(ticket_mask_shadow, 0.5, { x: ticket_mask_shadow.x + (430 * 2) - 55, ease:Linear.easeNone });
			TweenLite.to(containerImage, 0.5, { x: containerImage.x + (430 * 2) - 55, ease:Linear.easeNone });
			TweenLite.to(containerControls, 0.5, { x: containerControls.x + (430 * 2) - 55, ease:Linear.easeNone });
			TweenLite.to(containerVideo, 0.5, { x: containerVideo.x + (430 * 2) - 55, ease:Linear.easeNone });
			
			TweenLite.to(containerVideoPlay, 0.5, { x: containerVideoPlay.x + (430 * 2) - 55, ease:Linear.easeNone });
			TweenLite.to(containerVideoPause, 0.5, { x: containerVideoPause.x + (430 * 2) - 55, ease:Linear.easeNone });
			TweenLite.to(containerVideoSoundOn, 0.5, { x: containerVideoSoundOn.x + (430 * 2) - 55, ease:Linear.easeNone });
			TweenLite.to(containerVideoSoundOff, 0.5, { x: containerVideoSoundOff.x + (430 * 2) - 55, ease:Linear.easeNone });
		} else if (move_to_stage === 2) {
			if (current_stage_section === 1) {
				TweenLite.to(ticket_mask_shadow, 0.5, { x: ticket_mask_shadow.x - (430 * 2) + 55, ease:Linear.easeNone });
				TweenLite.to(containerImage, 0.5, { x: containerImage.x - (430 * 2) + 55, ease:Linear.easeNone });
				TweenLite.to(containerControls, 0.5, { x: containerControls.x - (430 * 2) + 55, ease:Linear.easeNone });
				TweenLite.to(containerVideo, 0.5, { x: containerVideo.x - (430 * 2) + 55, ease:Linear.easeNone });
				
				TweenLite.to(containerVideoPlay, 0.5, { x: containerVideoPlay.x - (430 * 2) + 55, ease:Linear.easeNone });
				TweenLite.to(containerVideoPause, 0.5, { x: containerVideoPause.x - (430 * 2) + 55, ease:Linear.easeNone });
				TweenLite.to(containerVideoSoundOn, 0.5, { x: containerVideoSoundOn.x - (430 * 2) + 55, ease:Linear.easeNone });
				TweenLite.to(containerVideoSoundOff, 0.5, { x: containerVideoSoundOff.x - (430 * 2) + 55, ease:Linear.easeNone });
			} else if (current_stage_section === 3) {
				TweenLite.to(ticket_mask_shadow, 0.5, { x: ticket_mask_shadow.x + (430 * 2) - 55, ease:Linear.easeNone });
				TweenLite.to(containerImage, 0.5, { x: containerImage.x + (430 * 2) - 55, ease:Linear.easeNone });
				TweenLite.to(containerControls, 0.5, { x: containerControls.x + (430 * 2) - 55, ease:Linear.easeNone });
				TweenLite.to(containerVideo, 0.5, { x: containerVideo.x + (430 * 2) - 55, ease:Linear.easeNone });
				
				TweenLite.to(containerVideoPlay, 0.5, { x: containerVideoPlay.x + (430 * 2) - 55, ease:Linear.easeNone });
				TweenLite.to(containerVideoPause, 0.5, { x: containerVideoPause.x + (430 * 2) - 55, ease:Linear.easeNone });
				TweenLite.to(containerVideoSoundOn, 0.5, { x: containerVideoSoundOn.x + (430 * 2) - 55, ease:Linear.easeNone });
				TweenLite.to(containerVideoSoundOff, 0.5, { x: containerVideoSoundOff.x + (430 * 2) - 55, ease:Linear.easeNone });
			}
		} else if (move_to_stage === 3) {
			TweenLite.to(ticket_mask_shadow, 0.5, { x: ticket_mask_shadow.x - (430 * 2) + 55, ease:Linear.easeNone });
			TweenLite.to(containerImage, 0.5, { x: containerImage.x - (430 * 2) + 55, ease:Linear.easeNone });
			TweenLite.to(containerControls, 0.5, { x: containerControls.x - (430 * 2) + 55, ease:Linear.easeNone });
			TweenLite.to(containerVideo, 0.5, { x: containerVideo.x - (430 * 2) + 55, ease:Linear.easeNone });
			
			TweenLite.to(containerVideoPlay, 0.5, { x: containerVideoPlay.x - (430 * 2) + 55, ease:Linear.easeNone });
			TweenLite.to(containerVideoPause, 0.5, { x: containerVideoPause.x - (430 * 2) + 55, ease:Linear.easeNone });
			TweenLite.to(containerVideoSoundOn, 0.5, { x: containerVideoSoundOn.x - (430 * 2) + 55, ease:Linear.easeNone });
			TweenLite.to(containerVideoSoundOff, 0.5, { x: containerVideoSoundOff.x - (430 * 2) + 55, ease:Linear.easeNone });
		}
		//console.log('move ' + containerControls.x);
	}
}

function IntroContainer(stage, profile, index, pauseIntroVideo) {  

	var x_position = (index * 430) - (430 * 6); //430 - ticket width; 6 - number of tickets
	
	var containerIntroBackground = new createjs.Container(),
		containerIntroContent = new createjs.Container(),
		containerIntroLegals = new createjs.Container(),
		containerIntroLegalsBtn = new createjs.Container(),
		hit_area_legals = new createjs.Shape(),
		containerIntroFindOutBtn = new createjs.Container(),
		hit_area_FindOut = new createjs.Shape(),
	
		ticket_mask = new createjs.Bitmap(profile.ticket_mask.img),
		ticket_mask_shadow = new createjs.Bitmap(profile.ticket_mask_shadow.img),
		
		intro_background = new createjs.Bitmap(profile.ticket_intro.img),
		intro_headline = new createjs.Bitmap(profile.intro_headline.img),
		intro_logo_big = new createjs.Bitmap(profile.intro_logo_big.img),
		intro_logo_small = new createjs.Bitmap(profile.intro_logo_small.img),
		intro_legals = new createjs.Bitmap(profile.intro_legals.img),
		intro_legals_btn = new createjs.Bitmap(profile.intro_legals_btn.img),
		
		intro_btn = new createjs.Bitmap(profile.intro_btn.img),
		intro_btn_hover = new createjs.Bitmap(profile.intro_btn_hover.img);
		
	ticket_mask_shadow.x = x_position;
	ticket_mask_shadow.y = 6;
	
	ticket_mask.cache(0,0,430,230);
	
	containerIntroBackground.addChild(intro_background);
	containerIntroBackground.filters = [new createjs.AlphaMaskFilter(ticket_mask.cacheCanvas)];
	containerIntroBackground.cache(0, 0, 430, 230);
	containerIntroBackground.x = x_position;
	containerIntroBackground.y = 9;	
	
	intro_headline.alpha = 0;
	intro_logo_small.alpha = 0;
	containerIntroContent.addChild(intro_headline, intro_logo_big, intro_logo_small);
	containerIntroContent.x = x_position;
	containerIntroContent.y = 9;	
	
	containerIntroLegals.addChild(intro_legals);
	containerIntroLegals.filters = [new createjs.AlphaMaskFilter(ticket_mask.cacheCanvas)];
	containerIntroLegals.cache(0, 0, 430, 230);
	containerIntroLegals.x = x_position;
	containerIntroLegals.y = 9;
	containerIntroLegals.alpha = 0;	
	   
	hit_area_legals.graphics.beginFill("#000").drawRect(0, 0, 149, 17);
	containerIntroLegalsBtn.addChild(intro_legals_btn);
	containerIntroLegalsBtn.x = x_position + 281;
	containerIntroLegalsBtn.y = 220;
	containerIntroLegalsBtn.hitArea = hit_area_legals;
	containerIntroLegalsBtn.alpha = 0;

	containerIntroLegalsBtn.addEventListener("mouseout", function(event) {
		//containerIntroLegals.alpha = 0;
		TweenLite.to(containerIntroLegals, 0.5, { alpha: 0, ease:Quad.easeIn });
	});
	
	//containerIntroLegalsBtn.addEventListener("mouseover", handlecontainerIntroLegalsBtnMoveover);
	
	function handlecontainerIntroLegalsBtnMoveover(event) {
		//containerIntroLegals.alpha = 1;
		TweenLite.to(containerIntroLegals, 0.5, { alpha: 1, ease:Quad.easeIn });
	}
	
	this.removeContainerIntroLegalsBtnMoveoverEventHandler = function() {
		containerIntroLegalsBtn.removeEventListener("mouseover", handlecontainerIntroLegalsBtnMoveover);
	}
	
	this.setContainerIntroLegalsBtnMoveoverEventHandler = function() {
		containerIntroLegalsBtn.addEventListener("mouseover", handlecontainerIntroLegalsBtnMoveover);
	}
	
	function setContainerIntroLegalsBtnMoveoverEventHandler() {
		containerIntroLegalsBtn.addEventListener("mouseover", handlecontainerIntroLegalsBtnMoveover);
	}
	
	intro_btn.alpha = 1;
	intro_btn_hover.alpha = 0;
	hit_area_FindOut.graphics.beginFill("#000").drawRect(-128, -166, 430, 195);
	containerIntroFindOutBtn.addChild(intro_btn, intro_btn_hover);
	containerIntroFindOutBtn.x = x_position + 128; //128
	containerIntroFindOutBtn.y = 183; //183
	containerIntroFindOutBtn.hitArea = hit_area_FindOut;
	
	containerIntroFindOutBtn.addEventListener('click', bgExitHandler, false);
	
	/*Standard Exit Handler*/
	function bgExitHandler() {
		pauseIntroVideo();
		Enabler.exit('exit', exitURL.url);
	}
  
	containerIntroFindOutBtn.addEventListener("mouseover", function(event) {
		
		TweenLite.to(intro_btn,0.3,{alpha:0});
		TweenLite.to(intro_btn_hover,0.3,{alpha:1});
		//console.log('mouse over');
	});
	
	containerIntroFindOutBtn.addEventListener("mouseout", function(event) {
		
		TweenLite.to(intro_btn,0.3,{alpha:1});
		TweenLite.to(intro_btn_hover,0.3,{alpha:0});
		//console.log('mouse out');
	});
	
	stage.addChild(ticket_mask_shadow,containerIntroBackground, containerIntroContent, containerIntroFindOutBtn,containerIntroLegalsBtn,containerIntroLegals);
	
	this.startFrame = function (stage_section) {
		TweenLite.to(ticket_mask_shadow, 2.5, { x: ticket_mask_shadow.x + (430 * 2) - 55 + stage.canvas.width, ease:Linear.easeNone });
		TweenLite.to(containerIntroBackground, 2.5, { x: containerIntroBackground.x + (430 * 2) - 55 + stage.canvas.width, ease:Linear.easeNone });
		TweenLite.to(containerIntroContent, 2.5, { x: containerIntroContent.x + (430 * 2) - 55 + stage.canvas.width, ease:Linear.easeNone });
		TweenLite.to(containerIntroLegals, 2.5, { x: containerIntroLegals.x + (430 * 2) - 55 + stage.canvas.width, ease:Linear.easeNone });
		TweenLite.to(containerIntroLegalsBtn, 2.5, { x: containerIntroLegalsBtn.x + (430 * 2) - 55 + stage.canvas.width, ease:Linear.easeNone });
		TweenLite.to(containerIntroFindOutBtn, 2.5, { x: containerIntroFindOutBtn.x + (430 * 2) - 55 + stage.canvas.width, ease:Linear.easeNone });
		
		TweenLite.delayedCall(5.0, function(){
        	TweenLite.to(intro_headline,0.3,{alpha:1});
        });
	};
	
	this.updateContentStartFrame = function () {
		//TweenLite.to(intro_headline,0.3,{alpha:1});
		TweenLite.to(containerIntroLegalsBtn,0.3,{alpha:1});
		setContainerIntroLegalsBtnMoveoverEventHandler();
	};
	
	this.updateContentStageSection2 = function () {
		TweenLite.to(intro_headline, 0.5, { alpha: 1, ease:Quad.easeIn });
		TweenLite.to(intro_logo_big, 0.5, { alpha: 1, ease:Quad.easeIn });
		TweenLite.to(containerIntroFindOutBtn, 0.5, { alpha: 1, ease:Quad.easeIn });
		TweenLite.to(containerIntroLegalsBtn, 0.5, { delay: 0.2, alpha: 1, ease:Quad.easeIn });
		TweenLite.to(intro_logo_small, 0.5, { alpha: 0, ease:Quad.easeIn });
		
		containerIntroFindOutBtn.addEventListener('click', bgExitHandler);
	};
	
	this.updateContentStageSection3 = function () {
		TweenLite.to(intro_headline, 0.5, { alpha: 0, ease:Quad.easeIn });
		TweenLite.to(intro_logo_big, 0.5, { alpha: 0, ease:Quad.easeIn });
		TweenLite.to(containerIntroFindOutBtn, 0.5, { alpha: 0, ease:Quad.easeIn });
		TweenLite.to(containerIntroLegalsBtn, 0.5, { alpha: 0, ease:Quad.easeIn });
		TweenLite.to(intro_logo_small, 0.5, { delay: 0.2, alpha: 1, ease:Quad.easeIn });
		
		containerIntroFindOutBtn.removeEventListener('click', bgExitHandler);
	};
	
	this.updateContainerCoor = function (move_to_stage, current_stage_section) {
		if (move_to_stage === 1) {
			TweenLite.to(ticket_mask_shadow, 0.5, { x: ticket_mask_shadow.x + (430 * 2) - 55, ease:Linear.easeNone });
			TweenLite.to(containerIntroBackground, 0.5, { x: containerIntroBackground.x + (430 * 2) - 55, ease:Linear.easeNone });
			TweenLite.to(containerIntroContent, 0.5, { x: containerIntroContent.x + (430 * 2) - 55, ease:Linear.easeNone });
			TweenLite.to(containerIntroLegals, 0.5, { x: containerIntroLegals.x + (430 * 2) - 55, ease:Linear.easeNone });
			TweenLite.to(containerIntroLegalsBtn, 0.5, { x: containerIntroLegalsBtn.x + (430 * 2) - 55, ease:Linear.easeNone });
			TweenLite.to(containerIntroFindOutBtn, 0.5, { x: containerIntroFindOutBtn.x + (430 * 2) - 55, ease:Linear.easeNone });
		} else if (move_to_stage === 2) {
			if (current_stage_section === 1) {
				TweenLite.to(ticket_mask_shadow, 0.5, { x: ticket_mask_shadow.x - (430 * 2) + 55, ease:Linear.easeNone });
				TweenLite.to(containerIntroBackground, 0.5, { x: containerIntroBackground.x - (430 * 2) + 55, ease:Linear.easeNone });
				TweenLite.to(containerIntroContent, 0.5, { x: containerIntroContent.x - (430 * 2) + 55, ease:Linear.easeNone });
				TweenLite.to(containerIntroLegals, 0.5, { x: containerIntroLegals.x - (430 * 2) + 55, ease:Linear.easeNone });
				TweenLite.to(containerIntroLegalsBtn, 0.5, { x: containerIntroLegalsBtn.x - (430 * 2) + 55, ease:Linear.easeNone });
				TweenLite.to(containerIntroFindOutBtn, 0.5, { x: containerIntroFindOutBtn.x - (430 * 2) + 55, ease:Linear.easeNone });
			} else if (current_stage_section === 3) {
				TweenLite.to(ticket_mask_shadow, 0.5, { x: ticket_mask_shadow.x + (430 * 2) - 55, ease:Linear.easeNone });
				TweenLite.to(containerIntroBackground, 0.5, { x: containerIntroBackground.x + (430 * 2) - 55, ease:Linear.easeNone });
				TweenLite.to(containerIntroContent, 0.5, { x: containerIntroContent.x + (430 * 2) - 55, ease:Linear.easeNone });
				TweenLite.to(containerIntroLegals, 0.5, { x: containerIntroLegals.x + (430 * 2) - 55, ease:Linear.easeNone });
				TweenLite.to(containerIntroLegalsBtn, 0.5, { x: containerIntroLegalsBtn.x + (430 * 2) - 55, ease:Linear.easeNone });
				TweenLite.to(containerIntroFindOutBtn, 0.5, { x: containerIntroFindOutBtn.x + (430 * 2) - 55, ease:Linear.easeNone });
			}
		} else if (move_to_stage === 3) {
			TweenLite.to(ticket_mask_shadow, 0.5, { x: ticket_mask_shadow.x - (430 * 2) + 55, ease:Linear.easeNone });
			TweenLite.to(containerIntroBackground, 0.5, { x: containerIntroBackground.x - (430 * 2) + 55, ease:Linear.easeNone });
			TweenLite.to(containerIntroContent, 0.5, { x: containerIntroContent.x - (430 * 2) + 55, ease:Linear.easeNone });
			TweenLite.to(containerIntroLegals, 0.5, { x: containerIntroLegals.x - (430 * 2) + 55, ease:Linear.easeNone });
			TweenLite.to(containerIntroLegalsBtn, 0.5, { x: containerIntroLegalsBtn.x - (430 * 2) + 55, ease:Linear.easeNone });
			TweenLite.to(containerIntroFindOutBtn, 0.5, { x: containerIntroFindOutBtn.x - (430 * 2) + 55, ease:Linear.easeNone });
		}
		//console.log('move ' + containerControls.x);
	};
}	

function ListContainer(stage, profile, index, updateStageContainerCoor, updateArrowLeft, updateArrowLeftHover, updateArrowRight, updateArrowRightHover, startFrameVisibility) {  

	var x_position = (index * 430) - (430 * 6); //430 - ticket width; 6 - number of tickets
	
	var containerListBackground = new createjs.Container(),
		containerLeftBtn = new createjs.Container(),
		containerRightBtn = new createjs.Container(),
		containerListContent = new createjs.Container(),
		containerListVideo = new createjs.Container(),
		
		containerListVideoPlay = new createjs.Container(),
		video_play = new createjs.Bitmap(profile.video_play.img),
		hit_area_play = new createjs.Shape(),
		containerListVideoPause = new createjs.Container(),
		video_pause = new createjs.Bitmap(profile.video_pause.img),
		hit_area_pause = new createjs.Shape(),
		video_intro = new createjs.Bitmap(videoCompElementIntro),
		
		list_background = new createjs.Bitmap(profile.ticket_list.img),
		ticket_mask = new createjs.Bitmap(profile.ticket_mask.img),
		ticket_mask_shadow = new createjs.Bitmap(profile.ticket_mask_shadow.img),
		
		list_left_btn_hover = new createjs.Bitmap(profile.list_left_btn_hover.img),
		list_left_btn = new createjs.Bitmap(profile.list_left_btn.img),
		hit_area_left = new createjs.Shape(),
		list_logo_small = new createjs.Bitmap(profile.list_logo_small.img),
		list_right_btn_hover = new createjs.Bitmap(profile.list_right_btn_hover.img),
		list_right_btn = new createjs.Bitmap(profile.list_right_btn.img),
		hit_area_right = new createjs.Shape();

	ticket_mask_shadow.x = x_position;
	ticket_mask_shadow.y = 6;
	ticket_mask.cache(0,0,430,230);
		
	containerListBackground.addChild(list_background);
	containerListBackground.filters = [new createjs.AlphaMaskFilter(ticket_mask.cacheCanvas)];
	containerListBackground.cache(0, 0, 430, 230);
	containerListBackground.x = x_position;
	containerListBackground.y = 9;
	
	hit_area_play.graphics.beginFill("#000").drawRect(0, 0, 28, 28);
	containerListVideoPlay.addChild(video_play);
	containerListVideoPlay.x = x_position + 387;
	containerListVideoPlay.y = 24;
	containerListVideoPlay.hitArea = hit_area_play;
	containerListVideoPlay.alpha = 0;
	
	//containerListVideoPlay.addEventListener("click", handleContainerVideoPlay);
	
	function handleContainerVideoPlay(event) {
		videoCompElementIntro.play();
		containerListVideoPlay.alpha = 0;
		containerListVideoPause.alpha = 1;
		containerListVideoPlay.removeEventListener("click", handleContainerVideoPlay);
		containerListVideoPause.addEventListener("click", handleContainerVideoPause);
	}
	
	function removeContainerVideoPlayEventHandler() {
		containerListVideoPlay.removeEventListener("click", handleContainerVideoPlay);
	}
	
	function setContainerVideoPlayEventHandler() {
		containerListVideoPlay.addEventListener("click", handleContainerVideoPlay);
	}
	
	hit_area_pause.graphics.beginFill("#000").drawRect(0, 0, 28, 28);
	containerListVideoPause.addChild(video_pause);
	containerListVideoPause.x = x_position + 387;
	containerListVideoPause.y = 24;
	containerListVideoPause.hitArea = hit_area_pause;
	
	containerListVideoPause.addEventListener("click", handleContainerVideoPause);
	
	function handleContainerVideoPause(event) {
		videoCompElementIntro.pause();
		containerListVideoPlay.alpha = 1;
		containerListVideoPause.alpha = 0;
		containerListVideoPlay.addEventListener("click", handleContainerVideoPlay);
		containerListVideoPause.removeEventListener("click", handleContainerVideoPause);
	}
	
	function removeContainerVideoPauseEventHandler() {
		containerListVideoPause.removeEventListener("click", handleContainerVideoPause);
	}
	
	function setContainerVideoPauseEventHandler() {
		containerListVideoPause.addEventListener("click", handleContainerVideoPause);
	}
	
	containerListVideo.addChild(video_intro);
	containerListVideo.filters = [new createjs.AlphaMaskFilter(ticket_mask.cacheCanvas)];
	containerListVideo.cache(0, 0, 430, 230);
	containerListVideo.x = x_position;
	containerListVideo.y = 9;
	
	var videoIntroShow = true;
	videoCompElementIntro.addEventListener("ended",function(){
		TweenLite.to(containerListVideo,0.3,{alpha:0});
		TweenLite.to(containerListVideoPlay,0.3,{alpha:0});
		TweenLite.to(containerListVideoPause,0.3,{alpha:0});
		TweenLite.to(containerLeftBtn,0.3,{alpha:1});
		TweenLite.to(containerRightBtn,0.3,{alpha:1});
		removeContainerVideoPlayEventHandler();
		removeContainerVideoPauseEventHandler();
		setContainerLeftButtonClickEventHandler();
		setContainerRightButtonClickEventHandler();
		videoIntroShow = false;
		startFrameVisibility();
	},false);	
	   
	list_left_btn.alpha = 1;
	list_left_btn_hover.alpha = 0;
	hit_area_left.graphics.beginFill("#000").drawRect(0, 0, 171, 105);
	containerLeftBtn.addChild(list_left_btn, list_left_btn_hover);
	containerLeftBtn.x = x_position + 10;
	containerLeftBtn.y = 60;
	containerLeftBtn.hitArea = hit_area_left;
	containerLeftBtn.alpha = 0;
	
	containerLeftBtn.addEventListener("mouseover", function(event) {
		list_left_btn.alpha = 0;
		list_left_btn_hover.alpha = 1;
		updateArrowLeftHover();
	});
	
	containerLeftBtn.addEventListener("mouseout", function(event) {
		list_left_btn.alpha = 1;
		list_left_btn_hover.alpha = 0;
		updateArrowLeft();
	});
	
	//containerLeftBtn.addEventListener("click", handleContainerLeftBtnClick);
	
	function handleContainerLeftBtnClick(event) {
		updateStageContainerCoor(false);
	}
	
	this.removeContainerLeftButtonClickEventHandler = function() {
		containerLeftBtn.removeEventListener("click", handleContainerLeftBtnClick);
	}
	
	this.setContainerLeftButtonClickEventHandler = function() {
		containerLeftBtn.addEventListener("click", handleContainerLeftBtnClick);
	}
	
	function setContainerLeftButtonClickEventHandler() {
		containerLeftBtn.addEventListener("click", handleContainerLeftBtnClick);
	}
	
	list_right_btn.alpha = 1;
	list_right_btn_hover.alpha = 0;
	hit_area_right.graphics.beginFill("#000").drawRect(0, 0, 171, 105);
	containerRightBtn.addChild(list_right_btn, list_right_btn_hover);
	containerRightBtn.x = x_position + 249;
	containerRightBtn.y = 60;
	containerRightBtn.hitArea = hit_area_right;
	containerRightBtn.alpha = 0;
	
	containerRightBtn.addEventListener("mouseover", function(event) {
		list_right_btn.alpha = 0;
		list_right_btn_hover.alpha = 1;
		updateArrowRightHover();
	});
	
	containerRightBtn.addEventListener("mouseout", function(event) {
		list_right_btn.alpha = 1;
		list_right_btn_hover.alpha = 0;
		updateArrowRight();
	});
	
	//containerRightBtn.addEventListener("click", handleContainerRightBtnClick);
	
	function handleContainerRightBtnClick(event) {
		updateStageContainerCoor(true);
	}
	
	function removeContainerRightButtonClickEventHandler() {
		containerRightBtn.removeEventListener("click", handleContainerRightBtnClick);
	}
	
	function setContainerRightButtonClickEventHandler() {
		containerRightBtn.addEventListener("click", handleContainerRightBtnClick);
	}
	
	list_logo_small.alpha = 0;
	containerListContent.addChild(list_logo_small);
	containerListContent.x = x_position;
	containerListContent.y = 9;	
	
	stage.addChild(ticket_mask_shadow, containerListBackground, containerLeftBtn, containerRightBtn, containerListContent, containerListVideo, containerListVideoPlay, containerListVideoPause);
	
	this.startFrame = function (stage_section) {
		TweenLite.to(ticket_mask_shadow, 2.5, { x: ticket_mask_shadow.x + (430 * stage_section) - 55 + stage.canvas.width, ease:Linear.easeNone });
		TweenLite.to(containerListBackground, 2.5, { x: containerListBackground.x + (430 * stage_section) - 55 + stage.canvas.width, ease:Linear.easeNone });
		TweenLite.to(containerLeftBtn, 2.5, { x: containerLeftBtn.x + (430 * stage_section) - 55 + stage.canvas.width, ease:Linear.easeNone });
		TweenLite.to(containerRightBtn, 2.5, { x: containerRightBtn.x + (430 * stage_section) - 55 + stage.canvas.width, ease:Linear.easeNone });
		TweenLite.to(containerListContent, 2.5, { x: containerListContent.x + (430 * stage_section) - 55 + stage.canvas.width, ease:Linear.easeNone });
		TweenLite.to(containerListVideo, 2.5, { x: containerListVideo.x + (430 * stage_section) - 55 + stage.canvas.width, ease:Linear.easeNone });
		TweenLite.to(containerListVideoPlay, 2.5, { x: containerListVideoPlay.x + (430 * stage_section) - 55 + stage.canvas.width, ease:Linear.easeNone });
		TweenLite.to(containerListVideoPause, 2.5, { x: containerListVideoPause.x + (430 * stage_section) - 55 + stage.canvas.width, ease:Linear.easeNone });
		TweenLite.delayedCall(2.2, function(){
			videoCompElementIntro.play();
        });
	}
	
	this.updateListVideoCache = function () {
		if (containerListVideo) {
			containerListVideo.updateCache();
		}
	}
	
	this.pauseListVideo = function () {
		if (videoIntroShow) {
			videoCompElementIntro.pause();
			containerListVideoPlay.alpha = 1;
			containerListVideoPause.alpha = 0;
			removeContainerVideoPauseEventHandler();
			setContainerVideoPlayEventHandler();
		}
	}
	
	this.updateContentStageSection2 = function () {
		TweenLite.to(containerLeftBtn, 0.5, { alpha: 1, ease:Quad.easeIn });
		TweenLite.to(containerRightBtn, 0.5, { delay: 0.2, alpha: 1, ease:Quad.easeIn });
		TweenLite.to(list_logo_small, 0.5, { alpha: 0, ease:Quad.easeIn });
	}
	
	this.updateContentStageSection1 = function () {
		TweenLite.to(containerLeftBtn, 0.5, { alpha: 0, ease:Quad.easeIn });
		TweenLite.to(containerRightBtn, 0.5, { alpha: 0, ease:Quad.easeIn });
		TweenLite.to(list_logo_small, 0.5, { delay: 0.2, alpha: 1, ease:Quad.easeIn });
	}
	
	// -------------------------------------------
	this.moveOutLeft = function () {
		list_left_btn.alpha = 1;
		list_left_btn_hover.alpha = 0;
	}
	this.moveOverLeft = function () {
		list_left_btn.alpha = 0;
		list_left_btn_hover.alpha = 1;
	}
	// -------------------------------------------
	this.moveOutRight = function () {
		list_right_btn.alpha = 1;
		list_right_btn_hover.alpha = 0;
	}
	this.moveOverRight = function () {
		list_right_btn.alpha = 0;
		list_right_btn_hover.alpha = 1;
	}
	
	this.updateContainerCoor = function (move_to_stage, current_stage_section) {
		if (move_to_stage === 1) {
			TweenLite.to(ticket_mask_shadow, 0.5, { x: ticket_mask_shadow.x + (430 * 2) - 55, ease:Linear.easeNone });
			TweenLite.to(containerListBackground, 0.5, { x: containerListBackground.x + (430 * 2) - 55, ease:Linear.easeNone });
			TweenLite.to(containerLeftBtn, 0.5, { x: containerLeftBtn.x + (430 * 2) - 55, ease:Linear.easeNone });
			TweenLite.to(containerRightBtn, 0.5, { x: containerRightBtn.x + (430 * 2) - 55, ease:Linear.easeNone });
			TweenLite.to(containerListContent, 0.5, { x: containerListContent.x + (430 * 2) - 55, ease:Linear.easeNone });
			TweenLite.to(containerListVideo, 0.5, { x: containerListVideo.x + (430 * 2) - 55, ease:Linear.easeNone });
			TweenLite.to(containerListVideoPlay, 0.5, { x: containerListVideoPlay.x + (430 * 2) - 55, ease:Linear.easeNone });
			TweenLite.to(containerListVideoPause, 0.5, { x: containerListVideoPause.x + (430 * 2) - 55, ease:Linear.easeNone });
		} else if (move_to_stage === 2) {
			if (current_stage_section === 1) {
				TweenLite.to(ticket_mask_shadow, 0.5, { x: ticket_mask_shadow.x - (430 * 2) + 55, ease:Linear.easeNone });
				TweenLite.to(containerListBackground, 0.5, { x: containerListBackground.x - (430 * 2) + 55, ease:Linear.easeNone });
				TweenLite.to(containerLeftBtn, 0.5, { x: containerLeftBtn.x - (430 * 2) + 55, ease:Linear.easeNone });
				TweenLite.to(containerRightBtn, 0.5, { x: containerRightBtn.x - (430 * 2) + 55, ease:Linear.easeNone });
				TweenLite.to(containerListContent, 0.5, { x: containerListContent.x - (430 * 2) + 55, ease:Linear.easeNone });
				TweenLite.to(containerListVideo, 0.5, { x: containerListVideo.x - (430 * 2) + 55, ease:Linear.easeNone });
				TweenLite.to(containerListVideoPlay, 0.5, { x: containerListVideoPlay.x - (430 * 2) + 55, ease:Linear.easeNone });
				TweenLite.to(containerListVideoPause, 0.5, { x: containerListVideoPause.x - (430 * 2) + 55, ease:Linear.easeNone });
			} else if (current_stage_section === 3) {
				TweenLite.to(ticket_mask_shadow, 0.5, { x: ticket_mask_shadow.x + (430 * 2) - 55, ease:Linear.easeNone });
				TweenLite.to(containerListBackground, 0.5, { x: containerListBackground.x + (430 * 2) - 55, ease:Linear.easeNone });
				TweenLite.to(containerLeftBtn, 0.5, { x: containerLeftBtn.x + (430 * 2) - 55, ease:Linear.easeNone });
				TweenLite.to(containerRightBtn, 0.5, { x: containerRightBtn.x + (430 * 2) - 55, ease:Linear.easeNone });
				TweenLite.to(containerListContent, 0.5, { x: containerListContent.x + (430 * 2) - 55, ease:Linear.easeNone });
				TweenLite.to(containerListVideoPlay, 0.5, { x: containerListVideoPlay.x + (430 * 2) - 55, ease:Linear.easeNone });
				TweenLite.to(containerListVideoPause, 0.5, { x: containerListVideoPause.x + (430 * 2) - 55, ease:Linear.easeNone });
			}
		} else if (move_to_stage === 3) {
			TweenLite.to(ticket_mask_shadow, 0.5, { x: ticket_mask_shadow.x - (430 * 2) + 55, ease:Linear.easeNone });
			TweenLite.to(containerListBackground, 0.5, { x: containerListBackground.x - (430 * 2) + 55, ease:Linear.easeNone });
			TweenLite.to(containerLeftBtn, 0.5, { x: containerLeftBtn.x - (430 * 2) + 55, ease:Linear.easeNone });
			TweenLite.to(containerRightBtn, 0.5, { x: containerRightBtn.x - (430 * 2) + 55, ease:Linear.easeNone });
			TweenLite.to(containerListContent, 0.5, { x: containerListContent.x - (430 * 2) + 55, ease:Linear.easeNone });
			TweenLite.to(containerListVideo, 0.5, { x: containerListVideo.x - (430 * 2) + 55, ease:Linear.easeNone });
			TweenLite.to(containerListVideoPlay, 0.5, { x: containerListVideoPlay.x - (430 * 2) + 55, ease:Linear.easeNone });
			TweenLite.to(containerListVideoPause, 0.5, { x: containerListVideoPause.x - (430 * 2) + 55, ease:Linear.easeNone });
		}
		
		//console.log('move ' + containerControls.x);
	}
}	
	
	
/**
* Batch Image Loader
*/

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

/**
* ImageLoader
*/

        
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


/**
* Preloader Animation
*/

(function (window) {
        
    function PreloaderAnimation() {    
        
        var stage = new createjs.Stage("preloader"),
            container = new createjs.Container();
        
        stage.autoClear = true;
        
        for (var i = 0; i < 12; i++) {
            var circle = new PreloaderAsset((1/12) * i, "#999999", 3),
                degrees = (360 / 12) * i + (135),
                radians = degrees * (Math.PI / 180);
            
            circle.x = Math.sin(radians) * 20;
            circle.y = Math.cos(radians) * 20;
            container.addChild(circle);
        }

        container.x = stage.canvas.width * 0.5;
        container.y = stage.canvas.height * 0.5;
        container.scaleX = 0.6;
        container.scaleY = 0.6;
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
    


// ------ VIDEO FUNCTIONS ------
var preloadingIntro = false;
var preloadingVideo01 = false;
var preloadingVideo02 = false;
var preloadingVideo03 = false;
var preloadingVideo04 = false;
var videoCompElementIntro;
var videoCompElement01;
var videoCompElement02;
var videoCompElement03;
var videoCompElement04;

function preloadVideoIntro() {
	preloadingIntro = true;
	var videoContainerIntro = document.getElementById('video-player-0');
	var videoComp= new studio.sdk.rad.Video({
		autoPlay: false,
		controls: false,
		sources: [ 
			dynamicContent.Feed_970x250[0].video_assets['video_intro.mp4']['Progressive_Url'],
			dynamicContent.Feed_970x250[0].video_assets['video_intro.ogv']['Progressive_Url'],
			dynamicContent.Feed_970x250[0].video_assets['video_intro.webm']['Progressive_Url']
		]
	});
	videoComp.setElement(videoContainerIntro);
	videoCompElementIntro = videoComp.getVideoElement();
	videoCompElementIntro.addEventListener("canplaythrough", canPlayVideoIntroHandler, false);
	setTimeout(videoIntroEventFailedToFireEventHandler, 2000);
}

function canPlayVideoIntroHandler(e) {
	videoCompElementIntro.removeEventListener("canplaythrough", canPlayVideoIntroHandler, false);
	if(preloadingIntro) {
		preloadingIntro = false;
		preloadVideo01();
	}
}

function videoIntroEventFailedToFireEventHandler() {
	videoCompElementIntro.removeEventListener("canplaythrough", canPlayVideoIntroHandler, false);
	if(preloadingIntro) {
		preloadingIntro = false;
		preloadVideo01();
	}
}

function preloadVideo01() {
	preloadingVideo01 = true;
	var videoContainer01 = document.getElementById('video-player-1');
	var videoComp= new studio.sdk.rad.Video({
		autoPlay: false,
		controls: false,
		sources: [ 
			dynamicContent.Feed_970x250[0].video_assets['video_01.mp4']['Progressive_Url'],
			dynamicContent.Feed_970x250[0].video_assets['video_01.ogv']['Progressive_Url'],
			dynamicContent.Feed_970x250[0].video_assets['video_01.webm']['Progressive_Url']
		]
	});
	videoComp.setElement(videoContainer01);
	videoCompElement01 = videoComp.getVideoElement();
	videoCompElement01.addEventListener("canplaythrough", canPlayVideo01Handler, false);
	setTimeout(video01EventFailedToFireEventHandler, 2000);
}

function canPlayVideo01Handler(e) {
	videoCompElement01.removeEventListener("canplaythrough", canPlayVideo01Handler, false);
	if(preloadingVideo01) {
		preloadingVideo01 = false;
		preloadVideo02();
	}
}

function video01EventFailedToFireEventHandler() {
	videoCompElement01.removeEventListener("canplaythrough", canPlayVideo01Handler, false);
	if(preloadingVideo01) {
		preloadingVideo01 = false;
		preloadVideo02();
	}
}

function preloadVideo02() {
	preloadingVideo02 = true;
	var videoContainer02 = document.getElementById('video-player-2');
	var videoComp = new studio.sdk.rad.Video({
		autoPlay: false,
		controls: false,
		sources: [ 
			dynamicContent.Feed_970x250[0].video_assets['video_02.mp4']['Progressive_Url'],
			dynamicContent.Feed_970x250[0].video_assets['video_02.ogv']['Progressive_Url'],
			dynamicContent.Feed_970x250[0].video_assets['video_02.webm']['Progressive_Url']
		]
	});
	videoComp.setElement(videoContainer02);
	videoCompElement02 = videoComp.getVideoElement();
	videoCompElement02.addEventListener("canplaythrough", canPlayVideo02Handler, false);
	setTimeout(video02EventFailedToFireEventHandler, 2000);
}

function canPlayVideo02Handler(e) {
	videoCompElement02.removeEventListener("canplaythrough", canPlayVideo02Handler, false);
	if(preloadingVideo02) {
		preloadingVideo02 = false;
		preloadVideo03();
	}
}

function video02EventFailedToFireEventHandler() {
	videoCompElement02.removeEventListener("canplaythrough", canPlayVideo02Handler, false);
	if(preloadingVideo02) {
		preloadingVideo02 = false;
		preloadVideo03();
	}
}

function preloadVideo03() {
	preloadingVideo03 = true;
	var videoContainer03 = document.getElementById('video-player-3');
	var videoComp = new studio.sdk.rad.Video({
		autoPlay: false,
		controls: false,
		sources: [ 
			dynamicContent.Feed_970x250[0].video_assets['video_03.mp4']['Progressive_Url'],
			dynamicContent.Feed_970x250[0].video_assets['video_03.ogv']['Progressive_Url'],
			dynamicContent.Feed_970x250[0].video_assets['video_03.webm']['Progressive_Url']
		]
	});
	videoComp.setElement(videoContainer03);
	videoCompElement03 = videoComp.getVideoElement();
	videoCompElement03.addEventListener("canplaythrough", canPlayVideo03Handler, false);
	setTimeout(video03EventFailedToFireEventHandler, 2000);
}

function canPlayVideo03Handler(e) {
	videoCompElement03.removeEventListener("canplaythrough", canPlayVideo03Handler, false);
	if(preloadingVideo03) {
		preloadingVideo03 = false;
		preloadVideo04();
	}
}

function video03EventFailedToFireEventHandler() {
	videoCompElement03.removeEventListener("canplaythrough", canPlayVideo03Handler, false);
	if(preloadingVideo03) {
		preloadingVideo03 = false;
		preloadVideo04();
	}
}

function preloadVideo04() {
	preloadingVideo04 = true;
	var videoContainer04 = document.getElementById('video-player-4');
	var videoComp= new studio.sdk.rad.Video({
		autoPlay: false,
		controls: false,
		sources: [ 
			dynamicContent.Feed_970x250[0].video_assets['video_04.mp4']['Progressive_Url'],
			dynamicContent.Feed_970x250[0].video_assets['video_04.ogv']['Progressive_Url'],
			dynamicContent.Feed_970x250[0].video_assets['video_04.webm']['Progressive_Url']
		]
	});
	videoComp.setElement(videoContainer04);
	videoCompElement04 = videoComp.getVideoElement();
	videoCompElement04.addEventListener("canplaythrough", canPlayVideo04Handler, false);
	setTimeout(video04EventFailedToFireEventHandler, 2000);
}

function canPlayVideo04Handler(e) {
	videoCompElement04.removeEventListener("canplaythrough", canPlayVideo04Handler, false);
	if(preloadingVideo04) {
		preloadingVideo04 = false;
		allVideosLoadedHandler();
	}
}

function video04EventFailedToFireEventHandler() {
	videoCompElement04.removeEventListener("canplaythrough", canPlayVideo04Handler, false);
	if(preloadingVideo04) {
		preloadingVideo04 = false;
		allVideosLoadedHandler();
	}
}

function allVideosLoadedHandler() {
		console.log('videos are loaded');
		setMainProfile();
}