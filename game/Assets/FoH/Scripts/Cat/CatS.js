#pragma strict

var endPoint = Vector3(458.524 , 96.842, 380.964);



//bridge medium
var bridgeS1 : GameObject; 
var bridgeS2 : GameObject; 
var bridgeS3 : GameObject; 
var rendererS1 : Renderer;
var rendererS2 : Renderer;
var rendererS3 : Renderer;

var duration : float = 40;

private var startPoint : Vector3;
private var startTime : float;

function Start () {

 startPoint = transform.position;
 startTime = Time.time;

 //for collision detection
 bridgeS1  = GameObject.Find("Bridg S1/Cube");
 rendererS1 = bridgeS1.GetComponent("Renderer");

 bridgeS2  = GameObject.Find("Bridg S2/Cube");
 rendererS2 = bridgeS2.GetComponent("Renderer");

 bridgeS3  = GameObject.Find("Bridg S3/Cube");
 rendererS3 = bridgeS3.GetComponent("Renderer");


}

function Update () {
 if(Input.GetButtonDown("Fire1")) {
 	transform.position = Vector3(501.146 , 92.4837 , 411.926);
 	startTime = Time.time;
 }
 else{
	transform.position = Vector3.Lerp(startPoint, endPoint, (Time.time - startTime) / duration);
	}


}

function OnGUI () {
    GUI.Label (Rect (90, 50, 100, 20), "Hello World!");
}




function OnTriggerEnter(col: Collider)
{
	if(col.gameObject.name == "Plane S")
	{
		
	    rendererS1.enabled = true;

		Debug.Log("hi plane S");
	}
	if(col.gameObject.name == "Plane S1")
	{
	 rendererS2.enabled = true;
		Debug.Log("hi plane S1");
	}
	if(col.gameObject.name == "Plane S2")
	{
	 rendererS3.enabled = true;
		Debug.Log("hi plane S2");
	}


}
