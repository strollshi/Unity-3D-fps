#pragma strict

private var _h_ : Help;
private var _g_ : GUI;
private var _q_ : Queue;

class FPSMonoBehaviour extends MonoBehaviour {

	@HideInInspector
	protected var _animation : Animation;

	@HideInInspector
	protected var _audio : AudioSource;

	@HideInInspector
	protected var _rigidbody : Rigidbody;

	function Awake () {
		_animation = GetComponent(Animation);
		_audio = GetComponent(AudioSource);
		_rigidbody = GetComponent(Rigidbody);
	}

}