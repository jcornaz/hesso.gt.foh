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
		var wf = PlayerPrefs.GetInt("L");
		PlayerPrefs.SetInt("L", wf + 1 );

	}
	if(col.gameObject.name == "Plane Scream"){
		var audio: AudioSource = GetComponent.<AudioSource>();
		audio.Play();
	}

}
