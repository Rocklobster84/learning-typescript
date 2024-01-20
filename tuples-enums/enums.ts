// Enums allow us to define a set of named constants. We can give these constants numeric or string values

// numeric enums
enum Responses {
  no, //1
  yes,//2
  maybe//3
}
enum Responses {
  no = 2, //2
  yes, //3
  maybe //4
}
enum Responses {
  no = 2, //2
  yes = 10, //10
  maybe = 24, //24
}

// String enums
enum Responses {
  no = 'No',
  yes = 'Yes',
  maybe = 'Maybe'
}
//Heterogenous Enums
enum Responses {
  no = 0,
  yes = 1,
  maybe = 'Maybe'
}

/////////

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED
}
const newStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus){
  return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.SHIPPED)

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right"
}

// Enums compile to a var and a function. They are basically a behind the scenes object. Aren't very popular.

// Adding const in front of enum erases all new code created in JS and defaults to the assigned number values. Puts in comment like /* OrderStatus.PENDING */

const enum Stuff {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED
}

const order = {
  orderNumber: 948485,
  status: OrderStatus.PENDING //0
}