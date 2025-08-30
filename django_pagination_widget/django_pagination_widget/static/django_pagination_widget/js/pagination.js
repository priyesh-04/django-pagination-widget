/**
 * Django Pagination Widget JavaScript
 * Handles dynamic pagination behavior with ellipsis
 */

(function($) {
    'use strict';

    $(document).ready(function() {
        initializePagination();
    });

    function initializePagination() {
        // Add classes to first and last page buttons
        $(".page-num-btn").first().addClass('first-page-btn');
        $(".page-num-btn").last().addClass('last-page-btn');

        // Set active page based on current URL
        setActivePage();

        // Apply ellipsis logic
        applyEllipsis();
    }

    function setActivePage() {
        var currentSearch = window.location.search;

        // If no query parameters, activate first page
        if (currentSearch === '' || currentSearch === '?page=1') {
            $(".page-num-btn").first().addClass('active');
            return;
        }

        // Find and activate the current page button
        $(".page-num-btn").each(function() {
            if ($(this).attr('href') === currentSearch) {
                $(this).addClass('active');
                return false; // Break the loop
            }
        });
    }

    function applyEllipsis() {
        var $activeBtn = $(".page-num-btn.active");
        if ($activeBtn.length === 0) return;

        var totalPages = $(".page-num-btn").length;
        var activeIndex = $activeBtn.index();
        var $pageBtns = $(".page-num-btn");

        // Only apply ellipsis if we have more than 7 pages
        if (totalPages <= 7) return;

        // Add ellipsis before active page if not in first 3 positions
        if (activeIndex > 2) {
            $activeBtn.before('<span class="page-change-btn before-dots">…</span>');
        }

        // Add ellipsis after active page if not in last 3 positions
        if (activeIndex < totalPages - 3) {
            $activeBtn.after('<span class="page-change-btn after-dots">…</span>');
        }

        // Hide buttons between ellipsis and boundaries
        hideButtonsBetweenEllipsis();
    }

    function hideButtonsBetweenEllipsis() {
        var $beforeDots = $(".before-dots");
        var $afterDots = $(".after-dots");

        // Hide buttons before the "before-dots"
        if ($beforeDots.length > 0) {
            $beforeDots.prevUntil('.first-page-btn').hide();
        }

        // Hide buttons after the "after-dots"
        if ($afterDots.length > 0) {
            $afterDots.nextUntil('.last-page-btn').hide();
        }
    }

    // Re-initialize on dynamic content changes (for AJAX pagination)
    window.reinitializePagination = function() {
        // Remove existing ellipsis and classes
        $(".before-dots, .after-dots").remove();
        $(".page-num-btn").show().removeClass('first-page-btn last-page-btn active');

        // Re-initialize
        initializePagination();
    };

})(jQuery);
