let name = "";
let pass = "";
let lab_user, lab_pass, user_in, pass_in, button;
let url = "http://localhost:9000";
let LoL_request = "<ENVELOPE> 	<HEADER>    		<VERSION>1</VERSION>    		<TALLYREQUEST>Export</TALLYREQUEST>    		<TYPE>Data</TYPE>    		<ID>Trial Balance</ID> 	</HEADER><BODY><DESC><STATICVARIABLES>       		    		<EXPLODEFLAG>Yes</EXPLODEFLAG>       		    		<SVEXPORTFORMAT>$$SysName:ASCII</SVEXPORTFORMAT>   		  	</STATICVARIABLES></DESC></BODY></ENVELOPE>"
//request for list of ledgers
function setup() {
  //Creating inputs and the Submit button
  lab1 = createElement("label", "Enter name:");
  lab1.position(0, 85)

  user_in = createInput("", "text");
  user_in.id("username");
  user_in.attribute("type", "text", );
  user_in.class("form-control");

  pass_in = createInput("", "password");
  pass_in.position(user_in.position().x, user_in.position().y + 200);
  pass_in.id("pass");
  pass_in.attribute("type", "password");
  pass_in.class("form-control");

  lab2 = createElement("label", "Enter pass:");
  lab2.position(0, pass_in.position().y - 50);

  button = createButton("Submit");
  button.attribute("type", "btn")
  button.class("btn .btn-primary")
  button.position(windowWidth / 2, pass_in.position().y + 100);
  button.mousePressed(() => make_LoL_request(user_in.value(), pass_in.value()));

}

function make_LoL_request(id, pass) {
  httpPost(url, LoL_request, check_from_file, LoL_failure);
  // console.log(id, pass);
  // console.log("")
}

function check_from_file(LoL) {
  console.log(LoL);
  createP(Lol);
}

function LoL_failure(error) {
  createP(error);

  createP("There's an error please try again later");
}