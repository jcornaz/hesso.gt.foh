using UnityEngine;
using System.Collections;

public class BuildOnClick : MonoBehaviour {

    private new Collider collider;

    void Start()
    {
        this.collider = this.GetComponent<Collider>();
    }

    public void Click()
    {
        this.transform.parent.GetComponentInChildren<Buildable>().Build();
        this.Disable();
    }

    public void Enable()
    {
        this.collider.enabled = true;
    }

    public void Disable()
    {
        this.collider.enabled = false;
    }
}
