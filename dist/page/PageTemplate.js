"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPageTemplate = exports.usePageTemplate = void 0;
function usePageTemplate(templateName) {
    if (!templateName) {
        return defaultTemplate;
    }
    var template = templates[templateName];
    return template;
}
exports.usePageTemplate = usePageTemplate;
function setPageTemplate(templateName, template) {
    if (!templateName) {
        Object.assign(defaultTemplate, template);
    }
    else {
        templates[templateName] = template;
    }
}
exports.setPageTemplate = setPageTemplate;
var defaultTemplate = {};
var templates = {};
//# sourceMappingURL=PageTemplate.js.map