using UnityEngine;
using System.Collections;

public class DetectClick : MonoBehaviour {

	public void Click()
    {
        Debug.Log(this.gameObject.name + " has been clicked");
    }
}
