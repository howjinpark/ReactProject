import './App.css';
import { Component } from 'react';
import Customer from './components/Customers';


const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' :'001230',
  'gender' :'남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name' : '홍길동2',
  'birthday' :'001130',
  'gender' :'남자',
  'job': '고등학생'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name' : '홍길동3',
  'birthday' :'001030',
  'gender' :'남자',
  'job': '중학생'
}
];

class App extends Component{
  render(){
    return(
      <div>
      {
        customers.map(c=>{
          return(
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }
      </div>
    );
  }
}

export default App;
