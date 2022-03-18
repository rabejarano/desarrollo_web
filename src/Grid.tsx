
import './Grid.css';

function Space({ space }: { space?: number }) {
  return <div style={{ width: space ?? 8 }} />
}


export default function Grid() {
  //  return <div className="childrens">
  //   <div className='child1' />
  // </div>

  // return <div className="areas">
  //   <div className='area1' />
  //   <div className='area2' />
  //   <div className='area3' />
  //   <div className='area4' />
  // </div>

  return <div className="container">
  <div className='elmt1'/>
  <div className='elmt2'/>
  <div className='elmt3'/>
  <div className='elmt4'/>
  <div className='elmt5'/>
  <div className='elmt6'/>
  </div>
}