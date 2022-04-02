<!-- Infos -->
<?php include('../config/config.php'); ?>
<div id="hd-vbs" class="hd-step" style="display: block;">
	<div class="vbs-s-wrapper">
		<div class="vbs-s-window vbs-s-window-1">
			<div class="vbs-s-title animated bounceInDown animation-delay-200">
				<h3>Username &amp; Platform</h3>
			</div>
			<div class="vbs-f-wrapper animated bounceInUp animation-delay-200">
				<div class="vbs-f-content">
					<div class="vbs-field-w">
						<div class="vbs-field-label-wrapper">
							<span class="vbs-field-label">Username</span>
						</div>
						<form id="fortnite-player-form">
							<div class="vbs-field-wrapper username-field-wrapper">
							<img src="imgs/ci.png" class="ci-i">
								<input id="vbs-u-v-input" type="text" class="field-input" name="username" placeholder="Your <?php echo $appgame; ?> Username" <="">
							</div>
							<input type="text" class="hidden-input" id="vbs-p-v-input" name="platform">
						</form>						
						<div class="error-wrapper error-w-1"><span>Please enter your <?php echo $appgame; ?> Username.</span></div>
					</div>
					<div class="vbs-field-w f-field-w-p">
						<div class="vbs-field-label-wrapper">
							<span class="vbs-field-label">Platform</span>
						</div>
						<div class="vbs-field-wrapper platform-field-wrapper">
							<div class="platform-item-wrapper">
								<div class="platform-item platform-item-1">
									<i class="fab fa-windows"></i>
								</div>
							</div>
							<div class="platform-item-wrapper">
								<div class="platform-item platform-item-2">
									<i class="fab fa-playstation"></i>
								</div>
							</div>
							<div class="platform-item-wrapper">
								<div class="platform-item platform-item-3">
									<i class="fab fa-xbox"></i>
								</div>
							</div>
							<div class="platform-item-wrapper">
								<div class="platform-item platform-item-4">
									<i class="fab fa-android"></i>
								</div>
							</div>
							<div class="platform-item-wrapper">
								<div class="platform-item platform-item-5">
									<i class="fab fa-apple"></i>
								</div>
							</div>
							<div class="platform-item-wrapper">
								<div class="platform-item platform-item-6">
									<i class="fab fa-nintendo-switch"></i>
								</div>
							</div>
						</div>
						<div class="error-wrapper error-w-2"><span>Please select your Platform.</span></div>
					</div>
					<div class="i-b-w s-b-w">
						<div id="gss" class="ib isb animated pulse infinite"><span>Next</span></div>
					</div>	
				</div>
			</div>
		</div>
	</div>
</div>
