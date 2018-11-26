'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/ringaile/Documents/etherworkspace/kickstart/pages/campaigns/new.js?entry';


var CampaignNew = function (_Component) {
	(0, _inherits3.default)(CampaignNew, _Component);

	function CampaignNew() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, CampaignNew);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			minimumContribution: ''
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(CampaignNew, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(_layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 12
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			}, ' Create a Campaign'), _react2.default.createElement(_semanticUiReact.Form, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 14
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 15
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 16
				}
			}, 'Minimum contribution'), _react2.default.createElement(_semanticUiReact.Input, { label: 'wei',
				labelPosition: 'right',
				value: this.state.minimumContribution,
				onChange: function onChange(event) {
					return _this2.setState({ minimumContribution: event.target.value });
				}, __source: {
					fileName: _jsxFileName,
					lineNumber: 17
				}
			})), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 22
				}
			}, 'Create!')));
		}
	}]);

	return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJMYXlvdXQiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInNldFN0YXRlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFRLEFBQU0sQUFBUTs7QUFDdEIsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUdiOzs7Ozs7Ozs7Ozs7OztvTkFDTCxBO3dCQUNzQixBLEFBRGQ7QUFBQSxBQUNQOzs7OzsyQkFFUTtnQkFDUjs7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNBO0FBREE7QUFBQSxJQUFBLGtCQUNBLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREEsQUFDQSxBQUNBLHVDQUFBLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQTtBQURBO0FBQUEsc0JBQ0MsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0E7QUFEQTtBQUFBLHNCQUNBLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREEsQUFDQSxBQUNBLHlDQUFBLEFBQUMsd0NBQU0sT0FBUCxBQUFhLEFBQ2I7bUJBREEsQUFDYyxBQUNkO1dBQU8sS0FBQSxBQUFLLE1BRlosQUFFa0IsQUFDbEI7Y0FBVSx5QkFBQTtZQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMscUJBQXFCLE1BQUEsQUFBTSxPQUFuRCxBQUFTLEFBQWMsQUFBbUM7QUFIcEU7ZUFBQTtpQkFIQSxBQUNBLEFBRUEsQUFLQTtBQUxBO3dCQUtBLEFBQUMseUNBQU8sU0FBUjtlQUFBO2lCQUFBO0FBQUE7TUFYRCxBQUNDLEFBRUEsQUFRQSxBQUtEOzs7OztBQXJCd0IsQSxBQXdCMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yaW5nYWlsZS9Eb2N1bWVudHMvZXRoZXJ3b3Jrc3BhY2Uva2lja3N0YXJ0In0=