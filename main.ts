type User = {
  id: number
  username: string
  role: "member" | "contributor" | "admin"
}

type updateUser = Partial<User>

const users: User[] = [
  { id: 1, username: "john_doe", role: "member" },
  { id: 2, username: "jane_smith", role: "contributor" },
  { id: 3, username: "alice_jones", role: "admin" },
  { id: 4, username: "charlie_brown", role: "member" },

];

function updateUser(id: number, updates: updateUser) {
  const user = users.find((item)=> item.id === id)
  if(!user) return
  Object.assign(user, updates)

}

function addNewUser(newUser:any){
  
 users.push(newUser)
 return 
}

console. log(users)