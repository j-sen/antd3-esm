import { n, u as requireClassnames, C as ConfigConsumer } from '../../config-provider.js';
import * as React from 'react';
import React__default from 'react';
import ReactDOM__default from 'react-dom';
import { r as requireLodash_debounce } from '../../index13.js';
import { r as require$$9 } from '../../ResizeObserver.es.js';
import { r as requireSrc } from '../../index.js';
import { d as debounce } from '../../tree.js';
import '../../menu.js';
import '../../icon.js';
import '../../input.js';

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-carousel {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n}\n.ant-carousel .slick-slider {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  -webkit-touch-callout: none;\n  -ms-touch-action: pan-y;\n  touch-action: pan-y;\n  -webkit-tap-highlight-color: transparent;\n}\n.ant-carousel .slick-list {\n  position: relative;\n  display: block;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.ant-carousel .slick-list:focus {\n  outline: none;\n}\n.ant-carousel .slick-list.dragging {\n  cursor: pointer;\n}\n.ant-carousel .slick-list .slick-slide {\n  pointer-events: none;\n}\n.ant-carousel .slick-list .slick-slide input.ant-radio-input,\n.ant-carousel .slick-list .slick-slide input.ant-checkbox-input {\n  visibility: hidden;\n}\n.ant-carousel .slick-list .slick-slide.slick-active {\n  pointer-events: auto;\n}\n.ant-carousel .slick-list .slick-slide.slick-active input.ant-radio-input,\n.ant-carousel .slick-list .slick-slide.slick-active input.ant-checkbox-input {\n  visibility: visible;\n}\n.ant-carousel .slick-slider .slick-track,\n.ant-carousel .slick-slider .slick-list {\n  transform: translate3d(0, 0, 0);\n}\n.ant-carousel .slick-track {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: block;\n}\n.ant-carousel .slick-track::before,\n.ant-carousel .slick-track::after {\n  display: table;\n  content: '';\n}\n.ant-carousel .slick-track::after {\n  clear: both;\n}\n.slick-loading .ant-carousel .slick-track {\n  visibility: hidden;\n}\n.ant-carousel .slick-slide {\n  display: none;\n  float: left;\n  height: 100%;\n  min-height: 1px;\n}\n[dir='rtl'] .ant-carousel .slick-slide {\n  float: right;\n}\n.ant-carousel .slick-slide img {\n  display: block;\n}\n.ant-carousel .slick-slide.slick-loading img {\n  display: none;\n}\n.ant-carousel .slick-slide.dragging img {\n  pointer-events: none;\n}\n.ant-carousel .slick-initialized .slick-slide {\n  display: block;\n}\n.ant-carousel .slick-loading .slick-slide {\n  visibility: hidden;\n}\n.ant-carousel .slick-vertical .slick-slide {\n  display: block;\n  height: auto;\n  border: 1px solid transparent;\n}\n.ant-carousel .slick-arrow.slick-hidden {\n  display: none;\n}\n.ant-carousel .slick-prev,\n.ant-carousel .slick-next {\n  position: absolute;\n  top: 50%;\n  display: block;\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  padding: 0;\n  color: transparent;\n  font-size: 0;\n  line-height: 0;\n  background: transparent;\n  border: 0;\n  outline: none;\n  cursor: pointer;\n}\n.ant-carousel .slick-prev:hover,\n.ant-carousel .slick-next:hover,\n.ant-carousel .slick-prev:focus,\n.ant-carousel .slick-next:focus {\n  color: transparent;\n  background: transparent;\n  outline: none;\n}\n.ant-carousel .slick-prev:hover::before,\n.ant-carousel .slick-next:hover::before,\n.ant-carousel .slick-prev:focus::before,\n.ant-carousel .slick-next:focus::before {\n  opacity: 1;\n}\n.ant-carousel .slick-prev.slick-disabled::before,\n.ant-carousel .slick-next.slick-disabled::before {\n  opacity: 0.25;\n}\n.ant-carousel .slick-prev {\n  left: -25px;\n}\n.ant-carousel .slick-prev::before {\n  content: '←';\n}\n.ant-carousel .slick-next {\n  right: -25px;\n}\n.ant-carousel .slick-next::before {\n  content: '→';\n}\n.ant-carousel .slick-dots {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 3px;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  list-style: none;\n}\n.ant-carousel .slick-dots-bottom {\n  bottom: 12px;\n}\n.ant-carousel .slick-dots-top {\n  top: 12px;\n}\n.ant-carousel .slick-dots li {\n  position: relative;\n  display: inline-block;\n  margin: 0 2px;\n  padding: 0;\n  text-align: center;\n  vertical-align: top;\n}\n.ant-carousel .slick-dots li button {\n  display: block;\n  width: 16px;\n  height: 3px;\n  padding: 0;\n  color: transparent;\n  font-size: 0;\n  background: #fff;\n  border: 0;\n  border-radius: 1px;\n  outline: none;\n  cursor: pointer;\n  opacity: 0.3;\n  transition: all 0.5s;\n}\n.ant-carousel .slick-dots li button:hover,\n.ant-carousel .slick-dots li button:focus {\n  opacity: 0.75;\n}\n.ant-carousel .slick-dots li.slick-active button {\n  width: 24px;\n  background: #fff;\n  opacity: 1;\n}\n.ant-carousel .slick-dots li.slick-active button:hover,\n.ant-carousel .slick-dots li.slick-active button:focus {\n  opacity: 1;\n}\n.ant-carousel-vertical .slick-dots {\n  top: 50%;\n  bottom: auto;\n  width: 3px;\n  height: auto;\n  transform: translateY(-50%);\n}\n.ant-carousel-vertical .slick-dots-left {\n  left: 12px;\n}\n.ant-carousel-vertical .slick-dots-right {\n  right: 12px;\n}\n.ant-carousel-vertical .slick-dots li {\n  margin: 0 2px;\n  vertical-align: baseline;\n}\n.ant-carousel-vertical .slick-dots li button {\n  width: 3px;\n  height: 16px;\n}\n.ant-carousel-vertical .slick-dots li.slick-active button {\n  width: 3px;\n  height: 24px;\n}\n/*# sourceMappingURL=index.css.map */";
n(css,{"prepend":true});

var lib = {};

var slider = {};

var innerSlider = {};

var initialState = {};

var hasRequiredInitialState;

function requireInitialState () {
	if (hasRequiredInitialState) return initialState;
	hasRequiredInitialState = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});
		exports$1["default"] = void 0;
		var initialState = {
		  animating: false,
		  autoplaying: null,
		  currentDirection: 0,
		  currentLeft: null,
		  currentSlide: 0,
		  direction: 1,
		  dragging: false,
		  edgeDragged: false,
		  initialized: false,
		  lazyLoadedList: [],
		  listHeight: null,
		  listWidth: null,
		  scrolling: false,
		  slideCount: null,
		  slideHeight: null,
		  slideWidth: null,
		  swipeLeft: null,
		  swiped: false,
		  // used by swipeEvent. differentites between touch and swipe.
		  swiping: false,
		  touchObject: {
		    startX: 0,
		    startY: 0,
		    curX: 0,
		    curY: 0
		  },
		  trackStyle: {},
		  trackWidth: 0
		};
		var _default = initialState;
		exports$1["default"] = _default; 
	} (initialState));
	return initialState;
}

var innerSliderUtils = {};

var hasRequiredInnerSliderUtils;

