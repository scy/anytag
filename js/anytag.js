anyTag = function (conf) {
	this.conf = conf;
	var custom_elements = [];
	var extended_valid_elements = [];
	for(var k in conf.tags) {
		if (conf.tags.hasOwnProperty(k)) {
			var tag = conf.tags[k];
			custom_elements.push((tag.block ? '' : '~') + k);
			var attrs = [];
			if (tag.attr) {
				for (var a in tag.attr) {
					var attrstr =
						(tag.attr[a].required ? '!' : '') +
						a;
					attrs.push(attrstr);
				}
			};
			extended_valid_elements.push(k +
				(attrs.length ? '[' + attrs.join('|') + ']' : '')
			);
		}
	}
	this.custom_elements = function () {
		return custom_elements.join(',');
	};
	this.extended_valid_elements = function () {
		return extended_valid_elements.join(',');
	};
	this.buttons = function () {
		return 'anytag_' + custom_elements.join(',anytag_').replace(/~/g, '');
	};
};
