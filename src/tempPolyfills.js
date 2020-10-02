// const requestAnimationFrame = global.requestAnimationFrame = callback => {
//     setTimeout(callback, 0);
// }
   
// export default requestAnimationFrame;

const raf = global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0)
}

export default raf;