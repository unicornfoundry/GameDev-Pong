#pragma strict

var score1: int;
var score2: int;
var player1: GameObject;
var player2: GameObject;

function Start () {
	Launch(150, 150);
}

function Update () {
	if (transform.position.x > 10) {
		Launch(150,150);
		score1 += 1;
		Debug.Log("Player 1 Scored!\nPlayer 1 = " + score1 + " | Player 2 = " + score2);
	} else if (transform.position.x < -10) {
		Launch(150,150);
		score2 += 1;
		Debug.Log("Player 2 Scored!\nPlayer 1 = " + score1 + " | Player 2 = " + score2);
	}
}

function Launch (x: int, y: int) {
	var random: int = Random.Range(0,4);
	switch (random) {
		case 0:
			break;
		case 1:
			y = y*-1;
			break;
		case 2:
			x = x*-1;
			break;
		case 3:
			x = x*-1;
			y = y*-1;
			break;
	}
	GetComponent.<Rigidbody2D>().velocity = Vector2.zero;
	transform.position = new Vector2(0,0);
	player1.transform.position.y = 0;
	player2.transform.position.y = 0;
	yield WaitForSeconds(2);
	GetComponent.<Rigidbody2D>().AddForce(new Vector2(x,y));
}