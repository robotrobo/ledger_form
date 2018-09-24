let name = "";
let pass = "";
let lab_user, lab_pass, user_in, pass_in;

function setup() {
  lab1 = createElement("label", "Enter name:");
  lab1.position(0, 85)
  user_in = createInput("", "text");
  user_in.id("username");
  user_in.attribute("type", "text", );
  user_in.class("form-control");

  lab2 = createElement("label", "Enter pass:");
  pass_in = createInput("", "password");
  pass_in.id("pass");
  pass_in.attribute("type", "password");
  pass_in.class("form-control");




}