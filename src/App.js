import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react';

function App() {
  const [arr, setArr] = useState([]);
  let newArr = [];
  let thirdArr = [];
  useEffect(() => {//一開始先跑一次
    for (let x = 2; x <= 9; x++) {// (x * i 跑九次)跑8次
      for (let i = 1; i <= 9; i++) {//x * i 跑九次
        newArr.push(`${x} x ${i} = ${x * i}`);//一開始建立2~9的九九乘法表 存到newArr
      }
    }
    for (let i = 0; i < newArr.length; i += 9) {
      thirdArr.push(newArr.slice(i, i + 9));//分成8個 存入thirdArr 形成一個二維陣列
    }
    setArr(thirdArr);//用set存入arr 不然react不會刷新
  }, [])




  return (
    <div className="App">
      <div className='row g-0'
        style={{
          backgroundColor: "#F0F0F0",
          padding: '80px 85px 80px 85px',//上 右 下 左
          columnGap: "30px",//row col的間隙
          rowGap: '40px'
        }}>
        <div className=' col-4 logo d-flex position-relative'
          style={{
            maxWidth: '350px'//順位問題 下在這邊順位比較高（比較優先） 外部css可能會被boostrap蓋過去
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
                maxWidth: '350px'//maxwidth 保留col-4的排版 然後設定col-4的大小
              }}>
              <div className='ninenine-card  d-flex flex-column flex-wrap'>
                {/* flex-wrap 換行 要注意下在哪一層*/}
                {/* border會吃掉2px空間 可能導致跑版 要注意 */}
                <div className='big-number d-flex align-items-center'>
                  {i + 2}
                </div>
                {nums.map((num) => {
                  return (
                    <div className=' small-number text-nowrap '>
                      {/* text-nowrap 不換行 */}
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
