function shuffle(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
function buildData(total) {
	var data = [];
	for (var i = 0; i < total; i++) {
		data[i] = {num: i};
	}
	return shuffle(data);
}