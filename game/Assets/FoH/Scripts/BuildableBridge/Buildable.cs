using UnityEngine;
using System.Collections;

public class Buildable : MonoBehaviour {

    private new BoxCollider collider;

    public void Build()
    {
        this.GetComponent<Collider>().enabled = true;
        this.GetComponent<Renderer>().enabled = true;
    }
}
