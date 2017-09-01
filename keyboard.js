function typew(x) {
	var z=x;
	var y=document.getElementById('txtarea').innerHTML;
	// body...
	document.getElementById('txtarea').innerHTML = y+z;
}
function del(){
	var u = document.getElementById('txtarea').innerHTML;
	document.getElementById('txtarea').innerHTML = u.substr(0,(u.length)-1);
}
function Ent(){
	var e = document.getElementById('txtarea').innerHTML;
	document.getElementById('txtarea').innerHTML = e + '\n';
}
function spac(){
	var s = document.getElementById('txtarea').innerHTML;
	document.getElementById('txtarea').innerHTML = s + ' ';
}
function tab(){
	var t = document.getElementById('txtarea').innerHTML;
	document.getElementById('txtarea').innerHTML = t + '	';
}
function cr(){
	document.getElementById('txtarea').innerHTML = "";
}
