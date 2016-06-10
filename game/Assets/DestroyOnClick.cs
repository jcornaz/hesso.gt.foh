using UnityEngine;
using System.Collections;

public class DestroyOnClick : MonoBehaviour {
    
	public void Click()
    {
        this.gameObject.SetActive(false);
    }
}
