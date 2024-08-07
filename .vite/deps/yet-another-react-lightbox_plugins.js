import {
  Thumbnails
} from "./chunk-WQZALF3I.js";
import {
  ACTION_CLOSE,
  ACTIVE_SLIDE_COMPLETE,
  ACTIVE_SLIDE_ERROR,
  ACTIVE_SLIDE_LOADING,
  ACTIVE_SLIDE_PLAYING,
  CLASS_FLEX_CENTER,
  CLASS_FULLSIZE,
  CLASS_SLIDE_WRAPPER,
  CLASS_SLIDE_WRAPPER_INTERACTIVE,
  EVENT_ON_KEY_DOWN,
  EVENT_ON_WHEEL,
  IconButton,
  ImageSlide,
  LightboxRoot,
  MODULE_CONTROLLER,
  MODULE_NO_SCROLL,
  MODULE_PORTAL,
  PLUGIN_CAPTIONS,
  PLUGIN_COUNTER,
  PLUGIN_DOWNLOAD,
  PLUGIN_FULLSCREEN,
  PLUGIN_INLINE,
  PLUGIN_SLIDESHOW,
  PLUGIN_THUMBNAILS,
  PLUGIN_ZOOM,
  SLIDE_STATUS_COMPLETE,
  SLIDE_STATUS_ERROR,
  SLIDE_STATUS_LOADING,
  SLIDE_STATUS_PLAYING,
  UNKNOWN_ACTION_TYPE,
  addToolbarButton,
  cleanup,
  clsx,
  createIcon,
  createIconDisabled,
  createModule,
  cssClass,
  cssVar,
  devicePixelRatio,
  isImageFitCover,
  isImageSlide,
  makeUseContext,
  round,
  useContainerRect,
  useController,
  useDocumentContext,
  useEventCallback,
  useEvents,
  useLayoutEffect,
  useLightboxProps,
  useLightboxState,
  useLoseFocus,
  useMotionPreference,
  usePointerEvents,
  useTimeouts
} from "./chunk-FUPMRAXL.js";
import "./chunk-4ASWBRZ3.js";
import {
  require_react
} from "./chunk-O6O4HUXW.js";
import {
  __toESM
} from "./chunk-LQ2VYIYD.js";

// node_modules/yet-another-react-lightbox/dist/plugins/captions/index.js
var React = __toESM(require_react(), 1);
var cssPrefix = (className) => cssClass(`slide_${className}`);
var defaultCaptionsProps = {
  descriptionTextAlign: "start",
  descriptionMaxLines: 3,
  showToggle: false,
  hidden: false
};
var resolveCaptionsProps = (captions) => ({
  ...defaultCaptionsProps,
  ...captions
});
function useCaptionsProps() {
  const { captions } = useLightboxProps();
  return resolveCaptionsProps(captions);
}
var CaptionsContext = React.createContext(null);
var useCaptions = makeUseContext("useCaptions", "CaptionsContext", CaptionsContext);
function CaptionsContextProvider({ captions, children }) {
  const { ref, hidden } = resolveCaptionsProps(captions);
  const [visible, setVisible] = React.useState(!hidden);
  const context = React.useMemo(() => ({
    visible,
    show: () => setVisible(true),
    hide: () => setVisible(false)
  }), [visible]);
  React.useImperativeHandle(ref, () => context, [context]);
  return React.createElement(CaptionsContext.Provider, { value: context }, children);
}
function Title({ title }) {
  const { toolbarWidth } = useController();
  const { styles } = useLightboxProps();
  const { visible } = useCaptions();
  if (!visible)
    return null;
  return React.createElement(
    "div",
    { style: styles.captionsTitleContainer, className: clsx(cssPrefix("captions_container"), cssPrefix("title_container")) },
    React.createElement("div", { className: cssPrefix("title"), style: {
      ...toolbarWidth ? { [cssVar("toolbar_width")]: `${toolbarWidth}px` } : null,
      ...styles.captionsTitle
    } }, title)
  );
}
function Description({ description }) {
  const { descriptionTextAlign, descriptionMaxLines } = useCaptionsProps();
  const { styles } = useLightboxProps();
  const { visible } = useCaptions();
  if (!visible)
    return null;
  return React.createElement(
    "div",
    { style: styles.captionsDescriptionContainer, className: clsx(cssPrefix("captions_container"), cssPrefix("description_container")) },
    React.createElement("div", { className: cssPrefix("description"), style: {
      ...descriptionTextAlign !== defaultCaptionsProps.descriptionTextAlign || descriptionMaxLines !== defaultCaptionsProps.descriptionMaxLines ? {
        [cssVar("slide_description_text_align")]: descriptionTextAlign,
        [cssVar("slide_description_max_lines")]: descriptionMaxLines
      } : null,
      ...styles.captionsDescription
    } }, typeof description === "string" ? description.split("\n").flatMap((line, index) => [...index > 0 ? [React.createElement("br", { key: index })] : [], line]) : description)
  );
}
var captionsIcon = () => React.createElement(
  React.Fragment,
  null,
  React.createElement("path", { strokeWidth: 2, stroke: "currentColor", strokeLinejoin: "round", fill: "none", d: "M3 5l18 0l0 14l-18 0l0-14z" }),
  React.createElement("path", { d: "M7 15h3c.55 0 1-.45 1-1v-1H9.5v.5h-2v-3h2v.5H11v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm7 0h3c.55 0 1-.45 1-1v-1h-1.5v.5h-2v-3h2v.5H18v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1z" })
);
var CaptionsVisible = createIcon("CaptionsVisible", captionsIcon());
var CaptionsHidden = createIconDisabled("CaptionsVisible", captionsIcon());
function CaptionsButton() {
  const { visible, show, hide } = useCaptions();
  const { render } = useLightboxProps();
  if (render.buttonCaptions) {
    return React.createElement(React.Fragment, null, render.buttonCaptions({ visible, show, hide }));
  }
  return React.createElement(IconButton, { label: visible ? "Hide captions" : "Show captions", icon: visible ? CaptionsVisible : CaptionsHidden, renderIcon: visible ? render.iconCaptionsVisible : render.iconCaptionsHidden, onClick: visible ? hide : show });
}
function Captions({ augment, addModule }) {
  augment(({ captions: captionsProps, render: { slideFooter: renderFooter, ...restRender }, toolbar, ...restProps }) => {
    const captions = resolveCaptionsProps(captionsProps);
    return {
      render: {
        slideFooter: ({ slide }) => React.createElement(
          React.Fragment,
          null,
          renderFooter === null || renderFooter === void 0 ? void 0 : renderFooter({ slide }),
          slide.title && React.createElement(Title, { title: slide.title }),
          slide.description && React.createElement(Description, { description: slide.description })
        ),
        ...restRender
      },
      toolbar: addToolbarButton(toolbar, PLUGIN_CAPTIONS, captions.showToggle ? React.createElement(CaptionsButton, null) : null),
      captions,
      ...restProps
    };
  });
  addModule(createModule(PLUGIN_CAPTIONS, CaptionsContextProvider));
}

