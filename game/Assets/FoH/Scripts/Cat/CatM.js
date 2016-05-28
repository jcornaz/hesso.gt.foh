#pragma strict

var endPoint = Vector3(463.714,64.0326, 373.875);

var isWalk : boolean = true;
var wait : float;


var drawM1 :boolean = false;
var drawM2 :boolean = false;
var drawM3 :boolean = false;


//bridge medium
var bridgeM1 : GameObject; 
var bridgeM2 : GameObject; 
var bridgeM3 : GameObject; 
var rendererM1 : Renderer;
var rendererM2 : Renderer;
var rendererM3 : Renderer;

var duration : float = 40;

private var startPoint : Vector3;
private var startTime : float;

function Start () {


  //wait = Time.time + 10;

 startPoint = transform.position;
 startTime = Time.time;

 //for collision detection
 bridgeM1  = GameObject.Find("Bridg M1/Cube");
 rendererM1 = bridgeM1.GetComponent("Renderer");

 bridgeM2  = GameObject.Find("Bridg M2/Cube");
 rendererM2 = bridgeM2.GetComponent("Renderer");

 bridgeM3  = GameObject.Find("Bridg M3/Cube");
 rendererM3 = bridgeM3.GetComponent("Renderer");


}

function Update () {

if(isWalk){ // if it true the cat will walk. 
	 if(Input.GetButtonDown("Fire1")) {
	 	transform.position = Vector3(463.6601 , 63.8708, 374.0429);
	 	startTime = Time.time;
	 	rendererM1.enabled = false;
	 	rendererM2.enabled = false;
	 	rendererM3.enabled = false;
	 	duration = 40;
	 	startPoint = Vector3(508.474,65.2473 , 408.64);
	 }
	 else{
		transform.position = Vector3.Lerp(startPoint, endPoint, (Time.time - startTime) / duration);
		}
	}
	else
	{ // the cat will stop let the user do something.
	var timeLeft : int = wait - Time.time;

    if (timeLeft < 0){
      timeLeft = 0;
      isWalk = true;
      if(drawM1){
     	 rendererM1.enabled = true;
     	 drawM1 =false;}

      if(drawM2){
      	rendererM2.enabled = true;
     	 drawM2 =false;}

      if(drawM3){
      	rendererM3.enabled = true;
     	 drawM3 =false;}

      startTime = Time.time;
      startPoint = transform.position;
      duration = duration - 5;
     }

	}

}

function OnGUI () {
    GUI.Label (Rect (90, 50, 100, 20), "Hello World!");
}


/*function OnCollisionEnter (col : Collision)
{
	if(col.gameObject.name == "Plane M")
	{
		
	    rendererM1.enabled = true;

		Debug.Log("hi plane M");
	}
	if(col.gameObject.name == "Plane M1")
	{
	 rendererM2.enabled = true;
		Debug.Log("hi plane M1");
	}
	if(col.gameObject.name == "Plane M2")
	{
	 rendererM3.enabled = true;
		Debug.Log("hi plane M2");
	}


}
*/

function OnTriggerEnter(col: Collider)
{
	if(col.gameObject.name == "Plane M")
	{
		isWalk= false;
		wait = Time.time + 5;
	    //rendererM1.enabled = true;
	    drawM1 = true;
		Debug.Log("hi plane M");
	}
	if(col.gameObject.name == "Plane M1")
	{
		isWalk= false;
		wait = Time.time + 5;
		drawM2 = true;
	// rendererM2.enabled = true;
		Debug.Log("hi plane M1");
	}
	if(col.gameObject.name == "Plane M2")
	{
		isWalk= false;
		wait = Time.time + 5;
		drawM3 = true;
		//rendererM3.enabled = true;
		Debug.Log("hi plane M2");
	}


}
