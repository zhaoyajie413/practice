import SwiperClass from "../../utils/class"

import update from './update/index';
import events from "./events"

import Utils from "../../utils/utils"
import $ from "../../utils/dom"
import Support from "../../utils/support"

import defaults from "./defaults"

const prototypes = {
    update,
    /* translate,
     transition,
     slide,
     loop,
     grabCursor,
     manipulation,*/
    events,
 /*   breakpoints,
    checkOverflow,
    classes,
    images,*/
};

const extendedDefaults = {};

class Swiper extends  SwiperClass{
    constructor(...args) {
        let el;
        let params;
        if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
            params = args[0];
        } else {
            [el, params] = args;
        }
        if (!params) params = {};

        params = Utils.extend({}, params);
        if (el && !params.el) params.el = el;

        super(params);

        Object.keys(prototypes).forEach((prototypeGroup) => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
                if (!Swiper.prototype[protoMethod]) {
                    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
                }
            });
        });

        // Swiper Instance
        const swiper = this;
        if (typeof swiper.modules === 'undefined') {
            swiper.modules = {};
        }
        Object.keys(swiper.modules).forEach((moduleName) => {
            const module = swiper.modules[moduleName];
            if (module.params) {
                const moduleParamName = Object.keys(module.params)[0];
                const moduleParams = module.params[moduleParamName];
                if (typeof moduleParams !== 'object' || moduleParams === null) return;
                if (!(moduleParamName in params && 'enabled' in moduleParams)) return;
                if (params[moduleParamName] === true) {
                    params[moduleParamName] = { enabled: true };
                }
                if (
                    typeof params[moduleParamName] === 'object'
                    && !('enabled' in params[moduleParamName])
                ) {
                    params[moduleParamName].enabled = true;
                }
                if (!params[moduleParamName]) params[moduleParamName] = { enabled: false };
            }
        });

        // Extend defaults with modules params
        const swiperParams = Utils.extend({}, defaults);
        swiper.useModulesParams(swiperParams);

        // Extend defaults with passed params
        swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = Utils.extend({}, swiper.params);
        swiper.passedParams = Utils.extend({}, params);

        // Save Dom lib
        swiper.$ = $;

        // Find el
        const $el = $(swiper.params.el);
        el = $el[0];

        if (!el) {
            return undefined;
        }

        if ($el.length > 1) {
            const swipers = [];
            $el.each((index, containerEl) => {
                const newParams = Utils.extend({}, params, { el: containerEl });
                swipers.push(new Swiper(newParams));
            });
            return swipers;
        }

        el.swiper = swiper;
        $el.data('swiper', swiper);

        // Find Wrapper
        const $wrapperEl = $el.children(`.${swiper.params.wrapperClass}`);

        // Extend Swiper
        Utils.extend(swiper, {
            $el,
            el,
            $wrapperEl,
            wrapperEl: $wrapperEl[0],

            // Classes
            classNames: [],

            // Slides
            slides: $(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],

            // isDirection
            isHorizontal() {
                return swiper.params.direction === 'horizontal';
            },
            isVertical() {
                return swiper.params.direction === 'vertical';
            },
            // RTL
            rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
            rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
            wrongRTL: $wrapperEl.css('display') === '-webkit-box',

            // Indexes
            activeIndex: 0,
            realIndex: 0,

            //
            isBeginning: true,
            isEnd: false,

            // Props
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,

            // Locks
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,

            // Touch Events
            touchEvents: (function touchEvents() {
                const touch = ['touchstart', 'touchmove', 'touchend'];
                let desktop = ['mousedown', 'mousemove', 'mouseup'];
                if (Support.pointerEvents) {
                    desktop = ['pointerdown', 'pointermove', 'pointerup'];
                } else if (Support.prefixedPointerEvents) {
                    desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
                }
                swiper.touchEventsTouch = {
                    start: touch[0],
                    move: touch[1],
                    end: touch[2],
                };
                swiper.touchEventsDesktop = {
                    start: desktop[0],
                    move: desktop[1],
                    end: desktop[2],
                };
                return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
            }()),
            touchEventsData: {
                isTouched: undefined,
                isMoved: undefined,
                allowTouchCallbacks: undefined,
                touchStartTime: undefined,
                isScrolling: undefined,
                currentTranslate: undefined,
                startTranslate: undefined,
                allowThresholdMove: undefined,
                // Form elements to match
                formElements: 'input, select, option, textarea, button, video',
                // Last click time
                lastClickTime: Utils.now(),
                clickTimeout: undefined,
                // Velocities
                velocities: [],
                allowMomentumBounce: undefined,
                isTouchEvent: undefined,
                startMoving: undefined,
            },

            // Clicks
            allowClick: true,

            // Touches
            allowTouchMove: swiper.params.allowTouchMove,

            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
            },

            // Images
            imagesToLoad: [],
            imagesLoaded: 0,

        });

        // Install Modules
        swiper.useModules();

        // Init
        if (swiper.params.init) {
            swiper.init();
        }

        // Return app instance
        return swiper;
    }
    init() {
        const swiper = this;
        if (swiper.initialized) return;

       /* swiper.emit('beforeInit');*/

        // Set breakpoint
       /* if (swiper.params.breakpoints) {
            swiper.setBreakpoint();
        }*/

        // Add Classes
       /* swiper.addClasses();*/

        // Create loop
       /* if (swiper.params.loop) {
            swiper.loopCreate();
        }*/

        // Update size
       /* swiper.updateSize();*/

        // Update slides
       /* swiper.updateSlides();*/

        if (swiper.params.watchOverflow) {
            swiper.checkOverflow();
        }

        // Set Grab Cursor
       /* if (swiper.params.grabCursor) {
            swiper.setGrabCursor();
        }*/

       /* if (swiper.params.preloadImages) {
            swiper.preloadImages();
        }*/

        // Slide To Initial Slide
       /* if (swiper.params.loop) {
            swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
        } else {
            swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
        }*/

        // Attach events
        swiper.attachEvents();

        // Init Flag
        swiper.initialized = true;

        // Emit
       /* swiper.emit('init');*/
    }

}

export default Swiper;