// node_modules/yet-another-react-lightbox/dist/plugins/counter/index.js
var React2 = __toESM(require_react(), 1);
var defaultCounterProps = {
  separator: "/",
  container: {}
};
var resolveCounterProps = (counter) => ({
  ...defaultCounterProps,
  ...counter
});
function CounterComponent({ counter }) {
  const { slides, currentIndex } = useLightboxState();
  const { separator, container: { className, ...rest }, className: legacyClassName, ...legacyRest } = resolveCounterProps(counter);
  if (slides.length === 0)
    return null;
  return React2.createElement(
    "div",
    { className: clsx(cssClass("counter"), className || legacyClassName), ...legacyRest, ...rest },
    currentIndex + 1,
    " ",
    separator,
    " ",
    slides.length
  );
}
function Counter({ augment, addChild }) {
  augment(({ counter, ...restProps }) => ({
    counter: resolveCounterProps(counter),
    ...restProps
  }));
  addChild(MODULE_CONTROLLER, createModule(PLUGIN_COUNTER, CounterComponent));
}

// node_modules/yet-another-react-lightbox/dist/plugins/download/index.js
var React3 = __toESM(require_react(), 1);
var defaultDownloadProps = {
  download: void 0
};
var resolveDownloadProps = (download2) => ({
  ...defaultDownloadProps,
  ...download2
});
function download(url, name) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.onload = () => {
    saveAs(xhr.response, name);
  };
  xhr.onerror = () => {
    console.error("Failed to download file");
  };
  xhr.send();
}
function corsEnabled(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("HEAD", url, false);
  try {
    xhr.send();
  } catch (e) {
  }
  return xhr.status >= 200 && xhr.status <= 299;
}
function click(link) {
  try {
    link.dispatchEvent(new MouseEvent("click"));
  } catch (e) {
    const event = document.createEvent("MouseEvents");
    event.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
    link.dispatchEvent(event);
  }
}
function saveAs(source, name) {
  const link = document.createElement("a");
  link.rel = "noopener";
  link.download = name || "";
  if (!link.download) {
    link.target = "_blank";
  }
  if (typeof source === "string") {
    link.href = source;
    if (link.origin !== window.location.origin) {
      if (corsEnabled(link.href)) {
        download(source, name);
      } else {
        link.target = "_blank";
        click(link);
      }
    } else {
      click(link);
    }
  } else {
    link.href = URL.createObjectURL(source);
    setTimeout(() => URL.revokeObjectURL(link.href), 3e4);
    setTimeout(() => click(link), 0);
  }
}
var DownloadIcon = createIcon("DownloadIcon", React3.createElement("path", { d: "M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z" }));
function DownloadButton() {
  const { render, on, download: downloadProps } = useLightboxProps();
  const { download: customDownload } = resolveDownloadProps(downloadProps);
  const { currentSlide, currentIndex } = useLightboxState();
  if (render.buttonDownload) {
    return React3.createElement(React3.Fragment, null, render.buttonDownload());
  }
  const downloadUrl = currentSlide && (currentSlide.downloadUrl || typeof currentSlide.download === "string" && currentSlide.download || typeof currentSlide.download === "object" && currentSlide.download.url || isImageSlide(currentSlide) && currentSlide.src) || void 0;
  const canDownload = customDownload ? (currentSlide === null || currentSlide === void 0 ? void 0 : currentSlide.download) !== false : Boolean(downloadUrl);
  const defaultDownload = () => {
    if (currentSlide && downloadUrl) {
      const downloadFilename = currentSlide.downloadFilename || typeof currentSlide.download === "object" && currentSlide.download.filename || void 0;
      saveAs(downloadUrl, downloadFilename);
    }
  };
  const handleDownload = () => {
    var _a;
    if (currentSlide) {
      (customDownload || defaultDownload)({ slide: currentSlide, saveAs });
      (_a = on.download) === null || _a === void 0 ? void 0 : _a.call(on, { index: currentIndex });
    }
  };
  return React3.createElement(IconButton, { label: "Download", icon: DownloadIcon, renderIcon: render.iconDownload, disabled: !canDownload, onClick: handleDownload });
}
function Download({ augment }) {
  augment(({ toolbar, download: download2, ...restProps }) => ({
    toolbar: addToolbarButton(toolbar, PLUGIN_DOWNLOAD, React3.createElement(DownloadButton, null)),
    download: resolveDownloadProps(download2),
    ...restProps
  }));
}

