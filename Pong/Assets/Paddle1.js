#pragma strict

var speed = 5;

function Start () {

}

function Update () {

	if (Input.GetKey(KeyCode.W)) {
		transform.Translate(Vector2.up*Time.deltaTime*speed);
	} if (Input.GetKey(KeyCode.S)) {
		transform.Translate(Vector2.down*Time.deltaTime*speed);
	} if (Input.GetKey(KeyCode.A)) {
		transform.Translate(Vector2.left*Time.deltaTime*speed);
	} if (Input.GetKey(KeyCode.D)) {
		transform.Translate(Vector2.right*Time.deltaTime*speed);
	}

	if (transform.position.y > 3.25) {
		transform.position.y = 3.25;
	} else if (transform.position.y < -3.25) {
		transform.position.y = -3.25;
	}
}