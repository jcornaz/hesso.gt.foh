﻿#pragma strict


var isWin : boolean = false;
var style : GUIStyle =  new GUIStyle();


function Start () {
style.normal.textColor = Color.red;
}

function Update () {

}

function OnTriggerEnter(col: Collider)
{
	if(col.gameObject.name == "Plane M3")
	{
		isWin= true;
		transform.position = Vector3(522.386 , 93.53, 426.851);
	}
	if(col.gameObject.name == "Plane F4")
	{
		isWin= true;
		transform.position = Vector3(522.386 , 93.53, 426.851);
		var wf = PlayerPrefs.GetInt("WF");
		PlayerPrefs.SetInt("WF", wf + 1 );
	}
	if(col.gameObject.name == "Plane D5")
	{
		isWin= true;
		transform.position = Vector3(522.386 , 93.53, 426.851);
	}
}

function OnGUI () {
	if(isWin){
    GUI.Label (Rect (90, 50, 150, 150), "You Win!" , style);
    }
}