function requireInnerSliderUtils () {
	if (hasRequiredInnerSliderUtils) return innerSliderUtils;
	hasRequiredInnerSliderUtils = 1;

	Object.defineProperty(innerSliderUtils, "__esModule", {
	  value: true
	});
	innerSliderUtils.canUseDOM = innerSliderUtils.slidesOnLeft = innerSliderUtils.slidesOnRight = innerSliderUtils.siblingDirection = innerSliderUtils.getTotalSlides = innerSliderUtils.getPostClones = innerSliderUtils.getPreClones = innerSliderUtils.getTrackLeft = innerSliderUtils.getTrackAnimateCSS = innerSliderUtils.getTrackCSS = innerSliderUtils.checkSpecKeys = innerSliderUtils.getSlideCount = innerSliderUtils.checkNavigable = innerSliderUtils.getNavigableIndexes = innerSliderUtils.swipeEnd = innerSliderUtils.swipeMove = innerSliderUtils.swipeStart = innerSliderUtils.keyHandler = innerSliderUtils.changeSlide = innerSliderUtils.slideHandler = innerSliderUtils.initializedState = innerSliderUtils.extractObject = innerSliderUtils.canGoNext = innerSliderUtils.getSwipeDirection = innerSliderUtils.getHeight = innerSliderUtils.getWidth = innerSliderUtils.lazySlidesOnRight = innerSliderUtils.lazySlidesOnLeft = innerSliderUtils.lazyEndIndex = innerSliderUtils.lazyStartIndex = innerSliderUtils.getRequiredLazySlides = innerSliderUtils.getOnDemandLazySlides = void 0;

	var _react = _interopRequireDefault(React__default);

	var _reactDom = _interopRequireDefault(ReactDOM__default);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var getOnDemandLazySlides = function getOnDemandLazySlides(spec) {
	  var onDemandSlides = [];
	  var startIndex = lazyStartIndex(spec);
	  var endIndex = lazyEndIndex(spec);

	  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
	    if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
	      onDemandSlides.push(slideIndex);
	    }
	  }

	  return onDemandSlides;
	}; // return list of slides that need to be present


	innerSliderUtils.getOnDemandLazySlides = getOnDemandLazySlides;

	var getRequiredLazySlides = function getRequiredLazySlides(spec) {
	  var requiredSlides = [];
	  var startIndex = lazyStartIndex(spec);
	  var endIndex = lazyEndIndex(spec);

	  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
	    requiredSlides.push(slideIndex);
	  }

	  return requiredSlides;
	}; // startIndex that needs to be present


	innerSliderUtils.getRequiredLazySlides = getRequiredLazySlides;

	var lazyStartIndex = function lazyStartIndex(spec) {
	  return spec.currentSlide - lazySlidesOnLeft(spec);
	};

	innerSliderUtils.lazyStartIndex = lazyStartIndex;

	var lazyEndIndex = function lazyEndIndex(spec) {
	  return spec.currentSlide + lazySlidesOnRight(spec);
	};

	innerSliderUtils.lazyEndIndex = lazyEndIndex;

	var lazySlidesOnLeft = function lazySlidesOnLeft(spec) {
	  return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
	};

	innerSliderUtils.lazySlidesOnLeft = lazySlidesOnLeft;

	var lazySlidesOnRight = function lazySlidesOnRight(spec) {
	  return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
	}; // get width of an element


	innerSliderUtils.lazySlidesOnRight = lazySlidesOnRight;

	var getWidth = function getWidth(elem) {
	  return elem && elem.offsetWidth || 0;
	};

	innerSliderUtils.getWidth = getWidth;

	var getHeight = function getHeight(elem) {
	  return elem && elem.offsetHeight || 0;
	};

	innerSliderUtils.getHeight = getHeight;

	var getSwipeDirection = function getSwipeDirection(touchObject) {
	  var verticalSwiping = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	  var xDist, yDist, r, swipeAngle;
	  xDist = touchObject.startX - touchObject.curX;
	  yDist = touchObject.startY - touchObject.curY;
	  r = Math.atan2(yDist, xDist);
	  swipeAngle = Math.round(r * 180 / Math.PI);

	  if (swipeAngle < 0) {
	    swipeAngle = 360 - Math.abs(swipeAngle);
	  }

	  if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
	    return "left";
	  }

	  if (swipeAngle >= 135 && swipeAngle <= 225) {
	    return "right";
	  }

	  if (verticalSwiping === true) {
	    if (swipeAngle >= 35 && swipeAngle <= 135) {
	      return "up";
	    } else {
	      return "down";
	    }
	  }

	  return "vertical";
	}; // whether or not we can go next


	innerSliderUtils.getSwipeDirection = getSwipeDirection;

	var canGoNext = function canGoNext(spec) {
	  var canGo = true;

	  if (!spec.infinite) {
	    if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
	      canGo = false;
	    } else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
	      canGo = false;
	    }
	  }

	  return canGo;
	}; // given an object and a list of keys, return new object with given keys


	innerSliderUtils.canGoNext = canGoNext;

	var extractObject = function extractObject(spec, keys) {
	  var newObject = {};
	  keys.forEach(function (key) {
	    return newObject[key] = spec[key];
	  });
	  return newObject;
	}; // get initialized state


	innerSliderUtils.extractObject = extractObject;

	var initializedState = function initializedState(spec) {
	  // spec also contains listRef, trackRef
	  var slideCount = _react["default"].Children.count(spec.children);

	  var listWidth = Math.ceil(getWidth(_reactDom["default"].findDOMNode(spec.listRef)));
	  var trackWidth = Math.ceil(getWidth(_reactDom["default"].findDOMNode(spec.trackRef)));
	  var slideWidth;

	  if (!spec.vertical) {
	    var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;

	    if (typeof spec.centerPadding === "string" && spec.centerPadding.slice(-1) === "%") {
	      centerPaddingAdj *= listWidth / 100;
	    }

	    slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
	  } else {
	    slideWidth = listWidth;
	  }

	  var slideHeight = _reactDom["default"].findDOMNode(spec.listRef) && getHeight(_reactDom["default"].findDOMNode(spec.listRef).querySelector('[data-index="0"]'));
	  var listHeight = slideHeight * spec.slidesToShow;
	  var currentSlide = spec.currentSlide === undefined ? spec.initialSlide : spec.currentSlide;

	  if (spec.rtl && spec.currentSlide === undefined) {
	    currentSlide = slideCount - 1 - spec.initialSlide;
	  }

	  var lazyLoadedList = spec.lazyLoadedList || [];
	  var slidesToLoad = getOnDemandLazySlides({
	    currentSlide: currentSlide,
	    lazyLoadedList: lazyLoadedList
	  });
	  lazyLoadedList.concat(slidesToLoad);
	  var state = {
	    slideCount: slideCount,
	    slideWidth: slideWidth,
	    listWidth: listWidth,
	    trackWidth: trackWidth,
	    currentSlide: currentSlide,
	    slideHeight: slideHeight,
	    listHeight: listHeight,
	    lazyLoadedList: lazyLoadedList
	  };

	  if (spec.autoplaying === null && spec.autoplay) {
	    state["autoplaying"] = "playing";
	  }

	  return state;
	};

	innerSliderUtils.initializedState = initializedState;

	var slideHandler = function slideHandler(spec) {
	  var waitForAnimate = spec.waitForAnimate,
	      animating = spec.animating,
	      fade = spec.fade,
	      infinite = spec.infinite,
	      index = spec.index,
	      slideCount = spec.slideCount,
	      lazyLoadedList = spec.lazyLoadedList,
	      lazyLoad = spec.lazyLoad,
	      currentSlide = spec.currentSlide,
	      centerMode = spec.centerMode,
	      slidesToScroll = spec.slidesToScroll,
	      slidesToShow = spec.slidesToShow,
	      useCSS = spec.useCSS;
	  if (waitForAnimate && animating) return {};
	  var animationSlide = index,
	      finalSlide,
	      animationLeft,
	      finalLeft;
	  var state = {},
	      nextState = {};

	  if (fade) {
	    if (!infinite && (index < 0 || index >= slideCount)) return {};

	    if (index < 0) {
	      animationSlide = index + slideCount;
	    } else if (index >= slideCount) {
	      animationSlide = index - slideCount;
	    }

	    if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) {
	      lazyLoadedList.push(animationSlide);
	    }

	    state = {
	      animating: true,
	      currentSlide: animationSlide,
	      lazyLoadedList: lazyLoadedList
	    };
	    nextState = {
	      animating: false
	    };
	  } else {
	    finalSlide = animationSlide;

	    if (animationSlide < 0) {
	      finalSlide = animationSlide + slideCount;
	      if (!infinite) finalSlide = 0;else if (slideCount % slidesToScroll !== 0) finalSlide = slideCount - slideCount % slidesToScroll;
	    } else if (!canGoNext(spec) && animationSlide > currentSlide) {
	      animationSlide = finalSlide = currentSlide;
	    } else if (centerMode && animationSlide >= slideCount) {
	      animationSlide = infinite ? slideCount : slideCount - 1;
	      finalSlide = infinite ? 0 : slideCount - 1;
	    } else if (animationSlide >= slideCount) {
	      finalSlide = animationSlide - slideCount;
	      if (!infinite) finalSlide = slideCount - slidesToShow;else if (slideCount % slidesToScroll !== 0) finalSlide = 0;
	    }

	    animationLeft = getTrackLeft(_objectSpread({}, spec, {
	      slideIndex: animationSlide
	    }));
	    finalLeft = getTrackLeft(_objectSpread({}, spec, {
	      slideIndex: finalSlide
	    }));

	    if (!infinite) {
	      if (animationLeft === finalLeft) animationSlide = finalSlide;
	      animationLeft = finalLeft;
	    }

	    lazyLoad && lazyLoadedList.concat(getOnDemandLazySlides(_objectSpread({}, spec, {
	      currentSlide: animationSlide
	    })));

	    if (!useCSS) {
	      state = {
	        currentSlide: finalSlide,
	        trackStyle: getTrackCSS(_objectSpread({}, spec, {
	          left: finalLeft
	        })),
	        lazyLoadedList: lazyLoadedList
	      };
	    } else {
	      state = {
	        animating: true,
	        currentSlide: finalSlide,
	        trackStyle: getTrackAnimateCSS(_objectSpread({}, spec, {
	          left: animationLeft
	        })),
	        lazyLoadedList: lazyLoadedList
	      };
	      nextState = {
	        animating: false,
	        currentSlide: finalSlide,
	        trackStyle: getTrackCSS(_objectSpread({}, spec, {
	          left: finalLeft
	        })),
	        swipeLeft: null
	      };
	    }
	  }

	  return {
	    state: state,
	    nextState: nextState
	  };
	};

	innerSliderUtils.slideHandler = slideHandler;

	var changeSlide = function changeSlide(spec, options) {
	  var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
	  var slidesToScroll = spec.slidesToScroll,
	      slidesToShow = spec.slidesToShow,
	      slideCount = spec.slideCount,
	      currentSlide = spec.currentSlide,
	      lazyLoad = spec.lazyLoad,
	      infinite = spec.infinite;
	  unevenOffset = slideCount % slidesToScroll !== 0;
	  indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;

	  if (options.message === "previous") {
	    slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
	    targetSlide = currentSlide - slideOffset;

	    if (lazyLoad && !infinite) {
	      previousInt = currentSlide - slideOffset;
	      targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
	    }
	  } else if (options.message === "next") {
	    slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
	    targetSlide = currentSlide + slideOffset;

	    if (lazyLoad && !infinite) {
	      targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
	    }
	  } else if (options.message === "dots") {
	    // Click on dots
	    targetSlide = options.index * options.slidesToScroll;

	    if (targetSlide === options.currentSlide) {
	      return null;
	    }
	  } else if (options.message === "children") {
	    // Click on the slides
	    targetSlide = options.index;

	    if (targetSlide === options.currentSlide) {
	      return null;
	    }

	    if (infinite) {
	      var direction = siblingDirection(_objectSpread({}, spec, {
	        targetSlide: targetSlide
	      }));

	      if (targetSlide > options.currentSlide && direction === "left") {
	        targetSlide = targetSlide - slideCount;
	      } else if (targetSlide < options.currentSlide && direction === "right") {
	        targetSlide = targetSlide + slideCount;
	      }
	    }
	  } else if (options.message === "index") {
	    targetSlide = Number(options.index);

	    if (targetSlide === options.currentSlide) {
	      return null;
	    }
	  }

	  return targetSlide;
	};

	innerSliderUtils.changeSlide = changeSlide;

	var keyHandler = function keyHandler(e, accessibility, rtl) {
	  if (e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility) return "";
	  if (e.keyCode === 37) return rtl ? "next" : "previous";
	  if (e.keyCode === 39) return rtl ? "previous" : "next";
	  return "";
	};

	innerSliderUtils.keyHandler = keyHandler;

	var swipeStart = function swipeStart(e, swipe, draggable) {
	  e.target.tagName === "IMG" && e.preventDefault();
	  if (!swipe || !draggable && e.type.indexOf("mouse") !== -1) return "";
	  return {
	    dragging: true,
	    touchObject: {
	      startX: e.touches ? e.touches[0].pageX : e.clientX,
	      startY: e.touches ? e.touches[0].pageY : e.clientY,
	      curX: e.touches ? e.touches[0].pageX : e.clientX,
	      curY: e.touches ? e.touches[0].pageY : e.clientY
	    }
	  };
	};

	innerSliderUtils.swipeStart = swipeStart;

	var swipeMove = function swipeMove(e, spec) {
	  // spec also contains, trackRef and slideIndex
	  var scrolling = spec.scrolling,
	      animating = spec.animating,
	      vertical = spec.vertical,
	      swipeToSlide = spec.swipeToSlide,
	      verticalSwiping = spec.verticalSwiping,
	      rtl = spec.rtl,
	      currentSlide = spec.currentSlide,
	      edgeFriction = spec.edgeFriction,
	      edgeDragged = spec.edgeDragged,
	      onEdge = spec.onEdge,
	      swiped = spec.swiped,
	      swiping = spec.swiping,
	      slideCount = spec.slideCount,
	      slidesToScroll = spec.slidesToScroll,
	      infinite = spec.infinite,
	      touchObject = spec.touchObject,
	      swipeEvent = spec.swipeEvent,
	      listHeight = spec.listHeight,
	      listWidth = spec.listWidth;
	  if (scrolling) return;
	  if (animating) return e.preventDefault();
	  if (vertical && swipeToSlide && verticalSwiping) e.preventDefault();
	  var swipeLeft,
	      state = {};
	  var curLeft = getTrackLeft(spec);
	  touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
	  touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
	  touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
	  var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));

	  if (!verticalSwiping && !swiping && verticalSwipeLength > 10) {
	    return {
	      scrolling: true
	    };
	  }

	  if (verticalSwiping) touchObject.swipeLength = verticalSwipeLength;
	  var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
	  if (verticalSwiping) positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
	  var dotCount = Math.ceil(slideCount / slidesToScroll);
	  var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
	  var touchSwipeLength = touchObject.swipeLength;

	  if (!infinite) {
	    if (currentSlide === 0 && swipeDirection === "right" || currentSlide + 1 >= dotCount && swipeDirection === "left" || !canGoNext(spec) && swipeDirection === "left") {
	      touchSwipeLength = touchObject.swipeLength * edgeFriction;

	      if (edgeDragged === false && onEdge) {
	        onEdge(swipeDirection);
	        state["edgeDragged"] = true;
	      }
	    }
	  }

	  if (!swiped && swipeEvent) {
	    swipeEvent(swipeDirection);
	    state["swiped"] = true;
	  }

	  if (!vertical) {
	    if (!rtl) {
	      swipeLeft = curLeft + touchSwipeLength * positionOffset;
	    } else {
	      swipeLeft = curLeft - touchSwipeLength * positionOffset;
	    }
	  } else {
	    swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
	  }

	  if (verticalSwiping) {
	    swipeLeft = curLeft + touchSwipeLength * positionOffset;
	  }

	  state = _objectSpread({}, state, {
	    touchObject: touchObject,
	    swipeLeft: swipeLeft,
	    trackStyle: getTrackCSS(_objectSpread({}, spec, {
	      left: swipeLeft
	    }))
	  });

	  if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
	    return state;
	  }

	  if (touchObject.swipeLength > 10) {
	    state["swiping"] = true;
	    e.preventDefault();
	  }

	  return state;
	};

	innerSliderUtils.swipeMove = swipeMove;

	var swipeEnd = function swipeEnd(e, spec) {
	  var dragging = spec.dragging,
	      swipe = spec.swipe,
	      touchObject = spec.touchObject,
	      listWidth = spec.listWidth,
	      touchThreshold = spec.touchThreshold,
	      verticalSwiping = spec.verticalSwiping,
	      listHeight = spec.listHeight,
	      currentSlide = spec.currentSlide,
	      swipeToSlide = spec.swipeToSlide,
	      scrolling = spec.scrolling,
	      onSwipe = spec.onSwipe;

	  if (!dragging) {
	    if (swipe) e.preventDefault();
	    return {};
	  }

	  var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
	  var swipeDirection = getSwipeDirection(touchObject, verticalSwiping); // reset the state of touch related state variables.

	  var state = {
	    dragging: false,
	    edgeDragged: false,
	    scrolling: false,
	    swiping: false,
	    swiped: false,
	    swipeLeft: null,
	    touchObject: {}
	  };

	  if (scrolling) {
	    return state;
	  }

	  if (!touchObject.swipeLength) {
	    return state;
	  }

	  if (touchObject.swipeLength > minSwipe) {
	    e.preventDefault();

	    if (onSwipe) {
	      onSwipe(swipeDirection);
	    }

	    var slideCount, newSlide;

	    switch (swipeDirection) {
	      case "left":
	      case "up":
	        newSlide = currentSlide + getSlideCount(spec);
	        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
	        state["currentDirection"] = 0;
	        break;

	      case "right":
	      case "down":
	        newSlide = currentSlide - getSlideCount(spec);
	        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
	        state["currentDirection"] = 1;
	        break;

	      default:
	        slideCount = currentSlide;
	    }

	    state["triggerSlideHandler"] = slideCount;
	  } else {
	    // Adjust the track back to it's original position.
	    var currentLeft = getTrackLeft(spec);
	    state["trackStyle"] = getTrackAnimateCSS(_objectSpread({}, spec, {
	      left: currentLeft
	    }));
	  }

	  return state;
	};

	innerSliderUtils.swipeEnd = swipeEnd;

	var getNavigableIndexes = function getNavigableIndexes(spec) {
	  var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
	  var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
	  var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
	  var indexes = [];

	  while (breakpoint < max) {
	    indexes.push(breakpoint);
	    breakpoint = counter + spec.slidesToScroll;
	    counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
	  }

	  return indexes;
	};

	innerSliderUtils.getNavigableIndexes = getNavigableIndexes;

	var checkNavigable = function checkNavigable(spec, index) {
	  var navigables = getNavigableIndexes(spec);
	  var prevNavigable = 0;

	  if (index > navigables[navigables.length - 1]) {
	    index = navigables[navigables.length - 1];
	  } else {
	    for (var n in navigables) {
	      if (index < navigables[n]) {
	        index = prevNavigable;
	        break;
	      }

	      prevNavigable = navigables[n];
	    }
	  }

	  return index;
	};

	innerSliderUtils.checkNavigable = checkNavigable;

	var getSlideCount = function getSlideCount(spec) {
	  var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;

	  if (spec.swipeToSlide) {
	    var swipedSlide;

	    var slickList = _reactDom["default"].findDOMNode(spec.listRef);

	    var slides = slickList.querySelectorAll(".slick-slide");
	    Array.from(slides).every(function (slide) {
	      if (!spec.vertical) {
	        if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
	          swipedSlide = slide;
	          return false;
	        }
	      } else {
	        if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
	          swipedSlide = slide;
	          return false;
	        }
	      }

	      return true;
	    });

	    if (!swipedSlide) {
	      return 0;
	    }

	    var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
	    var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
	    return slidesTraversed;
	  } else {
	    return spec.slidesToScroll;
	  }
	};

	innerSliderUtils.getSlideCount = getSlideCount;

	var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
	  return keysArray.reduce(function (value, key) {
	    return value && spec.hasOwnProperty(key);
	  }, true) ? null : console.error("Keys Missing:", spec);
	};

	innerSliderUtils.checkSpecKeys = checkSpecKeys;

	var getTrackCSS = function getTrackCSS(spec) {
	  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
	  var trackWidth, trackHeight;
	  var trackChildren = spec.slideCount + 2 * spec.slidesToShow;

	  if (!spec.vertical) {
	    trackWidth = getTotalSlides(spec) * spec.slideWidth;
	  } else {
	    trackHeight = trackChildren * spec.slideHeight;
	  }

	  var style = {
	    opacity: 1,
	    transition: "",
	    WebkitTransition: ""
	  };

	  if (spec.useTransform) {
	    var WebkitTransform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
	    var transform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
	    var msTransform = !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)";
	    style = _objectSpread({}, style, {
	      WebkitTransform: WebkitTransform,
	      transform: transform,
	      msTransform: msTransform
	    });
	  } else {
	    if (spec.vertical) {
	      style["top"] = spec.left;
	    } else {
	      style["left"] = spec.left;
	    }
	  }

	  if (spec.fade) style = {
	    opacity: 1
	  };
	  if (trackWidth) style.width = trackWidth;
	  if (trackHeight) style.height = trackHeight; // Fallback for IE8

	  if (window && !window.addEventListener && window.attachEvent) {
	    if (!spec.vertical) {
	      style.marginLeft = spec.left + "px";
	    } else {
	      style.marginTop = spec.left + "px";
	    }
	  }

	  return style;
	};

	innerSliderUtils.getTrackCSS = getTrackCSS;

	var getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
	  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
	  var style = getTrackCSS(spec); // useCSS is true by default so it can be undefined

	  if (spec.useTransform) {
	    style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
	    style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
	  } else {
	    if (spec.vertical) {
	      style.transition = "top " + spec.speed + "ms " + spec.cssEase;
	    } else {
	      style.transition = "left " + spec.speed + "ms " + spec.cssEase;
	    }
	  }

	  return style;
	};

	innerSliderUtils.getTrackAnimateCSS = getTrackAnimateCSS;

	var getTrackLeft = function getTrackLeft(spec) {
	  if (spec.unslick) {
	    return 0;
	  }

	  checkSpecKeys(spec, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
	  var slideIndex = spec.slideIndex,
	      trackRef = spec.trackRef,
	      infinite = spec.infinite,
	      centerMode = spec.centerMode,
	      slideCount = spec.slideCount,
	      slidesToShow = spec.slidesToShow,
	      slidesToScroll = spec.slidesToScroll,
	      slideWidth = spec.slideWidth,
	      listWidth = spec.listWidth,
	      variableWidth = spec.variableWidth,
	      slideHeight = spec.slideHeight,
	      fade = spec.fade,
	      vertical = spec.vertical;
	  var slideOffset = 0;
	  var targetLeft;
	  var targetSlide;
	  var verticalOffset = 0;

	  if (fade || spec.slideCount === 1) {
	    return 0;
	  }

	  var slidesToOffset = 0;

	  if (infinite) {
	    slidesToOffset = -getPreClones(spec); // bring active slide to the beginning of visual area
	    // if next scroll doesn't have enough children, just reach till the end of original slides instead of shifting slidesToScroll children

	    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
	      slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
	    } // shift current slide to center of the frame


	    if (centerMode) {
	      slidesToOffset += parseInt(slidesToShow / 2);
	    }
	  } else {
	    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
	      slidesToOffset = slidesToShow - slideCount % slidesToScroll;
	    }

	    if (centerMode) {
	      slidesToOffset = parseInt(slidesToShow / 2);
	    }
	  }

	  slideOffset = slidesToOffset * slideWidth;
	  verticalOffset = slidesToOffset * slideHeight;

	  if (!vertical) {
	    targetLeft = slideIndex * slideWidth * -1 + slideOffset;
	  } else {
	    targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
	  }

	  if (variableWidth === true) {
	    var targetSlideIndex;

	    var trackElem = _reactDom["default"].findDOMNode(trackRef);

	    targetSlideIndex = slideIndex + getPreClones(spec);
	    targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
	    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;

	    if (centerMode === true) {
	      targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
	      targetSlide = trackElem && trackElem.children[targetSlideIndex];
	      targetLeft = 0;

	      for (var slide = 0; slide < targetSlideIndex; slide++) {
	        targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
	      }

	      targetLeft -= parseInt(spec.centerPadding);
	      targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
	    }
	  }

	  return targetLeft;
	};

	innerSliderUtils.getTrackLeft = getTrackLeft;

	var getPreClones = function getPreClones(spec) {
	  if (spec.unslick || !spec.infinite) {
	    return 0;
	  }

	  if (spec.variableWidth) {
	    return spec.slideCount;
	  }

	  return spec.slidesToShow + (spec.centerMode ? 1 : 0);
	};

	innerSliderUtils.getPreClones = getPreClones;

	var getPostClones = function getPostClones(spec) {
	  if (spec.unslick || !spec.infinite) {
	    return 0;
	  }

	  return spec.slideCount;
	};

	innerSliderUtils.getPostClones = getPostClones;

	var getTotalSlides = function getTotalSlides(spec) {
	  return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
	};

	innerSliderUtils.getTotalSlides = getTotalSlides;

	var siblingDirection = function siblingDirection(spec) {
	  if (spec.targetSlide > spec.currentSlide) {
	    if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) {
	      return "left";
	    }

	    return "right";
	  } else {
	    if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) {
	      return "right";
	    }

	    return "left";
	  }
	};

	innerSliderUtils.siblingDirection = siblingDirection;

	var slidesOnRight = function slidesOnRight(_ref) {
	  var slidesToShow = _ref.slidesToShow,
	      centerMode = _ref.centerMode,
	      rtl = _ref.rtl,
	      centerPadding = _ref.centerPadding;

	  // returns no of slides on the right of active slide
	  if (centerMode) {
	    var right = (slidesToShow - 1) / 2 + 1;
	    if (parseInt(centerPadding) > 0) right += 1;
	    if (rtl && slidesToShow % 2 === 0) right += 1;
	    return right;
	  }

	  if (rtl) {
	    return 0;
	  }

	  return slidesToShow - 1;
	};

	innerSliderUtils.slidesOnRight = slidesOnRight;

	var slidesOnLeft = function slidesOnLeft(_ref2) {
	  var slidesToShow = _ref2.slidesToShow,
	      centerMode = _ref2.centerMode,
	      rtl = _ref2.rtl,
	      centerPadding = _ref2.centerPadding;

	  // returns no of slides on the left of active slide
	  if (centerMode) {
	    var left = (slidesToShow - 1) / 2 + 1;
	    if (parseInt(centerPadding) > 0) left += 1;
	    if (!rtl && slidesToShow % 2 === 0) left += 1;
	    return left;
	  }

	  if (rtl) {
	    return slidesToShow - 1;
	  }

	  return 0;
	};

	innerSliderUtils.slidesOnLeft = slidesOnLeft;

	var canUseDOM = function canUseDOM() {
	  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
	};

	innerSliderUtils.canUseDOM = canUseDOM;
	return innerSliderUtils;
}

