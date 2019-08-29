import 'dart:convert' show JSON;

class Point{
  int x;
  int y;
  Point(int x,int y){
    this.x = x;
    this.y = y;
  }
  Point.fromJson(Map json) {
    x = json['x'];
    y = json['y'];
  }
  toString(){
    return "x 是 $x，y是 ${y}";
  }
}

main(){
  var jsonData = JSON.decode('{"x":1, "y":2}');

  var p1 = new Point(2,2);
  print(p1.toString());

var p2 = new Point.fromJson(jsonData);
print(p2.toString());
}
