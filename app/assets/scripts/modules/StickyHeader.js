import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';


class StickyHeader {
  constructor() {
    this.currentSections = $('.current-section');
    this.headerLinks = $('.menu a');
    this.createCurrentSectionWaypoints();
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }

  createCurrentSectionWaypoints() {
    var that = this;
    this.currentSections.each(function() {
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction === 'down') {
            var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: "13%"
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if (direction === 'up') {
            var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: "-12%"
      });
    });
  }


}


export default StickyHeader;