var track = {};

var hasRequiredTrack;

function requireTrack () {
	if (hasRequiredTrack) return track;
	hasRequiredTrack = 1;

	Object.defineProperty(track, "__esModule", {
	  value: true
	});
	track.Track = void 0;

	var _react = _interopRequireDefault(React__default);

	var _classnames = _interopRequireDefault(requireClassnames());

	var _innerSliderUtils = requireInnerSliderUtils();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	// given specifications/props for a slide, fetch all the classes that need to be applied to the slide
	var getSlideClasses = function getSlideClasses(spec) {
	  var slickActive, slickCenter, slickCloned;
	  var centerOffset, index;

	  if (spec.rtl) {
	    index = spec.slideCount - 1 - spec.index;
	  } else {
	    index = spec.index;
	  }

	  slickCloned = index < 0 || index >= spec.slideCount;

	  if (spec.centerMode) {
	    centerOffset = Math.floor(spec.slidesToShow / 2);
	    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;

	    if (index > spec.currentSlide - centerOffset - 1 && index <= spec.currentSlide + centerOffset) {
	      slickActive = true;
	    }
	  } else {
	    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;
	  }

	  var slickCurrent = index === spec.currentSlide;
	  return {
	    "slick-slide": true,
	    "slick-active": slickActive,
	    "slick-center": slickCenter,
	    "slick-cloned": slickCloned,
	    "slick-current": slickCurrent // dubious in case of RTL

	  };
	};

	var getSlideStyle = function getSlideStyle(spec) {
	  var style = {};

	  if (spec.variableWidth === undefined || spec.variableWidth === false) {
	    style.width = spec.slideWidth;
	  }

	  if (spec.fade) {
	    style.position = "relative";

	    if (spec.vertical) {
	      style.top = -spec.index * parseInt(spec.slideHeight);
	    } else {
	      style.left = -spec.index * parseInt(spec.slideWidth);
	    }

	    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
	    style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", " + "visibility " + spec.speed + "ms " + spec.cssEase;
	    style.WebkitTransition = "opacity " + spec.speed + "ms " + spec.cssEase + ", " + "visibility " + spec.speed + "ms " + spec.cssEase;
	  }

	  return style;
	};

	var getKey = function getKey(child, fallbackKey) {
	  return child.key || fallbackKey;
	};

	var renderSlides = function renderSlides(spec) {
	  var key;
	  var slides = [];
	  var preCloneSlides = [];
	  var postCloneSlides = [];

	  var childrenCount = _react["default"].Children.count(spec.children);

	  var startIndex = (0, _innerSliderUtils.lazyStartIndex)(spec);
	  var endIndex = (0, _innerSliderUtils.lazyEndIndex)(spec);

	  _react["default"].Children.forEach(spec.children, function (elem, index) {
	    var child;
	    var childOnClickOptions = {
	      message: "children",
	      index: index,
	      slidesToScroll: spec.slidesToScroll,
	      currentSlide: spec.currentSlide
	    }; // in case of lazyLoad, whether or not we want to fetch the slide

	    if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0) {
	      child = elem;
	    } else {
	      child = _react["default"].createElement("div", null);
	    }

	    var childStyle = getSlideStyle(_objectSpread({}, spec, {
	      index: index
	    }));
	    var slideClass = child.props.className || "";
	    var slideClasses = getSlideClasses(_objectSpread({}, spec, {
	      index: index
	    })); // push a cloned element of the desired slide

	    slides.push(_react["default"].cloneElement(child, {
	      key: "original" + getKey(child, index),
	      "data-index": index,
	      className: (0, _classnames["default"])(slideClasses, slideClass),
	      tabIndex: "-1",
	      "aria-hidden": !slideClasses["slick-active"],
	      style: _objectSpread({
	        outline: "none"
	      }, child.props.style || {}, {}, childStyle),
	      onClick: function onClick(e) {
	        child.props && child.props.onClick && child.props.onClick(e);

	        if (spec.focusOnSelect) {
	          spec.focusOnSelect(childOnClickOptions);
	        }
	      }
	    })); // if slide needs to be precloned or postcloned

	    if (spec.infinite && spec.fade === false) {
	      var preCloneNo = childrenCount - index;

	      if (preCloneNo <= (0, _innerSliderUtils.getPreClones)(spec) && childrenCount !== spec.slidesToShow) {
	        key = -preCloneNo;

	        if (key >= startIndex) {
	          child = elem;
	        }

	        slideClasses = getSlideClasses(_objectSpread({}, spec, {
	          index: key
	        }));
	        preCloneSlides.push(_react["default"].cloneElement(child, {
	          key: "precloned" + getKey(child, key),
	          "data-index": key,
	          tabIndex: "-1",
	          className: (0, _classnames["default"])(slideClasses, slideClass),
	          "aria-hidden": !slideClasses["slick-active"],
	          style: _objectSpread({}, child.props.style || {}, {}, childStyle),
	          onClick: function onClick(e) {
	            child.props && child.props.onClick && child.props.onClick(e);

	            if (spec.focusOnSelect) {
	              spec.focusOnSelect(childOnClickOptions);
	            }
	          }
	        }));
	      }

	      if (childrenCount !== spec.slidesToShow) {
	        key = childrenCount + index;

	        if (key < endIndex) {
	          child = elem;
	        }

	        slideClasses = getSlideClasses(_objectSpread({}, spec, {
	          index: key
	        }));
	        postCloneSlides.push(_react["default"].cloneElement(child, {
	          key: "postcloned" + getKey(child, key),
	          "data-index": key,
	          tabIndex: "-1",
	          className: (0, _classnames["default"])(slideClasses, slideClass),
	          "aria-hidden": !slideClasses["slick-active"],
	          style: _objectSpread({}, child.props.style || {}, {}, childStyle),
	          onClick: function onClick(e) {
	            child.props && child.props.onClick && child.props.onClick(e);

	            if (spec.focusOnSelect) {
	              spec.focusOnSelect(childOnClickOptions);
	            }
	          }
	        }));
	      }
	    }
	  });

	  if (spec.rtl) {
	    return preCloneSlides.concat(slides, postCloneSlides).reverse();
	  } else {
	    return preCloneSlides.concat(slides, postCloneSlides);
	  }
	};

	var Track =
	/*#__PURE__*/
	function (_React$PureComponent) {
	  _inherits(Track, _React$PureComponent);

	  function Track() {
	    _classCallCheck(this, Track);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Track).apply(this, arguments));
	  }

	  _createClass(Track, [{
	    key: "render",
	    value: function render() {
	      var slides = renderSlides(this.props);
	      var _this$props = this.props,
	          onMouseEnter = _this$props.onMouseEnter,
	          onMouseOver = _this$props.onMouseOver,
	          onMouseLeave = _this$props.onMouseLeave;
	      var mouseEvents = {
	        onMouseEnter: onMouseEnter,
	        onMouseOver: onMouseOver,
	        onMouseLeave: onMouseLeave
	      };
	      return _react["default"].createElement("div", _extends({
	        className: "slick-track",
	        style: this.props.trackStyle
	      }, mouseEvents), slides);
	    }
	  }]);

	  return Track;
	}(_react["default"].PureComponent);

	track.Track = Track;
	return track;
}

