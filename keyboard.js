var st = false ;
function typew(x) {
	var z=x;
	var y=document.getElementById('txtarea').innerHTML;
	// body...
	if(st == true){
		document.getElementById('txtarea').innerHTML = y + z.toUpperCase();
		st = false ;
		document.getElementById('sh').style.backgroundColor = "#E6E6FA";
	}else{
		document.getElementById('txtarea').innerHTML = y + z;
	}
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
function uc(j){
	if (j == 'kr'){
		if(st == false){
			st = true;
			document.getElementById('sh').style.backgroundColor = "#FF99FF";
		}else{
			st = false;
			document.getElementById('sh').style.backgroundColor = "#E6E6FA";
		}
	}
}