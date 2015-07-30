#pragma strict

private var _h_ : Help;
private var _g_ : GUI;
private var _q_ : Queue;

class Singleton extends MonoBehaviour { 

	private static var _instance : Singleton;
	private static var _i : Singleton;

	public static function Instance() : Singleton { 
		if (_instance == null)
			_instance = _i; 
		return _instance;
	}

	function Awake () { 
		_i = this;
	}
}