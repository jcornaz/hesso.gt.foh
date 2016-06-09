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
		var audio1: AudioSource = GetComponent.<AudioSource>();
		audio1.Play();
		transform.position = Vector3(522.386 ,93.53, 426.851);

	}
	if(col.gameObject.name == "Plane Scream2"){
		var audio2: AudioSource = GetComponent.<AudioSource>();
		audio2.Play();
		transform.position = Vector3(522.386 ,93.53, 426.851);

	}
	if(col.gameObject.name == "Plane Scream3"){
		var audio3: AudioSource = GetComponent.<AudioSource>();
		audio3.Play();
		//transform.position = Vector3(522.386 ,93.53, 426.851);

	}

}
