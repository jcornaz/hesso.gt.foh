#pragma strict

var endPoint = Vector3(465.715,17.4396, 373.167);
var enemy : GameObject; 
var attack = false;

var duration : float = 40;

private var startPoint : Vector3;
private var startTime : float;

function Start () {
 enemy = GameObject.Find("Crow D");
 startPoint = transform.position;
    startTime = Time.time;
}

function Update () {
 if(Input.GetButtonDown("Fire1")) {
 	transform.position = Vector3(518.012, 21.1816, 401.624);
 	startTime = Time.time;
 }
 else{
	transform.position = Vector3.Lerp(startPoint, endPoint, (Time.time - startTime) / duration);
	}

 if(attack){
 	Debug.Log("attack 1" + enemy.transform.position.x);
 }
}

function OnGUI () {
    GUI.Label (Rect (90, 50, 100, 20), "Hello World!");
}


function OnCollisionEnter (col : Collision)
{
	if(col.gameObject.name == "Plane F")
	{
		attack = true;
		Debug.Log("hi plane F");
	}
	if(col.gameObject.name == "Plane F1")
	{
		Debug.Log("hi plane F1");
	}
	if(col.gameObject.name == "Plane F2")
	{
		Debug.Log("hi plane F2");
	}
	if(col.gameObject.name == "Plane F3")
	{
		Debug.Log("hi plane F3");
	}

}
