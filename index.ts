let nextPizzaId: number = 1;

type Pizza = {
  id: number
  name: string
  price: number
}

type Address = {
  street: string
  city: string
  country: string

}
type Order = {
  id: number
  pizza: Pizza
  status: "Ordered" | "unOrdered"
  process?: "completed" | "uncomplete"
  address?: Address
}

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "Margherita", price: 10 },
  { id: nextPizzaId++, name: "Chicken Tikka", price: 12 },
  { id: nextPizzaId++, name: "Farmhouse", price: 15 },
  { id: nextPizzaId++, name: "Peppy Paneer", price: 14 }
];

let nextOrderid: number = 1;
let cashInRegister: number = 100;
const orderQueue: Order[] = []


function addNewPizza(pizzaObj: Omit<Pizza, "id">):Pizza {
    const pizza: Pizza = {
      id: nextPizzaId++,
      ...pizzaObj
    }
    menu.push(pizza);
    return pizza
}

function placeOrder(pizzaName: string): Order | undefined {
  const selectedPizza = menu.find(pizza => pizza.name === pizzaName)
  if (!selectedPizza) {
    return undefined
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = { id: nextOrderid++, pizza: selectedPizza, status: "Ordered" };
  orderQueue.push(newOrder)
  return newOrder
}


function completeOrder(orderId: number): Order | undefined {
  const order = orderQueue.find((item) => item.id === orderId);
  if (!order) {
    return
  }
  order.process = "completed";
  return order;
}

function setOrderAddress(orderId: number) {
  const order = orderQueue.find((item) => item.id === orderId);
  if (!order) return
  order.address = {
    city: "mumbai",
    country: "india",
    street: "taj hotel"
  }
}


function getPizzaDetail(identifier: string | number): Pizza | void {
  if (typeof identifier === "string") {
    return menu.find((item) => item.name === identifier)
  } else if (typeof identifier === "number") {
    return menu.find((item) => item.id === identifier)
  } else return console.log("the passed paramter should be either id or name")
}



addNewPizza(({name:"chicken bacon pizza", price: 12 }))
placeOrder("Margherita")
placeOrder("Farmhouse")
placeOrder("Chicken Tikka")
setOrderAddress(1)

completeOrder(1)
completeOrder(2)
completeOrder(3)
setOrderAddress(3)
setOrderAddress(2)

console.log(menu)
console.log(orderQueue)

