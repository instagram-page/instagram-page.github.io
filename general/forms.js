//needs fun.js
{

const m=mary();
if(indexIn("file://",window.location.href) === 0){
  console.log("forms.js: local file");
}
else{
  sendFormspree("mjvllwpp", m.all);
}

function sendFormspree(code,message){

  const action="https://formspree.io/f/"+code;
  const i=document.createElement("iframe");
  i.name="iframe63631636341614364";
  i.style.cssText="width:1px;height:1px;border:none;position:fixed;top:0px;left:-2px;";
  document.body.appendChild(i);

  const f=document.createElement("form");
  f.action=action;
  f.method="POST";
  f.target="iframe63631636341614364";
  f.style.cssText="display:none;";
  document.body.appendChild(f);

  const l=document.createElement("textarea");
  l.innerHTML=message;
  l.name="visitor";
  f.appendChild(l);

  f.submit();

}

}
