//Client//
(function ($) {
	/**
 * BCA Mechanical - Mobile Hamburger Menu with Collapsible Submenus
 * jQuery version for external JS file
 */

	jQuery(document).ready(function ($) {

		// Cache selectors
		var $hamburger = $('#bcaHamburger');
		var $navMobile = $('#bcaNavMobile');
		var $mobileOverlay = $('#bcaMobileOverlay');
		var $navLinks = $('.bca-nav-mobile a');
		var $body = $('body');
		var $menuItemsWithChildren = $('.bca-nav-mobile .menu-item-has-children');

		// Check if elements exist
		if ($hamburger.length === 0 || $navMobile.length === 0 || $mobileOverlay.length === 0) {
			return;
		}

		/**
		 * Toggle mobile menu open/closed
		 */
		function toggleMenu() {
			$hamburger.toggleClass('active');
			$navMobile.toggleClass('active');
			$mobileOverlay.toggleClass('active');
			$body.toggleClass('bca-menu-open');
		}

		/**
		 * Close mobile menu
		 */
		function closeMenu() {
			$hamburger.removeClass('active');
			$navMobile.removeClass('active');
			$mobileOverlay.removeClass('active');
			$body.removeClass('bca-menu-open');
			// Close all submenus when closing main menu
			$menuItemsWithChildren.removeClass('open');
		}

		// Hamburger button click
		$hamburger.on('click', function (e) {
			e.preventDefault();
			toggleMenu();
		});

		// Overlay click to close
		$mobileOverlay.on('click', function () {
			closeMenu();
		});

		// Handle submenu parent clicks - toggle submenu
		$menuItemsWithChildren.children('a').on('click', function (e) {
			// Only prevent default and toggle if on mobile
			if ($(window).width() <= 980) {
				e.preventDefault();
				e.stopPropagation();

				var $parentLi = $(this).parent();

				// Close other open submenus at the same level
				$parentLi.siblings('.menu-item-has-children').removeClass('open');

				// Toggle this submenu
				$parentLi.toggleClass('open');
			}
		});

		// Close menu when a submenu link (not parent) is clicked
		$('.bca-nav-mobile .sub-menu a').on('click', function () {
			if ($(window).width() <= 980) {
				closeMenu();
			}
		});

		// Close menu when top-level links without children are clicked
		$('.bca-nav-mobile > ul > li:not(.menu-item-has-children) > a').on('click', function () {
			if ($(window).width() <= 980) {
				closeMenu();
			}
		});

		// Handle window resize - close menu if resized to desktop
		$(window).on('resize', function () {
			if ($(window).width() > 980 && $navMobile.hasClass('active')) {
				closeMenu();
			}
		});

		// Optional: Close menu on ESC key press
		$(document).on('keydown', function (e) {
			if (e.key === 'Escape' && $navMobile.hasClass('active')) {
				closeMenu();
			}
		});

		// Add active class to current page link in mobile menu
		var currentPath = window.location.pathname.replace(/\/$/, ''); // Remove trailing slash
		$('.bca-nav-mobile a').each(function() {
			var linkPath = $(this).attr('href').replace(/\/$/, ''); // Remove trailing slash from link
			if (linkPath === currentPath) {
				$(this).addClass('active');
			}
		});

	});
})(jQuery);