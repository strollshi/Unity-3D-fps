private var _h_ : Help;
private var _g_ : GUI;
private var _q_ : Queue;

@script RequireComponent(Rigidbody)

class Bala extends FPSMonoBehaviour {

	public var speed : float = 5F;
	private var startTime : float;

	function Start () {
		startTime = Time.time;
	}
	
	function FixedUpdate () {
		_rigidbody.velocity = (transform.forward * speed);

		if (Time.time - startTime > 5F) {
			GameObject.Destroy(gameObject);
		}
	}

	function OnCollisionEnter(collision : Collision) {
		GameObject.Instantiate(Resources.Load("Explosion"), transform.position, transform.rotation);
		GameObject.Destroy(gameObject);
	}

}