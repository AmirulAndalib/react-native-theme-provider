"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemeDispatch = exports.useTheme = exports.useStyle = void 0;
const React = __importStar(require("react"));
const ThemeContext_1 = require("./ThemeContext");
function useStyle(styleCreator) {
    const { selectedTheme, themes } = useTheme();
    const theme = themes[selectedTheme];
    return styleCreator(theme);
}
exports.useStyle = useStyle;
function useTheme() {
    const context = React.useContext(ThemeContext_1.ThemeContext);
    if (context === null) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
exports.useTheme = useTheme;
function useThemeDispatch() {
    const context = React.useContext(ThemeContext_1.ThemeDispatchContext);
    if (context === null) {
        throw new Error('useThemeDispatch must be used within a ThemeProvider');
    }
    return context;
}
exports.useThemeDispatch = useThemeDispatch;
//# sourceMappingURL=hooks.js.map