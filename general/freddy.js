//needs fun.js, fwtovash.js

const docT = getTime();
const m=mary();
var dura = 0;
var actions = "";

var isenabled = false;

if(indexIn("file://",window.location.href) === 0){
  console.log("freddy: local file");
}
else{
	isenabled = true;
  initSession();
}

function initSession(){
	db.collection("devicelog").doc(docT).set({
		mary: m.all,
    duration: 1,
    time: docT,
    actions: ""
	}).then(() => {
        setInterval(dur,2000);
    }).catch((error) => {console.error("Error logging hentry: ", error);});
}

function dur(docN="newDoc"){
  if(document.hidden === true) return;
	dura+=2;
	db.collection("devicelog").doc(docT).update({
		duration: dura
	});
}

function freddy_action(action = "undefinedAction"){
	if(!isenabled){console.log("freddy not enabled: freddy_action");return;}
  actions += action+",,";
	db.collection("devicelog").doc(docT).update({
		actions: actions
	});
}
