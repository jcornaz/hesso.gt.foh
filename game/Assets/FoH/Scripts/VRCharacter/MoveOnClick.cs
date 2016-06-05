using UnityEngine;
using System.Collections;
using System;

[RequireComponent(typeof(CharacterController))]
public class MoveOnClick : MonoBehaviour {

    public float speed = 1.4f;

    private Transform leftEyeTransform;
    private Transform rightEyeTransform;
    private CharacterController controller;
    private GazeInputModule inputModule;
    private bool isWalking = false;

	void Start () {
        this.controller = this.GetComponent<CharacterController>();
        this.leftEyeTransform = GameObject.FindGameObjectWithTag("LeftEye").transform;
        this.rightEyeTransform = GameObject.FindGameObjectWithTag("RightEye").transform;
        this.inputModule = GameObject.FindGameObjectWithTag("EventSystem").GetComponent<GazeInputModule>();
    }
	
	void Update () {
        Vector3 speed = Vector3.zero;

        if ( this.controller.isGrounded && Input.GetAxis("Fire1") > 0.5 && (!this.inputModule.IsPointerOverGameObject(0) || this.isWalking) )
        {
            speed = this.speed * this.GetDirection();
            speed.y = 0;
            this.isWalking = true;
        } else
        {
            this.isWalking = false;
        }

        this.controller.SimpleMove(speed);
    }

    private Vector3 GetDirection()
    {
        return (this.leftEyeTransform.forward + this.rightEyeTransform.forward).normalized;
    }
}
