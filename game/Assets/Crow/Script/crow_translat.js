#pragma strict

/*var rotation : Quaternion;
 var radius = Vector3(5,0,0);
 var currentRotation = 0.0;




 function Update()
 {
     currentRotation += Input.GetAxis("Horizontal")*Time.deltaTime*100;
     rotation.eulerAngles = Vector3(0, currentRotation, 0);
     transform.position = rotation * radius;
 }
 */
 var speed : float = 20.0;
 private var pivot : Vector3 = new Vector3(479.3, 93.6, 395.1);

 function Start () {

}

 function Update () {
     transform.RotateAround(pivot, Vector3.up, speed * Time.deltaTime);
 }