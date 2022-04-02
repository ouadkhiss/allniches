<!-- loading -->
<?php include('../config/config.php'); ?>
<div id="hd-vbs" class="hd-step" style="display: block;">
	<div class="vbs-s-wrapper">
		<div class="vbs-s-window vbs-s-window-1">
			<div class="vbs-s-title animated bounceInDown animation-delay-200">
				<h3>Please be PATIENT...</h3>
			</div>
			<div class="vbs-f-wrapper animated bounceInUp animation-delay-200">
				<div class="vbs-f-content">
					<div class="vbs-progress-wrapper animated bounceIn animation-delay-400">
						<div class="vbs-progress-loader">
							<span class="fas fa-cog fa-spin"></span>
						</div>
						<div class="vbs-progress-g-item">
							<div class="vbs-progress-g-item-inner">
								<img id="vbscuim" src="img/rb-4.png" class="k-icon img-fluid">
								<span class="vbs-progress-g-item-value">0</span>
								<span class="vbs-progress-g-item-label"><?php echo $rewards; ?></span>
							</div>
						</div>
						<div class="vbs-progress-msg-wrapper animated pulse infinite">
							<div class="vbs-progress-msg">Loading...</div>
						</div>
						<div class="vbs-progress-loadbar-wrapper">
							<div id="vbs-progressBar" class="vbs-progress-loadbar animated bounceIn"><div style="width: 13.8795px; overflow: hidden;">100%&nbsp;</div></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>