var dots = {};

var hasRequiredDots;

function requireDots () {
	if (hasRequiredDots) return dots;
	hasRequiredDots = 1;

	Object.defineProperty(dots, "__esModule", {
	  value: true
	});
	dots.Dots = void 0;

	var _react = _interopRequireDefault(React__default);

	var _classnames = _interopRequireDefault(requireClassnames());

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	var getDotCount = function getDotCount(spec) {
	  var dots;

	  if (spec.infinite) {
	    dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
	  } else {
	    dots = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
	  }

	  return dots;
	};

	var Dots =
	/*#__PURE__*/
	function (_React$PureComponent) {
	  _inherits(Dots, _React$PureComponent);

	  function Dots() {
	    _classCallCheck(this, Dots);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Dots).apply(this, arguments));
	  }

	  _createClass(Dots, [{
	    key: "clickHandler",
	    value: function clickHandler(options, e) {
	      // In Autoplay the focus stays on clicked button even after transition
	      // to next slide. That only goes away by click somewhere outside
	      e.preventDefault();
	      this.props.clickHandler(options);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this = this;

	      var dotCount = getDotCount({
	        slideCount: this.props.slideCount,
	        slidesToScroll: this.props.slidesToScroll,
	        slidesToShow: this.props.slidesToShow,
	        infinite: this.props.infinite
	      }); // Apply join & split to Array to pre-fill it for IE8
	      //
	      // Credit: http://stackoverflow.com/a/13735425/1849458

	      var _this$props = this.props,
	          onMouseEnter = _this$props.onMouseEnter,
	          onMouseOver = _this$props.onMouseOver,
	          onMouseLeave = _this$props.onMouseLeave;
	      var mouseEvents = {
	        onMouseEnter: onMouseEnter,
	        onMouseOver: onMouseOver,
	        onMouseLeave: onMouseLeave
	      };
	      var dots = Array.apply(null, Array(dotCount + 1).join("0").split("")).map(function (x, i) {
	        var leftBound = i * _this.props.slidesToScroll;
	        var rightBound = i * _this.props.slidesToScroll + (_this.props.slidesToScroll - 1);
	        var className = (0, _classnames["default"])({
	          "slick-active": _this.props.currentSlide >= leftBound && _this.props.currentSlide <= rightBound
	        });
	        var dotOptions = {
	          message: "dots",
	          index: i,
	          slidesToScroll: _this.props.slidesToScroll,
	          currentSlide: _this.props.currentSlide
	        };

	        var onClick = _this.clickHandler.bind(_this, dotOptions);

	        return _react["default"].createElement("li", {
	          key: i,
	          className: className
	        }, _react["default"].cloneElement(_this.props.customPaging(i), {
	          onClick: onClick
	        }));
	      });
	      return _react["default"].cloneElement(this.props.appendDots(dots), _objectSpread({
	        className: this.props.dotsClass
	      }, mouseEvents));
	    }
	  }]);

	  return Dots;
	}(_react["default"].PureComponent);

	dots.Dots = Dots;
	return dots;
}

