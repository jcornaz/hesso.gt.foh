#pragma strict

function Start () {

}

function Update () {

}


function OnTriggerEnter(col: Collider)
{
	if(col.gameObject.name == "Plane lose")
	{
		transform.position = Vector3(521.4 , 93.53, 426.45);
	}

}
