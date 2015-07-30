private var _h_ : Help;
private var _g_ : GUI;
private var _q_ : Queue;

@script RequireComponent(Animation)
@script RequireComponent(AudioSource)

class Pistola extends FPSMonoBehaviour {

	function Disparar(t : Transform) {
		if (!_animation.isPlaying) {
			_animation.Play();
			_audio.Play();
			GenerarBala(t);
		}
	}

	function GenerarBala(t : Transform) {
		GameObject.Instantiate(Resources.Load("Bala"), t.position, t.rotation);
	}

}