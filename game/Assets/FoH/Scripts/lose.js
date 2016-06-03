#pragma strict

function Start () {

}

function Update () {

}


function OnTriggerEnter(col: Collider)
{
	if(col.gameObject.name == "Plane lose")
	{
		transform.position = Vector3(522.386 ,93.53, 426.851);
	}

}
