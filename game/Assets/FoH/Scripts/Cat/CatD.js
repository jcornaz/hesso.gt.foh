#pragma strict

var endPoint = Vector3(459.295, 81.462, 377.38); 

var duration : float = 40;

private var startPoint : Vector3;
private var startTime : float;

function Start () {
 
 startPoint = transform.position;
    startTime = Time.time;
}

function Update () {
 if(Input.GetButtonDown("Fire1")) {
 	transform.position = Vector3(506.02,82.6933, 412.94);
 	startTime = Time.time;
 }
 else{
	transform.position = Vector3.Lerp(startPoint, endPoint, (Time.time - startTime) / duration);
	}
}


function OnCollisionEnter (col : Collision)
{
	if(col.gameObject.name == "Plane D")
	{
		Debug.Log("hi plane D");
	}
	if(col.gameObject.name == "Plane D1")
	{
		Debug.Log("hi plane D1");
	}
	if(col.gameObject.name == "Plane D2")
	{
		Debug.Log("hi plane D2");
	}
	if(col.gameObject.name == "Plane D3")
	{
		Debug.Log("hi plane D3");
	}

}