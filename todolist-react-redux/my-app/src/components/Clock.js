import React, { useEffect, useState } from "react"
import '../css_style/Clock.css'

function Clock(){
  const [date, setDate] = useState(new Date());

  // 不需要使用链式setTimeout
  useEffect(() =>{
    setTimeout(()=>tick(), 1000);
  }, [date]);// 第二个参数设置为date，只有date发生变化时才会调用useEffict,优化性能

  function tick(){
    setDate(new Date());
  }

  return(
    <div className = 'time'>
      Current time: {date.toLocaleString()}
    </div>
  )
}

export default  Clock;