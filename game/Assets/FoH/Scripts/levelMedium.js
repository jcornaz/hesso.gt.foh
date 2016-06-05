#pragma strict


var style : GUIStyle =  new GUIStyle();

var isWalk : boolean = true;
var wait : float;
var timeLeft : int = 0;


var drawM1 :boolean = false;
var drawM2 :boolean = false;
var drawM3 :boolean = false;


//bridge medium
var bridgeM1 : GameObject; 
var bridgeM2 : GameObject; 
var bridgeM3 : GameObject; 
var rendererM1 : Renderer;
var rendererM2 : Renderer;
var rendererM3 : Renderer;

var colliderM1 : Collider;
var colliderM2 : Collider;
var colliderM3 : Collider;



function Start () {


	
 style.normal.textColor = Color.red;


 //for collision detection
 bridgeM1  = GameObject.Find("Bridg M1/Cube");
 rendererM1 = bridgeM1.GetComponent("Renderer");
colliderM1 = bridgeM1.GetComponent("Collider");


 bridgeM2  = GameObject.Find("Bridg M2/Cube");
 rendererM2 = bridgeM2.GetComponent("Renderer");
 colliderM2 = bridgeM2.GetComponent("Collider");


 bridgeM3  = GameObject.Find("Bridg M3/Cube");
 rendererM3 = bridgeM3.GetComponent("Renderer");
 colliderM3 = bridgeM3.GetComponent("Collider");


}

function OnGUI () {
	if(!isWalk){
    GUI.Label (Rect (90, 50, 100, 20), "Wait:" + timeLeft , style);
    }
}

function Update () {

if(isWalk){ // if it true the cat will walk. 
	 
	}
	else
	{ // the cat will stop let the user do something.
	timeLeft= wait - Time.time;

    if (timeLeft < 0){
      timeLeft = 0;
      isWalk = true;

      if(drawM1){
     	 rendererM1.enabled = true;
     	 colliderM1.enabled = true;
     	 }

      if(drawM2){
      	rendererM2.enabled = true;
      	 colliderM2.enabled = true;
     	}

      if(drawM3){
      	rendererM3.enabled = true;
      	 colliderM3.enabled = true;
     	}
     
     }

	}
}

function OnTriggerEnter(col: Collider)
{
	if(col.gameObject.name == "Plane M")
	{
		if(!drawM1){
		isWalk= false;
		wait = Time.time + 5;
	    //rendererM1.enabled = true;
	    drawM1 = true;
		Debug.Log("hi plane M");}
	}
	if(col.gameObject.name == "Plane M1")
	{
	if(!drawM2){
		isWalk= false;
		wait = Time.time + 5;
		drawM2 = true;
	// rendererM2.enabled = true;
		Debug.Log("hi plane M1");
		}
	}
	if(col.gameObject.name == "Plane M2")
	{
	if(!drawM3){
		isWalk= false;
		wait = Time.time + 5;
		drawM3 = true;
		//rendererM3.enabled = true;
		Debug.Log("hi plane M2");
		}
	}
}
