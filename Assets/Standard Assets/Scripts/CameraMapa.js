#pragma strict

private var _h_ : Help;
private var _g_ : GUI;
private var _q_ : Queue;

public var player : Transform;

function Start () {

}

function LateUpdate () {
	transform.position.x = player.position.x;
	transform.position.z = player.position.z;
	transform.rotation.eulerAngles.y = player.rotation.eulerAngles.y;
}