var arrows = {};

var hasRequiredArrows;

function requireArrows () {
	if (hasRequiredArrows) return arrows;
	hasRequiredArrows = 1;

	Object.defineProperty(arrows, "__esModule", {
	  value: true
	});
	arrows.NextArrow = arrows.PrevArrow = void 0;

	var _react = _interopRequireDefault(React__default);

	var _classnames = _interopRequireDefault(requireClassnames());

	var _innerSliderUtils = requireInnerSliderUtils();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	var PrevArrow =
	/*#__PURE__*/
	function (_React$PureComponent) {
	  _inherits(PrevArrow, _React$PureComponent);

	  function PrevArrow() {
	    _classCallCheck(this, PrevArrow);

	    return _possibleConstructorReturn(this, _getPrototypeOf(PrevArrow).apply(this, arguments));
	  }

	  _createClass(PrevArrow, [{
	    key: "clickHandler",
	    value: function clickHandler(options, e) {
	      if (e) {
	        e.preventDefault();
	      }

	      this.props.clickHandler(options, e);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var prevClasses = {
	        "slick-arrow": true,
	        "slick-prev": true
	      };
	      var prevHandler = this.clickHandler.bind(this, {
	        message: "previous"
	      });

	      if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
	        prevClasses["slick-disabled"] = true;
	        prevHandler = null;
	      }

	      var prevArrowProps = {
	        key: "0",
	        "data-role": "none",
	        className: (0, _classnames["default"])(prevClasses),
	        style: {
	          display: "block"
	        },
	        onClick: prevHandler
	      };
	      var customProps = {
	        currentSlide: this.props.currentSlide,
	        slideCount: this.props.slideCount
	      };
	      var prevArrow;

	      if (this.props.prevArrow) {
	        prevArrow = _react["default"].cloneElement(this.props.prevArrow, _objectSpread({}, prevArrowProps, {}, customProps));
	      } else {
	        prevArrow = _react["default"].createElement("button", _extends({
	          key: "0",
	          type: "button"
	        }, prevArrowProps), " ", "Previous");
	      }

	      return prevArrow;
	    }
	  }]);

	  return PrevArrow;
	}(_react["default"].PureComponent);

	arrows.PrevArrow = PrevArrow;

	var NextArrow =
	/*#__PURE__*/
	function (_React$PureComponent2) {
	  _inherits(NextArrow, _React$PureComponent2);

	  function NextArrow() {
	    _classCallCheck(this, NextArrow);

	    return _possibleConstructorReturn(this, _getPrototypeOf(NextArrow).apply(this, arguments));
	  }

	  _createClass(NextArrow, [{
	    key: "clickHandler",
	    value: function clickHandler(options, e) {
	      if (e) {
	        e.preventDefault();
	      }

	      this.props.clickHandler(options, e);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var nextClasses = {
	        "slick-arrow": true,
	        "slick-next": true
	      };
	      var nextHandler = this.clickHandler.bind(this, {
	        message: "next"
	      });

	      if (!(0, _innerSliderUtils.canGoNext)(this.props)) {
	        nextClasses["slick-disabled"] = true;
	        nextHandler = null;
	      }

	      var nextArrowProps = {
	        key: "1",
	        "data-role": "none",
	        className: (0, _classnames["default"])(nextClasses),
	        style: {
	          display: "block"
	        },
	        onClick: nextHandler
	      };
	      var customProps = {
	        currentSlide: this.props.currentSlide,
	        slideCount: this.props.slideCount
	      };
	      var nextArrow;

	      if (this.props.nextArrow) {
	        nextArrow = _react["default"].cloneElement(this.props.nextArrow, _objectSpread({}, nextArrowProps, {}, customProps));
	      } else {
	        nextArrow = _react["default"].createElement("button", _extends({
	          key: "1",
	          type: "button"
	        }, nextArrowProps), " ", "Next");
	      }

	      return nextArrow;
	    }
	  }]);

	  return NextArrow;
	}(_react["default"].PureComponent);

	arrows.NextArrow = NextArrow;
	return arrows;
}

var hasRequiredInnerSlider;

