import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react';

function App() {
  const [arr, setArr] = useState([]);
  let newArr = [];
  let thirdArr = [];
  useEffect(() => {
    for (let x = 2; x <= 9; x++) {
      for (let i = 1; i <= 9; i++) {
        newArr.push(`${x} x ${i} = ${x * i}`);
      }
    }
    for (let i = 0; i < newArr.length; i += 9) {
      thirdArr.push(newArr.slice(i, i + 9));
    }
    console.log(thirdArr);
    setArr(thirdArr);
  }, [])




  return (
    <div className="App">
      <div className='row g-0'
        style={{
          backgroundColor: "#F0F0F0",
          padding: '80px 85px 80px 85px',//上 右 下 左
          columnGap: "30px",
          rowGap: '40px'
        }}>
        <div className=' col-4 logo d-flex position-relative'
          style={{
            maxWidth: '350px'//順位問題 下在這邊順位比較高（比較優先）
          }}>
          <div className='x-box'>
            x
          </div>
          <div className='x-box position-absolute top-0 end-0'>
            x
          </div>
          <div className=' inside-logo d-flex flex-column justify-content-center'>
            <div className='logo-text-1'>
              九九乘法表
            </div>
            <div className='logo-text-2'>
              MULTIPLICATION CHART
            </div>
          </div>
          <div className='x-box position-absolute bottom-0 start-0'>
            x
          </div>
          <div className='x-box position-absolute bottom-0  end-0'>
            x
          </div>
        </div>
        {arr.map((nums, i) => {
          return (
            <div key={i} className='col-4'
              style={{
                maxWidth: '350px'
              }}>
              <div className='ninenine-card  d-flex flex-column flex-wrap'>
                <div className='big-number d-flex align-items-center'>
                  {i + 2}
                </div>
                {nums.map((num) => {
                  return (
                    <div className=' small-number text-nowrap '>
                      {num}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <footer>
        <span className='footer '>
          Copyright © 2019 HexSchool. All rights reserved.
        </span>
      </footer>
    </div>
  );
}

export default App;