// node_modules/yet-another-react-lightbox/dist/plugins/fullscreen/index.js
var React4 = __toESM(require_react(), 1);
var defaultFullscreenProps = {
  auto: false,
  ref: null
};
var resolveFullscreenProps = (fullscreen) => ({
  ...defaultFullscreenProps,
  ...fullscreen
});
var FullscreenContext = React4.createContext(null);
var useFullscreen = makeUseContext("useFullscreen", "FullscreenContext", FullscreenContext);
function FullscreenContextProvider({ fullscreen: fullscreenProps, on, children }) {
  const { auto, ref } = resolveFullscreenProps(fullscreenProps);
  const containerRef = React4.useRef(null);
  const [disabled, setDisabled] = React4.useState();
  const [fullscreen, setFullscreen] = React4.useState(false);
  const wasFullscreen = React4.useRef(false);
  const { getOwnerDocument } = useDocumentContext();
  useLayoutEffect(() => {
    var _a, _b, _c, _d;
    const ownerDocument = getOwnerDocument();
    setDisabled(!((_d = (_c = (_b = (_a = ownerDocument.fullscreenEnabled) !== null && _a !== void 0 ? _a : ownerDocument.webkitFullscreenEnabled) !== null && _b !== void 0 ? _b : ownerDocument.mozFullScreenEnabled) !== null && _c !== void 0 ? _c : ownerDocument.msFullscreenEnabled) !== null && _d !== void 0 ? _d : false));
  }, [getOwnerDocument]);
  const getFullscreenElement = React4.useCallback(() => {
    var _a;
    const ownerDocument = getOwnerDocument();
    const fullscreenElement = ownerDocument.fullscreenElement || ownerDocument.webkitFullscreenElement || ownerDocument.mozFullScreenElement || ownerDocument.msFullscreenElement;
    return ((_a = fullscreenElement === null || fullscreenElement === void 0 ? void 0 : fullscreenElement.shadowRoot) === null || _a === void 0 ? void 0 : _a.fullscreenElement) || fullscreenElement;
  }, [getOwnerDocument]);
  const enter = React4.useCallback(() => {
    const container = containerRef.current;
    try {
      if (container.requestFullscreen) {
        container.requestFullscreen().catch(() => {
        });
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      } else if (container.mozRequestFullScreen) {
        container.mozRequestFullScreen();
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
      }
    } catch (err) {
    }
  }, []);
  const exit = React4.useCallback(() => {
    if (!getFullscreenElement())
      return;
    const ownerDocument = getOwnerDocument();
    try {
      if (ownerDocument.exitFullscreen) {
        ownerDocument.exitFullscreen().catch(() => {
        });
      } else if (ownerDocument.webkitExitFullscreen) {
        ownerDocument.webkitExitFullscreen();
      } else if (ownerDocument.mozCancelFullScreen) {
        ownerDocument.mozCancelFullScreen();
      } else if (ownerDocument.msExitFullscreen) {
        ownerDocument.msExitFullscreen();
      }
    } catch (err) {
    }
  }, [getFullscreenElement, getOwnerDocument]);
  React4.useEffect(() => {
    const ownerDocument = getOwnerDocument();
    const listener = () => {
      setFullscreen(getFullscreenElement() === containerRef.current);
    };
    return cleanup(...["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"].map((event) => {
      ownerDocument.addEventListener(event, listener);
      return () => ownerDocument.removeEventListener(event, listener);
    }));
  }, [getFullscreenElement, getOwnerDocument]);
  const onEnterFullscreen = useEventCallback(() => {
    var _a;
    return (_a = on.enterFullscreen) === null || _a === void 0 ? void 0 : _a.call(on);
  });
  const onExitFullscreen = useEventCallback(() => {
    var _a;
    return (_a = on.exitFullscreen) === null || _a === void 0 ? void 0 : _a.call(on);
  });
  React4.useEffect(() => {
    if (fullscreen) {
      wasFullscreen.current = true;
    }
    if (wasFullscreen.current) {
      (fullscreen ? onEnterFullscreen : onExitFullscreen)();
    }
  }, [fullscreen, onEnterFullscreen, onExitFullscreen]);
  const handleAutoFullscreen = useEventCallback(() => {
    var _a;
    (_a = auto ? enter : null) === null || _a === void 0 ? void 0 : _a();
    return exit;
  });
  React4.useEffect(handleAutoFullscreen, [handleAutoFullscreen]);
  const context = React4.useMemo(() => ({ fullscreen, disabled, enter, exit }), [fullscreen, disabled, enter, exit]);
  React4.useImperativeHandle(ref, () => context, [context]);
  return React4.createElement(
    "div",
    { ref: containerRef, className: clsx(cssClass(PLUGIN_FULLSCREEN), cssClass(CLASS_FULLSIZE)) },
    React4.createElement(FullscreenContext.Provider, { value: context }, children)
  );
}
var EnterFullscreenIcon = createIcon("EnterFullscreen", React4.createElement("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" }));
var ExitFullscreenIcon = createIcon("ExitFullscreen", React4.createElement("path", { d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" }));
function FullscreenButton() {
  var _a;
  const { fullscreen, disabled, enter, exit } = useFullscreen();
  const { render } = useLightboxProps();
  if (disabled)
    return null;
  if (render.buttonFullscreen) {
    return React4.createElement(React4.Fragment, null, (_a = render.buttonFullscreen) === null || _a === void 0 ? void 0 : _a.call(render, { fullscreen, disabled, enter, exit }));
  }
  return React4.createElement(IconButton, { disabled, label: fullscreen ? "Exit Fullscreen" : "Enter Fullscreen", icon: fullscreen ? ExitFullscreenIcon : EnterFullscreenIcon, renderIcon: fullscreen ? render.iconExitFullscreen : render.iconEnterFullscreen, onClick: fullscreen ? exit : enter });
}
function Fullscreen({ augment, contains, addParent }) {
  augment(({ fullscreen, toolbar, ...restProps }) => ({
    toolbar: addToolbarButton(toolbar, PLUGIN_FULLSCREEN, React4.createElement(FullscreenButton, null)),
    fullscreen: resolveFullscreenProps(fullscreen),
    ...restProps
  }));
  addParent(contains(PLUGIN_THUMBNAILS) ? PLUGIN_THUMBNAILS : MODULE_CONTROLLER, createModule(PLUGIN_FULLSCREEN, FullscreenContextProvider));
}

// node_modules/yet-another-react-lightbox/dist/plugins/inline/index.js
var React5 = __toESM(require_react(), 1);
function InlineContainer({ inline: { className, style, ...rest } = {}, styles, children }) {
  return React5.createElement(LightboxRoot, { className: clsx(cssClass("relative"), className), style: { [cssVar("controller_overscroll_behavior")]: "contain auto", ...styles.root, ...style }, ...rest }, children);
}
function Inline({ augment, replace, remove }) {
  augment(({ toolbar: { buttons, ...restToolbar }, open, close, controller: { focus, aria, touchAction, ...restController }, className, ...restProps }) => ({
    open: true,
    close: () => {
    },
    toolbar: {
      buttons: buttons.filter((button) => button !== ACTION_CLOSE),
      ...restToolbar
    },
    inline: { style: { width: "100%", height: "100%" }, className },
    controller: { focus: false, aria: true, touchAction: "pan-y", ...restController },
    className,
    ...restProps
  }));
  remove(MODULE_NO_SCROLL);
  replace(MODULE_PORTAL, createModule(PLUGIN_INLINE, InlineContainer));
}

// node_modules/yet-another-react-lightbox/dist/plugins/share/index.js
var React6 = __toESM(require_react(), 1);
var defaultShareProps = {
  share: void 0
};
var resolveShareProps = (share) => ({
  ...defaultShareProps,
  ...share
});
function isShareSupported() {
  return typeof navigator !== "undefined" && Boolean(navigator.canShare);
}
var ShareIcon = createIcon("ShareIcon", React6.createElement("path", { d: "m16 5-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z" }));
function ShareButton() {
  const { render, on, share: shareProps } = useLightboxProps();
  const { share: customShare } = resolveShareProps(shareProps);
  const { currentSlide, currentIndex } = useLightboxState();
  if (!isShareSupported())
    return null;
  if (render.buttonShare) {
    return React6.createElement(React6.Fragment, null, render.buttonShare());
  }
  const share = currentSlide && (typeof currentSlide.share === "object" && currentSlide.share || typeof currentSlide.share === "string" && { url: currentSlide.share } || isImageSlide(currentSlide) && { url: currentSlide.src }) || void 0;
  const canShare = customShare ? (currentSlide === null || currentSlide === void 0 ? void 0 : currentSlide.share) !== false : share && navigator.canShare(share);
  const defaultShare = () => {
    if (share) {
      navigator.share(share).catch(() => {
      });
    }
  };
  const handleShare = () => {
    var _a;
    if (currentSlide) {
      (customShare || defaultShare)({ slide: currentSlide });
      (_a = on.share) === null || _a === void 0 ? void 0 : _a.call(on, { index: currentIndex });
    }
  };
  return React6.createElement(IconButton, { label: "Share", icon: ShareIcon, renderIcon: render.iconShare, disabled: !canShare, onClick: handleShare });
}
function Share({ augment }) {
  augment(({ toolbar, share, ...rest }) => ({
    toolbar: addToolbarButton(toolbar, "share", React6.createElement(ShareButton, null)),
    share: resolveShareProps(share),
    ...rest
  }));
}

// node_modules/yet-another-react-lightbox/dist/plugins/slideshow/index.js
var React7 = __toESM(require_react(), 1);
var defaultSlideshowProps = {
  autoplay: false,
  delay: 3e3,
  ref: null
};
var resolveSlideshowProps = (slideshow) => ({
  ...defaultSlideshowProps,
  ...slideshow
});
var SlideshowContext = React7.createContext(null);
var useSlideshow = makeUseContext("useSlideshow", "SlideshowContext", SlideshowContext);
function SlideshowContextProvider({ slideshow, carousel: { finite }, on, children }) {
  const { autoplay, delay, ref } = resolveSlideshowProps(slideshow);
  const wasPlaying = React7.useRef(autoplay);
  const [playing, setPlaying] = React7.useState(autoplay);
  const scheduler = React7.useRef();
  const slideStatus = React7.useRef();
  const { slides, currentIndex } = useLightboxState();
  const { setTimeout: setTimeout2, clearTimeout } = useTimeouts();
  const { subscribe } = useEvents();
  const { next } = useController();
  const disabled = slides.length === 0 || finite && currentIndex === slides.length - 1;
  const play = React7.useCallback(() => {
    if (!playing && !disabled) {
      setPlaying(true);
    }
  }, [playing, disabled]);
  const pause = React7.useCallback(() => {
    if (playing) {
      setPlaying(false);
    }
  }, [playing]);
  const cancelScheduler = React7.useCallback(() => {
    clearTimeout(scheduler.current);
    scheduler.current = void 0;
  }, [clearTimeout]);
  const scheduleNextSlide = useEventCallback(() => {
    cancelScheduler();
    if (!playing || disabled || slideStatus.current === SLIDE_STATUS_LOADING || slideStatus.current === SLIDE_STATUS_PLAYING) {
      return;
    }
    scheduler.current = setTimeout2(() => {
      if (playing) {
        slideStatus.current = void 0;
        next();
      }
    }, delay);
  });
  React7.useEffect(scheduleNextSlide, [currentIndex, playing, scheduleNextSlide]);
  React7.useEffect(() => {
    if (playing && disabled) {
      setPlaying(false);
    }
  }, [currentIndex, playing, disabled]);
  const onSlideshowStart = useEventCallback(() => {
    var _a;
    return (_a = on.slideshowStart) === null || _a === void 0 ? void 0 : _a.call(on);
  });
  const onSlideshowStop = useEventCallback(() => {
    var _a;
    return (_a = on.slideshowStop) === null || _a === void 0 ? void 0 : _a.call(on);
  });
  React7.useEffect(() => {
    if (playing) {
      onSlideshowStart();
    } else if (wasPlaying.current) {
      onSlideshowStop();
    }
    wasPlaying.current = playing;
  }, [playing, onSlideshowStart, onSlideshowStop]);
  React7.useEffect(() => cleanup(cancelScheduler, subscribe(ACTIVE_SLIDE_LOADING, () => {
    slideStatus.current = SLIDE_STATUS_LOADING;
    cancelScheduler();
  }), subscribe(ACTIVE_SLIDE_PLAYING, () => {
    slideStatus.current = SLIDE_STATUS_PLAYING;
    cancelScheduler();
  }), subscribe(ACTIVE_SLIDE_ERROR, () => {
    slideStatus.current = SLIDE_STATUS_ERROR;
    scheduleNextSlide();
  }), subscribe(ACTIVE_SLIDE_COMPLETE, () => {
    slideStatus.current = SLIDE_STATUS_COMPLETE;
    scheduleNextSlide();
  })), [subscribe, cancelScheduler, scheduleNextSlide]);
  const context = React7.useMemo(() => ({ playing, disabled, play, pause }), [playing, disabled, play, pause]);
  React7.useImperativeHandle(ref, () => context, [context]);
  return React7.createElement(SlideshowContext.Provider, { value: context }, children);
}
var PlayIcon = createIcon("Play", React7.createElement("path", { d: "M8 5v14l11-7z" }));
var PauseIcon = createIcon("Pause", React7.createElement("path", { d: "M6 19h4V5H6v14zm8-14v14h4V5h-4z" }));
function SlideshowButton() {
  const { playing, disabled, play, pause } = useSlideshow();
  const { render } = useLightboxProps();
  const focusListeners = useLoseFocus(useController().focus, disabled);
  if (render.buttonSlideshow) {
    return React7.createElement(React7.Fragment, null, render.buttonSlideshow({ playing, disabled, play, pause }));
  }
  return React7.createElement(IconButton, { label: playing ? "Pause" : "Play", icon: playing ? PauseIcon : PlayIcon, renderIcon: playing ? render.iconSlideshowPause : render.iconSlideshowPlay, onClick: playing ? pause : play, disabled, ...focusListeners });
}
function Slideshow({ augment, addModule }) {
  augment(({ slideshow, toolbar, ...restProps }) => ({
    toolbar: addToolbarButton(toolbar, PLUGIN_SLIDESHOW, React7.createElement(SlideshowButton, null)),
    slideshow: resolveSlideshowProps(slideshow),
    ...restProps
  }));
  addModule(createModule(PLUGIN_SLIDESHOW, SlideshowContextProvider));
}

// node_modules/yet-another-react-lightbox/dist/plugins/video/index.js
var React8 = __toESM(require_react(), 1);
var defaultVideoProps = {
  controls: true,
  playsInline: true
};
var resolveVideoProps = (video) => ({
  ...defaultVideoProps,
  ...video
});
function useVideoProps() {
  const { video } = useLightboxProps();
  return resolveVideoProps(video);
}
function VideoSlide({ slide, offset }) {
  const video = useVideoProps();
  const { publish } = useEvents();
  const { setContainerRef, containerRect } = useContainerRect();
  const videoRef = React8.useRef(null);
  React8.useEffect(() => {
    if (offset !== 0 && videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
  }, [offset]);
  React8.useEffect(() => {
    if (offset === 0 && videoRef.current && (slide.autoPlay || video.autoPlay)) {
      publish(ACTIVE_SLIDE_LOADING);
      videoRef.current.play().catch(() => {
      });
    }
  }, [offset, video.autoPlay, slide.autoPlay, publish]);
  const handleVideoRef = useEventCallback((node) => {
    if (offset === 0 && (video.autoPlay || slide.autoPlay) && node.paused) {
      node.play().catch(() => {
      });
    }
  });
  const setVideoRef = React8.useCallback((node) => {
    videoRef.current = node;
    if (node) {
      handleVideoRef(node);
    }
  }, [handleVideoRef]);
  const { width, height, poster, sources } = slide;
  const scaleWidthAndHeight = () => {
    const scalingProps = {};
    scalingProps.style = { maxWidth: "100%", maxHeight: "100%" };
    if (width && height && containerRect) {
      const widthBound = width / height > containerRect.width / containerRect.height;
      const elementWidth = widthBound ? containerRect.width : Math.round(containerRect.height / height * width);
      const elementHeight = !widthBound ? containerRect.height : Math.round(containerRect.width / width * height);
      scalingProps.width = elementWidth;
      scalingProps.height = elementHeight;
      scalingProps.style.width = elementWidth;
      scalingProps.style.height = elementHeight;
    }
    return scalingProps;
  };
  const resolveBoolean = (attr) => {
    if (slide[attr] === false)
      return null;
    if (slide[attr] === true)
      return { [attr]: true };
    if (video[attr] === false)
      return null;
    if (video[attr] === true)
      return { [attr]: true };
    return null;
  };
  const resolveString = (attr) => {
    if (video[attr] || slide[attr]) {
      return { [attr]: slide[attr] || video[attr] };
    }
    return null;
  };
  return React8.createElement(React8.Fragment, null, sources && React8.createElement("div", { ref: setContainerRef, style: {
    width: "100%",
    height: "100%",
    ...width ? { maxWidth: `${width}px` } : null
  }, className: clsx(cssClass("video_container"), cssClass(CLASS_FLEX_CENTER), cssClass(CLASS_SLIDE_WRAPPER)) }, containerRect && React8.createElement("video", { ref: setVideoRef, poster, ...scaleWidthAndHeight(), ...resolveBoolean("controls"), ...resolveBoolean("playsInline"), ...resolveBoolean("loop"), ...resolveBoolean("muted"), ...resolveBoolean("playsInline"), ...resolveBoolean("disablePictureInPicture"), ...resolveBoolean("disableRemotePlayback"), ...resolveString("controlsList"), ...resolveString("crossOrigin"), ...resolveString("preload"), onPlay: () => {
    publish(ACTIVE_SLIDE_PLAYING);
  }, onEnded: () => {
    publish(ACTIVE_SLIDE_COMPLETE);
  } }, sources.map(({ src, type, media }) => React8.createElement("source", { key: [src, type, media].filter(Boolean).join("|"), src, type, media })))));
}
function isVideoSlide(slide) {
  return slide.type === "video";
}
function Video({ augment }) {
  augment(({ render: { slide: renderSlide, ...restRender }, video, ...restProps }) => ({
    render: {
      slide: ({ slide, offset, rect }) => {
        var _a;
        return isVideoSlide(slide) ? React8.createElement(VideoSlide, { key: (_a = slide.sources) === null || _a === void 0 ? void 0 : _a.map((source) => source.src).join("|"), slide, offset }) : renderSlide === null || renderSlide === void 0 ? void 0 : renderSlide({ slide, offset, rect });
      },
      ...restRender
    },
    video: resolveVideoProps(video),
    ...restProps
  }));
}

// node_modules/yet-another-react-lightbox/dist/plugins/zoom/index.js
var React9 = __toESM(require_react(), 1);
var defaultZoomProps = {
  maxZoomPixelRatio: 1,
  zoomInMultiplier: 2,
  doubleTapDelay: 300,
  doubleClickDelay: 500,
  doubleClickMaxStops: 2,
  keyboardMoveDistance: 50,
  wheelZoomDistanceFactor: 100,
  pinchZoomDistanceFactor: 100,
  scrollToZoom: false
};
var resolveZoomProps = (zoom) => ({
  ...defaultZoomProps,
  ...zoom
});
function useZoomAnimation(zoom, offsetX, offsetY, zoomWrapperRef) {
  const zoomAnimation = React9.useRef();
  const zoomAnimationStart = React9.useRef();
  const { zoom: zoomAnimationDuration } = useLightboxProps().animation;
  const reduceMotion = useMotionPreference();
  const playZoomAnimation = useEventCallback(() => {
    var _a, _b, _c;
    (_a = zoomAnimation.current) === null || _a === void 0 ? void 0 : _a.cancel();
    zoomAnimation.current = void 0;
    if (zoomAnimationStart.current && (zoomWrapperRef === null || zoomWrapperRef === void 0 ? void 0 : zoomWrapperRef.current)) {
      try {
        zoomAnimation.current = (_c = (_b = zoomWrapperRef.current).animate) === null || _c === void 0 ? void 0 : _c.call(_b, [
          { transform: zoomAnimationStart.current },
          { transform: `scale(${zoom}) translateX(${offsetX}px) translateY(${offsetY}px)` }
        ], {
          duration: !reduceMotion ? zoomAnimationDuration !== null && zoomAnimationDuration !== void 0 ? zoomAnimationDuration : 500 : 0,
          easing: zoomAnimation.current ? "ease-out" : "ease-in-out"
        });
      } catch (err) {
        console.error(err);
      }
      zoomAnimationStart.current = void 0;
      if (zoomAnimation.current) {
        zoomAnimation.current.onfinish = () => {
          zoomAnimation.current = void 0;
        };
      }
    }
  });
  useLayoutEffect(playZoomAnimation, [zoom, offsetX, offsetY, playZoomAnimation]);
  return React9.useCallback(() => {
    zoomAnimationStart.current = (zoomWrapperRef === null || zoomWrapperRef === void 0 ? void 0 : zoomWrapperRef.current) ? window.getComputedStyle(zoomWrapperRef.current).transform : void 0;
  }, [zoomWrapperRef]);
}
function useZoomCallback(zoom, disabled) {
  const { on } = useLightboxProps();
  const onZoomCallback = useEventCallback(() => {
    var _a;
    if (!disabled) {
      (_a = on.zoom) === null || _a === void 0 ? void 0 : _a.call(on, { zoom });
    }
  });
  React9.useEffect(onZoomCallback, [zoom, onZoomCallback]);
}
function useZoomProps() {
  const { zoom } = useLightboxProps();
  return resolveZoomProps(zoom);
}
function useZoomImageRect(slideRect, imageDimensions) {
  var _a, _b;
  let imageRect = { width: 0, height: 0 };
  let maxImageRect = { width: 0, height: 0 };
  const { currentSlide } = useLightboxState();
  const { imageFit } = useLightboxProps().carousel;
  const { maxZoomPixelRatio } = useZoomProps();
  if (slideRect && currentSlide) {
    const slide = { ...currentSlide, ...imageDimensions };
    if (isImageSlide(slide)) {
      const cover = isImageFitCover(slide, imageFit);
      const width = Math.max(...(((_a = slide.srcSet) === null || _a === void 0 ? void 0 : _a.map((x) => x.width)) || []).concat(slide.width ? [slide.width] : []));
      const height = Math.max(...(((_b = slide.srcSet) === null || _b === void 0 ? void 0 : _b.map((x) => x.height)) || []).concat(slide.height ? [slide.height] : []));
      if (width > 0 && height > 0 && slideRect.width > 0 && slideRect.height > 0) {
        maxImageRect = cover ? {
          width: Math.round(Math.min(width, slideRect.width / slideRect.height * height)),
          height: Math.round(Math.min(height, slideRect.height / slideRect.width * width))
        } : { width, height };
        maxImageRect = {
          width: maxImageRect.width * maxZoomPixelRatio,
          height: maxImageRect.height * maxZoomPixelRatio
        };
        imageRect = cover ? {
          width: Math.min(slideRect.width, maxImageRect.width, width),
          height: Math.min(slideRect.height, maxImageRect.height, height)
        } : {
          width: Math.round(Math.min(slideRect.width, slideRect.height / height * width, width)),
          height: Math.round(Math.min(slideRect.height, slideRect.width / width * height, height))
        };
      }
    }
  }
  const maxZoom = imageRect.width ? Math.max(round(maxImageRect.width / imageRect.width, 5), 1) : 1;
  return { imageRect, maxZoom };
}
function distance(pointerA, pointerB) {
  return ((pointerA.clientX - pointerB.clientX) ** 2 + (pointerA.clientY - pointerB.clientY) ** 2) ** 0.5;
}
function useZoomSensors(zoom, maxZoom, disabled, changeZoom, changeOffsets, zoomWrapperRef) {
  const activePointers = React9.useRef([]);
  const lastPointerDown = React9.useRef(0);
  const pinchZoomDistance = React9.useRef();
  const { globalIndex } = useLightboxState();
  const { getOwnerWindow } = useDocumentContext();
  const { containerRef, subscribeSensors } = useController();
  const { keyboardMoveDistance, zoomInMultiplier, wheelZoomDistanceFactor, scrollToZoom, doubleTapDelay, doubleClickDelay, doubleClickMaxStops, pinchZoomDistanceFactor } = useZoomProps();
  const translateCoordinates = React9.useCallback((event) => {
    if (containerRef.current) {
      const { pageX, pageY } = event;
      const { scrollX, scrollY } = getOwnerWindow();
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      return [pageX - left - scrollX - width / 2, pageY - top - scrollY - height / 2];
    }
    return [];
  }, [containerRef, getOwnerWindow]);
  const onKeyDown = useEventCallback((event) => {
    const preventDefault = () => {
      event.preventDefault();
      event.stopPropagation();
    };
    if (zoom > 1) {
      const move = (deltaX, deltaY) => {
        preventDefault();
        changeOffsets(deltaX, deltaY);
      };
      if (event.key === "ArrowDown") {
        move(0, keyboardMoveDistance);
      } else if (event.key === "ArrowUp") {
        move(0, -keyboardMoveDistance);
      } else if (event.key === "ArrowLeft") {
        move(-keyboardMoveDistance, 0);
      } else if (event.key === "ArrowRight") {
        move(keyboardMoveDistance, 0);
      }
    }
    const handleChangeZoom = (zoomValue) => {
      preventDefault();
      changeZoom(zoomValue);
    };
    const hasMeta = () => event.getModifierState("Meta");
    if (event.key === "+" || event.key === "=" && hasMeta()) {
      handleChangeZoom(zoom * zoomInMultiplier);
    } else if (event.key === "-" || event.key === "_" && hasMeta()) {
      handleChangeZoom(zoom / zoomInMultiplier);
    } else if (event.key === "0" && hasMeta()) {
      handleChangeZoom(1);
    }
  });
  const onWheel = useEventCallback((event) => {
    if (event.ctrlKey || scrollToZoom) {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.stopPropagation();
        changeZoom(zoom * (1 - event.deltaY / wheelZoomDistanceFactor), true, ...translateCoordinates(event));
        return;
      }
    }
    if (zoom > 1) {
      event.stopPropagation();
      if (!scrollToZoom) {
        changeOffsets(event.deltaX, event.deltaY);
      }
    }
  });
  const clearPointer = React9.useCallback((event) => {
    const pointers = activePointers.current;
    pointers.splice(0, pointers.length, ...pointers.filter((p) => p.pointerId !== event.pointerId));
  }, []);
  const replacePointer = React9.useCallback((event) => {
    clearPointer(event);
    event.persist();
    activePointers.current.push(event);
  }, [clearPointer]);
  const onPointerDown = useEventCallback((event) => {
    var _a;
    const pointers = activePointers.current;
    if (!((_a = zoomWrapperRef === null || zoomWrapperRef === void 0 ? void 0 : zoomWrapperRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
      return;
    }
    if (zoom > 1) {
      event.stopPropagation();
    }
    const { timeStamp } = event;
    if (pointers.length === 0 && timeStamp - lastPointerDown.current < (event.pointerType === "touch" ? doubleTapDelay : doubleClickDelay)) {
      lastPointerDown.current = 0;
      changeZoom(zoom !== maxZoom ? zoom * Math.max(maxZoom ** (1 / doubleClickMaxStops), zoomInMultiplier) : 1, false, ...translateCoordinates(event));
    } else {
      lastPointerDown.current = timeStamp;
    }
    replacePointer(event);
    if (pointers.length === 2) {
      pinchZoomDistance.current = distance(pointers[0], pointers[1]);
    }
  });
  const onPointerMove = useEventCallback((event) => {
    const pointers = activePointers.current;
    const activePointer = pointers.find((p) => p.pointerId === event.pointerId);
    if (pointers.length === 2 && pinchZoomDistance.current) {
      event.stopPropagation();
      replacePointer(event);
      const currentDistance = distance(pointers[0], pointers[1]);
      const delta = currentDistance - pinchZoomDistance.current;
      if (Math.abs(delta) > 0) {
        changeZoom(zoom * (1 + delta / pinchZoomDistanceFactor), true, ...pointers.map((x) => translateCoordinates(x)).reduce((acc, coordinate) => coordinate.map((x, i) => acc[i] + x / 2)));
        pinchZoomDistance.current = currentDistance;
      }
      return;
    }
    if (zoom > 1) {
      event.stopPropagation();
      if (activePointer) {
        if (pointers.length === 1) {
          changeOffsets((activePointer.clientX - event.clientX) / zoom, (activePointer.clientY - event.clientY) / zoom);
        }
        replacePointer(event);
      }
    }
  });
  const onPointerUp = React9.useCallback((event) => {
    const pointers = activePointers.current;
    if (pointers.length === 2 && pointers.find((p) => p.pointerId === event.pointerId)) {
      pinchZoomDistance.current = void 0;
    }
    clearPointer(event);
  }, [clearPointer]);
  const cleanupSensors = React9.useCallback(() => {
    const pointers = activePointers.current;
    pointers.splice(0, pointers.length);
    lastPointerDown.current = 0;
    pinchZoomDistance.current = void 0;
  }, []);
  usePointerEvents(subscribeSensors, onPointerDown, onPointerMove, onPointerUp, disabled);
  React9.useEffect(cleanupSensors, [globalIndex, cleanupSensors]);
  React9.useEffect(() => {
    if (!disabled) {
      return cleanup(cleanupSensors, subscribeSensors(EVENT_ON_KEY_DOWN, onKeyDown), subscribeSensors(EVENT_ON_WHEEL, onWheel));
    }
    return () => {
    };
  }, [disabled, subscribeSensors, cleanupSensors, onKeyDown, onWheel]);
}
function useZoomState(imageRect, maxZoom, zoomWrapperRef) {
  const [zoom, setZoom] = React9.useState(1);
  const [offsetX, setOffsetX] = React9.useState(0);
  const [offsetY, setOffsetY] = React9.useState(0);
  const animate = useZoomAnimation(zoom, offsetX, offsetY, zoomWrapperRef);
  const { currentSlide, globalIndex } = useLightboxState();
  const { containerRect, slideRect } = useController();
  const { zoomInMultiplier } = useZoomProps();
  const currentSource = currentSlide && isImageSlide(currentSlide) ? currentSlide.src : void 0;
  const disabled = !currentSource || !(zoomWrapperRef === null || zoomWrapperRef === void 0 ? void 0 : zoomWrapperRef.current);
  useLayoutEffect(() => {
    setZoom(1);
    setOffsetX(0);
    setOffsetY(0);
  }, [globalIndex, currentSource]);
  const changeOffsets = React9.useCallback((dx, dy, targetZoom) => {
    const newZoom = targetZoom || zoom;
    const newOffsetX = offsetX - (dx || 0);
    const newOffsetY = offsetY - (dy || 0);
    const maxOffsetX = (imageRect.width * newZoom - slideRect.width) / 2 / newZoom;
    const maxOffsetY = (imageRect.height * newZoom - slideRect.height) / 2 / newZoom;
    setOffsetX(Math.min(Math.abs(newOffsetX), Math.max(maxOffsetX, 0)) * Math.sign(newOffsetX));
    setOffsetY(Math.min(Math.abs(newOffsetY), Math.max(maxOffsetY, 0)) * Math.sign(newOffsetY));
  }, [zoom, offsetX, offsetY, slideRect, imageRect.width, imageRect.height]);
  const changeZoom = React9.useCallback((targetZoom, rapid, dx, dy) => {
    const newZoom = round(Math.min(Math.max(targetZoom + 1e-3 < maxZoom ? targetZoom : maxZoom, 1), maxZoom), 5);
    if (newZoom === zoom)
      return;
    if (!rapid) {
      animate();
    }
    changeOffsets(dx ? dx * (1 / zoom - 1 / newZoom) : 0, dy ? dy * (1 / zoom - 1 / newZoom) : 0, newZoom);
    setZoom(newZoom);
  }, [zoom, maxZoom, changeOffsets, animate]);
  const handleControllerRectChange = useEventCallback(() => {
    if (zoom > 1) {
      if (zoom > maxZoom) {
        changeZoom(maxZoom, true);
      }
      changeOffsets();
    }
  });
  useLayoutEffect(handleControllerRectChange, [containerRect.width, containerRect.height, handleControllerRectChange]);
  const zoomIn = React9.useCallback(() => changeZoom(zoom * zoomInMultiplier), [zoom, zoomInMultiplier, changeZoom]);
  const zoomOut = React9.useCallback(() => changeZoom(zoom / zoomInMultiplier), [zoom, zoomInMultiplier, changeZoom]);
  return { zoom, offsetX, offsetY, disabled, changeOffsets, changeZoom, zoomIn, zoomOut };
}
var ZoomControllerContext = React9.createContext(null);
var useZoom = makeUseContext("useZoom", "ZoomControllerContext", ZoomControllerContext);
function ZoomContextProvider({ children }) {
  const [zoomWrapper, setZoomWrapper] = React9.useState();
  const { slideRect } = useController();
  const { imageRect, maxZoom } = useZoomImageRect(slideRect, zoomWrapper === null || zoomWrapper === void 0 ? void 0 : zoomWrapper.imageDimensions);
  const { zoom, offsetX, offsetY, disabled, changeZoom, changeOffsets, zoomIn, zoomOut } = useZoomState(imageRect, maxZoom, zoomWrapper === null || zoomWrapper === void 0 ? void 0 : zoomWrapper.zoomWrapperRef);
  useZoomCallback(zoom, disabled);
  useZoomSensors(zoom, maxZoom, disabled, changeZoom, changeOffsets, zoomWrapper === null || zoomWrapper === void 0 ? void 0 : zoomWrapper.zoomWrapperRef);
  const zoomRef = React9.useMemo(() => ({ zoom, maxZoom, offsetX, offsetY, disabled, zoomIn, zoomOut, changeZoom }), [zoom, maxZoom, offsetX, offsetY, disabled, zoomIn, zoomOut, changeZoom]);
  React9.useImperativeHandle(useZoomProps().ref, () => zoomRef, [zoomRef]);
  const context = React9.useMemo(() => ({ ...zoomRef, setZoomWrapper }), [zoomRef, setZoomWrapper]);
  return React9.createElement(ZoomControllerContext.Provider, { value: context }, children);
}
var ZoomInIcon = createIcon("ZoomIn", React9.createElement(
  React9.Fragment,
  null,
  React9.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
  React9.createElement("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })
));
var ZoomOutIcon = createIcon("ZoomOut", React9.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" }));
var ZoomButton = React9.forwardRef(function ZoomButton2({ zoomIn, onLoseFocus }, ref) {
  const wasEnabled = React9.useRef(false);
  const wasFocused = React9.useRef(false);
  const { zoom, maxZoom, zoomIn: zoomInCallback, zoomOut: zoomOutCallback, disabled: zoomDisabled } = useZoom();
  const { render } = useLightboxProps();
  const disabled = zoomDisabled || (zoomIn ? zoom >= maxZoom : zoom <= 1);
  React9.useEffect(() => {
    if (disabled && wasEnabled.current && wasFocused.current) {
      onLoseFocus();
    }
    if (!disabled) {
      wasEnabled.current = true;
    }
  }, [disabled, onLoseFocus]);
  return React9.createElement(IconButton, { ref, disabled, label: zoomIn ? "Zoom in" : "Zoom out", icon: zoomIn ? ZoomInIcon : ZoomOutIcon, renderIcon: zoomIn ? render.iconZoomIn : render.iconZoomOut, onClick: zoomIn ? zoomInCallback : zoomOutCallback, onFocus: () => {
    wasFocused.current = true;
  }, onBlur: () => {
    wasFocused.current = false;
  } });
});
function ZoomButtonsGroup() {
  const zoomInRef = React9.useRef(null);
  const zoomOutRef = React9.useRef(null);
  const { focus } = useController();
  const focusSibling = React9.useCallback((sibling) => {
    var _a, _b;
    if (!((_a = sibling.current) === null || _a === void 0 ? void 0 : _a.disabled)) {
      (_b = sibling.current) === null || _b === void 0 ? void 0 : _b.focus();
    } else {
      focus();
    }
  }, [focus]);
  const focusZoomIn = React9.useCallback(() => focusSibling(zoomInRef), [focusSibling]);
  const focusZoomOut = React9.useCallback(() => focusSibling(zoomOutRef), [focusSibling]);
  return React9.createElement(
    React9.Fragment,
    null,
    React9.createElement(ZoomButton, { zoomIn: true, ref: zoomInRef, onLoseFocus: focusZoomOut }),
    React9.createElement(ZoomButton, { ref: zoomOutRef, onLoseFocus: focusZoomIn })
  );
}
function ZoomToolbarControl() {
  const { render } = useLightboxProps();
  const zoomRef = useZoom();
  if (render.buttonZoom) {
    return React9.createElement(React9.Fragment, null, render.buttonZoom(zoomRef));
  }
  return React9.createElement(ZoomButtonsGroup, null);
}
function isResponsiveImageSlide(slide) {
  var _a;
  return (((_a = slide.srcSet) === null || _a === void 0 ? void 0 : _a.length) || 0) > 0;
}
function reducer({ current, preload }, { type, source }) {
  switch (type) {
    case "fetch":
      if (!current) {
        return { current: source };
      }
      return { current, preload: source };
    case "done":
      if (source === preload) {
        return { current: source };
      }
      return { current, preload };
    default:
      throw new Error(UNKNOWN_ACTION_TYPE);
  }
}
function ResponsiveImage(props) {
  var _a, _b;
  const [{ current, preload }, dispatch] = React9.useReducer(reducer, {});
  const { slide: image, rect, imageFit, render, interactive } = props;
  const srcSet = image.srcSet.sort((a, b) => a.width - b.width);
  const width = (_a = image.width) !== null && _a !== void 0 ? _a : srcSet[srcSet.length - 1].width;
  const height = (_b = image.height) !== null && _b !== void 0 ? _b : srcSet[srcSet.length - 1].height;
  const cover = isImageFitCover(image, imageFit);
  const maxWidth = Math.max(...srcSet.map((x) => x.width));
  const targetWidth = Math.min((cover ? Math.max : Math.min)(rect.width, width * (rect.height / height)), maxWidth);
  const pixelDensity = devicePixelRatio();
  const handleResize = useEventCallback(() => {
    var _a2;
    const targetSource = (_a2 = srcSet.find((x) => x.width >= targetWidth * pixelDensity)) !== null && _a2 !== void 0 ? _a2 : srcSet[srcSet.length - 1];
    if (!current || srcSet.findIndex((x) => x.src === current) < srcSet.findIndex((x) => x === targetSource)) {
      dispatch({ type: "fetch", source: targetSource.src });
    }
  });
  useLayoutEffect(handleResize, [rect.width, rect.height, pixelDensity, handleResize]);
  const handlePreload = useEventCallback((currentPreload) => dispatch({ type: "done", source: currentPreload }));
  const style = {
    WebkitTransform: !interactive ? "translateZ(0)" : "initial"
  };
  if (!cover) {
    Object.assign(style, rect.width / rect.height < width / height ? { width: "100%", height: "auto" } : { width: "auto", height: "100%" });
  }
  return React9.createElement(
    React9.Fragment,
    null,
    preload && preload !== current && React9.createElement(ImageSlide, { key: "preload", ...props, slide: { ...image, src: preload, srcSet: void 0 }, style: { position: "absolute", visibility: "hidden", ...style }, onLoad: () => handlePreload(preload), render: {
      ...render,
      iconLoading: () => null,
      iconError: () => null
    } }),
    current && React9.createElement(ImageSlide, { key: "current", ...props, slide: { ...image, src: current, srcSet: void 0 }, style })
  );
}
function ZoomWrapper({ render, slide, offset, rect }) {
  var _a;
  const [imageDimensions, setImageDimensions] = React9.useState();
  const zoomWrapperRef = React9.useRef(null);
  const { zoom, maxZoom, offsetX, offsetY, setZoomWrapper } = useZoom();
  const interactive = zoom > 1;
  const { carousel, on } = useLightboxProps();
  const { currentIndex } = useLightboxState();
  useLayoutEffect(() => {
    if (offset === 0) {
      setZoomWrapper({ zoomWrapperRef, imageDimensions });
      return () => setZoomWrapper(void 0);
    }
    return () => {
    };
  }, [offset, imageDimensions, setZoomWrapper]);
  let rendered = (_a = render.slide) === null || _a === void 0 ? void 0 : _a.call(render, { slide, offset, rect, zoom, maxZoom });
  if (!rendered && isImageSlide(slide)) {
    const slideProps = {
      slide,
      offset,
      rect,
      render,
      imageFit: carousel.imageFit,
      imageProps: carousel.imageProps,
      onClick: offset === 0 ? () => {
        var _a2;
        return (_a2 = on.click) === null || _a2 === void 0 ? void 0 : _a2.call(on, { index: currentIndex });
      } : void 0
    };
    rendered = isResponsiveImageSlide(slide) ? React9.createElement(ResponsiveImage, { ...slideProps, slide, interactive, rect: offset === 0 ? { width: rect.width * zoom, height: rect.height * zoom } : rect }) : React9.createElement(ImageSlide, { onLoad: (img) => setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight }), ...slideProps });
  }
  if (!rendered)
    return null;
  return React9.createElement("div", { ref: zoomWrapperRef, className: clsx(cssClass(CLASS_FULLSIZE), cssClass(CLASS_FLEX_CENTER), cssClass(CLASS_SLIDE_WRAPPER), interactive && cssClass(CLASS_SLIDE_WRAPPER_INTERACTIVE)), style: offset === 0 ? { transform: `scale(${zoom}) translateX(${offsetX}px) translateY(${offsetY}px)` } : void 0 }, rendered);
}
var Zoom = ({ augment, addModule }) => {
  augment(({ zoom: zoomProps, toolbar, render, controller, ...restProps }) => {
    const zoom = resolveZoomProps(zoomProps);
    return {
      zoom,
      toolbar: addToolbarButton(toolbar, PLUGIN_ZOOM, React9.createElement(ZoomToolbarControl, null)),
      render: {
        ...render,
        slide: (props) => {
          var _a;
          return isImageSlide(props.slide) ? React9.createElement(ZoomWrapper, { render, ...props }) : (_a = render.slide) === null || _a === void 0 ? void 0 : _a.call(render, props);
        }
      },
      controller: { ...controller, preventDefaultWheelY: zoom.scrollToZoom },
      ...restProps
    };
  });
  addModule(createModule(PLUGIN_ZOOM, ZoomContextProvider));
};
export {
  Captions,
  Counter,
  Download,
  Fullscreen,
  Inline,
  Share,
  Slideshow,
  Thumbnails,
  Video,
  Zoom
};
//# sourceMappingURL=yet-another-react-lightbox_plugins.js.map
