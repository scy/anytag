(function() {
	tinymce.create('tinymce.plugins.anyTag', {
		getInfo: function () {
			return {
				longname: 'anyTag plugin',
				author: 'Tim Weber',
				authorurl: 'http://scytale.name/',
				infourl: 'http://github.com/scy/anytag',
				version: '0.0.1'
			}
		},
		init: function (ed, url) {
			var at = ed.getParam('anytag_instance');
			var tags = at.conf.tags;
			for (var k in tags) {
				if (tags.hasOwnProperty(k)) {
					ed.addButton('anytag_' + k, {
						title: k,
						label: k,
						class: 'anytag_button_text',
						cmd: 'anytag_' + k
					});
					var handler = function () {
						ed.execCommand('mceReplaceContent', false,
							'<' + this.tag + '>{$selection}</' + this.tag + '>');
						return true;
					};
					handler.tag = k;
					handler.options = tags[k];
					ed.addCommand('anytag_' + k, handler, handler);
				}
			}
		}
	});
	tinymce.PluginManager.add('anytag', tinymce.plugins.anyTag);
})();
