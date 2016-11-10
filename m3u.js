/*
 * m3u.js: simple m3u parser, written in Javascript.
 * 
 * usage: m3u.parse(m3u_coutnet)
 *
 */


var m3u = (function () {

	parse = function (m3uRaw) {
		var parsed = [];
		var m3uArr = m3uRaw.split(/\n|\r\n|\r/);
		/* Any better idea? cuz we need to skip line #1. */
		if(m3uArr[0] != '#EXTM3U') throw "Invalid M3U file.";
		for(var i = 1; i <= m3uArr.length; i++) {
			if(!/^#.*/.test(m3uArr[i])) continue;
			this_media = {};
			this_media.name = m3uArr[i].split(",")[1];
			try {
				this_media.url = m3uArr[i+1];
			} catch (e) {
				if(e instanceof TypeError) throw "Corrupted M3U file.";
				else throw e;
			} 
			parsed.push(this_media);
		}
	
		return parsed;
	};

	return { parse: parse };

})();
