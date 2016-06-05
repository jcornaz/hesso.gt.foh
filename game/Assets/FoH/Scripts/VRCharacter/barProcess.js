#pragma strict




 var progress : float = 0;
var pos : Vector2 = new Vector2(20,40);
var size : Vector2 = new Vector2(60,20);
var progressBarEmpty : Texture2D;
var progressBarFull : Texture2D;

 function OnGUI()
 {
 
    GUI.DrawTexture(Rect(pos.x, pos.y, size.x, size.y), progressBarEmpty);
    GUI.DrawTexture(Rect(pos.x, pos.y, size.x * Mathf.Clamp01(progress), size.y), progressBarFull);
 }


function Start () {

}

function Update()
 {
     progress = Time.time * 0.05;
 }