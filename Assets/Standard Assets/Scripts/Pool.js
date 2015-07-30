#pragma strict

private var _h_ : Help;
private var _g_ : GUI;
private var _q_ : Queue;

class Pool extends Singleton {

	public var _bala : GameObject;
	public var _explosion : GameObject;

	public static function Instance() : Pool {
		return super.Instance() as Pool;
	}

	public function CrearBala(t : Transform) : GameObject {
		return CrearGameObject(_bala, t);
	}

	public function CrearExplosion(t : Transform) : GameObject {
		return CrearGameObject(_explosion, t);
	}

	private function CrearGameObject(go : GameObject, t : Transform) : GameObject {
		var objeto : GameObject = GameObject.Instantiate(go, t.position, t.rotation);
		objeto.transform.parent = null;
		objeto.SetActive(true);
		return objeto;
	}

}