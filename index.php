<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>	
<?php include("config/config.php"); ?>
	<title><?php echo $seo_title ; ?></title>
	<meta name="description" content="<?php echo $seo_description ; ?>"/>
	<meta name="keywords" content="<?php echo $seo_keywords ; ?>"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<meta name="theme-color" content="#8001e8">
	<meta name="msapplication-navbutton-color" content="<?php echo $colorone; ?>">
	<meta name="apple-mobile-web-app-status-bar-style" content="<?php echo $colorone; ?>">	
	<link rel="icon" type="image/png" href="imgs/points.png" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="<?php echo $seo_title ; ?>" />
	<meta property="og:description" content="<?php echo $seo_description ; ?>" />
	<meta property="og:url" content="<?php echo $seo_url ; ?>" />
	<meta property="og:site_name" content="<?php echo $seo_title ; ?>" />
	<meta property="og:image" content="<?php echo $seo_url ; ?>/imgs/share.jpg" />
	<meta property="og:image:width" content="1280" />
	<meta property="og:image:height" content="720" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:description" content="<?php echo $seo_description ; ?>" />
	<meta name="twitter:title" content="<?php echo $seo_title ; ?>" />
	<meta name="twitter:image" content="<?php echo $seo_url ; ?>/imgs/share.jpg" />
	<link rel="alternate" type="application/rss+xml" title="RSS Feed for <?php echo $seo_title ; ?>" href="rssmap.xml" />
	<link rel="alternate" type="application/atom+xml" title="Atom Feed for <?php echo $seo_title ; ?>" href="atomap.xml" />
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Two+Tone|" rel="stylesheet">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
	<link href="css/bootstrap.min.css" rel="stylesheet" />  
	<link href="css/animate.css" rel="stylesheet" />
	<link href="css/venobox.min.css" rel="stylesheet" />
	<link href="css/magnific-popup.css" rel="stylesheet" />
	<link href="css/style.css" rel="stylesheet" />	 
	<style>
		@media (max-width: 881px) { .seopc { display: none;	} } .c-p-2 { background: <?php echo $colortwo; ?> ; } .ib:before { box-shadow: inset 0 0 0 4px <?php echo $colortwo; ?> ; background: <?php echo $colorone; ?>; }
		.status-item:before, .ib:hover::before, .isb:hover::before, .isb:before, .platform-item.active:before { box-shadow: inset 0 0 0 4px <?php echo $colortwo; ?> ; background: <?php echo $colorone; ?>; }
		.fs-c-h, .vbs-field-label, .error-wrapper, #v-username, #v-amount, .r-sel-it-label, .human-verification-wrapper i, .vbs-progress-c-msg-val, .vbs-progress-u-msg-val, .vbs-progress-msg-info { color: <?php echo $colortwo; ?> ; }
		.vbs-progress-loadbar { border: 4px solid <?php echo $colorone; ?>; } .vbs-progress-loader span.loader-info, .vbs-progress-loader { color: <?php echo $colorone; ?>; } .mfp-bg { background-color: <?php echo $colorone; ?>; }
		.f-s, .c-p, .fs-c-iw-l:before, .fs-c-iw-l:after, .r-sel-it:hover::after, .vbs-progress-loadbar div, .vbs-progress-g-item:before, a.ib.vbiv:before, .v-r-image:before, .embed-responsive-b:before { background: <?php echo $colorone; ?>; }
	</style>
</head>
<body oncontextmenu="return false;">	
	<section class="m-s">
		<div id="header-particles"></div>
		<div class="m-content">
			<div class="status-wrapper">
				<div class="status-m">
					<div class="status-item row-first animated bounceIn animation-delay-200">
						<div>
							<span class="material-icons-two-tone">power</span>
							<span id="status" class="status-dynamic">Online</span>
						</div>
					</div>
					<div class="status-item row-second odd animated bounceIn animation-delay-400">
						<div>
							<span class="material-icons-two-tone">build_circle</span>
							<span id="date" class="status-dynamic"></span>
						</div>
					</div>
					<div class="status-item row-last animated bounceIn animation-delay-600">
						<div>
							<span class="material-icons-two-tone">groups</span>
							<span id="online-count" class="status-dynamic"></span>
						</div>
					</div>
				</div>
			</div>
			<img src="imgs/logo.png" alt="<?php echo $seokey ; ?>" title="<?php echo $seokey ; ?>" class="f-logo img-fluid" />
			<h1 class="mb-3"><?php echo $title ; ?></h1>
			<div class="i-b-w">
				<div id="gfs" class="ib animated pulse infinite" ><span>START</span></div>
			</div>	
		</div>
	</section>		
	<section class="f-s">			
		<div class="c-p-2"></div>
		<div class="c-p"></div>
	</section>
</body>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery.magnific-popup.min.js"></script>	
<script type="text/javascript" src="js/venobox.min.js"></script>
<script type="text/javascript" src="js/particles.min.js"></script>
<script type="text/javascript" src="js/jquery.countTo.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type='text/javascript'>
	var coins_name = "<?php echo $rewards; ?>";
</script>
<script>
document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}
</script>
</html>