use CHGL;
use CyclicDist;

var v1 : owned Vector(int)?;
v1 = new owned Vector(int, 10);
v1.append(1);
writeln(v1[0]);
