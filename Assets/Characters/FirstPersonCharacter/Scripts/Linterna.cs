using UnityEngine;
using System.Collections;

public class Linterna : MonoBehaviour {
	private Light estadoLinterna;
	// Se inicializa la variable que guarda el estado activado/desactivado del componente Light de la linterna
	void Start () {
		estadoLinterna = GetComponent<Light>();
	}
	
	// Se comprueba si se ha pulsado la tecla L y si es asi se cambia el estado del componente Light la linterna
	void Update () {
		if(Input.GetKeyUp(KeyCode.L))
		{
			estadoLinterna.enabled = !estadoLinterna.enabled;
		}
	}
}
