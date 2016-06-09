#pragma strict

var showWin:boolean= false;
var showLose:boolean= false;
public var Score:GameObject;

function Start () {

}

function Update () {

}
function easyClick()
{	
	transform.position = Vector3(518.012, 21.1816, 401.624);
	showWin =false;
	showLose = false;
	Score.GetComponent.<TextMesh>().text = "";
}
function mediumClick()
{
	transform.position = Vector3(508.474 , 65.2473, 408.64);
	showWin= false;
	showLose = false;
	Score.GetComponent.<TextMesh>().text = "";
}
function hardClick()
{
	transform.position = Vector3(506.02,82.6933, 412.94);
	showWin= false;
	showLose = false;
	Score.GetComponent.<TextMesh>().text = "";
}

function winResult()
{
	showWin= false;
	showLose = false;
	Score.GetComponent.<TextMesh>().text = "Easy: " + PlayerPrefs.GetInt("WF") + " Medium: " +PlayerPrefs.GetInt("WM") + " Hard: " +PlayerPrefs.GetInt("WD") +" Super: 0" ;
}
function loseResult()
{
	showWin= false;
	showLose = false;
	Score.GetComponent.<TextMesh>().text = "Lose: " + PlayerPrefs.GetInt("L");
}
function NBridgClick()
{
	transform.position = Vector3(455.63,98.444,376.57);
	Score.GetComponent.<TextMesh>().text = "";
}

function Rest()
{
	transform.position = Vector3(522.386 ,93.53, 426.851);
}

function OnGUI () {
	if(showWin){
	var wf = PlayerPrefs.GetInt("WF");
    GUI.Label (Rect (90, 50, 150, 150), "Win Easy: " + wf);

    var wm = PlayerPrefs.GetInt("WM");
    GUI.Label (Rect (90, 80, 150, 150), "Win Medium: " + wm);

    var wd = PlayerPrefs.GetInt("WD");
    GUI.Label (Rect (90, 110, 150, 150), "Win Hard: " + wd);


    }
    if(showLose)
    {
    	var l = PlayerPrefs.GetInt("L");
    	GUI.Label (Rect (90, 50, 150, 150), "Lose: " + l);
    }
}