using UnityEngine;
using System.Collections;

public class ActivateBuilding : MonoBehaviour {

    private BuildOnClick clickZone;

    void Start()
    {
        this.clickZone = this.transform.parent.GetComponentInChildren<BuildOnClick>();
    }

    void OnTriggerEnter(Collider collider)
    {
        this.clickZone.Enable();
    }

    void OnTriggerExit(Collider collider)
    {
        this.clickZone.Disable();
    }
}