function requireInnerSlider () {
	if (hasRequiredInnerSlider) return innerSlider;
	hasRequiredInnerSlider = 1;

	Object.defineProperty(innerSlider, "__esModule", {
	  value: true
	});
	innerSlider.InnerSlider = void 0;

	var _react = _interopRequireDefault(React__default);

	var _reactDom = _interopRequireDefault(ReactDOM__default);

	var _initialState = _interopRequireDefault(requireInitialState());

	var _lodash = _interopRequireDefault(requireLodash_debounce());

	var _classnames = _interopRequireDefault(requireClassnames());

	var _innerSliderUtils = requireInnerSliderUtils();

	var _track = requireTrack();

	var _dots = requireDots();

	var _arrows = requireArrows();

	var _resizeObserverPolyfill = _interopRequireDefault(require$$9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

	function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

	function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var InnerSlider =
	/*#__PURE__*/
	function (_React$Component) {
	  _inherits(InnerSlider, _React$Component);

	  function InnerSlider(props) {
	    var _this;

	    _classCallCheck(this, InnerSlider);

	    _this = _possibleConstructorReturn(this, _getPrototypeOf(InnerSlider).call(this, props));

	    _defineProperty(_assertThisInitialized(_this), "listRefHandler", function (ref) {
	      return _this.list = ref;
	    });

	    _defineProperty(_assertThisInitialized(_this), "trackRefHandler", function (ref) {
	      return _this.track = ref;
	    });

	    _defineProperty(_assertThisInitialized(_this), "adaptHeight", function () {
	      if (_this.props.adaptiveHeight && _this.list) {
	        var elem = _this.list.querySelector("[data-index=\"".concat(_this.state.currentSlide, "\"]"));

	        _this.list.style.height = (0, _innerSliderUtils.getHeight)(elem) + "px";
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "UNSAFE_componentWillMount", function () {
	      _this.ssrInit();

	      _this.props.onInit && _this.props.onInit();

	      if (_this.props.lazyLoad) {
	        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread({}, _this.props, {}, _this.state));

	        if (slidesToLoad.length > 0) {
	          _this.setState(function (prevState) {
	            return {
	              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
	            };
	          });

	          if (_this.props.onLazyLoad) {
	            _this.props.onLazyLoad(slidesToLoad);
	          }
	        }
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
	      var spec = _objectSpread({
	        listRef: _this.list,
	        trackRef: _this.track
	      }, _this.props);

	      _this.updateState(spec, true, function () {
	        _this.adaptHeight();

	        _this.props.autoplay && _this.autoPlay("update");
	      });

	      if (_this.props.lazyLoad === "progressive") {
	        _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1000);
	      }

	      _this.ro = new _resizeObserverPolyfill["default"](function () {
	        if (_this.state.animating) {
	          _this.onWindowResized(false); // don't set trackStyle hence don't break animation


	          _this.callbackTimers.push(setTimeout(function () {
	            return _this.onWindowResized();
	          }, _this.props.speed));
	        } else {
	          _this.onWindowResized();
	        }
	      });

	      _this.ro.observe(_this.list);

	      Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function (slide) {
	        slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
	        slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
	      }); // To support server-side rendering

	      if (!window) {
	        return;
	      }

	      if (window.addEventListener) {
	        window.addEventListener("resize", _this.onWindowResized);
	      } else {
	        window.attachEvent("onresize", _this.onWindowResized);
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
	      if (_this.animationEndCallback) {
	        clearTimeout(_this.animationEndCallback);
	      }

	      if (_this.lazyLoadTimer) {
	        clearInterval(_this.lazyLoadTimer);
	      }

	      if (_this.callbackTimers.length) {
	        _this.callbackTimers.forEach(function (timer) {
	          return clearTimeout(timer);
	        });

	        _this.callbackTimers = [];
	      }

	      if (window.addEventListener) {
	        window.removeEventListener("resize", _this.onWindowResized);
	      } else {
	        window.detachEvent("onresize", _this.onWindowResized);
	      }

	      if (_this.autoplayTimer) {
	        clearInterval(_this.autoplayTimer);
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "UNSAFE_componentWillReceiveProps", function (nextProps) {
	      var spec = _objectSpread({
	        listRef: _this.list,
	        trackRef: _this.track
	      }, nextProps, {}, _this.state);

	      var setTrackStyle = false;

	      for (var _i = 0, _Object$keys = Object.keys(_this.props); _i < _Object$keys.length; _i++) {
	        var key = _Object$keys[_i];

	        if (!nextProps.hasOwnProperty(key)) {
	          setTrackStyle = true;
	          break;
	        }

	        if (_typeof(nextProps[key]) === "object" || typeof nextProps[key] === "function") {
	          continue;
	        }

	        if (nextProps[key] !== _this.props[key]) {
	          setTrackStyle = true;
	          break;
	        }
	      }

	      _this.updateState(spec, setTrackStyle, function () {
	        if (_this.state.currentSlide >= _react["default"].Children.count(nextProps.children)) {
	          _this.changeSlide({
	            message: "index",
	            index: _react["default"].Children.count(nextProps.children) - nextProps.slidesToShow,
	            currentSlide: _this.state.currentSlide
	          });
	        }

	        if (nextProps.autoplay) {
	          _this.autoPlay("update");
	        } else {
	          _this.pause("paused");
	        }
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function () {
	      _this.checkImagesLoad();

	      _this.props.onReInit && _this.props.onReInit();

	      if (_this.props.lazyLoad) {
	        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread({}, _this.props, {}, _this.state));

	        if (slidesToLoad.length > 0) {
	          _this.setState(function (prevState) {
	            return {
	              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
	            };
	          });

	          if (_this.props.onLazyLoad) {
	            _this.props.onLazyLoad(slidesToLoad);
	          }
	        }
	      } // if (this.props.onLazyLoad) {
	      //   this.props.onLazyLoad([leftMostSlide])
	      // }


	      _this.adaptHeight();
	    });

	    _defineProperty(_assertThisInitialized(_this), "onWindowResized", function (setTrackStyle) {
	      if (_this.debouncedResize) _this.debouncedResize.cancel();
	      _this.debouncedResize = (0, _lodash["default"])(function () {
	        return _this.resizeWindow(setTrackStyle);
	      }, 50);

	      _this.debouncedResize();
	    });

	    _defineProperty(_assertThisInitialized(_this), "resizeWindow", function () {
	      var setTrackStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	      if (!_reactDom["default"].findDOMNode(_this.track)) return;

	      var spec = _objectSpread({
	        listRef: _this.list,
	        trackRef: _this.track
	      }, _this.props, {}, _this.state);

	      _this.updateState(spec, setTrackStyle, function () {
	        if (_this.props.autoplay) _this.autoPlay("update");else _this.pause("paused");
	      }); // animating state should be cleared while resizing, otherwise autoplay stops working


	      _this.setState({
	        animating: false
	      });

	      clearTimeout(_this.animationEndCallback);
	      delete _this.animationEndCallback;
	    });

	    _defineProperty(_assertThisInitialized(_this), "updateState", function (spec, setTrackStyle, callback) {
	      var updatedState = (0, _innerSliderUtils.initializedState)(spec);
	      spec = _objectSpread({}, spec, {}, updatedState, {
	        slideIndex: updatedState.currentSlide
	      });
	      var targetLeft = (0, _innerSliderUtils.getTrackLeft)(spec);
	      spec = _objectSpread({}, spec, {
	        left: targetLeft
	      });
	      var trackStyle = (0, _innerSliderUtils.getTrackCSS)(spec);

	      if (setTrackStyle || _react["default"].Children.count(_this.props.children) !== _react["default"].Children.count(spec.children)) {
	        updatedState["trackStyle"] = trackStyle;
	      }

	      _this.setState(updatedState, callback);
	    });

	    _defineProperty(_assertThisInitialized(_this), "ssrInit", function () {
	      if (_this.props.variableWidth) {
	        var _trackWidth = 0,
	            _trackLeft = 0;
	        var childrenWidths = [];
	        var preClones = (0, _innerSliderUtils.getPreClones)(_objectSpread({}, _this.props, {}, _this.state, {
	          slideCount: _this.props.children.length
	        }));
	        var postClones = (0, _innerSliderUtils.getPostClones)(_objectSpread({}, _this.props, {}, _this.state, {
	          slideCount: _this.props.children.length
	        }));

	        _this.props.children.forEach(function (child) {
	          childrenWidths.push(child.props.style.width);
	          _trackWidth += child.props.style.width;
	        });

	        for (var i = 0; i < preClones; i++) {
	          _trackLeft += childrenWidths[childrenWidths.length - 1 - i];
	          _trackWidth += childrenWidths[childrenWidths.length - 1 - i];
	        }

	        for (var _i2 = 0; _i2 < postClones; _i2++) {
	          _trackWidth += childrenWidths[_i2];
	        }

	        for (var _i3 = 0; _i3 < _this.state.currentSlide; _i3++) {
	          _trackLeft += childrenWidths[_i3];
	        }

	        var _trackStyle = {
	          width: _trackWidth + "px",
	          left: -_trackLeft + "px"
	        };

	        if (_this.props.centerMode) {
	          var currentWidth = "".concat(childrenWidths[_this.state.currentSlide], "px");
	          _trackStyle.left = "calc(".concat(_trackStyle.left, " + (100% - ").concat(currentWidth, ") / 2 ) ");
	        }

	        _this.setState({
	          trackStyle: _trackStyle
	        });

	        return;
	      }

	      var childrenCount = _react["default"].Children.count(_this.props.children);

	      var spec = _objectSpread({}, _this.props, {}, _this.state, {
	        slideCount: childrenCount
	      });

	      var slideCount = (0, _innerSliderUtils.getPreClones)(spec) + (0, _innerSliderUtils.getPostClones)(spec) + childrenCount;
	      var trackWidth = 100 / _this.props.slidesToShow * slideCount;
	      var slideWidth = 100 / slideCount;
	      var trackLeft = -slideWidth * ((0, _innerSliderUtils.getPreClones)(spec) + _this.state.currentSlide) * trackWidth / 100;

	      if (_this.props.centerMode) {
	        trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
	      }

	      var trackStyle = {
	        width: trackWidth + "%",
	        left: trackLeft + "%"
	      };

	      _this.setState({
	        slideWidth: slideWidth + "%",
	        trackStyle: trackStyle
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "checkImagesLoad", function () {
	      var images = document.querySelectorAll(".slick-slide img");
	      var imagesCount = images.length,
	          loadedCount = 0;
	      Array.prototype.forEach.call(images, function (image) {
	        var handler = function handler() {
	          return ++loadedCount && loadedCount >= imagesCount && _this.onWindowResized();
	        };

	        if (!image.onclick) {
	          image.onclick = function () {
	            return image.parentNode.focus();
	          };
	        } else {
	          var prevClickHandler = image.onclick;

	          image.onclick = function () {
	            prevClickHandler();
	            image.parentNode.focus();
	          };
	        }

	        if (!image.onload) {
	          if (_this.props.lazyLoad) {
	            image.onload = function () {
	              _this.adaptHeight();

	              _this.callbackTimers.push(setTimeout(_this.onWindowResized, _this.props.speed));
	            };
	          } else {
	            image.onload = handler;

	            image.onerror = function () {
	              handler();
	              _this.props.onLazyLoadError && _this.props.onLazyLoadError();
	            };
	          }
	        }
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "progressiveLazyLoad", function () {
	      var slidesToLoad = [];

	      var spec = _objectSpread({}, _this.props, {}, _this.state);

	      for (var index = _this.state.currentSlide; index < _this.state.slideCount + (0, _innerSliderUtils.getPostClones)(spec); index++) {
	        if (_this.state.lazyLoadedList.indexOf(index) < 0) {
	          slidesToLoad.push(index);
	          break;
	        }
	      }

	      for (var _index = _this.state.currentSlide - 1; _index >= -(0, _innerSliderUtils.getPreClones)(spec); _index--) {
	        if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
	          slidesToLoad.push(_index);
	          break;
	        }
	      }

	      if (slidesToLoad.length > 0) {
	        _this.setState(function (state) {
	          return {
	            lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
	          };
	        });

	        if (_this.props.onLazyLoad) {
	          _this.props.onLazyLoad(slidesToLoad);
	        }
	      } else {
	        if (_this.lazyLoadTimer) {
	          clearInterval(_this.lazyLoadTimer);
	          delete _this.lazyLoadTimer;
	        }
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "slideHandler", function (index) {
	      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      var _this$props = _this.props,
	          asNavFor = _this$props.asNavFor,
	          beforeChange = _this$props.beforeChange,
	          onLazyLoad = _this$props.onLazyLoad,
	          speed = _this$props.speed,
	          afterChange = _this$props.afterChange; // capture currentslide before state is updated

	      var currentSlide = _this.state.currentSlide;

	      var _slideHandler = (0, _innerSliderUtils.slideHandler)(_objectSpread({
	        index: index
	      }, _this.props, {}, _this.state, {
	        trackRef: _this.track,
	        useCSS: _this.props.useCSS && !dontAnimate
	      })),
	          state = _slideHandler.state,
	          nextState = _slideHandler.nextState;

	      if (!state) return;
	      beforeChange && beforeChange(currentSlide, state.currentSlide);
	      var slidesToLoad = state.lazyLoadedList.filter(function (value) {
	        return _this.state.lazyLoadedList.indexOf(value) < 0;
	      });
	      onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);

	      _this.setState(state, function () {
	        asNavFor && asNavFor.innerSlider.slideHandler(index);
	        if (!nextState) return;
	        _this.animationEndCallback = setTimeout(function () {
	          var animating = nextState.animating,
	              firstBatch = _objectWithoutProperties(nextState, ["animating"]);

	          _this.setState(firstBatch, function () {
	            _this.callbackTimers.push(setTimeout(function () {
	              return _this.setState({
	                animating: animating
	              });
	            }, 10));

	            afterChange && afterChange(state.currentSlide);
	            delete _this.animationEndCallback;
	          });
	        }, speed);
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "changeSlide", function (options) {
	      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	      var spec = _objectSpread({}, _this.props, {}, _this.state);

	      var targetSlide = (0, _innerSliderUtils.changeSlide)(spec, options);
	      if (targetSlide !== 0 && !targetSlide) return;

	      if (dontAnimate === true) {
	        _this.slideHandler(targetSlide, dontAnimate);
	      } else {
	        _this.slideHandler(targetSlide);
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "clickHandler", function (e) {
	      if (_this.clickable === false) {
	        e.stopPropagation();
	        e.preventDefault();
	      }

	      _this.clickable = true;
	    });

	    _defineProperty(_assertThisInitialized(_this), "keyHandler", function (e) {
	      var dir = (0, _innerSliderUtils.keyHandler)(e, _this.props.accessibility, _this.props.rtl);
	      dir !== "" && _this.changeSlide({
	        message: dir
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "selectHandler", function (options) {
	      _this.changeSlide(options);
	    });

	    _defineProperty(_assertThisInitialized(_this), "disableBodyScroll", function () {
	      var preventDefault = function preventDefault(e) {
	        e = e || window.event;
	        if (e.preventDefault) e.preventDefault();
	        e.returnValue = false;
	      };

	      window.ontouchmove = preventDefault;
	    });

	    _defineProperty(_assertThisInitialized(_this), "enableBodyScroll", function () {
	      window.ontouchmove = null;
	    });

	    _defineProperty(_assertThisInitialized(_this), "swipeStart", function (e) {
	      if (_this.props.verticalSwiping) {
	        _this.disableBodyScroll();
	      }

	      var state = (0, _innerSliderUtils.swipeStart)(e, _this.props.swipe, _this.props.draggable);
	      state !== "" && _this.setState(state);
	    });

	    _defineProperty(_assertThisInitialized(_this), "swipeMove", function (e) {
	      var state = (0, _innerSliderUtils.swipeMove)(e, _objectSpread({}, _this.props, {}, _this.state, {
	        trackRef: _this.track,
	        listRef: _this.list,
	        slideIndex: _this.state.currentSlide
	      }));
	      if (!state) return;

	      if (state["swiping"]) {
	        _this.clickable = false;
	      }

	      _this.setState(state);
	    });

	    _defineProperty(_assertThisInitialized(_this), "swipeEnd", function (e) {
	      var state = (0, _innerSliderUtils.swipeEnd)(e, _objectSpread({}, _this.props, {}, _this.state, {
	        trackRef: _this.track,
	        listRef: _this.list,
	        slideIndex: _this.state.currentSlide
	      }));
	      if (!state) return;
	      var triggerSlideHandler = state["triggerSlideHandler"];
	      delete state["triggerSlideHandler"];

	      _this.setState(state);

	      if (triggerSlideHandler === undefined) return;

	      _this.slideHandler(triggerSlideHandler);

	      if (_this.props.verticalSwiping) {
	        _this.enableBodyScroll();
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "slickPrev", function () {
	      // this and fellow methods are wrapped in setTimeout
	      // to make sure initialize setState has happened before
	      // any of such methods are called
	      _this.callbackTimers.push(setTimeout(function () {
	        return _this.changeSlide({
	          message: "previous"
	        });
	      }, 0));
	    });

	    _defineProperty(_assertThisInitialized(_this), "slickNext", function () {
	      _this.callbackTimers.push(setTimeout(function () {
	        return _this.changeSlide({
	          message: "next"
	        });
	      }, 0));
	    });

	    _defineProperty(_assertThisInitialized(_this), "slickGoTo", function (slide) {
	      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      slide = Number(slide);
	      if (isNaN(slide)) return "";

	      _this.callbackTimers.push(setTimeout(function () {
	        return _this.changeSlide({
	          message: "index",
	          index: slide,
	          currentSlide: _this.state.currentSlide
	        }, dontAnimate);
	      }, 0));
	    });

	    _defineProperty(_assertThisInitialized(_this), "play", function () {
	      var nextIndex;

	      if (_this.props.rtl) {
	        nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
	      } else {
	        if ((0, _innerSliderUtils.canGoNext)(_objectSpread({}, _this.props, {}, _this.state))) {
	          nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
	        } else {
	          return false;
	        }
	      }

	      _this.slideHandler(nextIndex);
	    });

	    _defineProperty(_assertThisInitialized(_this), "autoPlay", function (playType) {
	      if (_this.autoplayTimer) {
	        clearInterval(_this.autoplayTimer);
	      }

	      var autoplaying = _this.state.autoplaying;

	      if (playType === "update") {
	        if (autoplaying === "hovered" || autoplaying === "focused" || autoplaying === "paused") {
	          return;
	        }
	      } else if (playType === "leave") {
	        if (autoplaying === "paused" || autoplaying === "focused") {
	          return;
	        }
	      } else if (playType === "blur") {
	        if (autoplaying === "paused" || autoplaying === "hovered") {
	          return;
	        }
	      }

	      _this.autoplayTimer = setInterval(_this.play, _this.props.autoplaySpeed + 50);

	      _this.setState({
	        autoplaying: "playing"
	      });
	    });

	    _defineProperty(_assertThisInitialized(_this), "pause", function (pauseType) {
	      if (_this.autoplayTimer) {
	        clearInterval(_this.autoplayTimer);
	        _this.autoplayTimer = null;
	      }

	      var autoplaying = _this.state.autoplaying;

	      if (pauseType === "paused") {
	        _this.setState({
	          autoplaying: "paused"
	        });
	      } else if (pauseType === "focused") {
	        if (autoplaying === "hovered" || autoplaying === "playing") {
	          _this.setState({
	            autoplaying: "focused"
	          });
	        }
	      } else {
	        // pauseType  is 'hovered'
	        if (autoplaying === "playing") {
	          _this.setState({
	            autoplaying: "hovered"
	          });
	        }
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "onDotsOver", function () {
	      return _this.props.autoplay && _this.pause("hovered");
	    });

	    _defineProperty(_assertThisInitialized(_this), "onDotsLeave", function () {
	      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
	    });

	    _defineProperty(_assertThisInitialized(_this), "onTrackOver", function () {
	      return _this.props.autoplay && _this.pause("hovered");
	    });

	    _defineProperty(_assertThisInitialized(_this), "onTrackLeave", function () {
	      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
	    });

	    _defineProperty(_assertThisInitialized(_this), "onSlideFocus", function () {
	      return _this.props.autoplay && _this.pause("focused");
	    });

	    _defineProperty(_assertThisInitialized(_this), "onSlideBlur", function () {
	      return _this.props.autoplay && _this.state.autoplaying === "focused" && _this.autoPlay("blur");
	    });

	    _defineProperty(_assertThisInitialized(_this), "render", function () {
	      var className = (0, _classnames["default"])("slick-slider", _this.props.className, {
	        "slick-vertical": _this.props.vertical,
	        "slick-initialized": true
	      });

	      var spec = _objectSpread({}, _this.props, {}, _this.state);

	      var trackProps = (0, _innerSliderUtils.extractObject)(spec, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding"]);
	      var pauseOnHover = _this.props.pauseOnHover;
	      trackProps = _objectSpread({}, trackProps, {
	        onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
	        onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
	        onMouseOver: pauseOnHover ? _this.onTrackOver : null,
	        focusOnSelect: _this.props.focusOnSelect ? _this.selectHandler : null
	      });
	      var dots;

	      if (_this.props.dots === true && _this.state.slideCount >= _this.props.slidesToShow) {
	        var dotProps = (0, _innerSliderUtils.extractObject)(spec, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]);
	        var pauseOnDotsHover = _this.props.pauseOnDotsHover;
	        dotProps = _objectSpread({}, dotProps, {
	          clickHandler: _this.changeSlide,
	          onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
	          onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
	          onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
	        });
	        dots = _react["default"].createElement(_dots.Dots, dotProps);
	      }

	      var prevArrow, nextArrow;
	      var arrowProps = (0, _innerSliderUtils.extractObject)(spec, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
	      arrowProps.clickHandler = _this.changeSlide;

	      if (_this.props.arrows) {
	        prevArrow = _react["default"].createElement(_arrows.PrevArrow, arrowProps);
	        nextArrow = _react["default"].createElement(_arrows.NextArrow, arrowProps);
	      }

	      var verticalHeightStyle = null;

	      if (_this.props.vertical) {
	        verticalHeightStyle = {
	          height: _this.state.listHeight
	        };
	      }

	      var centerPaddingStyle = null;

	      if (_this.props.vertical === false) {
	        if (_this.props.centerMode === true) {
	          centerPaddingStyle = {
	            padding: "0px " + _this.props.centerPadding
	          };
	        }
	      } else {
	        if (_this.props.centerMode === true) {
	          centerPaddingStyle = {
	            padding: _this.props.centerPadding + " 0px"
	          };
	        }
	      }

	      var listStyle = _objectSpread({}, verticalHeightStyle, {}, centerPaddingStyle);

	      var touchMove = _this.props.touchMove;
	      var listProps = {
	        className: "slick-list",
	        style: listStyle,
	        onClick: _this.clickHandler,
	        onMouseDown: touchMove ? _this.swipeStart : null,
	        onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
	        onMouseUp: touchMove ? _this.swipeEnd : null,
	        onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
	        onTouchStart: touchMove ? _this.swipeStart : null,
	        onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
	        onTouchEnd: touchMove ? _this.swipeEnd : null,
	        onTouchCancel: _this.state.dragging && touchMove ? _this.swipeEnd : null,
	        onKeyDown: _this.props.accessibility ? _this.keyHandler : null
	      };
	      var innerSliderProps = {
	        className: className,
	        dir: "ltr",
	        style: _this.props.style
	      };

	      if (_this.props.unslick) {
	        listProps = {
	          className: "slick-list"
	        };
	        innerSliderProps = {
	          className: className
	        };
	      }

	      return _react["default"].createElement("div", innerSliderProps, !_this.props.unslick ? prevArrow : "", _react["default"].createElement("div", _extends({
	        ref: _this.listRefHandler
	      }, listProps), _react["default"].createElement(_track.Track, _extends({
	        ref: _this.trackRefHandler
	      }, trackProps), _this.props.children)), !_this.props.unslick ? nextArrow : "", !_this.props.unslick ? dots : "");
	    });

	    _this.list = null;
	    _this.track = null;
	    _this.state = _objectSpread({}, _initialState["default"], {
	      currentSlide: _this.props.initialSlide,
	      slideCount: _react["default"].Children.count(_this.props.children)
	    });
	    _this.callbackTimers = [];
	    _this.clickable = true;
	    _this.debouncedResize = null;
	    return _this;
	  }

	  return InnerSlider;
	}(_react["default"].Component);

	innerSlider.InnerSlider = InnerSlider;
	return innerSlider;
}

var camel2hyphen_1;
var hasRequiredCamel2hyphen;

function requireCamel2hyphen () {
	if (hasRequiredCamel2hyphen) return camel2hyphen_1;
	hasRequiredCamel2hyphen = 1;
	var camel2hyphen = function (str) {
	  return str
	          .replace(/[A-Z]/g, function (match) {
	            return '-' + match.toLowerCase();
	          })
	          .toLowerCase();
	};

	camel2hyphen_1 = camel2hyphen;
	return camel2hyphen_1;
}

var json2mq_1;
var hasRequiredJson2mq;

function requireJson2mq () {
	if (hasRequiredJson2mq) return json2mq_1;
	hasRequiredJson2mq = 1;
	var camel2hyphen = requireCamel2hyphen();

	var isDimension = function (feature) {
	  var re = /[height|width]$/;
	  return re.test(feature);
	};

	var obj2mq = function (obj) {
	  var mq = '';
	  var features = Object.keys(obj);
	  features.forEach(function (feature, index) {
	    var value = obj[feature];
	    feature = camel2hyphen(feature);
	    // Add px to dimension features
	    if (isDimension(feature) && typeof value === 'number') {
	      value = value + 'px';
	    }
	    if (value === true) {
	      mq += feature;
	    } else if (value === false) {
	      mq += 'not ' + feature;
	    } else {
	      mq += '(' + feature + ': ' + value + ')';
	    }
	    if (index < features.length-1) {
	      mq += ' and ';
	    }
	  });
	  return mq;
	};

	var json2mq = function (query) {
	  var mq = '';
	  if (typeof query === 'string') {
	    return query;
	  }
	  // Handling array of media queries
	  if (query instanceof Array) {
	    query.forEach(function (q, index) {
	      mq += obj2mq(q);
	      if (index < query.length-1) {
	        mq += ', ';
	      }
	    });
	    return mq;
	  }
	  // Handling single media query
	  return obj2mq(query);
	};

	json2mq_1 = json2mq;
	return json2mq_1;
}

var defaultProps = {};

var hasRequiredDefaultProps;

function requireDefaultProps () {
	if (hasRequiredDefaultProps) return defaultProps;
	hasRequiredDefaultProps = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});
		exports$1["default"] = void 0;

		var _react = _interopRequireDefault(React__default);

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

		var defaultProps = {
		  accessibility: true,
		  adaptiveHeight: false,
		  afterChange: null,
		  appendDots: function appendDots(dots) {
		    return _react["default"].createElement("ul", {
		      style: {
		        display: "block"
		      }
		    }, dots);
		  },
		  arrows: true,
		  autoplay: false,
		  autoplaySpeed: 3000,
		  beforeChange: null,
		  centerMode: false,
		  centerPadding: "50px",
		  className: "",
		  cssEase: "ease",
		  customPaging: function customPaging(i) {
		    return _react["default"].createElement("button", null, i + 1);
		  },
		  dots: false,
		  dotsClass: "slick-dots",
		  draggable: true,
		  easing: "linear",
		  edgeFriction: 0.35,
		  fade: false,
		  focusOnSelect: false,
		  infinite: true,
		  initialSlide: 0,
		  lazyLoad: null,
		  nextArrow: null,
		  onEdge: null,
		  onInit: null,
		  onLazyLoadError: null,
		  onReInit: null,
		  pauseOnDotsHover: false,
		  pauseOnFocus: false,
		  pauseOnHover: true,
		  prevArrow: null,
		  responsive: null,
		  rows: 1,
		  rtl: false,
		  slide: "div",
		  slidesPerRow: 1,
		  slidesToScroll: 1,
		  slidesToShow: 1,
		  speed: 500,
		  swipe: true,
		  swipeEvent: null,
		  swipeToSlide: false,
		  touchMove: true,
		  touchThreshold: 5,
		  useCSS: true,
		  useTransform: true,
		  variableWidth: false,
		  vertical: false,
		  waitForAnimate: true
		};
		var _default = defaultProps;
		exports$1["default"] = _default; 
	} (defaultProps));
	return defaultProps;
}

var hasRequiredSlider;

function requireSlider () {
	if (hasRequiredSlider) return slider;
	hasRequiredSlider = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});
		exports$1["default"] = void 0;

		var _react = _interopRequireDefault(React__default);

		var _innerSlider = requireInnerSlider();

		var _json2mq = _interopRequireDefault(requireJson2mq());

		var _defaultProps = _interopRequireDefault(requireDefaultProps());

		var _innerSliderUtils = requireInnerSliderUtils();

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

		function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

		function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

		function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

		function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); return Constructor; }

		function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

		function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

		function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		var enquire = (0, _innerSliderUtils.canUseDOM)() && requireSrc();

		var Slider =
		/*#__PURE__*/
		function (_React$Component) {
		  _inherits(Slider, _React$Component);

		  function Slider(props) {
		    var _this;

		    _classCallCheck(this, Slider);

		    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slider).call(this, props));

		    _defineProperty(_assertThisInitialized(_this), "innerSliderRefHandler", function (ref) {
		      return _this.innerSlider = ref;
		    });

		    _defineProperty(_assertThisInitialized(_this), "slickPrev", function () {
		      return _this.innerSlider.slickPrev();
		    });

		    _defineProperty(_assertThisInitialized(_this), "slickNext", function () {
		      return _this.innerSlider.slickNext();
		    });

		    _defineProperty(_assertThisInitialized(_this), "slickGoTo", function (slide) {
		      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
		      return _this.innerSlider.slickGoTo(slide, dontAnimate);
		    });

		    _defineProperty(_assertThisInitialized(_this), "slickPause", function () {
		      return _this.innerSlider.pause("paused");
		    });

		    _defineProperty(_assertThisInitialized(_this), "slickPlay", function () {
		      return _this.innerSlider.autoPlay("play");
		    });

		    _this.state = {
		      breakpoint: null
		    };
		    _this._responsiveMediaHandlers = [];
		    return _this;
		  }

		  _createClass(Slider, [{
		    key: "media",
		    value: function media(query, handler) {
		      // javascript handler for  css media query
		      enquire.register(query, handler);

		      this._responsiveMediaHandlers.push({
		        query: query,
		        handler: handler
		      });
		    } // handles responsive breakpoints

		  }, {
		    key: "UNSAFE_componentWillMount",
		    value: function UNSAFE_componentWillMount() {
		      var _this2 = this;

		      // performance monitoring
		      //if ("production" !== 'production') {
		      //const { whyDidYouUpdate } = require('why-did-you-update')
		      //whyDidYouUpdate(React)
		      //}
		      if (this.props.responsive) {
		        var breakpoints = this.props.responsive.map(function (breakpt) {
		          return breakpt.breakpoint;
		        }); // sort them in increasing order of their numerical value

		        breakpoints.sort(function (x, y) {
		          return x - y;
		        });
		        breakpoints.forEach(function (breakpoint, index) {
		          // media query for each breakpoint
		          var bQuery;

		          if (index === 0) {
		            bQuery = (0, _json2mq["default"])({
		              minWidth: 0,
		              maxWidth: breakpoint
		            });
		          } else {
		            bQuery = (0, _json2mq["default"])({
		              minWidth: breakpoints[index - 1] + 1,
		              maxWidth: breakpoint
		            });
		          } // when not using server side rendering


		          (0, _innerSliderUtils.canUseDOM)() && _this2.media(bQuery, function () {
		            _this2.setState({
		              breakpoint: breakpoint
		            });
		          });
		        }); // Register media query for full screen. Need to support resize from small to large
		        // convert javascript object to media query string

		        var query = (0, _json2mq["default"])({
		          minWidth: breakpoints.slice(-1)[0]
		        });
		        (0, _innerSliderUtils.canUseDOM)() && this.media(query, function () {
		          _this2.setState({
		            breakpoint: null
		          });
		        });
		      }
		    }
		  }, {
		    key: "componentWillUnmount",
		    value: function componentWillUnmount() {
		      this._responsiveMediaHandlers.forEach(function (obj) {
		        enquire.unregister(obj.query, obj.handler);
		      });
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this3 = this;

		      var settings;
		      var newProps;

		      if (this.state.breakpoint) {
		        newProps = this.props.responsive.filter(function (resp) {
		          return resp.breakpoint === _this3.state.breakpoint;
		        });
		        settings = newProps[0].settings === "unslick" ? "unslick" : _objectSpread({}, _defaultProps["default"], {}, this.props, {}, newProps[0].settings);
		      } else {
		        settings = _objectSpread({}, _defaultProps["default"], {}, this.props);
		      } // force scrolling by one if centerMode is on


		      if (settings.centerMode) {

		        settings.slidesToScroll = 1;
		      } // force showing one slide and scrolling by one if the fade mode is on


		      if (settings.fade) {

		        settings.slidesToShow = 1;
		        settings.slidesToScroll = 1;
		      } // makes sure that children is an array, even when there is only 1 child


		      var children = _react["default"].Children.toArray(this.props.children); // Children may contain false or null, so we should filter them
		      // children may also contain string filled with spaces (in certain cases where we use jsx strings)


		      children = children.filter(function (child) {
		        if (typeof child === "string") {
		          return !!child.trim();
		        }

		        return !!child;
		      }); // rows and slidesPerRow logic is handled here

		      if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
		        console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
		        settings.variableWidth = false;
		      }

		      var newChildren = [];
		      var currentWidth = null;

		      for (var i = 0; i < children.length; i += settings.rows * settings.slidesPerRow) {
		        var newSlide = [];

		        for (var j = i; j < i + settings.rows * settings.slidesPerRow; j += settings.slidesPerRow) {
		          var row = [];

		          for (var k = j; k < j + settings.slidesPerRow; k += 1) {
		            if (settings.variableWidth && children[k].props.style) {
		              currentWidth = children[k].props.style.width;
		            }

		            if (k >= children.length) break;
		            row.push(_react["default"].cloneElement(children[k], {
		              key: 100 * i + 10 * j + k,
		              tabIndex: -1,
		              style: {
		                width: "".concat(100 / settings.slidesPerRow, "%"),
		                display: "inline-block"
		              }
		            }));
		          }

		          newSlide.push(_react["default"].createElement("div", {
		            key: 10 * i + j
		          }, row));
		        }

		        if (settings.variableWidth) {
		          newChildren.push(_react["default"].createElement("div", {
		            key: i,
		            style: {
		              width: currentWidth
		            }
		          }, newSlide));
		        } else {
		          newChildren.push(_react["default"].createElement("div", {
		            key: i
		          }, newSlide));
		        }
		      }

		      if (settings === "unslick") {
		        var className = "regular slider " + (this.props.className || "");
		        return _react["default"].createElement("div", {
		          className: className
		        }, newChildren);
		      } else if (newChildren.length <= settings.slidesToShow) {
		        settings.unslick = true;
		      }

		      return _react["default"].createElement(_innerSlider.InnerSlider, _extends({
		        style: this.props.style,
		        ref: this.innerSliderRefHandler
		      }, settings), newChildren);
		    }
		  }]);

		  return Slider;
		}(_react["default"].Component);

		exports$1["default"] = Slider; 
	} (slider));
	return slider;
}

var hasRequiredLib;

function requireLib () {
	if (hasRequiredLib) return lib;
	hasRequiredLib = 1;
	(function (exports$1) {

		Object.defineProperty(exports$1, "__esModule", {
		  value: true
		});
		exports$1["default"] = void 0;

		var _slider = _interopRequireDefault(requireSlider());

		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

		var _default = _slider["default"];
		exports$1["default"] = _default; 
	} (lib));
	return lib;
}

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// https://github.com/WickyNilliams/enquire.js/issues/82
// TODO: Will be removed in antd 4.0 because we will no longer support ie9

if (typeof window !== 'undefined') {
  var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
    return {
      media: mediaQuery,
      matches: false,
      addListener: function addListener() {},
      removeListener: function removeListener() {}
    };
  }; // ref: https://github.com/ant-design/ant-design/issues/18774


  if (!window.matchMedia) window.matchMedia = matchMediaPolyfill;
} // Use require over import (will be lifted up)
// make sure matchMedia polyfill run before require('react-slick')
// Fix https://github.com/ant-design/ant-design/issues/6560
// Fix https://github.com/ant-design/ant-design/issues/3308


var SlickCarousel = requireLib()["default"];

var Carousel = /*#__PURE__*/function (_React$Component) {
  _inherits(Carousel, _React$Component);

  var _super = _createSuper(Carousel);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _super.call(this, props);

    _this.saveSlick = function (node) {
      _this.slick = node;
    };

    _this.onWindowResized = function () {
      // Fix https://github.com/ant-design/ant-design/issues/2550
      var autoplay = _this.props.autoplay;

      if (autoplay && _this.slick && _this.slick.innerSlider && _this.slick.innerSlider.autoPlay) {
        _this.slick.innerSlider.autoPlay();
      }
    };

    _this.renderCarousel = function (_ref) {
      var getPrefixCls = _ref.getPrefixCls;

      var props = _extends({}, _this.props);

      if (props.effect === 'fade') {
        props.fade = true;
      }

      var className = getPrefixCls('carousel', props.prefixCls);
      var dotsClass = 'slick-dots';

      var dotPosition = _this.getDotPosition();

      props.vertical = dotPosition === 'left' || dotPosition === 'right';
      props.dotsClass = "".concat(dotsClass, " ").concat(dotsClass, "-").concat(dotPosition || 'bottom');

      if (props.vertical) {
        className = "".concat(className, " ").concat(className, "-vertical");
      }

      return /*#__PURE__*/React.createElement("div", {
        className: className
      }, /*#__PURE__*/React.createElement(SlickCarousel, _extends({
        ref: _this.saveSlick
      }, props)));
    };

    _this.onWindowResized = debounce(_this.onWindowResized, 500, {
      leading: false
    });

    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var autoplay = this.props.autoplay;

      if (autoplay) {
        window.addEventListener('resize', this.onWindowResized);
      } // https://github.com/ant-design/ant-design/issues/7191


      this.innerSlider = this.slick && this.slick.innerSlider;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (React.Children.count(this.props.children) !== React.Children.count(prevProps.children)) {
        this.goTo(this.props.initialSlide || 0, false);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var autoplay = this.props.autoplay;

      if (autoplay) {
        window.removeEventListener('resize', this.onWindowResized);
        this.onWindowResized.cancel();
      }
    }
  }, {
    key: "getDotPosition",
    value: function getDotPosition() {
      if (this.props.dotPosition) {
        return this.props.dotPosition;
      }

      if ('vertical' in this.props) {
        return this.props.vertical ? 'right' : 'bottom';
      }

      return 'bottom';
    }
  }, {
    key: "next",
    value: function next() {
      this.slick.slickNext();
    }
  }, {
    key: "prev",
    value: function prev() {
      this.slick.slickPrev();
    }
  }, {
    key: "goTo",
    value: function goTo(slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.slick.slickGoTo(slide, dontAnimate);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, this.renderCarousel);
    }
  }]);

  return Carousel;
}(React.Component);
Carousel.defaultProps = {
  dots: true,
  arrows: false,
  draggable: false
};

export { Carousel as default };
