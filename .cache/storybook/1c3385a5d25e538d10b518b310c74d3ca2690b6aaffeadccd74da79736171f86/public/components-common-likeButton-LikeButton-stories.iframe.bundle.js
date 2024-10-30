"use strict";
(globalThis["webpackChunkcook_mate"] = globalThis["webpackChunkcook_mate"] || []).push([["components-common-likeButton-LikeButton-stories"],{

/***/ "./src/components/common/likeButton/LikeButton.stories.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/common/likeButton/LikeButton.stories.tsx ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnFilledLikeButton: () => (/* binding */ UnFilledLikeButton),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LikeButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LikeButton */ "./src/components/common/likeButton/LikeButton.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


const meta = {
  title: 'Common/likeButton',
  component: _LikeButton__WEBPACK_IMPORTED_MODULE_0__["default"],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    onLike: {
      action: 'liked'
    },
    onNotLike: {
      action: 'not liked'
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (meta);
const UnFilledLikeButton = {
  args: {
    onLike: () => {},
    onNotLike: () => {}
  }
};
;
const __namedExportsOrder = ["UnFilledLikeButton"];
UnFilledLikeButton.parameters = {
  ...UnFilledLikeButton.parameters,
  docs: {
    ...UnFilledLikeButton.parameters?.docs,
    source: {
      originalSource: "{\n  args: {\n    onLike: () => {},\n    onNotLike: () => {}\n  }\n}",
      ...UnFilledLikeButton.parameters?.docs?.source
    }
  }
};

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/common/likeButton/LikeButton.tsx":
/*!*********************************************************!*\
  !*** ./src/components/common/likeButton/LikeButton.tsx ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_likeButton_HeartIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../icons/likeButton/HeartIcon */ "./src/icons/likeButton/HeartIcon.tsx");
/* harmony import */ var _icons_likeButton_HeartFilledIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../icons/likeButton/HeartFilledIcon */ "./src/icons/likeButton/HeartFilledIcon.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/tserra/Documents/git/cook-mate/src/components/common/likeButton/LikeButton.tsx",
  _s = __webpack_require__.$Refresh$.signature();




const LikeButton = ({
  onLike = () => {},
  onNotLike = () => {}
}) => {
  _s();
  const [liked, setLiked] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const handleClick = () => {
    setLiked(!liked);
    if (liked) {
      onNotLike();
    } else {
      onLike();
    }
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
    onClick: handleClick,
    className: "shadow-[0_0_4px_1px_rgba(0,0,0,0.1),0_0_1px_0_rgba(0,0,0,0.5)] w-[34px] h-[34px] rounded-[50%] bg-white flex items-center justify-center",
    children: liked ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_icons_likeButton_HeartFilledIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 22
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_icons_likeButton_HeartIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 43
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, undefined);
};
_s(LikeButton, "5oFMLl0KA2P+7Df5hTCAaQ+yYE8=");
_c = LikeButton;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikeButton);
;
LikeButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "LikeButton",
  "props": {
    "onLike": {
      "required": false,
      "tsType": {
        "name": "signature",
        "type": "function",
        "raw": "() => void",
        "signature": {
          "arguments": [],
          "return": {
            "name": "void"
          }
        }
      },
      "description": "",
      "defaultValue": {
        "value": "() => {}",
        "computed": false
      }
    },
    "onNotLike": {
      "required": false,
      "tsType": {
        "name": "signature",
        "type": "function",
        "raw": "() => void",
        "signature": {
          "arguments": [],
          "return": {
            "name": "void"
          }
        }
      },
      "description": "",
      "defaultValue": {
        "value": "() => {}",
        "computed": false
      }
    }
  }
};
var _c;
__webpack_require__.$Refresh$.register(_c, "LikeButton");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/icons/likeButton/HeartFilledIcon.tsx":
/*!**************************************************!*\
  !*** ./src/icons/likeButton/HeartFilledIcon.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeartFilledIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/tserra/Documents/git/cook-mate/src/icons/likeButton/HeartFilledIcon.tsx";

function HeartFilledIcon() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    width: "18",
    height: "16",
    viewBox: "0 0 18 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M8.99199 15.5C8.80037 15.5 8.60792 15.4641 8.41466 15.3924C8.2214 15.3205 8.05132 15.2081 7.90444 15.055L6.61915 13.8364C5.03278 12.3276 3.61641 10.8454 2.37004 9.38981C1.12367 7.93422 0.500488 6.37487 0.500488 4.71178C0.500488 3.38731 0.92862 2.27842 1.78488 1.38512C2.6413 0.491981 3.70439 0.0454102 4.97417 0.0454102C5.69563 0.0454102 6.40829 0.218921 7.11215 0.565943C7.81586 0.912966 8.4453 1.47651 9.00049 2.25657C9.55567 1.47651 10.1851 0.912966 10.8888 0.565943C11.5927 0.218921 12.3053 0.0454102 13.0268 0.0454102C14.2966 0.0454102 15.3597 0.491981 16.2161 1.38512C17.0724 2.27842 17.5005 3.38731 17.5005 4.71178C17.5005 6.39292 16.8667 7.9696 15.5992 9.44184C14.3316 10.9141 12.9184 12.3837 11.3595 13.8506L10.0878 15.055C9.94108 15.2081 9.76966 15.3205 9.57357 15.3924C9.37732 15.4641 9.18346 15.5 8.99199 15.5Z",
      fill: "#D00000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}
_c = HeartFilledIcon;
;
HeartFilledIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "HeartFilledIcon"
};
var _c;
__webpack_require__.$Refresh$.register(_c, "HeartFilledIcon");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/icons/likeButton/HeartIcon.tsx":
/*!********************************************!*\
  !*** ./src/icons/likeButton/HeartIcon.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeartIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _jsxFileName = "/Users/tserra/Documents/git/cook-mate/src/icons/likeButton/HeartIcon.tsx";

function HeartIcon() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    width: "18",
    height: "16",
    viewBox: "0 0 18 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M8.99199 15.5C8.80037 15.5 8.60792 15.4641 8.41466 15.3924C8.2214 15.3205 8.05132 15.2081 7.90444 15.055L6.61915 13.8364C5.03278 12.3276 3.61641 10.8454 2.37004 9.38981C1.12367 7.93422 0.500488 6.37487 0.500488 4.71178C0.500488 3.38731 0.92862 2.27842 1.78488 1.38512C2.6413 0.491981 3.70439 0.0454102 4.97417 0.0454102C5.69563 0.0454102 6.40829 0.218921 7.11215 0.565943C7.81586 0.912966 8.4453 1.47651 9.00049 2.25657C9.55567 1.47651 10.1851 0.912966 10.8888 0.565943C11.5927 0.218921 12.3053 0.0454102 13.0268 0.0454102C14.2966 0.0454102 15.3597 0.491981 16.2161 1.38512C17.0724 2.27842 17.5005 3.38731 17.5005 4.71178C17.5005 6.39292 16.8667 7.9696 15.5992 9.44184C14.3316 10.9141 12.9184 12.3837 11.3595 13.8506L10.0878 15.055C9.94108 15.2081 9.76966 15.3205 9.57357 15.3924C9.37732 15.4641 9.18346 15.5 8.99199 15.5ZM8.35695 3.67444C7.8729 2.90512 7.36327 2.34126 6.82807 1.98289C6.29302 1.62451 5.67505 1.44532 4.97417 1.44532C4.07944 1.44532 3.33382 1.75641 2.73733 2.37859C2.14084 3.00078 1.84259 3.7785 1.84259 4.71178C1.84259 5.46073 2.07403 6.24382 2.53691 7.06106C2.99979 7.8783 3.58077 8.69071 4.27986 9.49831C4.97894 10.3061 5.73634 11.0951 6.55204 11.8656C7.36759 12.6361 8.1235 13.3523 8.81975 14.014C8.87135 14.0619 8.93159 14.0858 9.00049 14.0858C9.06938 14.0858 9.12963 14.0619 9.18122 14.014C9.87748 13.3523 10.6334 12.6361 11.4489 11.8656C12.2646 11.0951 13.022 10.3061 13.7211 9.49831C14.4202 8.69071 15.0012 7.8783 15.4641 7.06106C15.9269 6.24382 16.1584 5.46073 16.1584 4.71178C16.1584 3.7785 15.8601 3.00078 15.2636 2.37859C14.6672 1.75641 13.9215 1.44532 13.0268 1.44532C12.3259 1.44532 11.708 1.62451 11.1729 1.98289C10.6377 2.34126 10.1281 2.90512 9.64403 3.67444C9.56827 3.79406 9.47306 3.88381 9.35838 3.94369C9.24371 4.00342 9.12441 4.03329 9.00049 4.03329C8.87657 4.03329 8.75727 4.00342 8.64259 3.94369C8.52792 3.88381 8.4327 3.79406 8.35695 3.67444Z",
      fill: "#222425"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, this);
}
_c = HeartIcon;
;
HeartIcon.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "HeartIcon"
};
var _c;
__webpack_require__.$Refresh$.register(_c, "HeartIcon");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=components-common-likeButton-LikeButton-stories.iframe.bundle.js.map