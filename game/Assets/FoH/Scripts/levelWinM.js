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
	}
}

function OnGUI () {
	if(isWin){
    GUI.Label (Rect (90, 50, 150, 150), "You Win!" , style);
    }
}