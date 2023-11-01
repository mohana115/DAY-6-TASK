//1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
class Movie{
   constructor(title,studio,rating ="pG"){
      this.title = title;
      this.studio = studio;
      this.rating = rating;
   }
}
const Movie1 = new Movie("Casino Royale","Econ Productions" );
const Movie2 = new Movie("Casino Royale","Econ Productions","PG13" );
console.log(Movie1.title);
console.log(Movie1.studio);
console.log(Movie1.rating);
console.log(Movie2.rating);


//2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
class circle{
   constructor(radius,color){
      this.radius = radius;
      this.color = color;
   }
   get radiusCircle(){
      return this.radius;
   }
   set radiusCircle(radius){
      this.radius = radius;
   }
   get colorCircle(){
      return this.color;
   }
   set colorCircle(color){
      this.color = color;
   }
   get toString(){
      return `"circle[radius ${this.radius},color =${this.color}]"`
   }
   get areaCircle(){
      return Math.PI*this.radius;
   }get circumferenceCircle(){
      return 2 * Math.PI * this.radius;
   }
}
var obj1 = newCircle(1.0,"red");
obj1.radiusCircle = 2.2;
console.log(obj1.colorCircle);
obj1.colorCircle = "blue";
console.log(obj.colorCircle);
console.log(obj1.toString);
console.log(obj1.areaCircle);
console.log(circumference);

//3. write a "person" class to hold all the details

 class Person{
        constructor(name,age,gender,salary){
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.salary = salary;
         }
    }
    const person1 = new Person("dhiya","6","female","70");
    
    console.log(person1.name);
    console.log(person1.age);
    console.log(person1.gender);
    console.log(person1.salary);
    