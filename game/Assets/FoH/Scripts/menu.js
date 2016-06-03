#pragma strict

var showWin:boolean= false;
function Start () {

}

function Update () {

}
function easyClick()
{	
	transform.position = Vector3(518.012, 21.1816, 401.624);
	showWin =false;
}
function mediumClick()
{
	transform.position = Vector3(508.474 , 65.2473, 408.64);
	showWin= false;
}
function hardClick()
{
	transform.position = Vector3(506.02,82.6933, 412.94);
	showWin= false;
}

function winResult()
{
	showWin= true;
}
function loseResult()
{
	showWin= false;
}

function OnGUI () {
	if(showWin){
	var wf = PlayerPrefs.GetInt("WF");
    GUI.Label (Rect (90, 50, 150, 150), "Win Easy: " + wf);
    }
}