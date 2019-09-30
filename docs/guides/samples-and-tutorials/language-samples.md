# Học Dart thông qua xem ví dụ

Phương pháp này sẽ giới thiệu ngắn gọn về ngôn ngữ dart cho những ai thích học qua ví dụ. Bạn cũng có thể học ngôn ngữ cụ thể và xem các thư viện, hoặc [Dart cheatsheet codelab](https://dart.dev/codelabs/dart-cheatsheet) tại:

> [Language tour](https://dart.dev/codelabs/dart-cheatsheet)

> [Library tour](https://dart.dev/codelabs/dart-cheatsheet)

## Hello World
Mọi ứng dụng đều cần sử dụng hàm **main()**. Để hiển thị văn bản trên console bạn có thẻ sử dụng hàm **print()**:
```dart
void main() {
    print('Hello World');
}
```
## Kiểu dữ liệu (Variables)
Trong dart hầu hết các biến không cần kiểu dữ liệu rõ ràng, nhờ vào suy luận kiểu (type inference):
```dart
var name = 'Voyager I';
var year = 1977;
var antennaDiameter = 3.7;
var flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
var image = {
  'tags': ['saturn'],
  'url': '//path/to/saturn.jpg'
};
```
> [Đọc thêm](https://www.google.com/) các kiểu dữ liệu trong Dart: bao gồm các kiểu giá trị mặc định default, final, const và static.
## Các câu lệnh
Dart hỗ trợ các kiểu câu lệnh như:
```dart
if (year >= 2001) {
  print('21st century');
} else if (year >= 1901) {
  print('20th century');
}

for (var object in flybyObjects) {
  print(object);
}

for (int month = 1; month <= 12; month++) {
  print(month);
}

while (year < 2016) {
  year += 1;
}
```
> [Đọc thêm](https://www.google.com/) về các câu lệnh trong Dart gồm break và continue, switch và case, và assert.
## Các hàm (Functions)
Chúng ta định nghĩa cụ thể kiểu cho từng hàm và trả về kết quả:
```dart
int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

var result = fibonacci(20);
```
Cú pháp nhanh arrow functions **=>** *(arrow)* có ích cho các hàm chứa một câu lệnh. Cú pháp này đặc biệt hữu ích khi truyền các hàm ẩn danh dưới dạng đối số:
```dart
flybyObjects.where((name) => name.contains('turn')).forEach(print);
```
Bên cạnh việc hiển thị một hàm ẩn danh (đối số tới where ()), đoạn code này cho thấy rằng bạn có thể sử dụng một hàm làm đối số: hàm print () là một đối số cho hàm forEach ().

> [Đọc thêm](https://www.google.com/) về các hàm trong Dart, bao gồm các tham số tùy chọn, giá trị tham số mặc định.
## Comments
Trong Dart chúng ta comments bắt đầu với **//**
```dart
// This is a normal, one-line comment.

/// This is a documentation comment, used to document libraries,
/// classes, and their members. Tools like IDEs and dartdoc treat
/// doc comments specially.

/* Comments like these are also supported. */
```
> [Đọc thêm](https://www.google.com/) về các kiểu Comments ​​trong Dart, bao gồm tài liệu công cụ thử hiện.
## Imports
Để truy xuất APIs được định nghĩa trong các thư viện khác chúng ta sử dụng **import**.
```dart
// Importing core libraries
import 'dart:math';

// Importing libraries from external packages
import 'package:test/test.dart';

// Importing files
import 'path/to/my_other_file.dart';
```

> [Đọc thêm](https://www.google.com/) về thư viện và tính khả dụng trong Dart, including library prefixes, show and hide, and lazy loading through the deferred keyword.

## Classes
Đây là một ví dụ về một lớp có ba thuộc tính, hai hàm tạo và một phương thức. Một trong những thuộc tính không thể thiết lập (set) trực tiếp do đó nó được định nghĩa bằng cách sử dụng phương thức getter (thay vì một biến).
```dart
class Spacecraft {
  String name;
  DateTime launchDate;

  // Constructor, with syntactic sugar for assignment to members.
  Spacecraft(this.name, this.launchDate) {
    // Initialization code goes here.
  }

  // Named constructor that forwards to the default one.
  Spacecraft.unlaunched(String name) : this(name, null);

  int get launchYear =>
      launchDate?.year; // read-only non-final property

  // Method.
  void describe() {
    print('Spacecraft: $name');
    if (launchDate != null) {
      int years =
          DateTime.now().difference(launchDate).inDays ~/
              365;
      print('Launched: $launchYear ($years years ago)');
    } else {
      print('Unlaunched');
    }
  }
}
```
Chúng ta có thể sử dụng lớp **Spacecraft** như sau:
```dart
var voyager = Spacecraft('Voyager I', DateTime(1977, 9, 5));
voyager.describe();

var voyager3 = Spacecraft.unlaunched('Voyager III');
voyager3.describe();
```
> [Đọc thêm](https://www.google.com/) về các lớp trong Dart, bao gồm danh sách khởi tạo, từ khóa **new** và **const**, redirecting constructors, **factory** constructors, getters, setters, và nhiều hơn nữa.
## Kế thừa
Dart có đơn kế thừa:
```dart
class Orbiter extends Spacecraft {
  num altitude;
  Orbiter(String name, DateTime launchDate, this.altitude)
      : super(name, launchDate);
}
```
> [Đọc thêm](https://www.google.com/) về việc mở rộng các lớp, @override và hơn thế nữa.
## Mixins
Mixins là một cách sử dụng lại code trong nhiều lớp phân cấp. Lớp sau đây có thể hoạt động như một mixin:
```dart
class Piloted {
  int astronauts = 1;
  void describeCrew() {
    print('Number of astronauts: $astronauts');
  }
}
```
Để thêm mixin vào một lớp, chỉ cần kế thừa lớp với mixin với từ khóa **with**.
```dart
class PilotedCraft extends Spacecraft with Piloted {
  // ···
}
```
**PilotedCraft** now has the **astronauts** field as well as the **describeCrew()** method.
> [Đọc thêm](https://www.google.com/) về mixins.
## Interfaces và abstract classes
Dart không có từ khóa **interface**, thay vào đó mọi classes ngầm định nghĩa một interface. Vì vậy bạn có thể implement bất kì class nào:
```dart
class MockSpaceship implements Spacecraft {
  // ···
}
```
> [Đọc thêm](https://www.google.com/) về implicit interfaces.
Bạn có thể tạo một lớp trừu tượng để extended (hoặc implemented) bởi một lớp cụ thể. Các lớp trừu tượng có thể chứa các phương thức trừu tượng (với các bodies rỗng).
```dart
abstract class Describable {
  void describe();

  void describeWithEmphasis() {
    print('=========');
    describe();
    print('=========');
  }
}
```
Bất kì lớp nào kết thừa **Describable** đều có phương thức **describeWithEmphasis()**, which calls the extender’s implementation of **describe()**
> [Đọc thêm](https://www.google.com/) về lớp các trừu tượng và phương thức
## Async
Để tránh callback hell và code của bạn dễ đọc hơn chúng ta sử dụng **async** và **await**
```dart
const oneSecond = Duration(seconds: 1);
// ···
Future<void> printWithDelay(String message) async {
  await Future.delayed(oneSecond);
  print(message);
}
```
Phương thức trên tương đương với:
```dart
Future<void> printWithDelay(String message) {
  return Future.delayed(oneSecond).then((_) {
    print(message);
  });
}
```
Như ví dụ phía trên, **async** và **await** giúp code bất đồng bộ trở lên dễ đọc hơn
```dart
Future<void> createDescriptions(Iterable<String> objects) async {
  for (var object in objects) {
    try {
      var file = File('$object.txt');
      if (await file.exists()) {
        var modified = await file.lastModified();
        print(
            'File for $object already exists. It was modified on $modified.');
        continue;
      }
      await file.create();
      await file.writeAsString('Start describing $object in this file.');
    } on IOException catch (e) {
      print('Cannot create description for $object: $e');
    }
  }
}
```
Bạn có thể sử dụng <b>async*</b> cung cấp cho bạn một cách hay, dễ đọc để xây dựng các luồng.
```dart
Stream<String> report(Spacecraft craft, Iterable<String> objects) async* {
  for (var object in objects) {
    await Future.delayed(oneSecond);
    yield '${craft.name} flies by $object';
  }
}
```
> [Đọc thêm](https://www.google.com/) về hỗ trợ bất đồng bộ, bao gồm async functions, Future, Stream và vòng lặp bất đồng bộ (await for).
## Exceptions
Đê bắt lỗi(exceptions) chúng ta sử dụng throw:
```dart
if (astronauts == 0) {
  throw StateError('No astronauts.');
}
```
Để băt(catch) exception, sử dụng câu lệnh **try on** or **catch**(hoặc cả hai):
```dart
try {
  for (var object in flybyObjects) {
    var description = await File('$object.txt').readAsString();
    print(description);
  }
} on IOException catch (e) {
  print('Could not describe object: $e');
} finally {
  flybyObjects.clear();
}
```
Chú ý rằng đoạn code phía trên là bất đồng bộ, **try** thực hiện trên cả code đồng bộ và code bất đồng bộ **async** function.
> [Đọc thêm](https://www.google.com/) về exceptions gồm stack traces, **rethrow** và sự khác nhau giữa Error và Exception
## Orther topics
Có nhiều ví dụ code ở [Học ngôn ngữ](https://www.google.com/) và [Thư viện](https://www.google.com/). Bạn cũng có thể xem tại > Dart API reference, [Dart API reference](https://www.google.com/) nơi chứa nhiều ví dụ