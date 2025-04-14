import SMenueBtn from "./SMenueBtn";

export default function SideMenue() {

  const btns=[
    {id:1,
      btnTitle: 'الأكثر قرأه',
      btnBody:
      <div>
        <span>🙂🙂🙂</span>
      </div>   
    },
    {
      id:2,
      btnTitle: 'جديد',
      btnBody:
        <img
        style={{width:'100px'}} 
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ59K67oirl12L6W9oz741gTAdtg3KzRRDF0QAUid6GnGYnHc-dnpnwQmtOY0WSq54CSb8&usqp=CAU" alt="" />
      
    },
    {
      id:3,
      btnTitle: 'مقالات مميزه'
    }
  ]


 


  const btnList= btns.map((btn)=>{
    return <SMenueBtn key={btn.id} title={btn.btnTitle}>
    <div>
      {btn.btnBody}
    </div>
  </SMenueBtn>
  })





  return (
    <div
      style={{
        border: "5px solid teal",
        padding: "10% 18%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {btnList}
{/* 
      <SMenueBtn title='الأكثر قرأه'>
        <div>
          <span>🙂🙂🙂</span>
        </div>
      </SMenueBtn>
      <SMenueBtn title='جديد'> 
        <div>
          <img
          style={{width:'100px'}} 
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ59K67oirl12L6W9oz741gTAdtg3KzRRDF0QAUid6GnGYnHc-dnpnwQmtOY0WSq54CSb8&usqp=CAU" alt="" />
        </div>
      </SMenueBtn>
      <SMenueBtn title='مقالات مميزه'/>
      <SMenueBtn title=''/>
      <SMenueBtn /> */}
   
    </div>
  );
}
