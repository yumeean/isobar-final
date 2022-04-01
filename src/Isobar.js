import React, {useRef, useEffect} from "react";
import './Isobar.css'



const Isobar = ({ colorTable, lowLabel, highLabel, titleLabel }) => {
    let ref = useRef();
    

    useEffect(() => {
      let newArr = colorTable.sort((a, b) => b[0] - a[0]);
      let canvas = ref.current;
      let ctx = canvas.getContext("2d");
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      let grd = ctx.createLinearGradient(0, 0, 0, window.innerHeight);
      for (let i of newArr) {
        grd.addColorStop(i[0] / 100, `rgba(${i[3]},${i[2]},${i[1]})`);
      }
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }, [colorTable]);
  
    return (
        
      <div class='wrapper'>
        <canvas ref={ref} />
        <div className="isobar-labels">
            <div>{lowLabel}</div>
            <div>{titleLabel}</div>
            <div>{highLabel}</div>
        </div>
      </div>
        
        
    );
  };
export default Isobar;

