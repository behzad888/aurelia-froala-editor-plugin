var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import { customElement, bindable, inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

import { ObserverLocator } from "aurelia-binding";
import { I18N } from "aurelia-i18n";

export let FroalaEditor = (_dec = customElement('froala-editor'), _dec2 = inject(Element, ObserverLocator, I18N, EventAggregator), _dec(_class = _dec2(_class = (_class2 = class FroalaEditor {

	constructor(element, observerLocator, i18n, eventAggregator) {
		_initDefineProp(this, 'value', _descriptor, this);

		_initDefineProp(this, 'config', _descriptor2, this);

		_initDefineProp(this, 'eventHandlers', _descriptor3, this);

		this.i18nInitialized = false;

		this.element = element;
		this.subscriptions = [observerLocator.getObserver(this, 'value').subscribe((newValue, oldValue) => {
			if (this.instance && this.instance.froalaEditor('html.get') != newValue) {
				this.instance.froalaEditor('html.set', newValue);
				this.updateEmptyStatus();
			}
		})];
		this.i18n = i18n;
		eventAggregator.subscribe('i18n:locale:changed', payload => {
			this.processLanguageChanged();
		});
	}

	processLanguageChanged() {
		this.tearDownFroala();
		this.setupFroala();
	}

	setupFroala() {
		this.instance = $(this.element.getElementsByTagName("div")[0]);

		if (this.instance.data('froala.editor')) {
			return;
		}
		let c = {};
		c.language = this.i18n.getLocale();
		Object.assign(c, this.config);
		this.instance.froalaEditor(c);
		this.instance.froalaEditor('html.set', this.value);
		if (this.eventHandlers && this.eventHandlers.length != 0) {
			for (let eventHandlerName in this.eventHandlers) {
				let handler = this.eventHandlers[eventHandlerName];
				this.instance.on(`froalaEditor.${eventHandlerName}`, function () {
					let p = arguments;
					return handler.apply(this, p);
				});
			}
		}
		this.instance.on('froalaEditor.contentChanged,froalaEditor.blur', (e, editor) => this.value = editor.html.get());
	}

	updateEmptyStatus() {}

	tearDownFroala() {
		if (this.instance && this.instance.data('froala.editor')) {
			this.instance.froalaEditor('destroy');
		}
		this.instance = null;
	}

	attached() {
		this.setupFroala();
	}

	detached() {
		this.tearDownFroala();
	}
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [bindable], {
	enumerable: true,
	initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'config', [bindable], {
	enumerable: true,
	initializer: function () {
		return {};
	}
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'eventHandlers', [bindable], {
	enumerable: true,
	initializer: function () {
		return {};
	}
})), _class2)) || _class) || _class);

export function configure(aurelia, configCallback) {
	if (typeof configCallback === 'function') {
		configCallback();
	} else {}
}