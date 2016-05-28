#pragma strict

var speed = 0.3;



//Help/Scripting Reference/RunTime Classes/Transform
function Update() {
  //if(Input.GetKeyDown("Fire1")==1) {
  if(Input.GetKeyDown("w")==0) {
    transform.Translate(Vector3.forward * speed);
  }
}