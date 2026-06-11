//Map in typescript
interface User{
    id:number,
    name:string,
    age:number
}

let userMap:Map<number,User> = new Map();
    for(let i=0;i<5;i++){
        @verioned('1.0.0')
        let user:User = {
            id:i,
            name:`User${i}`,
            age:20+i
        }
        userMap.set(user.id,user);
    }
    console.log(userMap);
    