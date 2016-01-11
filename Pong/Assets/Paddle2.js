#pragma strict

var speed = 5;

function Start () {

}

function Update () {

	if (Input.GetKey(KeyCode.UpArrow)) {
		transform.Translate(Vector2.up*Time.deltaTime*speed);
	} if (Input.GetKey(KeyCode.DownArrow)) {
		transform.Translate(Vector2.down*Time.deltaTime*speed);
	}

	if (transform.position.y > 3.25) {
		transform.position.y = 3.25;
	} else if (transform.position.y < -3.25) {
		transform.position.y = -3.25;
	}
}